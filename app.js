import { serviceCategories, featuredGallery } from "./data/services.js";
import { business } from "./data/business.js";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { ServiceCard } from "./components/ServiceCard.js";
import { ExpertProfile } from "./components/ExpertProfile.js";
import { Gallery, initGalleryFilters } from "./components/Gallery.js";
import { ProductPreview } from "./components/ProductPreview.js";
import { Experience } from "./components/Experience.js";
import { InteriorShowcase } from "./components/InteriorShowcase.js";
import { Testimonials } from "./components/Testimonials.js";
import { InstagramShowcase } from "./components/InstagramShowcase.js";
import { LocalSeo } from "./components/LocalSeo.js";
import { AppointmentHelper, initAppointmentHelper } from "./components/AppointmentHelper.js";
import { ServiceDetailModal, initServiceDetailModal } from "./components/ServiceDetailModal.js";
import { ImageLightbox, initImageLightbox } from "./components/ImageLightbox.js";
import { CTA } from "./components/CTA.js";
import { Footer } from "./components/Footer.js";

function renderServiceCategories() {
  return `
    <section class="section service-categories" id="hizmetler">
      <div class="section-heading">
        <p class="eyebrow">Hizmetler</p>
        <h2>Güzellik ritüelinizi zarif bir deneyime dönüştüren uygulamalar.</h2>
        <span>Kalıcı makyaj, kaş, kirpik, cilt bakımı ve tırnak uygulamaları randevu öncesi ihtiyacınıza göre planlanır.</span>
      </div>
      <div class="category-showcase">
        ${serviceCategories.map(category => `
          <a class="category-tile" href="#${category.id}">
            <img src="${category.image}" alt="AŞK Beauty ${category.title} hizmetleri">
            <span>${category.title}</span>
          </a>
        `).join("")}
      </div>
      <div class="service-groups">
        ${serviceCategories.map(category => `
          <section class="service-group" id="${category.id}">
            <div class="service-group-head">
              <div>
                <p class="eyebrow">${category.title}</p>
                <h2>${category.title}</h2>
              </div>
              <p>${category.summary}</p>
            </div>
            <div class="service-grid">
              ${category.services.map(service => ServiceCard(service, category.title)).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </section>
  `;
}

function renderWhy() {
  const reasons = [
    ["Premium Hizmet", "Randevudan son kontrole kadar sakin, özenli ve konforlu süreç."],
    ["Hijyen", "Her uygulamada steril çalışma düzeni ve güven veren salon standardı."],
    ["Uzman Uygulayıcılar", "Teknik bilgi, estetik bakış ve doğru ürün seçimi bir arada."],
    ["Kişiye Özel Analiz", "Yüz, cilt ve beklenti analizine göre planlanan işlemler."],
    ["Doğal Sonuçlar", "Abartısız, dengeli ve yüz ifadenizle uyumlu estetik yaklaşım."]
  ];

  return `
    <section class="section why-section" id="hakkimizda">
      <div class="why-image">
        <img src="assets/about/ask-beauty-services-poster.jpeg" alt="AŞK Beauty hizmetleri ve uygulama görselleri">
      </div>
      <div class="why-content">
        <p class="eyebrow">Neden AŞK Beauty?</p>
        <h2>Güven veren uzmanlık, doğal sonuç ve zarif salon deneyimi.</h2>
        <div class="reason-list">
          ${reasons.map(([title, text]) => `
            <article>
              <strong>${title}</strong>
              <span>${text}</span>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCredentials() {
  const credentials = [
    "PhiBrows Artist",
    "PhiContour Artist",
    "PhiLiner Artist",
    "MY Lamination",
    "Nail Art",
    "Altın Oran Kaş Tasarımı",
    "Casmara BeautyPlan",
    "Playskin Slimwell Group"
  ];

  return `
    <section class="section credentials-section" id="sertifikalar">
      <div class="section-heading">
        <p class="eyebrow">Uzmanlık Belgeleri</p>
        <h2>Eğitim, uygulama ve teknik uzmanlığı tek merkezde buluşturan deneyim.</h2>
        <span>AŞK Beauty sertifika duvarı, uygulamaların eğitim ve uzmanlık temelini görünür kılar.</span>
      </div>
      <div class="certificate-gallery">
        <figure class="certificate-wall">
          <img
            src="assets/certificates/ask-beauty-certificate-wall.jpeg"
            alt="AŞK Beauty sertifika duvarı ve uzmanlık belgeleri"
            width="1402"
            height="1122"
            loading="lazy"
          >
          <figcaption>
            <strong>AŞK Beauty sertifika duvarı</strong>
            <span>Uzmanlık ve artist belgeleri</span>
          </figcaption>
        </figure>
        <figure class="certificate-wall">
          <img
            src="assets/certificates/phibrows-artist-asiye-sebnem-kaymaz.jpeg"
            alt="PhiBrows Artist Asiye Şebnem Kaymaz sertifikası"
            width="1200"
            height="855"
            loading="lazy"
          >
          <figcaption>
            <strong>PhiBrows Artist</strong>
            <span>Asiye Şebnem Kaymaz</span>
          </figcaption>
        </figure>
        <figure class="certificate-wall">
          <img
            src="assets/certificates/phicontour-artist-asiye-sebnem-kaymaz.jpeg"
            alt="PhiContour Artist Asiye Şebnem Kaymaz sertifikası"
            width="1260"
            height="916"
            loading="lazy"
          >
          <figcaption>
            <strong>PhiContour Artist</strong>
            <span>Asiye Şebnem Kaymaz</span>
          </figcaption>
        </figure>
      </div>
      <div class="credential-tags">
        ${credentials.map(item => `<span>${item}</span>`).join("")}
      </div>
    </section>
  `;
}

function FloatingActions() {
  return `
    <div class="floating-actions" aria-label="Hızlı iletişim">
      <a class="float-whatsapp" href="${business.whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp</a>
      <a class="float-appointment" href="#randevu">Hemen Randevu Al</a>
    </div>
  `;
}

document.querySelector("#app").innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${renderServiceCategories()}
    ${renderWhy()}
    ${InteriorShowcase()}
    ${ExpertProfile()}
    ${Experience()}
    ${LocalSeo()}
    ${renderCredentials()}
    ${Gallery(featuredGallery)}
    ${InstagramShowcase()}
    ${Testimonials()}
    ${ProductPreview()}
    ${AppointmentHelper()}
    ${CTA()}
  </main>
  ${Footer()}
  ${FloatingActions()}
  ${ServiceDetailModal()}
  ${ImageLightbox()}
`;

const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-main-nav]");

menuToggle?.addEventListener("click", () => {
  nav?.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    menuToggle?.classList.remove("is-open");
  });
});

initAppointmentHelper();
initServiceDetailModal();
initImageLightbox();
initGalleryFilters();
