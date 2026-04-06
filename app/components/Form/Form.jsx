"use client";

import { useState } from "react";
import "./Form.css";

export default function Form({ onClose, onSave }) {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: "",
    type: "",
    date: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.description ||
      !form.amount ||
      !form.category ||
      !form.type ||
      !form.date
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (Number(form.amount) <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    onSave({
      ...form,
      amount: Number(form.amount),
    });

    setForm({
      description: "",
      amount: "",
      category: "",
      type: "",
      date: "",
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>Add Transaction</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="transaction-form" onSubmit={handleSubmit}>
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />

          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
            <option value="Transport">Transport</option>
            <option value="Salary">Salary</option>
          </select>

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />

          {error && <p className="error-text">{error}</p>}

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}