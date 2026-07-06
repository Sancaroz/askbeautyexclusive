import { whatsappMessage } from "../data/business.js";
import { permanentMakeupGuide } from "../data/permanentMakeupGuide.js";

export function PermanentMakeupGuide() {
  return `
    <section class="section makeup-guide-section" id="kalici-makyaj-rehberi">
      <div class="makeup-guide-layout">
        <div class="makeup-guide-intro">
          <p class="eyebrow">Kalıcı Makyaj Rehberi</p>
          <h2>İşlemden önce ve sonra bilmeniz gerekenleri sade bir akışta toparladık.</h2>
          <p>Microblading, dudak renklendirme ve kalıcı eyeliner işlemleri randevu öncesi analizle planlanır. Uygunluk, ton/form seçimi ve bakım süreci kişiye göre netleştirilir.</p>
          <div class="makeup-guide-actions">
            <a class="button button-primary" href="${whatsappMessage("Merhaba AŞK Beauty, kalıcı makyaj işlemleri hakkında bilgi almak istiyorum.")}" target="_blank" rel="noreferrer">Kalıcı Makyaj İçin Bilgi Al</a>
            <a class="button button-light" href="#kalici-makyaj">Hizmetleri İncele</a>
          </div>
        </div>
        <div class="makeup-guide-grid">
          ${permanentMakeupGuide.map(item => `
            <article class="makeup-guide-card">
              <span>${item.subtitle}</span>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
              <div class="guide-points">
                ${item.points.map(point => `
                  <div>
                    <strong>${point.label}</strong>
                    <small>${point.text}</small>
                  </div>
                `).join("")}
              </div>
            </article>
          `).join("")}
        </div>
      </div>
      <p class="guide-note">Kalıcı makyaj işlemlerinde nihai plan; cilt yapısı, beklenti, işlem geçmişi ve uzman değerlendirmesi sonrası oluşturulur.</p>
    </section>
  `;
}
