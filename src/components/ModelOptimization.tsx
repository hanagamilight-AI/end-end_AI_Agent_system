import { Brain, Cpu, Gauge, Zap } from 'lucide-react';

const models = [
  { name: 'GPT-4o', type: 'LLM', size: '~1.8T params', quantization: 'N/A (API)', latency: '800ms', cost: '$2.50/1M tokens', useCase: 'Complex reasoning' },
  { name: 'Claude 3.5 Sonnet', type: 'LLM', size: '~175B params', quantization: 'N/A (API)', latency: '650ms', cost: '$3.00/1M tokens', useCase: 'Code generation' },
  { name: 'Llama 3.1 70B', type: 'LLM', size: '70B params', quantization: 'GPTQ-Int4', latency: '120ms', cost: '$0.20/1M tokens', useCase: 'Self-hosted general' },
  { name: 'Mistral 7B', type: 'SLM', size: '7B params', quantization: 'GGUF-Q5', latency: '25ms', cost: '$0.02/1M tokens', useCase: 'Edge deployment' },
  { name: 'Phi-3 Mini', type: 'SLM', size: '3.8B params', quantization: 'AWQ-4bit', latency: '18ms', cost: '$0.01/1M tokens', useCase: 'Mobile/on-device' },
  { name: 'Llama 3.1 8B', type: 'SLM', size: '8B params', quantization: 'GGUF-Q4_K_M', latency: '30ms', cost: '$0.03/1M tokens', useCase: 'Classification' },
];

const optimizations = [
  { technique: 'Quantization (INT4)', savings: '75% memory', quality: '-2% accuracy', latency: '-60% inference' },
  { technique: 'KV Cache Optimization', savings: '40% memory', quality: 'No change', latency: '-30% latency' },
  { technique: 'Speculative Decoding', savings: 'N/A', quality: 'No change', latency: '-45% latency' },
  { technique: 'Model Distillation', savings: '90% params', quality: '-5% accuracy', latency: '-80% inference' },
  { technique: 'Pruning (Structured)', savings: '50% params', quality: '-3% accuracy', latency: '-40% inference' },
  { technique: 'Flash Attention v2', savings: '20% memory', quality: 'No change', latency: '-25% latency' },
];

const routerLogic = [
  { condition: 'Complex reasoning / math', model: 'GPT-4o', confidence: 'high' },
  { condition: 'Code generation / review', model: 'Claude 3.5', confidence: 'high' },
  { condition: 'General conversation', model: 'Llama 3.1 70B', confidence: 'medium' },
  { condition: 'Simple classification', model: 'Mistral 7B', confidence: 'low' },
  { condition: 'On-device / offline', model: 'Phi-3 Mini', confidence: 'low' },
];

export default function ModelOptimization() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Model Optimization</h1>
            <p className="text-sm text-gray-400">LLMs, SLMs, quantized models, and efficient inference</p>
          </div>
        </div>
      </div>

      {/* Model Registry */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Model Registry</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-800">
                <th className="pb-3 pr-4">Model</th>
                <th className="pb-3 pr-4">Type</th>
                <th className="pb-3 pr-4">Size</th>
                <th className="pb-3 pr-4">Quantization</th>
                <th className="pb-3 pr-4">Latency</th>
                <th className="pb-3">Use Case</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key={model.name} className="border-b border-gray-800/50">
                  <td className="py-3 pr-4 font-medium text-gray-200">{model.name}</td>
                  <td className="py-3 pr-4">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      model.type === 'LLM' ? 'bg-violet-500/10 text-violet-300' : 'bg-cyan-500/10 text-cyan-300'
                    }`}>
                      {model.type}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-gray-400 font-mono text-xs">{model.size}</td>
                  <td className="py-3 pr-4 text-gray-400 font-mono text-xs">{model.quantization}</td>
                  <td className="py-3 pr-4 text-gray-400 font-mono text-xs">{model.latency}</td>
                  <td className="py-3 text-gray-300 text-xs">{model.useCase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Optimization Techniques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-5 h-5 text-pink-400" />
            <h3 className="text-lg font-semibold text-gray-200">Optimization Techniques</h3>
          </div>
          <div className="space-y-3">
            {optimizations.map((opt) => (
              <div key={opt.technique} className="p-3 bg-gray-800/50 rounded-lg">
                <div className="text-sm font-medium text-gray-200 mb-1">{opt.technique}</div>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="text-green-400">{opt.savings}</span>
                  <span className="text-yellow-400">{opt.quality}</span>
                  <span className="text-cyan-400">{opt.latency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Router */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-gray-200">Smart Model Router</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">Automatically routes requests to optimal model based on complexity and requirements.</p>
          <div className="space-y-2">
            {routerLogic.map((rule) => (
              <div key={rule.condition} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="text-xs text-gray-300">{rule.condition}</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-pink-300">{rule.model}</span>
                  <Gauge className="w-3 h-3 text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Comparison */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Cost vs Quality Trade-off</h3>
        <div className="space-y-3">
          {[
            { model: 'GPT-4o', cost: 100, quality: 98, label: 'Premium' },
            { model: 'Claude 3.5', cost: 85, quality: 95, label: 'High' },
            { model: 'Llama 70B Q4', cost: 15, quality: 88, label: 'Balanced' },
            { model: 'Mistral 7B Q5', cost: 5, quality: 75, label: 'Efficient' },
            { model: 'Phi-3 AWQ', cost: 2, quality: 68, label: 'Edge' },
          ].map((item) => (
            <div key={item.model} className="flex items-center gap-4">
              <div className="w-28 text-sm text-gray-300">{item.model}</div>
              <div className="flex-1 flex gap-1">
                <div className="flex-1 h-6 bg-gray-800 rounded overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded bar-animate"
                    style={{ width: `${item.cost}%` }}
                  />
                  <span className="absolute inset-0 flex items-center px-2 text-xs text-white font-mono">${item.cost}/M</span>
                </div>
                <div className="flex-1 h-6 bg-gray-800 rounded overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded bar-animate"
                    style={{ width: `${item.quality}%` }}
                  />
                  <span className="absolute inset-0 flex items-center px-2 text-xs text-white font-mono">{item.quality}%</span>
                </div>
              </div>
              <span className="text-xs text-gray-500 w-16">{item.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <div className="w-28" />
            <div className="flex-1 flex justify-between text-xs text-gray-500">
              <span>← Cost (relative)</span>
              <span>Quality (benchmark) →</span>
            </div>
            <div className="w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
