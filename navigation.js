const navigationItems = [
  { label: "ワークス", href: "works.html" },
  { label: "スキル", href: "skills.html" },
  { label: "キャリア", href: "index.html#career" },
  { label: "お問合せ", href: "index.html#contact" },
  {
    label: "ブログ",
    href: "https://megumi-lab-studio.studio.site/",
    external: true,
  },
];

const header = document.querySelector("#site-header");

if (header) {
  const nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.setAttribute("aria-label", "メインナビゲーション");

  for (const item of navigationItems) {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;

    if (item.external) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else if (window.location.href.endsWith(item.href)) {
      link.setAttribute("aria-current", "page");
    }

    nav.append(link);
  }

  const siteHeader = document.createElement("header");
  siteHeader.className = "site-header";
  siteHeader.innerHTML = `
    <a class="wordmark" href="index.html" aria-label="DX ホーム">DX<span>.</span></a>
    <span class="header-note">PORTFOLIO / 2026</span>
  `;
  siteHeader.insertBefore(nav, siteHeader.querySelector(".header-note"));
  header.append(siteHeader);
}
