function footerEl(ptrs = [{}]) {
  const pieDePag = document.createElement("div");
  pieDePag.innerHTML = `
  <template id="footer-temp">
    <img class="footer-logo" alt="" />
<div class="footer-contet">
  <ul>
    <li class="footerEl">
    <ul class="lista--interna">
    <li>
      <img src="" class="footerIcono home" />
      <a class="footerLink" href="./index.html">home</a>
    </li>
    <li>
      <img src="" class="footerIcono user" />
      <a class="footerLink"./contacto.html" href="">contacto</a>
   </li>
   <li>
   <img src="" class="footerIcono
   phone" />
   <a class="footerLink" href="./servicios.html">servicios</a>
   </li>
   </li>
   </ul>
    <li class="footerEl boxIconos">
      <img src="" class="footerIcono linkedin" />
      <img src="" class="footerIcono github" />
      <img src="" class="footerIcono f" />
    </li>
    <li class="footerEl"><p>© 2023 Quemacocos</p></li>
  </ul>
</div>
   </template> `;
  const footerCont = document.querySelector("#footer");
  const t = pieDePag.querySelector("#footer-temp");
  t.content.querySelector(".footer-logo").src = ptrs.logo;
  t.content.querySelector(".home").src = ptrs.home;
  t.content.querySelector(".user").src = ptrs.user;
  t.content.querySelector(".phone").src = ptrs.phone;
  t.content.querySelector(".linkedin").src = ptrs.linkedin;
  t.content.querySelector(".github").src = ptrs.github;
  t.content.querySelector(".f").src = ptrs.f;
  const clone = document.importNode(t.content, true);
  footerCont.appendChild(clone);
}
function getFooter() {
  return fetch(
    "https://cdn.contentful.com/spaces/tnwsiw4enbu0/environments/master/entries?access_token=wmRajosAg7jNAmkMJVtCoVoTdIS7OZe0R6TK5U6x6L0&content_type=bienvenida"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return {
        logo: data.includes.Asset[4].fields.file.url,
        home: data.includes.Asset[9].fields.file.url,
        user: data.includes.Asset[3].fields.file.url,
        phone: data.includes.Asset[2].fields.file.url,
        linkedin: data.includes.Asset[5].fields.file.url,
        github: data.includes.Asset[10].fields.file.url,
        f: data.includes.Asset[11].fields.file.url,
      };
    });
}

function main() {
  getFooter().then((r) => {
    footerEl(r);
  });
}
main();
