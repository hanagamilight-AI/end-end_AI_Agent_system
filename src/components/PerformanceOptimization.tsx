import { motion } from 'framer-motion';
import { Zap, Clock, DollarSign, Server, TrendingDown, ArrowDown, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const latencyOptimizations = [
  { technique: 'Response Streaming', before: '1200ms', after: '180ms (TTFT)', improvement: '85%' },
  { technique: 'Semantic Caching', before: '800ms', after: '45ms (cache hit)', improvement: '94%' },
  { technique: 'Parallel Tool Execution', before: '2400ms', after: '900ms', improvement: '62%' },
  { technique: 'Speculative Decoding', before: '650ms', after: '380ms', improvement: '42%' },
  { technique: 'Connection Pooling', before: '120ms', after: '15ms', improvement: '87%' },
];

const costOptimizations = [
  { strategy: 'Model Routing', savings: '$12,400/mo', description: 'Route simple tasks to cheaper models' },
  { strategy: 'Prompt Caching', savings: '$4,200/mo', description: 'Cache repeated prompt prefixes' },
  { strategy: 'Batch Processing', savings: '$2,800/mo', description: '50% discount on batch API calls' },
  { strategy: 'Token Optimization', savings: '$3,600/mo', description: 'Context compression & deduplication' },
  { strategy: 'Self-hosted SLMs', savings: '$8,900/mo', description: 'Replace API calls with local inference' },
];

const scalabilityMetrics = [
  { time: 'Week 1', rps: 50, users: 100 },
  { time: 'Week 2', rps: 120, users: 250 },
  { time: 'Week 3', rps: 280, users: 500 },
  { time: 'Week 4', rps: 450, users: 800 },
  { time: 'Week 5', rps: 680, users: 1200 },
  { time: 'Week 6', rps: 920, users: 1600 },
  { time: 'Week 7', rps: 1100, users: 2000 },
  { time: 'Week 8', rps: 1200, users: 2400 },
];

const reliabilityMetrics = [
  { metric: 'Uptime', value: '99.97%', target: '99.9%' },
  { metric: 'Error Rate', value: '0.3%', target: '< 1%' },
  { metric: 'Recovery Time', value: '< 30s', target: '< 60s' },
  { metric: 'Circuit Breakers', value: '12 active', target: 'All critical paths' },
  { metric: 'Retry Success', value: '94%', target: '> 90%' },
];

export default function PerformanceOptimization() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Performance Optimization</h1>
            <p className="text-sm text-gray-400">Optimizing for latency, scalability, cost, and reliability</p>
          </div>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'P50 Latency', value: '142ms', icon: Clock, change: '-18%', color: 'text-green-400' },
          { label: 'Monthly Cost', value: '$18.4K', icon: DollarSign, change: '-32%', color: 'text-green-400' },
          { label: 'Max RPS', value: '1,200', icon: Server, change: '+140%', color: 'text-green-400' },
          { label: 'Uptime', value: '99.97%', icon: Zap, change: '+0.02%', color: 'text-green-400' },
        ].map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5 text-lime-400" />
                <span className={`text-xs ${kpi.color} flex items-center gap-1`}>
                  <ArrowDown className="w-3 h-3" />{kpi.change}
                </span>
              </div>
              <div className="text-xl font-bold text-white">{kpi.value}</div>
              <div className="text-xs text-gray-400">{kpi.label}</div>
            </div>
          );
        })}
      </div>

      {/* Latency Optimizations */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown className="w-5 h-5 text-lime-400" />
          <h3 className="text-lg font-semibold text-gray-200">Latency Optimizations</h3>
        </div>
        <div className="space-y-3">
          {latencyOptimizations.map((opt) => (
            <div key={opt.technique} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-200">{opt.technique}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-red-400 font-mono">{opt.before}</span>
                  <ArrowRight className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-green-400 font-mono">{opt.after}</span>
                </div>
              </div>
              <div className="text-sm font-bold text-green-400">{opt.improvement}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scalability Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Scalability Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={scalabilityMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#6B7280" fontSize={10} />
              <YAxis yAxisId="left" stroke="#6B7280" fontSize={10} />
              <YAxis yAxisId="right" orientation="right" stroke="#6B7280" fontSize={10} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#9CA3AF' }}
              />
              <Line yAxisId="left" type="monotone" dataKey="rps" stroke="#84CC16" strokeWidth={2} name="Requests/sec" dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="users" stroke="#06B6D4" strokeWidth={2} name="Active Users" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Cost Optimizations */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Cost Optimizations</h3>
          <div className="space-y-3">
            {costOptimizations.map((opt) => (
              <div key={opt.strategy} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div>
                  <div className="text-sm font-medium text-gray-200">{opt.strategy}</div>
                  <div className="text-xs text-gray-400">{opt.description}</div>
                </div>
                <span className="text-sm font-bold text-green-400">{opt.savings}</span>
              </div>
            ))}
            <div className="pt-2 border-t border-gray-700 flex justify-between">
              <span className="text-sm text-gray-300">Total Monthly Savings</span>
              <span className="text-sm font-bold text-green-400">$31,900/mo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reliability */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Reliability Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {reliabilityMetrics.map((metric) => (
            <div key={metric.metric} className="text-center p-4 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-white">{metric.value}</div>
              <div className="text-xs text-gray-400 mt-1">{metric.metric}</div>
              <div className="text-xs text-green-400 mt-1">Target: {metric.target}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
