module.exports.validateRegisterInput = (email) => {
    const errors = {}
    const regEx =/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
    if(!email.match(regEx)){
        errors.email = 'Email must be a valid email address'
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}