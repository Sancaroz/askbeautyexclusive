export function Gallery(items) {
  const imageAlt = item => item.alt || `${item.title} uygulama görseli - AŞK Beauty Büyükçekmece`;
  const filters = [
    { value: "all", label: "Tümü", hint: "Portfolyo" },
    { value: "dudak", label: "Dudak", hint: "Renklendirme" },
    { value: "eyeliner", label: "Eyeliner", hint: "Kalıcı makyaj" },
    { value: "kas-kirpik", label: "Kaş & Kirpik", hint: "Bakış tasarımı" },
    { value: "tirnak", label: "Tırnak", hint: "Nail art" },
    { value: "salon", label: "Salon", hint: "Atmosfer" },
    { value: "sertifika", label: "Sertifika", hint: "Uzmanlık" }
  ].map(filter => ({
    ...filter,
    count: filter.value === "all"
      ? items.length
      : items.filter(item => item.category === filter.value).length
  }));

  return `
    <section class="section gallery-section" id="galeri">
      <div class="section-heading">
        <p class="eyebrow">Galeri</p>
        <h2>Uygulama detayları, salon atmosferi ve zarif sonuçlardan seçilmiş kareler.</h2>
        <span>Her görsel; doğal görünüm, hijyenik uygulama ve kişiye özel estetik yaklaşımımızı yansıtır.</span>
      </div>
      <div class="gallery-filters" role="group" aria-label="Galeri filtreleri">
        ${filters.map((filter, index) => `
          <button class="${index === 0 ? "is-active" : ""}" type="button" data-gallery-filter="${filter.value}">
            <span>${filter.hint}</span>
            <strong>${filter.label}</strong>
            <small>${filter.count}</small>
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
