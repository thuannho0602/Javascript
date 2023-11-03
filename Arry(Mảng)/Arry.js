/**
 * Mảng (Arry) Trong jS
 * 1. Tạo Mảng
 *      - cách tạo
 *      - cách sử dụng như thế nào,tại sao
 *      -kiêm tra data type
 * 2. truy xuất mảng
 *      - độ dài của mảng
 *      - lấy phần tử theo index
 */

// cách 1 
var listArry=[
    'C#',
    'JS',
    'PyThon',
    function(){

    },
    123,
    undefined,
    null,


]
//cách 2 
var listArry2=new Array(
    'C#',
    'PHP',
    'PyThon',
    function(){

    },
    123,
    undefined,
    null,


);


// KT độ dài của mảng 
console.log( listArry.length);
//Lấy Phần tử theo Mảng Index
console.log( listArry2[1]);