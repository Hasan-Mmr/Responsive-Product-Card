const images = document.querySelector('.images__container');
const details = document.querySelector('.details__container');
const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');

let currentTheme = undefined;

colors.forEach(color => {
    color.addEventListener('click', e => {
        changeColorTheme(e);
    })
})

function changeColorTheme(e) {
    colors.forEach(color => {
        color.classList.remove('active');
    })
    e.target.classList.add('active');
    currentTheme = e.target.dataset.color;
    let adjustedColor = undefined;
    switch (currentTheme) {
        case 'black':
        adjustedColor = 'rgb(45, 45, 45)'
        break;
    
        case 'blue':
        adjustedColor = 'rgb(69, 69, 129)'
        break;

        case 'brown':
        adjustedColor = 'rgb(79, 54, 48)'
        break;

        case 'grey':
        adjustedColor = 'rgb(120, 120, 120)'
        break;

        case 'orange':
        adjustedColor = 'rgb(185, 80, 47)'
        break;

        default:
            break;
    };
    details.style.setProperty('--clr-theme', adjustedColor);
    changeShoe();
}

function changeShoe() {
    images.removeAttribute('data-bgcolor');
    images.setAttribute('data-bgcolor', currentTheme);
}

sizes.forEach(size => {
    size.addEventListener('click', e => {
        changeActiveShoeSize(e);
    })
})

function changeActiveShoeSize(e) {
    sizes.forEach(size => {
        size.classList.remove('active');
    })
    e.target.classList.add('active');
}

let isScreenPortrate = window.matchMedia('(max-width: 950px)');
function adjustHeight() {  
    if ( isScreenPortrate.matches ) {   
        const currentWidth = images.getBoundingClientRect().width;
        images.style.height = currentWidth * 0.65 + 'px';  
    }  
}
adjustHeight();
window.addEventListener('resize', adjustHeight)