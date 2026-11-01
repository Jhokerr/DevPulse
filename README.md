DevPulse 🚀

Plataforma colaborativa donde los desarrolladores pueden descubrir, compartir y organizar recursos web de alta calidad.

DevPulse es una aplicación web full-stack en evolución constante diseñada para la comunidad de desarrolladores y entusiastas del software. Permite registrarse, compartir herramientas, votar por recursos valiosos, filtrar categorías y gestionar tu propio perfil de usuario.

🏗️ Estado del Proyecto y Hoja de Ruta (Roadmap)

Este proyecto adopta una arquitectura evolutiva, migrando progresivamente a través de distintas capas tecnológicas:

[x] Fase 1 (MVP Actual): HTML5, CSS3 Modular, JavaScript (ES6+ Vanilla) y localStorage.

[ ] Fase 2: JavaScript Modular, Git Flow avanzado.

[ ] Fase 3: Migración del Frontend a React + Vite.

[ ] Fase 4: Desarrollo del Backend / API REST con Node.js + Express.

[ ] Fase 5: Persistencia de datos relacional con PostgreSQL.

[ ] Fase 6: Tipado estático e integración completa con TypeScript.

🌟 Funcionalidades del MVP

Autenticación: Registro e inicio de sesión de usuarios (simulado en localStorage).

Feed de Recursos: Visualización de tarjetas de recursos compartidos por la comunidad.

Gestión CRUD: Crear nuevos recursos con descripción, tags y URL, así como eliminar publicaciones propias.

Filtros e Interactividad: Buscador en tiempo real por palabra clave y filtrado interactivo mediante el menú lateral por categorías.

Perfil de Usuario: Sección personalizada para gestionar tus publicaciones y datos personales.

🛠️ Estructura del Proyecto

devpulse/
├── assets/
│   ├── css/          # Estilos modulares (variables, layout, componentes)
│   ├── js/           # Módulos de JavaScript (auth, storage, ui, resources)
│   └── images/       # Recursos multimedia e íconos
├── index.html        # Página principal (Dashboard)
├── login.html        # Vista de acceso e inicio de sesión
└── profile.html      # Perfil de usuario


🚀 Instalación y Uso Local

Clona este repositorio:

git clone https://github.com/tu-usuario/devpulse.git


Navega al directorio del proyecto:

cd devpulse


Abre el proyecto:
Abre el archivo index.html en tu navegador o utiliza una extensión de servidor local como Live Server en VS Code.

👤 Autor

Jhon Torres - Desarrollo e Implementación - GitHub

📄 Licencia

Este proyecto es parte de un caso de estudio y portafolio personal.