// requires ================================================= //
const path = require("path");
const fs = require("fs");

// helpers ================================================== //
function getMapStyles(CSStext) {

    // 1. remove all comments in css text
    const CSStextWithoutComments = CSStext.replaceAll(/(\/\*[\s\S]*?\*\/|\n)/g, "");

    // 2. get styles 
    const styles = CSStextWithoutComments.match(/([^{]+)\{([^}]+)\}/g);

    // 3. generate map css properties by selector
    const mapStyles = new Map();
    for (let style of styles) {

        const startIndexCssProperty = style.indexOf("{");
        const endIndexCssProperty = style.lastIndexOf("}");

        const CSSselectors = style.slice(0, startIndexCssProperty).split(",");
        const CSSproperties = style.slice(startIndexCssProperty + 1, endIndexCssProperty).trim();

        for (let CSSselector of CSSselectors) {

            const isAfterPseudoElement = CSSselector.includes(":after");
            const isBeforePseudoElement = CSSselector.includes(":before");
            const nameClassSelector = CSSselector.match(/(?<=\.)[\s\S]*?(?=\s|:|$)/g)[0];
            const nameStyle = isAfterPseudoElement ? "after" : isBeforePseudoElement ? "before" : "style";

            if (mapStyles.has(nameClassSelector)) {

                let currentMapStyle = mapStyles.get(nameClassSelector);
                if (currentMapStyle[nameStyle]) {
                    currentMapStyle[nameStyle] += " " + CSSproperties;
                } else {
                    currentMapStyle[nameStyle] = CSSproperties;
                }

                mapStyles.set(nameClassSelector, currentMapStyle);

            } else {
                mapStyles.set(nameClassSelector, { [nameStyle]: CSSproperties });
            }
        }

    }

    // 4. return map styles
    return mapStyles;

}
function preprocessingStyles(textReadMeMd) {

    // 1. get tag style contains
    const CSStexts = textReadMeMd.match(/(?<=<style>)[\s\S]*?(?=<\/style>)/g);
    if (CSStexts === null) return textReadMeMd;

    // 2. get map styles
    let MapStyles = new Map();
    for (let CSStext of CSStexts) {
        MapStyles = new Map([...MapStyles, ...getMapStyles(CSStext)]);
    }

    // 3. set styles from map styles
    let newReadMeMd = textReadMeMd.replace(/<style>[\s\S]*?<\/style>/g, "");
    for (let nameClass of MapStyles.keys()) {

        if (!newReadMeMd.includes(`class="${nameClass}"`)) continue;

        const tags = newReadMeMd.match(new RegExp(`<[^>]*\\sclass\\s*=\\s*"${nameClass}"[^>]*>`, "g"));
        if (tags === null) continue;

        const { after, before, style } = MapStyles.get(nameClass);

        for (const tag of tags) {

            let newValueTag = tag;

            if (style) {
                if (newValueTag.includes("style")) {
                    let currentStyle = newValueTag.match(/(?<=style=\")[\s\S]+(?=\")/g)[0];
                    newValueTag = newValueTag.replace(/(?<=style=\")[\s\S]+(?=\")/g, currentStyle + " " + style.replace("\"", "'"));
                    newValueTag = newValueTag.replace(`class="${nameClass}"`, '');
                } else {
                    newValueTag = newValueTag.replace(`class="${nameClass}"`, `style="${style.replace("\"", "'")}"`);
                }
            }

            if (before) {
                newValueTag += `<div style="${before.replace(/\"/g, "'")}"></div>`;
            }
            if (after) {
                newValueTag += `<div style="${after.replace(/\"/g, "'")}"></div>`;
            }

            newValueTag = newValueTag.replace(`class="${nameClass}"`, '');
            newReadMeMd = newReadMeMd.replace(tag, newValueTag);

        }

    }

    const newReadMeMdWithoutClassAttribute = newReadMeMd.replace(/class\s*=\s*"([^"]+)"/g, "");

    return newReadMeMdWithoutClassAttribute;

}
function recursiveExecute(pathToReadMe) {

    // 0. check if file exist
    if (!fs.existsSync(pathToReadMe)) return "";

    // 1. get text readme.me
    let textReadmeFile = fs.readFileSync(pathToReadMe, { encoding: "utf8" });

    // 2. preprocessing styles
    let textReadmeFileWithoutStyleTag = preprocessingStyles(textReadmeFile);

    // 3. get @md imports
    const currentDir = pathToReadMe.replace(/[^\/]+\.md$/g, "");
    const importsMD = textReadmeFileWithoutStyleTag.match(/\<!--\s*@md\s+\"(.*?)"\s*--\>/g);

    if (importsMD) {
        // 4. replace @md imports
        for (let importMD of importsMD) {
            const pathToImportMD = importMD.match(/(?<=@md\s*\")(.*?)(?=\")/g)[0];
            const importMDText = recursiveExecute(currentDir + pathToImportMD);
            textReadmeFileWithoutStyleTag = textReadmeFileWithoutStyleTag.replace(importMD, importMDText);
        }
    }

    // 5. remove comments
    const textReadmeFileWithoutComments = textReadmeFileWithoutStyleTag.replaceAll(/<!--[\s\S]+?-->/g, "");

    return textReadmeFileWithoutComments;

}

// constants ================================================ //
const config = {
    paths: {
        input: path.resolve(__dirname, "./docs/draft.md"),
        output: path.resolve(__dirname, "./README.md")
    }
};

// main ===================================================== //
function main(config) {

    const { paths } = config;

    try {
        const newReadmeMdText = recursiveExecute(paths.input);
        fs.writeFileSync(paths.output, newReadmeMdText, { flag: "w" });
    } catch (error) {
        console.error(
            "К сожалению произошла ошибка в процессе \n",
            error
        );
    }

}
main(config);