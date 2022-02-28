verificar();

function verificar() {
    const work = prompt("INGRESA TU NOMBRE").toUpperCase();
    if(!work) {
        verificar();
    }
    else {
        escribir(work); 
    }
    
}

function escribir(name) {
  const typed = new Typed(".typed", {
    strings: ['HUEVOS ' + name],
    typeSpeed: 100,
    startDelay: 350,
  });
}
