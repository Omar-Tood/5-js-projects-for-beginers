function updateCountDown(){
    const now = new Date()
    const nextYear = now.getFullYear() + 1
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`)
    const currentTime = now.getTime()
    const timeDifference = newYearDate - currentTime

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    const hours = Math.floor(timeDifference % (1000 * 60 * 60 *24) / (1000 * 60 *60))
    const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60))

    const seconds = Math.floor(timeDifference % (1000 * 60) /(1000))

    document.getElementById('days').textContent = days < 10 ? "0" + days : days
    document.getElementById('hours').textContent = hours < 10 ? "0" + hours : hours
    document.getElementById('minutes').textContent = minutes < 10 ? "0" + minutes : minutes
    document.getElementById('seconds').textContent = seconds < 10 ? "0" + seconds : seconds


}

setInterval(updateCountDown, 1000)
updateCountDown()