//creacion de la funcion con las card

function createCards(data) {
    // contenedor de card
    const container = document.getElementById("card-container");

    data.forEach(item => {
        // crear card
        const card = document.createElement("div");
        card.classList.add("card");

        const sucursal = document.createElement("h2");
        sucursal.textContent = item.sucursal;

        const descripcion = document.createElement("p");
        descripcion.textContent = item.descripcion;

        const imagen = document.createElement("img");
        imagen.src = item.imagen;

        const boton = document.createElement("button");
        boton.textContent = "Agendar turno!";

        card.appendChild(sucursal);
        card.appendChild(descripcion);
        card.appendChild(imagen);
        card.appendChild(boton);

        container.appendChild(card);

        card.classList.add("card-style");

    });
}

//informacion de las card
const data = [
    {
        sucursal: "Caballito",
        descripcion: "Local ubicado en sobre la conocida avenida Rivadavia y Miro, cuenta con mas de 15 gatitos para disfrutar tu estadia.",
        imagen: "./img/caballito.jpeg"
    },
    {
        sucursal: "Palermo",
        descripcion: "Nuestro primer local ubicado en la calle Honduras es el que mas felinos tiene gracias al refugio en colaboracion que tenemos con nuestros colaboradores de @MascotasPalermom",
        imagen: "./img/palermo.jpeg"
    },
    {
        sucursal: "Belgrano",
        descripcion: "Nuestra gran apertura cerca de la estacion Echeverria y que en su mayoria esta integrada por gatitos en pleno crecimiento.",
        imagen: "./img/belgrano.jpeg"
    }
];


// función para mostrar las cards si el usuario inicia sesión

//datos que tienen que coicidir
function showCards() {
    const passGuardado = "123456";
    const emailGuardado = "usuario@mail.com";
    const emailUsuario = document.getElementById("emailAddress");
    const passUsuario = document.getElementById("password");

// si el inicio de sesion esta bien
    if (
        emailGuardado === emailUsuario.value && passGuardado === passUsuario.value
    ) {
        createCards(data);
    } else {
        document.body.append(
            "Usuario o contraseña incorrectos, ingrese de nuevo."
        );
    }
}
const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
    showCards();
});



