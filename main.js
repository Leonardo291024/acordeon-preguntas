const preguntas = document.querySelectorAll('.pregunta');
const respuestas = document.querySelectorAll('.respuesta');

preguntas.forEach((pregunta, index) =>{
    pregunta.addEventListener('click', function(){
        respuestas[index].classList.toggle('inactive')
    })
})

