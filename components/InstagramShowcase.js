import { instagramPosts, instagramSettings } from "../data/instagram.js";

const escapeHtml = value => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const renderPosts = posts => posts.map(post => {
  const title = escapeHtml(post.title || "AŞK Beauty çalışması");
  const tag = escapeHtml(post.tag || "AŞK Beauty");
  const image = escapeHtml(post.image || "");
  const href = escapeHtml(post.postUrl || instagramSettings.profileUrl);
  const alt = escapeHtml(post.alt || `${post.title || "AŞK Beauty"} ${post.tag || "çalışması"} - AŞK Beauty Instagram`);

  return `
    <a class="instagram-card" href="${href}" target="_blank" rel="noreferrer" aria-label="${title} Instagram'da gör">
      <img src="${image}" alt="${alt}" loading="lazy">
      <span>${tag}</span>
      <strong>${title}</strong>
    </a>
  `;
}).join("");

export function InstagramShowcase() {
  if (!instagramSettings.enabled) {
    return "";
  }

  const imageAlt = post => post.alt || `${post.title} ${post.tag} paylaşımı - AŞK Beauty Instagram`;

  return `
    <section class="section instagram-section" id="instagram">
      <div class="instagram-head">
        <div>
          <p class="eyebrow">Instagram</p>
          <h2>${instagramSettings.title}</h2>
          <p>${instagramSettings.intro}</p>
        </div>
        <a class="button button-light" href="${instagramSettings.profileUrl}" target="_blank" rel="noreferrer">
          ${instagramSettings.handle}
        </a>
      </div>

      <div class="instagram-grid" data-instagram-feed>
        ${renderPosts(instagramPosts)}
      </div>
    </section>
  `;
}

export function initInstagramFeed() {
  const endpoint = instagramSettings.feedEndpoint.trim();
  const feed = document.querySelector("[data-instagram-feed]");

  if (!endpoint || !feed) {
    return;
  }

  fetch(endpoint, { headers: { Accept: "application/json" } })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Instagram feed request failed: ${response.status}`);
      }
      return response.json();
    })
    .then(payload => {
      if (!Array.isArray(payload.posts) || payload.posts.length === 0) {
        return;
      }

      feed.innerHTML = renderPosts(payload.posts.slice(0, instagramSettings.maxPosts));
    })
    .catch(() => {
      // API kullanılamadığında başlangıçta render edilen seçili gönderiler görünür kalır.
    });
}
