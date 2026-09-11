import { useState } from 'react';
import { GitBranch, Layers, Filter, ArrowRight, Check, X } from 'lucide-react';

const strategies = [
  {
    id: 'compression',
    name: 'Context Compression',
    description: 'Reduce context size while preserving key information',
    techniques: ['Summary injection', 'Key-value extraction', 'Hierarchical summarization', 'Token budgeting'],
    impact: '40% fewer tokens, same accuracy',
    color: 'violet'
  },
  {
    id: 'selection',
    name: 'Dynamic Context Selection',
    description: 'Select most relevant context based on query intent',
    techniques: ['Intent classification', 'Semantic routing', 'Multi-hop retrieval', 'Adaptive top-K'],
    impact: '25% improvement in relevance',
    color: 'cyan'
  },
  {
    id: 'structuring',
    name: 'Context Structuring',
    description: 'Organize context for better LLM comprehension',
    techniques: ['XML/JSON formatting', 'Role-based sections', 'Priority ordering', 'Few-shot examples'],
    impact: '18% better instruction following',
    color: 'green'
  },
  {
    id: 'validation',
    name: 'Context Validation',
    description: 'Verify and filter context before injection',
    techniques: ['Relevance scoring', 'Contradiction detection', 'Freshness filtering', 'Source verification'],
    impact: '30% reduction in hallucinations',
    color: 'orange'
  },
];

const contextExample = {
  before: `You are a helpful assistant. Answer the user's question about our product.

Context:
[20 documents pasted here with lots of irrelevant information...]

User: How do I reset my password?`,
  after: `<role>
You are a customer support agent for TechCorp. Be concise and helpful.
</role>

<context priority="high">
Password reset is done via the "Forgot Password" link on the login page.
Users receive a reset email within 2 minutes. Links expire after 24 hours.
</context>

<constraints>
- Only answer based on provided context
- If unsure, direct to support@techcorp.com
- Keep responses under 3 sentences
</constraints>

<user_query>
How do I reset my password?
</user_query>`
};

export default function ContextEngineering() {
  const [activeStrategy, setActiveStrategy] = useState(0);
  const [showOptimized, setShowOptimized] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
            <GitBranch className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Context Engineering</h1>
            <p className="text-sm text-gray-400">Strategies for improving LLM accuracy, relevance, and reliability</p>
          </div>
        </div>
      </div>

      {/* Strategies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {strategies.map((strategy, index) => (
          <button
            key={strategy.id}
            onClick={() => setActiveStrategy(index)}
            className={`text-left p-5 rounded-xl border transition-all hover:scale-[1.01] ${
              activeStrategy === index
                ? 'bg-gray-800/80 border-emerald-500/50'
                : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-200">{strategy.name}</h3>
              {activeStrategy === index && <Check className="w-4 h-4 text-emerald-400" />}
            </div>
            <p className="text-sm text-gray-400 mb-3">{strategy.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {strategy.techniques.map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-gray-700/50 rounded text-xs text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-xs text-emerald-400 font-medium">{strategy.impact}</div>
          </button>
        ))}
      </div>

      {/* Before/After Comparison */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-200">Context Optimization Demo</h3>
          <button
            onClick={() => setShowOptimized(!showOptimized)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
          >
            {showOptimized ? (
              <><X className="w-4 h-4" /> Show Original</>
            ) : (
              <><ArrowRight className="w-4 h-4" /> Show Optimized</>
            )}
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border transition-all ${showOptimized ? 'border-gray-700 opacity-50' : 'border-red-500/30 bg-red-500/5'}`}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-xs font-medium text-red-400 uppercase">Before - Unstructured</span>
            </div>
            <pre className="text-xs text-gray-400 whitespace-pre-wrap font-mono leading-relaxed">
              {contextExample.before}
            </pre>
            <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
              <span>~450 tokens</span>
              <span>•</span>
              <span>No structure</span>
              <span>•</span>
              <span>High noise</span>
            </div>
          </div>

          <div className={`p-4 rounded-lg border transition-all ${showOptimized ? 'border-green-500/30 bg-green-500/5' : 'border-gray-700 opacity-50'}`}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-medium text-green-400 uppercase">After - Engineered</span>
            </div>
            <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
              {contextExample.after}
            </pre>
            <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
              <span>~180 tokens</span>
              <span>•</span>
              <span>Structured</span>
              <span>•</span>
              <span>High signal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Token Budget Visualization */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Token Budget Allocation</h3>
        <div className="space-y-4">
          {[
            { label: 'System Prompt', tokens: 200, color: 'bg-violet-500', percent: 10 },
            { label: 'Retrieved Context', tokens: 800, color: 'bg-cyan-500', percent: 40 },
            { label: 'Few-shot Examples', tokens: 300, color: 'bg-green-500', percent: 15 },
            { label: 'Conversation History', tokens: 400, color: 'bg-orange-500', percent: 20 },
            { label: 'Response Buffer', tokens: 300, color: 'bg-pink-500', percent: 15 },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="w-40 text-sm text-gray-300">{item.label}</div>
              <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.color} bar-animate`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>
              <div className="w-20 text-xs text-gray-400 text-right font-mono">{item.tokens} tokens</div>
            </div>
          ))}
          <div className="pt-2 border-t border-gray-800 flex justify-between text-sm">
            <span className="text-gray-400">Total Context Window</span>
            <span className="text-gray-200 font-mono">2,000 / 4,096 tokens</span>
          </div>
        </div>
      </div>
    </div>
  );
}
