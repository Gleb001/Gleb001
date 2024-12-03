<section>

  <h1>✨ My hobbies</h1>

  <p>Раньше очень любил решать задачки на leetcode, теперь чуть реже</p>
  <img
    src="https://leetcard.jacoblin.cool/Gleb001?theme=dark&ext=heatmap" alt="leetcode"
  />

  <p>Также есть книги, которые бы хотелось осилить в обозримом будущем:</p>
  <div class="bookshelf">
    <div class="book">
      <div class="about_book">
        <h3 class="book_title">Архитектура компьютера</h3>
        <p class="book_paragraph">Э. Таненбаум, Т. Остин</p>
        <p class="book_paragraph">перевод с английского Е. Матвееваlapor</p>
      </div>
      <div>
        <div class="info_page" style="--current: 193;--total: 790;">
          <span class="quantity">
            193 / 790
          </span>
          <span class="unit_of_measurement">
            страниц
          </span>
        </div>
      </div>
    </div>
    <div class="book">
      <div class="about_book">
        <h3 class="book_title">Компьютерные сети</h3>
        <p class="book_paragraph">Э. Таненбаум, Н. Фимстер, Д. Уэзеролл</p>
        <p class="book_paragraph">перевод с английского С. Черников, научный редактор М. Капранов</p>
      </div>
      <div>
        <div class="info_page" style="--current: 133;--total: 970;">
          <span class="quantity">
            133 / 970
          </span>
          <span class="unit_of_measurement">
            страниц
          </span>
        </div>
      </div>
    </div>
  </div>

</section>

<style>

/* information about reading books */

.info_page {
  --width:125px;
  --weight:5px;
  --color: #70EC8C;
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

.quantity {

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

.book_title {
  margin: 0 0 10px;
}

.book_paragraph {
  transition: color .15s linear;
  margin: 5px 0;
}

</style>