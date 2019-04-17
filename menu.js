const toggleMenu = () => {
    menu.classList.toggle('menu--open');
}

const menu = document.querySelector('.menu');
console.log(menu);

const menuButton = document.querySelector(".menu-button")
console.log(menuButton);

menuButton.addEventListener('click', () =>{
    toggleMenu();
});

const button = document.querySelector('.button')

// button.addEventListener('mouseover', function(event){
//     let target = event.target;
//     target.style.color = 'black';
//     target.style.background = "white"
//     target.style.cursor = 'pointer'

//     target.onmouseout = function(event){
//         target.style.color = '';
//         target.style.background = '';
//     }
// })
