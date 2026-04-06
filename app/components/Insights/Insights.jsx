"use client";

import "./Insights.css";

export default function Insights({ transactions }) {
  const expenses = transactions.filter((item) => item.type === "expense");
  const income = transactions.filter((item) => item.type === "income");

  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);

  const categoryTotals = {};

  expenses.forEach((item) => {
    const category = item.category || "Other";
    categoryTotals[category] =
      (categoryTotals[category] || 0) + item.amount;
  });

  let highestCategory = "No data";
  let highestAmount = 0;

  for (let category in categoryTotals) {
    if (categoryTotals[category] > highestAmount) {
      highestAmount = categoryTotals[category];
      highestCategory = category;
    }
  }

  return (
    <section className="insights-section">
      <h3 className="insights-title">Insights</h3>

      <div className="insights-grid">
        <div className="insight-card">
          <p className="insight-label">Highest Spending Category</p>
          <h4 className="insight-value">{highestCategory}</h4>
          <span className="insight-note">
            ₹{highestAmount.toLocaleString()}
          </span>
        </div>

        <div className="insight-card">
          <p className="insight-label">Total Income</p>
          <h4 className="insight-value">
            ₹{totalIncome.toLocaleString()}
          </h4>
          <span className="insight-note">Live data</span>
        </div>

        <div className="insight-card">
          <p className="insight-label">Total Expenses</p>
          <h4 className="insight-value">
            ₹{totalExpenses.toLocaleString()}
          </h4>
          <span className="insight-note">Live data</span>
        </div>
      </div>
    </section>
  );
}