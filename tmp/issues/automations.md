## Objetivo
Recibir formularios desde la landing, persistir leads y notificar.

## Tareas
- [ ] Workflow `contact_inbound.json`:
  - Webhook (POST JSON)
  - Validar campos
  - Insert `customers` + `leads(state='Cold')`
  - Notificación Slack/Email
  - Respuesta 200 con `lead_id`
- [ ] `demo_inbound.json` análogo
- [ ] Reintentos + idempotencia (`email+timestamp`)
- [ ] Versionar en `/apps/n8n/` + README

## Criterios de aceptación
- Requests desde `apps/web` llegan a n8n
- Inserciones correctas en Postgres

## DoD
- Flujos versionados + prueba `curl` documentada

## Riesgos
- Validación/seguridad → header secreto + rate limit

## Dependencias
- @Backend, @Frontend

## Estimación
M
