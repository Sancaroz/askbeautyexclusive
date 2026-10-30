import { business } from "./business.js";

export const instagramSettings = {
  enabled: true,
  handle: business.instagramHandle,
  profileUrl: business.instagramUrl,
  // Cloudflare Worker endpoint'i eklendiğinde otomatik akış burada etkinleşir.
  feedEndpoint: "https://ask-beauty-instagram-feed.robologai.workers.dev/",
  maxPosts: 6,
  title: "Güzellik Günlüğümüz",
  intro: "En yeni uygulamalarımızı, güzellik dünyamızdan anları ve ilham veren çalışmalarımızı keşfedin."
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
  },
  {
    title: "Salon deneyimi",
    image: "assets/interior/salon-1.jpeg",
    tag: "AŞK Beauty",
    postUrl: ""
  },
  {
    title: "Bakım ve ışıltı",
    image: "assets/gallery/19.jpeg",
    tag: "Cilt Bakımı",
    postUrl: ""
  }
];
