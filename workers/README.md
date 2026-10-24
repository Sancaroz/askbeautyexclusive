# Instagram otomatik akışı

Site, `data/instagram.js` içindeki `feedEndpoint` boş olduğu sürece seçili yerel görselleri gösterir. Cloudflare Worker yayınlandıktan sonra Worker adresini bu alana yazınca site son Instagram gönderilerini otomatik olarak kullanır.

## Kurulum özeti

1. Meta tarafında profesyonel Instagram hesabı ve bağlı Facebook sayfası için Instagram Graph API erişimini hazırlayın.
2. Bu klasördeki `instagram-feed.js` dosyasını Cloudflare Worker olarak yayınlayın.
3. Worker secrets bölümüne şu değerleri ekleyin:

   - `INSTAGRAM_ACCESS_TOKEN`: erişim anahtarı
   - `INSTAGRAM_USER_ID`: profesyonel Instagram kullanıcı ID'si

4. Worker URL'sini `data/instagram.js` içindeki `feedEndpoint` alanına yazın:

```js
feedEndpoint: "https://instagram-feed.<hesap>.workers.dev"
```

Erişim anahtarı hiçbir zaman `data/instagram.js`, `app.js` veya başka bir site dosyasına yazılmamalıdır. Worker yanıtı kesilirse site mevcut seçili görselleri göstermeye devam eder.
