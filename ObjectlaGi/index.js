/**
 *  * ObJect là gì trong JS
 *      - một object (đối tượng) là một tập hợp các cặp key - value không có thứ tự. Mỗi cặp key - value được gọi là một thuộc tính.
 *         + Key của một thuộc tính có thể là một chuỗi
 *         + Value của một thuộc tính có thể là bất kỳ giá trị JavaScript hợp lệ nào, ví dụ: Một chuỗi, một số, một mảng và thậm chí là một hàm.
 * 
 */

// Tạo keys cho Object
var keyPhone=['phoneNumber'];    
var keyEmail=['Email']
//tạo 1 object 
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
//console.log(myObject.gerdata());
