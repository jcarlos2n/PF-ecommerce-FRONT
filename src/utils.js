
const evalEmail = (st) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(st);
}

const evalPhone = (st) => {
    return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(st);
}

const evalName = (st) => {
    return /^[a-zA-Z\u00C0-\u00FF ]+$/.test(st);
}

const evalAddress = (st) => {
    return /^[a-zA-Z\u00C0-\u00FF ,-\d]+$/.test(st);
}

const evalPassword = (st) => {
    // It must have at least 8 characters, 1 lower case letter, 1 upper case letter, 1 number and 1 special character
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\+\-_=\?/])(?=.{8,})/.test(st);
}

const evalField = (key, value) => {
    switch (key) {
        case 'name': return evalName(value);
        case 'email': return evalEmail(value);
        case 'password': return evalPassword(value);
        case 'address': return evalAddress(value);
        case 'phone': return evalPhone(value);
        default: return false;
    }
}

const validate = (obj) => {
    return Object.entries(obj).reduce((acc, curVal) => {return (acc && (evalField(curVal[0], curVal[1])))}, true);
}

export default evalField