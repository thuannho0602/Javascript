/**
  1. Vòng Lặp Do while là gì 
    - vòng lặp do...while lặp khối mã một lần. Sau đó đánh giá điều kiện. Nếu điều kiện là đúng, lặp lại khối mã miễn là điều kiện là đúng.vòng lặp do...while lặp khối mã một lần.
     Sau đó đánh giá điều kiện. Nếu điều kiện là đúng, lặp lại khối mã miễn là điều kiện là đúng.
    - là một biến thể của vòng lặp while, đánh giá điều kiện ở cuối mỗi lần lặp của vòng lặp.
    - Với vòng lặp do-while:
        +  Khối mã được thực thi một lần.
        + Sau đó đánh giá điều kiện, nếu điều kiện là đúng, câu lệnh được lặp lại miễn là điều kiện được chỉ định được đánh giá là đúng.
 */
var i=0;
var IRequest=false
do{
    i++;
    console.log('Nhập Thể Lần:'+i);
    if(false){
        IRequest=true;
    }
}while(!IRequest&& i<=3)