function reverseArray(a) {
    let len = a.length - 1;
    let newArray = [];
    for (let i = len; i >= 0; i--) {
        newArray.push(a[i]);
    }
    return newArray;
   //return a.toString().split('').reverse().join('');
}


console.log(reverseArray([1, 4, 3, 2]));