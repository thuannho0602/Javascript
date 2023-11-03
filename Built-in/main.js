//Dùng đễ thông báo alert
var fullName='Nguyễn Minh Thuận';
alert(fullName);


// cosole.log()dùng in ra thông báo 
var masee='thống báo';
/*console.log(masee);*/
console.warn(masee);

// confirm dùng để xác nhận  từ from 
confirm('xác nhận đủ tuổi');


// prompt  dùng để xác nhận vào có text để người dùng điền vào
prompt('xác nhận đã đủ tuổi');

/**
 * phương thức **`setTimeout()`** sẽ thực thi hàm 1 lần duy nhất sau một khoảng thời gian xác định.
 *  Muốndừng không cho hàm chạy nữa dù chưa kết thúc thời gian đã đặt ở phương thức 
 * **`setTimeout()`** thì dùng phương thức **`[clearTimeout()](https://hocjavascript.net/tong-quan/cleartimeout-trong-javascript/)`**.
 */
setTimeout(function() {
    console.log('Thông báo setTimeout');
},1000)


/**
 * phương thức **`setInterval()`** sẽ thực thi hàm lặp đi lặp lại cho đến khi phương thức 
 * **`[clearInterval()](https://hocjavascript.net/tong-quan/clearinterval-trong-javascript/)`** 
 * được gọi hoặc cửa sổ bị đóng (tải lại trang). Để tìm hiểu rõ hơn về phương thức 
 * **`[clearInterval()](https://hocjavascript.net/tong-quan/clearinterval-trong-javascript/)`**,
 */

setInterval(function() {
    console.log('Thông báo setInterval');
},100)