import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, Lock, Layers, Code } from 'lucide-react';

const endpoints = [
  { method: 'POST', path: '/api/v1/chat/completions', description: 'Chat completion with agent routing', auth: true, rateLimit: '100/min' },
  { method: 'POST', path: '/api/v1/agents/run', description: 'Execute an agent workflow', auth: true, rateLimit: '50/min' },
  { method: 'POST', path: '/api/v1/rag/query', description: 'RAG pipeline query', auth: true, rateLimit: '200/min' },
  { method: 'GET', path: '/api/v1/agents/{id}/status', description: 'Get agent execution status', auth: true, rateLimit: '500/min' },
  { method: 'POST', path: '/api/v1/embeddings', description: 'Generate text embeddings', auth: true, rateLimit: '1000/min' },
  { method: 'GET', path: '/api/v1/models', description: 'List available models', auth: false, rateLimit: '1000/min' },
  { method: 'POST', path: '/api/v1/tools/execute', description: 'Execute an MCP tool', auth: true, rateLimit: '100/min' },
  { method: 'WS', path: '/ws/v1/stream', description: 'Real-time streaming responses', auth: true, rateLimit: '20/min' },
];

const architectureLayers = [
  { name: 'API Gateway', tech: 'Kong / AWS API Gateway', desc: 'Rate limiting, auth, routing' },
  { name: 'Load Balancer', tech: 'NGINX / AWS ALB', desc: 'Traffic distribution, health checks' },
  { name: 'Application Layer', tech: 'FastAPI + Celery', desc: 'Business logic, async processing' },
  { name: 'Agent Orchestrator', tech: 'LangGraph / Custom', desc: 'Workflow execution, state management' },
  { name: 'Model Inference', tech: 'vLLM / TGI / Triton', desc: 'GPU-accelerated model serving' },
  { name: 'Data Layer', tech: 'PostgreSQL + Redis + Pinecone', desc: 'Persistence, caching, vectors' },
];

export default function BackendAPIs() {
  const [activeTab, setActiveTab] = useState<'endpoints' | 'architecture' | 'code'>('endpoints');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
            <Server className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Backend Services & APIs</h1>
            <p className="text-sm text-gray-400">Scalable infrastructure for AI applications</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'API Endpoints', value: '24', icon: Globe },
          { label: 'Avg Response', value: '89ms', icon: Layers },
          { label: 'Uptime', value: '99.97%', icon: Server },
          { label: 'Requests/day', value: '2.4M', icon: Globe },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <Icon className="w-5 h-5 text-indigo-400 mb-2" />
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'endpoints', label: 'API Endpoints', icon: Globe },
          { id: 'architecture', label: 'Architecture', icon: Layers },
          { id: 'code', label: 'Code Example', icon: Code },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Endpoints */}
      {activeTab === 'endpoints' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">REST API Endpoints</h3>
          <div className="space-y-2">
            {endpoints.map((ep) => (
              <div key={ep.path} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  ep.method === 'GET' ? 'bg-green-500/20 text-green-300' :
                  ep.method === 'POST' ? 'bg-blue-500/20 text-blue-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>
                  {ep.method}
                </span>
                <span className="text-sm font-mono text-gray-200 flex-1">{ep.path}</span>
                <span className="text-xs text-gray-400 hidden md:inline">{ep.description}</span>
                {ep.auth && <Lock className="w-3 h-3 text-yellow-400" />}
                <span className="text-xs text-gray-500 font-mono">{ep.rateLimit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Architecture */}
      {activeTab === 'architecture' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">System Architecture Layers</h3>
          <div className="space-y-3">
            {architectureLayers.map((layer, i) => (
              <div key={layer.name} className="relative">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-300">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-200">{layer.name}</div>
                    <div className="text-xs text-gray-400">{layer.desc}</div>
                  </div>
                  <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">{layer.tech}</span>
                </div>
                {i < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-4 bg-gray-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Code Example */}
      {activeTab === 'code' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">API Implementation Example</h3>
          <pre className="text-xs text-gray-300 font-mono bg-gray-950 rounded-lg p-4 overflow-x-auto leading-relaxed">
{`from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel

app = FastAPI(title="AI Platform API")

class ChatRequest(BaseModel):
    messages: list[dict]
    model: str = "auto"
    agent_id: str | None = None
    stream: bool = False

@app.post("/api/v1/chat/completions")
async def chat_completions(
    request: ChatRequest,
    user: User = Depends(get_current_user),
    rate_limiter: RateLimiter = Depends(rate_limit)
):
    # Route to appropriate model
    model = model_router.select(
        messages=request.messages,
        preferred=request.model
    )
    
    # Execute with agent if specified
    if request.agent_id:
        result = await agent_executor.run(
            agent_id=request.agent_id,
            input_messages=request.messages,
            user_context=user.context
        )
    else:
        result = await llm_client.complete(
            model=model,
            messages=request.messages
        )
    
    return ChatResponse(
        id=result.id,
        choices=result.choices,
        usage=result.usage
    )`}
          </pre>
        </motion.div>
      )}
    </div>
  );
}
