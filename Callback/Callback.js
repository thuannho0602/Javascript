/**
    1. Callback là gì trong js
        - Callback là gì? Callback là khái niệm để chỉ 1 hành động (A) được gọi sau khi thực hiện 1 hành đồng (B) mà không biết trước thời điểm kết thúc của (B).


    + Nó là hàm;
    + truyền qua đối số;
    + được gọi lại (trong hàm nhận đối số)
 */

    var listAlls=[
        'C#',
        'Java',
        'Golang',
        
    ]
    var htmls=listAlls.map(function(listAll){
        return `<h3>${listAll}</h3>`
    });
    // console.log(htmls)