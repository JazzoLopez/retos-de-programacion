/**
 * * -> Medium <- *
 * Divide two integers without using multiplication, division, and mod operator.
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    
    if (dividend === INT_MIN && divisor === -1) return INT_MAX; //Para evitar desbordamientos, el valor maximo de un entero es 32 bits
    if (dividend === INT_MIN && divisor === 1) return INT_MIN;
    
    let negatives = 2;
    if (dividend > 0) {
        negatives--;
        dividend = -dividend;
    }
    if (divisor > 0) {
        negatives--;
        divisor = -divisor;
    }
    
    let quotient = 0;
    while (dividend <= divisor) {
        let tempDivisor = divisor;
        let multiple = 1;
        
        while (dividend <= (tempDivisor << 1) && (tempDivisor << 1) < 0) {
            tempDivisor <<= 1;
            multiple <<= 1;
        }
        
        dividend -= tempDivisor;
        quotient += multiple;
    }
    
    return negatives === 1 ? -quotient : quotient;
};

// Test cases
console.log(divide(10, 3));
console.log(divide(7, -3));  
