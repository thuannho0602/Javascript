/**
 *  vòng lặp While là gì
 *  vòng lặp while lặp lại một khối mã miễn là điều kiện được chỉ định đánh giá là đúng.
    - là câu lệnh lặp đơn giản nhất được cung cấp bởi JavaScript.
        + Vòng lặp while lặp qua một khối mã miễn là điều kiện được chỉ định đánh giá là đúng.
        +  Ngay khi điều kiện thất bại, vòng lặp dừng lại.
 */
// mảng 
var myArry1=[
    'JS',
    'C#',
    'C++',
    'C'
]

var i=0;
while(i<myArry1.length){
    i++;
    console.log(myArry1[i]);
}