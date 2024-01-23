let inputBx = document.querySelector('#inputbx');
let list = document.querySelector('#list');
let all = document.querySelector(`#all`)
let wenedo = document.querySelector(`#wenedo`)
let wedo = document.querySelector(`#wedo`)



inputBx.addEventListener ("keyup", function(event) {
if(event.key == "Enter" && inputBx.value == `` ) {
    return
    }
else if (event.key == "Enter") {
addItem(this.value)
this.value = ""
}
})  
let i = `<i id='sup' class="fa-solid fa-trash" style="color: #804242;"></i>`
let i2 =`<i id='modify' class="fa-solid fa-pen" style="color: #6c91d0;"></i>`
let i3 = `<i id='check' class="fa-solid fa-check" style="color: #63E6BE;"></i>`

let addItem = (inputBx) =>{
let listItem = document.createElement("li");
let listcontent = document.createElement("input");
listcontent.classList =`task`
listcontent.setAttribute(`readonly`,`readonly`)
listcontent.value = `${inputBx}`
listItem.innerHTML = ` ${i} ${i2}${i3}`;
listItem.appendChild(listcontent)
listItem.querySelector(`#sup`).addEventListener(`click`,()=>{
    listItem.remove()
})
listItem.querySelector(`#check`).addEventListener(`click`,()=>{
    listItem.classList.toggle(`done`)
})
listItem.querySelector(`#modify`).addEventListener(`click`,()=>{
    listcontent.removeAttribute(`readonly`)
    listcontent.style.border =`solid 2px rgb(175, 230, 237)`
    listcontent.style.borderRadius = `5px`
    listcontent.style.padding = `5px`
    listcontent.addEventListener ("keyup", function(event) {
        if(event.key == "Enter" && listcontent.value == `` ) {
            return
            }
        else if (event.key == "Enter") {
            listcontent.value = listcontent.value
            listcontent.setAttribute(`readonly`,`readonly`)
            listItem.classList.remove(`done`)
            listcontent.style.border =``
            
        }
        })  
})
list.appendChild(listItem);
}







let li
wedo.addEventListener(`click`,()=>{
    li = document.querySelectorAll(`li`)
    Array.from(li).forEach(element => {
        element.style.display = ``
        if (element.classList.contains(`done`)==false) {
            element.style.display = `none`
        }
    
        
    });
})
wenedo.addEventListener(`click`,()=>{
    li = document.querySelectorAll(`li`)
    Array.from(li).forEach(element => {
        element.style.display = ``
        if (element.classList.contains(`done`)) {
            element.style.display = `none`
        }
    
        
    });
})



all.addEventListener(`click`,()=>{
    li = document.querySelectorAll(`li`)
    li.forEach(element => {
        element.style.display = ``
    });
})

