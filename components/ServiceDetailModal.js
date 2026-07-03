import { whatsappMessage } from "../data/business.js";
import { serviceCategories } from "../data/services.js";

const serviceIndex = new Map(
  serviceCategories.flatMap(category =>
    category.services.map(service => [
      service.name,
      {
        ...service,
        category: category.title
      }
    ])
  )
);

function fallbackDetails(service) {
  return [
    service.description,
    "İşlem öncesinde beklenti, uygunluk ve bakım süreci birlikte değerlendirilir.",
    "Randevu sırasında doğal, dengeli ve kişiye özel sonuç hedeflenir."
  ];
}

function renderModalContent(service) {
  const details = service.details || fallbackDetails(service);
  const message = `Merhaba AŞK Beauty, ${service.name} hakkında detaylı bilgi ve randevu almak istiyorum.`;

  return `
    <p class="eyebrow">${service.category}</p>
    <h2>${service.name}</h2>
    <div class="service-detail-copy">
      ${details.map(item => `<p>${item}</p>`).join("")}
    </div>
    <div class="service-detail-meta">
      <span>Kişiye özel analiz</span>
      <span>Randevulu uygulama</span>
      <span>Bakım yönlendirmesi</span>
    </div>
    <div class="service-detail-actions">
      <a class="button button-primary" href="${whatsappMessage(message)}" target="_blank" rel="noreferrer">WhatsApp ile Sor</a>
      <a class="button button-light" href="#randevu" data-service-detail-close>Hızlı Randevuya Git</a>
    </div>
  `;
}

export function ServiceDetailModal() {
  return `
    <div class="service-detail-modal" data-service-detail-modal aria-hidden="true">
      <div class="service-detail-backdrop" data-service-detail-close></div>
      <article class="service-detail-dialog" role="dialog" aria-modal="true" aria-labelledby="service-detail-title">
        <button class="service-detail-close" type="button" aria-label="Detay penceresini kapat" data-service-detail-close>×</button>
        <div class="service-detail-body" id="service-detail-title" data-service-detail-body></div>
      </article>
    </div>
  `;
}

export function initServiceDetailModal() {
  const modal = document.querySelector("[data-service-detail-modal]");
  const body = document.querySelector("[data-service-detail-body]");

  if (!modal || !body) {
    return;
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("has-modal");
  }

  function openModal(serviceName) {
    const service = serviceIndex.get(serviceName);
    if (!service) {
      return;
    }

    body.innerHTML = renderModalContent(service);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("has-modal");
  }

  document.querySelectorAll("[data-service-detail]").forEach(button => {
    button.addEventListener("click", () => {
      openModal(button.dataset.serviceDetail);
    });
  });

  modal.addEventListener("click", event => {
    if (event.target.closest("[data-service-detail-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}
