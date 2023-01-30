function add(num1, num2) {
    // console.log(num1,num2)
    var sum = num1 + num2;
    // console.log(sum);
    return sum;

}

// add(45,15);
var total = add(80, 20);
// console.log('Total',total);
function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;


}
var myRupee=100;
var singaras = bringSingara(myRupee);
console.log('Eating Singaras ',singaras);


