<section>

  <h2>Коротко обо мне</h2>

  <p>
    Всем привет!
  </p>
  <p>
    Я frontend-разработчик, котрый увлекается программированием (на данный момент скриптовыми языками) и современными технологиями.
  </p>

</section>

<section>

  <h2>Текущий проект</h2>

  <p>
    Прямо сейчас пишу социальную сеть - WebChat. Решаю проблемы связанные с грамотной организацией проекта с технической точки зрения и опыта пользователя. Сам по себе проект слегка необычный с точки зрения пользовательского интерфейса. Составные части проекта следующие (ссылки на проекты):
  </p>

  <h3>Frontend разделы проекта</h3>

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=WebChat-team&repo=id.webchat.com)](https://github.com/WebChat-team/id.webchat.com)

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=WebChat-team&repo=webchat.com)](https://github.com/WebChat-team/webchat.com)

  <h3>Backend разделы проекта</h3>

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=WebChat-team&repo=proxy_server)](https://github.com/WebChat-team/proxy_server)

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=WebChat-team&repo=token_server)](https://github.com/WebChat-team/token_server)

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=WebChat-team&repo=user_server)](https://github.com/WebChat-team/user_server)

</section>

<section>

  <h2>Увлечения вне программирования</h2>

  <p>Раньше очень любил решать задачки на leetcode, теперь чуть реже</p>

![](https://leetcard.jacoblin.cool/Gleb001)

  <p>Также есть книги, которые бы хотелось осилить в обозримом будущем:</p>

  <div class="bookshelf">
    <div class="book">
      <div class="about_book">
        <h3>Архитектура компьютера</h3>
        <p>Э. Таненбаум, Т. Остин</p>
        <p>перевод с английского Е. Матвеева</p>
      </div>
      <div>
        <div class="info_page" style="--current: 193;--total: 790;--weight:5px;--color:#FFA116;">
          <span class="quantity"></span>
          <span class="unit_of_measurement">
            страниц
          </span>
        </div>
      </div>
    </div>
    <div class="book">
      <div class="about_book">
        <h3>Компьютерные сети</h3>
        <p>Э. Таненбаум, Н. Фимстер, Д. Уэзеролл</p>
        <p>перевод с английского С. Черников, научный редактор М. Капранов</p>
      </div>
      <div>
        <div class="info_page" style="--current: 133;--total: 970;--weight:5px;--color:#FFA116;">
          <span class="quantity"></span>
          <span class="unit_of_measurement">
            страниц
          </span>
        </div>
      </div>
    </div>
  </ul>

  <p>Помимо чтения, люблю играть в шахматы</p>

</section>

<section>

  <h2>Послесловие</h2>

  <p>
    Ниже вы можете посмотреть одни из моих лучших проектов (закреплены)
  </p>

  <p>
    Контакты для связи со мной указаны под моей аватаркой
  </p>

  <p>
    А так, в целом, всё!
    Счастливого программирования ;)
  </p>

</section>

<style>

/* information about reading books */

.info_page {
  --width:125px;
  --procent: (var(--current) / var(--total)) * 100;

  width: var(--width);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  place-content: center;
  font-weight: medium;
  font-family: sans-serif;
}

.info_page:before {
  content: "";
  position: absolute;
  border-radius: 50%;
  inset: 0;
  background: conic-gradient(var(--color) calc(var(--procent)*1%),#404040 0);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--weight)),#000 calc(100% - var(--weigth)));
          mask:radial-gradient(farthest-side,#0000 calc(99% - var(--weight)),#000 calc(100% - var(--weight)));
}

.info_page:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  inset: calc(50% - var(--weight)/2);
  background: var(--color);
  transform: rotate(calc(var(--procent)*3.6deg)) translateY(calc(50% - var(--width)/2));
}

.quantity:before {

  counter-reset: current var(--current) total var(--total);
  content: counter(current) " / " counter(total);
  display: inline;
  width: 100%;
  height: 30px;

  font-size: 18px;

  position: relative;

  top: 5px;

}

.unit_of_measurement {
  font-size: 14px;
  text-align: center;
}

  /* bookshelf */

  .bookshelf {

    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;

    padding: 0;
    margin: 0;

  }

  .book {

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    box-sizing: border-box;
    padding: 20px;

    border-radius: 5px;
    border: 1px solid #404040;

    background-color: #101010;

    color: white;

  }

  .book > h3 {
    margin: 0 0 10px;
  }

  .book p {
    transition: color .15s linear;
    margin: 5px 0;
  }

  .book:hover p {
    color: grey;
  }
  .book:hover .quantity {

    content: 
  }

</style>