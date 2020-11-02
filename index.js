/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

function calculate(a, b) {
    let c = 0
    if (a === b) {
        c = 3 * (a + b)
    } else {
        c = a + b
    }
    return c
}
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function check50(a, b) {
    let c = a + b

    if (a === 50 || b === 50 || c === 50) {
        return true
    } else {
        return false
    }
}


/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function remove(str, pos) {
    str1 = str.substring(0, pos);
    str2 = str.substring(pos + 1, str.length);
    return (str1 + str2);
}


/*
4)
 Create a function to find the largest of three given integers.
*/

function largestInt(int1, int2, int3) {
    let c = Math.max(int1, int2, int3)
    return c
}
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function checkRange(a, b) {
    if (((a >= 40 && a <= 60) || (a >= 70 && a <= 100)) && ((b >= 40 && b <= 60) || (b >= 70 && b <= 100))) {
        return "numbers are in range"
    } else {
        return "numbers are not in range"
    }
}

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
function copy(str, copyInt) {
    let copyStr = str.repeat(copyInt)
    return copyStr
}
/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function cityCheck(cityName) {
    if (cityName.startsWith("Los") || cityName.startsWith("New")) {
        return cityName
    } else {
        return ""
    }
}
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function calcArray(array) {
    let x = 0
    for (let i = 0; i < array.length; i++) {
        x += array[i]
    }
    return x
}
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function checkArray(array) {
    let str
    if (array.includes(1) || array.includes(3)) {
        str = "array contains 1 or 3"
    } else {
        str = "array doesnt contain 1 or 3"
    }
    return str
}

/* 10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */

function checkArray2(array) {
    let str
    if (!(array.includes(1) || array.includes(3))) {
        str = "array doesnt contain 1 or 3"
    } else {
        str = "array does contain 1 or 3"
    }
    return str
}
/* 11)
Create a function to find the longest string from a given array of strings. */
function longstestString(array) {
    let str
    let length = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > length) {
            length = array[i].length
            str = array[i]
        }
    }
    return str
}

/* 12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle. */

function findAngle(angle) {
    if (angle < 90) {
        return "Acute angle"
    } else if (angle === 90) {
        return "Right angle"
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle"
    } else if (angle === 180) {
        return "Straight angle"
    } else {
        return
    }

}
/* 13)
Create a function to find the index of the greatest element of a given array of integers */
function findIndex(array) {
    let greatestElement = 0
    for (let i = 0; i < array.length; i++) {
        if (greatestElement < array[i]) {
            greatestElement = array[i]
        }
    }
    let index = array.indexOf(greatestElement)
    return index
}
/* 14)
Create a function to get the largest even number from an array of integers. */
function findEven(array) {
    let evenNums = []
    let greatestNum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i])
        }
    }
    for (let i = 0; i < evenNums.length; i++) {
        if (greatestNum < evenNums[i]) {
            greatestNum = evenNums[i]
        }
    }
    return greatestNum
}
/* 15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50. */

/* 16)
Create a function to check from two given integers, whether one is positive and another one is negative. */
function checkSign(a, b) {
    if ((Math.sign(a) === 1 || Math.sign(a) === 0) || (Math.sign(b) === 1 || Math.sign(b) === 0)) {
        if ((Math.sign(a) === 1 || Math.sign(a) === 0) && (Math.sign(b) === -1 || Math.sign(b) === -0)) {
            return "First Number is Positive, Second is Negative"
        } else if ((Math.sign(a) === 1 || Math.sign(a) === 0) && (Math.sign(b) === 1 || Math.sign(b) === 0)) {
            return "Both Numbers are Positive"
        }
        else if ((Math.sign(a) === -1 || Math.sign(a) === -0) && (Math.sign(b) === 1 || Math.sign(b) === 0)) {
            return "First Number is Negative, Second is Positive"
        }
    } else if ((Math.sign(a) === -1 || Math.sign(a) === -0) && (Math.sign(b) === -1 || Math.sign(b) === -0)) {
        return "Both Numbers are Negative"
    }
}
/* 17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.  */
/* 18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. */
function sum(a, b) {
    let c = a + b
    if (c >= 50 && c <= 80) {
        return 65
    } else {
        return 80
    }
}
/* 19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34". */
function factor(a) {
    let str = ""
    if(a % 3 === 0){
        str += "Diego"
    }
    if(a % 5 === 0){
        str += "Riccardo"
    }
    if(a%7 === 0){
        str+= "Stefano"
    }
    return str
}
/* 20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC */
