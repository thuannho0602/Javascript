/**
 * Chuỗi String Trong Javascript 
 * 1.Tạo chuỗi
 *  - Các Cách tạo chuỗi
 *  - Nên dùng cách nào? Ly do
 *  - kiểm tra data type
 * 2. Một số case sử dung backslash(\)
 * 3. xem độ dài chuỗi 
 * 4. Chú ý độ dài chuỗi
 * 5. Template string ES6
 */

//1 Tạo chuỗi 
 // có hai cách tạo chuỗi là :
 //cách 1 là  var fullName='' rồi chuyền giá trị vào dấu '', 
 var fullName='Nguyễn MInh THuận';
 console.log(fullName);
 // cách 2 là var fullnaMe=new String ('Minh THuận')
 var fullnaMe= new String('Minh Thuận');
 alert(fullnaMe);

 //nên dùng cánh 1 hay cách 2 
 // nên dùng cách 1 bởi vì nó ngắn , dễ hiểu hon 

 //cách 2 dài dòng hơn , khi nào mình muốn khởi tạo 1 đối tượng, khó hiểu hơn


 //2 Một số case sữ dụng backslash là gì
 var fUllName='Nguyễn Minh \'\"Hai"\'';
 console.log(fUllName);


 //3.xem độ dài chuỗi
 var fllname='Nguyễn Minh   Thuận ';
 console.log(fllname.length); 

 //5. Template string ES6
 var lastName='Nguyễn'
 var firstName='Minh THuận'
 // cách thường để nối chuỗi
 console.log('Hi: '+lastName + ' ' +firstName);
 // cách 2  dùng Template string ES6 
 console.log(`ES6: ${lastName} ${firstName}`);