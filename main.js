let navbar = document.querySelector('#navbar');

let links = document.querySelectorAll('.nav-link');

let logoNavbar = document.querySelector('#logoNavbar');

let spadaLaser = document.querySelector('#spadaLaser');

let collapse = document.querySelector('#collapse');

let check = false;

console.dir(spadaLaser);

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    if(scrolled > 0){
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-yellow');
        collapse.classList.remove('bg-black');
        collapse.classList.add('bg-yellow');
        navbar.style.height = '70px';
        links.forEach((link) => {
            link.style.color = 'var(--black)';
        });
        logoNavbar.src = 'http://127.0.0.1:5500/media/logo-b.png';
        spadaLaser.src = 'http://127.0.0.1:5500/media/spada-b.png';
    }else{
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-yellow');
        collapse.classList.add('bg-black');
        collapse.classList.remove('bg-yellow');
        navbar.style.height = '140px'; 
        links.forEach((link) => {
            link.style.color = 'var(--yellow)';
        });
        logoNavbar.src = 'http://127.0.0.1:5500/media/logo-y.png';
        spadaLaser.src = 'http://127.0.0.1:5500/media/spada-y.png';
    };
});

spadaLaser.addEventListener('click', ()=> {
   
    if(check == false) {
        spadaLaser.style.transform = `rotate(-90deg)`;
        check = true;
    }else {
        spadaLaser.style.transform = `rotate(0deg)`;
        check = false;        
    };
});

// Numeri Incrementali/ Chiamate Asincrone

let firstNumber = document.querySelector('#firstNumber');

let secondNumber = document.querySelector('#secondNumber');

let thirdNumber = document.querySelector('#thirdNumber');

let confirm = true;

function createInterval(n, element, time) {
    let counter = 0;

    let interval = setInterval(() => {
        if(counter < n) {
            counter++
            element.innerHTML = counter;
        }else {
            clearInterval(interval)
        };
    }, time);

    setTimeout(() => {
        confirm = true;
    }, 8000);
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting && confirm) {
            createInterval(100, firstNumber, 100);
            createInterval(200, secondNumber, 50);
            createInterval(300, thirdNumber, 20);
            confirm = false;
        };
    })
});

observer.observe(firstNumber);

