"use client";

import { useState } from "react";
import styles from "@/app/styles/dashboard.module.css";

import Header from "@/app/components/Header/Header";
import SummaryCard from "@/app/components/SummaryCard/SummaryCards";
import Charts from "@/app/components/Charts/Charts";
import Transaction from "@/app/components/Transactions/Transaction";
import Insights from "@/app/components/Insights/Insights";
import Form from "@/app/components/Form/Form";

import { transactions as initialData } from "@/app/data/mockData";

export default function Home() {
  const [role, setRole] = useState("viewer");
  const [showModal, setShowModal] = useState(false);
  const [transactions, setTransactions] = useState(initialData);

  const handleAddTransaction = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveTransaction = (newTransaction) => {
    const transactionWithId = {
      id: Date.now(),
      ...newTransaction,
    };

    setTransactions((prev) => [transactionWithId, ...prev]);
    setShowModal(false);
  };

  return (
    <div className={styles.dashboard}>
      <Header
        role={role}
        setRole={setRole}
        onAddTransaction={handleAddTransaction}
      />

      <SummaryCard transactions={transactions} />
      <Charts transactions={transactions} />
      <Transaction transactions={transactions} role={role} />
      <Insights transactions={transactions} />

      {showModal && (
        <Form
          onClose={handleCloseModal}
          onSave={handleSaveTransaction}
        />
      )}
    </div>
  );
}