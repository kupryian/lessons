

var hitSale = document.querySelector('.sale_hits');
var htmlCards = "";
for(var i=0;i<5;i++) {
    htmlCards += `
                <div>
                    <div class="sale_hits_img">
                    <img src="${cards[i].img}" alt="купить ${cards[i].title}">
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
                        <img src="${cards[i].img}" alt="купить ${cards[i].title}">
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









