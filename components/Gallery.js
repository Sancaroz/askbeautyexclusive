export function Gallery(items) {
  const imageAlt = item => item.alt || `${item.title} uygulama görseli - AŞK Beauty Büyükçekmece`;
  const filters = [
    ["all", "Tümü"],
    ["dudak", "Dudak"],
    ["eyeliner", "Eyeliner"],
    ["kas-kirpik", "Kaş & Kirpik"],
    ["tirnak", "Tırnak"],
    ["sertifika", "Sertifika"]
  ];

  return `
    <section class="section gallery-section" id="galeri">
      <div class="section-heading">
        <p class="eyebrow">Galeri</p>
        <h2>Uygulama detayları, salon atmosferi ve zarif sonuçlardan seçilmiş kareler.</h2>
        <span>Her görsel; doğal görünüm, hijyenik uygulama ve kişiye özel estetik yaklaşımımızı yansıtır.</span>
      </div>
      <div class="gallery-filters" role="group" aria-label="Galeri filtreleri">
        ${filters.map(([value, label], index) => `
          <button class="${index === 0 ? "is-active" : ""}" type="button" data-gallery-filter="${value}">
            ${label}
          </button>
        `).join("")}
      </div>
      <div class="gallery-grid" data-gallery-grid>
        ${items.map(item => `
          <figure class="gallery-item${item.fit === "contain" ? " is-contain" : ""}" data-gallery-category="${item.category || "all"}">
            <button
              class="media-open"
              type="button"
              data-lightbox-image="${item.image}"
              data-lightbox-title="${item.title}"
              aria-label="${item.title} görselini büyüt"
            >
              <img src="${item.image}" alt="${imageAlt(item)}" loading="lazy">
            </button>
            <figcaption><strong>${item.label}</strong><span>${item.title}</span></figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}

export function initGalleryFilters() {
  const section = document.querySelector(".gallery-section");
  if (!section) {
    return;
  }

  const filterButtons = [...section.querySelectorAll("[data-gallery-filter]")];
  const galleryItems = [...section.querySelectorAll("[data-gallery-category]")];

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.galleryFilter;

      filterButtons.forEach(item => {
        item.classList.toggle("is-active", item === button);
      });

      galleryItems.forEach(item => {
        const shouldShow = selectedCategory === "all" || item.dataset.galleryCategory === selectedCategory;
        item.hidden = !shouldShow;
      });
    });
  });
}
