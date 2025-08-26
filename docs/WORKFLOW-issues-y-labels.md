# Workflow — Creación de labels e issues (Sprint 0)

Este procedimiento estandariza la creación de **labels** e **issues** con GitHub CLI y deja el tablero listo para trabajar.

## Requisitos
- GitHub CLI instalado y autenticado:
  ```bash
  gh auth login
  ```

Scripts generados:

- tmp/labels-setup.sh
- tmp/issues-setup.sh
- Cuerpos de issues en tmp/issues/*.md

---

### 1) Sustituir usuarios en el script de issues

Edita tmp/issues-setup.sh y reemplaza los placeholders por los GitHub handles reales:

@devops=@<usuario-devops>
@backend=@<usuario-backend>
@frontend=@<usuario-frontend>
@automations=@<usuario-automations>
@payments=@<usuario-payments>
@data-ml=@<usuario-data-ml>
@legal=@<usuario-legal>
@qa=@<usuario-qa>
@tech-writer=@<usuario-tech-writer>
@pm-owner=@<usuario-pm>

---

### 2) Crear labels e issues

Ejecuta, en este orden:

sh tmp/labels-setup.sh
sh tmp/issues-setup.sh

Si algún label ya existe, el script continuará.
Si un gh issue create falla, reejecuta solo ese comando.

---

### 3) Obtener los IDs creados

```
gh issue list --limit 20 --json number,title,assignees,labels
```

---

### 4) Actualizar el Issue Maestro (Sprint 0)

En el issue “Sprint 0 — Issues iniciales”, agrega el checklist con los IDs reales:

 Infra → #NNN [Infra] Stack MVP con Docker + EasyPanel + TLS + Backups
 Backend → #NNN [Backend] API base + esquema Postgres + endpoints iniciales
 Frontend → #NNN [Frontend] Integrar landing v0.app en /apps/web + formularios → n8n
 Automations (n8n) → #NNN [Automations] Flujos n8n: contact/demo → persistir lead + notificación
 Payments → #NNN [Payments] Integración Webpay (sandbox) + webhook → orden
 Data/ML → #NNN [Data/ML] Baseline scoring Cold/Warm/Hot/Hot+]
 Legal → #NNN [Legal] Privacidad + Términos + consentimiento + endpoints
 QA → #NNN [QA] Plan de pruebas + e2e mínimos (Playwright) + pagos
 Docs → #NNN [Docs] ARCHITECTURE.md, OPERATIONS.md, API.md, CHANGELOG.md
 PM → #NNN [PM] Tablero, milestones, KPIs y cadencia

---

### 5) Tablero

Mover cada tarjeta a To Do → In Progress.
Verificar que el responsable está asignado.
Aplicar labels: area:*, priority:*, status:in-progress.

---

### 6) PR de cierre

Abrir un PR que incluya:
- docs/CHANGELOG.md con la entrada Sprint 0 — Issues creados (IDs y responsables).
- docs/WORKFLOW-issues-y-labels.md.
- Captura del tablero con las tarjetas en “In Progress”.

---

### 7) Troubleshooting

Auth: gh auth status / gh auth login.
Permisos: el repo debe permitir creación de issues/labels.
PowerShell: usar sh tmp/labels-setup.sh y sh tmp/issues-setup.sh.

---

## 📄 Contenido base para `docs/CHANGELOG.md`

```markdown
# CHANGELOG

## Sprint 0 — Issues creados (YYYY-MM-DD)
- Infra → #NNN
- Backend → #NNN
- Frontend → #NNN
- Automations (n8n) → #NNN
- Payments → #NNN
- Data/ML → #NNN
- Legal → #NNN
- QA → #NNN
- Docs → #NNN
- PM → #NNN

**Notas:**
- Labels creados: `area:*`, `priority:*`, `status:*`.
- Issues asignados y tarjetas movidas a **In Progress**.
- Próximo paso: ejecutar roadmap del Sprint 0.
```
