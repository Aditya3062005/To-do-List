//Array to store tasks
let tasks = [];

const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML=''

    tasks.forEach((task,index)=>{
        const li = document.createElement('li');
        li.textContent=task.name;
        const btn = document.createElement('button');
        btn.innerHTML='<div>delete</div>';
        btn.className='delete-button';
        btn.onclick = ()=> deleteTask(index);

        li.appendChild(btn);
        taskList.appendChild(li);
        // renderTasks();
    });
}

const addTask = () => {
    console.log("")
    const name = document.getElementById('taskInput');
    if(name!==''){
        const task = {
            name:name.value,
            date:new Date()
        }
        console.log(task)
        tasks.push(task);
        console.log(tasks)
        renderTasks();
    }else{
        alert('empty')
    }
}
renderTasks();

const deleteTask = (index)=>{
    tasks.splice(index,1);
    renderTasks();
}

const clearAllTasks = ()=> {
    tasks = []; 
    renderTasks();
}

const countTasks = ()=>{
    alert("Total number of tasks is: " + tasks.length)
}


