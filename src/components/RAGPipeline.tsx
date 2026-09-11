import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Layers, ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';

const pipelineStages = [
  { 
    id: 'ingestion', 
    label: 'Ingestion', 
    icon: '📥',
    description: 'Load documents from multiple sources',
    details: ['PDF parsing', 'HTML extraction', 'API data fetch', 'Database sync']
  },
  { 
    id: 'chunking', 
    label: 'Chunking', 
    icon: '✂️',
    description: 'Split documents into semantic chunks',
    details: ['Recursive splitting', 'Semantic chunking', 'Overlap: 20%', 'Target: 512 tokens']
  },
  { 
    id: 'embedding', 
    label: 'Embedding', 
    icon: '🔢',
    description: 'Generate vector embeddings',
    details: ['text-embedding-3-large', '1536 dimensions', 'Batch processing', 'Cache hits: 87%']
  },
  { 
    id: 'storage', 
    label: 'Vector Store', 
    icon: '💾',
    description: 'Store embeddings with metadata',
    details: ['Pinecone index', 'Metadata filters', 'HNSW algorithm', '12M vectors']
  },
  { 
    id: 'retrieval', 
    label: 'Retrieval', 
    icon: '🔍',
    description: 'Find relevant chunks for query',
    details: ['Hybrid search', 'MMR diversification', 'Top-K: 20', 'Score threshold: 0.7']
  },
  { 
    id: 'reranking', 
    label: 'Reranking', 
    icon: '📊',
    description: 'Rerank results for relevance',
    details: ['Cross-encoder model', 'Cohere Rerank', 'Context-aware', 'Top-5 final']
  },
];

const evaluationMetrics = [
  { name: 'Faithfulness', score: 0.94, description: 'Response grounded in context' },
  { name: 'Relevance', score: 0.91, description: 'Context relevant to query' },
  { name: 'Recall@5', score: 0.88, description: 'Relevant docs in top 5' },
  { name: 'Precision@5', score: 0.85, description: 'Top 5 are relevant' },
  { name: 'Answer Correctness', score: 0.92, description: 'Final answer accuracy' },
];

export default function RAGPipeline() {
  const [activeStage, setActiveStage] = useState(0);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<string[] | null>(null);

  const simulateSearch = () => {
    if (!query.trim()) return;
    setSearching(true);
    setResults(null);
    setTimeout(() => {
      setResults([
        'Chunk #1247 (score: 0.94) - "The transformer architecture uses self-attention mechanisms..."',
        'Chunk #892 (score: 0.89) - "Retrieval augmented generation combines retrieval with..."',
        'Chunk #2103 (score: 0.86) - "Vector embeddings capture semantic similarity between..."',
        'Chunk #456 (score: 0.82) - "The reranking stage uses cross-encoder models to..."',
        'Chunk #1789 (score: 0.79) - "Chunking strategies significantly impact retrieval quality..."',
      ]);
      setSearching(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Search className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">RAG Pipeline</h1>
            <p className="text-sm text-gray-400">Retrieval-Augmented Generation with full pipeline management</p>
          </div>
        </div>
      </div>

      {/* Pipeline Visualization */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Pipeline Stages</h3>
        
        {/* Pipeline Flow */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {pipelineStages.map((stage, index) => (
            <div key={stage.id} className="flex items-center gap-2">
              <button
                onClick={() => setActiveStage(index)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                  activeStage === index 
                    ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300' 
                    : 'bg-gray-800 border border-gray-700 text-gray-400 hover:border-gray-600'
                }`}
              >
                <span>{stage.icon}</span>
                <span className="hidden sm:inline">{stage.label}</span>
              </button>
              {index < pipelineStages.length - 1 && (
                <ArrowRight className="w-4 h-4 text-gray-600 hidden sm:block" />
              )}
            </div>
          ))}
        </div>

        {/* Active Stage Detail */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{pipelineStages[activeStage].icon}</span>
            <h4 className="font-medium text-gray-200">{pipelineStages[activeStage].label}</h4>
          </div>
          <p className="text-sm text-gray-400 mb-3">{pipelineStages[activeStage].description}</p>
          <div className="grid grid-cols-2 gap-2">
            {pipelineStages[activeStage].details.map((detail) => (
              <div key={detail} className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400" />
                {detail}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Search Demo */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Interactive Retrieval Demo</h3>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && simulateSearch()}
            placeholder="Enter a query to search the knowledge base..."
            className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500"
          />
          <button
            onClick={simulateSearch}
            disabled={searching}
            className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 rounded-lg text-sm font-medium transition-all"
          >
            {searching ? 'Searching...' : 'Search'}
          </button>
        </div>
        
        {results && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2"
          >
            {results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg"
              >
                <p className="text-sm text-gray-300 font-mono">{result}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Evaluation Metrics */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-semibold text-gray-200">RAG Evaluation Metrics</h3>
        </div>
        <div className="space-y-3">
          {evaluationMetrics.map((metric) => (
            <div key={metric.name} className="flex items-center gap-4">
              <div className="w-32 text-sm text-gray-300">{metric.name}</div>
              <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.score * 100}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full rounded-full ${
                    metric.score >= 0.9 ? 'bg-green-500' : metric.score >= 0.8 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                />
              </div>
              <div className="w-12 text-sm font-mono text-gray-300 text-right">{(metric.score * 100).toFixed(0)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
