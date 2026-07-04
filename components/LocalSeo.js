import { localSeo, localSeoTopics } from "../data/localSeo.js";

export function LocalSeo() {
  return `
    <section class="section local-seo-section" id="buyukcekmece-guzellik-merkezi">
      <div class="local-seo-copy">
        <p class="eyebrow">${localSeo.eyebrow}</p>
        <h2>${localSeo.title}</h2>
        <p>${localSeo.intro}</p>
        <p>${localSeo.areas}</p>
      </div>

      <div class="local-seo-topics">
        ${localSeoTopics.map(item => `
          <article>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}
