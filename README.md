# Jazz Asistant

Bağımsız, çok sağlayıcılı kişisel yapay zekâ asistanı ve görsel akış platformu.

## Ayrılık ilkesi

Bu depo, veritabanı ve marka başka projelerden bağımsızdır. Başka projelere ait isim, tablo, kimlik veya API anahtarı kullanılmaz.

## Bileşenler

- `index.html`: konuşma, mikrofon, ses, dosya ve çoklu oturum arayüzü
- `studio.html`: bağımsız görsel akış tasarım alanı
- `supabase/migrations/001_core.sql`: kullanıcı, asistan, akış, konuşma ve kullanım şeması
- `supabase/functions/chat-runtime/index.ts`: çoklu sağlayıcı ve anahtar havuzu çalışma katmanı
- `config.js`: yeni Supabase projesinin yalnızca yayınlanabilir istemci bilgileri

## Çoklu API anahtarı

Anahtarlar hiçbir zaman `config.js` veya tarayıcı koduna yazılmaz. Yeni Supabase projesinde virgülle ayrılmış secrets olarak tanımlanır:

- `OPENAI_API_KEYS`
- `GROQ_API_KEYS`
- `OPENROUTER_API_KEYS`
- `GEMINI_API_KEYS`

Çalışma katmanı anahtarları dönüşümlü kullanır, kota/429/5xx durumunda sıradaki anahtar ve sağlayıcıya geçer.

## Kurulum

1. Bağımsız bir Supabase projesi oluşturun.
2. `001_core.sql` migrationını uygulayın.
3. Edge Function'ı JWT doğrulaması açık şekilde yayınlayın.
4. API anahtarlarını Supabase Secrets alanına ekleyin.
5. `config.example.js` dosyasını `config.js` olarak doldurun.
6. GitHub Pages veya tercih ettiğiniz statik sunucuda yayınlayın.

> Token kapasitesi yalnızca sayı yükseltilerek sınırsız olmaz. Model bağlam penceresi, maliyet ve sağlayıcı limitleri korunur; Jazz dinamik token bütçesi ve konuşma özetleme ile uzun oturumları yönetmek üzere tasarlanmıştır.
