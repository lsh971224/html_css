//입력하고 엔터하면 입력한 내용을 webstorage에 저장
//창에 새 요소로 ul todo list에 li로 추가 해주기
//추가된 요소에는 닫기 버튼이 포함
// 닫기 버튼을 클릭하면 해당 요소를 삭제
const toDoForm = document.getElementById("todo-form");
const toDoInput =document.querySelector("#todo-form input");
const toDoList = document.getElementById('todo-list');

const todokey ='todos';
let toDos=[];

toDoForm.addEventListener('submit',toDoSubmitHandler);

function toDoSubmitHandler(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value='';
    const newTodoObj = {
        text:newTodo,
        id:Date.now()       
    };
    toDos.push(newTodoObj);
    printToDo(newTodoObj);
    saveToDo();
}
function printToDo(newTodo){
    const li = document.createElement('li');
    li.id= newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '♥';
    button.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(function(todo){
        console.log(todo.id,li.id);
        return todo.id!==li.id;
    });
    saveToDo();
}
function saveToDo(){
    localStorage.setItem(todokey,JSON.stringify(toDos));
}
const saveToDos = localStorage.getItem(todokey);
if(saveToDos!==null){
    const parsedTodos = JSON.parse(saveToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(printToDo);
}
