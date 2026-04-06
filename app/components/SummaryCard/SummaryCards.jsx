"use client";

import "./SummaryCards.css";

export default function SummaryCards({ transactions }) {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const expenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const balance = income - expenses;

  const cards = [
    {
      title: "Total Balance",
      amount: `₹${balance.toLocaleString()}`,
      note: "Live total",
      type: "balance",
    },
    {
      title: "Income",
      amount: `₹${income.toLocaleString()}`,
      note: "Live total",
      type: "income",
    },
    {
      title: "Expenses",
      amount: `₹${expenses.toLocaleString()}`,
      note: "Live total",
      type: "expense",
    },
  ];

  return (
    <section className="summary-section">
      {cards.map((card) => (
        <div className={`summary-card ${card.type}`} key={card.title}>
          <div className="card-top">
            <p className="card-title">{card.title}</p>
            <span className="card-icon">
              {card.type === "balance" && "💳"}
              {card.type === "income" && "📈"}
              {card.type === "expense" && "📉"}
            </span>
          </div>

          <h3 className="card-amount">{card.amount}</h3>

          <p className="card-info">{card.note}</p>
        </div>
      ))}
    </section>
  );
}