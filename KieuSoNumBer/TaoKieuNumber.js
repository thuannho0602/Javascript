/**
 * Kiểu số Number trong JS
 * 1. Tao giá trị Number
 *   -  các cách tạo
 *   - dùng cách nào tại sau
 *   - kiểm tra data type
 * 2. làm việc mới Number
 *    - To String
 *    - To Fixed
 */

// 1 tạo giá trị Number 
// các cách tạo Number 
// có 2 cách, cách 1 
    var age=23;
        //KT data type
    console.log('Cách 1:',typeof age);
    var PI=3.14;
    //KT data type
    console.log('Cách 1:',typeof PI)

    // cách 2 tạo number bằng New
    var oppenNumber=new Number(8);
    //KT data type
    console.log('Cách 2:', typeof oppenNumber);

    // nên sử dụng cách 1 bở vì nó ngắn gọn dễ hiểu hơn , so với cách 2 là mình tao Number bằng Object , khó hiểu hơn,và kiểm tra data type thì no thành object

   /* 2. làm việc mới Number
    *    - To String
    *    - To Fixed
    */
    // tostring dùng để chuyển dữ liệu sô qua kiểu string
        var aGe=24;
        console.log(typeof aGe.toString());

    // toFixed dùng để rút gon số thập phân
    var pi=3.140000;
    console.log(pi.toFixed(1));