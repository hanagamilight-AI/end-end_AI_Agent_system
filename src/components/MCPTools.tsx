import { useState } from 'react';
import { Settings, Plug, Code, ArrowRight, Terminal, CheckCircle } from 'lucide-react';

const mcpServers = [
  { 
    name: 'filesystem', 
    status: 'connected', 
    tools: 8, 
    description: 'File system operations - read, write, list, search',
    latency: '5ms'
  },
  { 
    name: 'web-browser', 
    status: 'connected', 
    tools: 5, 
    description: 'Web browsing, scraping, and interaction',
    latency: '230ms'
  },
  { 
    name: 'database', 
    status: 'connected', 
    tools: 4, 
    description: 'SQL and NoSQL database operations',
    latency: '12ms'
  },
  { 
    name: 'github', 
    status: 'connected', 
    tools: 12, 
    description: 'Repository management, PRs, issues',
    latency: '180ms'
  },
  { 
    name: 'slack', 
    status: 'disconnected', 
    tools: 6, 
    description: 'Messaging and channel management',
    latency: '-'
  },
  { 
    name: 'jira', 
    status: 'connected', 
    tools: 9, 
    description: 'Project management and issue tracking',
    latency: '145ms'
  },
];

const toolDefinition = `{
  "name": "web_search",
  "description": "Search the internet for information",
  "inputSchema": {
    "type": "object",
    "properties": {
      "query": {
        "type": "string",
        "description": "Search query"
      },
      "num_results": {
        "type": "integer",
        "description": "Number of results",
        "default": 5
      }
    },
    "required": ["query"]
  }
}`;

const toolResponse = `{
  "content": [
    {
      "type": "text",
      "text": "Found 5 results for 'quantum computing advances 2025'..."
    }
  ],
  "isError": false
}`;

export default function MCPTools() {
  const [activeTab, setActiveTab] = useState<'servers' | 'protocol' | 'execution'>('servers');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">MCP Tools & Services</h1>
            <p className="text-sm text-gray-400">Model Context Protocol - standardized tool integration</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        {[
          { id: 'servers', label: 'MCP Servers', icon: Plug },
          { id: 'protocol', label: 'Protocol Spec', icon: Code },
          { id: 'execution', label: 'Live Execution', icon: Terminal },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                  : 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Servers Tab */}
      {activeTab === 'servers' && (
        <div className="space-y-3 animate-fade-in">
          {mcpServers.map((server) => (
            <div key={server.name} className="flex items-center justify-between p-4 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${server.status === 'connected' ? 'bg-green-400' : 'bg-red-400'}`} />
                <div>
                  <div className="text-sm font-medium text-gray-200 font-mono">{server.name}</div>
                  <div className="text-xs text-gray-400">{server.description}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500">{server.tools} tools</span>
                <span className="text-xs text-gray-500 font-mono">{server.latency}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  server.status === 'connected' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                }`}>
                  {server.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Protocol Tab */}
      {activeTab === 'protocol' && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">MCP Tool Definition</h3>
            <pre className="text-xs text-green-300 font-mono bg-gray-950 rounded-lg p-4 overflow-x-auto">
              {toolDefinition}
            </pre>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Tool Response</h3>
            <pre className="text-xs text-cyan-300 font-mono bg-gray-950 rounded-lg p-4 overflow-x-auto">
              {toolResponse}
            </pre>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">MCP Protocol Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'JSON-RPC 2.0 based communication',
                'Server discovery & capability negotiation',
                'Streaming responses for long operations',
                'Resource templates for dynamic tools',
                'Sampling for server-initiated LLM calls',
                'Roots for filesystem access control',
                'Progress notifications',
                'Logging & error reporting',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Execution Tab */}
      {activeTab === 'execution' && (
        <div className="animate-fade-in">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Tool Execution Log</h3>
            <div className="space-y-3">
              {[
                { time: '14:23:01', tool: 'web_search', input: '"latest AI papers"', duration: '234ms', status: 'success' },
                { time: '14:23:02', tool: 'database_query', input: 'SELECT * FROM papers WHERE...', duration: '12ms', status: 'success' },
                { time: '14:23:03', tool: 'code_executor', input: 'python: analyze_results(data)', duration: '89ms', status: 'success' },
                { time: '14:23:04', tool: 'file_manager', input: 'write("results.json", data)', duration: '5ms', status: 'success' },
                { time: '14:23:05', tool: 'slack', input: 'send_message(channel, summary)', duration: '-', status: 'error' },
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg font-mono text-xs">
                  <span className="text-gray-500">{log.time}</span>
                  <span className="text-orange-300">{log.tool}</span>
                  <span className="text-gray-400 truncate flex-1">{log.input}</span>
                  <span className="text-gray-500">{log.duration}</span>
                  <span className={log.status === 'success' ? 'text-green-400' : 'text-red-400'}>
                    {log.status === 'success' ? '✓' : '✗'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
