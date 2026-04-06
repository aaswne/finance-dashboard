"use client";

import "./Charts.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function Charts({ transactions }) {
  const expenseTransactions = transactions.filter(
    (item) => item.type === "expense"
  );

  const categoryTotals = expenseTransactions.reduce((acc, item) => {
    const category = item.category || "Other";
    acc[category] = (acc[category] || 0) + item.amount;
    return acc;
  }, {});

  const expenseData = Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value,
  }));

  const balanceData = transactions
    .slice()
    .reverse()
    .reduce((acc, item, index) => {
      const prevBalance = index === 0 ? 0 : acc[index - 1].balance;
      const updatedBalance =
        item.type === "income"
          ? prevBalance + item.amount
          : prevBalance - item.amount;

      acc.push({
        name: item.description,
        balance: updatedBalance,
      });

      return acc;
    }, []);

  return (
    <section className="charts-section">
      <div className="chart-card">
        <div className="chart-header">
          <h3>Balance Trend</h3>
          <p>Based on transactions</p>
        </div>

        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={balanceData}>
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h3>Spending Breakdown</h3>
          <p>By category</p>
        </div>

        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {expenseData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}