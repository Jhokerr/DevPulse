export const initialResources = [
  {
    id: "1",
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "Framework CSS de clases utilitarias para diseñar interfaces modernas y responsivas directamente en el marcado.",
    category: "Frontend",
    tags: ["CSS", "UI", "Styles"],
    likes: 14,
    author: "jhon_dev"
  },
  {
    id: "2",
    title: "Express.js",
    url: "https://expressjs.com",
    description: "Framework web minimalista, rápido y flexible para Node.js, ideal para construir APIs robustas.",
    category: "Backend",
    tags: ["Node", "API", "JavaScript"],
    likes: 28,
    author: "admin"
  },
  {
    id: "3",
    title: "Vite",
    url: "https://vitejs.dev",
    description: "Herramienta de construcción de frontend de próxima generación que ofrece un servidor de desarrollo ultra rápido.",
    category: "Herramientas",
    tags: ["Tool", "Bundler", "Frontend"],
    likes: 19,
    author: "jhon_dev"
  },
  {
    id: "4",
    title: "Prisma ORM",
    url: "https://www.prisma.io",
    description: "ORM moderno para Node.js y TypeScript que facilita la conexión y el modelado de bases de datos relacionales.",
    category: "Backend",
    tags: ["DB", "SQL", "TypeScript"],
    likes: 8,
    author: "dev_master"
  },
  {
    id: "5",
    title: "Docker",
    url: "https://www.docker.com",
    description: "Plataforma de contenedores que empaqueta aplicaciones y sus dependencias para garantizar entornos idénticos de desarrollo y producción.",
    category: "DevOps",
    tags: ["Containers", "Deploy", "Tools"],
    likes: 22,
    author: "admin"
  }
];


export function cargarDatos(initialResources){
    if(localStorage.length == 0){ 
      localStorage.setItem('resources', JSON.stringify(initialResources))
    }else console.log("El localStorage ya tiene datos")
}

cargarDatos(initialResources)