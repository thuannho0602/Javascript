//Làm Việc Với Chuỗi

var myStringShow='Chuỗi Javascript Basic';

// tìm hiểu thêm trên GG: string javasript methor

///1. Length: KT độ dài của chuổi
console.log('Length: ',myStringShow.length);

//2. Find index: Tìm vị trí ở trong 1 chuỗi nó đếm từ vị trí 0 
console.log('Find Index: ',myStringShow.indexOf('Basic'));

//3. cut string:Nó được sữ dụng để cắt vị trí
console.log('Cut string: ',myStringShow.slice(6,16))


//4. Relace:Nó được dùng để ghì đè trong chuỗi
console.log('Relace: ',myStringShow.replace('Javascript','JS'))

//5. Convert to upper case: nó Được dùng chuyển đổi chữ thường thành chữ hoa
console.log('Convert to upper case: ',myStringShow.toUpperCase());

//6. Convert to lower case:  nó dùng để chuyển đổi chữ hoa thành chữ thường
console.log('Convert to lower case: ',myStringShow.toLowerCase());

//7. trim: được sử dụng để loại bỏ khoản trắng
console.log('Trim:',myStringShow.trim().length);

//8. Split: cắt chuỗi thành 1 Arry

console.log('Split: ',myStringShow.split(' '));

//9. Get a character by index: nó dùng để lấy 1 ký tự
console.log(myStringShow.charAt(0));


var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    console.log(coursesStr.split(' , '),str);
}

// Expected results
console.log(strToArray(coursesStr)) 