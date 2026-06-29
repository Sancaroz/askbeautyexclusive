export const business = {
  name: "AŞK Beauty",
  phoneDisplay: "+90 553 641 21 71",
  phoneHref: "+905536412171",
  whatsappUrl: "https://wa.me/905536412171",
  instagramUrl: "https://www.instagram.com/make.upbysebnemkaymaz/",
  instagramHandle: "@make.upbysebnemkaymaz",
  website: "https://askbeautyexclusive.com/",
  address: "Turgut Özal Bulvarı, Fatih Mahallesi, Palmiye Meydanı 37/D, Büyükçekmece / İstanbul",
  mapUrl:
    "https://www.google.com/maps?q=Turgut%20%C3%96zal%20Bulvar%C4%B1%20Fatih%20Mah.%20Palmiye%20Meydan%C4%B1%2037%2FD%20B%C3%BCy%C3%BCk%C3%A7ekmece%2F%C4%B0stanbul&output=embed",
  yandexMapUrl:
    "https://yandex.com.tr/harita/?text=Turgut%20%C3%96zal%20Bulvar%C4%B1%20Fatih%20Mahallesi%20Palmiye%20Meydan%C4%B1%2037%2FD%20B%C3%BCy%C3%BCk%C3%A7ekmece%20%C4%B0stanbul"
};

export function whatsappMessage(message) {
  return `${business.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
