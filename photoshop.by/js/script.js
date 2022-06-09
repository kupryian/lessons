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



console.log("js ok")









