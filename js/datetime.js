function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    };
    const formattedDateTime = now.toLocaleString('en-US', options);
    
    document.getElementById('date-time').textContent = formattedDateTime;
}

document.getElementById('show-time-btn').addEventListener('click', function() {
    const currentTimeDisplay = document.getElementById('current-time-display');
    
    function updateCurrentTime() {
        const currentTime = new Date().toLocaleTimeString();
        currentTimeDisplay.textContent = `Current Time: ${currentTime}`;
    }
    
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
});

updateDateTime();
setInterval(updateDateTime, 1000);
