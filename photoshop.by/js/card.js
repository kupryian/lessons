function pre_photo_1() {
    document.querySelector(".big_photo img:first-child").style.display="inline";
    document.querySelector(".big_photo img:nth-child(2)").style.display="none";
    document.querySelector(".big_photo img:nth-child(3)").style.display="none";
    document.querySelector(".big_photo img:nth-child(4)").style.display="none";
}
function pre_photo_2() {
    document.querySelector(".big_photo img:first-child").style.display="none";
    document.querySelector(".big_photo img:nth-child(2)").style.display="inline";
    document.querySelector(".big_photo img:nth-child(3)").style.display="none";
    document.querySelector(".big_photo img:nth-child(4)").style.display="none";
}
function pre_photo_3() {
    document.querySelector(".big_photo img:first-child").style.display="none";
    document.querySelector(".big_photo img:nth-child(2)").style.display="none";
    document.querySelector(".big_photo img:nth-child(3)").style.display="inline";
    document.querySelector(".big_photo img:nth-child(4)").style.display="none";
}
function pre_photo_4() {
    document.querySelector(".big_photo img:first-child").style.display="none";
    document.querySelector(".big_photo img:nth-child(2)").style.display="none";
    document.querySelector(".big_photo img:nth-child(3)").style.display="none";
    document.querySelector(".big_photo img:nth-child(4)").style.display="inline";
}

// for(var i=0;i<idCards.length;i++) {
//     // idCards[i] = document.querySelector('#card1');
//     findCard = cards.find(blabla => blabla.id === idCards[i])

// }


// let cities = [{ id: 121, name: 'г. Урюпинск' }, { id: 122, name: 'г. Париж' }, { id: 123, name: 'г. Москва' }, { id: 124, name: 'г. Штормград' }];
// let searchTerm = 'г. Москва';
// let cityId = cities.find(city => city.name === searchTerm).id
// console.log(cityId);




var card1 = document.querySelector('#card1');
var recCards1 = "";
for(var i=0;i<cards.length;i++) {
    recCards = `
                <div>
                    <div class="sale_hits_img">
                    <img src="${cards[i].img}" alt="">
                    </div>
                    <p class="price_cart">${cards[i].pcice}</p><p class="old_price_cart">${cards[i].oldPrice}</p>
                    <p>${cards[i].title}</p>
                </div>
                <div class="contain">   
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="index.html">Главная</a></li>
    <li class="breadcrumb-item"><a href="#">Фотоаппараты</a></li>
    <li class="breadcrumb-item"><a href="#">Зеркальные фотоаппараты</a></li>
    <li class="breadcrumb-item active" aria-current="page">Зеркальный фотоаппарат Canon EOS 5D Mark IV Body</li>
  </ol>
</nav>
</div>
<div class="contain">  
<h2>Canon EOS 5D Mark IV Body</h2>
<div class="articul">
<p>Артикул: 12345678</p>
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul><p>57 отзывов</p>
</div>
<div class="photo_galery">
    <div class="pre_photo">
        <img src="img/canon_eos_5d_mark_iii_body_1.jpg" alt="Canon EOS 5D Mark IV Body" onclick="pre_photo_1()">
        <img src="img/canon_eos_5d_mark_iii_body_2.jpg" alt="купить Canon EOS 5D Mark IV Body" onclick="pre_photo_2()">
        <img src="img/canon_eos_5d_mark_iii_body_3.jpg" alt="купить в минске Canon EOS 5D Mark IV Body" onclick="pre_photo_3()">
        <img src="img/canon_eos_5d_mark_iii_body_4.jpg" alt="фотоаппарат Canon EOS 5D Mark IV Body" onclick="pre_photo_4()">
    </div>
    <div class="big_photo">
        <img src="img/canon_eos_5d_mark_iii_body_1.jpg" alt="Canon EOS 5D Mark IV Body">
        <img src="img/canon_eos_5d_mark_iii_body_2.jpg" alt="купить Canon EOS 5D Mark IV Body">
        <img src="img/canon_eos_5d_mark_iii_body_3.jpg" alt="купить в минске Canon EOS 5D Mark IV Body">
        <img src="img/canon_eos_5d_mark_iii_body_4.jpg" alt="фотоаппарат Canon EOS 5D Mark IV Body">
    </div>
    <div class="prise_card">
        <ul>
            <li>
                <ul>
                    <li><h2>4 210р</h2></li>
                    <li>5100 р</li>
                    <li>-10%</li>
                </ul>
            </li>
            <li><span>Гарантия:</span> от производителя 2 года</li>
            <li><button class="add_cart">ДОБАВИТ В КОРЗИНУ</button></li>
            <li><span>Доставка:</span> ориентировочно два дня </li>
        </ul>

    </div>
</div>
<h2>Описание</h2>
<div class="row">
    <div class="col-8">
      <div class="list-group" id="list-tab" role="tablist">
        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="home">Характеристики</a>
        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Описание</a>
        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Отзывы о товаре</a>
      </div>
    </div>
    <div class="col-12">
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
            <h6>Основные</h6>
            <hr>
            <ul class="col-8">
                <li>
                    <ul>
                        <li class="col-5">Тип камеры</li>
                        <li class="col-5">зеркальная камера
                        </li>    
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Комплект </li>
                    <li class="col-5">без объектива (body)</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Тип матрицы  </li>
                    <li class="col-5">CMOS</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Размер экрана </li>
                    <li class="col-5">3.2 ''</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Тип матрицы  </li>
                    <li class="col-5">CMOS</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Количество точек матрицы  </li>
                    <li class="col-5">30.4 Мп</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Физический размер матрицы  </li>
                    <li class="col-5">Full frame</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Максимальное разрешение видео  </li>
                    <li class="col-5">4096x2160 (30 кадров/с)</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Режимы съемки HD-видео	 </li>
                    <li class="col-5">4096 x 2160 (30 к/с), 4096 x 2160 (25 к/с), 
                        1920 x 1080 (60 к/с), 1920 x 1080 (50 к/с), 
                        1920 x 1080 (30 к/с), 1920 x 1080 (25 к/с), 
                        1280 x 720 (120 к/с)
                        </li>
                    </ul>
                </li>
            </ul>
            <h6>Конструкция</h6>
            <hr>
            <ul class="col-8">
                <li>
                    <ul>
                        <li class="col-5">Материал корпуса </li>
                        <li class="col-7">металл</li>    
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Цвет корпуса  </li>
                    <li class="col-7">черный</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Пыле- и влагозащита   </li>
                    <li class="col-7">CMOS</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Оптическая стабилизация фотоаппарата  </li>
                    <li class="col-7"><img src="img/VectorGalka.png" alt=""></li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Встроенный проектор  </li>
                    <li class="col-7">&#9587;</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Количество точек матрицы  </li>
                    <li class="col-7">&#9587;</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Встроенный фотопринтер </li>
                    <li class="col-7">Full frame</li>
                    </ul>
                </li>
            </ul>
            <h6>Размеры и вес</h6>
            <hr>
            <ul class="col-8">
                <li>
                    <ul>
                        <li class="col-5">Длина </li>
                        <li class="col-7">116 мм</li>    
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Ширина </li>
                    <li class="col-7">151 мм</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Толщина </li>
                    <li class="col-7">76 мм</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <li class="col-5">Вес </li>
                    <li class="col-7">890 г  (с батареей)</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
            <h6>Описание</h6>
            <hr>
        </div>
        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
            <h6>Отзывы</h6>
            <hr>
        </div>
      </div>
    </div>
  </div>
  
</div>
<div class="contain">
    <h2>С этим товаром рекомендуют</h2>
    <div class="sale_hits recomendet">

    </div>
</div>
    `
}
card1.innerHTML = recCards1;
console.log("cards ok")


