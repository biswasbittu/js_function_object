const shoppingCart={
    books:3,
    sunglass:1,
    keyboard:5,
    mous:1,
    pen:25,
    shoes:4,
    bottle:2
}

const keys=Object.keys(shoppingCart);
// console.log(keys);
const values=Object.values(shoppingCart);
// console.log(values);

for(var i=0;i< keys.length;i++){
    const propertyName=keys[i];
    const propertyValue=shoppingCart[propertyName];
console.log(propertyName,propertyValue);
}