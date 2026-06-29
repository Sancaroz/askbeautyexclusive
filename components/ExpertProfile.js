import { expert } from "../data/expert.js";

export function ExpertProfile() {
  return `
    <section class="section expert-section" id="uzman">
      <div class="expert-content">
        <p class="eyebrow">Uzman Profil</p>
        <h2>${expert.name}</h2>
        <strong>${expert.title}</strong>
        <p>${expert.intro}</p>

        <div class="expert-tags" aria-label="Uzmanlık alanları">
          ${expert.highlights.map(item => `<span>${item}</span>`).join("")}
        </div>
      </div>

      <figure class="expert-card">
        <img src="${expert.image}" alt="${expert.name} ${expert.title} sertifikası" loading="lazy">
        <figcaption>
          <strong>Sertifikalı uzmanlık</strong>
          <span>Doğal, ölçülü ve kişiye özel güzellik yaklaşımı.</span>
        </figcaption>
      </figure>

      <div class="expert-principles">
        ${expert.principles.map(item => `
          <article>
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}
