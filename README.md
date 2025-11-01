# 🍽️ Planificador de Menú Semanal

Aplicación web para planificar tus comidas semanales y generar listas de la compra.

## Características

- ✅ Planificación de desayuno, comida y cena para toda la semana
- ✅ 30 opciones personalizables para cada tipo de comida (desayuno, comida, cena)
- ✅ Interfaz intuitiva con cards clickeables
- ✅ Guardado automático en localStorage
- ✅ Vista de impresión con tabla semanal
- ✅ Generador automático de lista de la compra
- ✅ Diseño responsive para móvil y desktop
- ✅ Búsqueda de comidas por nombre

## Cómo usar

### Opción 1: Con Docker (Recomendado)

1. **Usando la tarea de VSCode:**
   - Presiona `Ctrl+Shift+B` o `Ctrl+Shift+P` > "Tasks: Run Task" > "Docker: Start"
   - Abre http://localhost:5173 en tu navegador

2. **Usando terminal:**
   ```bash
   docker-compose up --build
   ```

### Opción 2: Sin Docker

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abre http://localhost:5173 en tu navegador

## Personalizar los menús

Edita el archivo `src/data/menuOptions.js` para añadir tus propias opciones de menú. Solo necesitas completar las 30 opciones para cada categoría:

```javascript
export const menuOptions = {
  desayuno: [
    {
      id: 'd1',
      nombre: 'Tu opción',
      ingredientes: ['Ingrediente 1', 'Ingrediente 2', '...']
    },
    // ... añade hasta 30 opciones
  ],
  comida: [
    // ... 30 opciones
  ],
  cena: [
    // ... 30 opciones
  ]
}
```

## Funcionalidades

### Planificar el menú
1. Haz clic en cualquier casilla de comida
2. Se abrirá un modal con las opciones disponibles
3. Usa la barra de búsqueda para filtrar
4. Haz clic en una card para seleccionar
5. Haz clic en la ✕ para eliminar una selección

### Imprimir
1. Completa tu planificación semanal
2. Haz clic en "Ver e Imprimir Menú"
3. Verás la tabla semanal y la lista de la compra
4. Haz clic en "🖨️ Imprimir" o usa Ctrl+P

### Lista de la compra
- Se genera automáticamente basándose en los ingredientes
- Muestra cuántas veces necesitas cada ingrediente
- Incluye checkboxes para marcar mientras compras

## Estructura del proyecto

```
src/
├── components/
│   ├── WeeklyPlanner.jsx      # Planificador principal
│   ├── WeeklyPlanner.css
│   ├── MealSelector.jsx        # Modal de selección
│   ├── MealSelector.css
│   ├── PrintView.jsx           # Vista de impresión
│   └── PrintView.css
├── data/
│   └── menuOptions.js          # Base de datos de menús
├── App.jsx                     # Componente principal
├── App.css
├── main.jsx
└── index.css
```

## Tecnologías

- React 19
- Vite 7
- CSS3 (sin librerías externas)
- Docker

## Licencia

Proyecto personal - Uso libre
