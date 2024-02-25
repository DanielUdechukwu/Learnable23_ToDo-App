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
  let allContent = ""; // Accumulate content of all tasks
  tasks.forEach((items, index) => { // Use forEach for simplicity
    const {title, description, dueDate} = items;
    let content = `
      <div className="py-3 px-4 flex items-center border-b-gray-100 font-light" key={index}>
        <div className="task w-full">
          <div className="task-header flex items-center">
            <h1 className="mr-auto font-medium">${title}</h1>
            <p className="text-xs font-medium">${dueDate}</p>
          </div>
          <div className="details mt-1 flex items-center">
            <p className="mr-auto text-sm">${description}</p>
          </div>
        </div>
      </div>
      `;
    allContent += content; // Append content of each task
  });
  container.innerHTML = allContent; // Set container content once
}

const clearForm = () => {
  let clearValue = document.getElementById('due-date')
  let clearTitle = document.getElementById('title')
  let clearDesc = document.getElementById('description')

  clearValue.value = ''
  clearTitle.value = ''
  clearDesc.value = ''
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