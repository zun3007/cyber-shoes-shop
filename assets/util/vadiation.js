export function kiemTraRong(value,selectorError,name) {
    //   abc    .trim() => abc
    if(value.trim() === '') {
        document.querySelector(selectorError).innerHTML = `${name} không được bỏ trống !`;
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

export function kiemTraSo(value,selectorError,name) {
    let regexNumber = /^[0-9]+$/;
    if(regexNumber.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    document.querySelector(selectorError).innerHTML = `${name} không phải số !`;
    return false;
}

export function kiemTraEmail(value,selectorError,name) {
    let regexEmail = /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,}$/;
    if(regexEmail.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    document.querySelector(selectorError).innerHTML = `${name} không hợp lệ !`;
    return false;
}

export function kiemTraSoDienThoai(value,selectorError,name) {
    let regexPhone = /^0[3|5|7|8|9][0-9]{8}$/;
    if(regexPhone.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    document.querySelector(selectorError).innerHTML = `${name} không hợp lệ !`;
    return false;
}

export function kiemTraHoTen(value,selectorError,name) {
    let regexName = /^([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲỴÝỳỵỷỹĂăẠ-ỹ]+(\s[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơỲỴÝỳỵỷỹĂăẠ-ỹ]+)*)$/ig;
    if(regexName.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    document.querySelector(selectorError).innerHTML = `${name} không hợp lệ !`;
    return false;
}

export function kiemTraDoDai(value,selectorError,name,min,max) {
    let length = value.length;
    if(length > max || length < min) {
        document.querySelector(selectorError).innerHTML = `${name} từ ${min} - ${max} ký tự !`;
        return false;
    }
    document.querySelector(selectorError).innerHTML = ``;
    return true;
} 

export function kiemTraGiaTri(value,selectorError,name,min,max) {
    let number = +value;
    if(number < min || number > max) {
        document.querySelector(selectorError).innerHTML = `${name} từ ${min} - ${max} ký tự !`
        return false
    }

    document.querySelector(selectorError).innerHTML = '';
    return true;
}

export function kiemTraPassword(value, selectorError, name) {
    // Có thể thêm các điều kiện kiểm tra mật khẩu ở đây, ví dụ độ dài tối thiểu, ký tự đặc biệt, ...
    if (value.trim() === '') {
        document.querySelector(selectorError).innerHTML = `${name} không được bỏ trống !`;
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

export function kiemTraXacNhanPassword(password, confirmPassword, selectorError, name) {
    if (confirmPassword.trim() === '') {
        document.querySelector(selectorError).innerHTML = `Xác nhận ${name} không được bỏ trống !`;
        return false;
    }
    if (password !== confirmPassword) {
        document.querySelector(selectorError).innerHTML = `Xác nhận ${name} không khớp !`;
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}