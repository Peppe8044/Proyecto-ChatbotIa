#!/bin/bash
# Crear labels en el repositorio

gh label create "area:infra" --color 1f6feb --description "Infra & DevOps" || true
gh label create "area:backend" --color 0e8a16 --description "API & DB" || true
gh label create "area:frontend" --color 9a6700 --description "Web & UI" || true
gh label create "area:automations" --color 8957e5 --description "n8n workflows" || true
gh label create "area:payments" --color da3633 --description "Payments" || true
gh label create "area:data-ml" --color a40e26 --description "Data & ML" || true
gh label create "area:legal" --color 8250df --description "Legal & Compliance" || true
gh label create "area:qa" --color 0969da --description "QA & Testing" || true
gh label create "area:docs" --color 57606a --description "Docs" || true
gh label create "area:pm" --color bf8700 --description "Product/PM" || true

gh label create "priority:P0" --color d73a4a --description "Bloqueante" || true
gh label create "priority:P1" --color fbca04 --description "Alta" || true
gh label create "priority:P2" --color 7057ff --description "Media" || true

gh label create "status:to-do" --color afb8c1 --description "To Do" || true
gh label create "status:in-progress" --color 58a6ff --description "In Progress" || true
gh label create "status:review" --color 8B949E --description "En revisión" || true
gh label create "status:done" --color 2da44e --description "Done" || true
