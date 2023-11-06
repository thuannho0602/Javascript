/**
 *  Đệ quy là gì 
    - Đệ quy là một quá trình mà trong đó một đối tượng sẽ tự thực hiện lời gọi chính nó.
    - Một hàm tự gọi chính nó được gọi là một hàm đệ quy. Một hàm đệ quy phải chứa một điều kiện để dừng thực hiện lời gọi cho chính nó.
 */


// // tạo ra ham điếm ngược thời gian dùng đệ quy
// function countDow(num){
//     // nó set coi giá trị vào 
//     if(num>0){
//         //  no in ra và return num tri di 1
//         console.log(num);
//         return countDow(num -1)
//     }
//     return num;
// }
// countDow(3)// Giá trị vào 


// tạo ra cái mảng
function chuoiArry(start,end,cb){
    if(start<end){
        cb(start)
        chuoiArry(start + 1,end,cb);
    }
}

var myaryy= ['Js','C#','PHP']
chuoiArry(0,myaryy.length,function(index){
    console.log(myaryy[index]);
});