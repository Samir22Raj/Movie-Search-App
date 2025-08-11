# 🎬 React Movie Gallery App

## 📌 Project Overview
React Movie Gallery App is a modern and interactive movie browsing application built with React. Users can search for their favorite movies, view detailed information, and save movies to their favorites using local storage. The app is designed with a responsive UI and powered by **The Movie Database (TMDb) API** to provide up-to-date movie details.

---

## 🚀 Features
- 🎥 **Browse Popular Movies**: Fetches trending movies from the TMDb API.
- 🎭 **Search Functionality**: Find movies by title using dynamic search feature.
- ❤️ **Favorites List**: Add movies to a favorites list and persist them with local storage.
- ❌ **Remove from Favorites**: Easily remove movies from your favorites.
- 📝 **Movie Details**: View detailed information, including ratings, description, and release year.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop screens.
- ⚡ **Fast Performance**: Built with Vite for quick development and loading times.

---

## 🏗️ Project Structure
```
src/
 ├── components/
 │   ├── Footer.jsx
 │   ├── MovieCard.jsx
 │   ├── NavBar.jsx
 │
 ├── contexts/
 │   ├── MovieContext.jsx
 │
 ├── pages/
 │   ├── Home.jsx
 │   ├── Favorites.jsx
 │   ├── MovieDetails.jsx
 │
 ├── services/
 │   ├── api.js
 │
 ├── styles/
 │   ├── App.css
 │   ├── Home.css 
 │   ├── Favorites.css
 │   ├── Footer.css
 │   ├── index.css
 │   ├── MovieDetails.css  
 │   ├── MovieCard.css 
 │   ├── NavBar.css 
 │
 ├── utils/
 │   ├── customRound.jsx
 │   ├── Rating.jsx
 │   ├── slugify.jsx 
 │
 ├── App.jsx
 ├── main.jsx
```

---

## 🔧 Installation & Setup
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```sh
git clone https://github.com/Samir22Raj/Movie-Search-App.git
cd react-movie-gallery-app
```

### Install Dependencies
```sh
npm install
```

### Run the Project
```sh
npm run dev
```
The app will be available at `http://localhost:5173/`.

### Build for Production
```sh
npm run build
```

### Lint the Code
```sh
npm run lint
```

## 🛠️ Technologies Used
- **React 19** - Component-based UI
- **React Router 7** - Navigation and routing
- **TMDb API** - Fetches movie data dynamically
- **Bootstrap Icons** - Icons for UI elements
- **Vite** - Fast development and build tool
- **LocalStorage** - Saves and persists favorite movies
- **ESLint** - Code quality and linting
- **React Hooks** - `useState`, `useEffect`, and `useContext` for state management

---

## 🔗 API Documentation
- **TMDb API:** [https://api.themoviedb.org](https://api.themoviedb.org)
- **Getting Started Guide:** [https://developer.themoviedb.org/docs/getting-started](https://developer.themoviedb.org/docs/getting-started)

---

## 📜 Meta Tags (SEO)
```html
<meta name="description" content="Discover and save your favorite movies with React Movie Gallery App by Mahmud Alam. Browse, search, and explore an extensive collection of movies with a smooth UI.">
<meta name="keywords" content="Movie Gallery, movie app, TMDb API, movie search, film collection, favorite movies">
<meta name="author" content="Samir Rajkarnikar">
<meta name="language" content="English">
<meta name="robots" content="index, follow">
```
