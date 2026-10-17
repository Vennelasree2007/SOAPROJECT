const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api'

const request = async (path, options = {}) => {
  // Placeholder boundary for the future Spring Boot gateway and JWT interceptor.
  return { apiUrl: API_URL, path, options, data: [] }
}

export const authService = { login: (credentials) => request('/auth/login', { method: 'POST', body: credentials }), register: (payload) => request('/auth/register', { method: 'POST', body: payload }) }
export const medicineService = { list: () => request('/medicines'), getById: (id) => request(`/medicines/${id}`) }
export const inventoryService = { list: () => request('/inventory') }
export const orderService = { list: () => request('/orders'), getById: (id) => request(`/orders/${id}`), create: (payload) => request('/orders', { method: 'POST', body: payload }) }
export const supplierService = { list: () => request('/suppliers') }
export const userService = { list: () => request('/users') }

export const demoMedicines = [
  { id: 'MED-1042', name: 'Amoxicillin 500mg', category: 'Antibiotic', manufacturer: 'CureLife Pharma', price: 12.5, stock: 248, expiry: 'Aug 2026', batch: 'AMX-24-08', rx: true, supplier: 'MedSource Ltd.' },
  { id: 'MED-0871', name: 'Metformin 850mg', category: 'Diabetes Care', manufacturer: 'NovaMed Labs', price: 8.75, stock: 84, expiry: 'Nov 2025', batch: 'MET-25-01', rx: true, supplier: 'HealthLink Supply' },
  { id: 'MED-2204', name: 'Paracetamol 500mg', category: 'Pain Relief', manufacturer: 'Wellness Corp.', price: 4.2, stock: 1200, expiry: 'Mar 2027', batch: 'PAR-25-03', rx: false, supplier: 'Global Meds Inc.' },
  { id: 'MED-1933', name: 'Atorvastatin 20mg', category: 'Cardiology', manufacturer: 'NovaMed Labs', price: 16.4, stock: 36, expiry: 'Oct 2025', batch: 'ATO-24-11', rx: true, supplier: 'MedSource Ltd.' },
]

export const demoOrders = [
  { id: 'ORD-2025-0842', customer: 'St. Mary Medical Center', medicines: 'Amoxicillin 500mg + 2 more', quantity: 320, total: '$4,286.40', date: 'May 18, 2025', status: 'SHIPPED', payment: 'PAID' },
  { id: 'ORD-2025-0841', customer: 'Green Valley Pharmacy', medicines: 'Paracetamol 500mg', quantity: 500, total: '$2,100.00', date: 'May 18, 2025', status: 'PACKED', payment: 'PAID' },
  { id: 'ORD-2025-0840', customer: 'CityCare Hospital', medicines: 'Atorvastatin 20mg', quantity: 120, total: '$1,968.00', date: 'May 17, 2025', status: 'CONFIRMED', payment: 'PENDING' },
  { id: 'ORD-2025-0839', customer: 'Wellness First Clinic', medicines: 'Metformin 850mg + 1 more', quantity: 88, total: '$876.20', date: 'May 16, 2025', status: 'DELIVERED', payment: 'PAID' },
]

export const demoInventory = [
  { medicine: 'Amoxicillin 500mg', batch: 'AMX-24-08', available: 248, minimum: 100, expiry: 'Aug 2026', location: 'WH-A / Shelf 04', status: 'IN STOCK' },
  { medicine: 'Metformin 850mg', batch: 'MET-25-01', available: 84, minimum: 120, expiry: 'Nov 2025', location: 'WH-B / Shelf 12', status: 'LOW STOCK' },
  { medicine: 'Atorvastatin 20mg', batch: 'ATO-24-11', available: 36, minimum: 80, expiry: 'Oct 2025', location: 'WH-A / Shelf 18', status: 'EXPIRING SOON' },
  { medicine: 'Paracetamol 500mg', batch: 'PAR-25-03', available: 0, minimum: 200, expiry: 'Mar 2027', location: 'WH-C / Shelf 02', status: 'OUT OF STOCK' },
]

export const statusTone = (status) => ({ 'IN STOCK': 'success', 'DELIVERED': 'success', 'PAID': 'success', 'LOW STOCK': 'warning', 'EXPIRING SOON': 'warning', 'PENDING': 'warning', 'PACKED': 'info', 'SHIPPED': 'info', 'CONFIRMED': 'info', 'OUT OF STOCK': 'danger', 'CANCELLED': 'danger' }[status] || 'neutral')

export { API_URL }
