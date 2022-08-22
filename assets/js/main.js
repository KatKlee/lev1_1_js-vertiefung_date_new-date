const dateOutput = document.getElementById('date')
const date1 = new Date("September 2, 2019 09:00:00")
const date2 = new Date(0)
const date3 = new Date(31556908800)
const date4 = new Date(86400000)

const allDates = [date1, date2, date3, date4]
allDates.forEach((date) => {
    let pTag = document.createElement('p')
    pTag.innerHTML = date
    dateOutput.appendChild(pTag)
})


