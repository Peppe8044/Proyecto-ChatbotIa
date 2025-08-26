## Objetivo
Baseline de scoring con features mínimas y umbrales iniciales.

## Tareas
- [ ] Definir features: nº mensajes, latencia, sentimiento, keywords, RFM
- [ ] Dataset sintético mínimo
- [ ] Entrenar baseline (logística/XGBoost)
- [ ] Umbrales: Cold <0.35, Warm 0.35–0.65, Hot 0.65–0.85, Hot+ ≥0.85
- [ ] Job/endpoint para actualizar `leads.state`
- [ ] Monitoreo simple de deriva (hist distribuciones) + `/docs/SCORING.md`

## Criterios de aceptación
- `leads.state` se actualiza y se refleja en dashboard

## DoD
- Código reproducible + notas técnicas

## Riesgos
- Pocos datos reales → recalibrar con producción

## Dependencias
- @Backend, @QA

## Estimación
M
