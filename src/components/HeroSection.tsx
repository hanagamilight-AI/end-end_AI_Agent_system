import { 
  Brain, Search, GitBranch, Settings, Server, 
  Database, Eye, Shield, Zap, Users, Workflow,
  ArrowRight, Sparkles
} from 'lucide-react';

const capabilities = [
  { icon: Workflow, label: 'Agentic AI Systems', color: 'from-violet-500 to-purple-500' },
  { icon: Search, label: 'RAG Pipelines', color: 'from-cyan-500 to-blue-500' },
  { icon: GitBranch, label: 'Context Engineering', color: 'from-emerald-500 to-green-500' },
  { icon: Settings, label: 'MCP Tools', color: 'from-orange-500 to-amber-500' },
  { icon: Brain, label: 'Model Optimization', color: 'from-pink-500 to-rose-500' },
  { icon: Server, label: 'Backend & APIs', color: 'from-indigo-500 to-blue-500' },
  { icon: Database, label: 'Data Models', color: 'from-teal-500 to-cyan-500' },
  { icon: Eye, label: 'AI Observability', color: 'from-yellow-500 to-orange-500' },
  { icon: Shield, label: 'AI Governance', color: 'from-red-500 to-pink-500' },
  { icon: Zap, label: 'Performance', color: 'from-lime-500 to-green-500' },
  { icon: Users, label: 'Collaboration', color: 'from-fuchsia-500 to-purple-500' },
];

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const sectionIds = ['agentic', 'rag', 'context', 'mcp', 'models', 'backend', 'database', 'observability', 'governance', 'performance', 'collaboration'];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/50 p-8 lg:p-12 mb-8">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 animate-fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-gray-400 uppercase tracking-wider">Production-Grade AI Platform</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Agentic AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Engineering Platform
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-6">
            A comprehensive platform for designing, building, and operating production-grade 
            AI systems — from agentic workflows and RAG pipelines to observability and governance.
          </p>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => onNavigate('agentic')}
              className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg text-sm font-medium hover:from-violet-500 hover:to-purple-500 transition-all flex items-center gap-2"
            >
              Explore Platform <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('observability')}
              className="px-5 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all"
            >
              View Metrics
            </button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Active Agents', value: '24', change: '+3 this week' },
          { label: 'RAG Queries/sec', value: '1.2K', change: '99.7% accuracy' },
          { label: 'Avg Latency', value: '142ms', change: '-18% optimized' },
          { label: 'Models Deployed', value: '8', change: '3 quantized' },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`bg-gray-900/50 border border-gray-800 rounded-xl p-4 animate-fade-in-up stagger-${i + 1}`}
          >
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
            <div className="text-xs text-green-400 mt-1">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Capabilities Grid */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">Platform Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <button
                key={cap.label}
                onClick={() => onNavigate(sectionIds[i])}
                className={`group flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-600 transition-all text-left animate-scale-in stagger-${i + 1}`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cap.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-200">{cap.label}</div>
                  <div className="text-xs text-gray-500">Click to explore →</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Architecture Overview */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-200">System Architecture</h3>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          {['User Request', '→', 'API Gateway', '→', 'Agent Orchestrator', '→', 'LLM Router', '→', 'Tool Executor', '→', 'Response'].map((item, i) => (
            <span key={i} className={item === '→' ? 'text-gray-600' : 'px-3 py-1.5 bg-gray-800 rounded-lg text-gray-300 border border-gray-700'}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs mt-3">
          {['', '', 'Memory Store', '→', 'Vector DB', '→', 'RAG Pipeline', '→', 'Reranker', '→', ''].map((item, i) => (
            <span key={i} className={item === '→' ? 'text-gray-600' : item === '' ? 'invisible' : 'px-3 py-1.5 bg-gray-800 rounded-lg text-gray-300 border border-gray-700'}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
