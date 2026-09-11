import { motion } from 'framer-motion';
import { Eye, Activity, Clock, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const latencyData = [
  { time: '00:00', p50: 85, p95: 210, p99: 450 },
  { time: '04:00', p50: 78, p95: 190, p99: 380 },
  { time: '08:00', p50: 120, p95: 340, p99: 680 },
  { time: '12:00', p50: 145, p95: 380, p99: 720 },
  { time: '16:00', p50: 130, p95: 320, p99: 650 },
  { time: '20:00', p50: 95, p95: 240, p99: 490 },
  { time: '23:59', p50: 82, p95: 200, p99: 420 },
];

const tokenUsageData = [
  { name: 'GPT-4o', input: 2400000, output: 800000 },
  { name: 'Claude 3.5', input: 1800000, output: 600000 },
  { name: 'Llama 70B', input: 5200000, output: 1800000 },
  { name: 'Mistral 7B', input: 8400000, output: 2800000 },
];

const costData = [
  { day: 'Mon', cost: 245 },
  { day: 'Tue', cost: 312 },
  { day: 'Wed', cost: 287 },
  { day: 'Thu', cost: 356 },
  { day: 'Fri', cost: 298 },
  { day: 'Sat', cost: 178 },
  { day: 'Sun', cost: 145 },
];

const alerts = [
  { type: 'warning', message: 'P99 latency exceeded 500ms threshold', time: '2 min ago' },
  { type: 'error', message: 'Agent execution timeout: task_complex_analysis', time: '15 min ago' },
  { type: 'info', message: 'Model router switched to Llama 70B for cost optimization', time: '1 hr ago' },
  { type: 'success', message: 'RAG pipeline evaluation passed all quality gates', time: '2 hr ago' },
  { type: 'warning', message: 'Token usage approaching daily budget (85%)', time: '3 hr ago' },
];

const qualityMetrics = [
  { name: 'Hallucination Rate', value: 2.1, target: '< 3%', status: 'good' },
  { name: 'Tool Success Rate', value: 96.8, target: '> 95%', status: 'good' },
  { name: 'Response Relevance', value: 0.91, target: '> 0.85', status: 'good' },
  { name: 'User Satisfaction', value: 4.3, target: '> 4.0', status: 'good' },
  { name: 'Error Rate', value: 1.2, target: '< 2%', status: 'good' },
  { name: 'Avg Turn Count', value: 3.2, target: '< 5', status: 'good' },
];

export default function AIObservability() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
            <Eye className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">AI Observability</h1>
            <p className="text-sm text-gray-400">Monitoring latency, tokens, cost, failures, quality, and execution</p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'P50 Latency', value: '142ms', icon: Clock, change: '-8%', color: 'text-green-400' },
          { label: 'Daily Cost', value: '$298', icon: DollarSign, change: '-12%', color: 'text-green-400' },
          { label: 'Error Rate', value: '1.2%', icon: AlertTriangle, change: '-0.3%', color: 'text-green-400' },
          { label: 'Quality Score', value: '0.91', icon: CheckCircle, change: '+0.04', color: 'text-green-400' },
        ].map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5 text-yellow-400" />
                <span className={`text-xs ${metric.color}`}>{metric.change}</span>
              </div>
              <div className="text-xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-gray-400">{metric.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Latency Chart */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-gray-200">Latency Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={latencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#6B7280" fontSize={10} />
              <YAxis stroke="#6B7280" fontSize={10} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#9CA3AF' }}
              />
              <Area type="monotone" dataKey="p99" stroke="#EF4444" fill="#EF4444" fillOpacity={0.1} name="P99" />
              <Area type="monotone" dataKey="p95" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.1} name="P95" />
              <Area type="monotone" dataKey="p50" stroke="#10B981" fill="#10B981" fillOpacity={0.1} name="P50" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Cost Chart */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-gray-200">Daily Cost ($)</h3>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={costData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#6B7280" fontSize={10} />
              <YAxis stroke="#6B7280" fontSize={10} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#9CA3AF' }}
              />
              <Bar dataKey="cost" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Token Usage */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Token Usage by Model</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={tokenUsageData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis type="number" stroke="#6B7280" fontSize={10} tickFormatter={(v) => `${(v/1000000).toFixed(1)}M`} />
            <YAxis dataKey="name" type="category" stroke="#6B7280" fontSize={10} width={80} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
              labelStyle={{ color: '#9CA3AF' }}
              formatter={(value: number) => [`${(value/1000000).toFixed(1)}M tokens`]}
            />
            <Bar dataKey="input" stackId="a" fill="#06B6D4" name="Input Tokens" radius={[0, 0, 0, 0]} />
            <Bar dataKey="output" stackId="a" fill="#8B5CF6" name="Output Tokens" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Alerts & Quality */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Recent Alerts</h3>
          <div className="space-y-2">
            {alerts.map((alert, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${
                alert.type === 'error' ? 'bg-red-500/5 border border-red-500/20' :
                alert.type === 'warning' ? 'bg-yellow-500/5 border border-yellow-500/20' :
                alert.type === 'success' ? 'bg-green-500/5 border border-green-500/20' :
                'bg-blue-500/5 border border-blue-500/20'
              }`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                  alert.type === 'error' ? 'bg-red-400' :
                  alert.type === 'warning' ? 'bg-yellow-400' :
                  alert.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
                }`} />
                <div className="flex-1">
                  <div className="text-xs text-gray-300">{alert.message}</div>
                  <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Quality Metrics</h3>
          <div className="space-y-3">
            {qualityMetrics.map((metric) => (
              <div key={metric.name} className="flex items-center justify-between p-2">
                <span className="text-sm text-gray-300">{metric.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-gray-200">{metric.value}</span>
                  <span className="text-xs text-gray-500">{metric.target}</span>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
