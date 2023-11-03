/**
 * Function Là gì trong JS
 * +Là một thành phần không thể thiếu trong cấu trúc chương trình.
 * +Hàm giúp chương trình trở nên rõ ràng, dễ hiểu bằng cách gộp những đoạn code lặp lại.
 *  +Nhờ vậy mà việc bảo trì phần mềm cũng dễ dàng hơn
 */
/**
 * 1. Hàm Là Gì?
 *      - Nó là một khối mã
 *      - nó làm 1 việc cụ thể
 * 2.Loại Hàm  
 *      - Built-in
 *      - tự định nghĩa
 * 3. Tính chất
 *      - Không thực thi khi định nghĩa
 *      - Sẽ thực thi khi được gọi 
 *      - Có thể nhận tham số
 *      - Có thể trả về một giá trị
 * 4. bull thử Function
 */

// Hàm tự Định nghĩa
function showDialog() {
    alert('Function KeVin');
}
// Gọi Hàm
showDialog();

function showMessage(message) {
    console.log(message);
}

showMessage("Hi anh em F8!");
/**
 * 1 Các loai Function 
	 - Declaration Function ()
	 - Expression Function ()
	 - Arrow Function ()
 */

// 1.Declaration Function () là định nghĩa function đầu tiên và tên cua function
function Declaration(){
    console.log('Declaration Function');
}
Declaration();

// Expression Function () là gán 1 biến trước function, có thể đặt tên cho nó để mình dễ hiểu  , có 1 vài số Expression

var showExpression=function(){
    console.log('Expression Function');
}
showExpression();

// Callback
setTimeout(function namesetTime() {

})

var myObjcet={
    myFunction:function namObject(){

    }
}



