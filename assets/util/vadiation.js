function kiemTraEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        alert('Email không được để trống và phải đúng định dạng.');
        return false;
    }
    return true;
}

function kiemTraTen(name) {
    if (!name || !name.match(/^[\p{L}\s]+$/u)) {
        alert('Tên nhân viên không được để trống và chỉ được chứa chữ cái và khoảng trắng.');
        return false;
    }
    return true;
}

function kiemTraMatKhau(password) {
    let passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,10})/;
    if (!password || !passwordPattern.test(password)) {
        alert('Mật khẩu không được để trống và phải từ 6 đến 10 ký tự (bao gồm ít nhất 1 số, 1 chữ cái viết hoa và 1 ký tự đặc biệt).');
        return false;
    }
    return true;
}


export function kiemTraXacNhanPassword(password, confirmPassword) {
    if (confirmPassword.trim() === '') {
        alert('Xác nhận mật khẩu không được bỏ trống !');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Xác nhận mật khẩu không khớp với mật khẩu đã nhập !');
        return false;
    }

    let passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,10})/;
    if (!passwordPattern.test(confirmPassword)) {
        alert('Xác nhận mật khẩu không hợp lệ ! Yêu cầu từ 6 đến 10 ký tự (bao gồm ít nhất 1 số, 1 chữ cái viết hoa và 1 ký tự đặc biệt).');
        return false;
    }

    return true; // Trả về chuỗi rỗng nếu không có lỗi
}

function kiemTraSoDT(phone) {
    // Regex cho số điện thoại Việt Nam bắt đầu bằng số 0, tiếp theo là 9 chữ số
    let phonePattern = /^0[0-9]{9}$/;

    if (!phone || !phonePattern.test(phone)) {
        alert('Số điện thoại không hợp lệ. Vui lòng nhập lại số điện thoại Việt Nam bắt đầu từ 0 và dài 10 hoặc 11 chữ số.');
        return false;
    }

    return true;
}

export function kiemTraNhapThongTin(khachHangMoi) {
    let { email, name, password, confirmPassword, phone } = khachHangMoi;

    if (!kiemTraEmail(email)) return false;
    if (!kiemTraTen(name)) return false;
    if (!kiemTraMatKhau(password)) return false;
    if (!kiemTraSoDT(phone)) return false;

    return true; // Trả về true nếu dữ liệu nhập vào hợp lệ
}



