import { exteriorGallery, interiorGallery, interiorHighlights, interiorSettings } from "../data/interior.js";

export function InteriorShowcase() {
  if (!interiorSettings.enabled) {
    return "";
  }

  return `
    <section class="section interior-section" id="salon">
      <div class="interior-layout">
        <figure class="interior-hero">
          <button
            class="media-open"
            type="button"
            data-lightbox-image="${interiorSettings.heroImage}"
            data-lightbox-title="AŞK Beauty salon iç mekanı"
            aria-label="AŞK Beauty salon iç mekanı görselini büyüt"
          >
            <img src="${interiorSettings.heroImage}" alt="AŞK Beauty salon iç mekanı" loading="lazy">
          </button>
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
            <button
              class="media-open"
              type="button"
              data-lightbox-image="${item.image}"
              data-lightbox-title="${item.title}"
              aria-label="${item.title} görselini büyüt"
            >
              <img src="${item.image}" alt="${item.title}" loading="lazy">
            </button>
            <figcaption>${item.title}</figcaption>
          </figure>
        `).join("")}
      </div>

      <div class="exterior-showcase">
        <div class="section-heading">
          <p class="eyebrow">Konum</p>
          <h2>Dış cephe ve giriş fotoğraflarıyla salonu daha kolay tanıyın.</h2>
          <span>Randevuya gelirken AŞK Beauty tabelasını ve giriş panosunu bu görsellerden kontrol edebilirsiniz.</span>
        </div>

        <div class="exterior-gallery">
          ${exteriorGallery.map(item => `
            <figure>
              <button
                class="media-open"
                type="button"
                data-lightbox-image="${item.image}"
                data-lightbox-title="${item.title}"
                aria-label="${item.title} görselini büyüt"
              >
                <img src="${item.image}" alt="${item.title}" loading="lazy">
              </button>
              <figcaption>
                <strong>${item.title}</strong>
                <span>${item.text}</span>
              </figcaption>
            </figure>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
