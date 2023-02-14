const inputbox = document.querySelector(".inputbox input");
const add = document.querySelector("#additems");
const todolist = document.querySelector(".itemsList");
const pendingTasks = document.querySelector("#Remaining");
const clrall = document.querySelector(".clrall");
var item=[];
inputbox.onkeyup = () =>{
    let UserEnterValue =inputbox.value;
    if(UserEnterValue.trim()!=0){
        add.style.display="block";
    }
    else{
        add.style.display="none";
    }

add.onclick=()=>{
    // item.push(inputbox.value)
    item.push(UserEnterValue)
    showcase();
}
}
function showcase(){
    let ListTag="";
    item.forEach((element,index)=>{
    ListTag += `<li>
                <input class="checkinput" type="checkbox">
                <span class="checkmark"></span>${element}
                <span class="icon">
                <i class="bi bi-trash3" onclick="deleteTask(${index})"></i>
                <span>
                </li>`;
    });
    todolist.innerHTML=ListTag;
    inputbox.value="";
    add.style.display="none";
    Remaining.textContent=item.length;
}
function deleteTask(index){
    item.splice(index,1);
    showcase();
}
clrall.onclick=()=>{
    item=[];
    showcase();
}
document.querySelector('.clrcomtask').onclick=()=>{
    var inputElems=document.querySelectorAll(".checkinput");
    var temp=[]
    for(var i=0;i<item.length;i++){
        if(inputElems[i].checked===true){
            temp.push(item[i]);
        }
    }
    var j=0;
    for(i=0;i<item.length;i++){
        if(item[i]===temp[j]){
        item.splice(i,1);
        j++;
        i--;
    }
}
showcase();
}
document.querySelector('.complete').onclick=()=>{
    checked(true);
}
document.querySelector('.incomplete').onclick=()=>{
    checked(false);
}
function checked(params){
    var inputElems=document.querySelectorAll(".checkinput");
    for(var i=0;i<item.length;i++){
        if(params==true){
            inputElems[i].checked=true;
        }
        else{
            inputElems[i].checked=false;
        }
    }
}






