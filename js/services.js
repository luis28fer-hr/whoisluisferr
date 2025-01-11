function toggleEspecialidad(id) {
    const especialidad = document.getElementById(id);
    const icon = especialidad.querySelector('.fa-chevron-up');
    const contents = especialidad.querySelectorAll('.content');

    contents.forEach(content => content.classList.toggle('active'));
    icon.classList.toggle('rotate');
}


function toggleHabilidad(id) {
    const habilidad = document.getElementById(id);
    const icon = habilidad.querySelector('.fa-chevron-up');
    const contents = habilidad.querySelectorAll('.content');

    contents.forEach(content => content.classList.toggle('active'));
    icon.classList.toggle('rotate');
}

