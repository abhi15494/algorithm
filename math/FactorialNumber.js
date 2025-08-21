function factorial(n) {
    let output = 1;
    for(let i = 1; i <= n; i++) {
        output*=i;
    }
    return output;
}

console.log(factorial(4));
console.log(factorial(10));
console.log(factorial(20));

