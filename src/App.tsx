import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Database, Eye, Shield, Zap, Users, 
  Workflow, Search, Settings, Server, GitBranch,
  ChevronRight, Menu, X
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import AgenticAISystem from './components/AgenticAISystem';
import RAGPipeline from './components/RAGPipeline';
import ContextEngineering from './components/ContextEngineering';
import MCPTools from './components/MCPTools';
import ModelOptimization from './components/ModelOptimization';
import BackendAPIs from './components/BackendAPIs';
import DatabaseDesign from './components/DatabaseDesign';
import AIObservability from './components/AIObservability';
import AIGovernance from './components/AIGovernance';
import PerformanceOptimization from './components/PerformanceOptimization';
import Collaboration from './components/Collaboration';

const sections = [
  { id: 'hero', label: 'Overview', icon: Brain },
  { id: 'agentic', label: 'Agentic AI', icon: Workflow },
  { id: 'rag', label: 'RAG Pipeline', icon: Search },
  { id: 'context', label: 'Context Eng.', icon: GitBranch },
  { id: 'mcp', label: 'MCP Tools', icon: Settings },
  { id: 'models', label: 'Model Ops', icon: Brain },
  { id: 'backend', label: 'Backend/APIs', icon: Server },
  { id: 'database', label: 'Data Models', icon: Database },
  { id: 'observability', label: 'Observability', icon: Eye },
  { id: 'governance', label: 'Governance', icon: Shield },
  { id: 'performance', label: 'Optimization', icon: Zap },
  { id: 'collaboration', label: 'Collaboration', icon: Users },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'hero': return <HeroSection onNavigate={setActiveSection} />;
      case 'agentic': return <AgenticAISystem />;
      case 'rag': return <RAGPipeline />;
      case 'context': return <ContextEngineering />;
      case 'mcp': return <MCPTools />;
      case 'models': return <ModelOptimization />;
      case 'backend': return <BackendAPIs />;
      case 'database': return <DatabaseDesign />;
      case 'observability': return <AIObservability />;
      case 'governance': return <AIGovernance />;
      case 'performance': return <PerformanceOptimization />;
      case 'collaboration': return <Collaboration />;
      default: return <HeroSection onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* Sidebar Navigation */}
      <nav className="hidden lg:flex flex-col w-64 bg-gray-900/80 border-r border-gray-800 p-4 fixed h-full overflow-y-auto">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            AI Platform
          </span>
        </div>
        
        <div className="space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  isActive 
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{section.label}</span>
                {isActive && <ChevronRight className="w-3 h-3 ml-auto" />}
              </button>
            );
          })}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-800">
          <div className="px-2 py-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-500">All systems operational</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg border border-gray-700"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="lg:hidden fixed inset-0 z-40 bg-gray-950/95 p-4 pt-16"
          >
            <div className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      isActive 
                        ? 'bg-violet-500/20 text-violet-300' 
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-4 lg:p-8"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
