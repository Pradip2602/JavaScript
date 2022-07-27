
// Loops in JS
// 1. for loop
var arr = [10, 20, 30, 40, 50, 60];

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//2.for each loop

// arr.forEach((element) => {
//     console.log(element);
// });

// 3.while loop
j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// 4.do while loop
// do while loop executes minimum single time whether condition true or false

// do{
//     console.log(arr[j]);
//     j++;
// }
// while(j<arr.length);

// break statement --> it will brake the loop when value is true.


for(var i = 0;i<arr.length;i++){
    if(i==4){
        break;
    }
    console.log(arr[i]);
}
