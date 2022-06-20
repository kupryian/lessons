function up1() {
var number = document.querySelector('.product_number');
var getNumber = document.querySelector('.product_number').innerHTML;
var chislo = Number (getNumber);
var numberProduct =chislo+1;
number.innerHTML = numberProduct;
}
function down1() {
    var number = document.querySelector('.product_number');
    var getNumber = document.querySelector('.product_number').innerHTML;
    var chislo = Number (getNumber);
    var numberProduct =chislo-1;
    numberProduct<1 ? numberProduct = 1 : 
    number.innerHTML = numberProduct;
    }
console.log ("js_cart ok");

