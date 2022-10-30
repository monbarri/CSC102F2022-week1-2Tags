function arrayTest() {
    const myClasses = ["CSC102 , RBT131 , RBT211 , SPT346"];
    console.log(myClasses[1]);
    myClasses[1] = "CSC230";
    console.log(myClasses[1]);
    console.log(myClasses.length);
    for (var i = 0; i < myClasses.length; i++) {
        console.log(myClasses[i]);
    }
}

function stackPhun() {
    let myStack = [];
    myStack.push("first item");
    myStack.push("2md item");
    myStack.push("3rd item");
    console.log(myStack);
    for (var i = 0; i < myStack.length; i++) {
        console.log(myStack[i]);
    }
    myStack.pop();
    console.log(myStack);
}