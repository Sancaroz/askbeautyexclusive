import { whatsappMessage } from "../data/business.js";
import { reviewSources, reviewWorkflow, testimonialSettings, testimonials } from "../data/testimonials.js";

export function Testimonials() {
  if (!testimonialSettings.enabled) {
    return "";
  }

  const approvedTestimonials = testimonials.filter(item => item.approved);

  return `
    <section class="section testimonials-section" id="yorumlar">
      <div class="section-heading">
        <p class="eyebrow">Müşteri Yorumları</p>
        <h2>${testimonialSettings.title}</h2>
        <span>${testimonialSettings.intro}</span>
      </div>

      ${approvedTestimonials.length ? `
        <div class="testimonial-grid">
          ${approvedTestimonials.map(item => `
            <article class="testimonial-card">
              <span>${item.source}${item.rating ? ` · ${item.rating}/5` : ""}</span>
              <p>“${item.text}”</p>
              <div>
                <strong>${item.name}</strong>
                <small>${item.service}${item.date ? ` · ${item.date}` : ""}</small>
              </div>
            </article>
          `).join("")}
        </div>
      ` : `
        <div class="testimonial-empty">
          <div>
            <strong>${testimonialSettings.emptyTitle}</strong>
            <p>${testimonialSettings.emptyText}</p>
          </div>
          <a class="button button-primary" href="${whatsappMessage("Merhaba AŞK Beauty, deneyimimi yorum olarak paylaşmak istiyorum.")}" target="_blank" rel="noreferrer">Yorum Paylaş</a>
        </div>
      `}

      <div class="review-source-grid">
        ${reviewSources.map(source => `
          <article>
            <span>${source.title}</span>
            <p>${source.text}</p>
          </article>
        `).join("")}
      </div>

      <div class="review-workflow">
        <strong>Yorum ekleme süreci</strong>
        <ol>
          ${reviewWorkflow.map(item => `<li>${item}</li>`).join("")}
        </ol>
      </div>
    </section>
  `;
}
