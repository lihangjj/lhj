function validateLogin() {
    return validateEmpty("admin.aid") && validateEmpty("admin.password") && validateRegex("code", /^[0-9A-Za-z]{4}$/)

}

function validateUpdatePassword() {
    return validateEmpty("oldPassword") && validateRegex('admin.password', /^[0-9a-zA-Z]{2,20}$/) && validateSame('admin.password', "newPassword");

}