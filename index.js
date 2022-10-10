const readMsg = document.querySelector('.read')
const unread =  document.querySelector('.unread')
const number = document.querySelector('.alert')
const persons = document.querySelectorAll('.notificationCard')
const circle = document.querySelectorAll('.red-circle')

readMsg.addEventListener('click', () =>  {


number.innerText = 0
circle.forEach((red) => {
red.classList.remove('red-circle')
})


    persons.forEach((notificationCard) =>{
        notificationCard.classList.remove('unread')
    })
})

