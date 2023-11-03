/**
 * Làm việc với mảng
 * 1.ToString():
 * 2.Join():
 * 3.Pop():
 * 4. Push():
 * 5.Shift():
 * 6.UnShift():
 * 7.Splicing():
 * 8.Concat();
 * 9.Slicing();
 * 
 */
var listArry4=[
    'Vuejs',
    'Net Core',
    'Ruby',
    'Javasript',
]

var listArry5=[
    'Swift',
    'Flutter'
]

// 1.ToString(): Nó dùng để chuyển Arry sang string
console.log('TOstring: ',listArry4.toString());

// 2.Join(): Nó dùng để biến arry thành một cái chuỗi
console.log('Join: ',typeof listArry4.join());

//3.Pop(): Nó dùng xóa Element cuối của mảng và trả về phần tử cuối của mảng
console.log('Pop: ',listArry4.pop('Ryby'));

//4. Push(): Thêm 1 hoặc nhiều phần tử của mảng và trả về độ dài mới  của mảng
console.log('Push: ',listArry4.push('CSS','HTML'))

// 5.Shift(): xóa đi phần tử đầu của mảng và trả về phần tử  đã xóa 
console.log('Shift: ', listArry4.shift());

// 6.UnShift():thêm 1 hoặc nhiều phần tử đầu của mảng và trả về độ dài mới của mảng
console.log('UnShift: ', listArry4.unshift('Java', 'Golang', 'C#'));


// 7.Splicing(): xóa cắt có thể chèn phần tử của mảng

'Splicing:' ,listArry4.splice(1,0,'Angularjs');

// 8.Concat(); nó dùng dể hợp nhát cái mảng với nhau 
   console.log('Concat:',listArry5.concat(listArry4));

// 9.Slicing(); cắt 1 vài hoac12c nhiều vị trí của mang
console.log('Slicing', listArry4.slice(-3))


console.log(listArry4);