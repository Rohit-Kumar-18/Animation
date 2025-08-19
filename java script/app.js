let toDoList =[
    {
      item:  'Buy Milk', 
      dueDate:'19/7/2025'
     },
     {
      item: 'Press Clothes',
      dueDate:'19/7/2025',
     }
];
displayitems();

function addToDo (){
    let inputElement = document.querySelector('#input');
    
    let dateElement = document.querySelector('#todo-date');

    let toDoItem = inputElement.value;

    let todoDate=dateElement.value;

    toDoList.push({item:toDoItem, dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';

    displayitems();
}

function displayitems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml= '';

    for (let i=0;i<toDoList.length;i++){

        let item = toDoList[i].item;
        let dueDate = toDoList[i].dueDate;

        newHtml=newHtml+`
        <span> ${item}</span>
        <span> ${dueDate}</span>
        <button class='btn-dlt'onclick='toDoList.splice(${i},1);
        displayitems();
        '>Delete</button>
        `

    }
    containerElement.innerHTML=newHtml;
}