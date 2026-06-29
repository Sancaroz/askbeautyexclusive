export function Header() {
  const items = [
    ["Ana Sayfa", "#ana-sayfa"],
    ["Hizmetler", "#hizmetler"],
    ["Hakkımızda", "#hakkimizda"],
    ["Uzman", "#uzman"],
    ["Galeri", "#galeri"],
    ["Randevu", "#randevu"],
    ["İletişim", "#iletisim"]
  ];

  return `
    <header class="site-header">
      <a class="brand" href="#ana-sayfa" aria-label="AŞK Beauty ana sayfa">
        <span class="brand-mark">AŞK</span>
        <span>Beauty</span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Menüyü aç" data-menu-toggle>
        <span></span><span></span>
      </button>
      <nav class="main-nav" aria-label="Ana menü" data-main-nav>
        ${items.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      </nav>
    </header>
  `;
}
