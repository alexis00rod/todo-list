// Funtion for change theme button
const btnChangeTheme = document.querySelector(".btnChangeTheme")
const container = document.querySelector(".container")
btnChangeTheme.addEventListener("click",() => {
    container.classList.toggle("changetheme")
    btnChangeTheme.classList.toggle("fas")
})





const dateNumber = document.querySelector(".date-number")
const dateText = document.querySelector(".date-text")
const dateMonth = document.querySelector(".date-month")
const dateYear = document.querySelector(".date-year")

const listTasks = document.querySelector(".list-tasks")

const setDate = () => {
    const date = new Date()
    dateNumber.textContent = date.toLocaleString("es", {day: "numeric"})
    dateText.textContent = date.toLocaleString("es", {weekday: "short"})
    dateMonth.textContent = date.toLocaleString("es", {month: "short"})
    dateYear.textContent = date.toLocaleString("es", {year: "numeric"})
}

setDate()

const addNewTask = (event) => {
    event.preventDefault()
    const { value } = event.target.task
    if(!value) return
    const task = document.createElement("li")
    task.textContent = value
    listTasks.prepend(task)
    event.target.reset()
}

