let username=document.getElementById('username');
let email=document.getElementById('email');
let pass1=document.getElementById('pass1');
let pass2=document.getElementById('pass2');

function validateInput(){
    if (username.value.trim()===""){
        isError(username,'username cannot be empty');
        }
    else{
        isSuccess(username);
    }
    if(email.value.trim()===""){
        isError(email,'email cannot be empty');
    }else{
        if(!isValidEmail(email.value.trim())){
            isError(email,'email is not valid');
        }
        else{
            isSuccess(email);
        }
    }
    if(pass1.value.trim()===""){
        isError(pass1,'password cannot be empty');
    }
    else{
        isSuccess(pass1);
    }
    if(pass2.value.trim()===""){
        isError(pass2,'password cannot be empty');
    }
    else{
        if(pass1.value.trim()!==pass2.value.trim()){
            isError(pass2,'password not matched');
        }
        else{
        isSuccess(pass2);
        }
    }
}

document.querySelector('button').addEventListener('click',(event)=>{
    event.preventDefault();
    validateInput();
})

function isSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector('small');
    messageEle.style.visibility="hidden";

    parent.classList.remove('error');
    parent.classList.add('success');
}

function isError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector('small');
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add('error');
    parent.classList.remove('success');
    
}

function isValidEmail(email){
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
}
