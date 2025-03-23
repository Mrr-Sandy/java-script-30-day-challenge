function isPalindrome(num) {
    if (num < 0) {
        return false; // Negative numbers are not palindromes
    }
    
    // Store the original number to compare later
    let originalNum = num;
    let reversedNum = 0;
    
    while (num > 0) {
        // Extract the last digit of the number
        let lastDigit = num % 10;
        
        // Build the reversed number
        reversedNum = reversedNum * 10 + lastDigit;
        
        // Remove the last digit from the number
        num = Math.floor(num / 10);
    }
    
    // Compare the original number with the reversed number
    return originalNum === reversedNum;
}

// Example usage
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(12321)); // Output: true
