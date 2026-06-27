import { business } from "../data/business.js";

export function Hero() {
  return `
    <section class="hero" id="ana-sayfa">
      <div class="hero-media" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=88" alt="">
      </div>
      <div class="hero-content">
        <p class="eyebrow">Premium güzellik merkezi</p>
        <h1>AŞK Beauty</h1>
        <p class="hero-text">Kalıcı makyaj, kaş, kirpik, cilt bakımı ve tırnak uygulamalarında profesyonel deneyim.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#randevu">Hemen Randevu Al</a>
          <a class="button button-soft" href="${business.whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  `;
}
