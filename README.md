# SaaS Ventas 24/7 Chile — MVP

Este proyecto es un SaaS para PYMEs de Chile que vende 24/7 por WhatsApp e Instagram, con IA, scoring, promociones, dashboard, pagos locales y cumplimiento legal.

## Estructura
- `/apps/web`: Next.js (Landing + Admin)
- `/apps/api`: Node/TS API (REST/GraphQL)
- `/apps/n8n`: Flujos n8n versionados (JSON)
- `/apps/infra`: Infraestructura (compose, scripts, EasyPanel)
- `/apps/workers`: Jobs/colas (opcional)
- `/docs`: Documentación
- `/sql`: Esquema y seeds BD
- `/tests`: Pruebas e2e y API
- `/.env.example`: Variables de entorno

## Levantar en local
1. Copia `.env.example` a `.env` y ajusta variables.
2. Ejecuta:
   ```powershell
   docker compose -f docker-compose.mvp.yml up
   ```
3. Corre migraciones y seeds:
   ```powershell
   npm run db:migrate ; npm run db:seed
   ```

## Servicios
- Web: http://localhost:3000
- API: http://localhost:4000
- n8n: http://localhost:5678
- DB: localhost:5432

## MVP
- WhatsApp responde FAQs y guarda conversión.
- Scoring Cold/Warm/Hot/Hot+.
- Dashboard embudo y ventas.
- Pagos Webpay sandbox.
- n8n flujos versionados.
- Legal CL: consentimiento y endpoints legales.

## PRs por agente
Ver ARCHITECTURE.md para roadmap y detalles.
