/**
 *  * Contructer Object là Gì trong Js
 *      ructor là một cấu trúc khởi tạo các thuộc tính của mỗi đối tượng.
 * 
 *  * Tại Sao SD contructer
 *      - Chúng ta chỉ cần khởi tạo một constructor ban đầu và sau đó tạo mỗi đối tượng trong 1 dòng lệnh,
 *          nhẹ nhàng hơn nhiều đúng không Hơn thế nữa thì constructor sẽ làm đồng bộ dự liệu. 
 *          Như kiểu chúng ta đã tạo một khuôn sẵn ấy, tránh sai sót khi truyền giá trị vào cho thuộc tính.
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