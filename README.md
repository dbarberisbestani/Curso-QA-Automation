# QA-automation 2026
Curso de XAcademy - QA automation Pruebas
## README

Tablero de Trello: https://trello.com/invite/b/6a171101eb654e1e90a7c273/ATTIb3b85fc1a0293a5a9549f41c6e8e42acFD275371/xacademy-qa-automation-diego-barberis

### QA Automation — Cypress (Technology with Purpose by Santex) 🚀🛠️

Breve descripción
- Repositorio para almacenar ejemplos, ejercicios y recursos de Cypress orientados a aprender lo esencial de QA Automation siguiendo los principios de "Technology with Purpose" de Santex. 🎯

Estructura sugerida del repositorio 📁
- /cypress
  - /integration — pruebas de ejemplo agrupadas por funcionalidad 🧪
  - /fixtures — datos de prueba (JSON) 🗂️
  - /support — comandos personalizados y configuración global ⚙️
  - /plugins — hooks y configuración de plugins 🔌
- /docs — notas, guías rápidas y referencias 📚
- /scripts — scripts útiles (ej.: instalación, ejecución en CI) 🧰
- cypress.json — configuración de Cypress 📝
- package.json — dependencias y scripts npm 📦
- README.md — este archivo 📝

Requisitos ✅
- Node.js >= 16 🟢
- npm o yarn 🧶
- Cypress (la versión está en package.json) 🧪

Instalación rápida ⬇️
1. Clonar el repositorio
   ```
   git clone <url-del-repo>
   cd <nombre-del-repo>
   ```
2. Instalar dependencias
   ```
   npm install
   ```
   o
   ```
   yarn
   ```

Comandos disponibles (ejemplos) ▶️
- Abrir UI interactiva de Cypress:
  ```
  npx cypress open
  ```
- Ejecutar pruebas en modo headless:
  ```
  npx cypress run
  ```
- Ejecutar pruebas en un spec específico:
  ```
  npx cypress run --spec "cypress/integration/mi-spec.cy.js"
  ```

Convenciones y buenas prácticas ✅🧭
- **Estructura clara:** un spec por característica o flujo crítico. 📂  
- **Nombres descriptivos:** usar formato snake-case o kebab-case para archivos. 🔤  
- **Reutilización:** mover datos comunes a fixtures y comandos a cypress/support/commands.js ♻️  
- **Selectores:** preferir data-* attributes (ej.: data-cy="login-button") para estabilidad. 🔍  
- **Tests independientes:** cada test debe poder ejecutarse sin orden específico. 🧩  
- **Esperas:** evitar waits fijos; usar comandos de espera implícita/esperas por elementos. ⏳  
- **Assertions claras:** verificar efectos visibles (UI, API, DB si aplica). ✔️

Ejemplos incluidos 🧩
- test-login.cy.js — flujo de login válido y casos de error 🔐
- test-form.cy.js — validación de formulario y mensajes de error 📝
- api-intercept.cy.js — uso de cy.intercept para stubs y control de respuestas 🔁

Integración continua (ejemplo) ⚙️📈
- GitHub Actions (workflow básico):
  - Instalar dependencias
  - Ejecutar pruebas headless con npx cypress run
- Incluir badges de build y cobertura (si aplica) 🛡️

Recursos y aprendizaje 📚✨
- Documentación oficial de Cypress 📖
- Buenas prácticas de testing (estructuración de tests, estrategia de mocks) 🛠️
- Conceptos de QA Automation: pruebas end-to-end, integración, stubbing, fixtures, flaky tests y mitigación 🔬

Contribuir 🤝
- Abrir issues para bugs o propuestas de mejoras. 🐞
- Hacer pull requests pequeños y descriptivos. 🔁
- Seguir el código de conducta del proyecto (agregar uno si es necesario). 📜

Licencia 📝
- Añadir la licencia que prefieras (ej.: MIT). Ejemplo:
  ```
  LICENSE: MIT
  ```

Contacto 📬
- Agregar medio de contacto o referencia a Santex para preguntas o alineación con "Technology with Purpose". 🤝

Notas finales 🧠
- Este repositorio está pensado como un sandbox educativo: iterar, romper cosas y aprender buenas prácticas de QA Automation con Cypress. 💡🧪
