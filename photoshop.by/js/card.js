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

// var recomendet = document.querySelector('.recomendet');
// var recCards = "";
// for(var i=0;i<5;i++) {
//     recCards += `
//                 <div>
//                     <div class="sale_hits_img">
//                     <img src="${cards[i].img}" alt="">
//                     </div>
//                     <p class="price_cart">${cards[i].pcice}</p><p class="old_price_cart">${cards[i].oldPrice}</p>
//                     <p>${cards[i].title}</p>
//                 </div>
//     `
// }
// recomendet.innerHTML = recCards;
console.log("cards ok")