function normal() {
    console.log(this)
}

// normal()

oPrueba = {
    nombre: 'Prueba',
    probar: function() { console.log(this) }
}

//Inconsistencia del this

//this se refiere al objeto
oPrueba.probar()

//this se refiere al process
setTimeout(
    oPrueba.probar, 1000
)


//Soluciones
setTimeout(
    function() { oPrueba.probar() }, 2000
)