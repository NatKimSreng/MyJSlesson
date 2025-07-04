function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const hours12 = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours12}:${minutes}:${seconds} ${ampm === 'PM' ? 'PM' : 'AM'}`;

    setTimeout(updateClock, 1000);
}
updateClock();
setInterval(updateClock, 1000);