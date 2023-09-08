const currentTime = document.querySelector('.current-date')
const miliSec = document.querySelector('.milli-sec')
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dayNumber = new Date().getDay()
const now = new Date
currentTime.textContent = `Day: ${days[dayNumber]}`
miliSec.textContent = `Time: ${Date.UTC(now.getUTCMilliseconds())}`