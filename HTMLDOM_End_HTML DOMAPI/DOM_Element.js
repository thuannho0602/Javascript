/**
 *  
    * DOM Element là gì :DOM element trong Javascript là tổng hợp những hàm như getElementById, getElementsByTagName, getElementsByClass và querySelectorAll. Nhưng hàm này có công dụng là truy xuất đến các thẻ trong tài liệu html. 
        + Sử dụng getElementById để tìm theo ID
            - Để truy xuất tới một thẻ HTML theo ID ta sử dụng cú pháp sau:
        + Sử dụng getElementsByTagName để tìm theo tên thẻ html
            - Tên thẻ HTML chính là tên các thẻ như p, a, div, ... Và ta sẽ truy xuất tới nó bằng cú pháp sau:
                Bài viết này được đăng tại [free tuts .net]
        + Sử dụng getElementsByClassName để tìm theo tên class
            - Để tìm các thẻ HTML có class nào đó thì ta dùng cú pháp sau:
        + Sử dụng querySelectorAll để tìm theo CSS selector
            - Khi chọn các thẻ HTML theo class thì thường sẽ trả về hàng loạt các kết quả nên đôi khi sẽ có những kết quả mà ta không muốn lấy. 
            Chính vì vậy javascript DOM có một phương thức kết hợp với CSS Selector để truy vấn có độ chính xác cao hơn, đó chính là hàm querySelectorAll.
            Và đây là cú pháp sử dụng:
        + Sử dụng getElementsSelector để tìm theo tên class
            - Các phần tử HTML hàng đầu có thể được truy câp / select trực tiếp bằng thuộc tính document.   
 */ 
//Sử dụng getElementById để tìm theo ID
    //Để truy xuất tới một thẻ HTML theo ID ta sử dụng cú pháp sau:
    var dom=document.getElementById('dom');
    console.log(dom)

//Sử dụng getElementsByClassName để tìm theo tên class
//Để truy xuất tới một thẻ HTML theo ID ta sử dụng cú pháp sau:
var classs=document.getElementsByClassName('class')
    console.log(classs);

//Sử dụng getElementsByTagName để tìm theo tên thẻ html
    //- Để tìm các thẻ HTML có class nào đó thì ta dùng cú pháp sau:
    var tag=document.getElementsByTagName('h2');
    console.log(tag)
//Sử dụng querySelectorAll để tìm theo CSS selector
//- Để tìm các thẻ HTML có class nào đó thì ta dùng cú pháp sau:
var selectorr=document.querySelectorAll('.class')
console.log(selectorr)

//Sử dụng queryElementsSelector để tìm theo tên class
    //Để tìm các thẻ HTML có class nào đó thì ta dùng cú pháp sau:

    var box=document.querySelector('.box-1')
    console.log(box);