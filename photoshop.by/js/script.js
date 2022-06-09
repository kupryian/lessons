var cards = [
    {
        img: "img/a8e639bfb5599eaa6651d39aa3b45f0a 1.png",
        pcice: "4 240 р",
        oldPrice: "5 400 р",
        title: "Canon EOS 5D Mark IV Body"
},
{
    img: "img/002.png",
    pcice: "4 240 р",
    oldPrice: "5 400 р",
    title: "Объектив Canon EF 50mm f/1.2L USM"
},
{
    img: "img/003.png",
    pcice: "6 705 р",
    oldPrice: "7 560 р",
    title: "Fujifilm x-519 Body"
},
{
    img: "img/004.png",
    pcice: "45 р",
    oldPrice: "",
    title: "FST LS-210 Стойка"
},
{
    img: "img/005.png",
    pcice: "45 р",
    oldPrice: "",
    title: "Сумка Lowepro Apex 140 AW"
},
{
    img: "img/006.png",
    pcice: "2 400 р",
    oldPrice: "",
    title: "Canon PowerShot G7 X Mark II"
},
{
    img: "img/007.png",
    pcice: "3 540 р",
    oldPrice: "4 100 р",
    title: "Стабилизатор DJI RS 2"
},
{
    img: "img/008.png",
    pcice: "890 р",
    oldPrice: "",
    title: "Canon Speedlite EL-100"
},
{
    img: "img/009.png",
    pcice: "450 р",
    oldPrice: "",
    title: "Источник света Profoto C1 Plus для смартфона"
},
{
    img: "img/010.png",
    pcice: "5 000 р",
    oldPrice: "",
    title: "Объектив Fujifilm XF 80mm f/2.8 R LM OIS WR Macro"
}
];

var hitSale = document.querySelector('.sale_hits');
var htmlCards = "";
for(var i=0;i<5;i++) {
    htmlCards += `
                <div>
                    <div class="sale_hits_img">
                    <img src="${cards[i].img}" alt="">
                    </div>
                    <p class="price_cart">${cards[i].pcice}</p><p class="old_price_cart">${cards[i].oldPrice}</p>
                    <p>${cards[i].title}</p>
                </div>
    `
}
hitSale.innerHTML = htmlCards;

// кнопка показать больше
function viev_more() {
    var hitSale = document.querySelector('.sale_hits');
    var htmlCardsMore = "";
    for(var i=5;i<cards.length;i++) {
        htmlCardsMore += `
                    <div>
                        <div class="sale_hits_img">
                        <img src="${cards[i].img}" alt="">
                        </div>
                        <p class="price_cart">${cards[i].pcice}</p><p class="old_price_cart">${cards[i].oldPrice}</p>
                        <p>${cards[i].title}</p>
                    </div>
        `
    }
    hitSale.innerHTML = htmlCards+htmlCardsMore;
    document.querySelector(".sale_hist_viev_more").style.display="none";
}
// конец


function menuOpen() {
    document.querySelector(".menu_drop").style.backgroundColor="#00000082";
    document.querySelector(".menu_drop").style.zIndex="20";
    document.querySelector(".menu_drop").style.transition="0.5s";
    document.querySelector(".menu_area").style.left="0";
    document.querySelector(".menu_area").style.transition="0.7s";
    document.querySelector(".head_bottom_mobile ul li:nth-child(2)").style.display="none";
    document.querySelector(".head_bottom_mobile ul li:nth-child(3)").style.display="block";
}
function menuClose() {
    document.querySelector(".menu_drop").style.backgroundColor="#00000000";
    document.querySelector(".menu_drop").style.zIndex="-1";
    document.querySelector(".menu_drop").style.transition="0.5s";
    document.querySelector(".menu_area").style.left="-1000px";
    document.querySelector(".menu_area").style.transition="0.7s";
    document.querySelector(".head_bottom_mobile ul li:nth-child(2)").style.display="block";
    document.querySelector(".head_bottom_mobile ul li:nth-child(3)").style.display="none";
}

// хедер
var header = document.querySelector('header');
var headerIn =`<div class="menu_drop" onclick="menuClose()">
</div>
    <ul class="menu_area">
        <li><img src="img/menuitem12.png" alt=""><img src="img/Arrow2.png" alt=""> <p>Фотоаппараты</p>        
            <div>
            <ul>
                <li>Зеркальные фотоаппараты</li>
                <li>44х33 мм</li>
                <li>30х45 мм</li>
                <li>35 мм (Full frame)</li>
                <li>APS-C</li>
                <li>Все категории</li>
            </ul>
            <ul>
                <li>Беззеркальные камеры</li>
                <li>23.6х15.7 мм</li>
                <li>24х36 мм</li>
                <li>35 мм (Full frame)</li>
                <li>3/4 мм</li>
                <li>APS-C</li>
                <li>Все категории</li>
            </ul>
            <ul>
                <li>Компактные фотокамеры</li>
                <li>1/1</li>
                <li>1/1.7</li>
                <li>1/2.3</li>
                <li>35 мм (Full frame)</li>
                <li>4/3</li>
                <li>APS-C</li>
                <li>MOS</li>
                <li>Все категории</li>
            </ul>
            <ul>
                <li>Компактные фотокамеры</li>
                <li>1/1</li>
                <li>1/1.7</li>
                <li>1/2.3</li>
                <li>35 мм (Full frame)</li>
                <li>4/3</li>
                <li>APS-C</li>
                <li>MOS</li>
                <li>Все категории</li>
            </ul>
            <ul>
                <li>Компактные фотокамеры</li>
                <li>1/1</li>
                <li>1/1.7</li>
                <li>1/2.3</li>
                <li>35 мм (Full frame)</li>
                <li>4/3</li>
                <li>APS-C</li>
                <li>MOS</li>
                <li>Все категории</li>
            </ul>
            <ul>
                <li>Компактные фотокамеры</li>
                <li>1/1</li>
                <li>1/1.7</li>
                <li>1/2.3</li>
                <li>35 мм (Full frame)</li>
                <li>4/3</li>
                <li>APS-C</li>
                <li>MOS</li>
                <li>Все категории</li>
            </ul>
        </div>
        </li>
        <li><img src="img/menuitem12.png" alt=""><img src="img/Arrow2.png" alt=""> <p>Объективы</p>
            <div>
                <ul>
                    <li>Зеркальные фотоаппараты</li>
                    <li>44х33 мм</li>
                    <li>30х45 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Беззеркальные камеры</li>
                    <li>23.6х15.7 мм</li>
                    <li>24х36 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>3/4 мм</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Компактные фотокамеры</li>
                    <li>1/1</li>
                    <li>1/1.7</li>
                    <li>1/2.3</li>
                    <li>35 мм (Full frame)</li>
                    <li>4/3</li>
                    <li>APS-C</li>
                    <li>MOS</li>
                    <li>Все категории</li>
                </ul>
            </div></li>
        <li><img src="img/menuitem3.png" alt=""><img src="img/Arrow2.png" alt=""> <p>Вспышки</p>
            <div>
                <ul>
                    <li>Зеркальные фотоаппараты</li>
                    <li>44х33 мм</li>
                    <li>30х45 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Беззеркальные камеры</li>
                    <li>23.6х15.7 мм</li>
                    <li>24х36 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>3/4 мм</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Компактные фотокамеры</li>
                    <li>1/1</li>
                    <li>1/1.7</li>
                    <li>1/2.3</li>
                    <li>35 мм (Full frame)</li>
                    <li>4/3</li>
                    <li>APS-C</li>
                    <li>MOS</li>
                    <li>Все категории</li>
                </ul>
            </div></li>
        <li><img src="img/menuitem4.png" alt=""><img src="img/Arrow2.png" alt=""> <p>Фотостудия</p>
            <div>
                <ul>
                    <li>Зеркальные фотоаппараты</li>
                    <li>44х33 мм</li>
                    <li>30х45 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Беззеркальные камеры</li>
                    <li>23.6х15.7 мм</li>
                    <li>24х36 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>3/4 мм</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Компактные фотокамеры</li>
                    <li>1/1</li>
                    <li>1/1.7</li>
                    <li>1/2.3</li>
                    <li>35 мм (Full frame)</li>
                    <li>4/3</li>
                    <li>APS-C</li>
                    <li>MOS</li>
                    <li>Все категории</li>
                </ul>
            </div></li>
        <li><img src="img/menuitem5.png" alt=""><img src="img/Arrow2.png" alt=""> <p>Аксессуары</p>
            <div>
                <ul>
                    <li>Зеркальные фотоаппараты</li>
                    <li>44х33 мм</li>
                    <li>30х45 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Беззеркальные камеры</li>
                    <li>23.6х15.7 мм</li>
                    <li>24х36 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>3/4 мм</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Компактные фотокамеры</li>
                    <li>1/1</li>
                    <li>1/1.7</li>
                    <li>1/2.3</li>
                    <li>35 мм (Full frame)</li>
                    <li>4/3</li>
                    <li>APS-C</li>
                    <li>MOS</li>
                    <li>Все категории</li>
                </ul>
            </div></li>
        <li><img src="img/menuitem6.png" alt=""><img src="img/Arrow2.png" alt=""> <p>Все для печати</p>
            <div>
                <ul>
                    <li>Зеркальные фотоаппараты</li>
                    <li>44х33 мм</li>
                    <li>30х45 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Беззеркальные камеры</li>
                    <li>23.6х15.7 мм</li>
                    <li>24х36 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>3/4 мм</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Компактные фотокамеры</li>
                    <li>1/1</li>
                    <li>1/1.7</li>
                    <li>1/2.3</li>
                    <li>35 мм (Full frame)</li>
                    <li>4/3</li>
                    <li>APS-C</li>
                    <li>MOS</li>
                    <li>Все категории</li>
                </ul>
            </div></li>
        <li><img src="img/menuitem7.png" alt=""><img src="img/Arrow2.png" alt=""> <p>Гаджеты</p>
            <div>
                <ul>
                    <li>Зеркальные фотоаппараты</li>
                    <li>44х33 мм</li>
                    <li>30х45 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Беззеркальные камеры</li>
                    <li>23.6х15.7 мм</li>
                    <li>24х36 мм</li>
                    <li>35 мм (Full frame)</li>
                    <li>3/4 мм</li>
                    <li>APS-C</li>
                    <li>Все категории</li>
                </ul>
                <ul>
                    <li>Компактные фотокамеры</li>
                    <li>1/1</li>
                    <li>1/1.7</li>
                    <li>1/2.3</li>
                    <li>35 мм (Full frame)</li>
                    <li>4/3</li>
                    <li>APS-C</li>
                    <li>MOS</li>
                    <li>Все категории</li>
                </ul>
            </div></li>
    </ul>   
<div class="head_top">
    <div class="contain">
        <div class="wrap">
        <div class="head_top button_location">Минск <img src="img/Rectangle 29.png" alt=""></div>
        <ul>
            <li>+375-29-275-94-61</li>
            <li>+375-29-275-94-61</li>
        </ul>
        <ul class="menu">
            <li>Фотомагазин</li>
            <li>Доставка и оплата</li>
            <li>Трейд-ин</li>
        </ul>
        </div>
    </div>
</div>
<div class="head_bottom">
    <div class="mobile_contain">
        <div class="wrap_head">
        <div class="head_bottom button_menu" onclick="menuOpen()"><div><img src="img/Line17.png" alt=""><img src="img/Line17.png" alt=""><img src="img/Line17.png" alt=""></div> Категории</div>
        <div class="head_bottom logo-header-text">Photomarket</div>
        <div class="head_bottom head_search"><p>Я ищу..</p><img src="img/search.png" alt=""></div>
        <ul class="">
            <li><img class="head-icon" src="img/map pin.png" alt=""><p>Адрес</p></li>
            <li><img class="head-icon" src="img/user.png" alt=""><p>Войти</p></li>
            <li><img class="head-icon" src="img/shopping cart.png" alt=""><p>Корзина</p></li>
        </ul>
        </div>
    </div>
</div>
<!-- вставка для мобильного хедера внизу -->
    <div class="head_bottom_mobile">
        <div class="contain">
            <ul>
                <li><a href="#"></a></li>
                <li onclick="menuOpen()"><a href="#"></a></li>
                <li onclick="menuClose()"><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </div> 
    </div>`;
    header.innerHTML = headerIn;










