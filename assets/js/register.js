import {
    kiemTraNhapThongTin
} from '../util/vadiation.js'


document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn chặn form submit mặc định

    const genderElement = document.querySelector('input[name="gender"]:checked');
    if (!genderElement) {
        // Nếu không có giới tính được chọn
        alert('Bạn cần chọn giới tính!');
        return; // Dừng lại và không thực hiện tiếp các công việc khác
    }

    const genderValue = genderElement.value;
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    const confirmPassword = document.getElementById('inputConfirmPassword').value;
    const name = document.getElementById('inputName').value;
    const phone = document.getElementById('inputPhone').value;

    const khachHangMoi = { email, name, password, confirmPassword, phone, gender: genderValue };

    // Kiểm tra dữ liệu nhập vào
    if (!kiemTraNhapThongTin(khachHangMoi)) {
        // Nếu có lỗi từ kiểm tra, không làm gì cả vì lỗi đã được hiển thị ngay tại hàm kiểm tra
        return;
    }

    axios.post('https://shop.cyberlearn.vn/api/Users/signup', khachHangMoi)
        .then(response => {
            console.log(response);
            alert('Đăng ký thành công!');
            // Xử lý khi đăng ký thành công
        })
        .catch(error => {
            alert('Đăng ký thất bại: ' + error.response.data.message);
            console.error('Đăng ký thất bại:', error);
            // Xử lý khi đăng ký thất bại
        });
});

