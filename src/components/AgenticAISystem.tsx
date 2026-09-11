import { useState } from 'react';
import { motion } from 'framer-motion';
import { Workflow, Brain, MemoryStick, Wrench, ArrowRight, Play, RotateCcw } from 'lucide-react';

const agentSteps = [
  { id: 'planning', label: 'Planning', description: 'Agent analyzes the task and creates an execution plan', status: 'idle' },
  { id: 'tool_selection', label: 'Tool Selection', description: 'Selects appropriate MCP tools based on task requirements', status: 'idle' },
  { id: 'execution', label: 'Execution', description: 'Executes tools in sequence, handling intermediate results', status: 'idle' },
  { id: 'memory', label: 'Memory Update', description: 'Stores results in short-term and long-term memory', status: 'idle' },
  { id: 'reflection', label: 'Reflection', description: 'Evaluates output quality and decides if retry needed', status: 'idle' },
  { id: 'response', label: 'Response', description: 'Synthesizes final response with context from all steps', status: 'idle' },
];

const tools = [
  { name: 'web_search', description: 'Search the internet for real-time information', latency: '230ms' },
  { name: 'code_executor', description: 'Execute Python/JS code in sandboxed environment', latency: '45ms' },
  { name: 'database_query', description: 'Query vector and relational databases', latency: '12ms' },
  { name: 'file_manager', description: 'Read, write, and manage files', latency: '8ms' },
  { name: 'api_caller', description: 'Make HTTP requests to external APIs', latency: '180ms' },
  { name: 'calculator', description: 'Perform complex mathematical operations', latency: '2ms' },
];

export default function AgenticAISystem() {
  const [running, setRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const runWorkflow = () => {
    setRunning(true);
    setCurrentStep(0);
    setCompletedSteps([]);
    
    agentSteps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        if (index > 0) {
          setCompletedSteps(prev => [...prev, index - 1]);
        }
        if (index === agentSteps.length - 1) {
          setTimeout(() => {
            setCompletedSteps(prev => [...prev, index]);
            setRunning(false);
          }, 1500);
        }
      }, index * 1800);
    });
  };

  const reset = () => {
    setRunning(false);
    setCurrentStep(-1);
    setCompletedSteps([]);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
            <Workflow className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Agentic AI Systems</h1>
            <p className="text-sm text-gray-400">LLM-powered agents with tools, memory, and workflows</p>
          </div>
        </div>
      </div>

      {/* Agent Workflow Visualization */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-200">Agent Workflow Execution</h3>
          <div className="flex gap-2">
            <button
              onClick={runWorkflow}
              disabled={running}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 rounded-lg text-sm flex items-center gap-2 transition-all"
            >
              <Play className="w-4 h-4" /> Run Agent
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm flex items-center gap-2 transition-all"
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {agentSteps.map((step, index) => {
            const isActive = currentStep === index;
            const isCompleted = completedSteps.includes(index);
            return (
              <motion.div
                key={step.id}
                animate={{ 
                  scale: isActive ? 1.02 : 1,
                  borderColor: isActive ? 'rgb(139, 92, 246)' : isCompleted ? 'rgb(34, 197, 94)' : 'rgb(55, 65, 81)'
                }}
                className={`p-4 rounded-lg border ${isActive ? 'bg-violet-500/10' : isCompleted ? 'bg-green-500/5' : 'bg-gray-800/50'} transition-all`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isActive ? 'bg-violet-500 text-white' : isCompleted ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400'
                  }`}>
                    {isCompleted ? '✓' : index + 1}
                  </div>
                  <span className="text-sm font-medium text-gray-200">{step.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  )}
                </div>
                <p className="text-xs text-gray-400">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Architecture Components */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Core Components */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Core Components</h3>
          <div className="space-y-3">
            {[
              { icon: Brain, label: 'LLM Engine', desc: 'GPT-4, Claude, Llama, Mistral routing', color: 'text-violet-400' },
              { icon: Wrench, label: 'Tool Registry', desc: 'MCP-compliant tool definitions & execution', color: 'text-cyan-400' },
              { icon: MemoryStick, label: 'Memory System', desc: 'Short-term, long-term, episodic memory', color: 'text-green-400' },
              { icon: Workflow, label: 'Workflow Engine', desc: 'DAG-based task orchestration & retry', color: 'text-orange-400' },
            ].map((comp) => {
              const Icon = comp.icon;
              return (
                <div key={comp.label} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <Icon className={`w-5 h-5 mt-0.5 ${comp.color}`} />
                  <div>
                    <div className="text-sm font-medium text-gray-200">{comp.label}</div>
                    <div className="text-xs text-gray-400">{comp.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Available Tools */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">MCP Tools Available</h3>
          <div className="space-y-2">
            {tools.map((tool) => (
              <div key={tool.name} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div>
                  <div className="text-sm font-mono text-cyan-300">{tool.name}</div>
                  <div className="text-xs text-gray-400">{tool.description}</div>
                </div>
                <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">{tool.latency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agent Decision Flow */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Agent Decision Flow</h3>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          {['Input', '→', 'Plan', '→', 'Select Tool', '→', 'Execute', '→', 'Observe', '→', 'Reflect', '→', 'Next?'].map((item, i) => (
            <span key={i} className={item === '→' ? 'text-gray-600' : 'px-3 py-1.5 bg-gray-800 rounded-lg text-gray-300 border border-gray-700'}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center mt-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ArrowRight className="w-3 h-3" />
            <span>Loop until task complete or max iterations reached</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
