alert ("Bienvenido socio de Cat Cafe! Ingrese sus datos de cuenta. Atencion! Solo hay tres intentos.");

/* INGRESO A LA PAGINA */

let savePass = "12345";
let saveName = "usuario";

for (let i=0 ; i<3 ; i++){
    let userName = prompt ("Ingrese usuario:");
    if (userName == saveName){
    break;
    }
    alert ("No se pudo completar el ingreso");
} 

for (let i=0 ; i<3 ; i++){
    let userPass = prompt ("Ingrese contraseña:");
    if (userPass == savePass){
        alert ("Login exitoso, bienvenido!");
    break;
    }
    alert ("No se pudo completar el ingreso");
}    

/* SELECCION DE SUCURSAL */

let sucursal = prompt ("Ingrese sucursal deseaada; 1. PALERMO, 2. CABALLITO O 3. BELGRANO.");

switch (sucursal){
    case "1":
        alert ("No hay cupos disponibles, lo lamentamos!");
        break;

    case "2":
        let dia = prompt ("Dias de atencion disponibles; 1. 08/02, 2. 14/02, 3. 26/02.  ");
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

}