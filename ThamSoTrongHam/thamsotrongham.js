/**
 * Tham số trong hàm javascript cơ bản
 * 
 */
/**
 * 1. Tham Số
 *  - Định nghĩa
 *  - Tính private
 *  - 1 tham số 
 *  - nhiều tham số
 * 2. Truyền tham số
 *  - 1 tham số 
 *  - nhiều tham số 
 * 3. Đối tượng Arguments?
 *  - đối tượng arguments
 *  - Giới thiệu vong for
 */
 /**
  * 1. Tham Số
 *  - Định nghĩa
 *  - Tính private
 *  - 1 tham số 
 *  - nhiều tham số
  */
 function mylog() {
    console.log('thuan','Nguyễn ','Minh');
 }
 mylog()
 /**
  * 3. Đối tượng Arguments?
 *  - đối tượng arguments
 *  - Giới thiệu vong for
  */

 function ArgumentsLog(){
    var myString='';
    for(var param of arguments){
        myString+=`${param}-`
    }
    console.log(myString);
 }
 ArgumentsLog('THuan','teo', 'Hai');

 /**
  * một sồ điều cần biết về Function
  * 
  * 1. khi Function đặt trùng tên
  * 2. khai báo biến trong hàm 
  * 3. Định nghĩa hàm trong hàm
  */

 //1. khi Function đặt trùng tên nó sẽ bì ghì đè lên các hàm dc xây dựng trước đó
 function showthongbao(){
    console.log('Cau thông Báo 1');
 }
 function showthongbao(){
    console.log('Cau thông Báo 12');
 }
 function showthongbao(){
    console.log('Cau thông Báo 4');
 }
 showthongbao();

 //2 khai báo biến trong hàm nó chỉ được sữ dụng trong ham thôi không đươc sung ra bên ngoài sẽ báo lỗi
 function NameFunction(){
    var name='Nguyễn Minh THuận';
    console.log(name);
 }
 NameFunction();

 //3.Định nghĩa hàm trong hàm nó cúng giống như khai báo biến trong hàm  nó có tinh private 
 function FunctionMessgase(){
    function FunctionMessgase2(){
        console.log('Day Là FunctionMessgase2');
    }
    FunctionMessgase2();
 }
 FunctionMessgase();