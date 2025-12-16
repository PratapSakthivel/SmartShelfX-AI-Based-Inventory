export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  VENDOR = 'VENDOR'
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export interface Product {
  id: number;
  name: string;
  sku: string;
  vendorId: number;
  reorderLevel: number;
  currentStock: number;
  category: string;
  price: number;
}

export enum TransactionType {
  IN = 'IN',
  OUT = 'OUT'
}

export interface StockTransaction {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  type: TransactionType;
  timestamp: string;
  handledBy: number; // User ID
}

export enum POStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DISPATCHED = 'DISPATCHED'
}

export interface PurchaseOrder {
  id: number;
  productId: number;
  vendorId: number;
  quantity: number;
  status: POStatus;
  createdAt: string;
}

export interface AIAnalysisResult {
  sku: string;
  predictedDemand: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  recommendation: string;
}