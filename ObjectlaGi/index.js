/**
 * ObJect là gì trong JS
 * 
 */

//tạo 1 object 
var keyPhone=['phoneNumber'];
var keyEmail=['Email']

var myObject={
    fullName: 'Minh Thuận',
    age: 23,
    adress: 'Tây Ninh, VN',
    [keyPhone]: '0365249557',
    [keyEmail]: 'thuannho062@gmail.com',
    // tao phuong thức ở trong obJect
    gerdata:function(){
        return this[keyPhone];
    }
}

// thêm Object cho methor




// gọi Object
console.log(myObject.gerdata());
