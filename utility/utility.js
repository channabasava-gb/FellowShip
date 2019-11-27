/**
 *Execution default cmd>node.js
 @purpose :to read the index elements are comparing with line by line and print yhe value
 */
var input = require("readline-sync");
exports.insertionsort = () => {
    let temp;
    arr = ["ramu", "shamu", "somu", "bhimu"];
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i];
        j = i;
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j = j - 1;
        }
        arr[j] = temp;
    }
    for (const i of arr) {
        console.log(i);
    }

}
/**
* Execution default cmd>node.js
* @purpose :take the intiger values and print the assending order integer value
*/
exports.bubbleSort = () => {
    let temp;
    array = [5, 4, 3, 2, 1];
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    for (const i of array) {
        console.log(i);
    }
}

/**
 * Execution default cmd>node.js
 * @purpose :take the prime numbers frome 1 to 1000 and prints in between numbers.
 */

exports.primeNumbers = () => {
    for (var i = 0; i <= 10; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }

}
function isPrime(n) {
    if (n <= 1)
        return false
    for (let i = 2; i < n; i++) {
        if (n % i == 0)
            return false
    }
    return true

}
/**
 * Execution default cmd>node.js
 * @purpose :give the string name and to check the whether it is angram or not
 */
exports.anagram = (str1, str2) => {
    str1 = input.question("Enter the String1 name ")
    str2 = input.question(" Enter the String2 name")
    let sorted1 = str1.split('').sort().join('').toLowerCase();
    let sorted2 = str2.split('').sort().join('').toLowerCase();
    if (sorted1 == sorted2) {
        console.log("the given string is Anagaram");
    } else {
        console.log("the given string is not an Anagram  ");
    }
};

/**
 * Execution default cmd>node.js
 * @purpose :to find the elements in the array binary search element
 */
exports.binarySearch = (arr, key) => {
    try {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            let mid = Math.round((low + high) / 2);
            if (arr[mid] == key)
                return mid;
            if ((arr[mid]) < key) {
                low = mid + 1;

            } else {
                high = mid - 1;
            }
        }
        return -1;

    }
    catch (e) {
        console.log(e.message);
        console.log(e.name);
    }
}
/**
 * Execution default cmd>node.js
 * @purpose :find the prime numbers that are Anagram and Palindrome 
 */
exports.anagramPalindrome = str1 => {
    const charCheck = {};
    let currStr;
    for (let i = 0; i < str1.length; i++) {
        currStr1 = str1[i];
        if (charCheck[currStr1]) {
            delete charCheck[currStr1];
        } else {
            charCheck[currStr1] = true;
        }
    }

    return Object.keys(charCheck).length > 1 ? false : true;
};
/**
 * Execution default cmd>node.js
 * @purpose :  we divide it into two halves, sort the array two halves independently, 
 * and then merge the results to sort the full array
 */
exports.mergeSort = () => {
    function merge(left, right) {
        let arr = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift());
            } else {
                arr.push(right.shift());
            }
        }
        return arr.concat(left.slice().concat(right.slice()));
    }
    function mergeSort(arr) {
        if (arr.length < 2) {
            return arr;
        }
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        return merge(mergeSort(left), mergeSort(right));
    }
    const array = [9, 2, 7, 6, 11, 3, 1, 10, 13, 8];
    console.log(mergeSort(array));
}
/**
 * Execution default cmd>node.js
 * @purpose :  functions to return all permutations the String using iterative method
 */
exports.permutation = permutation => {
    var len = permutation.length,
        result = [permutation.slice()],
        c = new Array(len).fill(0),
        i = 1, k, p;
    while (i < len) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
};





