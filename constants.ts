import { Product, User, UserRole, StockTransaction, TransactionType, PurchaseOrder, POStatus } from './types';

// Mock Users
export const MOCK_USERS: User[] = [
  { id: 1, name: 'Admin User', email: 'admin@smartshelfx.com', role: UserRole.ADMIN },
  { id: 2, name: 'Warehouse Mgr', email: 'manager@smartshelfx.com', role: UserRole.MANAGER },
  { id: 3, name: 'Tech Supplies Co', email: 'vendor@tech.com', role: UserRole.VENDOR },
];

// Mock Products
export const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Wireless Mouse', sku: 'PER-001', vendorId: 3, reorderLevel: 50, currentStock: 120, category: 'Peripherals', price: 25.00 },
  { id: 2, name: 'Mechanical Keyboard', sku: 'PER-002', vendorId: 3, reorderLevel: 30, currentStock: 25, category: 'Peripherals', price: 85.00 },
  { id: 3, name: 'Monitor 27"', sku: 'DIS-001', vendorId: 3, reorderLevel: 10, currentStock: 8, category: 'Displays', price: 250.00 },
  { id: 4, name: 'USB-C Cable', sku: 'ACC-001', vendorId: 3, reorderLevel: 100, currentStock: 45, category: 'Accessories', price: 12.00 },
  { id: 5, name: 'Laptop Stand', sku: 'ACC-002', vendorId: 3, reorderLevel: 20, currentStock: 18, category: 'Accessories', price: 45.00 },
];

// Mock Transactions
export const MOCK_TRANSACTIONS: StockTransaction[] = [
  { id: 1, productId: 1, productName: 'Wireless Mouse', quantity: 50, type: TransactionType.IN, timestamp: new Date(Date.now() - 86400000 * 5).toISOString(), handledBy: 2 },
  { id: 2, productId: 2, productName: 'Mechanical Keyboard', quantity: 5, type: TransactionType.OUT, timestamp: new Date(Date.now() - 86400000 * 2).toISOString(), handledBy: 2 },
  { id: 3, productId: 3, productName: 'Monitor 27"', quantity: 2, type: TransactionType.OUT, timestamp: new Date(Date.now() - 86400000 * 1).toISOString(), handledBy: 2 },
];

// Mock POs
export const MOCK_POS: PurchaseOrder[] = [
  { id: 1, productId: 3, vendorId: 3, quantity: 20, status: POStatus.PENDING, createdAt: new Date().toISOString() }
];