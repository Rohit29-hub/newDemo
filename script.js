let condition = true;

// page-links start
const homeLink = document.getElementById('home');
const serviceLink = document.getElementById('service')
const contact = document.getElementById('contact')
const about = document.getElementById('about')
// page-links end

// icons-links start
const searchButton = document.getElementById('search')
const login = document.getElementById('login')
const cart = document.getElementById('cart')
// icons-links end

// add event listner on searchbutton and show search box
const searchBox = document.getElementById('big-search-box')
const close_btn = document.getElementById('btn')
const main_container = document.getElementById('main-container')
const body = document.body;
searchButton.addEventListener('click', () => {
    searchBox.style.display = 'block'
    searchBox.style.width = '100%'
    searchBox.style.height = '100%'
    searchBox.style.position = 'absolute'
    searchBox.style.top = '0%'
    searchBox.style.bottom = '0%'
    searchBox.style.overflow = 'hidden'
    searchBox.style.background = 'rgba(0, 0, 0, 0.5)'
    body.style.overflow = 'hidden'
    searchBox.style.zIndex = '100'
    condition = false;

})
close_btn.addEventListener('click', () => {
    searchBox.style.display = 'none'
    body.style.overflow = 'auto'
    condition = true;
})
// end searchBox event 
// login event box start
const loginBox = document.getElementById('login-signup-container')
const close_login_btn = document.getElementById('close-btn-login')
setTimeout(()=>{
    login.addEventListener('click', () => {
        loginBox.style.display = 'block'
        loginBox.style.width = '100%'
        loginBox.style.height = '100%'
        loginBox.style.position = 'absolute'
        loginBox.style.top = '0%'
        loginBox.style.bottom = '0%'
        loginBox.style.overflow = 'hidden'
        loginBox.style.background = 'rgba(0, 0, 0, 0.5)'
        body.style.overflow = 'hidden'
        loginBox.style.zIndex = '100'
        condition = false;
    });

    console.log('Hello User Nice to meet you :) ')
},10000)
close_login_btn.addEventListener('click', () => {
    loginBox.style.display = 'none'
    body.style.overflow = 'auto'
    condition = true;
})
// login event box end

// email and password print in console
const userEmail = document.getElementById('email')
const userPassword = document.getElementById('password')
const submitInfo = document.getElementById('submit-login-auth')
const alertText_login = document.getElementById('alert-text')
let map_DATA = new Map([
    ['rohitk29032005@gmail.com', 'rohitk29@2005'],
    ['rohitk14458@gmail.com', 'rohitk@1977'],
    ['user@gmail.com', 'user@123']
])
submitInfo.addEventListener('click', () => {
    const EMAIL_DATA = userEmail.value.toString().toLowerCase();
    const PASSWORD_DATA = userPassword.value.toString();
    if (EMAIL_DATA === '' || PASSWORD_DATA === '') {
        console.log('Email : ', 'empty');
        console.log('Password : ', 'empty');
        alertText_login.innerHTML = 'Empty field is not valid*'
    } else if (map_DATA.has(EMAIL_DATA) && map_DATA.get(EMAIL_DATA) === PASSWORD_DATA) {
        alertText_login.innerHTML = 'Login successfully*'
        alertText_login.style.color = 'green'
        console.log('Email : ', EMAIL_DATA);
        console.log('Password : ', PASSWORD_DATA);
        setTimeout(()=>{
            loginBox.style.display = 'none'
        },2000)
    } else {
        alertText_login.innerHTML = 'Email or Password is invalid*'
        alertText_login.style.color = 'red'
    }

  
})


// email and password print in console end

// slider start
let counter = 0;
const slides = document.querySelectorAll('.slider')
slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}% `
})
// onclick btn prev
function button_prev(){
    counter--;
    if(counter < 0){
        counter = slides.length-1;
    }
    sliderImage();
}

// onclick btn next
function button_next(){
    counter++;
    if(counter === slides.length){
        counter = 0;
    }
    sliderImage();
}

sliderImage = () => {
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}
// slider end
// slide bar start
const barButton = document.getElementById('bar')
const links = document.querySelector('.pages-links')
const linksUl = document.querySelector('.unorderList')
const userLinks = document.querySelector('.user-icons')
barButton.addEventListener('click',()=>{
    console.log('joo');

})
// slide bar end

const navigationChnageBg = document.querySelector('.big-header')
window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 60){
        navigationChnageBg.style.backgroundColor = 'rgb(0 0 0 / 85%)'
    }else{
        navigationChnageBg.style.backgroundColor = 'rgb(0 0 0)'
    }
})
