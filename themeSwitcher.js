function applyThemeBasedOnTime() {
    const hour = new Date().getHours();
    console.log(`Current hour: ${hour}`); // Debugging statement to check the hour
    const body = document.body;
    if (hour >= 6 && hour < 18) {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    } else {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    }
}

// Apply theme on page load
document.addEventListener('DOMContentLoaded', applyThemeBasedOnTime);