function populateForm(outputElement, passwordLength) {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()~-_=+[]{}\;:'<>,./?";
    var output = "";
    for (var i = 0; i < passwordLength; i++) {
        output+=characters.charAt(Math.floor(Math.random() * characters.length));
    }
    outputElement.value = output;
    outputElement.setAttribute("size", output.length + 1);
}