function addtoList(){

    var taskname = document.getElementById('taskname').value

    var tododiv = document.getElementById('mytodo')

    var newtodoItem = document.createElement('div')

    var todoName = document.createElement('li')

    todoName.innerHTML = taskname

    var deletebtn = document.createElement('i')

    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

    newtodoItem.appendChild(todoName)
    newtodoItem.appendChild(deletebtn)
    tododiv.appendChild(newtodoItem)

}

var tododiv = document.getElementById('mytodo')

tododiv.addEventListener('click', deleteItem)

function deleteItem(e){
    const element = e.target
    if(element.classList[0] == 'far'){
        element.parentElement.remove()
    }
}