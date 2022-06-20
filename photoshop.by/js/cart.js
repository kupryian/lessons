function up1() {
var number = document.querySelector('.product_number');
var getNumber = Number (document.querySelector('.product_number').innerHTML);
var numberProduct =getNumber+1;
number.innerHTML = numberProduct;


}
function down1() {
    var number = document.querySelector('.product_number');
    var getNumber = Number (document.querySelector('.product_number').innerHTML);
    var numberProduct =getNumber-1;
    numberProduct<1 ? numberProduct = 1 : 
    number.innerHTML = numberProduct;
    }
console.log ("js_cart ok");

