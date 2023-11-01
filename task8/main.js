const btnOpen=document.querySelector('.btn-open');
const body=document.querySelector('body');
const popup=document.querySelector('.popup')
const btnSubmit=document.querySelector('.btn-submit')
const btnBack=document.querySelector('.btn-back')
const form=document.querySelector('.form')
const name=document.querySelector('.name')
const email=document.querySelector('.email')
const tel=document.querySelector('.tel')
const organization=document.querySelector('.organization')
const comment=document.querySelector('.comment')
const heplerText=document.querySelector('.helper-text')
const policy=document.querySelector('.policy')

if (localStorage.getItem('lastRequiest')){
    const data=JSON.parse(localStorage.getItem('lastRequiest'));
    name.value=data.name;
    email.value=data.email;
    tel.value=data.tel;
    policy.checked='true';
    organization.value=data.organization;
    comment.value=data.comment;

}

const validateName=function(){return (String(name.value).length>=6)}
const validateEmail=function(){ return (email.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) }
const validatePhone=function(){ return (tel.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) }
const validateOrganization=function(){ return (String(organization.value).length>=3)}
const validatePolicy=function(){return policy.checked}
btnOpen.addEventListener('click', function(){
    history.pushState({},"popup","?form");
   popup.classList.add('open')
})

btnBack.addEventListener('click', function(e){
    e.preventDefault()
    history.back();
    popup.classList.remove('open')
})
const validateForm= function(){
    if (!validateName())heplerText.innerHTML='Имя должно содержать не менее 6 символов'
    else if (!validateEmail())heplerText.innerHTML='Неверный формат почты';
    else if (!validatePhone())heplerText.innerHTML='Неверный формат телефона';
    else if (!validateOrganization())heplerText.innerHTML="Название организации должно содержать не менее 3-x символов "
    else if (!validatePolicy())heplerText.innerHTML='соглашение конфидициальности обязательно'
    else{heplerText.innerHTML=''; return true;}
}
const clearForm=function(){
    name.value=""; organization.value="";tel.value="";email.value="";policy.checked=false;comment.value=""

}
btnSubmit.addEventListener('click', function(e){
    e.preventDefault();
   
    if (validateForm()){

    
   
    const requist={
        name: name.value,
        email: email.value,
        tel: tel.value,
        organization: organization.value,
        comment:comment.value
    };
   
    localStorage.setItem("lastRequiest", JSON.stringify(requist));

    fetch('https://api.slapform.com/dlbwGqmeO',{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(requist)
    }).then(rez=>{if(rez.ok) {alert("успешная отправка заявки");clearForm()}}).catch(error=>alert('возникла ошибка: '+error.message))
    }
})



