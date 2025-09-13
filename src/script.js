const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Adicionar tarefa
addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if(taskText !== ''){
        addTask(taskText);
        todoInput.value = '';
    }
});

// Adicionar ao pressionar Enter
todoInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addBtn.click();
    }
});

function addTask(text){
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `
        <span>${text}</span>
        <button>&times;</button>
    `;
    todoList.appendChild(li);

    // Marcar como completo ao clicar no texto
    li.querySelector('span').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Remover tarefa ao clicar no botão
    li.querySelector('button').addEventListener('click', () => {
        li.remove();
    });
}
