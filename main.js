const emailInput = document.querySelector('input[name="email"]')
const submitBtn = document.getElementById('submit')
const invalidFeeback = document.querySelector('.invalid-feedback')

const submitHandler = (e) => {
    e.preventDefault()
    const emailValue = emailInput.value
    console.log(emailValue)
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        invalidFeeback.style.display = 'none'
        emailInput.classList.remove('invalid')
    } else {
        invalidFeeback.style.display = 'flex'
        emailInput.classList.add('invalid')
    }
    
} 

emailInput.addEventListener('focus', () => {
    emailInput.classList.remove('invalid')
    invalidFeeback.style.display = 'none'
})

submitBtn.addEventListener('click', submitHandler)

