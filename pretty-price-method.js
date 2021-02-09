
const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    baseNum = Math.floor(grossPrice);
     console.log(baseNum + extension);
}

prettyPrice(100, 95);


