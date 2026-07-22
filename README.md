# Brief de Proyecto — Sitio Web Grupo PIREEP

## 1. Tipo de proyecto

**Landing page corporativa** (sitio de una sola página) para una empresa industrial B2B. El objetivo es generar confianza inmediata en clientes corporativos/industriales y derivar contacto (teléfono, correo o formulario) para cotizaciones.

El desarrollador trabajará sobre una **plantilla base de HTML ya existente**, para la cual ya se entregó un prompt inicial de adaptación al negocio. **Este documento no define ni sugiere la estructura de secciones de la página** — esa estructura ya la define la plantilla base y debe respetarse tal cual.

---

## 2. Información del negocio

Extraída de los archivos en `imagenes/` (logo, flyers y fotografías de proyectos ejecutados) y de la información complementaria proporcionada.

- **Nombre comercial:** Grupo PIREEP
- **Razón social:** Pisos de Resina Epóxica S.A. de C.V.
- **Tagline / posicionamiento:** "Tecnología en Recubrimientos Industriales"
- **Descripción del negocio:** Empresa especializada en pisos de resina epóxica y soluciones de mantenimiento industrial. Transforma espacios industriales (plantas alimenticias, farmacéuticas, bodegas, cuartos fríos, áreas de producción) con recubrimientos de alta tecnología, resistencia química/mecánica, higiene y acabados de fácil mantenimiento y calidad certificada para la industria.

### Servicios y productos (consolidado de ambos flyers)

**Pisos de:**
- Resina Epóxica
- Uretano Cementicio
- Poliuretanos / Pintura de Poliuretano
- Poliurea Pura
- Espuma de Poliuretano
- Ucrete
- Hojuela
- Cuarzo

**Servicios de:**
- Cancelería Sanitaria
- Pinturas
- Trabajos Generales

### Datos de contacto

| Dato | Valor |
|---|---|
| Teléfono | 472 245 3157 |
| Correo (contacto principal) | epoxicosdemexico.industrial@hotmail.com |
| Correo (alterno) | pisosindustrialesgrupopireep@gmail.com |
| Dirección | C. Río Tuxpan 15, Fracc. Valle de San José, Silao, Guanajuato |
| Facebook | https://www.facebook.com/share/14sg9qGdyVU/ |

### Diferenciadores / mensajes clave a comunicar

- Alta resistencia química y mecánica
- Acabados de fácil mantenimiento
- Calidad certificada para la industria
- Experiencia comprobada en proyectos industriales de gran escala (plantas de producción, cuartos fríos, bodegas, áreas sanitarias)

---

## 3. Branding

### Paleta de colores

Colores extraídos por muestreo directo de píxeles del logo y los flyers oficiales (valores HEX reales, no aproximados):

| Uso | Color | HEX |
|---|---|---|
| Rojo corporativo (color primario de marca) | 🟥 | `#CD090A` |
| Gris carbón / antracita (texto y fondos oscuros) | ⬛ | `#3C4049` |
| Gris metálico (acabado "acero cepillado" del logo) | ⬜ | `#A8A7A5` |
| Gris metálico claro (brillo/highlight del logo) | ⬜ | `#D4D4D2` |
| Gris claro (fondos secundarios, íconos) | ⬜ | `#BEC0C2` |
| Blanco | ⬜ | `#FFFFFF` |

**Acento opcional (referencia de producto):** en las fotografías de proyectos reales, los pisos epóxicos instalados usan un azul intenso característico (`#276493` aprox.). Puede usarse como acento puntual (ej. hover states, íconos, detalles) para conectar visualmente con el producto real, pero **no reemplaza al rojo como color primario de marca**.

El logo tiene un efecto metálico tipo "acero cepillado" (gradiente de gris oscuro a gris claro con reflejos). Al implementarlo en CSS, considerar reproducir ese efecto con un gradiente en vez de un gris plano, para mantener la sensación premium/industrial del logo original.

### Tipografía sugerida

- **Títulos / impacto (headings):** una tipografía sans-serif bold, condensada e industrial que dialogue con el wordmark del logo — por ejemplo *Archivo Black*, *Oswald* o *Anton*.
- **Subtítulos / detalles editoriales:** los flyers oficiales usan una serif elegante para listas y subtítulos (ej. "Pisos de:", "Servicios de:"), lo cual da un contraste premium frente al peso del heading. Replicar ese contraste con una serif como *Playfair Display* o *Georgia*.
- **Texto de cuerpo / UI:** una sans-serif limpia y legible tipo *Inter*, *Roboto* o *Montserrat*.

### Identidad visual

Marca industrial de alta tecnología con acabado metálico (acero cepillado), acentos en rojo intenso sobre fondos blancos/grises. La estética debe transmitir precisión, solidez y calidad certificada — no un negocio artesanal, sino una operación industrial seria y tecnológica.

---

## 4. Estilo visual obligatorio

El sitio debe manejar, sin excepción:

- Estilo **premium, enterprise y corporativo de marca**.
- Nivel **big tech**: elegante y a la vez minimalista.
- Uso consistente de la paleta de colores y tipografía definidas en la sección 3, evitando saturar la página de rojo — usarlo como acento de impacto, no como color de fondo dominante.

---

## 5. Efectos y animaciones requeridos

El desarrollador debe incluir:

- **Efectos visuales y animaciones de scroll** (reveal on scroll, parallax sutil, transiciones al hacer scroll, etc.).
- **Pantalla de carga (preloader)** con spinner + logo del negocio, antes de mostrar el contenido de la página.
- **Animaciones en el título del hero**: efecto máquina de escribir, cambio de color en las letras, u otros efectos tipográficos que refuercen la sensación premium/tecnológica de la marca.

---

## 6. Instrucciones sobre assets

- El **logo** se encuentra en `imagenes/logo.jpeg` pero viene **con fondo blanco**: el desarrollador debe removerle el fondo (dejarlo en PNG/SVG transparente) antes de usarlo en el sitio.
- La carpeta `imagenes/` contiene además **fotografías reales de proyectos ejecutados** (instalación de pisos epóxicos en plantas industriales, cuartos fríos, bodegas y áreas sanitarias). Estas fotografías deben usarse como material fotográfico legítimo del negocio (evidencia de trabajo real) donde la plantilla lo requiera — optimizarlas/comprimirlas antes de subirlas para no afectar el rendimiento de carga del sitio.
- Los dos flyers (`info.jpeg` y la imagen "NUESTROS SERVICIOS") contienen la información de servicios y contacto ya consolidada en la sección 2 de este documento — no es necesario reinterpretarlos, ya están volcados aquí.

---

## 7. Nota para el desarrollador

Puedes **iterar sobre el proyecto usando Claude Code**, dándole instrucciones las veces que sea necesario hasta lograr el resultado deseado. No es necesario acertar todo a la primera — ajusta, corrige y refina con Claude en el camino.

---

## 8. Checklist de desarrollo

- [ ] Adaptar la plantilla base con la información del negocio (sección 2 de este README).
- [ ] Remover el fondo del logo (`imagenes/logo.jpeg`) y exportarlo en formato transparente.
- [ ] Aplicar la paleta de colores oficial (HEX de la sección 3).
- [ ] Aplicar la tipografía sugerida (headings, subtítulos y cuerpo).
- [ ] Integrar datos de contacto (teléfono, correos, dirección, Facebook).
- [ ] Listar todos los servicios/productos consolidados en la sección 2.
- [ ] Implementar el preloader con spinner + logo.
- [ ] Implementar animaciones de scroll en la página.
- [ ] Implementar animación del título del hero (typewriter / cambio de color / efecto tipográfico).
- [ ] Incorporar y optimizar las fotografías reales de proyectos desde `imagenes/`.
- [ ] Verificar que el resultado final transmita un estilo premium, enterprise y minimalista de nivel big tech.
- [ ] Revisar el sitio en escritorio y móvil antes de entregar.
- [ ] Iterar con Claude Code hasta alcanzar el resultado deseado.
