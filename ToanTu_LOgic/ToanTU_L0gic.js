/**
 * Toán tử logic là gì?
 * - là toán tử kết nối hai hay nhiều biểu thức, dùng để kiểm tra mối quan hệ logic giữa các biểu thức.
 *  Kết quả cuối cùng phụ thuộc vào giá trị của từng biểu thức và loại toán tử logic. Theo định nghĩa thông thường,
 *  toán tử logic chỉ áp dụng cho kiểu dữ liệu boolean và kết quả trả về cũng là giá trị boolean.
 */

//Nó GỒm có 3 thằng
/**
 * &&- end Bất buột phải đúng hết nếu 1 trong DK sai thì nó Sẽ Sai
 * || or  không là câu DK 1 trong những cau điều kiện ,có 1 điều kiện Đúng thì nó sẽ đúng
 * ! Not nếu them nó vào DK đang đúng thì nó sẽ sai và ngược lại
 */

//VD
//Điêu KIện && 
var numBer =0;
var numBer1=4;
var numBer2=3;
if(numBer > 0&& numBer1 > 2 && numBer2 < 6 ){
    console.log('Điêu Kiện Đúng!');
}
else{
    console.log('Điều Kiện Sai!');
}

//Điều Kiện ||

if(numBer2 < 3 || numBer < 1 || numBer1 > 4){
    console.log('Điêu Kiện Đúng!');
}
else{
    console.log('Điều Kiện Sai!');
}


//Điều Kiện !- Not

if(!(numBer1>=5)){
    console.log('Điêu Kiện Đúng!');
}
else{
    console.log('Điều Kiện Sai!');
}