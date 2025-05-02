# Next.js Pokédex App

Este proyecto es algo que siempre he querido hacer y he aprovechado esta prueba técnica para llevarlo a cabo. Se trata de una aplicación que permite explorar información sobre Pokémon. Los usuarios pueden buscar Pokémon por nombre, ver sus detalles, estadísticas y movimientos.

---

## 🚀 Features

- **Auth.js Login with Credentials** para la tarea 1
- **Search Pokémon** por nombre
- **Infinite Scroll** en la lista
- **Stats Charts** usando [react-chartjs-2](https://react-chartjs-2.js.org/)
- **Dashboard** para el detalle de un pokemon
- **Pixel Art UI responsive** Kit hecho con [Ness.css](https://nostalgic-css.github.io/NES.css/) y fuente [Pokemon Classic](https://www.dafont.com/pokemon-classic.font)
- **Debounced Search** un custom hook que siempre utilizo para la tarea 2
- **SSR, client side and streaming technique.**para la tarea 5

Dado que la PokeAPI no proporciona imágenes directamente, tuve que buscar las imágenes de Pokémon en otro lugar. Aunque la búsqueda de Pokémon se podía realizar mediante paginación, decidí implementar un scroll infinito.

---

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS, [Ness.css](https://nostalgic-css.github.io/NES.css/), [Pokemon classic font](https://www.dafont.com/pokemon-classic.font)
- **Authentication**: Auth.js (Credentials)
- **Testing**: Jest, Cypress
- **Charting**: Chart.js (via PieChart component)
- **API**: [PokeAPI](https://pokeapi.co/)

---

## 📁 Project Structure

```
cypress/                       # E2E test setup
src/
│
├── app/
│   ├── components/            # UI
│   ├── types/                 # Tipado
│   ├── utils/                 # Funciones de ayuda
│   ├── hooks/                 # Custom hooks (useDebounce, etc.)
│   ├── services/              # Llamadas a API
│   └── (auth, login, routes)
└── server/                    # Server de autenticación
(configs)                      # Archivos de configuracion
```

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Hecater88/pokedex.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file:

```env
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the Dev Server

```bash
npm run dev
```

---

## 🧪 Testing

### Unit Tests (Jest)

```bash
npm run test
```

### E2E Tests (Cypress)

```bash
npm run cypress
```

---

## Todo & Improvements

- [ ] Modo oscuro
- [ ] Añadir mas datos en el Dashboard
- [ ] Añadir tabla de tipos (este pokemon debil contra, fuerte contra)
- [ ] Mejorar accesibilidad (a11y)
