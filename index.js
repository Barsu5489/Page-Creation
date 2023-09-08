const currentTime = document.querySelector('.current-date')
const miliSec = document.querySelector('.milli-sec')
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dayNumber = new Date().getDay()
const now = new Date
currentTime.textContent += `${days[dayNumber]}`
miliSec.textContent += `${Date.UTC(now.getUTCMilliseconds())} milliseconds`