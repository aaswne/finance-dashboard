"use client";

import "./Header.css";

export default function Header({
  role,
  setRole,
  onAddTransaction,
}) {
  return (
    <header className="header">
      {/* LEFT */}
      <div className="header-left">
        <h2 className="logo">
          <span className="logo-icon">💰</span> FinTrack
        </h2>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        {/* ROLE SELECT */}
        <select
          className="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          aria-label="Select user role"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        {/* ADD BUTTON */}
        {role === "admin" && (
          <button
            onClick={onAddTransaction}
            className="add-btn"
          >
            + Add
          </button>
        )}

        {/* AVATAR */}
        <div className="avatar" title="User profile">
          A
        </div>
      </div>
    </header>
  );
}