# 🎄 Derechos con Dignidad — Donación segura en Cotopaxi

Plataforma web de la campaña navideña **contra la mendicidad en Cotopaxi, Ecuador**.

Cada diciembre, familias de comunidades rurales se trasladan a las vías y ciudades a pedir caridad, exponiéndose (sobre todo niños y adultos mayores) a accidentes y riesgos. Entregar donaciones en la vía pública perpetúa esa dinámica y es peligroso para todos.

Este sitio propone la alternativa: **donar directamente en las comunidades, en puntos seguros y organizados**, para que la ayuda llegue con dignidad y sin poner a nadie en riesgo.

## ¿Qué ofrece?

- 📍 **Mapa interactivo** (Leaflet) con los puntos de donación segura en las comunidades de Cotopaxi — con búsqueda, geolocalización y detalle de cada punto.
- 🏘️ **Información de contacto** de cada comunidad para coordinar la entrega de donaciones.
- 📖 **Contenido de sensibilización** sobre por qué la donación en la vía pública hace daño y cómo ayudar mejor.

## Stack

| Capa | Tecnología |
| --- | --- |
| UI | React 18 + Vite |
| Estilos | Tailwind CSS + Material UI + Animate.css |
| Mapa | Leaflet (react-leaflet + leaflet-geosearch) |
| Routing | React Router 6 |
| Deploy | Netlify |

## Desarrollo local

```bash
yarn        # instalar dependencias
yarn dev    # levantar en modo desarrollo (vite --host)
yarn build  # build de producción
```

---

Proyecto con propósito social 💜 — construido por [David Constante](https://github.com/DavidConstante).
