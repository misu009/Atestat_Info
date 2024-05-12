function startCountdown() {
    let count = 5;
    const countdownElement = document.getElementById("countdown");

    const countdownInterval = setInterval(() => {
        countdownElement.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(countdownInterval);
            window.location.href = "../html/index.html";
        }
    }, 1000);
}

// Start countdown when the page loads
window.onload = function () {
    startCountdown();
};