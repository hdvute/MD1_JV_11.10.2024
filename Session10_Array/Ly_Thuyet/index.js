// Khai báo mảng
let array;
// Khỏi trạo giá trị cho mảng
array = [1,2,3,4,5,6,7,8,9,10];
let arrayString = ["quả chuối","quả đào","quả ổi","quả đào"];
let arrayObject = [1,"string", true, false];
// Cách khác
let arrayAdvance = new Array(4);//tạo mảng gồm các phần tử rỗng
console.log("array =>>>",array);
console.log("arrayAdvance =>>>",arrayAdvance);
// Cú pháp
// truy suất giá trị trong mảng theo một vị trí index biết trước
let phanTuViTriThu5 = array[5] // = 6
console.log("Phần tử vị trí thứ index = 5 là ", phanTuViTriThu5);
console.log("Phần tử vị trí thứ index = 5 là ", array[5]);
// Thay đổi giá trị
array[5] = 100; // thay đổi giá trị trong mảng bằng phép gán
console.log("array =>>",array);

// Lấy ra độ dài mảng
console.log("Độ dài của mảng là: ", array.length);//
// Thêm một phần tử vào cuối mảng
array.push(1000);
// console.log("mảng sau khi được chèn thêm phần tử vào cuối mảng :",array);

// Bài toán duyệt mảng
// in ra lần lượt từng giá trị trong mảng
// dùng for i
//Nâng cao
// Hãy kiểm tra xem giá trị nào chia hết cho 3 thì in ra màn hình

// Duyệt thông qua vị trí   for i
for(let i=0;i<array.length;i++){
    // console.log(`Phần tử tại vị trí ${i} = ${array[i]}`);//Nối chuyển kiểu literal string    
    if(array[i]%3==0){
        console.log(`Phần tử tại vị trí ${i} chia hết cho 3 = ${array[i]}`);//Nối chuyển kiểu literal string 
    }
}
// Cách duyệt thông qua giá trị : for of
for(let value of array){
    console.log("value ==> ", value) //value: biến
}
// Các phương thức của Array
let newLength = array.unshift(1,2,3);  // Chèn các phần tử mới vào đầu và trả về chiều dài mảng
console.log(array);

// array.every();
// array.filter(); Sau hàm
// array.findIndex(); Sau hàm
// array.forEach(); 
// array.includes();// Kiểm tra phần tử có tồn tại trong mảng hay không
// let checkExist = arrayString.includes("quả chuối"):
// console.log("quả chuối có tồn tại trong mảng arrayString hay không ");

array.indexOf(); //Lấy ra vị trí theo giá trị
let indexOfQuaDao = arrayString.indexOf("quả đào");
console.log("Vị trí quả đào = ",indexOfQuaDao);

array.join();//Nối mảng thành chuổi
console.log("nối mảng thành chuổi cách nhau bởi dấu gạch ngang - ", array.join("-"));


// array.map(); //Sau hàm
array.pop(); // xóa và trả về phần tử cuối cùng của mảng
// array.reduce(); //Sau hàm
// array.shift(); lấy và xóa phần tử đầu của mảng
// let arraySort = array.sort((a,b)); //sắp xếp theo thứ tự tự nhiên a,b,c,d  or 1,2,3 Sau hàm
console.log(arraySort);


