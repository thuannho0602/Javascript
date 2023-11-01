/** 
 * Kiểu Dữ Liệu Là Gì JavaScript có 8 kiểu dữ liệu cơ bản, trong đó, có **7 kiểu dữ liệu nguyên thủy (boolean, null, undefined, number, BigInt, string, symbol) 
 * và 1 kiểu dữ liệu dạng tham chiếu (object và Function).
 */


/**
 * 
 * Kiễu Dữ Liệu Nguyên Thủy - Primitiveda Data
 * + Number
 * + String
 * + Undefined
 * + Null
 * + Boolean
 * + Symbol
 */

/**Kiễu Dữ Liệu Phức Tạp- Complex Data 
 * ObJect
 * Function
 * 
*/

/**
 *  TypeOf là gì và 
 * Hàm typeof được **dùng để kiểm tra một biến nào đó (hoặc một giá trị nào đó) 
 * có kiểu dữ liệu là gì?** Cú pháp của nó khá đơn giản như sau: 
 * Trong đó value có thể là một biến hoặc một giá trị xác định.
 */

//DL Number type
var a=1;
var b=4;
var c=6;
console.log(typeof a,b,c);
// Dư Liệu String type
var fullName='Nguyễn Minh THuận';
 console.log(typeof fullName);

// Dữ Liệu Boolean
var isSuccess=true;

console.log(typeof isSuccess);
//Dữ Liệu Undefined
var age=5;
console.log(typeof age);

//Dữ Liệu Null
var IsNull=null; //mothing
console.log(typeof IsNull);

// Dữ liệu Symbol
var Id=Symbol('Id');// unique
var Id2=Symbol('Id');// unique
console.log(typeof Id===Id2)

// kiễu dữ liệu Function tự định nghĩa
var myFunction=function() {
    alert('Hello Work');
}// gọi Function myFunction
console.log(typeof myFunction());


// kiễu dữ liệu Function được xây dựng sẵn
alert('Function Được xây dựng sẵn');


// ObJect type
    var myObject={
      /*key*/  Name: 'nguyễn minh thuận' /* Value */ ,
       /*key*/  age:  /* Value */  23,
       address:'Tây Ninh',
        myFunction:function(){

        }

    };
    console.log(typeof myObject);

    //Array
    var myArr=[
        'NET Core',
        'Java',
        'PHP',
    ];
    console.log(typeof myArr);