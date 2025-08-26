## Objetivo
Checkout Webpay sandbox y webhook idempotente que actualiza órdenes.

## Tareas
- [ ] Servicio `payments` en `/apps/api`
- [ ] `POST /orders/checkout` → crea transacción y retorna `url/token`
- [ ] `POST /webhooks/webpay` → valida firma, actualiza `orders.status`
- [ ] Idempotencia por `transaction_id`
- [ ] Tests: aprobado, rechazado, expirado
- [ ] Docs en `/docs/PAYMENTS.md`

## Criterios de aceptación
- Flujo completo (sandbox) → `orders.status=paid`
- Logs con `requestId`, sin datos sensibles

## DoD
- Tests + evidencia (capturas/video)

## Riesgos
- Firma/seguridad → validar headers oficiales, QA temprano

## Dependencias
- @Backend, @QA

## Estimación
L
