import { business } from "../data/business.js";

export function Hero() {
  return `
    <section class="hero" id="ana-sayfa">
      <div class="hero-media" aria-hidden="true">
        <img src="assets/gallery/14.jpeg" alt="">
      </div>
      <div class="hero-content">
        <p class="eyebrow">Premium güzellik merkezi</p>
        <h1>AŞK Beauty</h1>
        <span class="script-accent hero-signature">by Asiye Şebnem Kaymaz</span>
        <p class="hero-text">Kalıcı makyaj, kaş, kirpik, cilt bakımı ve tırnak uygulamalarında profesyonel deneyim.</p>
        <div class="hero-proof">
          <span>PhiBrows Artist</span>
          <span>Uzman estetisyen</span>
          <span>Sertifikalı uygulamalar</span>
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="#randevu">Hemen Randevu Al</a>
          <a class="button button-soft" href="${business.whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  `;
}
