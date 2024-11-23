const removeDuplicates = (strings) => {
    const uniqueSet = new Set(strings);
    return [...uniqueSet];
};

// Example usage
const strings = ["Sary", "Saad", "banana", "Sama", "orange", "banana", "grape", "orange", "banana", "grape"];
const uniqueStrings = removeDuplicates(strings);

console.log(uniqueStrings);  
