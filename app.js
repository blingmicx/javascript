
const usuario = {
    nombre: 'micaela',
    apellido: 'daltolo',
    saveName: 'usuario',
    savePass: '12345',
    edad: 16,
    saludo: function () {alert ("Bienvenido/a" + " " + usuario[nombre] + " " + usuario[apellido]);}
}

/* INGRESO DE CUENTA */

function go(){

    if (document.form.password.value=='12345' && document.form.login.value=='usuario'){ 
            document.form.submit(); 
        
let contenedorTarjetas = document.querySelector('.contenedorTarjetas');

let sucursales = [{
    id: 1,
    sucursal: 'CABALLITO',
    imagen: '.img/caballito.jpeg',
    descripcion: 'Local ubicado en sobre la conocida avenida Rivadavia y Miro, cuenta con mas de 15 gatitos para disfrutar tu estadia.'
}, {
    id: 2,
    sucursal: 'PALERMO',
    imagen: './img/palermo.jpeg',
    descripcion: 'Nuestro primer local ubicado en la calle Honduras es el que mas felinos tiene gracias al refugio en colaboracion que tenemos con nuestros colaboradores de @MascotasPalermom'
},{
    id: 3,
    sucursal: 'BELGRANO',
    imagen: './img/belgrano.jpeg',
    descripcion: 'Nuestra gran apertura cerca de la estacion Echeverria y que en su mayoria esta integrada por gatitos en pleno crecimiento.'

}];


for (const item of sucursales) {
    let tarjeta = document.createElement('div');
    tarjeta.className = 'card my-5 bg-light';
    tarjeta.id = `${item.id}`;
    tarjeta.innerHTML = `
    <h4 class="card-header">${item.sucursal}</h4>
    <img src="${item.imagen}" class="card-img-top imagenProducto">
    <div class="card-body">
        <p class="card-text">${item.descripcion}</p>
    </div>
    <div class="card-footer"><a href="#" class="btn btn-primary">Pedir turno.</a></div>`;
    contenedorTarjetas.append(tarjeta)
}


}

    else{ 
    document.body.append('Usuario o contraseña incorrectos, ingrese de nuevo.');
    }
    
}










/*

let sucursal = prompt ("Ingrese sucursal deseaada; 1. PALERMO, 2. CABALLITO O 3. BELGRANO.");

switch (sucursal){
    case "1":
        alert ("No hay cupos disponibles, lo lamentamos!");
        break;

    case "2":
        const dia = prompt ("Dias de atencion disponibles; 1. 08/02, 2. 14/02, 3. 26/02.  ");
            if (dia == 1) 
            alert ( "Reservaste para el 08/02 en el CatCafe de Caballito.");
            else if (dia == 2) 
                alert ( "Reservaste para el 14/02 en el CatCafe de Caballito.");
                else {
            alert ( "Reservaste para el 26/02 en el CatCafe de Caballito.");        
            
            
            }
        break;

    case "3":
        alert ("Sin necesidad de reserva!");
        break;

    default:
        alert ("No selecciono una opcion valida.");
        break;

}  */


