const fibonacci = function(f_num) {
    f_num = f_num - 1;
    const first4 = [1,1,2,3];
    
    if (f_num <= 3) {
        return first4[f_num];
    }
    for (let i = 4; i <= f_num; i++){
        first4.push(first4[i] + first4[i-1]);
    }
    return first4[f_num];
};

// Do not edit below this line
module.exports = fibonacci;
