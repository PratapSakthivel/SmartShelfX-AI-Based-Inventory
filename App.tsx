import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Transactions from './pages/Transactions';
import Forecasting from './pages/Forecasting';
import PurchaseOrders from './pages/PurchaseOrders';
import Analytics from './pages/Analytics';
import Login from './pages/Login';
import { InventoryProvider, useInventory } from './context/InventoryContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useInventory();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            }>
                <Route index element={<Dashboard />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="forecasting" element={<Forecasting />} />
                <Route path="orders" element={<PurchaseOrders />} />
                <Route path="analytics" element={<Analytics />} />
            </Route>
        </Routes>
    )
}

function App() {
  return (
    <InventoryProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </InventoryProvider>
  );
}

export default App;