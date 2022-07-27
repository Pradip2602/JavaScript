// Array is the collection of elements and it is also an object.

let cars = ["Tata","Audi","BMW","Ford","Volvo"];
    /* Printing array elements from for loop.
    for (let i = 0;i<cars.length;i++) {
        document.write(cars[i]+",");
    } 

    Printing the array elements with the help of for each loop.
    cars.forEach((elements)=> {
            document.write(elements+",");
        });

    document.write("</br>");
    cars.push("VolksWagon"); // adding elements in array.
    document.write("The lenght of array is:" + cars.length + "</br>"); // lenght of array.
    let totalCars = cars[cars.length - 1]; // getting last element of array.
    document.write("The last element of array :" + totalCars + "</br>");

    document.getElementById("demo").innerHTML=cars;
    console.table(cars);

    /* looping array element
     1. for loop
    let companies = "Car Companies";
    let display = `The major <h2>${companies}:</h2>`;
    let text = "<ul>";
    for(let x=0;x<cars.length;x++){
        text += "<li>"+cars[x]+"</li>";
    }
    text += "</ul>";
    document.getElementById('demo').innerHTML = display+text;
    */
   
   // 2.forEach loop
    let companies = "Car Companies";
    let display = `The major <h2>${companies}:</h2>`;
    let text = "<ul>";
    cars.forEach(myFunction);
    text += "</ul>";
    function myFunction(value) {
        text += "<li>"+value+"</li>";
    }
    document.getElementById('demo').innerHTML = display + text;
    // to check is given variables an array or not.
    console.log(Array.isArray(cars));
    document.write("**-------**------**--------**"+"</br>")

    // different Array Methods.

    let fruits = ["Mango","Apple","Pineapple","Graphes"];
    fruits.push("Orange");
    
    let items = "<ul>";
    fruits.forEach(myItems);
    items += "</ul>";

    function myItems(value) {
        items += "<li>"+value+"</li>";
    }
    document.getElementById('fruits').innerHTML = items;
    document.write("The Total Fruits are: "+fruits.length);