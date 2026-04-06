# 💰 Finance Dashboard UI

A simple and interactive finance dashboard built using **Next.js, React (JSX), and CSS3**.
This project demonstrates frontend development skills including UI design, component structure, and state management.

---

## 🚀 Live Demo

(Add your deployed link here)

---

## 📌 Features

### 📊 Dashboard Overview

* Total Balance, Income, and Expenses summary cards
* Balance trend visualization (line chart)
* Spending breakdown (pie/donut chart)

### 💳 Transactions Section

* List of transactions with:

  * Date
  * Description
  * Category
  * Type (Income/Expense)
  * Amount
* Features:

  * Search transactions
  * Filter by category/type
  * Sort by date or amount

### 🔐 Role-Based UI (Frontend Simulation)

* **Viewer** → Can only view data
* **Admin** → Can add/edit transactions
* Role switcher implemented using dropdown

### 📈 Insights Section

* Highest spending category
* Monthly income vs expenses comparison
* Basic financial observations

---

## 🧠 Tech Stack

* **Next.js (App Router)**
* **React (JSX)**
* **CSS3 (CSS Modules)**
* **Recharts** (for charts)
* **Local state (useState)**

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
├── components/
│   ├── Header/
│   ├── SummaryCard/
│   ├── Charts/
│   ├── Transactions/
│   ├── Insights/
│   └── RoleSwitcher/
│
├── data/
│   └── mockData.js
│
├── utils/
│   └── helpers.js
│
└── styles/
    └── dashboard.module.css
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/your-username/finance-dashboard.git
```

### 2. Navigate to the project

```
cd finance-dashboard
```

### 3. Install dependencies

```
npm install
```

### 4. Run the development server

```
npm run dev
```

### 5. Open in browser

```
http://localhost:3000
```

---

## 🧩 State Management

* Managed using **React useState**
* Handles:

  * Transactions data
  * Filters and search
  * Selected user role (Admin/Viewer)

---

## 🎨 UI/UX Design

* Clean and minimal layout
* Responsive design for desktop and mobile
* Color indicators:

  * 🟢 Income
  * 🔴 Expense
* Graceful handling of empty states

---

## ✨ Optional Enhancements

* Dark mode support
* Local storage for persistence
* Export data (CSV/JSON)
* Animations and transitions

---

## 📄 Assumptions

* Data is static (mock data)
* No backend integration
* Role-based access is simulated on frontend only

---

## 🧪 Future Improvements

* API integration
* Authentication system
* Advanced analytics and reports

---

## 🙌 Author

Your Name
Frontend Developer Intern Candidate

---

## 📬 Notes

This project is built as part of a frontend assignment to demonstrate problem-solving, UI design, and frontend architecture skills.
