
import {
    kiemTraNhapThongTin,
    kiemTraXacNhanPassword
} from '../util/vadiation.js'

document.querySelector('#getIndex').onclick = function() { 
    window.location.href = "http://127.0.0.1:5500/index.html";
}

document.querySelector('#form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const genderElement = document.querySelector('input[name="gender"]:checked');
    if (!genderElement) {
        alert('Bạn cần chọn giới tính!');
        
    }

    // Lấy giá trị boolean cho giới tính từ radio button
    const genderValue = genderElement.value === 'male'; // genderValue là boolean true/false

    // Lấy giá trị từ các input
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    const inputConfirmPassword = document.getElementById('inputConfirmPassword').value;
    const name = document.getElementById('inputName').value;
    const phone = document.getElementById('inputPhone').value;

    // Tạo đối tượng khách hàng mới chỉ với các trường cần thiết
    const khachHangMoi = { email, name, password, phone, gender: genderValue };

    if(!kiemTraXacNhanPassword(password,inputConfirmPassword)){
        window.location.href = "http://127.0.0.1:5500/pages/register.html";

    }
    // Kiểm tra dữ liệu nhập vào
    if (!kiemTraNhapThongTin(khachHangMoi)) {
        window.location.href = "http://127.0.0.1:5500/pages/register.html";    
    }
    try {
        console.log(email);    
        const response = await axios.post('https://shop.cyberlearn.vn/api/Users/signup', khachHangMoi);
        console.log('Phản hồi từ server:', response.data);

        // Kiểm tra phản hồi từ API
        if (response && response.data && response.data.content) {
            const { email, password, name, gender, phone } = response.data.content;
            //const genderString = (gender === true) ? 'male' : 'female'; // Chuyển đổi thành 'male' hoặc 'female'

            const genderString = '';
            if(gender === true){
                genderString = 'male'
            }
            else{
                genderString = 'female'
            }
            console.log('Đăng ký thành công:', response.data.content);
            alert(`Đăng ký thành công! Giới tính: ${genderString}`);
            // Hiển thị thông tin đăng ký thành công với giới tính là true/false
            console.log({
                statusCode: 200,
                message: 'Đăng ký tài khoản thành công!',
                content: { email, password, name, gender: genderString, phone },
                dateTime: response.data.dateTime
            });
        } 
        else {
            alert('Đăng ký thất bại: Phản hồi từ server không như mong đợi.');
        }
        window.location.href = "http://127.0.0.1:5500/pages/register.html";
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            alert('Đăng ký thất bại: ' + error.response.data.message);
        } else {
            alert('Đăng ký thất bại. Vui lòng thử lại.');
        }
        console.error('Đăng ký thất bại:', error);
        window.location.href = "http://127.0.0.1:5500/pages/register.html";
    }
   
});