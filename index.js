// Function for show menu
const btnShowMenu = document.querySelector(".btnShowMenu")
const btnCloseMenu = document.querySelector(".btnCloseMenu")
const container = document.querySelector(".container")

btnShowMenu.addEventListener("click",() => {
    container.classList.toggle("show-menu")
})
btnCloseMenu.addEventListener("click",() => {
    container.classList.toggle("show-menu")
})

// Function for change theme
const btnChangeTheme = document.querySelector(".btnChangeTheme")
btnChangeTheme.addEventListener("click",() => {
    container.classList.toggle("change-theme")
    btnChangeTheme.classList.toggle("fas")
})

// Function for show data of the day
const dateNumber = document.querySelector(".day-number")
const dateText = document.querySelector(".day-text")
const dateMonth = document.querySelector(".date-month")

const setDate = () => {
    const date = new Date()
    dateNumber.textContent = date.toLocaleString("en", {day: "numeric"})
    dateText.textContent = date.toLocaleString("en", {weekday: "short"})
    dateMonth.textContent = date.toLocaleString("en", {month: "short"})
}

setDate()

// Function for show form add new task
const formNewTask = document.querySelector(".form-newTask")
const btnNewTask = document.querySelector(".btnNewTask")
const btnCloseForm = document.querySelector(".btnCloseForm")

btnNewTask.addEventListener("click",() => {
    formNewTask.classList.toggle("show-form")
})
btnCloseForm.addEventListener("click",() => {
    formNewTask.classList.toggle("show-form")
})

// Function for add new task
const tasksList = document.querySelector(".tasks-list")

const addNewTask = (event) => {
    event.preventDefault()
    const { value } = event.target.task
    if(!value) return
    const task = document.createElement("li")
    task.textContent = value
    tasksList.prepend(task)
    event.target.reset()
    formNewTask.classList.toggle("show-form")

}


