/**
  1. for_Of là gì Vòng lặp này được ra mắt ở phiên bản ES6. Tương tự như for, vòng lặp này được sử dụng để duyệt từng phần tử của đối tượng duyệt. Số lượng lặp bằng với số phần tử của đối tượng.
 */

  // đối với mảng 
  var myArry =[
    'HTML',
    'Java',
    'C#',
    'C++'
  ]

  for(var key of myArry){
    console.log(key)
  }

  // đối với Chuổi
  var chuoi='MinhThuan'
  for(var value of chuoi){
    console.log(value)
  }

  // đối với đối tượng
  var myObject={
    name:'Teo',
    addres:'Tân Biên'
  }
  for(var key of Object.values(myObject)){
    console.log(key);
  }
