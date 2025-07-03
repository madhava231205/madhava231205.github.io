hireform = document.getElementById('hireform')
thankyouform = document.getElementById('thankyouform')
button = document.getElementById('button')
submit =  document.getElementById('submit')
button.addEventListener('click', function(){
    hireform.style.display="block";
    thankyouform.style.display="none";


})
submit.addEventListener('click', function(){
    thankyouform.style.display="block";
    hireform.style.display= "none";
})
