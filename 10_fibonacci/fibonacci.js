const fibonacci = function(x) {
    
    const first4 = [1,1,2,3];
    y = (x - 1);


if (y < 4 && y > 0){
    return first4[y];
}

if (x == 0){
    return 0;
}

if (x < 0){
    return 'OOPS';
}

for (let i = x; i >= 4; i--){
    first4.push(first4[first4.length - 1] + first4[first4.length - 2]);
}
    return first4[y];

}


// Do not edit below this line
module.exports = fibonacci;
