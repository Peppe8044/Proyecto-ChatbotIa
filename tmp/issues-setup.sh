#!/bin/bash
# Crear issues iniciales con GitHub CLI

gh issue create -t "[Infra] Stack MVP con Docker + EasyPanel + TLS + Backups" \
  -b "$(cat tmp/issues/infra.md)" -l "area:infra,priority:P0,status:to-do" -a "@devops"

gh issue create -t "[Backend] API base + esquema Postgres + endpoints iniciales" \
  -b "$(cat tmp/issues/backend.md)" -l "area:backend,priority:P0,status:to-do" -a "@backend"

gh issue create -t "[Frontend] Integrar landing v0.app en /apps/web + formularios → n8n" \
  -b "$(cat tmp/issues/frontend.md)" -l "area:frontend,priority:P0,status:to-do" -a "@frontend"

gh issue create -t "[Automations] Flujos n8n: contact/demo → persistir lead + notificación" \
  -b "$(cat tmp/issues/automations.md)" -l "area:automations,priority:P1,status:to-do" -a "@automations"

gh issue create -t "[Payments] Integración Webpay (sandbox) + webhook → orden" \
  -b "$(cat tmp/issues/payments.md)" -l "area:payments,priority:P0,status:to-do" -a "@payments"

gh issue create -t "[Data/ML] Baseline scoring Cold/Warm/Hot/Hot+]" \
  -b "$(cat tmp/issues/data-ml.md)" -l "area:data-ml,priority:P1,status:to-do" -a "@data-ml"

gh issue create -t "[Legal] Privacidad + Términos + consentimiento + endpoints" \
  -b "$(cat tmp/issues/legal.md)" -l "area:legal,priority:P1,status:to-do" -a "@legal"

gh issue create -t "[QA] Plan de pruebas + e2e mínimos (Playwright) + pagos" \
  -b "$(cat tmp/issues/qa.md)" -l "area:qa,priority:P0,status:to-do" -a "@qa"

gh issue create -t "[Docs] ARCHITECTURE.md, OPERATIONS.md, API.md, CHANGELOG.md" \
  -b "$(cat tmp/issues/docs.md)" -l "area:docs,priority:P1,status:to-do" -a "@tech-writer"

gh issue create -t "[PM] Tablero, milestones, KPIs y cadencia" \
  -b "$(cat tmp/issues/pm.md)" -l "area:pm,priority:P1,status:to-do" -a "@pm-owner"
