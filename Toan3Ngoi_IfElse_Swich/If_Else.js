/**
 *  câu Lệnh rẽ nhánh If else là gì:
 *  + Câu lệnh if trong JavaScript sẽ cho phép bạn thực thi một khối lệnh dựa trên việc đánh giá điều kiện đưa ra.
 *  + Sơ đồ trên hoạt động như sau:
        + Đầu vào sẽ kiểm tra điều kiện (trả về giá trị boolean).
        + Nếu điều kiện đúng (true) sẽ thực thi khối lệnh bên dưới rồi kết thúc.
        + Nếu điều kiện sai (false) thì kết thúc mà không thực thi khối lệnh.
    + Câu lệnh if else thì đầy đủ hơn câu lệnh if. Chúng ta có thể dựa vào kết quả trả về để xử lý cả hai trường hợp đúng hoặc sai của điều kiện.
        + Đầu tiên là kiểm tra điều kiện
        + Nếu điều kiện đúng thì khối lệnh thực thi 1 sẽ làm việc, khi thực thi xong sẽ kết thúc câu lệnh.
        + Nếu điều kiện sai thì khối lệnh thực thi 2 sẽ làm việc, khi thực thi xong sẽ kết thúc câu lệnh.
    + Câu lệnh if else if trong JavaScript  
        - Câu lệnh if else if trong JavaScript là câu lệnh if else lồng nhau 
 */
// tạo câu lệnh If Else

var  mony=1000;
if(mony<=100){
    console.log('Điều diện đúng');
}else if(mony<=50){
    console.log('Điều diện đúng');
}else if(mony<=10){
    console.log('Điều diện đúng');
}
else{

    console.log('Điều diện Sai');

}