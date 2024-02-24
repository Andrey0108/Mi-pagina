import { cards } from "./dataCards.js";

const sectioncards = document.getElementById("cards");

if (cards.length) {
  cards.forEach((element) => {
    const slider = element.slider.map((slider)=>{
      return `
        <img src="${slider}" class="img" />
      `
    })
    sectioncards.innerHTML += `
      <article class="card">
        <article class="slaider">
          ${slider}
        </article>

        <p>
          <span>${element.titulo}</span>
          <span>${element.estreno}</span>
        </p>

        <p>${element.descripcion}</p>
        <a href="/otros/susumiya.html">Ver mas</a>
      </article>
      `;
  });
}
