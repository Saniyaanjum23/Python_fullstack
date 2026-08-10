console.log("Hello world")
let student_name="Elsa"
console.log("Student name is: " +student_name)
let student_age=21
let course_name="Python Full Stack"
console.log("Student age is: "+student_age,"\n", "Course name is :" + course_name)
let fee=10000
let discount=10
let discounted_fee=fee-(fee*discount/100)
console.log("Discounted fee is:"+discounted_fee)
let age=18
if(age>=18){
    console.log("Eligible for admission")
}
else{
    console.log("Not eligible or admission")
}
for(let i=1;i<=5;i++){
    console.log("Iteration number:"+i)
}
const pi=3.14
console.log("Value of pi is:"+pi)
let student={
    name:"Elsa",
    age:21,
    course:"Python Full Stack",
    fee:10000
}
console.log("Student details:" , student)

function greetStudent(name){
    console.log("Hello "+name+"\nwelcome to NRIIT Learning Management System")
}
greetStudent(student_name)

// write a funtion to square number
function squareNumber(num){
    return num*num;
}
x=squareNumber(5);
console.log("Square of 5 is:",x)

//write a function to odd or even number
function oddevenNumber(num){
    if (num % 2 == 0){
        console.log("The number is even number.")
    }
    else{
        console.log("The number is odd number.")
    }

}
x=oddevenNumber(10);

function checkOddEven(num){
    if(num %2==0) {
        return "Even";
    }else{
        return "Odd";
    }
}
console.log("Check if 7 is odd or even:",checkOddEven(7));

//scrip.js
alert("Welcome to NRIIT Learning Management System")
let heading = document.getElementById("welcome");
heading.innerHTML = "Welcome Future Software Engineers"
console.log("Heading element:", heading)
let msg = document.getElementById("message");
msg.innerHTML = "Javascript is fun"
console.log("Message element: ", msg)
function showmessage() {
    alert("Welcome to NRIIT Learning Management System")
}
function changeHeading() {
    document.getElementById("welcome").innerHTML = "Welcome Python Fullstack Developers"
}
let heading1 = document.querySelector("#welcome");
console.log("Heading element: ", heading1)
let button = document.getElementById("btnGreeting");
button.addEventListener("click", function () {
    alert("Welcome to javascript Event Handling");

});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit",
    function (event) {
        event.preventDefault();//prevent form submission
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        if(!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }
        alert("Regitration successfull!");
        console.log("Name:",name);
        console.log("Email:",email)
        console.log("Password:",password);
    });
    