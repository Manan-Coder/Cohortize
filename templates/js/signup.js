const form = document.getElementById('authForm');
        const modal = document.getElementById('otpModal');
        const otpInputs = document.querySelectorAll('.otp-inputs input');
        const successMessage = document.getElementById('success-message');
        const authTitle = document.getElementById('authTitle');
        const authButton = document.getElementById('authButton');
        const authSwitchText = document.getElementById('authSwitchText');
        const authSwitchLink = document.getElementById('authSwitchLink');

        let isSignUp = true;
        const correctOTP = '1234';

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (isSignUp) {
                const fullname = document.getElementById('fullname').value;
                if (fullname.length < 2) {
                    document.getElementById('fullname-error').style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById('fullname-error').style.display = 'none';
                }
            }

            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('email-error').style.display = 'none';
            }

            if (password.length < 8) {
                document.getElementById('password-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('password-error').style.display = 'none';
            }

            if (isValid && isSignUp) {
                modal.style.display = 'flex';
            } else if (isValid) {
                alert('Sign in successful!');
            }
        });

        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value) {
                    if (index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    }
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !e.target.value && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
        });

        function verifyOTP() {
            const enteredOTP = Array.from(otpInputs).map(input => input.value).join('');
            const otpError = document.getElementById('otp-error');

            if (enteredOTP === correctOTP) {
                otpError.style.display = 'none';
                successMessage.style.display = 'block';
                setTimeout(() => {
                    alert('Signup successful!');
                    window.location.reload();
                }, 2000);
            } else {
                otpError.style.display = 'block';
                otpInputs.forEach(input => input.value = '');
                otpInputs[0].focus();
            }
        }

function send_data(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var fullname = document.getElementById('fullname').value;
    var data = {
        email: email,
        password: password,
        fullname: fullname
    }
    console.log(data);
    fetch('/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Signup successful!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Signup failed!');
    });
}
