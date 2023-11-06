/**
 * + Vòng lặp lồng nhau (Nested loop) là gì trong js
        - là trường hợp dùng một vòng lặp bên trong một vòng lặp khác để giải quyết vấn đề.
        - Vòng lặp bên trong sẽ phải chạy nhiều lần cho đến khi vòng lặp bên ngoài kết thúc.
        - Ta thấy vòng lặp bên trong sẽ phải chạy mỗi khi vòng lặp bên ngoài duyệt qua một phần tử.
 */
// tạo 1 cái mảng và in ra màng hình 123456
// var mayarry=[
//     [1,2],
//     [3,4],
//     [5,6]
// ];
// // for cha
// for(var i=0;i < mayarry.length;i++){
//     // for con 
//     for(var j=0; j<mayarry.length;j++){
//         console.log(mayarry[i][j]);
//     }
// }
//lầy i luon +5
// for(var i=0;i<100;i+=5){
//     console.log(i)
// }

// in từ 100 xuong 0
for(var i=100;i>0;i--){
    console.log(i)
}

