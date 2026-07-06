import { business, whatsappMessage } from "../data/business.js";
import { serviceCategories } from "../data/services.js";

const slots = [
  "Sabah",
  "Öğlen",
  "Akşamüstü"
];

const histories = [
  "Daha önce işlem yaptırmadım",
  "Daha önce işlem yaptırdım",
  "Emin değilim, analiz istiyorum"
];

const priorities = [
  "İlk uygun randevu",
  "Bu hafta içinde",
  "Özel gün öncesi",
  "Sadece bilgi almak istiyorum"
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

function messageFor(serviceName, slot, history, priority, note = "") {
  const cleanNote = note.trim();
  const noteLine = cleanNote ? `\nNot: ${cleanNote}` : "";

  return `Merhaba AŞK Beauty, ${serviceName} için randevu/bilgi almak istiyorum.
Tercih ettiğim saat aralığı: ${slot}
İşlem geçmişim: ${history}
Randevu önceliğim: ${priority}${noteLine}
Uygun gün ve saatlerinizi paylaşır mısınız?`;
}

export function AppointmentHelper() {
  const firstService = serviceCategories[0].services[0].name;
  const firstSlot = slots[0];

  return `
    <section class="section appointment-helper" id="randevu">
      <div class="appointment-copy">
        <p class="eyebrow">Hızlı Randevu</p>
        <h2>Randevu öncesi kısa bilgilerinizi tek mesajda hazırlayın.</h2>
        <p>Hizmet, saat aralığı ve işlem geçmişinizi seçin; WhatsApp mesajınız daha net ve profesyonel hazırlansın.</p>
      </div>

      <div class="appointment-panel">
        <label>
          <span>Hizmet seçimi</span>
          <select data-appointment-service>
            ${serviceOptions()}
          </select>
        </label>

        <div class="appointment-field-grid">
          <label>
            <span>İşlem geçmişi</span>
            <select data-appointment-history>
              ${histories.map(item => `<option value="${item}">${item}</option>`).join("")}
            </select>
          </label>

          <label>
            <span>Randevu önceliği</span>
            <select data-appointment-priority>
              ${priorities.map(item => `<option value="${item}">${item}</option>`).join("")}
            </select>
          </label>
        </div>

        <div class="appointment-slots" role="group" aria-label="Saat aralığı seçimi">
          ${slots.map((slot, index) => `
            <button class="${index === 0 ? "is-active" : ""}" type="button" data-appointment-slot="${slot}">
              ${slot}
            </button>
          `).join("")}
        </div>

        <label>
          <span>Kısa not</span>
          <textarea data-appointment-note rows="3" maxlength="180" placeholder="Örn: Daha önce dudak renklendirme yaptırdım, kontrol amaçlı bilgi almak istiyorum."></textarea>
        </label>

        <a
          class="button button-primary"
          href="${whatsappMessage(messageFor(firstService, firstSlot, histories[0], priorities[0]))}"
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
  const historySelect = helper.querySelector("[data-appointment-history]");
  const prioritySelect = helper.querySelector("[data-appointment-priority]");
  const noteInput = helper.querySelector("[data-appointment-note]");
  const slotButtons = [...helper.querySelectorAll("[data-appointment-slot]")];
  const appointmentLink = helper.querySelector("[data-appointment-link]");

  function selectedSlot() {
    return helper.querySelector("[data-appointment-slot].is-active")?.dataset.appointmentSlot || slots[0];
  }

  function updateLink() {
    appointmentLink.href = whatsappMessage(messageFor(
      serviceSelect.value,
      selectedSlot(),
      historySelect.value,
      prioritySelect.value,
      noteInput.value
    ));
  }

  serviceSelect.addEventListener("change", updateLink);
  historySelect.addEventListener("change", updateLink);
  prioritySelect.addEventListener("change", updateLink);
  noteInput.addEventListener("input", updateLink);

  slotButtons.forEach(button => {
    button.addEventListener("click", () => {
      slotButtons.forEach(item => item.classList.remove("is-active"));
      button.classList.add("is-active");
      updateLink();
    });
  });
}
