export function Gallery(items) {
  return `
    <section class="section gallery-section" id="galeri">
      <div class="section-heading">
        <p class="eyebrow">Galeri</p>
        <h2>Uzmanlık belgeleri, salon hissi ve uygulama ilhamı.</h2>
        <span>Gerçek uygulama ve öncesi-sonrası fotoğrafları eklendikçe bu alan büyüyecek.</span>
      </div>
      <div class="gallery-grid">
        ${items.map(item => `
          <figure class="gallery-item${item.fit === "contain" ? " is-contain" : ""}">
            <img src="${item.image}" alt="${item.title}">
            <figcaption><strong>${item.label}</strong><span>${item.title}</span></figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}
