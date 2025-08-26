## Objetivo
Integrar la landing de v0.app al monorepo y conectar formularios a n8n.

## Tareas
- [ ] Mover landing a `apps/web` (Next.js + TS + Tailwind + shadcn/ui)
- [ ] Rutas: `/`, `/legal/privacidad`, `/legal/terminos`, `/gracias`
- [ ] Formularios: `NEXT_PUBLIC_N8N_WEBHOOK_CONTACT` y `NEXT_PUBLIC_N8N_WEBHOOK_DEMO`
- [ ] Dark mode, responsive, AA
- [ ] SEO/OG, `/api/og`, sitemap, robots
- [ ] README `/apps/web/README.md`

## Criterios de aceptación
- Formularios envían JSON a n8n y muestran toast de éxito/error
- Lighthouse ≥95 en Performance/SEO/Best/Accessibility

## DoD
- Deploy local + capturas de Lighthouse

## Riesgos
- Diferencias entornos → usar `.env.local` y documentar

## Dependencias
- @Automations (n8n)

## Estimación
M
