import { Users, GitBranch, Rocket, CheckCircle, Clock, ArrowRight, MessageSquare, Target } from 'lucide-react';

const pipelineStages = [
  { stage: 'Research & POC', duration: '1-2 weeks', status: 'complete', items: ['Literature review', 'Prototype development', 'Feasibility assessment', 'Initial benchmarks'] },
  { stage: 'Design & Planning', duration: '1 week', status: 'complete', items: ['Architecture design', 'API specification', 'Data model design', 'Security review'] },
  { stage: 'Development', duration: '3-4 weeks', status: 'complete', items: ['Core implementation', 'Integration testing', 'Performance optimization', 'Documentation'] },
  { stage: 'Testing & QA', duration: '2 weeks', status: 'active', items: ['Unit & integration tests', 'Load testing', 'Security audit', 'User acceptance testing'] },
  { stage: 'Staging', duration: '1 week', status: 'upcoming', items: ['Staging deployment', 'Monitoring setup', 'Runbook creation', 'Team training'] },
  { stage: 'Production', duration: 'Ongoing', status: 'upcoming', items: ['Gradual rollout', 'Canary deployment', 'Monitoring & alerting', 'Continuous improvement'] },
];

const teamRoles = [
  { role: 'AI/ML Engineer', count: 3, focus: 'Model development, prompt engineering, evaluation' },
  { role: 'Backend Engineer', count: 2, focus: 'API development, infrastructure, data pipelines' },
  { role: 'Platform Engineer', count: 1, focus: 'MLOps, deployment, monitoring, scaling' },
  { role: 'Product Manager', count: 1, focus: 'Requirements, prioritization, stakeholder management' },
  { role: 'Security Engineer', count: 1, focus: 'Security review, compliance, access control' },
];

const recentMilestones = [
  { title: 'RAG Pipeline v2.0 Launched', date: '2025-12-01', team: 'AI + Backend', impact: '40% better retrieval accuracy' },
  { title: 'Agent Framework Released', date: '2025-11-15', team: 'AI + Platform', impact: '3 new agent types deployed' },
  { title: 'Cost Optimization Sprint', date: '2025-11-01', team: 'Platform', impact: '32% reduction in monthly costs' },
  { title: 'Security Audit Passed', date: '2025-10-20', team: 'Security + All', impact: 'SOC 2 compliance achieved' },
  { title: 'Model Router v1.0', date: '2025-10-05', team: 'AI + Backend', impact: 'Smart model selection, 25% cost savings' },
];

const collaborationTools = [
  { tool: 'GitHub', usage: 'Code, PRs, CI/CD', active: true },
  { tool: 'Linear', usage: 'Issue tracking, sprints', active: true },
  { tool: 'Notion', usage: 'Documentation, specs', active: true },
  { tool: 'Figma', usage: 'Design, architecture diagrams', active: true },
  { tool: 'Slack', usage: 'Communication, alerts', active: true },
  { tool: 'Grafana', usage: 'Monitoring dashboards', active: true },
];

export default function Collaboration() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Collaboration & Delivery</h1>
            <p className="text-sm text-gray-400">Taking AI solutions from POC to production with cross-functional teams</p>
          </div>
        </div>
      </div>

      {/* POC to Production Pipeline */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Rocket className="w-5 h-5 text-fuchsia-400" />
          <h3 className="text-lg font-semibold text-gray-200">POC to Production Pipeline</h3>
        </div>
        
        <div className="space-y-3">
          {pipelineStages.map((stage, index) => (
            <div
              key={stage.stage}
              className={`p-4 rounded-lg border animate-fade-in-up stagger-${index + 1} ${
                stage.status === 'complete' ? 'bg-green-500/5 border-green-500/20' :
                stage.status === 'active' ? 'bg-fuchsia-500/5 border-fuchsia-500/30' :
                'bg-gray-800/30 border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    stage.status === 'complete' ? 'bg-green-500 text-white' :
                    stage.status === 'active' ? 'bg-fuchsia-500 text-white animate-pulse' :
                    'bg-gray-700 text-gray-400'
                  }`}>
                    {stage.status === 'complete' ? '✓' : index + 1}
                  </div>
                  <span className="text-sm font-medium text-gray-200">{stage.stage}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />{stage.duration}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    stage.status === 'complete' ? 'bg-green-500/10 text-green-400' :
                    stage.status === 'active' ? 'bg-fuchsia-500/10 text-fuchsia-400' :
                    'bg-gray-700 text-gray-400'
                  }`}>
                    {stage.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 ml-9">
                {stage.items.map((item) => (
                  <span key={item} className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team & Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Team Composition */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-fuchsia-400" />
            <h3 className="text-lg font-semibold text-gray-200">Team Composition</h3>
          </div>
          <div className="space-y-3">
            {teamRoles.map((role) => (
              <div key={role.role} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-xs font-bold text-fuchsia-300">
                  {role.count}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-200">{role.role}</div>
                  <div className="text-xs text-gray-400">{role.focus}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between text-sm">
            <span className="text-gray-400">Total Team Size</span>
            <span className="text-white font-bold">8 members</span>
          </div>
        </div>

        {/* Recent Milestones */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-fuchsia-400" />
            <h3 className="text-lg font-semibold text-gray-200">Recent Milestones</h3>
          </div>
          <div className="space-y-3">
            {recentMilestones.map((milestone) => (
              <div key={milestone.title} className="p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-200">{milestone.title}</span>
                  <span className="text-xs text-gray-500">{milestone.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-fuchsia-300 bg-fuchsia-500/10 px-2 py-0.5 rounded">{milestone.team}</span>
                  <span className="text-xs text-gray-400">{milestone.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collaboration Tools */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-fuchsia-400" />
          <h3 className="text-lg font-semibold text-gray-200">Collaboration Stack</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {collaborationTools.map((tool) => (
            <div key={tool.tool} className="p-3 bg-gray-800/50 rounded-lg text-center">
              <div className="text-sm font-medium text-gray-200">{tool.tool}</div>
              <div className="text-xs text-gray-400 mt-1">{tool.usage}</div>
              {tool.active && (
                <div className="flex items-center justify-center gap-1 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs text-green-400">Active</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
