import { Database, Table, Key, Link } from 'lucide-react';

const tables = [
  {
    name: 'agents',
    columns: [
      { name: 'id', type: 'UUID', key: 'PK' },
      { name: 'name', type: 'VARCHAR(255)', key: '' },
      { name: 'config', type: 'JSONB', key: '' },
      { name: 'model_id', type: 'UUID', key: 'FK' },
      { name: 'status', type: 'ENUM', key: '' },
      { name: 'created_at', type: 'TIMESTAMP', key: '' },
    ]
  },
  {
    name: 'conversations',
    columns: [
      { name: 'id', type: 'UUID', key: 'PK' },
      { name: 'user_id', type: 'UUID', key: 'FK' },
      { name: 'agent_id', type: 'UUID', key: 'FK' },
      { name: 'title', type: 'VARCHAR(500)', key: '' },
      { name: 'metadata', type: 'JSONB', key: '' },
      { name: 'created_at', type: 'TIMESTAMP', key: '' },
    ]
  },
  {
    name: 'messages',
    columns: [
      { name: 'id', type: 'UUID', key: 'PK' },
      { name: 'conversation_id', type: 'UUID', key: 'FK' },
      { name: 'role', type: 'ENUM', key: '' },
      { name: 'content', type: 'TEXT', key: '' },
      { name: 'tool_calls', type: 'JSONB', key: '' },
      { name: 'token_count', type: 'INTEGER', key: '' },
      { name: 'latency_ms', type: 'INTEGER', key: '' },
    ]
  },
  {
    name: 'documents',
    columns: [
      { name: 'id', type: 'UUID', key: 'PK' },
      { name: 'source', type: 'VARCHAR(255)', key: '' },
      { name: 'content', type: 'TEXT', key: '' },
      { name: 'embedding_id', type: 'VARCHAR(255)', key: '' },
      { name: 'metadata', type: 'JSONB', key: '' },
      { name: 'chunk_index', type: 'INTEGER', key: '' },
    ]
  },
];

const vectorSchema = `{
  "index": "knowledge_base",
  "dimension": 1536,
  "metric": "cosine",
  "pods": 2,
  "metadata_fields": {
    "source": "string",
    "doc_type": "string",
    "created_at": "date",
    "department": "string",
    "access_level": "integer"
  }
}`;

export default function DatabaseDesign() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
            <Database className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Database & Data Models</h1>
            <p className="text-sm text-gray-400">Data architecture supporting AI/agentic applications</p>
          </div>
        </div>
      </div>

      {/* Database Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Tables', value: '12', icon: Table },
          { label: 'Records', value: '4.2M', icon: Database },
          { label: 'Vector Indexes', value: '3', icon: Key },
          { label: 'Relations', value: '28', icon: Link },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <Icon className="w-5 h-5 text-teal-400 mb-2" />
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Schema Visualization */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Core Schema</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tables.map((table) => (
            <div
              key={table.name}
              className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden animate-fade-in-up"
            >
              <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 flex items-center gap-2">
                <Table className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-mono font-medium text-teal-300">{table.name}</span>
              </div>
              <div className="p-3 space-y-1">
                {table.columns.map((col) => (
                  <div key={col.name} className="flex items-center gap-2 text-xs py-1 px-2 rounded hover:bg-gray-700/30">
                    {col.key === 'PK' && <Key className="w-3 h-3 text-yellow-400" />}
                    {col.key === 'FK' && <Link className="w-3 h-3 text-blue-400" />}
                    {col.key === '' && <div className="w-3 h-3" />}
                    <span className="font-mono text-gray-200">{col.name}</span>
                    <span className="text-gray-500 ml-auto">{col.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vector DB Schema */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Vector Database Schema</h3>
          <pre className="text-xs text-cyan-300 font-mono bg-gray-950 rounded-lg p-4 overflow-x-auto">
            {vectorSchema}
          </pre>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Data Flow</h3>
          <div className="space-y-3">
            {[
              { from: 'User Input', to: 'PostgreSQL', desc: 'Store conversation & metadata' },
              { from: 'Documents', to: 'Pinecone', desc: 'Embeddings + vector search' },
              { from: 'Agent State', to: 'Redis', desc: 'Session cache & rate limiting' },
              { from: 'Model Outputs', to: 'S3', desc: 'Artifacts, logs, checkpoints' },
              { from: 'Analytics', to: 'ClickHouse', desc: 'Time-series metrics & traces' },
            ].map((flow, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                <span className="text-xs font-mono text-teal-300 bg-teal-500/10 px-2 py-1 rounded">{flow.from}</span>
                <span className="text-gray-600">→</span>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">{flow.to}</span>
                <span className="text-xs text-gray-400 ml-auto">{flow.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
