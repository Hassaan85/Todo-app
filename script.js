const formEl = document.querySelector(".form");

const inputEl = document.querySelector("input");

const UlEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));

list.forEach(task =>{
    toDoList(task)
})




formEl.addEventListener("submit",(event)=> {
    event.preventDefault();
    console.log(inputEl.value);
    toDoList();

});

function toDoList(task) {
   let newTask = inputEl.value;
   if (task) {
    newTask=task.name
   }

   const liEl = document.createElement("li");

   if (task && task.checked) {
    liEl.classList.add("checked");
   }

   liEl.innerText =newTask;
   UlEl.appendChild(liEl)
   inputEl.value = ""

   const checkBtnEl=document.createElement("div")
   checkBtnEl.innerHTML = `
   <i class = "fa-solid fa-check">`;

    liEl.appendChild(checkBtnEl);

    const trashBtnEl=document.createElement("div")
    trashBtnEl.innerHTML = `
    <i class = "fa-solid fa-trash">`;
 
     liEl.appendChild(trashBtnEl);


     checkBtnEl.addEventListener("click",()=>{
        liEl.classList.toggle("checked")
        updateLocalStorage ();
     })
    

     trashBtnEl.addEventListener("click",()=>{
        liEl.remove();
        updateLocalStorage ();
     }) 
     updateLocalStorage (); 
 }

 function updateLocalStorage () {
    const liEls = document.querySelectorAll("li")
     list =[]

    liEls.forEach(liEl=>{
        list.push ({
            name:liEl.innerText,
            checked:liEl.classList.contains("checked")
        })
    })

    localStorage.setItem("list", JSON.stringify(list))
 }