console.log("hello world!");

generateAlert = () => {
    let name = document.getElementById("inputName").value;
    let mail = document.getElementById("inputEmail").value;
    let subject = document.getElementById("inputSelect").value;
    let number = document.getElementById("inputNumber").value;
    let newsletter = document.getElementById("inputCheckbox").checked;
    
    if (newsletter == 1) {
        alert("Welcome " + name + "! Thank you for your interest in " + subject +"! We will contact you via the email provided: " + mail + ", or alternatively on the phone number: "+ number + ".");
    }
    else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + name + "! If you want to sign up, you better CHECK that newsletter box! ");
    }
}