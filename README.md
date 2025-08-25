
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
| 🧠 **Logic & DX**  | `crud`, `cms`, `mcp`, `feature-flags`, `rate-limit`, `webhooks` |
| 🗃 **Infra**       | `database`, `data`, `next-config`, `security`, `storage` |
| 🔭 **Observability** | `analytics`, `notifications`, `observability` |
| 🎨 **UI & Design** | `design-system`, `email`, `view`, `view-builder` |
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

    A[Project Start: Zopio Full‑Stack App] --> B{Target Region/Market}
    B -->|Global| C[Payments: Stripe]
    B -->|TR‑focused| D[Payments: Jetcheckout]

    A --> E{Auth Strategy}
    E -->|Hosted| F[Clerk]
    E -->|In‑house| G[Zopio Auth RBAC/ABAC]

    A --> H{Primary Data Layer}
    H -->|Relational| I[Postgres - NeonDB]
    H -->|Edge/Embedded| J[Turso/LibSQL]

    A --> K{Frontend Runtime}
    K --> L[Next.js - App Router - default]

    A --> M{Deployment}
    M -->|PaaS| N[Vercel]
    M -->|Self‑host| O[Docker + VPS/K8s]

    A --> P{Observability}
    P --> Q[Sentry]
    P --> R[Zopio Observability]

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

# @repo/ai - AI Package Kullanım Rehberi

Zopio Escrow projesinde AI yeteneklerini entegre etmek için kapsamlı rehber.

## 📋 Paket Özeti

`@repo/ai` paketi, Vercel AI SDK'sını temel alarak OpenAI entegrasyonu sağlar ve React bileşenleri ile AI chat arayüzleri oluşturmanızı kolaylaştırır.

### 🔧 Teknoloji Stack
- **AI SDK**: Vercel AI SDK v4.3.16
- **OpenAI**: @ai-sdk/openai v1.3.22
- **UI**: React 19.1.0 + Tailwind CSS
- **Markdown**: react-markdown v10.1.0
- **Type Safety**: TypeScript + Zod

## 📁 Paket Yapısı

```
packages/ai/
├── components/           # React bileşenleri
│   ├── message.tsx      # Mesaj bileşeni
│   └── thread.tsx       # Chat thread bileşeni
├── lib/                 # Yardımcı kütüphaneler
│   ├── models.ts        # OpenAI model yapılandırmaları
│   └── react.ts         # React hooks re-export
├── index.ts             # Ana export dosyası
├── keys.ts              # API key yönetimi
└── package.json         # Paket yapılandırması
```

## 🚀 Kurulum ve Başlangıç

### 1. Environment Yapılandırması

```env
# .env.local
OPENAI_API_KEY=sk-your-openai-api-key-here
```

### 2. Paket Import

```tsx
// Temel import'lar
import { useChat } from '@repo/ai/lib/react';
import { Message, Thread } from '@repo/ai/components';
import { models } from '@repo/ai/lib/models';
```

## 🎨 Bileşenler

### Message Bileşeni

Kullanıcı ve AI mesajlarını render eden styled bileşen.

```tsx
import { Message } from '@repo/ai/components';

// Temel kullanım
<Message data={message} />

// Özelleştirilmiş markdown ile
<Message 
  data={message} 
  markdown={{
    components: {
      code: ({ children }) => (
        <code className="bg-muted/50 p-1 rounded text-sm">{children}</code>
      ),
      pre: ({ children }) => (
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">{children}</pre>
      )
    }
  }}
/>
```

**Props:**
- `data: Message` - AI SDK'dan gelen mesaj objesi
- `markdown?: ComponentProps<typeof Markdown>` - Markdown render ayarları

### Thread Bileşeni

Chat mesajlarını organize eden container bileşen.

```tsx
import { Thread } from '@repo/ai/components';

<Thread className="h-96">
  {messages.map((message) => (
    <Message key={message.id} data={message} />
  ))}
</Thread>
```

**Props:**
- `children: ReactNode` - Mesaj bileşenleri
- `className?: string` - Ek CSS sınıfları
- `...HTMLAttributes<HTMLDivElement>` - Diğer div props'ları

## 🤖 Model Yapılandırmaları

### Mevcut Modeller

```tsx
import { models } from '@repo/ai/lib/models';

// Chat modeli (GPT-4o Mini)
const chatModel = models.chat;

// Embedding modeli (text-embedding-3-small)
const embeddingModel = models.embeddings;
```

### Yeni Model Ekleme

```tsx
// lib/models.ts
export const models = {
  chat: openai('gpt-4o-mini'),
  embeddings: openai('text-embedding-3-small'),
  // Yeni modeller
  vision: openai('gpt-4-vision-preview'),
  advanced: openai('gpt-4'),
  fast: openai('gpt-3.5-turbo'),
};
```
---

# @repo/analytics - Analytics Package Kullanım Rehberi

Modern web uygulamalarında kullanıcı davranışlarını izlemek ve analiz etmek için kapsamlı rehber.

## 📋 Paket Özeti

`@repo/analytics` paketi, birden fazla analytics sağlayıcısını (PostHog, Google Analytics, Vercel Analytics) tek bir entegrasyon katmanında birleştirerek tutarlı ve güvenli analytics takibi sağlar.

### 🎯 Neden Analytics Kullanıyoruz?

#### **İş Zekası ve Karar Verme**
- **Kullanıcı Davranışı**: Kullanıcıların uygulamada hangi özellikleri kullandığını anlama
- **Conversion Tracking**: Ziyaretçi → Kayıt → Aktif Kullanıcı funnel analizi
- **Feature Adoption**: Yeni özelliklerin ne kadar benimsendiğini ölçme
- **Performance Monitoring**: Sayfa yükleme süreleri ve kullanıcı deneyimi metrikleri

#### **Ürün Geliştirme**
- **A/B Testing**: Farklı UI/UX yaklaşımlarını test etme
- **Error Tracking**: Kullanıcıların karşılaştığı hataları izleme
- **User Journey**: Kullanıcı yolculuğunu optimize etme
- **Retention Analysis**: Kullanıcı tutma oranlarını artırma

#### **Pazarlama ve Büyüme**
- **Traffic Sources**: Hangi kanallardan kullanıcı geldiğini anlama
- **Campaign Performance**: Pazarlama kampanyalarının etkinliğini ölçme
- **SEO Insights**: Organik trafik ve arama performansı
- **Geographic Analytics**: Kullanıcı dağılımı ve lokalizasyon ihtiyaçları

### 🔧 Teknoloji Stack
- **PostHog**: Ana analytics ve feature flags (v1.235.6)
- **Google Analytics 4**: Web analytics ve SEO metrikleri
- **Vercel Analytics**: Performance ve Core Web Vitals
- **Next.js Third Parties**: Optimized loading (v15.3.3)
- **Type Safety**: TypeScript + Zod validation

## 📁 Paket Yapısı

```
packages/analytics/
├── posthog/              # PostHog entegrasyonu
│   ├── client.tsx       # Client-side PostHog provider
│   └── server.ts        # Server-side PostHog instance
├── index.tsx            # Ana AnalyticsProvider
├── keys.ts              # Environment key validation
├── google.ts            # Google Analytics re-export
├── vercel.ts            # Vercel Analytics re-export
└── package.json         # Paket yapılandırması
```

## 🚀 Kurulum ve Yapılandırma

### 1. Environment Variables

```env
# .env.local
NEXT_PUBLIC_POSTHOG_KEY=phc_your_posthog_project_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Optional
```

### 2. Root Layout Entegrasyonu

```tsx
// app/layout.tsx
import { AnalyticsProvider } from '@repo/analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
```

## 🎨 Analytics Sağlayıcıları

### PostHog - Ana Analytics Platform

**Özellikler:**
- Event tracking
- User identification
- Feature flags
- Session recordings
- Heatmaps
- A/B testing

**Yapılandırma:**
```tsx
// Otomatik yapılandırma
posthog.init(posthogKey, {
  api_host: '/ingest',           // Proxy through Next.js
  ui_host: posthogHost,          // PostHog dashboard URL
  person_profiles: 'identified_only', // GDPR compliance
  capture_pageview: false,       // Manuel sayfa takibi
  capture_pageleave: true,       // Sayfa çıkış takibi
});
```

### Google Analytics 4 - Web Analytics

**Özellikler:**
- Sayfa görüntüleme takibi
- E-commerce tracking
- Conversion goals
- Audience insights
- SEO performance

### Vercel Analytics - Performance Metrics

**Özellikler:**
- Core Web Vitals
- Page load times
- Geographic distribution
- Device/browser analytics

## 🔨 Kullanım Örnekleri

### 1. Client-Side Event Tracking

```tsx
'use client';

import { useAnalytics } from '@repo/analytics/posthog/client';

export function FeatureButton() {
  const analytics = useAnalytics();

  const handleFeatureUse = async () => {
    // Track feature usage
    analytics?.capture('feature_used', {
      feature_name: 'advanced_search',
      source: 'header_button',
      user_plan: 'premium'
    });

    try {
      const result = await useFeature();
      
      // Track successful usage
      analytics?.capture('feature_success', {
        feature_name: 'advanced_search',
        result_count: result.length,
        duration_ms: Date.now() - startTime
      });
      
    } catch (error) {
      // Track errors
      analytics?.capture('feature_error', {
        feature_name: 'advanced_search',
        error: error.message,
        step: 'api_call'
      });
    }
  };

  return (
    <button onClick={handleFeatureUse} className="btn-primary">
      Advanced Search
    </button>
  );
}
```

### 2. Server-Side Event Tracking

```tsx
// app/api/users/route.ts
import { analytics } from '@repo/analytics/posthog/server';

export async function POST(request: Request) {
  const { userData } = await request.json();

  try {
    const user = await createUserInDatabase(userData);

    // Server-side event tracking
    analytics.capture({
      distinctId: user.id,
      event: 'user_registered',
      properties: {
        user_id: user.id,
        email_domain: user.email.split('@')[1],
        registration_method: userData.method,
        created_at: user.createdAt,
        api_version: 'v1',
        server_region: process.env.VERCEL_REGION
      }
    });

    return Response.json({ success: true, user });
  } catch (error) {
    // Track server errors
    analytics.capture({
      distinctId: 'anonymous',
      event: 'user_registration_error',
      properties: {
        error: error.message,
        stack: error.stack,
        request_data: userData
      }
    });

    return Response.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
```

### 3. User Identification ve Properties

```tsx
'use client';

import { useAnalytics } from '@repo/analytics/posthog/client';
import { useUser } from '@repo/auth';
import { useEffect } from 'react';

export function UserAnalyticsTracker() {
  const analytics = useAnalytics();
  const { user } = useUser();

  useEffect(() => {
    if (analytics && user) {
      // Kullanıcı kimlik doğrulama
      analytics.identify(user.id, {
        email: user.email,
        name: user.fullName,
        plan: user.subscription?.plan || 'free',
        created_at: user.createdAt,
        verified: user.emailVerified,
        // Application-specific properties
        total_projects: user.projectCount,
        preferred_language: user.language,
        timezone: user.timezone,
        account_type: user.accountType
      });

      // Set user properties for segmentation
      analytics.setPersonProperties({
        user_type: user.isBusinessAccount ? 'business' : 'individual',
        registration_source: user.registrationSource,
        last_active: new Date().toISOString(),
        feature_flags: user.enabledFeatures
      });
    }
  }, [analytics, user]);

  return null;
}
```

## Payments Sub‑Tree (Stripe vs Jetcheckout)
```mermaid
flowchart TD
    P1{Payments} -->|Global coverage| P2[Stripe]
    P1 -->|TR banks + local alt.| P3[Jetcheckout]

    P2 --> P2a[Multi‑currency, Radar, Billing]
    P2 --> P2b[Strong docs + SDKs]
    P3 --> P3a[TR bank entegrasyonları]
    P3 --> P3b[Masraf/komisyon optimizasyonu]

    P2 & P3 --> P4[Zopio payments package]
    P4 --> P5[Unified API: createPayment, webhook, refunds]
```

### Seçim Kriterleri
- **Stripe:** Küresel satış, tekrar eden ödemeler (Billing), gelişmiş fraud önleme, zengin dev deneyimi.
- **Jetcheckout:** Türkiye pazarına odak, yerel bankalar/pos’lar, komisyon & regülasyon uyumu.

### Zopio Entegrasyonu
- `packages/payments/` içinde **adapter tabanlı** tasarım: `adapters/stripe.ts`, `adapters/jetcheckout.ts`.
- Ortak arayüz: `IPaymentsAdapter` → `createPayment`, `capture`, `refund`, `verifyWebhook`.
- API Routes: `apps/api/app/api/payment/*` (create, verify, webhook).

---

## Auth Sub‑Tree (Clerk vs Zopio Auth)
```mermaid
flowchart TD
    A1{Auth} -->|Hosted/fast| A2[Clerk]
    A1 -->|Self‑host/control| A3[Zopio Auth]

    A2 --> A2a[OOB UI + MFA + Org]
    A3 --> A3a[RBAC/ABAC + Custom flows]
    A3 --> A3b[Integrate with db/users]
```

### Seçim Kriterleri
- **Clerk:** Hızlı başlama, hazır UI bileşenleri, org/SSO/MFA; düşük bakım.
- **Zopio Auth:** Tam kontrol, veri egemenliği, **RBAC/ABAC**; gelişmiş policy ihtiyacı.

### Zopio Entegrasyonu
- `packages/auth/` (çekirdek) + `packages/auth-rbac` / `packages/auth-abac`.
- Next middleware + server actions ile **session** doğrulama.
- `apps/api/app/api/user/*` uçları; `apps/app/` içinde **protected routes**.

---

## Database Sub‑Tree (NeonDB vs Turso)
```mermaid
flowchart TD
    D1{Database} -->|Managed PG| D2[NeonDB (Postgres)]
    D1 -->|Edge/low‑latency| D3[Turso (LibSQL)]

    D2 --> D2a[Strong SQL, Prisma, analytics]
    D3 --> D3a[Edge regions, sync]

    D2 & D3 --> D4[Zopio database package]
```

### Seçim Kriterleri
- **NeonDB/Postgres:** Zengin SQL/joins, olgun ekosistem, geniş raporlama; klasik OLTP/OLAP ihtiyaçları.
- **Turso/LibSQL:** Edge coğrafyası, çok düşük gecikme, hafif workload; offline‑first/edge‑heavy uygulamalar.

### Zopio Entegrasyonu
- `packages/database/` Prisma şemaları & migrations.
- Env‑driven client seçimi (`POSTGRES_URL` vs `TURSO_URL`).
- DB Studio (`devapps/dbstudio`) ve seeding komutları.

---

## Deploy Sub‑Tree (Vercel vs Docker)
```mermaid
flowchart TD
    DEP{Deploy} -->|PaaS simplicity| VERC[Vercel]
    DEP -->|Infra control| DKR[Docker + VPS/K8s]

    VERC --> VERCa[Edge Functions, ISR]
    DKR --> DKRb[Private networking, cost control]
```

### Seçim Kriterleri
- **Vercel:** Hızlı kurulum, otomatik build/preview, Edge özellikleri.
- **Docker/K8s:** Ağ/topoloji/uyumluluk üzerinde kontrol; kurumsal ağlar, private deps.

### Zopio Entegrasyonu
- `apps/app` & `apps/api` build pipelines; `turbo.json` ile cache ve task sırası.
- Dockerfile şablonları ve compose (**opsiyonel**).

---

## Observability & QA
- **Observability:** `packages/observability/` → Sentry SDK, request/trace/log hook’ları.
- **Analytics/SEO:** `packages/analytics/`, `packages/seo/`.
- **Testing:** `packages/testing/` → Vitest + Testing Library; hedef: **≥85% coverage**.
- **CI/CD:** `.github/workflows/{build,release,security}.yml` + **SonarQube Cloud** entegrasyonu.

---


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

## 💳 Payments Adapter Sözleşmesi (TypeScript)
```ts
// packages/payments/types.ts
export interface IPaymentsAdapter {
  createPayment(input: {
    amount: number;
    currency: string;
    description?: string;
    customerId?: string;
    returnUrl?: string;
    metadata?: Record<string, string>;
  }): Promise<{
    id: string;
    status: 'created' | 'requires_action' | 'succeeded' | 'failed';
    clientSecret?: string;
    redirectUrl?: string;
  }>;
  capture?(paymentId: string): Promise<void>;
  refund(
    paymentId: string,
    amount?: number
  ): Promise<{ id: string; status: 'pending' | 'succeeded' | 'failed' }>;
  verifyWebhook(signature: string, rawBody: string): {
    id: string;
    type: string;
    data: any;
  };
}
```

### Adapter Seçici (Facade)
```ts
// packages/payments/index.ts
import type { IPaymentsAdapter } from './types';
import { stripeAdapter } from './adapters/stripe';
import { jetAdapter } from './adapters/jetcheckout';

const provider = process.env.PAYMENTS_PROVIDER ?? 'stripe';
export const payments: IPaymentsAdapter =
  provider === 'jetcheckout' ? jetAdapter : stripeAdapter;
```

### Örnek API Route – Create Payment
```ts
// apps/api/app/api/payment/create/route.ts
import { NextResponse } from 'next/server';
import { payments } from '@repo/payments';

export async function POST(req: Request) {
  const body = await req.json();
  const { amount, currency = 'TRY', description, returnUrl, metadata } = body;
  const result = await payments.createPayment({
    amount,
    currency,
    description,
    returnUrl,
    metadata,
  });
  return NextResponse.json(result, { status: 201 });
}
```

### Örnek API Route – Webhook
```ts
// apps/api/app/api/payment/webhook/route.ts
import { payments } from '@repo/payments';

export async function POST(req: Request) {
  const raw = await req.text();
  const sig =
    req.headers.get('stripe-signature') ??
    req.headers.get('x-jetcheckout-signature') ??
    '';
  const event = payments.verifyWebhook(sig, raw);
  // TODO: event.type'e göre işleyin (payment_succeeded, payment_failed, vb.)
  return new Response('ok');
}
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
- **Install:** `pnpm i`
- **Dev:** `pnpm dev`  _(ya da)_  `turbo dev --filter=!storybook`
- **Test:** `pnpm test`
- **Typecheck/Lint:** `pnpm typecheck` / `pnpm lint`
- **Build:** `pnpm -w build`

## ✅ Kalite Hedefleri
- **Test Coverage:** ≥ **85%** (SonarQube Cloud kalite kapısı)
- **E2E (opsiyonel):** Playwright
- **Security:** Dependabot / `security.yml`

---

## ▶️ Next Steps (Önerilen)
- `packages/payments/adapters/jetcheckout.ts` iskeletini tamamla.
- `apps/api` için örnek escrow uçlarını (create, status, release) bağla.
- `packages/auth-{rbac,abac}` policy örneklerini ekle (ör: escrow.owner sadece kendi işlemini görsün).
- `apps/docs` içinde bu dokümanı MDX olarak yayınla ve Mermaid render’ı aç.

