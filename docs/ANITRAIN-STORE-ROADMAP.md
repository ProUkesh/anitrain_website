# AniTrain Store plan

Design studio on `/store` first. Prototype only; no live payments, no supplier orders.

Website uses Next.js static export. Production Stripe webhooks and supplier secrets require a separate secure backend or a tested hosting architecture change.

Initial supplier: Printful API. Premium brand expansion: Apliiq API. Never fulfill an order until Stripe signed webhook validation succeeds and server-side pricing and print specifications are verified.

Quality gates: garment samples, accurate mockups, approved artwork, shipping and returns policies, replay-safe order processing, refunds and tracking.