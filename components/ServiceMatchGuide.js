import { whatsappMessage } from "../data/business.js";
import { serviceMatchGuide } from "../data/serviceMatchGuide.js";

export function ServiceMatchGuide() {
  return `
    <section class="section service-match-section" id="hizmet-secim-rehberi">
      <div class="section-heading">
        <p class="eyebrow">Hizmet Seçim Rehberi</p>
        <h2>İhtiyacınızı söyleyin, size en uygun uygulama yolunu birlikte netleştirelim.</h2>
        <span>Karar vermekte zorlanıyorsanız bu kısa rehber, doğru hizmet grubuna hızlıca ulaşmanıza yardımcı olur.</span>
      </div>

      <div class="service-match-grid">
        ${serviceMatchGuide.map(item => `
          <article class="service-match-card">
            <span>İhtiyaç</span>
            <h3>${item.need}</h3>
            <div>
              <strong>${item.recommendation}</strong>
              <p>${item.detail}</p>
            </div>
            <a class="text-link" href="${item.href}">İlgili Bölümü İncele</a>
          </article>
        `).join("")}
      </div>

      <div class="service-match-cta">
        <p>En doğru karar, kısa bir ön görüşme ve kişiye özel analizle verilir.</p>
        <a class="button button-primary" href="${whatsappMessage("Merhaba AŞK Beauty, hangi hizmetin bana uygun olduğunu öğrenmek istiyorum.")}" target="_blank" rel="noreferrer">WhatsApp ile Yönlendirme Al</a>
      </div>
    </section>
  `;
}
