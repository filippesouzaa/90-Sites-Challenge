let textTask = document.getElementById("newTask");
let submit = document.getElementById("sentTask");
let todoContainer = document.getElementById("todoContainer");
let doing = document.getElementById("doing")
let did = document.getElementById("did")

textTask.addEventListener('keyup', function(e) {
    if(e.keyCode === 13){
        e.preventDefault();
        document.getElementById('sentTask').click();
    }
})

submit.addEventListener('click', function needToDo() {
    var paragraph = document.createElement('p');
    paragraph.innerText = textTask.value;
    paragraph.classList.add('content')
    todoContainer.appendChild(paragraph);
    textTask.value = "";

    paragraph.addEventListener('click', function goingToDo() {
        doing.appendChild(paragraph);
        
        let i = paragraph;
        i.addEventListener('click', function goingToDid() {
            did.appendChild(i);

            let x = i;
            x.addEventListener('dblclick', function(){
                x.remove();
            });
        })

    })



});
