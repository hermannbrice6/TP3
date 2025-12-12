
function togglePassword(inputID) {
    let field = document.getElementById(inputID);
    field.type = field.type === "password" ? "text" : "password";
}
