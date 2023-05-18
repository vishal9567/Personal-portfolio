const userName = document.getElementById("textUsername");
const contactNumber = document.getElementById("cont");
const eMail = document.getElementById("mail");
const message = document.getElementById("mesg");

function validateForm(){

  if(userName.value.trim()=== ""){
      onError(userName,"Enter a valid name")
  }
  else{
      onSucces(userName);
  }
  if(contactNumber.value.trim()===""){
      onError(contactNumber,"Enter a phone number")
      return false;
  }
  else{
    if(!phoneNumber(contactNumber.value.trim())){
      onError(contactNumber,"Contact number should be proper");
      return false;
    }
    else{
      onSucces(contactNumber);
    } 
  }
  if(eMail.value.trim()=== ""){
      onError(eMail,"Email should not be empty")
      return false;
  }
  else{
      if(!isValidEmail(eMail.value.trim())){
          onError(eMail,"Email should be proper");
          return false;
      }
      else{
          onSucces(eMail);
      }
  }
  if(message.value.trim()===""){
    onError(message,"send a message");
    return false;
  }
  else{
    onSucces(message);
  }
  return true;
}
function onSucces(input){
  let parent=input.parentElement
  let messageEle= parent.querySelector("small")
  messageEle.style.visibility="hidden";
  messageEle.innerText="";
  parent.classList.remove("error");
  parent.classList.add("success");
}
function onError(input,comment){
  let parent=input.parentElement
  let messageEle= parent.querySelector("small")
  messageEle.style.visibility="visible";
  messageEle.innerText= comment;
  parent.classList.remove("success");
  parent.classList.add("error");
}
function isValidEmail(email){
  return/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email);
}
function phoneNumber(teleNumber){
  return/^\d{10}$/.test(teleNumber);
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzR8UaogYLJua0Zvp4E1d-D3y_4izOHk1GsewXhNKUZDplnkveF-YTZCPhZ_BV-Emju/exec'
const form = document.getElementById("gform")
const msg = document.getElementById("msg")

// document.querySelector("button")

    form.addEventListener("submit",e=>{
        e.preventDefault();
        if (validateForm()) {
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
              .then(response => {
                msg.innerHTML = "Sent Successfully"
                // alert("Sent Successfully")
                setTimeout(function () {
                  msg.innerHTML = ""
                }, 5000)
                form.reset()
              })
              .catch(error => console.error('Error!', error.message))
          }
    });