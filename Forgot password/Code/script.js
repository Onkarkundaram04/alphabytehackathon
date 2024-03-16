const countdownEl = document.getElementById('countdown');
let time = 5; // Set the countdown time to 10 seconds

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
    }
}
