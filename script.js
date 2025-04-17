
document.addEventListener("DOMContentLoaded", function () {
  fetch('tasks.json')
    .then(response => response.json())
    .then(data => {
      const taskList = document.getElementById('taskList');
      const taskFrame = document.getElementById('taskFrame');

      data.forEach(task => {
        const button = document.createElement('button');
        button.textContent = task.title;
        button.onclick = () => {
          taskFrame.src = 'tasks/' + task.file;
        };
        const li = document.createElement('li');
        li.appendChild(button);
        taskList.appendChild(li);
      });
    });
});
