import { business } from "./business.js";

export const instagramSettings = {
  enabled: true,
  handle: business.instagramHandle,
  profileUrl: business.instagramUrl,
  // Cloudflare Worker endpoint'i eklendiğinde otomatik akış burada etkinleşir.
  feedEndpoint: "https://ask-beauty-instagram-feed.robologai.workers.dev/",
  maxPosts: 4,
  title: "Instagram'dan seçmeler",
  intro: "Güncel uygulama paylaşımları, salon duyuruları ve daha fazla sonuç görseli için Instagram hesabımızı takip edebilirsiniz."
};

export const instagramPosts = [
  {
    title: "Dudak renklendirme",
    image: "assets/gallery/20.jpeg",
    tag: "Kalıcı Makyaj",
    postUrl: ""
  },
  {
    title: "İpek Kirpik Etkisi",
    image: "assets/gallery/14.jpeg",
    tag: "Kaş & Kirpik",
    postUrl: ""
  },
  {
    title: "Kalıcı eyeliner",
    image: "assets/gallery/16.jpeg",
    tag: "Eyeliner",
    postUrl: ""
  },
  {
    title: "Nail art ilhamı",
    image: "assets/gallery/13.jpeg",
    tag: "Tırnak",
    postUrl: ""
  }
];
