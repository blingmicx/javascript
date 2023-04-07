//creacion de la funcion con las card

function createCards(data) {
    // contenedor de card
    const container = document.getElementById("card-container");

    data.forEach(item => {
        // crear card
        const card = document.createElement("div");
        card.classList.add("card");

        const titulo = document.createElement("h2");
        titulo.textContent = item.titulo;

        const descripcion = document.createElement("p");
        descripcion.textContent = item.descripcion;

        const imagen = document.createElement("img");
        imagen.src = item.imagen;


        card.appendChild(titulo);
        card.appendChild(descripcion);
        card.appendChild(imagen);

        container.appendChild(card);
    });
}

//informacion de las card
const data = [
    {
        titulo: "Caballito",
        descripcion: "Local ubicado en sobre la conocida avenida Rivadavia y Miro, cuenta con mas de 15 gatitos para disfrutar tu estadia.",
        imagen: "./img/caballito.jpeg"
    },
    {
        titulo: "Palermo",
        descripcion: "Nuestro primer local ubicado en la calle Honduras es el que mas felinos tiene gracias al refugio en colaboracion que tenemos con nuestros colaboradores de @MascotasPalermom",
        imagen: "./img/palermo.jpeg"
    },
    {
        titulo: "Belgrano",
        descripcion: "Nuestra gran apertura cerca de la estacion Echeverria y que en su mayoria esta integrada por gatitos en pleno crecimiento.",
        imagen: "./img/belgrano.jpeg"
    }
];

//ocultar las card antes del inicio de sesion



// inico de la sesion con datos guardados

let emailUsuario = document.getElementById('emailAddress');
let passUsuario = document.getElementById('password');
let btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () => {
    localStorage.setItem('email', emailUsuario.value);
    localStorage.setItem('pass', passUsuario.value);
})
const passGuardado = 'contra'

if (passGuardado == localStorage.getItem('pass')) {
    createCards(data);

}else {
    document.body.append('Usuario o contraseña incorrectos, ingrese de nuevo.');
}


