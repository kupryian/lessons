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
}
];

var hitSale = document.querySelector('.sale_hits');
var htmlCards = "";
for(var i=0;i<cards.length;i++) {
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


