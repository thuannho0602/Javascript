/**
    For/In trong JsLa12 Gì: 
    được sử dụng để được sử dụng để lặp lại trên tất cả các enumerable properties của một Object, bao gồm enumerable properties được kế thừa.
     Câu lệnh lặp này có thể được sử dụng với String, Array, or những object đơn giản, nhưng không phải với các object như Map() hoặc Set().

 */

     // Đối Tượng 
var myOject={
    name:'Thuan',
    age:23,
    Address:'Tân Biên Tây Ninh'
}

for(var key in myOject){
    console.log(myOject[key]);
}
// Mảng 
var myArry=[
    'Tân Biên',
    'Hòa Thành',
    'Tân Châu',
    'Châu Thành'
]
for(var value in myArry){
    console.log(myArry[value])
}


// chuỗi 
 var myChuoi='Nguyễn Minh Thuận';
for(var chuoi in myChuoi){
    console.log(myChuoi[chuoi]);
}
