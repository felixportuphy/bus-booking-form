const fNameElem = document.getElementById("fname");
const tripElem = document.getElementById("trip");
const dateElem = document.getElementById("date");
const numberOfPeopleElem = document.getElementById("num-people");
const feedbackElem = document.getElementById("feedback");
const form = document.getElementById("form");
const button = document.querySelector("button");


const validationHandler = ()=>{
     const fname = fNameElem.value;
     const trip = tripElem.value;
     const date = dateElem.value;
     const numPeople = numberOfPeopleElem.value;


     if(fname ===""){
         errMsg(fNameElem,"Field cannot be empty");
         return
     }else{
        errMsg(fNameElem,"");
     }


     if(trip != null){
         errMsg(tripElem,"Choose one trip")
         return
     }else{
        errMsg(tripElem,"");
     }

     if(date ===""){
         errMsg(dateElem,"Please select date")
         return
     }else{
        errMsg(dateElem,"");
     }

     if(numPeople ===""){
         errMsg(numberOfPeopleElem,"Field cannot be empty")
         return
     }else{
        errMsg(numberOfPeopleElem,"");
     }

     alert("Your name is "+fname )



}

const errMsg = (elem,message)=>{
   
    let elementId = elem.getAttribute("id");
    const error = document.querySelector("#"+elementId).nextElementSibling;
    error.innerText=message;
    error.className = "errorMessage visible";
}




button.addEventListener('click',(e)=>{
    e.preventDefault();
    validationHandler();
    
})