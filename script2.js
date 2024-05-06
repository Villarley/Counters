// Function to calculate the difference between two dates
function calculateDifference(futureDate) {
    const now = new Date();
    const difference = futureDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

// Function to update the countdown in the interface
function updateCountdown() {
    const futureDate = new Date('2024-05-12T00:00:00'); // Future date for the countdown
    const difference = calculateDifference(futureDate);

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    daysElement.textContent = difference.days;
    hoursElement.textContent = difference.hours;
    minutesElement.textContent = difference.minutes;
    secondsElement.textContent = difference.seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Update the countdown initially
updateCountdown();
