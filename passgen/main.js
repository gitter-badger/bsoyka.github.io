function populateForm(outputElement, passwordLength) {
    var numbers = "1234567890";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special = "~!@#$%^&*()-_=+[]{}\':;<>,./?";
    var characters = "";
    var form = document.getElementById("passGen");
    var formElements = form.elements;
    var formatOptions = formElements.format;
    if (formatOptions[0].checked) {
        characters += numbers;
    }
    if (formatOptions[1].checked) {
        characters += lowercase;
    }
    if (formatOptions[2].checked) {
        characters += uppercase;
    }
    if (formatOptions[3].checked) {
        characters += special;
    }
    var output = "";
    for (var i = 0; i < passwordLength; i++) {
        output += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    outputElement.value = output;
    outputElement.setAttribute("size", output.length + 1);
}
