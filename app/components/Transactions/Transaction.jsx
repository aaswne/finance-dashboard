"use client";

import "./Transaction.css";
import { useState } from "react";

export default function Transaction({ transactions }) {
  const [search, setSearch] = useState("");

  const filteredData = transactions.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="table-section">
      <div className="table-header">
        <h3>Transactions</h3>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td className={item.type}>{item.type}</td>
                <td>₹{item.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}