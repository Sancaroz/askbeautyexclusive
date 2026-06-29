import { testimonialSettings, testimonials } from "../data/testimonials.js";

export function Testimonials() {
  if (!testimonialSettings.enabled) {
    return "";
  }

  return `
    <section class="section testimonials-section" id="yorumlar">
      <div class="section-heading">
        <p class="eyebrow">Müşteri Yorumları</p>
        <h2>${testimonialSettings.title}</h2>
        <span>${testimonialSettings.intro}</span>
      </div>

      <div class="testimonial-grid">
        ${testimonials.map(item => `
          <article class="testimonial-card">
            <span>${item.status}</span>
            <p>“${item.text}”</p>
            <div>
              <strong>${item.name}</strong>
              <small>${item.service}</small>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}
