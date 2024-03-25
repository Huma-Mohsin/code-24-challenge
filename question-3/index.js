// //: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.
//SOLUTION
//BLOCK LEVEL SCOPE
{
    var Student_name = "ABC";
    var Student_Id = "GAI-2345";
    var D_O_B = "12-Jan-2000";
    var Gender = "Female";
    var Email_Id = "abc@example.com";
    var phoneNumber = 1234567;
    var courses = ["GENAI", "AI-Robotics"];
    //Accessing all variables with in a scope
    console.log(Student_name);
    console.log(Student_Id);
    console.log(D_O_B);
    console.log(Gender);
    console.log(Email_Id);
    console.log(phoneNumber);
    console.log(courses);
}
// //Accessing all variables out of scope
// accessing one variable with let keyword and const keyword to watch behaviour of data with that keywords.
//1 Accessing value with const keyword
console.log(Gender); //causes an error i.e Cannot find name 'Student_name'.
//2- Accessing value with let keyword
try {
    console.log(Student_name); // causes an error i.e Cannot find name 'Student_name'.
}
catch (error) {
    console.log("`Student_name` is not accessible outside the block.");
}
//Author-HUMA MOHSIN
