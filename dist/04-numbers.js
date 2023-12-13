"use strict";
(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log("productPrice", productPrice);
    let customerAge = 28;
    // customerAge = customerAge + "1"; //281
    customerAge = customerAge + 1; //29
    console.log("customerAge", customerAge);
    let productInStock; //colocarlo de forma explicita
    console.log("productInStock", productInStock);
    if (productInStock > 10) {
        console.log('is greater');
    }
    let discount = parseInt("100");
    console.log("discount", discount);
    if (discount <= 200) {
        console.log("apply");
    }
    else {
        console.log("no apply"); //cuando sale NaN
    }
    let hex = 0xfff; //4095
    console.log("hex", hex);
    let bin = 0b1010; //10
    console.log("bin", bin);
    const nyNumber = 10; //no se recomienda typar con Number sino number
})();
