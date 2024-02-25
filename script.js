let currentDay = document.getElementById('day');
let currentMonth = document.getElementById('month');
let currentDate = document.getElementById('date');
let container = document.getElementById('container');
let tasks = [];
let renderContainer;

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const getDateData = new Date();
let day = dayNames[getDateData.getDay()];
let month = months[getDateData.getMonth()];
let date = getDateData.getDate();

currentDate.innerHTML = date;
currentMonth.innerHTML = month;
currentDay.innerHTML = day;
console.log(day, month, date);

renderContainer = `
  <div class="flex items-center justify-center py-4">
    <p class="text-sm font-medium">No Task Available</p>
  </div>
`
container.innerHTML = renderContainer

const renderTasks = () => {
  if (tasks.length > 0) {
    let allContent = "";
    tasks.forEach((items, index) => {
      const { title, description, dueDate } = items;
      let content = `
      <div class="py-4 px-4">
        <div class="flex justify-between items-center">
          <p class="font-medium">${title}</p>
          <p class="text-xs font-medium">Due: ${dueDate}</p>
        </div>
        <div class="flex gap-2 my-1 justify-between items-center">
          <p>${description}</p>
          <img class="h-7 cursor-pointer" src="./assets/bin.svg" alt="" onClick="deleteTask(${index})">
        </div>
      </div>
      `;
      allContent += content;
    });
    container.innerHTML = allContent;
  } else {
    container.innerHTML = renderContainer;
  }
}

const clearForm = () => {
  let clearValue = document.getElementById('due-date')
  let clearTitle = document.getElementById('title')
  let clearDesc = document.getElementById('description')

  clearValue.value = ''
  clearTitle.value = ''
  clearDesc.value = ''
}

const deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
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

  renderTasks()

  clearForm()

  console.log(tasks)
}