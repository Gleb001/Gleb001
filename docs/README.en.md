<section>

  <h2>About me</h2>

  <p>
    Hello everyone!
  </p>
  <p>
    I am a frontend developer who is passionate about programming (currently scripting languages) and modern technologies.
  </p>

</section>

<section>

  <h2>Current project</h2>

  <p>
    Right now I am writing a social network - WebChat. I solve problems related to the competent organization of the project from a technical point of view and user experience. The project itself is slightly unusual from the point of view of the user interface. The components of the project are as follows (links to projects):
  </p>

  <h3>Frontend sections of the project</h3>

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=WebChat-team&repo=id.webchat.com)](https://github.com/WebChat-team/id.webchat.com)

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=WebChat-team&repo=webchat.com)](https://github.com/WebChat-team/webchat.com)


  <h3>Backend sections of the project</h3>

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=WebChat-team&repo=proxy_server)](https://github.com/WebChat-team/proxy_server)

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=WebChat-team&repo=token_server)](https://github.com/WebChat-team/token_server)

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=WebChat-team&repo=user_server)](https://github.com/WebChat-team/user_server)

</section>

<section>

  <h2>Hobbies outside of programming</h2>

  <p>I used to really like solving problems on leetcode, now a little less often</p>

  ![](https://leetcard.jacoblin.cool/Gleb001)

  <p>There are also books that I would like to master in the foreseeable future.:</p>

  <div class="bookshelf">
    <div class="book">
      <div class="about_book">
        <h3>Computer architecture</h3>
        <p>E. Tanenbaum, T. Austin</p>
        <p>translated from English by E. Matveev</p>
      </div>
      <div>
        <div class="info_page" style="--current: 193;--total: 790;--weight:5px;--color:#FFA116;">
          <span class="quantity"></span>
          <span class="unit_of_measurement">
            pages
          </span>
        </div>
      </div>
    </div>
    <div class="book">
      <div class="about_book">
        <h3>Computer networks</h3>
        <p>E. Tanenbaum, N. Feemster, D. Weatherall</p>
        <p>translated from English by S. Chernikov, scientific editor M. Kapranov</p>
      </div>
      <div>
        <div class="info_page" style="--current: 133;--total: 970;--weight:5px;--color:#FFA116;">
          <span class="quantity"></span>
          <span class="unit_of_measurement">
            pages
          </span>
        </div>
      </div>
    </div>
  </ul>

  <p>Besides reading, I like to play chess</p>

</section>

<section>

<h2>Afterword</h2>

  <p>
    Below you can see some of my best projects (pinned)
  </p>

  <p>
    The contacts to contact me are listed under my avatar
  </p>

  <p>
    And so, in general, everything!
    Happy programming ;)
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