import { business } from "../data/business.js";

export function Footer() {
  return `
    <footer class="site-footer" id="iletisim">
      <div class="footer-brand">
        <a class="brand" href="#ana-sayfa"><span class="brand-mark">AŞK</span><span>Beauty</span></a>
        <p>Kalıcı makyaj, kaş, kirpik, cilt bakımı ve tırnak uygulamalarında premium hizmet deneyimi.</p>
      </div>
      <div class="contact-grid">
        <a href="${business.whatsappUrl}" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>${business.phoneDisplay}</strong></a>
        <a href="tel:${business.phoneHref}"><span>Telefon</span><strong>${business.phoneDisplay}</strong></a>
        <a href="${business.instagramUrl}" target="_blank" rel="noreferrer"><span>Instagram</span><strong>${business.instagramHandle}</strong></a>
        <a href="${business.yandexMapUrl}" target="_blank" rel="noreferrer"><span>Yandex Harita</span><strong>${business.address}</strong></a>
      </div>
      <div class="visit-info-grid" aria-label="Çalışma ve randevu bilgileri">
        <div><span>Çalışma Saatleri</span><strong>${business.workingHours}</strong></div>
        <div><span>Randevu</span><strong>${business.appointmentPolicy}</strong></div>
        <div><span>Ön Ödeme</span><strong>${business.paymentPolicy}</strong></div>
        <div><span>Kapalı Gün</span><strong>${business.closedDays}</strong></div>
      </div>
      <div class="map-placeholder" aria-label="Google Maps konum alanı">
        <iframe
          title="AŞK Beauty Google Maps konumu"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="${business.mapUrl}"
          allowfullscreen>
        </iframe>
      </div>
      <p class="copyright">© 2026 AŞK Beauty. Tüm hakları saklıdır.</p>
    </footer>
  `;
}
