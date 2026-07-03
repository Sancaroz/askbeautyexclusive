export function ImageLightbox() {
  return `
    <div class="image-lightbox" data-image-lightbox aria-hidden="true">
      <div class="image-lightbox-backdrop" data-image-lightbox-close></div>
      <figure class="image-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Görsel önizleme">
        <button class="image-lightbox-close" type="button" aria-label="Görseli kapat" data-image-lightbox-close>×</button>
        <img src="" alt="" data-image-lightbox-img>
        <figcaption data-image-lightbox-caption></figcaption>
      </figure>
    </div>
  `;
}

export function initImageLightbox() {
  const lightbox = document.querySelector("[data-image-lightbox]");
  const image = document.querySelector("[data-image-lightbox-img]");
  const caption = document.querySelector("[data-image-lightbox-caption]");

  if (!lightbox || !image || !caption) {
    return;
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("has-modal");
    image.removeAttribute("src");
    image.alt = "";
    caption.textContent = "";
  }

  function openLightbox(trigger) {
    image.src = trigger.dataset.lightboxImage;
    image.alt = trigger.dataset.lightboxTitle || "AŞK Beauty görseli";
    caption.textContent = trigger.dataset.lightboxTitle || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("has-modal");
  }

  document.querySelectorAll("[data-lightbox-image]").forEach(trigger => {
    trigger.addEventListener("click", () => openLightbox(trigger));
  });

  lightbox.addEventListener("click", event => {
    if (event.target.closest("[data-image-lightbox-close]")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
