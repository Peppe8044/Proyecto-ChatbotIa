## Objetivo
Desplegar `web`, `api`, `db(Postgres+pgvector)` y `n8n` en Hetzner con EasyPanel, TLS y backups automáticos.

## Tareas
- [ ] Crear `docker-compose.mvp.yml` con servicios, redes (`frontend_net`, `backend_net`) y volúmenes persistentes
- [ ] Configurar apps en EasyPanel (envs, puertos, health checks)
- [ ] Reverse proxy (Caddy/Traefik) + TLS (Let’s Encrypt)
- [ ] Backups BD (cron + retención) y **prueba de restauración**
- [ ] Monitoreo básico: `/api/health`, rotación de logs
- [ ] Documentar en `/docs/ARCHITECTURE.md` y `/docs/OPERATIONS.md`

## Criterios de aceptación
- `docker compose up` levanta todo con HTTPS activo
- Backup/restore verificados y documentados

## DoD
- Compose en repo + capturas/verificación + docs actualizadas

## Riesgos
- TLS/puertos/firewall → checklist y pruebas locales

## Dependencias
- @Arquitecto

## Estimación
L
