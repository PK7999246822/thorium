function trim() {
    let name = ' Priyanka khatri   '
    console.log('Trimmed name is: ',name.trim())
}

function changetoLowerCase() {
    let name = 'Priyanka khatri'
    console.log('Name in lowercase is: ',name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'Priyanka khatri'
    console.log('Name in uppercase is: ',name.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;