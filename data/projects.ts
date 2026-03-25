export interface ProjectHighlight {
  icon: string
  title: string
  description: string
}

export interface Project {
  slug: string
  number: string
  name: string
  tagline: string
  overview: string
  challenge: string
  architecture: string
  liveUrl: string
  accentColor: string
  accentTint: string
  tech: { name: string; key: string }[]
  highlights: ProjectHighlight[]
  outcome: string
}

export const projects: Project[] = [
  {
    slug: 'dairy-farm-product',
    number: '01',
    name: 'Dairy Farm Product',
    tagline: 'Sage ERP E-Commerce Platform',
    overview:
      'A production Turborepo monorepo for a UK dairy farm supplier — comprising a Next.js 15 storefront, Next.js 15 admin dashboard, and Express.js API — with full bi-directional Sage Business Cloud ERP integration and AWS ECS container deployment.',
    challenge:
      'Build a production e-commerce platform for a UK dairy supplier that synchronises in real-time with their existing Sage Business Cloud ERP system — without disrupting live business operations — while supporting both B2C customer purchases and B2B sales representative workflows in a single unified codebase.',
    architecture:
      'A Turborepo monorepo containing 3 independently deployable applications (storefront, admin, API) sharing 14 internal packages. The Express API acts as the single backend authority; both Next.js apps are pure tRPC v11 consumers. AWS ECS orchestrates 3 containerised services in eu-west-1 behind CloudFront.',
    liveUrl: 'https://dairyfarmproduct.co.uk',
    accentColor: 'rgba(99, 102, 241, 0.08)',
    accentTint: '#6366F1',
    tech: [
      { name: 'Next.js', key: 'nextjs' },
      { name: 'tRPC', key: 'trpc' },
      { name: 'Turborepo', key: 'turborepo' },
      { name: 'TypeScript', key: 'ts' },
      { name: 'Prisma', key: 'prisma' },
      { name: 'BullMQ', key: 'bullmq' },
      { name: 'AWS ECS', key: 'aws' },
      { name: 'MySQL', key: 'mysql' },
      { name: 'Stripe', key: 'stripe' },
      { name: 'Sage API', key: 'sage' },
    ],
    highlights: [
      {
        icon: 'Layers',
        title: 'Turborepo Monorepo Architecture',
        description:
          '3 deployable apps + 14 shared internal packages (@monoverse/ui, @monoverse/schemas, @monoverse/types, custom ESLint plugin). One repository, one CI pipeline, zero code duplication across applications.',
      },
      {
        icon: 'Server',
        title: 'Express API as Single Backend Authority',
        description:
          'A documented architectural rule: all business logic lives exclusively in the Express API. Both Next.js apps are pure tRPC v11 consumers. A schema change propagates as a TypeScript error all the way to the React component — no codegen, no runtime mismatch.',
      },
      {
        icon: 'RefreshCw',
        title: 'Bi-Directional Sage Business Cloud Sync',
        description:
          'Dual-flow architecture: app writes push immediately to Sage after DB save (synchronous), while Sage-originated changes reconcile via BullMQ polling jobs every 5–15 minutes. Foreign key linkage via sageContactId/sageProductId. A distributed systems problem solved at the job level, not the controller level.',
      },
      {
        icon: 'ShoppingCart',
        title: 'Sales Representative Checkout Flow',
        description:
          'A parallel Next.js App Router route allowing sales reps to place orders on behalf of customers — combining B2C storefront and B2B ERP workflows in a single codebase. No separate application, no additional infrastructure.',
      },
      {
        icon: 'Shield',
        title: 'Type-Safe Data Layer',
        description:
          'Prisma for standard queries + Kysely for complex queries that ORM abstractions handle poorly — type-safe raw SQL without unsafe string interpolation. End-to-end type safety from MySQL schema to React hook with zero runtime surprises.',
      },
      {
        icon: 'Cloud',
        title: 'AWS ECS Production Deployment',
        description:
          '3 containerised applications deployed on AWS ECS with ECR image registry, CloudFront CDN, and S3 asset storage in eu-west-1. NextAuth.js with httpOnly cookies, Sage OAuth 2.0 callback handler, and Stripe webhook HMAC-SHA256 signature verification.',
      },
    ],
    outcome:
      'A production e-commerce platform serving UK dairy farm customers — fully integrated with Sage Business Cloud ERP, deployed on AWS ECS, handling both B2C and B2B order workflows in a single type-safe codebase.',
  },
  {
    slug: 'recruited-people',
    number: '02',
    name: 'Recruited People',
    tagline: 'Recruitment Agency Portal',
    overview:
      'A production recruitment agency portal — public job board, candidate portal, recruiter portal, and full admin dashboard — built as sole developer: 67 API endpoints, 4 permission tiers, 24 database tables, ~38,000 lines of code.',
    challenge:
      'Build a complete recruitment management platform from scratch — replacing manual spreadsheet-based candidate tracking with a fully digital, compliant, and auditable pipeline that handles everything from job board to placement, with external stakeholders (line managers, referees) integrated without requiring account creation.',
    architecture:
      'Laravel 12 REST API with 4 permission tiers (admin, recruiter, candidate, public tokenised). 24 database tables. A unified AuthToken primitive handles all 5 external token flows. Application state machine enforces valid pipeline transitions at the service layer.',
    liveUrl: 'https://recruitedpeople.co.uk',
    accentColor: 'rgba(239, 68, 68, 0.08)',
    accentTint: '#EF4444',
    tech: [
      { name: 'Laravel', key: 'laravel' },
      { name: 'PHP', key: 'php' },
      { name: 'React', key: 'react' },
      { name: 'MySQL', key: 'mysql' },
      { name: 'AWS', key: 'aws' },
      { name: 'TypeScript', key: 'ts' },
    ],
    highlights: [
      {
        icon: 'Key',
        title: 'Unified AuthToken Primitive',
        description:
          'One model, five token flows. Password reset, email verification, account setup, timesheet approval, referee submission — all powered by a single auth_tokens table with a type enum. Tokens stored as SHA-256 hashes only; raw token travels exclusively in email links.',
      },
      {
        icon: 'GitBranch',
        title: 'Application State Machine',
        description:
          'ALLOWED_TRANSITIONS enforced by canTransitionTo() before every status write. Terminal states (placed, rejected, withdrawn) are immutable. Bad pipeline data is impossible at the database level, not just the UI level.',
      },
      {
        icon: 'Brain',
        title: 'Affinda AI CV Parsing',
        description:
          "Custom normaliser mapping Affinda's output schema to the application's flat data structure, cross-referencing extracted teaching subjects against an internal dictionary. Candidate onboarding time reduced by ~80%.",
      },
      {
        icon: 'Lock',
        title: 'Immutable Audit Log',
        description:
          'AdminActivityLog.save() throws a LogicException if called on an existing record. The audit trail physically cannot be altered in application code. Combined with ClamAV virus scanning on every document upload via TCP socket.',
      },
      {
        icon: 'Activity',
        title: 'Live Compliance Score',
        description:
          'compliance_score is a queryable integer, not a checklist. Filter the entire applicant pipeline by compliance completeness. DBS expiry alerts trigger 180 days before expiry via scheduled Artisan jobs.',
      },
      {
        icon: 'LinkIcon',
        title: 'Tokenised External Flows',
        description:
          'Line managers and referees operate via unique 64-character tokenised public links — no account required, fully auditable. The same token primitive handles both flows without separate infrastructure.',
      },
    ],
    outcome:
      'A production recruitment platform handling the complete hire lifecycle — from public job board to compliance-verified placement — with immutable audit trails and AI-powered candidate onboarding.',
  },
  {
    slug: 'nurserevalidate',
    number: '03',
    name: 'NurseRevalidate',
    tagline: 'NMC Revalidation SaaS',
    overview:
      'A GDPR-compliant SaaS for UK registered nurses to track NMC revalidation requirements — built solo in ~5 weeks, from VPC and RDS setup to PDF portfolio export.',
    challenge:
      'Build a GDPR-compliant healthcare SaaS in 5 weeks that helps UK registered nurses track their NMC revalidation requirements — a domain where data sensitivity, compliance, and accuracy are non-negotiable — without a team or existing infrastructure.',
    architecture:
      'Laravel SaaS on AWS (VPC, RDS, EC2) with AES-256-CBC field encryption, versioned key rotation, and PII-scrubbing middleware. A custom RevalidationGapService computes 7 independent gap dimensions with Redis caching. Stripe subscription management with webhook verification.',
    liveUrl: 'https://nurserevalidate.co.uk',
    accentColor: 'rgba(20, 184, 166, 0.08)',
    accentTint: '#14B8A6',
    tech: [
      { name: 'Laravel', key: 'laravel' },
      { name: 'PHP', key: 'php' },
      { name: 'AWS', key: 'aws' },
      { name: 'MySQL', key: 'mysql' },
      { name: 'Redis', key: 'redis' },
      { name: 'Stripe', key: 'stripe' },
    ],
    highlights: [
      {
        icon: 'TrendingUp',
        title: 'Velocity-Based Gap Analyser',
        description:
          'RevalidationGapService computes 7 independent gap dimensions, derives per-dimension velocity from the last 90 days of entries, and projects completion against the revalidation deadline. Ranked GapResult objects: severity, action, weeks-to-close. Redis-cached, write-invalidated. No competitor offers this.',
      },
      {
        icon: 'Zap',
        title: 'Query Consolidation',
        description:
          '7 separate dashboard queries → 1 MySQL conditional aggregate. Dashboard load: ~340ms → ~60ms on a t3.small. The kind of optimisation you only know to make when you understand what the ORM is generating.',
      },
      {
        icon: 'Shield',
        title: 'AES-256-CBC Field Encryption',
        description:
          'Sensitive PII encrypted at application layer via custom Eloquent cast — transparent to application code, opaque to anyone with raw database access. Not a substitute for RDS encryption; a layer above it.',
      },
      {
        icon: 'RotateCcw',
        title: 'Application Key Rotation Strategy',
        description:
          'Encrypted values stored as versioned JSON ({"v":1,"data":"..."}). KeyRotationService re-encrypts field-by-field as a resumable queued job. Both keys valid for 72 hours during rotation. Prevents the failure mode where key rotation destroys all user data.',
      },
      {
        icon: 'EyeOff',
        title: 'PII-Scrubbing Middleware',
        description:
          'Regex middleware strips NMC PINs and email addresses from log output before any line is written. Sensitive data never reaches log storage, regardless of log level.',
      },
      {
        icon: 'Trash2',
        title: 'Two-Phase GDPR Erasure',
        description:
          'Immediate soft-delete → queued hard-delete after 30-day delay. Immutable audit trail for every consent and erasure event. Correctly handles the regulatory requirement rather than the common anti-pattern of soft-deleted data that is never actually removed.',
      },
    ],
    outcome:
      'A production GDPR-compliant SaaS serving UK registered nurses — built solo in 5 weeks with end-to-end encryption, velocity-based analytics, and correct regulatory compliance implemented at every layer.',
  },
  {
    slug: 'cni-news-network',
    number: '04',
    name: 'CNI News Network',
    tagline: 'Multilingual Media Platform',
    overview:
      'A full-stack multilingual news platform (English, Urdu, Punjabi, Mirpuri with RTL rendering) replacing a legacy WordPress setup — built with Laravel 12, Next.js 14 App Router, and a 5-platform social publishing engine.',
    challenge:
      'Replace a legacy WordPress site with a custom multilingual news platform supporting RTL languages (Urdu, Punjabi, Mirpuri) alongside English — with a 5-platform automated social publishing engine, live streaming via WebSockets, and a Stripe/PayPal membership paywall.',
    architecture:
      'Laravel 12 API + Next.js 14 App Router frontend. 5 independent queue jobs (one per social platform) with per-job retry logic and exponential backoff. Laravel Reverb for WebSocket live streams. Laravel Scout + Meilisearch for full-text search. Three-stage Facebook token lifecycle managed correctly.',
    liveUrl: 'https://cninews.tv',
    accentColor: 'rgba(99, 102, 241, 0.08)',
    accentTint: '#6366F1',
    tech: [
      { name: 'Laravel', key: 'laravel' },
      { name: 'Next.js', key: 'nextjs' },
      { name: 'PHP', key: 'php' },
      { name: 'MySQL', key: 'mysql' },
      { name: 'Redis', key: 'redis' },
      { name: 'Stripe', key: 'stripe' },
      { name: 'AWS', key: 'aws' },
      { name: 'Meilisearch', key: 'meilisearch' },
    ],
    highlights: [
      {
        icon: 'Share2',
        title: 'Per-Platform Job Architecture',
        description:
          '5 independent queue jobs (Facebook, Instagram, YouTube, TikTok, Twitter) per publish event. Each has its own retry logic and exponential backoff. A TikTok outage cannot block a Facebook publish. Per-platform status tracked independently in admin UI.',
      },
      {
        icon: 'RefreshCw',
        title: 'Three-Stage Facebook Token Lifecycle',
        description:
          'Short-lived user token → long-lived token via fb_exchange_token → never-expiring Page Access Token via /me/accounts. Solved correctly so the Social Hub works 6 months after setup without re-authentication.',
      },
      {
        icon: 'Instagram',
        title: 'Instagram Async Publish Cycle',
        description:
          'POST container → poll status_code until FINISHED → POST publish. Proper polling loop with timeout and error states — not a sleep() between steps. The technically correct implementation most developers skip.',
      },
      {
        icon: 'CreditCard',
        title: 'Membership & Paywall',
        description:
          'Stripe + PayPal with webhook HMAC signature verification. Laravel Reverb WebSockets for live streams. Laravel Scout + Meilisearch full-text search. Platform-aware content formatting per destination.',
      },
      {
        icon: 'Globe',
        title: 'RTL Multilingual Architecture',
        description:
          'Native RTL rendering for Urdu, Punjabi, and Mirpuri alongside LTR English — a genuine rarity in custom-built news platforms, where most teams either use WordPress plugins or skip non-Latin languages entirely.',
      },
    ],
    outcome:
      'A production multilingual news platform replacing a WordPress site — with correct RTL support for 4 languages, an automated 5-platform social publishing engine, and live streaming for a UK South Asian news audience.',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
