import { productCollections, productSettings } from "../data/products.js";

export function ProductPreview() {
  if (!productSettings.enabled) {
    return "";
  }

  return `
    <section class="section product-preview" id="urunler" aria-label="Yakında ürün seçkisi">
      <div class="section-heading">
        <p class="eyebrow">Bakım Seçkisi</p>
        <h2>${productSettings.title}</h2>
        <span>${productSettings.intro}</span>
      </div>

      <div class="product-grid">
        ${productCollections.map(collection => `
          <article class="product-card">
            <img src="${collection.image}" alt="${collection.title}" loading="lazy">
            <div>
              <span>${collection.status}</span>
              <h3>${collection.title}</h3>
              <p>${collection.summary}</p>
            </div>
          </article>
        `).join("")}
      </div>

      <p class="product-note">${productSettings.note}</p>
    </section>
  `;
}
