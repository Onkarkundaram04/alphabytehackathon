let otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6 digit OTP
let time = 5; // Set the countdown time to 5 seconds
let countdownEl = document.getElementById('countdown');
let otpDisplayEl = document.getElementById('otpDisplay');
let resetButton = document.getElementById('resetButton');
let otpInput = document.getElementById('otpInput');
let verifyButton = document.getElementById('verifyButton');

resetButton.addEventListener('click', function() {
    location.reload(); // Refresh the page
});

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(updateCountdown); // Stop the countdown when it reaches 0
        countdownEl.innerHTML = "OTP Sent";
        otpDisplayEl.innerHTML = `Your OTP is ${otp}`;
    }
}

verifyButton.addEventListener('click', function() {
    if (otpInput.value == otp) {
        window.location.href = "newPassword.html"; // Redirect to newPassword.html
    } else {
        alert("Incorrect OTP. Please try again.");
    }
});
