import { whatsappMessage } from "../data/business.js";
import { appointmentCareGuide } from "../data/appointmentCareGuide.js";

export function AppointmentCareGuide() {
  return `
    <section class="section care-guide-section" id="randevu-bakim-rehberi">
      <div class="care-guide-head">
        <div>
          <p class="eyebrow">Randevu ve Bakım Süreci</p>
          <h2>İlk mesajdan işlem sonrası bakıma kadar net, sakin ve güven veren bir akış.</h2>
        </div>
        <p>AŞK Beauty'de her uygulama hızlı kararlarla değil; doğru analiz, doğru iletişim ve kişiye özel yönlendirmeyle planlanır.</p>
      </div>

      <div class="care-timeline">
        ${appointmentCareGuide.map((step, index) => `
          <article class="care-step">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>${step.title}</h3>
              <p>${step.summary}</p>
              <ul>
                ${step.items.map(item => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </article>
        `).join("")}
      </div>

      <div class="care-guide-cta">
        <strong>Randevu öncesi emin olmadığınız bir konu varsa WhatsApp üzerinden danışabilirsiniz.</strong>
        <a class="button button-primary" href="${whatsappMessage("Merhaba AŞK Beauty, randevu öncesi bilgi almak istiyorum.")}" target="_blank" rel="noreferrer">WhatsApp ile Danış</a>
      </div>
    </section>
  `;
}
