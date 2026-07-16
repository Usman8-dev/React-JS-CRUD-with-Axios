# ReactJS CRUD with Axios

A lightweight and responsive frontend web application demonstrating full **CRUD (Create, Read, Update, Delete)** operations against a REST API. Built with **React.js**, **Axios**, **React Router**, and **PrimeReact** components, with form validation handled by **React Hook Form** and **Yup**.

## 🚀 Features
* **Create**: Add new users through a validated form (Add User page).
* **Read**: Fetch and display users in a searchable, sortable, paginated table.
* **Update**: Edit existing user records via a shared Add/Edit form.
* **Delete**: Remove users with a confirmation dialog before deletion.
* **Search**: Filter the user list in real time.
* **Sorting**: Sort table columns (e.g. name, username, age).
* **Pagination**: Browse large user lists in manageable pages.
* **Toast notifications**: Success/error feedback on add, edit, and delete actions.

## 🛠️ Tech Stack
* **Frontend**: React.js (Functional Components & Hooks — `useState`, `useEffect`, `useRef`)
* **Routing**: React Router (`react-router-dom`)
* **API Client**: Axios (Promise-based HTTP requests)
* **Forms & Validation**: React Hook Form + Yup (`@hookform/resolvers/yup`)
* **UI Components**: PrimeReact (`InputText`, `InputNumber`, `Button`, `Toast`, `ConfirmDialog`)
* **Styling**: Tailwind CSS (utility-first, dark theme)
* **Backend**: JSON Server (`db.json`) — a mock REST API simulating full CRUD endpoints

## 📁 Project Structure
```
src/
├── apis/
│   └── axios.js          # Axios instance pointing at the backend
├── Layout/
│   └── MainLayout.jsx     # Shared layout with Header + <Outlet />
├── Pages/
│   ├── UserList.jsx       # Table: search, sort, paginate, edit/delete
│   └── AddEditUser.jsx    # Shared form for creating and editing users
├── validations/
│   └── UserSchema.js      # Yup schema for form validation
└── App.jsx                # Routes: /, /add, /edit/:id
```

## 🌐 Live Deployment
* **Frontend**: Deployed on [Vercel](https://vercel.com)
* **Backend**: Deployed on [Railway](https://railway.app), serving `db.json` via JSON Server

> Note: The backend runs on Railway's free trial credit, which is time-limited. If the API stops responding, the backend deployment may need to be renewed or migrated — see `crud-backend/README.md` in the backend repo for details.

## ⚙️ Getting Started (Local Development)

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR-USERNAME/react-js-crud.git
   cd react-js-crud
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Point `src/apis/axios.js` at your backend (local or deployed):
   ```js
   export default axios.create({
     baseURL: "http://localhost:5000" // or your deployed backend URL
   });
   ```

4. Start the app:
   ```bash
   npm start
   ```

5. If running the backend locally, in a separate terminal:
   ```bash
   npx json-server --watch db.json --port 5000
   ```
