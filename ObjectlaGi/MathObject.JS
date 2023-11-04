/**
 * Math object là  Đối tượng Math trong javascript chứa các thuộc tính, phương thức xử lý toán học. 
 * Chúng ta có thể gọi nó từ bất kỳ đâu mà không phải khởi tạo.
 * Cú Pháp: Math.property|method;
 */
/**
 * Math.PI trả về số PI
 * Math.round nó làm tròn số
 * Math.abs giúp trả về giá trị tuyệt đối 
 * Math.ceil giúp làm tròn trên
 * Math.floor làm tròn dưới 
 * Math.random trả về số thập phân nhỏ hơn 1 
 * Math.min lấy số nhỏ nhất
 * Math.max lấy số lớn nhất
 */
var random= Math.floor(Math.random()*100)
if(random<10){
    console.log('Chúc mừng bạn trúng Báo vật!');
}
console.log(random) 

console.log(Math.PI);
console.log(Math.min(4,5,1,0,-1));