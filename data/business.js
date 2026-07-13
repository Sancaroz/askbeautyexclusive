export const business = {
  name: "AŞK Beauty",
  phoneDisplay: "+90 553 641 21 71",
  phoneHref: "+905536412171",
  whatsappUrl: "https://wa.me/905536412171",
  instagramUrl: "https://www.instagram.com/make.upbysebnemkaymaz/",
  instagramHandle: "@make.upbysebnemkaymaz",
  website: "https://askbeautyexclusive.com/",
  workingHours: "09.30 - 19.00",
  closedDays: "Pazar kapalı",
  appointmentPolicy: "Randevulu çalışıyoruz",
  paymentPolicy: "Ön ödeme alınmaz",
  address: "Turgut Özal Bulvarı, Fatih Mahallesi, Palmiye Meydanı 37/D, Büyükçekmece / İstanbul",
  latitude: 41.017644,
  longitude: 28.599078,
  mapUrl:
    "https://www.google.com/maps?q=41.017644,28.599078&z=17&output=embed",
  googleMapUrl:
    "https://www.google.com/maps/search/?api=1&query=41.017644,28.599078",
  yandexMapUrl:
    "https://yandex.com.tr/harita/?ll=28.599078%2C41.017644&z=17&pt=28.599078%2C41.017644%2Cpm2rdm"
};

export function whatsappMessage(message) {
  return `${business.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
