import { business, whatsappMessage } from "../data/business.js";

export function CTA() {
  return `
    <section class="cta-section" id="randevu">
      <div>
        <p class="eyebrow">Randevu</p>
        <h2>Size en uygun uygulama için kişiye özel analizle başlayalım.</h2>
        <p>AŞK Beauty uzmanları, beklentinizi ve yüz/cilt yapınızı değerlendirerek doğal, zarif ve güven veren bir sonuç planlar.</p>
      </div>
      <div class="cta-actions">
        <a class="button button-primary" href="${whatsappMessage("Merhaba AŞK Beauty, randevu almak istiyorum.")}" target="_blank" rel="noreferrer">WhatsApp ile Randevu</a>
        <a class="button button-light" href="tel:${business.phoneHref}">Ara</a>
      </div>
    </section>
  `;
}
