## Objetivo
API Node/TS con Postgres (+pgvector), esquema base y endpoints mínimos.

## Tareas
- [ ] Inicializar `/apps/api` (Express/Fastify + TS)
- [ ] Esquema SQL: `products`, `customers`, `conversations`, `messages`, `leads`, `orders`, `promotions`, `events`, `consent_logs` (+ `pgvector`)
- [ ] Seeds mínimos en `/sql/seeds.sql`
- [ ] Endpoints:
  - [ ] `GET /health`
  - [ ] `GET /products`
  - [ ] `POST /leads` (valida consentimiento)
  - [ ] `POST /orders` (borrador)
  - [ ] `POST /webhooks/webpay` (stub)
- [ ] Logging estructurado (pino/winston) + `requestId`
- [ ] Validación DTO (zod/joi) y manejo de errores
- [ ] README `/apps/api/README.md`

## Criterios de aceptación
- Tests básicos (200/4xx)
- Seeds cargados y `GET /products` operativo

## DoD
- API corre local, CI verde, docs actualizadas

## Riesgos
- Diseño esquema → revisión con @Arquitecto

## Dependencias
- @QA, @Payments

## Estimación
L
