import { interiorGallery, interiorHighlights, interiorSettings } from "../data/interior.js";

export function InteriorShowcase() {
  if (!interiorSettings.enabled) {
    return "";
  }

  return `
    <section class="section interior-section" id="salon">
      <div class="interior-layout">
        <figure class="interior-hero">
          <img src="${interiorSettings.heroImage}" alt="AŞK Beauty salon iç mekanı" loading="lazy">
        </figure>

        <div class="interior-content">
          <p class="eyebrow">Salon</p>
          <h2>${interiorSettings.title}</h2>
          <p>${interiorSettings.intro}</p>

          <div class="interior-highlights">
            ${interiorHighlights.map(item => `
              <article>
                <strong>${item.title}</strong>
                <span>${item.text}</span>
              </article>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="interior-gallery">
        ${interiorGallery.map(item => `
          <figure>
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <figcaption>${item.title}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}
