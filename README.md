
# Zopio Full‑Stack Decision Tree

Zopio ile uçtan uca bir full-stack uygulama tasarlamak için pratik karar ağacı + açıklayıcı bir rehber.
Bu rehber, Zopio kullanılarak proje geliştirirken alınması gereken temel kararları ve her kararın arkasındaki mantığı açıklar. Ayrıca, kilit noktalarda alternatif seçimlere (ör. Stripe ↔ Jetcheckout, Clerk ↔ Zopio Auth, NeonDB ↔ Turso, Vercel ↔ Docker) izin vererek proje başlangıç kılavuzunuz olarak kullanılabilir ve monoreponuzla birlikte yaşayan bir belge olarak tutulabilir.

---

## Bu belgenin kullanımı
- Ana Karar Ağacından başlayın ve ihtiyaçlarınıza uygun dalları takip edin.
- Her ana dal, bir alt ağaçla (Ödemeler, Kimlik Doğrulama, Veritabanı, Deploy vb.) ve kriterleri içeren bir açıklayıcı rehberle bağlantılıdır.
- Dizin Yapısı, her kararın Zopio monoreponuzda hangi yere karşılık geldiğini gösterir.
- Mermaid bloklarını kopyalayıp apps/docs (MDX) içine veya README dosyanıza yapıştırın; çoğu Markdown görüntüleyici Mermaid’i destekler.

---
## Directory Structure (Zopio Monorepo)
```
zopio/
├── .github/                    # GitHub yapılandırmaları
├── .husky/                     # Git hooks
├── .vscode/                    # VS Code ayarları
├── apps/                       # Ana uygulamalar
│   ├── api/                    # Backend API 
│   ├── app/                    # Dashboard 
│   ├── docs/                   # Dokümantasyon                
│   └── web/                    # Marketing Site
├── devapps/                    # Geliştirme araçları
│   ├── dbstudio/               # Veritabanı yönetimi
│   ├── emailstudio/            # E-posta editörü
│   └── storybook/              # UI bileşen dokümantasyonu
├── packages/                   # Paylaşılan paketler
│   ├── ai/                     # AI bileşenleri
│   ├── analytics/              # Analytics entegrasyonu
│   ├── auth/                   # Kimlik doğrulama (Clerk)
│   ├── auth-abac/              # Attribute-Based Access Control
│   ├── auth-hooks/             # Authentication hooks
│   ├── auth-log/               # Kimlik doğrulama logları
│   ├── auth-rbac/              # Role-Based Access Control
│   ├── auth-runner/            # Authentication runner
│   ├── cms/                    # İçerik yönetim sistemi
│   ├── collaboration/          # İşbirliği araçları
│   ├── core-utils/             # Temel yardımcı fonksiyonlar
│   ├── database/               # Prisma veritabanı
│   ├── design-system/          # UI bileşenleri (shadcn/ui)
│   ├── email/                  # E-posta servisleri
│   ├── feature-flags/          # Özellik bayrakları
│   ├── internationalization/   # Çoklu dil desteği
│   ├── mcp/                    # Model Context Protocol
│   ├── next-config/            # Next.js yapılandırması
│   ├── notifications/          # Bildirim sistemi
│   ├── observability/          # Monitoring (Sentry)
│   ├── payments/               # Ödeme entegrasyonu
│   ├── rate-limit/             # Rate limiting
│   ├── security/               # Güvenlik (Arcjet)
│   ├── seo/                    # SEO optimizasyonu
│   ├── storage/                # Dosya depolama
│   ├── testing/                # Test yardımcıları
│   ├── trigger/                # Trigger.dev entegrasyonu
│   ├── trigger-rules/          # Trigger kuralları
│   ├── typescript-config/      # TypeScript yapılandırması
│   └── webhooks/               # Webhook yöneticisi
├── registry/                   # Bileşen kayıt sistemi
├── scripts/                    # Yardımcı scriptler
├── turbo/                      # Turbo yapılandırması
├── websites/                   # Web siteleri
├── .autorc                     # Auto release yapılandırması
├── .cursorrules                # Cursor AI kuralları
├── .editorconfig               # Editor yapılandırması
├── .gitattributes              # Git attributes
├── .gitignore                  # Git ignore kuralları
├── .lintstagedrc.js            # Lint-staged yapılandırması
├── .windsurfrules              # Windsurf AI kuralları
├── biome.json                  # Biome linter yapılandırması
├── commitlint.config.js        # Commit lint kuralları
├── package.json                # Ana paket yapılandırması
├── pnpm-lock.yaml              # PNPM lock dosyası
├── pnpm-workspace.yaml         # PNPM workspace yapılandırması
├── tsconfig.json               # TypeScript yapılandırması
├── tsup.config.ts              # Tsup build yapılandırması
├── turbo.json                  # Turbo monorepo yapılandırması
└── vercel.json                 # Vercel deployment yapılandırması
```

### 🧱 Uygulamalar (`apps/`)

Zopio çerçevesi üzerine inşa edilmiş müşteri odaklı ve temel hizmet uygulamaları.

| App        | Description                                  |
|------------|----------------------------------------------|
| 🧑‍💼 `app`       | Müşteriler için ana SaaS paneli          | 
| ⚙️ `api`       | Backend API'si (kimlik doğrulama, iş mantığı) | 
| 📘 `docs`      | Mintlify tabanlı ürün belgeleri         | 
| 🌐 `web`       | CMS destekli frontend veya renderer     |

---

### 🛠 Geliştirici Araçları (`devapps/`)

Çoğunlukla şirket içi ekipler tarafından kullanılan geliştirme ve altyapı destek araçları.

| Tool             | Description                                  |
|------------------|----------------------------------------------| 
| 🗂 `dbstudio`      | Görsel DB gezgini (Prisma Studio sarmalayıcısı)   | 
| ✉️ `emailstudio`  | Resend uyumlu e-posta önizleyicisi           | 
| 🎨 `storybook`     | Kullanıcı arayüzü bileşen görüntüleyicisi ve tasarım sistemi gezgini|

---

### 📦 Paylaşımlı Paketler (`packages/`)

Tüm Zopio uygulamalarına güç veren modüler ve yeniden kullanılabilir yapı taşları.

| Domain           | Modules (Sample) |
|------------------|------------------|
| 🔐 **Auth**        | `auth`, `auth-rbac`, `auth-hooks`, `auth-log`, `auth-abac`, `auth-runner` |
| 🧠 **Logic & DX**  | `cms`, `mcp`, `feature-flags`, `rate-limit`, `webhooks` |
| 🗃 **Infra**       | `database`, `next-config`, `security`, `storage` |
| 🔭 **Observability** | `analytics`, `notifications`, `observability` |
| 🎨 **UI & Design** | `design-system`, `email` |
| 🤖 **Workflow**    | `ai`, `trigger`, `trigger-rules` |
| 🌍 **Support**     | `internationalization`, `seo`, `typescript-config`, `testing` |

---

### 🧩 Modül Kaydı (`registry/`)

`Hub` pazaryerinde listelenen tüm modüller burada tanımlanır.

| Folder           | Description |
|------------------|-------------|
| 📦 `plugins/`        | Kullanıcı arayüzü eklentileri ve uzantıları |
| 🔌 `integrations/`   | Harici entegrasyonlar (örneğin Clerk, Stripe, Supabase) |
| 🧱 `apps/`            | Gömülü mikro ön uçlar (örneğin CMS paneli, CRM) |
| 🧰 `tools/`           | CLI yardımcıları (örneğin `create-plugin`, biçimlendiriciler) |
| 📑 `schemas/`         | Doğrulama için JSON şema tanımları |
| 🧪 `ci/`              | Doğrulama betikleri ve kayıt defteri testleri |
| 🧬 `types/`           | Meta veriler için paylaşılan türler (örneğin, PluginManifest) |
| 📚 `examples/`        | Kullanım örnekleri ve taslaklar |
| 📂 `templates/`       | CLI tarafından kullanılan şablonlar|

Her modül, türünü, giriş noktasını, meta verilerini ve isteğe bağlı şema tanımını açıklayan bir `zopio.module.json` bildirim dosyası içermelidir.

---

### 🌍 Public Websites (`websites/`)

| Folder            | Description |
|-------------------|-------------|
| ✨ `zopio-splash/`   | Public landing / marketing site |

---

## Main Decision Tree
```mermaid
flowchart TD

    A[Project Start: Zopio Full‑Stack App] --> B{Payments}
    B -->|Global| C[Stripe]
    B -->|TR‑focused| D[Jetcheckout]

    A --> E{Auth Strategy}
    E -->|Hosted| F[Clerk]
    E -->|In‑house| G[Better Auth]

    A --> H{Primary Data Layer}
    H -->|Relational| I[Postgres - NeonDB]
    H -->|Edge/Embedded| J[Supabase]

    A --> K{Frontend Runtime}
    K --> L[Next.js - App Router - default]

    A --> M{Deployment}
    M -->|PaaS| N[Vercel]
    M -->|Self‑host| O[Netlify]

    A --> P{Storage}
    P --> Q[Vercel Blob]
    P --> R[uploadthing]

    A --> S{CI/CD}
    S --> T[GitHub Actions]

    %% Cross‑refs
    C -.-> U[[Payments Sub‑Tree]]
    D -.-> U
    F -.-> V[[Auth Sub‑Tree]]
    G -.-> V
    I -.-> W[[Database Sub‑Tree]]
    J -.-> W
    N -.-> X[[Deploy Sub‑Tree]]
    O -.-> X
```
---

## Payments Sub‑Tree (Stripe vs Jetcheckout)
```mermaid
flowchart TD
    P1{Payments} -->|Global coverage| P2[Stripe]
    P1 -->|TR banks + local alt.| P3[Jetcheckout]

    P2 --> P2a[Multi‑currency, Radar, Billing]
    P2 --> P2b[Strong docs + SDKs]
    P3 --> P3a[TR bank entegrasyonları]
    P3 --> P3b[Masraf/komisyon optimizasyonu]
```

### Seçim Kriterleri
- **Stripe:** Endüstri lideri bir ödeme platformudur. Kapsamlı ödeme yöntemleri, yüksek güvenlik standartları, geliştirici dostu RESTful API'si, güçlü analitik ve raporlama, AI özellikleri, sürekli inovasyon, iş büyütme araçları gibi özellikleri ile çeşitli ihtiyaçlara profesyonel çözümler sunar.
- **Jetcheckout:** Yereldeki en iyi online ödeme sistemleriyle tam entegrasyon, yereldeki tüm banka sanal POS'larıyla hazır entegrasyon, yereldeki yaygın muhasebe yazılımlarıyla tam entegrasyon, entegre sistemler arasında en düşük maliyetli işlem yönlendirmesi, SMS veya e-posta ile giriş gerektirmeyen ödeme linki, Sektörel ihtiyaçlar için özel üretilmiş dikey çözümler

# Stripe Entegrasyonu

Zopio monorepo projesinde Stripe ödeme işleme entegrasyonu için bir rehber.

## Genel Bakış

Zopio projesi, AI destekli ödeme araçları, webhook yönetimi ve uygun ortam değişkeni doğrulaması ile güvenli, tip güvenli Stripe entegrasyonu sağlayan özel bir `@repo/payments` paketi kullanır. Bu paket yalnızca sunucu tarafı kullanım için tasarlanmıştır ve projenin kimlik doğrulama ve analitik sistemleriyle sorunsuz entegre olur.

## Teknoloji Yığını

- **Stripe SDK**: `stripe@^18.1.1` - En son Stripe Node.js SDK
- **Stripe Agent Toolkit**: `@stripe/agent-toolkit@^0.7.8` - AI destekli ödeme işlemleri
- **Ortam Değişkeni Doğrulaması**: `@t3-oss/env-nextjs@^0.13.4` ile Zod şemaları
- **Güvenlik**: `server-only` paketi istemci tarafı kullanımını önler
- **API Sürümü**: `2025-06-30.basil` (En son desteklenen)

## Paket Yapısı

```
packages/payments/
├── README.md           # Paket dokümantasyonu
├── package.json        # Bağımlılıklar ve scriptler
├── index.ts           # Ana Stripe istemci export'u
├── keys.ts            # Ortam değişkeni doğrulaması
├── ai.ts              # AI destekli ödeme araçları
└── tsconfig.json      # TypeScript konfigürasyonu
```

## Kurulum ve Ayarlar

### 1. Ortam Değişkenleri

`.env` dosyalarınıza aşağıdaki ortam değişkenlerini ekleyin:

```env
# Gerekli - Stripe Gizli Anahtarı
STRIPE_SECRET_KEY=sk_test_...  # Geliştirme için test anahtarı
# STRIPE_SECRET_KEY=sk_live_... # Üretim için canlı anahtar

# İsteğe bağlı - Webhook Gizli Anahtarı (webhook doğrulaması için gerekli)
STRIPE_WEBHOOK_SECRET=whsec_...
```

**Ortam Değişkeni Doğrulaması:**
- `STRIPE_SECRET_KEY`: `sk_` ile başlamalı (Zod ile doğrulanır)
- `STRIPE_WEBHOOK_SECRET`: `whsec_` ile başlamalı (isteğe bağlı, Zod ile doğrulanır)

### 2. Paket Kurulumu

Payments paketi zaten monorepo'ya dahildir. Yeni uygulamalar için bağımlılık olarak ekleyin:

```json
{
  "dependencies": {
    "@repo/payments": "workspace:*"
  }
}
```

### 3. Ortam Entegrasyonu

Uygulamanızın `env.ts` dosyasında payments ortam doğrulamasını genişletin:

```typescript
import { keys as payments } from '@repo/payments/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    payments(),
    // ... diğer paket doğrulamaları
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
```

## Temel Kullanım

### Temel Stripe İstemcisi

```typescript
import { stripe } from '@repo/payments';
import type { Stripe } from '@repo/payments';

// Ödeme niyeti oluştur
const paymentIntent = await stripe.paymentIntents.create({
  amount: 1000, // $10.00 (cent cinsinden)
  currency: 'usd',
  payment_method_types: ['card'],
  metadata: {
    orderId: 'order_123',
    userId: 'user_456',
  },
});

// Müşteri oluştur
const customer = await stripe.customers.create({
  email: 'customer@example.com',
  name: 'John Doe',
  metadata: {
    userId: 'user_456',
  },
});
```

### Checkout Oturumları

```typescript
import { stripe } from '@repo/payments';

export async function createCheckoutSession(priceId: string, userId: string) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription', // veya tek seferlik için 'payment'
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    customer_email: 'user@example.com',
    metadata: {
      userId: userId,
    },
  });
  
  return session;
}
```

### Abonelik Yönetimi

```typescript
import { stripe } from '@repo/payments';

// Abonelik oluştur
export async function createSubscription(customerId: string, priceId: string) {
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    payment_behavior: 'default_incomplete',
    payment_settings: { save_default_payment_method: 'on_subscription' },
    expand: ['latest_invoice.payment_intent'],
  });
  
  return subscription;
}

// Aboneliği iptal et
export async function cancelSubscription(subscriptionId: string) {
  const subscription = await stripe.subscriptions.cancel(subscriptionId);
  return subscription;
}

// Aboneliği güncelle
export async function updateSubscription(subscriptionId: string, newPriceId: string) {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  
  const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
    items: [
      {
        id: subscription.items.data[0].id,
        price: newPriceId,
      },
    ],
  });
  
  return updatedSubscription;
}
```

## AI Destekli Ödeme Araçları

Paket, AI destekli ödeme işlemleri için Stripe'ın Agent Toolkit'ini içerir:

```typescript
import { paymentsAgentToolkit } from '@repo/payments/ai';

// AI toolkit kullanarak ödeme linki oluştur
const paymentLink = await paymentsAgentToolkit.paymentLinks.create({
  line_items: [
    {
      price: 'price_123',
      quantity: 1,
    },
  ],
});

// Programatik olarak ürün oluştur
const product = await paymentsAgentToolkit.products.create({
  name: 'Premium Plan',
  description: 'Tüm premium özelliklere erişim',
});

// Fiyatlandırma oluştur
const price = await paymentsAgentToolkit.prices.create({
  product: product.id,
  unit_amount: 2999, // $29.99
  currency: 'usd',
  recurring: {
    interval: 'month',
  },
});
```

**Mevcut AI Toolkit Eylemleri:**
- `paymentLinks.create` - Ödeme linkleri oluştur
- `products.create` - Ürün oluştur
- `prices.create` - Fiyatlandırma modelleri oluştur

## Webhook Entegrasyonu

### Webhook Endpoint Uygulaması

Proje, `apps/api/app/webhooks/stripe/route.ts` konumunda önceden oluşturulmuş bir webhook işleyicisi içerir:

```typescript
import { stripe } from '@repo/payments';
import { analytics } from '@repo/analytics/posthog/server';
import { clerkClient } from '@repo/auth/server';

export const POST = async (request: Request): Promise<Response> => {
  if (!env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Yapılandırılmamış', ok: false });
  }

  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      throw new Error('stripe-signature başlığı eksik');
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object);
        break;
      case 'subscription_schedule.canceled':
        await handleSubscriptionScheduleCanceled(event.data.object);
        break;
      default:
        console.log(`İşlenmeyen olay türü ${event.type}`);
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    console.error('Webhook hatası:', error);
    return NextResponse.json(
      { message: 'bir şeyler yanlış gitti', ok: false },
      { status: 500 }
    );
  }
};
```

### Desteklenen Webhook Olayları

Mevcut uygulama şunları işler:

- **`checkout.session.completed`**: Başarılı abonelik satın alımlarını takip eder
- **`subscription_schedule.canceled`**: Abonelik iptallerini takip eder

### Özel Webhook İşleyicileri Ekleme

```typescript
// Switch ifadesine yeni olay işleyicileri ekle
switch (event.type) {
  case 'payment_intent.succeeded':
    await handlePaymentSuccess(event.data.object);
    break;
  case 'invoice.payment_failed':
    await handlePaymentFailure(event.data.object);
    break;
  case 'customer.subscription.updated':
    await handleSubscriptionUpdate(event.data.object);
    break;
  // ... mevcut işleyiciler
}
```

### Clerk ile Kullanıcı Entegrasyonu

Webhook sistemi, Stripe müşteri ID'lerini kullanıcı metadata'sında saklayarak Clerk kimlik doğrulaması ile entegre olur:

```typescript
const getUserFromCustomerId = async (customerId: string) => {
  const clerk = await clerkClient();
  const users = await clerk.users.getUserList();

  const user = users.data.find(
    (user) => user.privateMetadata.stripeCustomerId === customerId
  );

  return user;
};
```

**Clerk'te Müşteri ID'si Ayarlama:**

```typescript
import { clerkClient } from '@repo/auth/server';

// Stripe müşterisi oluştururken, ID'yi Clerk'te sakla
const customer = await stripe.customers.create({
  email: user.emailAddresses[0].emailAddress,
  name: `${user.firstName} ${user.lastName}`,
});

const clerk = await clerkClient();
await clerk.users.updateUserMetadata(user.id, {
  privateMetadata: {
    stripeCustomerId: customer.id,
  },
});
```

## Analitik Entegrasyonu

Webhook sistemi, PostHog analitikleri kullanarak ödeme olaylarını otomatik olarak takip eder:

```typescript
import { analytics } from '@repo/analytics/posthog/server';

// Başarılı aboneliği takip et
analytics.capture({
  event: 'User Subscribed',
  distinctId: user.id,
  properties: {
    subscriptionId: subscription.id,
    planId: priceId,
    amount: amount,
  },
});

// İptali takip et
analytics.capture({
  event: 'User Unsubscribed',
  distinctId: user.id,
  properties: {
    subscriptionId: subscription.id,
    canceledAt: new Date().toISOString(),
  },
});
```

## En İyi Güvenlik Uygulamaları

### 1. Yalnızca Sunucu Kullanımı
Paket, yanlışlıkla istemci tarafı dahil edilmesini önlemek için `server-only` kullanır:

```typescript
import 'server-only'; // İstemci tarafı kullanımını önler
```

### 2. Ortam Değişkeni Doğrulaması
Tüm API anahtarları çalışma zamanında doğrulanır:

```typescript
// Zod doğrulaması uygun anahtar formatını sağlar
STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_').optional(),
```

### 3. Webhook İmza Doğrulaması
Tüm webhook'lar Stripe'ın imza doğrulaması kullanılarak doğrulanır:

```typescript
const event = stripe.webhooks.constructEvent(
  body,
  signature,
  env.STRIPE_WEBHOOK_SECRET
);
```

### 4. Metadata Güvenliği
Hassas kullanıcı verilerini Stripe metadata'sında değil, Clerk'in özel metadata'sında saklayın:

```typescript
// ✅ İyi - Clerk özel metadata'sında sakla
await clerk.users.updateUserMetadata(userId, {
  privateMetadata: { stripeCustomerId: customer.id }
});

// ❌ Kaçının - Hassas verileri Stripe metadata'sında saklamayın
const customer = await stripe.customers.create({
  metadata: { 
    internalUserId: userId // Bu Stripe dashboard'unda görünür
  }
});
```

# Jetcheckout Entegrasyonu

### 🔧 Entegrasyon Seçenekleri

**1. Cloud Hosted Entegrasyon**
- Hazır bulut servisi olarak kullanım
- Hızlı başlangıç imkanı
- Minimum teknik bilgi gereksinimi

**2. API Entegrasyonu**
- RESTful API üzerinden özel entegrasyon
- RedDoc dokümantasyonu mevcut (ancak erişemedim)
- Kendi uygulamanızda özelleştirme imkanı

**3. Self-Hosted Entegrasyon**
- Kendi sunucunuzda barındırma
- Tam kontrol ve veri güvenliği
- Açık kaynak kodlara erişim




---

## Auth Sub‑Tree (Clerk vs Better Auth)
```mermaid
flowchart TD
    A["Authentication Çözümü Seçimi"] --> B{"Proje Türü?"} & I{"UI/UX Gereksinimleri?"} & M{"Pricing Model Tercihi?"} & Q{"Database Integration?"} & U{"Authentication Features?"} & AA{"Developer Experience?"} & EE{"Deployment Preference?"} & KK{"Team Size & Expertise?"} & OO{"Long-term Strategy?"}
    B -- MVP/Prototype --> C{"Setup Hızı Önceliği?"}
    B -- Production/Enterprise --> D{"Kontrol vs Kolaylık?"}
    C -- En Hızlı Setup --> E["✅ CLERK"]
    C -- Custom Control --> F["✅ BETTER AUTH"]
    D -- Maksimum Kontrol --> G["✅ BETTER AUTH"]
    D -- Managed Service --> H["✅ CLERK"]
    I -- Hazır UI Components --> J["✅ CLERK"]
    I -- Custom UI Design --> K["✅ BETTER AUTH"]
    I -- Headless Auth --> L["✅ BETTER AUTH"]
    M -- "Usage-based Pricing" --> N["✅ CLERK"]
    M -- "Open Source + Self-hosted" --> O["✅ BETTER AUTH"]
    M -- Predictable Costs --> P["✅ BETTER AUTH"]
    Q -- Managed Database --> R["✅ CLERK"]
    Q -- Own Database Control --> S["✅ BETTER AUTH"]
    Q -- Prisma Integration --> T["✅ BETTER AUTH"]
    U -- Social Logins Only --> V["✅ CLERK"]
    U -- Advanced 2FA/MFA --> W{"Implementation Preference?"}
    U -- Organization Management --> X["✅ CLERK"]
    W -- "Built-in Implementation" --> Y["✅ CLERK"]
    W -- Custom Implementation --> Z["✅ BETTER AUTH"]
    AA -- "Plug-and-play" --> BB["✅ CLERK"]
    AA -- Full Customization --> CC["✅ BETTER AUTH"]
    AA -- TypeScript First --> DD["✅ BETTER AUTH"]
    EE -- SaaS Solution --> FF["✅ CLERK"]
    EE -- "Self-hosted" --> GG["✅ BETTER AUTH"]
    EE -- Hybrid Approach --> HH{"Primary Concern?"}
    HH -- Data Privacy --> II["✅ BETTER AUTH"]
    HH -- Ease of Management --> JJ["✅ CLERK"]
    KK -- Small Team, Fast Delivery --> LL["✅ CLERK"]
    KK -- Large Team, Custom Needs --> MM["✅ BETTER AUTH"]
    KK -- Security Expertise Available --> NN["✅ BETTER AUTH"]
    OO -- Quick Market Entry --> PP["✅ CLERK"]
    OO -- Platform Independence --> QQ["✅ BETTER AUTH"]
    OO -- "Vendor Lock-in Concerns" --> RR["✅ BETTER AUTH"]

    style E fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style F fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style G fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style H fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style J fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style K fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style L fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style N fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style O fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style P fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style R fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style S fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style T fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style V fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style X fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style Y fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style Z fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style BB fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style CC fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style DD fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style FF fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style GG fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style II fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style JJ fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style LL fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style MM fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style NN fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style PP fill:#e8f4fd,stroke:#1976d2,stroke-width:2px
    style QQ fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    style RR fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
```

### Seçim Kriterleri
- **Clerk:** En büyük avantajlarından biri, geliştiricilerin kimlik doğrulama sistemini sıfırdan inşa etmek zorunda kalmamasıdır. Geleneksel yaklaşımda, güvenli bir auth sistemi kurmak haftalar hatta aylar alabilirken, Clerk ile birkaç satır kod ve birkaç dakika içinde production-ready bir kimlik doğrulama sistemi kurabilirsiniz. Güvenlik konusunda endüstri standardlarını karşılar ve sürekli olarak güvenlik güncellemelerini takip eder.Hızlı başlama, hazır UI bileşenleri, org/SSO/MFA; düşük bakım.
- ### Ne Zaman Clerk Tercih Edilmeli?

- 🚀 ***MVP ve hızlı prototipleme*** aşamasındaki projeler
- 👥 ***Küçük ve orta ölçekli*** ekiplerde çalışan projeler
- 🔒 ***Security expertise*** olmayan ekipler
- ⚡ ***Hızlı pazara çıkış*** gerektiren projeler
- 📋 ***Standard auth ihtiyaçları*** olan projeler
- 🛠️ ***Maintenance overhead'i*** minimize etmek istenen projeler

  
- **Better Auth:** Better Auth, özellikle technical expertise'ye sahip ekipler için mükemmel bir authentication çözümüdür. Maliyet etkinliği, veri kontrolü, özelleştirme esnekliği ve performance avantajları sunmasına rağmen, setup ve maintenance açısından daha fazla technical involvement gerektirir. Eğer ekibinizde gerekli expertise varsa ve yukarıda bahsedilen avantajlar projeniz için kritikse, Better Auth mükemmel bir seçimdir.

- ## Ne Zaman Better Auth Tercih Edilmeli?

- 🏢 ***Veri kontrolü kritik olan*** projeler
- 📈 ***Büyük ölçekli uygulamalar*** (yüksek kullanıcı sayısı)
- 👨‍💻 ***Technical expertise olan*** ekipler
- 🎨 ***Özelleştirme gerektiren*** projeler
- ⚡ ***Performance-critical*** uygulamalar
- 🔒 ***Compliance gereksinimleri*** olan projeler
- 🆓 ***Maliyet optimizasyonu*** aranan projeler
- 🔓 ***Vendor lock-in'den kaçınmak*** istenen projeler

# Clerk Entegrasyonu

Zopio monorepo projesinde Clerk kimlik doğrulama sisteminin nasıl kullanıldığı hakkında bir rehber.

## Genel Bakış

Zopio projesi, kimlik doğrulama için **Clerk** kullanır ve bunu `@repo/auth` paketi aracılığıyla soyutlar. Bu yaklaşım, Clerk'in implementasyon detaylarını gizleyerek uygulamalara entegre etmeyi kolaylaştırır ve gelecekte farklı sağlayıcılara geçiş imkanı sunar.

## Teknoloji Yığını

- **Clerk Next.js**: `@clerk/nextjs@^6.20.0` - Ana kimlik doğrulama SDK'sı
- **Clerk Themes**: `@clerk/themes@^2.2.46` - UI tema desteği
- **JOSE**: `jose@^6.0.11` - JWT token doğrulama
- **Next Themes**: `next-themes@^0.4.6` - Dark/light mode desteği
- **Ortam Doğrulaması**: `@t3-oss/env-nextjs@^0.13.4` ile Zod şemaları
- **Güvenlik**: `server-only` paketi sunucu tarafı güvenliği için

## Paket Yapısı

```
packages/auth/
├── README.md                    # Paket dokümantasyonu
├── package.json                 # Bağımlılıklar
├── index.ts                     # Ana export dosyası
├── keys.ts                      # Ortam değişkeni doğrulaması
├── provider.tsx                 # AuthProvider komponenti
├── client.ts                    # İstemci tarafı exports
├── server.ts                    # Sunucu tarafı exports
├── middleware.ts                # Middleware exports
├── clerk-auth-middleware.ts     # Özel auth middleware
├── components/
│   ├── sign-in.tsx             # Giriş komponenti
│   └── sign-up.tsx             # Kayıt komponenti
└── lib/
    └── verify-clerk-token.ts   # Token doğrulama utility
```

## Kurulum ve Ayarlar

### 1. Ortam Değişkenleri

`.env` dosyalarınıza aşağıdaki Clerk API anahtarlarını ekleyin:

```env
# Sunucu tarafı - Gerekli
CLERK_SECRET_KEY=sk_test_...                    # Test ortamı için
# CLERK_SECRET_KEY=sk_live_...                  # Üretim ortamı için

# İstemci tarafı - Gerekli
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...   # Test ortamı için
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_... # Üretim ortamı için

# URL Konfigürasyonları
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Webhook (İsteğe bağlı)
CLERK_WEBHOOK_SECRET=whsec_...
```

**Ortam Değişkeni Doğrulaması:**
- `CLERK_SECRET_KEY`: `sk_` ile başlamalı
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: `pk_` ile başlamalı
- URL'ler: `/` ile başlamalı
- `CLERK_WEBHOOK_SECRET`: `whsec_` ile başlamalı (isteğe bağlı)

### 2. Uygulama Kurulumu

**Root Layout'ta AuthProvider Ekleme:**

```tsx
// app/layout.tsx
import { AuthProvider } from '@repo/auth/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <AuthProvider
          privacyUrl="/gizlilik"
          termsUrl="/kullanim-kosullari"
          helpUrl="/yardim"
        >
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

### 3. Middleware Konfigürasyonu

**Route Koruma için Middleware:**

```tsx
// middleware.ts
import { authMiddleware } from '@repo/auth';

export default authMiddleware({
  publicRoutes: [
    '/sign-in', 
    '/sign-up', 
    '/api/public',
    '/',
    '/pricing'
  ],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

## İstemci Tarafı Kullanım

### Kullanıcı Durumu Yönetimi

```tsx
'use client';

import { useUser, SignOutButton, useAuth } from '@repo/auth/client';

export function UserProfile() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useAuth();
  
  if (!isLoaded) {
    return <div>Yükleniyor...</div>;
  }
  
  if (!isSignedIn) {
    return <div>Giriş yapmanız gerekiyor</div>;
  }
  
  return (
    <div className="user-profile">
      <div className="flex items-center gap-4">
        <img 
          src={user?.imageUrl} 
          alt="Profil" 
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2>Hoş geldin, {user?.firstName}!</h2>
          <p className="text-sm text-muted-foreground">
            {user?.emailAddresses[0]?.emailAddress}
          </p>
        </div>
      </div>
      
      <SignOutButton>
        <button className="btn-secondary">
          Çıkış Yap
        </button>
      </SignOutButton>
    </div>
  );
}
```

### Organizasyon Yönetimi

```tsx
'use client';

import { 
  useOrganization, 
  useOrganizationList,
  OrganizationSwitcher 
} from '@repo/auth/client';

export function OrganizationManager() {
  const { organization, isLoaded } = useOrganization();
  const { organizationList } = useOrganizationList();
  
  if (!isLoaded) return <div>Yükleniyor...</div>;
  
  return (
    <div className="org-manager">
      {/* Organizasyon Değiştirici */}
      <OrganizationSwitcher 
        appearance={{
          elements: {
            organizationSwitcherTrigger: "btn-outline"
          }
        }}
      />
      
      {/* Mevcut Organizasyon Bilgisi */}
      {organization && (
        <div className="mt-4">
          <h3>Mevcut Organizasyon</h3>
          <p>{organization.name}</p>
          <p>Üye Sayısı: {organization.membersCount}</p>
        </div>
      )}
    </div>
  );
}
```

### Giriş/Kayıt Sayfaları

```tsx
// app/sign-in/page.tsx
import { SignIn } from '@repo/auth/components/sign-in';

export default function SignInPage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Giriş Yap</h1>
        <SignIn />
      </div>
    </div>
  );
}
```

```tsx
// app/sign-up/page.tsx
import { SignUp } from '@repo/auth/components/sign-up';

export default function SignUpPage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Kayıt Ol</h1>
        <SignUp />
      </div>
    </div>
  );
}
```

## Sunucu Tarafı Kullanım

### API Route Koruması

```tsx
// app/api/protected/route.ts
import { auth } from '@repo/auth/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = auth();
  
  if (!userId) {
    return NextResponse.json(
      { error: 'Yetkisiz erişim' }, 
      { status: 401 }
    );
  }
  
  // Korumalı işlem
  return NextResponse.json({ 
    message: 'Başarılı', 
    userId 
  });
}
```

### Kullanıcı Bilgilerini Alma

```tsx
// app/api/user/route.ts
import { currentUser, clerkClient } from '@repo/auth/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const user = await currentUser();
  
  if (!user) {
    return NextResponse.json(
      { error: 'Kullanıcı bulunamadı' }, 
      { status: 404 }
    );
  }
  
  return NextResponse.json({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.emailAddresses[0]?.emailAddress,
    avatar: user.imageUrl,
    createdAt: user.createdAt,
  });
}
```

### Özel Auth Middleware

```tsx
// API endpoint'lerinde özel auth middleware kullanımı
import { clerkAuthMiddleware } from '@repo/auth';

export async function POST(request: Request) {
  // İsteği doğrula
  const authenticatedRequest = await clerkAuthMiddleware(request);
  
  // Doğrulama başarısızsa Response döner
  if (authenticatedRequest instanceof Response) {
    return authenticatedRequest;
  }
  
  // Doğrulanmış kullanıcıya erişim
  const { user } = authenticatedRequest;
  
  return Response.json({ 
    message: 'Başarılı', 
    userId: user.id 
  });
}
```

## Webhook Entegrasyonu

### Clerk Webhook Handler

Proje, `apps/api/app/webhooks/clerk/route.ts` konumunda kapsamlı webhook işleyicisi içerir:

```tsx
// Desteklenen webhook olayları:
switch (eventType) {
  case 'user.created':
    // Yeni kullanıcı kaydı
    analytics.identify({
      distinctId: data.id,
      properties: {
        email: data.email_addresses[0]?.email_address,
        firstName: data.first_name,
        lastName: data.last_name,
        createdAt: new Date(data.created_at),
      },
    });
    break;
    
  case 'user.updated':
    // Kullanıcı bilgisi güncellendi
    break;
    
  case 'user.deleted':
    // Kullanıcı silindi
    break;
    
  case 'organization.created':
    // Yeni organizasyon oluşturuldu
    break;
    
  case 'organizationMembership.created':
    // Organizasyona yeni üye eklendi
    break;
}
```

### Webhook Konfigürasyonu

Clerk Dashboard'unda webhook endpoint'ini ayarlayın:
- **URL**: `https://yourdomain.com/api/webhooks/clerk`
- **Olaylar**: İhtiyacınız olan olayları seçin
- **Gizli Anahtar**: `CLERK_WEBHOOK_SECRET` ortam değişkenine ekleyin

# Better Auth Entegrasyonu

Zopio projesinde Clerk'ten Better Auth'a geçiş ve Better Auth entegrasyonu için bir rehber.

## Genel Bakış

**Better Auth**, modern Next.js uygulamaları için tasarlanmış, tip güvenli ve esnek bir kimlik doğrulama kütüphanesidir. Zopio projesi, Clerk'ten Better Auth'a geçiş için kapsamlı bir migrasyon rehberi sunar. Bu dokümantasyon, hem yeni projeler için Better Auth kurulumunu hem de mevcut Clerk entegrasyonundan geçiş sürecini kapsar.

## Neden Better Auth?

### 🎯 Avantajları
- **Tam kontrol**: Kendi veritabanınızda kullanıcı verileri
- **Açık kaynak**: Ücretsiz ve özelleştirilebilir
- **TypeScript odaklı**: Tam tip güvenliği
- **Esnek**: Plugin sistemi ile genişletilebilir
- **Performanslı**: Minimal bundle size
- **Prisma entegrasyonu**: Sorunsuz veritabanı yönetimi

### 📊 Clerk vs Better Auth Karşılaştırması

| Özellik | Clerk | Better Auth |
|---------|-------|-------------|
| **Maliyet** | Ücretli (kullanıcı başına) | Ücretsiz |
| **Veri kontrolü** | Clerk sunucularında | Kendi veritabanınızda |
| **Özelleştirme** | Sınırlı | Tam kontrol |
| **Bundle size** | Büyük | Minimal |
| **TypeScript** | İyi | Mükemmel |
| **Self-hosting** | Hayır | Evet |

## Teknoloji Yığını

- **Better Auth**: `better-auth@latest` - Ana kimlik doğrulama kütüphanesi
- **Prisma Adapter**: `better-auth/adapters/prisma` - Veritabanı entegrasyonu
- **Next.js Integration**: `better-auth/next-js` - Next.js özellikleri
- **Database**: PostgreSQL (Prisma ile)
- **Session Management**: Cookie tabanlı oturumlar

## Migrasyon Süreci (Clerk'ten Better Auth'a)

### 1. Bağımlılık Değişimi

**Clerk paketlerini kaldırın:**

```bash
# Auth paketinden Clerk bağımlılıklarını kaldır
pnpm remove @clerk/nextjs @clerk/themes @clerk/types --filter @repo/auth
```

**Better Auth paketlerini ekleyin:**

```bash
# Better Auth ve Next.js entegrasyonunu ekle
pnpm add better-auth next --filter @repo/auth
```

### 2. Ortam Değişkenlerini Güncelleme

**Eski Clerk değişkenlerini kaldırın:**

```env
# Kaldırılacaklar
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

**Better Auth değişkenlerini ekleyin:**

```env
# Better Auth için gerekli
BETTER_AUTH_SECRET=your-secret-key-here
DATABASE_URL=postgresql://username:password@localhost:5432/database
```

**Secret key oluşturmak için:**

```bash
# Otomatik secret key oluştur
npx @better-auth/cli secret
```

### 3. Sunucu ve İstemci Auth Kurulumu

**`packages/auth/server.ts` dosyasını oluşturun:**

```typescript
import 'server-only';
import { betterAuth } from 'better-auth';
import { nextCookies } from 'better-auth/next-js';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { organization } from 'better-auth/plugins/organization';
import { database } from '@repo/database';

export const auth = betterAuth({
  database: prismaAdapter(database, {
    provider: 'postgresql',
  }),
  plugins: [
    nextCookies(),
    organization(), // Organizasyon desteği için
  ],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // Geliştirme için
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 gün
    updateAge: 60 * 60 * 24, // 1 gün
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.User;
```

**`packages/auth/client.ts` dosyasını güncelleyin:**

```typescript
import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
} = authClient;
```

### 4. Auth Komponentlerini Güncelleme

**`packages/auth/components/sign-in.tsx`:**

```tsx
'use client';

import { signIn } from '../client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn.email({
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      setError('Giriş yapılırken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Şifre
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
      </button>
    </form>
  );
};
```

**`packages/auth/components/sign-up.tsx`:**

```tsx
'use client';

import { signUp } from '../client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signUp.email({
        email,
        password,
        name,
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      setError('Kayıt olurken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Ad Soyad
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Şifre
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Kayıt olunuyor...' : 'Kayıt Ol'}
      </button>
    </form>
  );
};
```

### 5. Prisma Modellerini Oluşturma

**Better Auth için gerekli tabloları oluşturun:**

```bash
# Better Auth CLI ile Prisma şemasını oluştur
npx @better-auth/cli generate --output ./packages/database/prisma/schema.prisma --config ./packages/auth/server.ts
```

**Oluşturulan Prisma modelleri:**

```prisma
// packages/database/prisma/schema.prisma
model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  emailVerified Boolean   @default(false)
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  accounts Account[]
  sessions Session[]
  
  @@map("users")
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@map("accounts")
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  ipAddress    String?
  userAgent    String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("sessions")
}
```

**Veritabanını güncelleyin:**

```bash
# Prisma migration oluştur ve uygula
cd packages/database
npx prisma migrate dev --name add-better-auth-tables
npx prisma generate
```

### 6. Provider Dosyasını Güncelleme

**`packages/auth/provider.tsx`:**

```tsx
import type { ReactNode } from 'react';

type AuthProviderProps = {
  children: ReactNode;
};

// Better Auth client-side provider gerektirmez
export const AuthProvider = ({ children }: AuthProviderProps) => children;
```

### 7. Middleware Değişimi

**`middleware.ts` dosyasını güncelleyin:**

```typescript
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = (request: NextRequest) => {
  const protectedPaths = ['/dashboard', '/settings', '/api/protected'];
  return protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );
};

export const authMiddleware = async (request: NextRequest) => {
  // Session kontrolü için API endpoint'ini çağır
  const url = new URL('/api/auth/get-session', request.nextUrl.origin);
  
  try {
    const response = await fetch(url, {
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    });

    const session = await response.json();

    if (isProtectedRoute(request) && !session?.user) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    // Session kontrolü başarısızsa, korumalı route'larda giriş sayfasına yönlendir
    if (isProtectedRoute(request)) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
    
    return NextResponse.next();
  }
};

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

### 8. Next.js Handler'ları Ekleme

**`apps/api/app/api/auth/[...all]/route.ts` oluşturun:**

```typescript
import 'server-only';
import { toNextJsHandler } from 'better-auth/next-js';
import { auth } from '@repo/auth/server';

export const { POST, GET } = toNextJsHandler(auth);
```

**`apps/app/app/api/auth/[...all]/route.ts` oluşturun:**

```typescript
import 'server-only';
import { toNextJsHandler } from 'better-auth/next-js';
import { auth } from '@repo/auth/server';

export const { POST, GET } = toNextJsHandler(auth);
```

### 9. Uygulamaları Güncelleme

**Sunucu tarafı kullanım değişiklikleri:**

```typescript
// ÖNCE (Clerk)
import { currentUser, auth } from '@repo/auth/server';

const user = await currentUser();
const { redirectToSignIn } = await auth();

// SONRA (Better Auth)
import { auth } from '@repo/auth/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const session = await auth.api.getSession({
  headers: await headers(),
});

if (!session?.user) {
  return redirect('/sign-in');
}

// session.user ile çalış
```

**Organizasyon yönetimi değişiklikleri:**

```typescript
// ÖNCE (Clerk)
import { auth } from '@repo/auth/server';

const { orgId } = await auth();

// SONRA (Better Auth)
import { auth } from '@repo/auth/server';
import { headers } from 'next/headers';

const h = await headers();
const session = await auth.api.getSession({ headers: h });
const orgId = session?.session.activeOrganizationId;

const fullOrganization = await auth.api.getFullOrganization({
  headers: h,
  query: { organizationId: orgId },
});
```

**Veritabanı sorguları değişiklikleri:**

```typescript
// ÖNCE (Clerk)
import { clerkClient } from '@repo/auth/server';

const clerk = await clerkClient();
const users = await clerk.users.getUserList();
const user = users.data.find(
  (user) => user.privateMetadata.stripeCustomerId === customerId
);

// SONRA (Better Auth + Prisma)
import { database } from '@repo/database';

const user = await database.user.findFirst({
  where: {
    // Stripe customer ID'sini user tablosunda saklayın
    stripeCustomerId: customerId,
  },
});
```

## İstemci Tarafı Kullanım

### Session Yönetimi

```tsx
'use client';

import { useSession, signOut } from '@repo/auth/client';

export function UserProfile() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Yükleniyor...</div>;
  }

  if (!session) {
    return <div>Giriş yapmanız gerekiyor</div>;
  }

  return (
    <div className="user-profile">
      <div className="flex items-center gap-4">
        <img 
          src={session.user.image || '/default-avatar.png'} 
          alt="Profil" 
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2>Hoş geldin, {session.user.name}!</h2>
          <p className="text-sm text-muted-foreground">
            {session.user.email}
          </p>
        </div>
      </div>
      
      <button
        onClick={() => signOut()}
        className="btn-secondary"
      >
        Çıkış Yap
      </button>
    </div>
  );
}
```

### Social Login

```tsx
'use client';

import { signIn } from '@repo/auth/client';

export function SocialLogin() {
  return (
    <div className="space-y-2">
      <button
        onClick={() => signIn.social({ provider: 'google' })}
        className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50"
      >
        Google ile Giriş Yap
      </button>
      
      <button
        onClick={() => signIn.social({ provider: 'github' })}
        className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
      >
        GitHub ile Giriş Yap
      </button>
    </div>
  );
}
```

## Organizasyon Yönetimi

### Organization Plugin Kurulumu

```typescript
// packages/auth/server.ts
import { organization } from 'better-auth/plugins/organization';

export const auth = betterAuth({
  // ... diğer konfigürasyonlar
  plugins: [
    nextCookies(),
    organization({
      allowUserToCreateOrganization: true,
      organizationLimit: 3, // Kullanıcı başına maksimum organizasyon
    }),
  ],
});
```

### Organizasyon Kullanımı

```tsx
'use client';

import { useSession } from '@repo/auth/client';

export function OrganizationManager() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="org-manager">
      <h3>Organizasyonlar</h3>
      {session.user.organizations?.map((org) => (
        <div key={org.id} className="org-item">
          <h4>{org.name}</h4>
          <p>Rol: {org.role}</p>
        </div>
      ))}
    </div>
  );
}
```
---

## Database Sub‑Tree (NeonDB vs Supabase)
```mermaid
flowchart TD
    A["Database Çözümü Seçimi"] --> B{"Proje Türü?"} & K{"Authentication Gereksinimi?"} & O{"Real-time Features?"} & S{"Dosya Depolama?"} & W{"Serverless Functions?"} & AA{"Development Workflow?"} & EE{"Mimari Tercihi?"} & OO{"Bütçe Durumu?"}
    B -- MVP/Prototype --> C{"Backend Kapsamı?"}
    B -- Production/Enterprise --> D{"Mimari Yaklaşım?"}
    C -- Sadece Database --> E["✅ NEONDB"]
    C -- "Full-stack Backend" --> F["✅ SUPABASE"]
    D -- "Database-first" --> G{"Maliyet vs DX?"}
    D -- "Full-stack Platform" --> H["✅ SUPABASE"]
    G -- Maliyet Önceliği --> I["✅ NEONDB"]
    G -- Developer Experience --> J["✅ SUPABASE"]
    K -- Custom Auth --> L["✅ NEONDB"]
    K -- "Built-in Auth" --> M["✅ SUPABASE"]
    K -- Row Level Security --> N["✅ SUPABASE"]
    O -- Gerekmiyor --> P["✅ NEONDB"]
    O -- "Real-time Subscriptions" --> Q["✅ SUPABASE"]
    O -- WebSocket Support --> R["✅ SUPABASE"]
    S -- Gerekmiyor --> T["✅ NEONDB"]
    S -- "Third-party Storage" --> U["✅ NEONDB"]
    S -- "Built-in Storage" --> V["✅ SUPABASE"]
    W -- Gerekmiyor --> X["✅ NEONDB"]
    W -- Vercel/Netlify Functions --> Y["✅ NEONDB"]
    W -- "Built-in Edge Functions" --> Z["✅ SUPABASE"]
    AA -- "Git-like Branching" --> BB["✅ NEONDB"]
    AA -- Basit Workflow --> CC["✅ NEONDB"]
    AA -- Complex Backend Workflow --> DD["✅ SUPABASE"]
    EE -- Microservices --> FF{"Database Rolü?"}
    EE -- Monolithic --> GG{"Backend Yaklaşımı?"}
    EE -- JAMstack --> HH{"Backend Servisleri?"}
    FF -- Sadece Database Servisi --> II["✅ NEONDB"]
    FF -- "Backend-as-a-Service" --> JJ["✅ SUPABASE"]
    GG -- "Database-centric" --> KK["✅ NEONDB"]
    GG -- "All-in-one Backend" --> LL["✅ SUPABASE"]
    HH -- Headless Database --> MM["✅ NEONDB"]
    HH -- Full Backend Services --> NN["✅ SUPABASE"]
    OO -- Maliyet Minimizasyonu --> PP["✅ NEONDB"]
    OO -- Maliyet vs Feature Dengesi --> QQ{"Hizmet Kapsamı?"}
    OO -- Feature Richness --> RR["✅ SUPABASE"]
    QQ -- Sadece Database --> SS["✅ NEONDB"]
    QQ -- "Full-stack Platform" --> TT["✅ SUPABASE"]

    style E fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style F fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style H fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style I fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style J fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style L fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style M fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style N fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style P fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style Q fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style R fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style T fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style U fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style V fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style X fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style Y fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style Z fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style BB fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style CC fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style DD fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style II fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style JJ fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style KK fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style LL fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style MM fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style NN fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style PP fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style RR fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style SS fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    style TT fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
```

### Seçim Kriterleri
- **NeonDB/Postgres:** NeonDB, modern web uygulamaları için mükemmel bir PostgreSQL çözümüdür. Serverless-first yaklaşımı, otomatik scaling, branch-based development ve maliyet etkinliği ile özellikle modern development workflows kullanan ekipler için ideal. PostgreSQL uyumluluğu sayesinde learning curve minimal, migration süreci kolaydır. Startup'lardan enterprise'a kadar farklı ölçeklerdeki projeler için uygun çözümler sunar.

- ## Ne Zaman NeonDB Tercih Edilmeli?

- ⚡ **Serverless uygulamalar** için optimize edilmiş projeler
- 🚀 **Hızlı geliştirme ve deployment** gerektiren projeler
- 📈 **Auto-scaling** ihtiyacı olan uygulamalar
- 🐘 **PostgreSQL uyumluluğu** aranan projeler
- 🔗 **Connection pooling** sorunları yaşanan sistemler
- ❄️ **Cold start** problemlerini minimize etmek istenen projeler
- 🌿 **Branch-based development** workflow'u kullanan ekipler
- 🛠️ **Maintenance overhead'i** minimize etmek istenen projeler

  
- **Supabase:** PostgreSQL tabanlı bir Backend-as-a-Service (BaaS) platformudur. Modern web uygulamaları için gereken tüm backend servislerini tek platformda sunar. Database, authentication, real-time subscriptions, storage, edge functions ve API gateway gibi servisleri entegre bir şekilde kullanabilirsiniz. Supabase'in temelinde PostgreSQL bulunur, bu da SQL'in tüm gücünü kullanabilmenizi sağlar. Supabase tamamen açık kaynak kodludur ve self-hosting seçeneği sunar. Bu, vendor lock-in riskini ortadan kaldırır ve gelecekte farklı bir çözüme geçmek istediğinizde esneklik sağlar. Built-in file storage sistemi, S3-compatible API ile kolay entegrasyon sağlar.

- ## Ne Zaman Supabase Tercih Edilmeli?

- 🚀 **Rapid prototyping ve MVP** geliştirme aşamasındaki projeler
- 🔄 **Real-time uygulamalar** (chat, collaboration tools) gerektiren projeler
- 🗄️ **PostgreSQL'in gücünü** kullanmak isteyen projeler
- 🔓 **Açık kaynak çözüm** tercih eden ekipler
- 🔐 **Built-in authentication** sistemi aranan projeler
- 📁 **File storage ve CDN** ihtiyacı olan uygulamalar
- ⚡ **Edge functions** ile serverless computing gereken projeler
- 🛠️ **All-in-one backend** çözümü arayan geliştiriciler

# Database Entegrasyonu

Zopio projesinde veritabanı yönetimi için **Prisma ORM** ve **Neon PostgreSQL** kullanımı rehberi.

## Genel Bakış

**`@repo/database`** paketi, Zopio monorepo'sunda merkezi veritabanı yönetimi sağlar. Neon PostgreSQL ile optimize edilmiş, tip güvenli ve serverless ortamlar için tasarlanmış bir yapı sunar.

## Teknoloji Yığını

- **Prisma ORM**: `6.4.1` - Type-safe database client
- **Neon PostgreSQL**: Serverless PostgreSQL provider
- **Prisma Neon Adapter**: `6.4.1` - Connection pooling için
- **Environment Validation**: Zod ile tip güvenli ortam değişkenleri
- **Server-only**: Client-side sızıntıları önlemek için

## Proje Yapısı

```
packages/database/
├── prisma/
│   └── schema.prisma          # Veritabanı şeması
├── generated/
│   └── client/                # Prisma client (otomatik oluşturulan)
├── index.ts                   # Ana database client
├── keys.ts                    # Ortam değişkeni validasyonu
├── package.json               # Bağımlılıklar ve scriptler
└── README.md                  # Dokümantasyon
```

## Kurulum ve Konfigürasyon

### 1. Ortam Değişkenleri

**`.env` dosyasına ekleyin:**

```env
# Neon PostgreSQL bağlantı string'i
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"
```

**Örnek Neon bağlantı string'i:**
```env
DATABASE_URL="postgresql://user:pass@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"
```

### 2. Database Client Konfigürasyonu

**`packages/database/index.ts` dosyası:**

```typescript
import 'server-only';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';
import { PrismaClient } from './generated/client';
import { keys } from './keys';

// Global Prisma instance (development için)
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// WebSocket konfigürasyonu (Neon için gerekli)
neonConfig.webSocketConstructor = ws;

// Connection pool oluşturma
const pool = new Pool({ connectionString: keys().DATABASE_URL });
const adapter = new PrismaNeon(pool);

// Database client'ı export etme
export const database = globalForPrisma.prisma || new PrismaClient({ adapter });

// Development'ta global instance kullanma
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = database;
}

export * from './generated/client';
```

### 3. Environment Validation

**`packages/database/keys.ts` dosyası:**

```typescript
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      DATABASE_URL: z.string().url(),
    },
    runtimeEnv: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
  });
```

## Prisma Schema Yönetimi

### Mevcut Schema

**`packages/database/prisma/schema.prisma`:**

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
  output          = "../generated/client"
}

datasource db {
  provider     = "postgresql"
  url          = env("DATABASE_URL")
  relationMode = "prisma"
}

// Örnek model (silinebilir)
model Page {
  id   Int    @id @default(autoincrement())
  name String
}
```

### Yeni Model Ekleme

**1. Schema'yı güncelleyin:**

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  emailVerified Boolean   @default(false)
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  // İlişkiler
  posts         Post[]
  
  @@map("users")
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // İlişkiler
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  
  @@map("posts")
}
```

**2. Migration oluşturun:**

```bash
cd packages/database
npx prisma migrate dev --name add_user_post_models
```

**3. Client'ı yeniden oluşturun:**

```bash
pnpm run build
```

## Kullanım Örnekleri

### Temel CRUD İşlemleri

```typescript
import { database } from '@repo/database';

// CREATE - Yeni kayıt oluşturma
const newUser = await database.user.create({
  data: {
    email: 'user@example.com',
    name: 'John Doe',
  },
});

// READ - Kayıt okuma
const user = await database.user.findUnique({
  where: { id: 'user-id' },
  include: { posts: true }, // İlişkili verileri dahil et
});

// UPDATE - Kayıt güncelleme
const updatedUser = await database.user.update({
  where: { id: 'user-id' },
  data: { name: 'Jane Doe' },
});

// DELETE - Kayıt silme
const deletedUser = await database.user.delete({
  where: { id: 'user-id' },
});
```

### Gelişmiş Sorgular

```typescript
// Filtreleme ve sıralama
const users = await database.user.findMany({
  where: {
    email: {
      contains: '@gmail.com',
    },
    posts: {
      some: {
        published: true,
      },
    },
  },
  orderBy: {
    createdAt: 'desc',
  },
  take: 10, // Limit
  skip: 0,  // Offset
});

// Aggregation
const userStats = await database.user.aggregate({
  _count: {
    id: true,
  },
  _avg: {
    posts: true,
  },
});
```

### Transaction Kullanımı

```typescript
// Atomik işlemler için transaction
const result = await database.$transaction(async (tx) => {
  const user = await tx.user.create({
    data: {
      email: 'user@example.com',
      name: 'John Doe',
    },
  });

  const post = await tx.post.create({
    data: {
      title: 'First Post',
      content: 'Hello World!',
      authorId: user.id,
    },
  });

  return { user, post };
});
```

## Next.js Entegrasyonu

### Server Components

```typescript
// app/users/page.tsx
import { database } from '@repo/database';

export default async function UsersPage() {
  const users = await database.user.findMany({
    include: { posts: true },
  });

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.posts.length} posts</p>
        </div>
      ))}
    </div>
  );
}
```

### API Routes

```typescript
// app/api/users/route.ts
import { database } from '@repo/database';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const users = await database.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();
    
    const user = await database.user.create({
      data: { email, name },
    });
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
```

### Server Actions

```typescript
// app/actions/user-actions.ts
'use server';

import { database } from '@repo/database';
import { revalidatePath } from 'next/cache';

export async function createUser(formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;

  if (!email || !name) {
    return { error: 'Email and name are required' };
  }

  try {
    await database.user.create({
      data: { email, name },
    });

    revalidatePath('/users');
    return { success: true };
  } catch (error) {
    console.error('Failed to create user:', error);
    return { error: 'Failed to create user' };
  }
}
```
# Supabase Entegrasyonu Rehberi

Zopio projesinde Neon'dan Supabase'e geçiş ve Supabase entegrasyonu için kapsamlı rehber.

## Genel Bakış

**Supabase**, PostgreSQL tabanlı, açık kaynak Backend-as-a-Service (BaaS) platformudur. Zopio projesi, mevcut Neon PostgreSQL entegrasyonundan Supabase'e geçiş için adım adım migrasyon rehberi sunar. Bu dokümantasyon, hem yeni projeler için Supabase kurulumunu hem de mevcut database'den geçiş sürecini kapsar.

## Neden Supabase?

### 🎯 Avantajları
- **All-in-one backend**: Database, Auth, Storage, Edge Functions tek platformda
- **PostgreSQL gücü**: SQL'in tüm avantajları ve gelişmiş özellikleri
- **Real-time**: Built-in real-time subscriptions ve WebSocket desteği
- **Açık kaynak**: Vendor lock-in yok, self-hosting mümkün
- **Developer experience**: Intuitive dashboard ve excellent tooling
- **Comprehensive auth**: Multi-provider authentication ve Row Level Security

### 📊 Neon vs Supabase Karşılaştırması

| Özellik | Neon | Supabase |
|---------|------|----------|
| **Odak** | Pure PostgreSQL | Full backend platform |
| **Authentication** | Yok | Built-in comprehensive auth |
| **Real-time** | Yok | Built-in real-time subscriptions |
| **Storage** | Yok | Built-in file storage + CDN |
| **Edge Functions** | Yok | Deno-based edge functions |
| **Dashboard** | Database odaklı | Full backend management |
| **Self-hosting** | Hayır | Evet (açık kaynak) |

## Teknoloji Yığını

- **Supabase**: Backend-as-a-Service platform
- **PostgreSQL**: Supabase'in temelindeki veritabanı
- **Prisma ORM**: Type-safe database client (opsiyonel)
- **Supabase CLI**: Local development ve deployment
- **Row Level Security**: Database-level authorization

## Migrasyon Süreci (Neon'dan Supabase'e)

### 1. Supabase Hesabı ve Proje Oluşturma

**Supabase'e kayıt olun:**

1. [supabase.com](https://supabase.com) adresine gidin
2. GitHub hesabınızla giriş yapın
3. Yeni organizasyon oluşturun

**Yeni proje oluşturun:**

1. [Supabase Dashboard](https://supabase.com/dashboard) açın
2. "New Project" butonuna tıklayın
3. Proje adı ve şifre belirleyin
4. Region seçin (en yakın lokasyon)
5. Projeyi oluşturun (2-3 dakika sürer)

### 2. Connection String'lerini Alma

**Supabase Dashboard'dan iki farklı URL alın:**

**Transaction Mode (DATABASE_URL):**
```
postgresql://postgres:[password]@[host]:6543/postgres?pgbouncer=true&connection_limit=1
```

**Session Mode (DIRECT_URL):**
```
postgresql://postgres:[password]@[host]:5432/postgres
```

### 3. Ortam Değişkenlerini Güncelleme

**Eski Neon değişkenlerini değiştirin:**

```env
# Eski (Neon)
DATABASE_URL="postgresql://user:pass@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"

# Yeni (Supabase)
DATABASE_URL="postgresql://postgres:[password]@[host]:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres:[password]@[host]:5432/postgres"

# Supabase ek değişkenleri
NEXT_PUBLIC_SUPABASE_URL="https://[project-ref].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[anon-key]"
SUPABASE_SERVICE_ROLE_KEY="[service-role-key]"
```

### 4. Bağımlılıkları Güncelleme

**Neon bağımlılıklarını kaldırın:**

```bash
# Neon paketlerini kaldır
pnpm remove @neondatabase/serverless @prisma/adapter-neon ws @types/ws --filter @repo/database
```

**Supabase bağımlılıklarını ekleyin:**

```bash
# Supabase CLI'yi development dependency olarak ekle
pnpm install -D supabase --filter @repo/database

# Supabase client library'sini ekle (opsiyonel)
pnpm add @supabase/supabase-js --filter @repo/database
```

### 5. Database Package'ını Güncelleme

**`packages/database/index.ts` dosyasını basitleştirin:**

```typescript
import 'server-only';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const database = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = database;
}

export * from '@prisma/client';
```

**`packages/database/keys.ts` dosyasını güncelleyin:**

```typescript
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      DATABASE_URL: z.string().url(),
      DIRECT_URL: z.string().url(),
      SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
    },
    client: {
      NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
      NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
    },
    runtimeEnv: {
      DATABASE_URL: process.env.DATABASE_URL,
      DIRECT_URL: process.env.DIRECT_URL,
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    },
  });
```

### 6. Prisma Schema'sını Güncelleme

**`packages/database/prisma/schema.prisma` dosyasını güncelleyin:**

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
  output          = "../generated/client"
}

datasource db {
  provider     = "postgresql"
  url          = env("DATABASE_URL")
  directUrl    = env("DIRECT_URL")
  relationMode = "prisma"
}

// Mevcut modeller...
model Page {
  id   Int    @id @default(autoincrement())
  name String
}
```

### 7. Migration'ları Uygulama

**Database migration'ını çalıştırın:**

```bash
# Zopio root directory'sinde
pnpm run migrate

# Veya database package'ında
cd packages/database
npx prisma migrate dev --name migrate_to_supabase
```

## Supabase Client Entegrasyonu

### Supabase Client Kurulumu

**`packages/database/supabase.ts` dosyası oluşturun:**

```typescript
import { createClient } from '@supabase/supabase-js';
import { keys } from './keys';

const env = keys();

export const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Server-side için service role client
export const supabaseAdmin = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
```

### Hybrid Kullanım (Prisma + Supabase)

**Database işlemleri için Prisma, diğer özellikler için Supabase:**

```typescript
import { database } from '@repo/database'; // Prisma client
import { supabase, supabaseAdmin } from '@repo/database/supabase';

// Database CRUD - Prisma ile
const users = await database.user.findMany();

// Real-time subscriptions - Supabase ile
const channel = supabase
  .channel('users')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'users' },
    (payload) => console.log('Change received!', payload)
  )
  .subscribe();

// Authentication - Supabase ile
const { data: { user } } = await supabase.auth.getUser();

// File upload - Supabase ile
const { data, error } = await supabase.storage
  .from('avatars')
  .upload('avatar.png', file);
```

## Authentication Entegrasyonu

### Supabase Auth Kurulumu

**Auth provider'ları etkinleştirin:**

1. Supabase Dashboard → Authentication → Providers
2. Email, Google, GitHub vb. provider'ları yapılandırın
3. Redirect URLs'leri ayarlayın

**Auth helper'ları oluşturun:**

```typescript
// packages/auth/supabase-auth.ts
import { supabase } from '@repo/database/supabase';

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};
```

### Row Level Security (RLS)

**Database'de güvenlik politikaları oluşturun:**

```sql
-- Users tablosu için RLS etkinleştir
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Kullanıcılar sadece kendi kayıtlarını görebilir
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- Kullanıcılar sadece kendi kayıtlarını güncelleyebilir
CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);
```

## Real-time Özellikler

### Real-time Subscriptions

**Component'larda real-time veri kullanımı:**

```tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@repo/database/supabase';

export function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // İlk veriyi yükle
    const fetchUsers = async () => {
      const { data } = await supabase.from('users').select('*');
      setUsers(data || []);
    };

    fetchUsers();

    // Real-time subscription
    const channel = supabase
      .channel('users')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'users' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setUsers(prev => [...prev, payload.new]);
          } else if (payload.eventType === 'UPDATE') {
            setUsers(prev => prev.map(user => 
              user.id === payload.new.id ? payload.new : user
            ));
          } else if (payload.eventType === 'DELETE') {
            setUsers(prev => prev.filter(user => user.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

## File Storage

### Storage Bucket Kurulumu

**Supabase Dashboard'da bucket oluşturun:**

1. Storage → Buckets → New Bucket
2. Bucket adı ve public/private ayarları
3. RLS policies oluşturun

**File upload helper'ları:**

```typescript
// packages/database/storage.ts
import { supabase } from './supabase';

export const uploadFile = async (
  bucket: string,
  path: string,
  file: File
) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    });

  return { data, error };
};

export const getPublicUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);

  return data.publicUrl;
};

export const deleteFile = async (bucket: string, path: string) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .remove([path]);

  return { data, error };
};
```
## Sonuç

Supabase, Zopio projesi için comprehensive backend çözümü sunar. PostgreSQL'in gücü, real-time capabilities, built-in authentication ve file storage ile modern web uygulamaları için ideal platform. Neon'dan geçiş süreci straightforward olup, ek özellikler kazanmanızı sağlar. Bu rehber, migration sürecini adım adım takip ederek sorunsuz bir geçiş gerçekleştirmenizi sağlar.

---

## Deploy Sub‑Tree (Vercel vs Netlify)
```mermaid
flowchart TD
    DEP{Deploy} -->|PaaS simplicity| VERC[Vercel]
    DEP -->|Infra control| DKR[Netlify]

    VERC --> VERCa[Edge Functions, ISR]
    DKR --> DKRb[Private networking, cost control]
```

### Seçim Kriterleri
- **Vercel:** Vercel, modern web geliştirme için ideal bir platform çünkü geliştiricilere sıfır konfigürasyon ile maksimum performans sunar. GitHub'dan projenizi bağladığınız anda otomatik deployment başlar ve global CDN sayesinde dünya çapında hızlı erişim sağlanır.
Serverless architecture ile sadece kullanıldığında kaynak tüketen, otomatik ölçeklenen bir yapı sunar. Her pull request için preview URL'leri oluşturarak team collaboration'ı kolaylaştırır. Built-in analytics ile Web Vitals ve performance metrikleri takip edilebilir.

## Ne Zaman Vercel Tercih Edilmeli?

- ⚡ **Next.js projeleri** için native optimizasyon aranan uygulamalar
- 🚀 **Zero-config deployment** ile hızlı başlangıç istenen projeler
- 🌐 **Global CDN** ile düşük latency gerektiren uygulamalar
- 🔄 **Preview deployments** ile team collaboration önemli olan projeler
- 📊 **Built-in analytics** ve Web Vitals tracking istenen sistemler
- ⚙️ **Serverless functions** ile otomatik scaling aranan projeler
- 🔌 **Rich integration ecosystem** ihtiyacı olan uygulamalar
- 🎯 **Frontend-focused** development workflow'u kullanan ekipler
- 💰 **Cost-effective** çözüm arayan küçük-orta ölçekli projeler
- 🛡️ **Enterprise-grade security** built-in istenen projeler
- 🔧 **Minimal maintenance** ile maksimum performance aranan sistemler
- 📈 **Traffic-based auto-scaling** ihtiyacı olan uygulamalar



- **Netlify:** Netlify, özellikle static site'lar, JAMstack uygulamaları ve frontend-heavy projeler için mükemmel bir seçimdir. Basitlik, hız ve developer experience açısından industry'de öncü konumdadır. Modern web development workflow'larına mükemmel uyum sağlar ve kompleks backend infrastructure'a ihtiyaç duymayan projeler için ideal bir platformdur.

## Ne Zaman Netlify Tercih Edilmeli?

- 🌐 **JAMstack uygulamaları** için optimize edilmiş projeler
- ⚡ **Static site'lar** ve **SPA'lar** için hızlı deployment
- 🔄 **Git-based workflow** ile otomatik deployment istenen projeler
- 📝 **Built-in form handling** ihtiyacı olan projeler
- 🔐 **Netlify Identity** ile kolay authentication aranan sistemler
- 🧪 **A/B testing** ve **split testing** gerektiren uygulamalar
- 🎯 **Frontend-heavy** projeler için basit backend ihtiyaçları
- 🔌 **Plugin ecosystem** ile build process customization istenen projeler
- 📊 **Edge computing** ve **personalization** gerektiren uygulamalar
- 💰 **Generous free tier** ile cost-effective çözüm arayan projeler
- 🚀 **Branch previews** ile collaboration önemli olan ekipler
- 🛡️ **Built-in security** (HTTPS, DDoS protection) istenen projeler
- 📁 **Large media files** ve **Git LFS** desteği gereken projeler
- 🔧 **Minimal backend complexity** ile maksimum frontend performance aranan sistemler

# Vercel Deployment Rehberi

**Zopio** projesini Vercel platformuna deploy etmek için kapsamlı rehber. Bu dokümantasyon, Zopio'nun resmi deployment dokümantasyonuna dayanarak hazırlanmıştır ve hem yeni projeler için deployment sürecini hem de mevcut projelerden geçiş adımlarını kapsar.

## Vercel Nedir?

**Vercel**, Next.js'in yaratıcısı olan şirketin geliştirdiği, frontend ve full-stack uygulamalar için optimize edilmiş cloud platform'dur. Zopio projesi, Vercel'in sunduğu performans, güvenilirlik ve developer experience avantajlarından faydalanmak için özel olarak optimize edilmiştir.

## Neden Vercel?

### 🚀 Avantajları
- **Next.js native desteği**: Zero-config deployment ve optimal performance
- **Edge Network**: Global CDN ile düşük latency
- **Serverless Functions**: Otomatik scaling ve cost-effective API endpoints
- **Preview Deployments**: Her PR için otomatik preview URL'leri
- **Analytics**: Built-in performance monitoring ve Web Vitals
- **Integrations**: Zengin third-party entegrasyon ekosistemi

### 📊 Vercel vs Diğer Platformlar

| Özellik | Vercel | Netlify |
|---------|--------|---------|
| **Next.js Desteği** | Native | Plugin gerekli |
| **Edge Functions** | Built-in | Built-in |
| **Preview Deployments** | Otomatik | Otomatik |
| **Analytics** | Built-in | Ek ücret |
| **Developer Experience** | Mükemmel | İyi |
| **Pricing** | Generous free tier | Generous free tier |

## Teknoloji Yığını

- **Vercel Platform**: Hosting ve deployment
- **Next.js 15**: React framework
- **Turbo**: Monorepo build system
- **Edge Runtime**: Serverless functions
- **Vercel Analytics**: Performance monitoring

## Hızlı Başlangıç

### 1. Vercel Template Kullanımı

Zopio, Vercel Marketplace'te hazır template olarak sunulmaktadır:

```bash
# Vercel CLI ile template kullanımı
npx create-next-app@latest my-zopio-app --example "https://vercel.com/templates/Next.js/zopio"

# Veya direkt GitHub'dan clone
git clone https://github.com/zopiolabs/zopio.git
cd zopio
```

### 2. Vercel CLI Kurulumu

```bash
# Vercel CLI'yi global olarak yükle
npm i -g vercel

# Vercel hesabına login ol
vercel login
```

## Deployment Süreci

### 1. Repository Hazırlığı

```bash
# Projeyi GitHub'a push et
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Vercel Dashboard'da Proje Oluşturma

1. **Vercel Dashboard**'a git: [vercel.com/dashboard](https://vercel.com/dashboard)
2. **"New Project"** butonuna tıkla
3. **GitHub repository**'sini seç
4. **Import** et

### 3. Build Ayarları

Zopio monorepo yapısı için özel build ayarları:

```json
{
  "buildCommand": "cd ../.. && npx turbo run build --filter=app",
  "outputDirectory": "apps/app/.next",
  "installCommand": "npm install",
  "devCommand": "cd ../.. && npx turbo run dev --filter=app"
}
```

### 4. Root Directory Ayarı

Vercel dashboard'da **Settings > General** bölümünden:
- **Root Directory**: `apps/app` olarak ayarla

## Environment Variables Yönetimi

### 1. Gerekli Environment Variables

Zopio projesi için temel environment variables:

```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Payments (Stripe)
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# AI (OpenAI)
OPENAI_API_KEY="sk-..."

# Analytics
NEXT_PUBLIC_POSTHOG_KEY="phc_..."
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"

# Sentry (Opsiyonel)
SENTRY_DSN="https://..."
SENTRY_ORG="your-org"
SENTRY_PROJECT="your-project"
```

### 2. Environment Variables Ekleme

Vercel Dashboard'da **Settings > Environment Variables**:

1. **Key**: Variable adı
2. **Value**: Variable değeri  
3. **Environment**: Production, Preview, Development seç
4. **Add** butonuna tıkla

### 3. Bulk Environment Variables

`.env.local` dosyasından toplu import:

```bash
# Vercel CLI ile environment variables ekleme
vercel env add VARIABLE_NAME
vercel env add VARIABLE_NAME production
```

## Monorepo Deployment Yapılandırması

### 1. Turbo.json Ayarları

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### 2. Package.json Scripts

```json
{
  "scripts": {
    "build": "turbo run build --filter=app",
    "dev": "turbo run dev --filter=app",
    "start": "turbo run start --filter=app"
  }
}
```

### 3. Vercel.json Konfigürasyonu

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    }
  ]
}
```
# Netlify Deployment Rehberi

**Zopio** projesini Netlify platformuna deploy etmek için resmi dokümantasyona dayalı rehber. Bu dokümantasyon, Zopio'nun monorepo yapısı ve Next.js uygulamaları için optimize edilmiş deployment sürecini kapsar.

## Netlify Nedir?

**Netlify**, JAMstack (JavaScript, APIs, Markup) mimarisi için optimize edilmiş, modern web development platformudur. Static site'lar, SPA'lar ve serverless uygulamalar için mükemmel bir çözüm sunar.

## Neden Netlify?

### 🚀 Avantajları
- **JAMstack native desteği**: Static site'lar için optimize edilmiş platform
- **Git-based workflow**: Otomatik deployment ve branch management
- **Built-in form handling**: Spam protection ve email notifications
- **Netlify Identity**: Multi-provider authentication sistemi
- **Edge Functions**: Global edge computing desteği
- **A/B Testing**: Built-in split testing özellikleri

### 📊 Netlify vs Diğer Platformlar

| Özellik | Netlify | Vercel | GitHub Pages |
|---------|---------|--------|--------------|
| **JAMstack Desteği** | Native | İyi | Temel |
| **Form Handling** | Built-in | Manual | Yok |
| **A/B Testing** | Built-in | Manual | Yok |
| **Identity/Auth** | Built-in | Third-party | Yok |
| **Edge Functions** | Built-in | Built-in | Yok |
| **Plugin System** | Zengin | Sınırlı | Yok |
| **Pricing** | Generous free tier | Generous free tier | Ücretsiz |

## Teknoloji Yığını

- **Netlify Platform**: JAMstack hosting ve deployment
- **Next.js**: React framework (Zopio'da kullanılan)
- **Netlify Functions**: Serverless backend logic
- **Netlify Identity**: Authentication ve user management
- **Netlify Forms**: Form handling ve submissions

## Ne Zaman Netlify Tercih Edilmeli?

- 🌐 **JAMstack uygulamaları** için optimize edilmiş projeler
- ⚡ **Static site'lar** ve **SPA'lar** için hızlı deployment
- 🔄 **Git-based workflow** ile otomatik deployment istenen projeler
- 📝 **Built-in form handling** ihtiyacı olan projeler
- 🔐 **Netlify Identity** ile kolay authentication aranan sistemler
- 🧪 **A/B testing** ve **split testing** gerektiren uygulamalar
- 🎯 **Frontend-heavy** projeler için basit backend ihtiyaçları
- 🔌 **Plugin ecosystem** ile build process customization istenen projeler
- 📊 **Edge computing** ve **personalization** gerektiren uygulamalar
- 💰 **Generous free tier** ile cost-effective çözüm arayan projeler
- 🚀 **Branch previews** ile collaboration önemli olan ekipler
- 🛡️ **Built-in security** (HTTPS, DDoS protection) istenen projeler
- 📁 **Large media files** ve **Git LFS** desteği gereken projeler
- 🔧 **Minimal backend complexity** ile maksimum frontend performance aranan sistemler

## Zopio Netlify Deployment

### 1. Zopio Monorepo Yapısı

Zopio projesi monorepo yapısında organize edilmiştir:

```
zopio/
├── apps/
│   ├── app/          # Ana Next.js uygulaması
│   ├── api/          # API uygulaması
│   └── web/          # Web uygulaması
├── packages/         # Paylaşılan paketler
└── turbo.json       # Turbo konfigürasyonu
```

### 2. Netlify CLI Kurulumu

```bash
# Netlify CLI'yi global olarak yükle
npm install -g netlify-cli

# Netlify hesabına login ol
netlify login
```

### 3. Repository Hazırlığı

```bash
# Projeyi GitHub'a push et
git add .
git commit -m "Initial commit"
git push origin main
```

## Deployment Süreci

### 1. Netlify Dashboard'da Site Oluşturma

1. **Netlify Dashboard**'a git: [app.netlify.com](https://app.netlify.com)
2. **"New site from Git"** butonuna tıkla
3. **GitHub repository**'sini seç (zopio repository)
4. **Deploy settings** ayarla

### 2. Zopio için Build Ayarları

Zopio monorepo yapısı için özel build ayarları:

```bash
# Build command (app deployment için)
cd apps/app && npm run build

# Publish directory
apps/app/out

# Base directory
apps/app

# Environment variables
NODE_VERSION=18
```

### 3. Netlify.toml Konfigürasyonu

Zopio projesi için `netlify.toml` dosyası:

```toml
[build]
  base = "apps/app"
  publish = "apps/app/out"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "8"

# Monorepo için build ayarları
[build.processing]
  skip_processing = false

[build.processing.css]
  bundle = true
  minify = true

[build.processing.js]
  bundle = true
  minify = true

# API routes için redirects
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

# SPA routing için fallback
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## Environment Variables Yönetimi

### 1. Zopio için Gerekli Environment Variables

Zopio'nun resmi dokümantasyonuna göre environment variables:

```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Payments (Stripe)
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# AI (OpenAI)
OPENAI_API_KEY="sk-..."

# Analytics
NEXT_PUBLIC_POSTHOG_KEY="phc_..."
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"

# Netlify specific
NETLIFY_SITE_ID="your-site-id"
NETLIFY_AUTH_TOKEN="your-auth-token"
```

### 2. Environment Variables Ekleme

Netlify Dashboard'da **Site settings > Environment variables**:

1. **Key**: Variable adı (yukarıdaki listeden)
2. **Value**: Variable değeri
3. **Scopes**: Production, Deploy previews, Branch deploys seç

### 3. Environment Variables Validation

Zopio projesi `@t3-oss/env-nextjs` kullanır:

```typescript
// apps/app/env.ts
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    CLERK_SECRET_KEY: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().min(1),
    OPENAI_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  },
});
```

## Monorepo Deployment Stratejisi

### 1. App Deployment (apps/app)

Ana Next.js uygulaması için:

```bash
# Build command
cd apps/app && npm run build && npm run export

# Publish directory
apps/app/out

# Install command
npm install
```

### 2. Web App Deployment (apps/web)

Web uygulaması için ayrı deployment:

```bash
# Build command
cd apps/web && npm run build

# Publish directory
apps/web/dist

# Base directory
apps/web
```

### 3. API Deployment (apps/api)

API uygulaması için Netlify Functions:

```javascript
// netlify/functions/api.js
const { createServer } = require('./apps/api/app');

exports.handler = async (event, context) => {
  const server = createServer();
  
  return new Promise((resolve, reject) => {
    server.emit('request', 
      {
        method: event.httpMethod,
        url: event.path,
        headers: event.headers,
        body: event.body
      },
      {
        writeHead: (statusCode, headers) => {
          resolve({
            statusCode,
            headers,
            body: ''
          });
        },
        end: (body) => {
          resolve({
            statusCode: 200,
            body
          });
        }
      }
    );
  });
};
```

## Next.js Static Export

Zopio'yu Netlify'de static site olarak deploy etmek için:

### 1. Next.js Config

```javascript
// apps/app/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Netlify için asset prefix
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig;
```

### 2. Package.json Scripts

```json
{
  "scripts": {
    "build": "next build",
    "export": "next export",
    "netlify-build": "npm run build && npm run export"
  }
}
```

## Sonuç

Bu rehber, Zopio projesini Vercel'e deploy etmek için gereken adımları kapsar. Vercel'in Next.js ile native entegrasyonu, Zopio'nun monorepo yapısı ve modern teknoloji yığını ile mükemmel uyum sağlar.

---

## Storage Sub‑Tree (Vercel Blob vs uploadthing)
```mermaid
flowchart TD
    A[Dosya Upload Çözümü Seçimi] --> B{Proje Türü?}
    
    B -->|MVP/Prototype| C{Setup Hızı Önceliği?}
    B -->|Production/Enterprise| D{Dosya Yönetimi Karmaşıklığı?}
    
    C -->|Minimal Setup| E[✅ VERCEL BLOB]
    C -->|Modern UI Gerekli| F[✅ UPLOADTHING]
    
    D -->|Basit Operasyonlar| G{Maliyet vs Developer Experience?}
    D -->|Gelişmiş Yönetim| H[✅ UPLOADTHING]
    
    G -->|Maliyet Önceliği| I[✅ VERCEL BLOB]
    G -->|Developer Experience| J[✅ UPLOADTHING]
    
    A --> K{UI/UX Gereksinimleri?}
    
    K -->|Basit Upload Button| L[✅ VERCEL BLOB]
    K -->|Drag & Drop + Progress| M[✅ UPLOADTHING]
    K -->|Custom UI Tasarımı| N{Hazır Bileşen Kullanımı?}
    
    N -->|Hazır Bileşenlerden Faydalanma| O[✅ UPLOADTHING]
    N -->|Tamamen Custom| P[✅ VERCEL BLOB]
    
    A --> Q{Güvenlik Gereksinimleri?}
    
    Q -->|Token-based Auth Yeterli| R[✅ VERCEL BLOB]
    Q -->|Role-based Access Control| S[✅ UPLOADTHING]
    Q -->|Advanced Middleware Logic| T[✅ UPLOADTHING]
    
    A --> U{Dosya İşleme Özellikleri?}
    
    U -->|Upload/Download/Delete| V[✅ VERCEL BLOB]
    U -->|Metadata Yönetimi| W[✅ UPLOADTHING]
    U -->|File Transformation| X[✅ UPLOADTHING]
    
    A --> Y{Ekip Öncelikleri?}
    
    Y -->|Hızlı Delivery| Z{Setup vs UI Kalitesi?}
    Y -->|Developer Experience| AA[✅ UPLOADTHING]
    Y -->|Minimal Maintenance| BB[✅ VERCEL BLOB]
    
    Z -->|En Hızlı Setup| CC[✅ VERCEL BLOB]
    Z -->|Hızlı + Modern UI| DD[✅ UPLOADTHING]
    
    A --> EE{Bütçe Durumu?}
    
    EE -->|Maliyet Minimizasyonu| FF[✅ VERCEL BLOB]
    EE -->|Maliyet vs Feature Dengesi| GG{Dosya Trafiği Beklentisi?}
    EE -->|Feature Richness Öncelik| HH[✅ UPLOADTHING]
    
    GG -->|Düşük Trafik| II[✅ VERCEL BLOB]
    GG -->|Yüksek Trafik| JJ[✅ UPLOADTHING]
    
    style E fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style F fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style H fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style I fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style J fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style L fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style M fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style O fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style P fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style R fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style S fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style T fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style V fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style W fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style X fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style AA fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style BB fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style CC fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style DD fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style FF fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style HH fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style II fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    style JJ fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
```

### Seçim Kriterleri
- **Vercel Blob:** Vercel Blob, özellikle modern web development workflow'larında hız, basitlik ve güvenilirlik arayan ekipler için ideal bir çözümdür. Infrastructure complexity'sini minimize ederken, enterprise-grade performance ve security sunar. Eğer Next.js ekosisteminde çalışıyorsanız ve hızlı, scalable bir dosya depolama çözümü arıyorsanız, Vercel Blob en mantıklı seçimdir.

## Ne Zaman Vercel Blob Tercih Edilmeli?

- ⚡ **Serverless dosya depolama** ihtiyacı olan projeler
- 🚀 **Hızlı deployment ve zero-config** gerektiren uygulamalar
- 📈 **Otomatik ölçeklendirme** ile dosya trafiği yönetimi
- 🌐 **Global CDN** ile dünya çapında hızlı erişim
- 🔗 **Next.js entegrasyonu** olan Vercel projelerinde
- ❄️ **Cold start** olmayan anlık dosya erişimi
- 🛠️ **Minimal setup** ile hızlı başlangıç istenen projeler
- 💰 **Pay-as-you-use** maliyet modeli tercih eden ekipler
- 🔒 **Edge runtime** uyumluluğu gereken uygulamalar
- 📦 **Vercel ekosistemi** içinde kalan projeler
- 🎯 **Basit dosya operasyonları** (upload, list, delete) yeterli olan sistemler
- ⚙️ **Infrastructure yönetimi** yapmak istemeyen ekipler

- **uploadthing:** UploadThing, modern web development'ın gereksinimlerini anlayarak tasarlanmış, developer experience'ı önceleyerek geliştirilmiş bir platformdur. Sadece dosya upload etmekle kalmaz, tüm dosya lifecycle'ını yönetir. Eğer Next.js ekosisteminde çalışıyor, hızlı development cycle'ları istiyorsanız ve enterprise-grade özellikler arıyorsanız, UploadThing en akıllı tercihinizdir.

- ## Ne Zaman UploadThing Tercih Edilmeli?

- ⚡ **Next.js native entegrasyonu** gereken projeler
- 🚀 **Hazır UI bileşenleri** ile hızlı geliştirme
- 📈 **Built-in dosya doğrulama** ve güvenlik kontrolleri
- 🌐 **TypeScript desteği** ile tip güvenliği
- 🔗 **Middleware tabanlı yetkilendirme** sistemi
- ❄️ **Progress tracking** ve upload durumu takibi
- 🛠️ **Özelleştirilebilir upload UI** gereken projeler
- 💰 **Gelişmiş dosya yönetimi** özellikleri istenen sistemler
- 🔒 **Role-based access control** gereken uygulamalar
- 📦 **Çoklu dosya formatı** desteği istenen projeler
- 🎯 **Advanced file routing** ve metadata işleme
- ⚙️ **Webhook entegrasyonu** ile otomatik işlemler
- 🎨 **Drag & drop** ve modern UX gereksinimleri
- 🔧 **Developer experience** öncelikli ekipler

# Vercel Blob Entegrasyonu Rehberi

**Zopio** projesinde Vercel Blob kullanarak dosya depolama ve yönetimi için kapsamlı rehber. Bu dokümantasyon, `@repo/storage` package'ı üzerinden Vercel Blob'un nasıl kullanıldığını ve ayağa kaldırıldığını detaylı şekilde açıklar.

## Vercel Blob Nedir?

**Vercel Blob**, Vercel'in sunduğu serverless dosya depolama çözümüdür. Global CDN ile entegre, otomatik scaling ve cost-effective dosya yönetimi sunar. Zopio projesi, dosya upload, storage ve management işlemleri için bu servisi kullanır.

## Neden Vercel Blob?

### 🚀 Avantajları
- **Serverless architecture**: Otomatik scaling ve zero-config setup
- **Global CDN**: Dünya çapında hızlı dosya erişimi
- **Cost-effective**: Pay-as-you-use pricing modeli
- **Next.js integration**: Native Vercel ecosystem desteği
- **Type-safe**: TypeScript ile full type safety
- **Edge optimization**: Edge runtime ile optimal performance

### 📊 Vercel Blob vs Diğer Storage Çözümleri

| Özellik | Vercel Blob | AWS S3 | Cloudinary |
|---------|-------------|--------|------------|
| **Setup Complexity** | Minimal | Orta | Orta |
| **CDN Integration** | Built-in | Manual | Built-in |
| **Serverless Native** | Evet | Hayır | Hayır |
| **Type Safety** | TypeScript native | SDK gerekli | SDK gerekli |
| **Pricing** | Pay-per-use | Complex tiers | Feature-based |
| **Edge Performance** | Optimal | İyi | İyi |

## Zopio'da Vercel Blob Yapısı

### 1. Storage Package Mimarisi

Zopio'da Vercel Blob, `@repo/storage` package'ı altında organize edilmiştir:

```
packages/storage/
├── index.ts          # Server-side exports
├── client.ts         # Client-side exports
├── keys.ts           # Environment variable validation
├── package.json      # Dependencies
└── README.md         # Documentation
```

### 2. Package Dependencies

```json
{
  "dependencies": {
    "@vercel/blob": "^1.1.1",
    "@t3-oss/env-nextjs": "^0.13.4",
    "zod": "^3.25.28"
  }
}
```

## Environment Variables Setup

### 1. Gerekli Environment Variables

```bash
# Vercel Blob Token
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."
```

### 2. Environment Variable Validation

Zopio projesi, environment variables için type-safe validation kullanır:

```typescript
// packages/storage/keys.ts
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      BLOB_READ_WRITE_TOKEN: z.string().optional(),
    },
    runtimeEnv: {
      BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
    },
  });
```

### 3. Vercel Dashboard'da Token Oluşturma

1. **Vercel Dashboard**'a git: [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Storage** sekmesine tıkla
3. **Blob** section'ına git
4. **Create Token** butonuna tıkla
5. **Read & Write** permissions seç
6. Token'ı kopyala ve environment variables'a ekle

## Server-Side Usage

### 1. Basic File Operations

```typescript
// Server-side file operations
import { put, list, del } from '@repo/storage';

// File upload
export async function uploadFile(formData: FormData) {
  const file = formData.get('file') as File;
  const blob = await put('uploads/my-file.pdf', file, {
    access: 'public',
  });
  
  return blob.url;
}

// List files
export async function listFiles() {
  const blobs = await list({ prefix: 'uploads/' });
  return blobs;
}

// Delete file
export async function deleteFile(url: string) {
  await del(url);
  return { success: true };
}
```

### 2. API Route Implementation

```typescript
// app/api/upload/route.ts
import { put } from '@repo/storage';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const filename = formData.get('filename') as string;
    
    if (!file || !filename) {
      return NextResponse.json(
        { error: 'File or filename missing' },
        { status: 400 }
      );
    }
    
    // Upload to Vercel Blob
    const blob = await put(`uploads/${filename}`, file, {
      access: 'public',
    });
    
    return NextResponse.json({ 
      url: blob.url,
      pathname: blob.pathname,
      size: blob.size 
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
```

### 3. File Management API

```typescript
// app/api/files/route.ts
import { list, del } from '@repo/storage';
import { NextResponse } from 'next/server';

// List all files
export async function GET() {
  try {
    const blobs = await list({ prefix: 'uploads/' });
    return NextResponse.json(blobs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to list files' },
      { status: 500 }
    );
  }
}

// Delete file
export async function DELETE(request: Request) {
  try {
    const { url } = await request.json();
    await del(url);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete file' },
      { status: 500 }
    );
  }
}
```

## Client-Side Usage

### 1. Client-Side Upload

```typescript
// Client-side file upload
import { upload } from '@repo/storage/client';

export async function uploadFileFromClient(file: File) {
  const blob = await upload('uploads/my-file.pdf', file, {
    access: 'public',
    handleUploadUrl: '/api/upload',
  });
  
  return blob.url;
}
```

### 2. React File Upload Component

```tsx
// components/FileUpload.tsx
import { useState } from 'react';
import { upload } from '@repo/storage/client';

export function FileUpload() {
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    
    const file = event.target.files[0];
    setUploading(true);
    setError(null);
    
    try {
      const blob = await upload(`uploads/${file.name}`, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });
      
      setFileUrl(blob.url);
    } catch (error) {
      console.error('Upload failed:', error);
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  }
  
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="file-upload" className="block text-sm font-medium">
          Choose file to upload
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleUpload}
          disabled={uploading}
          className="mt-1 block w-full"
        />
      </div>
      
      {uploading && (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <span>Uploading...</span>
        </div>
      )}
      
      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}
      
      {fileUrl && (
        <div className="bg-green-50 p-4 rounded-md">
          <p className="text-green-800">File uploaded successfully!</p>
          <a 
            href={fileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View file
          </a>
        </div>
      )}
    </div>
  );
}
```

### 3. Advanced Upload with Progress

```tsx
// components/AdvancedFileUpload.tsx
import { useState, useCallback } from 'react';

interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export function AdvancedFileUpload() {
  const [progress, setProgress] = useState<UploadProgress | null>(null);
  const [files, setFiles] = useState<string[]>([]);

  const handleUpload = useCallback(async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', file.name);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      setFiles(prev => [...prev, result.url]);
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setProgress(null);
    }
  }, []);

  return (
    <div className="space-y-4">
      <input
        type="file"
        multiple
        onChange={(e) => {
          if (e.target.files) {
            Array.from(e.target.files).forEach(handleUpload);
          }
        }}
        className="block w-full"
      />

      {progress && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
      )}

      <div className="space-y-2">
        {files.map((url, index) => (
          <div key={index} className="flex items-center justify-between p-2 border rounded">
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              File {index + 1}
            </a>
            <button
              onClick={() => setFiles(prev => prev.filter((_, i) => i !== index))}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

# UploadThing Entegrasyonu Rehberi

Bu rehber, Zopio projesinde Vercel Blob'dan UploadThing'e geçiş sürecini ve UploadThing entegrasyonunu detaylı olarak açıklamaktadır.

## UploadThing Nedir?

UploadThing, Next.js uygulamaları için özel olarak tasarlanmış modern bir dosya yükleme çözümüdür. Zopio projesi için aşağıdaki avantajları sunar:

### Temel Özellikler

- **Next.js Entegrasyonu**: App Router ve Pages Router desteği
- **TypeScript Desteği**: Tam tip güvenliği
- **Dosya Doğrulama**: Boyut, tip ve sayı kontrolü
- **Güvenlik**: Middleware tabanlı yetkilendirme
- **Performans**: Optimized upload süreçleri
- **Özelleştirilebilir UI**: Tailwind CSS entegrasyonu

### Vercel Blob ile Karşılaştırma

| Özellik | UploadThing | Vercel Blob |
|---------|-------------|-------------|
| Next.js Entegrasyonu | ✅ Native | ⚠️ Manuel |
| TypeScript Desteği | ✅ Tam | ✅ Tam |
| UI Bileşenleri | ✅ Hazır | ❌ Manuel |
| Dosya Doğrulama | ✅ Built-in | ❌ Manuel |
| Middleware Desteği | ✅ Native | ❌ Manuel |

## Vercel Blob'dan UploadThing'e Geçiş

### 1. Bağımlılıkları Güncelleme

Öncelikle mevcut Vercel Blob bağımlılıklarını kaldırın:

```bash
pnpm remove @vercel/blob --filter @repo/storage
```

UploadThing bağımlılıklarını ekleyin:

```bash
pnpm add uploadthing @uploadthing/react --filter @repo/storage
```

### 2. Çevre Değişkenlerini Güncelleme

`.env` dosyanızda aşağıdaki değişiklikleri yapın:

```env
# Kaldırın:
# BLOB_READ_WRITE_TOKEN=""

# Ekleyin:
UPLOADTHING_TOKEN=""
```

`packages/env/index.ts` dosyasını güncelleyin:

```typescript
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // Kaldırın: BLOB_READ_WRITE_TOKEN
    UPLOADTHING_TOKEN: z.string().min(1),
    // ... diğer değişkenler
  },
  // ...
});
```

### 3. Storage Dosyalarını Güncelleme

`packages/storage/index.ts` dosyasını güncelleyin:

```typescript
import { createUploadthing } from 'uploadthing/next';

export { type FileRouter, createRouteHandler } from 'uploadthing/next';
export { UploadThingError as UploadError, extractRouterConfig } from 'uploadthing/server';

export const storage = createUploadthing();
```

### 4. SSR Dosyası Oluşturma

`packages/storage/ssr.ts` dosyasını oluşturun:

```typescript
export { NextSSRPlugin as StorageSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
```

### 5. İstemci Dosyasını Güncelleme

`packages/storage/client.ts` dosyasını güncelleyin:

```typescript
import { generateUploadButton, generateUploadDropzone } from '@uploadthing/react';
import type { FileRouter } from './index';

export const UploadButton = generateUploadButton<FileRouter>();
export const UploadDropzone = generateUploadDropzone<FileRouter>();

export { generateUploadButton, generateUploadDropzone };
```

## Çevre Değişkenleri

### UploadThing Token Alma

1. [UploadThing Dashboard](https://uploadthing.com/dashboard)'a gidin
2. Yeni bir proje oluşturun veya mevcut projeyi seçin
3. **API Keys** sekmesine gidin
4. **Secret Key**'i kopyalayın
5. `.env` dosyanıza `UPLOADTHING_TOKEN` olarak ekleyin

### Geliştirme Ortamı

```env
# .env.local
UPLOADTHING_TOKEN="sk_live_..."
```

### Üretim Ortamı

Vercel Dashboard'da environment variables bölümünden ekleyin:

```
UPLOADTHING_TOKEN = sk_live_...
```

## Dosya Yönlendiricileri

### Temel File Router

`app/lib/upload.ts` dosyasını oluşturun:

```typescript
import { currentUser } from '@repo/auth/server';
import { type FileRouter, UploadError, storage } from '@repo/storage';

export const router: FileRouter = {
  // Resim yükleme endpoint'i
  imageUploader: storage({
    image: {
      maxFileSize: '4MB',
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const user = await currentUser();
      
      if (!user) {
        throw new UploadError('Unauthorized');
      }
      
      return { userId: user.id };
    })
    .onUploadComplete(({ metadata, file }) => {
      console.log('Upload complete for userId:', metadata.userId);
      console.log('File URL:', file.url);
      
      return { uploadedBy: metadata.userId };
    }),

  // Döküman yükleme endpoint'i
  documentUploader: storage({
    pdf: {
      maxFileSize: '16MB',
      maxFileCount: 5,
    },
  })
    .middleware(async () => {
      const user = await currentUser();
      
      if (!user) {
        throw new UploadError('Unauthorized');
      }
      
      return { userId: user.id };
    })
    .onUploadComplete(({ metadata, file }) => {
      return { uploadedBy: metadata.userId };
    }),
};

export type AppFileRouter = typeof router;
```

### Route Handler Oluşturma

`app/api/uploadthing/route.ts` dosyasını oluşturun:

```typescript
import { router } from '@/app/lib/upload';
import { createRouteHandler } from '@repo/storage';

export const { GET, POST } = createRouteHandler({
  router,
});
```

### Root Layout Güncelleme

`app/layout.tsx` dosyasını güncelleyin:

```typescript
import '@repo/design-system/styles/globals.css';
import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import { extractRouterConfig } from '@repo/storage';
import { StorageSSRPlugin } from '@repo/storage/ssr';
import type { ReactNode } from 'react';
import { router } from './lib/upload';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body>
      <StorageSSRPlugin routerConfig={extractRouterConfig(router)} />
      <DesignSystemProvider>{children}</DesignSystemProvider>
    </body>
  </html>
);

export default RootLayout;
```

## İstemci Tarafı Kullanımı

### Tailwind CSS Güncelleme

`globals.css` dosyanıza ekleyin:

```css
@import "uploadthing/tw/v4";
@source "../node_modules/@uploadthing/react/dist";
```

### Upload Button Bileşeni

```typescript
'use client';

import type { router } from '@/app/lib/upload';
import { generateUploadButton } from '@repo/storage/client';
import { toast } from 'sonner';

const UploadButton = generateUploadButton<typeof router>();

export const UploadForm = () => (
  <UploadButton
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
      console.log('Files: ', res);
      toast.success('Upload Completed');
    }}
    onUploadError={(error: Error) => {
      toast.error(`ERROR! ${error.message}`);
    }}
  />
);
```

### Upload Dropzone Bileşeni

```typescript
'use client';

import type { router } from '@/app/lib/upload';
import { generateUploadDropzone } from '@repo/storage/client';
import { toast } from 'sonner';

const UploadDropzone = generateUploadDropzone<typeof router>();

export const DropzoneForm = () => (
  <UploadDropzone
    endpoint="imageUploader"
    onClientUploadComplete={(res) => {
      console.log('Files: ', res);
      toast.success('Upload Completed');
    }}
    onUploadError={(error: Error) => {
      toast.error(`ERROR! ${error.message}`);
    }}
  />
);
```

## Sonuç

UploadThing entegrasyonu ile Zopio projenizde modern ve güvenli dosya yükleme özelliklerini kullanabilirsiniz.

## Observability & QA
- **Observability:** `packages/observability/` → Sentry SDK, request/trace/log hook’ları.
- **Analytics/SEO:** `packages/analytics/`, `packages/seo/`.
- **Testing:** `packages/testing/` → Vitest + Testing Library; hedef: **≥85% coverage**.
- **CI/CD:** `.github/workflows/{build,release,security}.yml` + **SonarQube Cloud** entegrasyonu.

---

## 🚀 Quick Start (Uçtan Uca)
1) **Kararları ver:** (Ödeme, Auth, DB, Deploy).  
2) **Env ayarla:** `.env` (aşağıdaki örnek).  
3) **Paketleri kur:** `pnpm i`.  
4) **Geliştirme:** `pnpm dev` (veya `turbo dev --filter=!storybook`).  
5) **Test & kalite:** `pnpm test`, SonarQube raporları.  
6) **Deploy:** Vercel preview veya Docker image.

### `.env.example`
```bash
# Core
NODE_ENV=development
PAYMENTS_PROVIDER=stripe   # or jetcheckout

# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Jetcheckout
JETCHECKOUT_API_KEY=...
JETCHECKOUT_MERCHANT_ID=...
JETCHECKOUT_WEBHOOK_SECRET=...

# Database (choose one)
POSTGRES_URL=postgres://user:pass@host/db
TURSO_URL=libsql://...       # if using Turso/LibSQL
TURSO_AUTH_TOKEN=...

# Auth (choose one strategy)
CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
ZOPIO_AUTH_JWT_SECRET=supersecret

# Observability
SENTRY_DSN=https://...
```

---

## 🔁 CI/CD Pipeline (Mermaid)
```mermaid
flowchart LR
  Dev[Developer PR] --> CI[GitHub Actions]
  CI -->|Build + Test + Lint + Sonar| Artifacts[(Artifacts)]
  CI -->|Preview Deploy| Vercel[Vercel Preview]
  CI -->|Docker Build| Registry[(Container Registry)]
  Registry --> Staging[Staging VPS/K8s]
  Staging --> Prod[Production]
```

---

## 📦 Komutlar
- **Install:** `pnpm install`
- **Dev:** `pnpm dev`
- **Test:** `pnpm test`
- **Typecheck/Lint:** `pnpm typecheck` / `pnpm lint`
- **Build:** `pnpm -w build`

---


