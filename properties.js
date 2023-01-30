const shoppingCart={
    books:3,
    pen:25,
    sunglass:3,
    mous:1
}
const penCount=shoppingCart.pen;
// console.log(penCount)
const penCount2=shoppingCart['sunglass'];
// console.log(penCount2);

const objkey=Object.keys(shoppingCart);
const objvalue=Object.values(shoppingCart);
console.log(objkey);
console.log(objvalue);
