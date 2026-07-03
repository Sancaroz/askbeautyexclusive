import { business, whatsappMessage } from "../data/business.js";
import { serviceCategories } from "../data/services.js";

const slots = [
  "Sabah",
  "Öğlen",
  "Akşamüstü"
];

function serviceOptions() {
  return serviceCategories
    .flatMap(category => category.services.map(service => ({
      category: category.title,
      name: service.name
    })))
    .map(item => `<option value="${item.name}">${item.category} - ${item.name}</option>`)
    .join("");
}

function messageFor(serviceName, slot) {
  return `Merhaba AŞK Beauty, ${serviceName} için ${slot.toLowerCase()} saatlerinde randevu almak istiyorum.`;
}

export function AppointmentHelper() {
  const firstService = serviceCategories[0].services[0].name;
  const firstSlot = slots[0];

  return `
    <section class="section appointment-helper" id="randevu">
      <div class="appointment-copy">
        <p class="eyebrow">Hızlı Randevu</p>
        <h2>Randevu mesajınızı saniyeler içinde hazırlayın.</h2>
        <p>Hizmet ve uygun saat aralığını seçin; WhatsApp mesajı otomatik hazırlansın.</p>
      </div>

      <div class="appointment-panel">
        <label>
          <span>Hizmet seçimi</span>
          <select data-appointment-service>
            ${serviceOptions()}
          </select>
        </label>

        <div class="appointment-slots" role="group" aria-label="Saat aralığı seçimi">
          ${slots.map((slot, index) => `
            <button class="${index === 0 ? "is-active" : ""}" type="button" data-appointment-slot="${slot}">
              ${slot}
            </button>
          `).join("")}
        </div>

        <a
          class="button button-primary"
          href="${whatsappMessage(messageFor(firstService, firstSlot))}"
          target="_blank"
          rel="noreferrer"
          data-appointment-link
        >
          WhatsApp Mesajı Hazırla
        </a>

        <p>${business.workingHours} saatleri arasında randevulu çalışıyoruz. ${business.closedDays}. ${business.paymentPolicy}.</p>
      </div>
    </section>
  `;
}

export function initAppointmentHelper() {
  const helper = document.querySelector(".appointment-helper");
  if (!helper) {
    return;
  }

  const serviceSelect = helper.querySelector("[data-appointment-service]");
  const slotButtons = [...helper.querySelectorAll("[data-appointment-slot]")];
  const appointmentLink = helper.querySelector("[data-appointment-link]");

  function selectedSlot() {
    return helper.querySelector("[data-appointment-slot].is-active")?.dataset.appointmentSlot || slots[0];
  }

  function updateLink() {
    appointmentLink.href = whatsappMessage(messageFor(serviceSelect.value, selectedSlot()));
  }

  serviceSelect.addEventListener("change", updateLink);

  slotButtons.forEach(button => {
    button.addEventListener("click", () => {
      slotButtons.forEach(item => item.classList.remove("is-active"));
      button.classList.add("is-active");
      updateLink();
    });
  });
}
