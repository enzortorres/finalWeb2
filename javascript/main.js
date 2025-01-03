//!Menu Responsivo
const nav = document.querySelector('.ulNav')
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        nav.classList.toggle('active');
    } else{
        nav.classList.toggle('active');
    }
});

//!Efeito fadein
const observador = new IntersectionObserver ( (evento) => {
    evento.forEach( (ev) => {
        if(ev.isIntersecting){
            ev.target.classList.add('show')
        }
    })
})
const elements = document.querySelectorAll('.hidden')
elements.forEach((elements) => observador.observe(elements))


//!Alerta ao clicar em alguma âncora
const anchors = document.querySelectorAll('.anchors');
const errorMessage = document.querySelector('.error');
let timeoutId;

anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        clearTimeout(timeoutId);
        errorMessage.style.opacity = '1';

        timeoutId = setTimeout(() => {
            errorMessage.style.opacity = '0';
        }, 3000);
    });
});

