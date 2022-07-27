// String is the sequence of characters

// escape charcter in string are backslashes
document.write("The Tata group is the \"Pride\"of the nation </br>"); // use double quotes in string
document.write('The Tata group is the \'Pride\'of the nation </br>'); // use single quotes in string
document.write('The Tata group is the \n Pride of the nation </br>'); // new line

//String methods
//1. lenght method
let fullName = "Pradip Ravindra Chavan";
document.write("The length of name is: " + " " + fullName.length+ "</br>")

//2.getting strings part(slice,substring,substr).
    //using slice method (13 is not included here)
    function usingSlice(){
       let str = "Apple, Banana, Kiwi";
       let part = str.slice(7, 13);
       let part1 = str.slice(-12, -6); //it will count from end of String
       let part2 = str.slice(7) // it will all the content after 7 index
        document.write("The slice result :" + part + "</br>"); //it will give "Banana"
        document.write("The slice result :" + part2 + "</br>") //it will give "Banana Kiwi"
    }
    usingSlice();

    //using substring method (it is same as slice but start and end values are less than 0 treated as 0)
    function usingSubstring(){
        let str = "Apple, Banana, Kiwi";
        let part = str.substring(7,13); // it will give "Banana"
        let part1 = str.substring(-5,-3); 
        document.write("The substring result :" + part + "</br>");
        document.write(part1 + "</br>"); // it will give empty string
    }
    usingSubstring();

    // using substr(second parameter specifies the lenght of extracted part)
    function usingSubstr() {
        let str = "Apple, Banana, Kiwi";
        let part = str.substr(7, 6); // it will start from 7 and take 6 ch.
        document.write("The substr result :" + part + "</br>"); // it will give "Banana"
    } 
    usingSubstr();

/* String3.replace method
    it is case sensitive.
    it will give completely new string.
    method replaces only first match.    */
    function replaceMethod(){
        let text = "Please visit Facebook";
        let newText = text.replace("Facebook","Twitter");
        document.write("by using Replace:" + newText + "</br>"); // facebook is replaced with twitter
    }
    replaceMethod();

//4.converting toUpperCase and toLowerCase
    function convert(){
        let text = "Hello Zensar";
        let upper = text.toUpperCase();
        document.write("by using toUpperCase: "+upper+"</br>");
        let lower = text.toLowerCase();
        document.write("by using toLowerCase: " + lower + "</br>");
    }
    convert();

// 5. using Trim method(we can remove whitespaces both forward and backwards)
    function trimMethod(){
        let name = "    Virat Kohli     ";
        let newName = name.trim();
        document.write("By sing Trim : "+newName+"</br>");
    }
    trimMethod();

// 6. using padStart and padEnd method(we can add letters and numbers both forward and backwards)
    function padding(){
        let text = "7";
        let padStart = text.padStart(3,"0");
        let padEnd = text.padEnd(3,"x");
        document.write("By using padstart :"+padStart+"</br>");
        document.write("By using padend :"+padEnd+"</br>");
    }
    padding();

/** 7.extracting string characters.
1.charAt ---> give char at position
2.charCodeAt --> gives ASCI value of char. */
    function getChar(){
        let text = "The Name is James Bond";
        let char = text.charAt(10);
        document.write("By using charAt : "+char+"</br>");
        let charCode = text.charCodeAt(10);
        document.write("By using charCodeAt : "+charCode+"</br>");
    }
    getChar();

/** 8.string search methods.
    1.indexOf method ---> gives first occurrence of the text in string
    2.lastIndexOf method ---> gives last occurrence of the text in string
    3.match method ---> it will take parameter and return array of matching.
    4.split method ---> it will take parameter and return array.
    5.includes method ---> it will check the parameter exist in string
    6.startsWith method ---> it will check parameter and check string start with that or not.
    7.endsWith method ---> it will check parameter and check string ends with that or not.    */
        function stringSearch(){
            let text = "The Name is James Bond James";
            let index = text.indexOf("James");
            document.write("By using indexOf : "+index+"</br>");
            let lastIndex = text.lastIndexOf("James");
            document.write("By using lastIndexOf : " + lastIndex + "</br>");
            let match = text.match(/m/g);
            document.write("By using match : " + match + "</br>");
            let split = text.split(/me/g); // regex will check golbally in string.
            document.write("By using split: "+split+"</br>");
            let checkChar = text.includes("Bond");
            document.write("By using includes: " + checkChar + "</br>");
            let startWith = text.startsWith("The");
            document.write("By using startsWith: " + startWith + "</br>");
            let endWith = text.endsWith("James");
            document.write("By using endsWith: " + endWith + "</br>");

        }
        stringSearch();

/* String Templates */

// String interpolation --> it allows interpolate variables and expression in strings.
// variable substitution
let firstName = "Pradip";
let lastName = "Chavan";
    function getIntro(){
        let intro = `My name is ${firstName} ${lastName}`+"</br>";
        document.write(intro);
    }
    getIntro();
//expression substitution
let price = 1000;
let gst =1000*0.18;
function getTotal(){
    let total = `The total price is : ${price+gst}`
    document.write(total);
}
getTotal();

/* HTML Templates */

let header = "This is HTML Template"

let html = `<h2><i>${header}</i></h2>`;
document.getElementById('demo').innerHTML = html;