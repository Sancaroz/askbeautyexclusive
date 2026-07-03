import { instagramPosts, instagramSettings } from "../data/instagram.js";

export function InstagramShowcase() {
  if (!instagramSettings.enabled) {
    return "";
  }

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

      <div class="instagram-grid">
        ${instagramPosts.map(post => `
          <a class="instagram-card" href="${post.postUrl || instagramSettings.profileUrl}" target="_blank" rel="noreferrer" aria-label="${post.title} Instagram'da gör">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <span>${post.tag}</span>
            <strong>${post.title}</strong>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}
