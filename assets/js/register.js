import {
    kiemTraEmail,
    kiemTraHoTen,
    kiemTraPassword,
    kiemTraXacNhanPassword,
    kiemTraSoDienThoai,
    
} from '../util/vadiation.js'

// document.querySelector('#form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const genderValue = document.querySelector('input[name="gender"]:checked').value;
//     const formData = {
//         email: document.getElementById('inputEmail').value,
//         password: document.getElementById('inputPassword').value,
//         name: document.getElementById('inputName').value,
//         gender: genderValue === 'male', // Chuyển đổi giá trị thành true/false
//         phone: document.getElementById('inputPhone').value
//     };

//     axios.post('https://shop.cyberlearn.vn/api/Users/signup', formData)
//         .then(response => {
//             alert('Đăng ký thành công!');
//             // Xử lý khi đăng ký thành công, ví dụ chuyển hướng hoặc hiển thị thông báo thành công
//         })
//         .catch(error => {
//             alert('Đăng ký thất bại: ' + error.response.data.message);
//             console.error('Đăng ký thất bại:', error);
//             // Xử lý khi đăng ký thất bại, ví dụ hiển thị thông báo lỗi cho người dùng
//         });
// });


document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault();

    const genderValue = document.querySelector('input[name="gender"]:checked').value;

    // Lấy giá trị từ các input
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    const confirmPassword = document.getElementById('inputConfirmPassword').value;
    const name = document.getElementById('inputName').value;
    const phone = document.getElementById('inputPhone').value;

    // Kiểm tra từng trường dữ liệu
    const emailValid = kiemTraEmail(email, '#errorEmail', 'Email');
    const passwordValid = kiemTraPassword(password, '#errorPassword', 'Mật khẩu');
    const confirmPasswordValid = kiemTraXacNhanPassword(password, confirmPassword, '#errorConfirmPassword', 'mật khẩu');
    const nameValid = kiemTraHoTen(name, '#errorName', 'Họ và tên');
    const genderValid = true; // Bạn đã lấy giá trị gender ở trên
    const phoneValid = kiemTraSoDienThoai(phone, '#errorPhone', 'Số điện thoại');

    // Kiểm tra các điều kiện hợp lệ trước khi gửi dữ liệu
    if (emailValid && passwordValid && confirmPasswordValid && nameValid && genderValid && phoneValid) {
        const formData = {
            email: email,
            password: password,
            name: name,
            gender: genderValue === 'male', // Chuyển đổi giá trị thành true/false
            phone: phone
        };

        axios.post('https://shop.cyberlearn.vn/api/Users/signup', formData)
            .then(response => {
                alert('Đăng ký thành công!');
                // Xử lý khi đăng ký thành công
            })
            .catch(error => {
                alert('Đăng ký thất bại: ' + error.response.data.message);
                console.error('Đăng ký thất bại:', error);
                // Xử lý khi đăng ký thất bại
            });
    } else {
        // Nếu có lỗi, có thể không cần xử lý gì ở đây vì lỗi đã được hiển thị ngay tại các function kiểm tra
    }
});