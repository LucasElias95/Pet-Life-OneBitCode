var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
duvida.addEventListener('click', function(){
    duvida.classList.toggle('ativa')
})
})

function abrirWhats() {
    window.open("http://wa.me/5511960616843", "_blank");
}