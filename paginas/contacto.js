function formEl() {
  const formu = document.createElement("div");
  formu.innerHTML = `<template id="form--temp">
        <p class="title">Contacto</p>
        <form class="form">
        <div class="form-cont">
          <div class="form-fieldset">
            <label>
              <p>Nombre</p>
              <input class="inpot" type="text" id="name" placeholder="Tu nombre"/>
            </label>
          </div>

          <div class="form-fieldset">
            <label for="email">
              <p>email</p>
              <input class="inpot" type="text" id="email" placeholder="Tu @mail.com"/>
            </label>
          </div>
        </div>
          <div class="form-fieldset">
            <label for="mensaje">
              <p>Mensaje</p>
              <textarea
                class="form-msje"
                name=""
                id="mensaje"
                cols="10"
                rows="9"
              ></textarea>
            </label>
          </div>

          <button class="form-boton inpot">enviar
          </button>
        </form>
      </template>`;
  const formCont = document.querySelector(".contacto--content");
  const t = formu.querySelector("#form--temp");
  const clone = document.importNode(t.content, true);
  formCont.appendChild(clone);
}

// ``-- template string te deja meter todas las lineas

async function sendEmail() {
  const evento = document.querySelector(".form-boton");

  evento.addEventListener("submit", async (e) => {
    e.preventDefault();
    let nombre = formu.querySelector("#name").value;
    let correo = formu.querySelector("#email").value;
    let mesj = formu.querySelector("#mensaje").value;

    let data = `Nombre:${nombre},email:${correo},Mensaje:${mesj}`;

    /*console.log(data);*/
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "aplication/json" },
      body: JSON.stringify({
        to: "david.israel.cortez@gmail.com",
        message: data,
      }),
    });
  });
}
function main() {
  formEl();
}
main();
