/**
   + Arr methor 
        + foreach(): là một phương thức có sẵn trong mảng. Với nó ta có thể lặp qua từng phần tử có trong mảng và xử lý chúng theo thứ tự;
        + every():một phương thức dành cho đối tượng mảng trong javascript,
        + some(): xác định xem ít nhất một thành viên mảng có thỏa mãn bài kiểm tra được xác định bởi hàm đã cho hay không;
        + find(): cho phép bạn thực thi một hàm gọi lại bằng cách lặp qua các phần tử của một mảng và trả về phần tử đầu tiên trong mảng được cung cấp thỏa mãn điều kiện đã cho.;
        + filter(): tạo một mảng mới bao gồm tất cả các phần tử vượt qua phép kiểm tra được thực hiện bởi hàm callback();
        + map(): là một loại object cho phép lưu trữ dữ liệu theo kiểu key-value; 
        + reduce():Là một phương thức có sẵn của array, được sử dụng để gọi một hàm lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy;

 */

    var Arr=[
        {
            id: 1,
            name: 'PHP',
            cions:0
        },
        {
            id: 2,
            name: 'C#',
            cions:0
        },
        {
            id: 3,
            name: 'Java',
            cions:0
        },
        {
            id: 4,
            name: 'JS',
            cions:250
        },
        {
            id: 5,
            name: 'Golang',
            cions:200
        }, 
        {
            id: 6,
            name: 'C#',
            cions:500
        },
        {
            id: 7,
            name: 'C#',
            cions:1000
        },
    ]
    // foreach():
    Arr.forEach(function(arrs,index){
        console.log(arrs,index);
    })
    // every():một phương thức dành cho đối tượng mảng trong javascript,
    var Isfree=Arr.every(function(arrs,index){
        console.log(index)
        return Arr.cions==0
    });
    console.log(Isfree);

    //some(): xác định xem ít nhất một thành viên mảng có thỏa mãn bài kiểm tra được xác định bởi hàm đã cho hay không;
    var Ismin=Arr.some(function(min,index){
        return min.cions===0;
    });
    console.log(Ismin);

// find(): cho phép bạn thực thi một hàm gọi lại bằng cách lặp qua các phần tử của một mảng và trả về phần tử đầu tiên trong mảng được cung cấp thỏa mãn điều kiện đã cho.;
var Isname=Arr.find(function(arrName,index){
    return arrName.name==='JS';
});
console.log(Isname);

// filter();  tạo một mảng mới bao gồm tất cả các phần tử vượt qua phép kiểm tra được thực hiện bởi hàm callback()
var listArrs=Arr.filter(function(lisarr,index){
    return lisarr.name==='C#';
})
console.log(listArrs)

//map(): là một loại object cho phép lưu trữ dữ liệu theo kiểu key-value; 
var listMAp=Arr.map(function(lists,index){
    return {
        id:lists.id,
        name:`Bài Học: ${lists.name}`,
        cions:lists.cions,
        priec:`Giá: ${lists.cions}`,
        
    }
})
console.log(listMAp);

//reduce():Là một phương thức có sẵn của array, được sử dụng để gọi một hàm lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy
var totoaryyCoins=Arr.reduce(function(tooas,totoarr){
    return tooas+totoarr.cions;
    
},0);
console.log(totoaryyCoins);

//hãy làm phẵn đoạn mã sau 
var myarrs=[1,2,[3,4],5,6,[7,8,9]]
var totolarrs=myarrs.reduce(function(totol,valuetoto){
    return totol.concat(valuetoto);
},[]);
console.log(totolarrs)


// lấy khóa học  đựa vào mảng mới

var totoda=[
    {
        totol: 'Fe',
        courres:[
            {
                id:1,
                tile:'Angular ,Js ,HTML , CSS',
            },
            {
                id:2,
                tile:'Vuejs , JS, HTML , CSS'

            }
        ]
    },
    {
        totol: 'BE',
        courres:[
            {
                id:1,
                tile:'Java,SQL'
            },
            {
                id:2,
                tile:'C#,MVC,API,SQL'

            }
        ]
    },
]
var listToto=totoda.reduce(function(courres,totol){
    return courres.concat(totol.courres);
},[]);
console.log(listToto)


var htmls=listToto.map(function(courres){
        return `
        <Div>
            <H2>${courres.tile}</h2>
            <p>Id:${ courres.id}</p>
        </Div>`
})
console.log(htmls)