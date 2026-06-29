import { faqs, journeySteps } from "../data/experience.js";

export function Experience() {
  return `
    <section class="section experience-section" id="deneyim">
      <div class="section-heading">
        <p class="eyebrow">AŞK Beauty Deneyimi</p>
        <h2>Randevudan bakım sürecine kadar sakin, net ve kişiye özel ilerleyen akış.</h2>
        <span>Premium hissi yalnızca görselde değil; süreç, iletişim ve uygulama disiplininde de tamamlıyoruz.</span>
      </div>

      <div class="experience-layout">
        <div class="journey-panel">
          ${journeySteps.map((step, index) => `
            <article class="journey-step">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>${step.title}</h3>
                <p>${step.text}</p>
              </div>
            </article>
          `).join("")}
        </div>

        <div class="faq-panel">
          ${faqs.map(item => `
            <details>
              <summary>${item.question}</summary>
              <p>${item.answer}</p>
            </details>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
