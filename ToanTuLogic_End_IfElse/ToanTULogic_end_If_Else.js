/**
 * Hiểu hơn với câu lệnh Điều kiện 
 * và phép so sánh
 */
// toán tử &&
var a=2;
var b=5;
var result='A' && 'B' && 'c';
if(result){
    console.log('Điều kiện đúng!');
}else{
    console.log('Điều kiện sai!');
}


// toán tử || 
var c=5;
var d=3;
var result1= false || 'NaN' || null ;
if(result1){
    console.log('result1: ',result1);
}
else{
    console.log('Câu điều kiện sai!');
}