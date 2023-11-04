/**
 * Contructer Object là Gì trong Js
 */
// tạo contruter cho object nào đó

function User(fistName,lastName,age,addRess){
    this.fistName=fistName;
    this.lastName=lastName;
    this.age=age;
    this.addRess=addRess;

    // them FullName
    this.getFullName=function(){
        return `${this.fistName} ${this.lastName}`;
    }
}
// tao Oject để SD contructer
var admin=new User('Nguyễn','Thuân',23,'Gò vấp,TP.HCM');
var client=new User('Lê','Teo',18,'Tây Ninh');

//thêm thuoc tính cho các Object
admin.tile='Chia sẻ',
client.comment='bình luận cái gì đó'

// gọi Object
console.log(admin.getFullName());
console.log(client.getFullName())