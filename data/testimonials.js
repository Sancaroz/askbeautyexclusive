export const testimonialSettings = {
  enabled: true,
  title: "Onaylı danışan yorumları",
  intro: "AŞK Beauty'de yalnızca izin alınmış, gerçek danışan geri bildirimleri paylaşılır. İlk yorumlar geldikçe bu alan Google, Instagram veya WhatsApp kaynaklı içeriklerle güncellenecek.",
  emptyTitle: "Yorum altyapısı hazır",
  emptyText:
    "Gerçek müşteri yorumları onay sonrası burada yayınlanacak. Bu bölüm sahte yorum kullanmaz; her yorum kaynak, hizmet ve izin bilgisiyle eklenir."
};

export const testimonials = [
  // Gerçek yorum ekleneceği zaman bu örneği kopyalayın:
  // {
  //   name: "Ad Soyad veya baş harf",
  //   service: "PhiBrows Microblading",
  //   text: "Danışanın izin verdiği kısa yorum metni.",
  //   source: "Google",
  //   date: "2026-07-06",
  //   rating: 5,
  //   approved: true
  // }
];

export const reviewSources = [
  {
    title: "Google yorumu",
    text: "Google Business profilinden gelen yorumlar izin ve kaynak bilgisiyle siteye eklenebilir."
  },
  {
    title: "Instagram geri bildirimi",
    text: "DM veya gönderi yanıtı olarak gelen yorumlar, danışan onayı sonrası paylaşılabilir."
  },
  {
    title: "WhatsApp mesajı",
    text: "Randevu sonrası gelen memnuniyet mesajları kısa, sade ve izinli şekilde yayınlanabilir."
  }
];

export const reviewWorkflow = [
  "Yorum metni alınır.",
  "Danışandan site içinde paylaşım izni istenir.",
  "Hizmet, kaynak ve tarih bilgisiyle data dosyasına eklenir."
];
