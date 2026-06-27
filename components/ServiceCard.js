import { whatsappMessage } from "../data/business.js";

export function ServiceCard(service, categoryTitle) {
  const message = `Merhaba AŞK Beauty, ${service.name} için randevu almak istiyorum.`;

  return `
    <article class="service-card">
      <span class="service-category">${categoryTitle}</span>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <div class="service-actions">
        <a class="text-link" href="#iletisim" aria-label="${service.name} detaylı bilgi">Detaylı Bilgi</a>
        <a class="mini-button" href="${whatsappMessage(message)}" target="_blank" rel="noreferrer" aria-label="${service.name} randevu al">Randevu Al</a>
      </div>
    </article>
  `;
}
