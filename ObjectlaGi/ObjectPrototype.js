/**
 * Object prototype là gì
 * 1. Prototype là gì?
 *  - 
 * 2. Sữ dụng khi nào?
 *  -
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