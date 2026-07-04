# AŞK Beauty Yayın Kontrol Listesi

## Mevcut Durum

- Domain: `askbeautyexclusive.com`
- GitHub repo: `Sancaroz/askbeautyexclusive`
- GitHub Pages CNAME: `askbeautyexclusive.com`
- Cloudflare nameserver durumu: Cloudflare aktif
  - `dara.ns.cloudflare.com`
  - `martin.ns.cloudflare.com`

## Cloudflare DNS Kayıtları

Cloudflare panelinde `askbeautyexclusive.com > DNS > Records` alanına aşağıdaki kayıtlar eklenmeli.

### Apex domain

| Type | Name | Content | Proxy status | TTL |
| --- | --- | --- | --- | --- |
| A | @ | 185.199.108.153 | DNS only | Auto |
| A | @ | 185.199.109.153 | DNS only | Auto |
| A | @ | 185.199.110.153 | DNS only | Auto |
| A | @ | 185.199.111.153 | DNS only | Auto |

### www yönlendirmesi

| Type | Name | Content | Proxy status | TTL |
| --- | --- | --- | --- | --- |
| CNAME | www | Sancaroz.github.io | DNS only | Auto |

## GitHub Pages Ayarı

GitHub repo içinde:

1. `Settings > Pages`
2. Source: `Deploy from a branch`
3. Branch: `main`
4. Folder: `/root`
5. Custom domain: `askbeautyexclusive.com`
6. DNS yayılımı tamamlandıktan sonra `Enforce HTTPS` aktif edilmeli.

## Yayın Sonrası Kontrol

DNS kayıtları eklendikten sonra aşağıdaki adresler kontrol edilmeli:

- `https://askbeautyexclusive.com/`
- `https://www.askbeautyexclusive.com/`
- `https://askbeautyexclusive.com/links.html`

Beklenen sonuç:

- Ana domain siteyi açar.
- `www` adresi ana domaine yönlenir veya aynı siteyi açar.
- SSL kilidi görünür.
- GitHub Pages tarafında `Enforce HTTPS` açık olur.
