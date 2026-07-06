import { whatsappMessage } from "../data/business.js";
import { skinCareGuide } from "../data/skinCareGuide.js";

export function SkinCareGuide() {
  return `
    <section class="section skin-guide-section" id="cilt-bakimi-rehberi">
      <div class="section-heading">
        <p class="eyebrow">Cilt Bakımı Rehberi</p>
        <h2>Cildiniz için doğru protokol, profesyonel analizle seçilir.</h2>
        <span>${skinCareGuide.slogan}</span>
      </div>
      <div class="skin-protocol-grid">
        ${skinCareGuide.protocols.map(protocol => `
          <article class="skin-protocol-card">
            <span>${protocol.subtitle}</span>
            <h3>${protocol.title}</h3>
            <div class="protocol-meta">
              <div>
                <strong>Kimler için?</strong>
                <p>${protocol.bestFor}</p>
              </div>
              <div>
                <strong>Ne zaman?</strong>
                <p>${protocol.timing}</p>
              </div>
            </div>
            <ul>
              ${protocol.benefits.map(benefit => `<li>${benefit}</li>`).join("")}
            </ul>
            <a class="mini-button" href="${whatsappMessage(`Merhaba AŞK Beauty, ${protocol.title} hakkında bilgi almak istiyorum.`)}" target="_blank" rel="noreferrer">${protocol.title} İçin Bilgi Al</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}
