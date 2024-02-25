let currentDay = document.getElementById('day');
let currentMonth = document.getElementById('month');
let currentDate = document.getElementById('date');
let container = document.getElementById('container');
let day, month, date;
let tasks = []
let renderContainer

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const getDateData = new Date()

day = dayNames[getDateData.getDay()]
month = months[getDateData.getMonth()]
date = getDateData.getDate()

currentDate.innerHTML = date;
currentMonth.innerHTML = month;
currentDay.innerHTML = day;

if (tasks.length === 0) {
  renderContainer = `<p class="text-sm">No Task Available</p>`
  container.innerHTML = renderContainer
}else if (tasks.length > 0) {

}

const clearForm = () => {
  let clearValue = document.getElementById('due-date')
  let clearTitle = document.getElementById('title')
  let clearDesc = document.getElementById('description')

  clearValue.value = ''
  clearTitle.value = ''
  clearDesc = ''
}

const submitForm = () => {
  const getDateValue = document.getElementById('due-date').value
  const getTitle = document.getElementById('title').value
  const getDescription = document.getElementById('description').value
  tasks.push({
    title: getTitle,
    description: getDescription,
    dueDate: getDateValue
  })

  clearForm()

  console.log(tasks)
}