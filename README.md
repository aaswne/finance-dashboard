# 💰 Finance Dashboard UI

A modern and interactive finance dashboard built using **Next.js, React (JSX), and CSS3**.  
This project highlights frontend development skills such as responsive UI design, reusable component architecture, chart integration, and local state management.

---

## 📌 Features

### 📊 Dashboard Overview

- Summary cards for **Total Balance**, **Income**, and **Expenses**
- Balance trend visualization using a **line chart**
- Spending distribution displayed with a **pie/donut chart**

### 💳 Transactions Section

- Transaction list with:
  - Date
  - Description
  - Category
  - Type (**Income** / **Expense**)
  - Amount

- Functionalities include:
  - Search transactions
  - Filter by category or type
  - Sort by date or amount

### 🔐 Role-Based UI (Frontend Simulation)

- **Viewer** → Can only view financial data
- **Admin** → Can add and edit transactions
- Role switching is implemented through a dropdown selector

### 📈 Insights Section

- Highest spending category
- Monthly income vs expense comparison
- Basic financial insights and observations

---

## 🧠 Tech Stack

- **Next.js (App Router)**
- **React (JSX)**
- **CSS3 (CSS Modules)**
- **Recharts**
- **React useState**

---

## 📁 Folder Structure

```bash
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
