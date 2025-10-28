# 🚀 Fylo Landing Page - React + TypeScript + Tailwind CSS

Una landing page moderna y responsiva para Fylo, construida con React, TypeScript y Tailwind CSS. Este proyecto replica el diseño de Frontend Mentor con un enfoque en almacenamiento seguro de archivos y colaboración en equipo.

## ✨ Características

- **🎨 Diseño Fiel**: Replica exacta del diseño de Frontend Mentor
- **📱 Mobile-First**: Diseño responsivo optimizado para móviles (375px) y desktop (1440px)
- **⚡ Alto Rendimiento**: Construido con Vite para desarrollo rápido
- **🔧 TypeScript**: Tipado estático para mayor robustez y mantenibilidad
- **🎨 Tailwind CSS**: Estilos utilitarios para desarrollo ágil
- **📊 Componentes Modulares**: Arquitectura basada en componentes reutilizables
- **♿ Accesible**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario moderna
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Herramienta de construcción ultrarrápida
- **Tailwind CSS** - Framework CSS utilitario
- **PostCSS** - Procesador de CSS
- **ESLint** - Linting y formateo de código
- **Autoprefixer** - Compatibilidad cross-browser

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/ManuelManodes/landing-page-live.git
cd landing-page-live
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
Visita `http://localhost:5173` para ver la aplicación.

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter de ESLint

## 📁 Estructura del Proyecto

```
src/
├── components/              # Componentes React modulares
│   ├── header.tsx          # Header con logo y navegación
│   ├── navbar.tsx          # Barra de navegación
│   ├── hero.tsx            # Sección principal con CTA
│   ├── features.tsx        # Características del producto
│   ├── more-information.tsx # Información adicional
│   ├── testimonials.tsx    # Testimonios de usuarios
│   ├── testimonial-card.tsx # Tarjeta individual de testimonio
│   ├── button.tsx          # Componente de botón reutilizable
│   └── index.ts            # Exportaciones centralizadas
├── assets/                 # Recursos estáticos
│   └── fonts/              # Fuentes personalizadas
├── App.tsx                 # Componente principal de la aplicación
├── App.css                 # Estilos globales
├── index.css               # Variables CSS y configuración Tailwind
└── main.tsx                # Punto de entrada de la aplicación
```

## 🎨 Componentes Principales

### Header
- Logo de Fylo con navegación integrada
- Diseño limpio y profesional
- Responsive para móvil y desktop

### Hero
- Título principal sobre almacenamiento seguro
- Descripción clara del valor de Fylo
- Botón CTA "Get Started"
- Ilustración principal del producto

### Features
- Grid de características principales
- Iconos representativos de cada feature
- Diseño responsivo con Tailwind CSS

### Testimonials
- Testimonios de usuarios reales
- Tarjetas con fotos de perfil
- Diseño atractivo y confiable

### More Information
- Información adicional sobre el producto
- Sección de contacto y registro

## 🎯 Características Técnicas

- **Mobile-First Design**: Optimizado para móviles (375px) y escalado a desktop (1440px)
- **Tailwind CSS**: Utilización de clases utilitarias para estilos consistentes
- **Componentes Modulares**: Arquitectura basada en componentes reutilizables
- **TypeScript**: Tipado estático para mayor robustez del código
- **Vite**: Herramienta de construcción rápida y eficiente
- **Fuentes Personalizadas**: Integración de Raleway y Open Sans
- **Imágenes Optimizadas**: Assets optimizados para web

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
# Sube la carpeta dist/ a Vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist/ a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Actions para deploy automático
```

## 🎨 Paleta de Colores (Frontend Mentor)

### Colores Primarios
- **Navy 850**: `hsl(217, 28%, 15%)` - Fondo de intro y email sign up
- **Navy 900**: `hsl(218, 28%, 13%)` - Fondo principal
- **Navy 950**: `hsl(216, 53%, 9%)` - Fondo del footer
- **Navy 800**: `hsl(219, 30%, 18%)` - Fondo de testimonios

### Colores de Acento
- **Teal 200**: `hsl(176, 68%, 64%)` - Gradiente CTA
- **Cyan 500**: `hsl(198, 60%, 50%)` - Gradiente CTA
- **Red 500**: `hsl(0, 100%, 63%)` - Color de error

### Tipografía
- **Títulos**: Raleway (400, 700)
- **Cuerpo**: Open Sans (400, 700)
- **Tamaño base**: 14px

## 📱 Responsive Breakpoints

- **Mobile**: 375px (diseño principal)
- **Desktop**: 1440px (diseño expandido)
- **Responsive**: Adaptación fluida entre breakpoints

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **GitHub**: [@ManuelManodes](https://github.com/ManuelManodes)
- **Proyecto**: [Fylo Landing Page](https://github.com/ManuelManodes/landing-page-live)

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella!

## 🎯 Desafío Frontend Mentor

Este proyecto es una solución al desafío de Frontend Mentor: **Fylo landing page with two column layout**

- [Ver desafío original](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82138ec3a50f5h)
- [Ver solución en vivo](https://tu-demo-url.com) *(próximamente)*