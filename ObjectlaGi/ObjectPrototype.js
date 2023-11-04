/**
 * Object prototype là gì
 * 1. Prototype là gì?
 *  - Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác. 
 *    Tất cả các object trong javascript đều có một prototype, 
 *   và các object này kế thừa các thuộc tính (properties) cũng như phương thức (methods) từ prototype của mình.
 * 
 * 2. Sữ dụng khi nào?
 *  - giúp ta truy cập tới các thuộc tính và phương thức của đối tượng. v      
 *    Khi chúng ta truy cập vào một Property của một Object, JavaScript sẽ tìm Property đó bên trong chính Object. 
 *    Nếu không có nó sẽ tiếp tục tìm lên trên Prototype của Object và cứ tiếp tục như thế cho đến khi gặp Object.
 */

// tạo contructer 
function obJectUser(fistname,lastName,age){
    this.fistname=fistname,
    this.lastName=lastName,
    this.age=age,  
        

    // để lấy Fullname
    this.getFullname= function(){
        return `${this.fistname} ${this.lastName}`;
    }
}

obJectUser.prototype.className='VN'
obJectUser.prototype.getclassBE= function(){
    return this.classBe='newwork'
}



//  tao Oject để SD contructer
var admin=new obJectUser('Nguyễn','Minh Thuận',23);
var client=new obJectUser('Lê', 'Anh Tùng', 45);


// gọi Object
console.log(admin.className);
console.log(client.getclassBE());