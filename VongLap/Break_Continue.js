/**
 * * Break và Continue là gì trong Js
    - Câu lệnh break và continue trong Javascript là hoàn toàn khác nhau.
     - Câu lệnh break có chức năng kết thúc hẳn vòng lặp. Tuy nhiên, câu lệnh continue chỉ bỏ qua lần lặp hiện tại và vẫn thực thi các vòng lặp tiếp theo
 */
//Tạo vòng lặp 
for(var i=0;i<10;i++){

    // Dk Lấy số chẳn
    if(i%2!==1)
    {
        continue
    }
    console.log(i);

    // In từ 0 đến 5 Dùng B break;
    if(i>=5){
        break;
    }
}