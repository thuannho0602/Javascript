//  MyforEach
// Object Prototype quên thì học lại và for in
// hasOwnProperty: Trả về giá trị true/false cho biết object có thuộc tính được đưa ra không.

//viết hàm ForEach 2

// Tạo hàm forEach2 để sử dụng
Array.prototype.forEach2=function(callback){
        for(var index in this){
            if(index.hasOwnProperty(index)){
                callback(this[index],index,this);
            }
        }
}
// Tạo 1 cái mảng
var couns=[
    'Java',
    'PHP',
    'C#'
];
// gọi hàm forEach2
couns.forEach2(function(coun,index,arr){
    //console.log(coun,index,arr);
});