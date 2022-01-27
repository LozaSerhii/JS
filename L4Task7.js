var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = [];
arrLength = arr.map(function(item, i, arr){
    return arr[i].length;
});
console.log( arrLength ); // 4,5,2,3