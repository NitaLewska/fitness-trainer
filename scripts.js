document.querySelector("#services1").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelectorAll('.service_description').forEach(element => element.classList.add('disabled'))
    document.querySelectorAll('.service_description').forEach(element => element.classList.remove('active'))
    document.querySelectorAll('.service_description')[0].classList.add('active')
})
document.querySelector("#services2").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelectorAll('.service_description').forEach(element => element.classList.add('disabled'))
    document.querySelectorAll('.service_description').forEach(element => element.classList.remove('active'))
    document.querySelectorAll('.service_description')[1].classList.add('active')
})
document.querySelector("#services3").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelectorAll('.service_description').forEach(element => element.classList.add('disabled'))
    document.querySelectorAll('.service_description').forEach(element => element.classList.remove('active'))
    document.querySelectorAll('.service_description')[2].classList.add('active')
})
document.querySelector("#services4").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelectorAll('.service_description').forEach(element => element.classList.add('disabled'))
    document.querySelectorAll('.service_description').forEach(element => element.classList.remove('active'))
    document.querySelectorAll('.service_description')[3].classList.add('active')
})
document.querySelector("#services5").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelectorAll('.service_description').forEach(element => element.classList.add('disabled'))
    document.querySelectorAll('.service_description').forEach(element => element.classList.remove('active'))
    document.querySelectorAll('.service_description')[4].classList.add('active')
})
document.querySelector("#services6").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelectorAll('.service_description').forEach(element => element.classList.add('disabled'))
    document.querySelectorAll('.service_description').forEach(element => element.classList.remove('active'))
    document.querySelectorAll('.service_description')[5].classList.add('active')
})

