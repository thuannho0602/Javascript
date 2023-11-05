/**
 * Toán tử 3 ngô là gì
 *  -Là một toán tử được cấu tạo bởi ba đối số gồm biểu thức điều kiện, kết quả khi điều kiện đúng và kết quả khi điều kiện sai.
 *   Kết quả ở đây có thể là một giá trị được trả về, cũng có thể là một xử lý sẽ thực hiện sau đó tùy thuộc vào điều kiện chỉ định là đúng hay sai.  
 */

var course={
    name:'Javascrpit',
    coin:0
}
// toán tử hai ngôi

// if(course.coin>0){
//     console.log(`${course.coin} coins`);
// }
// else{
//     console.log('Miễn Phí');
// }

// toán tử 3 ngôi 
var result=course.coin>0 ? `${course.coin} Coins`:'Miễn Phí'
console.log(result)

// toán tử 
var a=1;
var b=2 
var c=a >0?a:b
console.log(c);