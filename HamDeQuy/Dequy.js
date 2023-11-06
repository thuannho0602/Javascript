/**
 *  Đệ quy là gì 
    - Đệ quy là một quá trình mà trong đó một đối tượng sẽ tự thực hiện lời gọi chính nó.
    - Một hàm tự gọi chính nó được gọi là một hàm đệ quy. Một hàm đệ quy phải chứa một điều kiện để dừng thực hiện lời gọi cho chính nó.
 */

// tạo ra ham điếm ngược thời gian dùng đệ quy

function countDow(num){
    if(num>0){
        console.log(num);
        return countDow(num -1)
    }
    return num;
}
countDow(3)