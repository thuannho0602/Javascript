/**
 * Đối Tượng Date  trong JS
 *  - Đối tượng date trong javascript là nơi xử lý các vấn đề về thời gian.
 *  - Để khởi tạo đối tượng date trong javascript chúng ta có 4 cách:
 *      + Khởi tạo ngày giờ tại thời điểm hiện tại: * 
 *          + new Date();
 *      + Khởi tạo ngày giờ từ giá trị time millisecond:
 *          + new Date(milliseconds); Trong đó: milliseconds là thời gian chúng ta muốn khởi tạo đơn vị mili giây.
 *      + Khởi tạo ngày giờ từ một date string dạng atrribute:
 *          + new Date(year, month, day, hours, minutes, seconds, milliseconds)
 *      
 * 
 * đoc thêm tren GG:javascrpit date object mozlilla
 */
var date=new Date()
var day=date.getDate(); //ngày
var month=date.getMonth()+1;// Tháng
var year=date.getFullYear() //năm
//console.log(date)
console.log(`${day}/${month}/${year}`);


 //Các Phương thức của Date. 
 /**
  * Các phương thức get dữ liệu:
    * getDate() trả về ngày trong tháng (1 - 31).
        getDay() trả về ngày trong tuần (0-6), với chủ nhật là 0, thứ 2 là 1, thứ 3 là 2 ,...
        getMonth() trả về tháng trong năm (0 - 11).
        getFullYear() trả về năm dạng đầy đủ (YYYY).
        getHours() trả về số giờ dạng 24h (0 - 23).
        getMinutes() trả về phút trong giờ (0 - 59).
        getSeconds() trả về số giây trong phút (0 - 59).
        getMilliSeconds() trả về tích tắc trong giây (0 - 999).
        getTime() Trả về thời gian dạng mili giây.
  */

//Các phương thức set
/**
 *  setDate(x) thiết lập ngày trong tháng (1 - 31).
    setMonth(x) thiết lập tháng trong năm (0 - 11).
    setFullYear(x) thiết lập năm dạng đầy đủ (YYYY).
    setHours(x) thiết lập số giờ dạng 24h (0 - 23).
    setMinutes(x) thiết lập phút trong giờ (0 - 59).
    setSeconds(x) thiết lập số giây trong phút (0 - 59).
    setMilliSeconds(x) thiết lập tích tắc trong giây (0 - 999).
    setTime(x) thiết lập thời gian dạng mili giây.
 */

//Các phương thức khác.
    /**
     * toDateString() chuyển đổi thời gian về dạng date string.
        toISOString() chuyển đổi thời gian về dạng ISO (YYYY-MM-DDTHH:mm:ss.sssZ).
        toJSON() chuyển đổi thời gian về dạng JSON (YYYY-MM-DDTHH:mm:ss.sssZ).
        toLocaleDateString() chuyển đổi về ngày theo chuyển địa phương.
        toLocaleTimeString() chuyển đổi về giờ theo chuyển địa phương.
        toString() chuyển đổi thơi gian về dạng string.
        valueOf() chuyển đổi thời gian về dạng nguyên thủy.
     */