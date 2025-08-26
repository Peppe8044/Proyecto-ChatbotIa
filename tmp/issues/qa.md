## Objetivo
Asegurar calidad del MVP con pruebas API/UI/e2e y pagos sandbox.

## Tareas
- [ ] `/tests/UAT.md` con escenarios
- [ ] Tests API (status/contratos)
- [ ] Playwright e2e:
  - Landing → enviar contacto → verificar webhook (simulado)
  - Pago Webpay sandbox (mock si aplica)
- [ ] CI: ejecutar tests en PR

## Criterios de aceptación
- CI verde en PRs principales
- Evidencia (capturas/logs) adjunta

## DoD
- Pruebas reproducibles local/CI

## Riesgos
- Flakiness → fixtures y esperas explícitas

## Dependencias
- @Frontend, @Backend, @Payments

## Estimación
M
