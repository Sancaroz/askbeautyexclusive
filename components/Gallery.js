export function Gallery(items) {
  return `
    <section class="section gallery-section" id="galeri">
      <div class="section-heading">
        <p class="eyebrow">Galeri</p>
        <h2>Öncesi sonrası ilhamı ve salon atmosferi.</h2>
        <span>Instagram estetiğinde, gerçek sonuç odaklı bir galeri alanı.</span>
      </div>
      <div class="gallery-grid">
        ${items.map(item => `
          <figure class="gallery-item">
            <img src="${item.image}" alt="${item.title}">
            <figcaption><strong>${item.label}</strong><span>${item.title}</span></figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}
