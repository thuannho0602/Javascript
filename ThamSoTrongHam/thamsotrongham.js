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