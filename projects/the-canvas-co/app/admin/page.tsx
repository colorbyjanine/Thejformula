"use client";

import { useState, useEffect } from "react";

type Client = {
  id: string;
  name: string;
  businessName: string;
  email: string;
  phone?: string;
  package: "starter" | "growth" | "premium";
  status: "questionnaire" | "building" | "review" | "delivered" | "maintenance";
  websiteUrl?: string;
  githubRepo?: string;
  vercelProject?: string;
  notes: string;
  createdAt: string;
  deliveredAt?: string;
  maintenancePlan?: boolean;
  payments: { date: string; amount: number; description: string }[];
};

const packagePrices = {
  starter: 497,
  growth: 997,
  premium: 1997,
};

const statusColors = {
  questionnaire: "bg-yellow-100 text-yellow-800",
  building: "bg-blue-100 text-blue-800",
  review: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  maintenance: "bg-teal-100 text-teal-800",
};

const statusLabels = {
  questionnaire: "📋 Questionnaire",
  building: "🔨 Building",
  review: "👀 In Review",
  delivered: "✅ Delivered",
  maintenance: "🔧 Maintenance",
};

export default function AdminDashboard() {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  // Load clients from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("canvasco-clients");
    if (saved) {
      setClients(JSON.parse(saved));
    }
  }, []);

  // Save clients to localStorage
  useEffect(() => {
    if (clients.length > 0) {
      localStorage.setItem("canvasco-clients", JSON.stringify(clients));
    }
  }, [clients]);

  const addClient = (client: Omit<Client, "id" | "createdAt" | "payments">) => {
    const newClient: Client = {
      ...client,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      payments: [],
    };
    setClients([...clients, newClient]);
    setShowAddModal(false);
  };

  const updateClient = (id: string, updates: Partial<Client>) => {
    setClients(clients.map(c => c.id === id ? { ...c, ...updates } : c));
    if (selectedClient?.id === id) {
      setSelectedClient({ ...selectedClient, ...updates });
    }
  };

  const deleteClient = (id: string) => {
    if (confirm("Are you sure you want to delete this client?")) {
      setClients(clients.filter(c => c.id !== id));
      setSelectedClient(null);
    }
  };

  // Simple password protection
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">🎨 Canvas Co Admin</h1>
          <p className="text-gray-500 mb-6">Enter password to access dashboard</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && password === "canvas2026") {
                setAuthenticated(true);
              }
            }}
            className="w-full p-3 border border-gray-200 rounded-xl mb-4"
          />
          <button
            onClick={() => {
              if (password === "canvas2026") {
                setAuthenticated(true);
              } else {
                alert("Wrong password");
              }
            }}
            className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800"
          >
            Access Dashboard
          </button>
        </div>
      </div>
    );
  }

  const stats = {
    total: clients.length,
    active: clients.filter(c => ["questionnaire", "building", "review"].includes(c.status)).length,
    delivered: clients.filter(c => c.status === "delivered" || c.status === "maintenance").length,
    revenue: clients.reduce((sum, c) => sum + c.payments.reduce((s, p) => s + p.amount, 0), 0),
    maintenance: clients.filter(c => c.maintenancePlan).length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">🎨 Canvas Co Command Center</h1>
            <p className="text-sm text-gray-500">Client Management Dashboard</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 flex items-center gap-2"
          >
            <span>+</span> New Client
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Client List */}
        <div className="w-80 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)] overflow-y-auto">
          {/* Stats */}
          <div className="p-4 border-b border-gray-100">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                <p className="text-xs text-gray-500">Total Clients</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-2xl font-bold text-green-600">${stats.revenue.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Revenue</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{stats.active}</p>
                <p className="text-xs text-gray-500">In Progress</p>
              </div>
              <div className="bg-teal-50 p-3 rounded-lg">
                <p className="text-2xl font-bold text-teal-600">{stats.maintenance}</p>
                <p className="text-xs text-gray-500">On Maintenance</p>
              </div>
            </div>
          </div>

          {/* Client List */}
          <div className="p-2">
            {clients.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p className="text-4xl mb-2">📁</p>
                <p>No clients yet</p>
                <p className="text-sm">Add your first client to get started</p>
              </div>
            ) : (
              clients.map((client) => (
                <button
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className={`w-full text-left p-3 rounded-xl mb-1 transition-all ${
                    selectedClient?.id === client.id
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{client.businessName}</p>
                      <p className={`text-sm ${selectedClient?.id === client.id ? "text-gray-300" : "text-gray-500"}`}>
                        {client.name}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedClient?.id === client.id ? "bg-white/20 text-white" : statusColors[client.status]
                    }`}>
                      {client.status}
                    </span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Main Content - Client Details */}
        <div className="flex-1 p-6">
          {selectedClient ? (
            <div className="max-w-3xl">
              {/* Client Header */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedClient.businessName}</h2>
                    <p className="text-gray-500">{selectedClient.name} • {selectedClient.email}</p>
                    {selectedClient.phone && <p className="text-gray-400 text-sm">{selectedClient.phone}</p>}
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={selectedClient.status}
                      onChange={(e) => updateClient(selectedClient.id, { status: e.target.value as Client["status"] })}
                      className={`px-3 py-2 rounded-lg font-medium ${statusColors[selectedClient.status]}`}
                    >
                      <option value="questionnaire">📋 Questionnaire</option>
                      <option value="building">🔨 Building</option>
                      <option value="review">👀 In Review</option>
                      <option value="delivered">✅ Delivered</option>
                      <option value="maintenance">🔧 Maintenance</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Package</p>
                    <p className="font-semibold capitalize">{selectedClient.package} - ${packagePrices[selectedClient.package]}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Started</p>
                    <p className="font-semibold">{new Date(selectedClient.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Maintenance Plan</p>
                    <label className="flex items-center gap-2 mt-1">
                      <input
                        type="checkbox"
                        checked={selectedClient.maintenancePlan || false}
                        onChange={(e) => updateClient(selectedClient.id, { maintenancePlan: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{selectedClient.maintenancePlan ? "Active" : "No"}</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">🔗 Quick Access</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Live Website</label>
                    <input
                      type="url"
                      placeholder="https://clientsite.com"
                      value={selectedClient.websiteUrl || ""}
                      onChange={(e) => updateClient(selectedClient.id, { websiteUrl: e.target.value })}
                      className="w-full mt-1 p-2 border border-gray-200 rounded-lg text-sm"
                    />
                    {selectedClient.websiteUrl && (
                      <a href={selectedClient.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:underline">
                        Open Site →
                      </a>
                    )}
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wide">GitHub Repo</label>
                    <input
                      type="url"
                      placeholder="https://github.com/..."
                      value={selectedClient.githubRepo || ""}
                      onChange={(e) => updateClient(selectedClient.id, { githubRepo: e.target.value })}
                      className="w-full mt-1 p-2 border border-gray-200 rounded-lg text-sm"
                    />
                    {selectedClient.githubRepo && (
                      <a href={selectedClient.githubRepo} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:underline">
                        Open Repo →
                      </a>
                    )}
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wide">Vercel Project</label>
                    <input
                      type="url"
                      placeholder="https://vercel.com/..."
                      value={selectedClient.vercelProject || ""}
                      onChange={(e) => updateClient(selectedClient.id, { vercelProject: e.target.value })}
                      className="w-full mt-1 p-2 border border-gray-200 rounded-lg text-sm"
                    />
                    {selectedClient.vercelProject && (
                      <a href={selectedClient.vercelProject} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:underline">
                        Open Vercel →
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">📝 Notes</h3>
                <textarea
                  placeholder="Add notes about this client, design preferences, special requests..."
                  value={selectedClient.notes}
                  onChange={(e) => updateClient(selectedClient.id, { notes: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg h-32 text-sm"
                />
              </div>

              {/* Payments */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">💰 Payments</h3>
                  <button
                    onClick={() => {
                      const amount = prompt("Payment amount:");
                      const description = prompt("Description (e.g., 'Initial payment', 'Update fee'):");
                      if (amount && description) {
                        updateClient(selectedClient.id, {
                          payments: [...selectedClient.payments, {
                            date: new Date().toISOString(),
                            amount: parseFloat(amount),
                            description
                          }]
                        });
                      }
                    }}
                    className="text-sm bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200"
                  >
                    + Add Payment
                  </button>
                </div>
                {selectedClient.payments.length === 0 ? (
                  <p className="text-gray-400 text-sm">No payments recorded</p>
                ) : (
                  <div className="space-y-2">
                    {selectedClient.payments.map((payment, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-50">
                        <div>
                          <p className="font-medium">${payment.amount}</p>
                          <p className="text-sm text-gray-500">{payment.description}</p>
                        </div>
                        <p className="text-sm text-gray-400">{new Date(payment.date).toLocaleDateString()}</p>
                      </div>
                    ))}
                    <div className="pt-2 text-right">
                      <p className="text-sm text-gray-500">Total Received</p>
                      <p className="text-xl font-bold text-green-600">
                        ${selectedClient.payments.reduce((s, p) => s + p.amount, 0).toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Danger Zone */}
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="font-semibold text-red-800 mb-2">⚠️ Danger Zone</h3>
                <p className="text-sm text-red-600 mb-4">This action cannot be undone.</p>
                <button
                  onClick={() => deleteClient(selectedClient.id)}
                  className="text-sm bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200"
                >
                  Delete Client
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <div className="text-center">
                <p className="text-6xl mb-4">👈</p>
                <p className="text-lg">Select a client to view details</p>
                <p className="text-sm">or add a new client to get started</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Client Modal */}
      {showAddModal && (
        <AddClientModal
          onClose={() => setShowAddModal(false)}
          onAdd={addClient}
        />
      )}
    </div>
  );
}

function AddClientModal({ onClose, onAdd }: { onClose: () => void; onAdd: (client: any) => void }) {
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    package: "starter" as const,
    status: "questionnaire" as const,
    notes: "",
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Client</h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Client Name *</label>
            <input
              type="text"
              placeholder="John Smith"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg"
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-600">Business Name *</label>
            <input
              type="text"
              placeholder="Smith's Bakery"
              value={form.businessName}
              onChange={(e) => setForm({ ...form, businessName: e.target.value })}
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg"
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-600">Email *</label>
            <input
              type="email"
              placeholder="john@smithsbakery.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg"
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg"
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-600">Package *</label>
            <select
              value={form.package}
              onChange={(e) => setForm({ ...form, package: e.target.value as any })}
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg"
            >
              <option value="starter">Starter - $497</option>
              <option value="growth">Growth - $997</option>
              <option value="premium">Premium - $1,997</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm text-gray-600">Initial Notes</label>
            <textarea
              placeholder="Any special requests or notes..."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg h-24"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (form.name && form.businessName && form.email) {
                onAdd(form);
              } else {
                alert("Please fill in all required fields");
              }
            }}
            className="flex-1 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
          >
            Add Client
          </button>
        </div>
      </div>
    </div>
  );
}
