import { useState } from 'react';
import { Shield, Lock, Eye, FileText, AlertTriangle, CheckCircle, Users, Scale } from 'lucide-react';

const governancePillars = [
  {
    id: 'security',
    name: 'Security',
    icon: Lock,
    color: 'red',
    controls: [
      'API key rotation (90-day cycle)',
      'Input/output sanitization',
      'Prompt injection detection',
      'Sandboxed code execution',
      'Network isolation for model serving',
    ]
  },
  {
    id: 'access',
    name: 'Access Control',
    icon: Users,
    color: 'blue',
    controls: [
      'RBAC with fine-grained permissions',
      'SSO integration (SAML/OIDC)',
      'Model-level access policies',
      'Tool execution authorization',
      'API key scoping & rate limits',
    ]
  },
  {
    id: 'privacy',
    name: 'Data Privacy',
    icon: Eye,
    color: 'green',
    controls: [
      'PII detection & redaction',
      'Data residency controls',
      'Encryption at rest & transit',
      'Consent management',
      'Right to deletion support',
    ]
  },
  {
    id: 'audit',
    name: 'Auditability',
    icon: FileText,
    color: 'purple',
    controls: [
      'Complete request/response logging',
      'Agent decision trace storage',
      'Model version tracking',
      'Change management records',
      'Compliance reporting (SOC2, GDPR)',
    ]
  },
];

const complianceFrameworks = [
  { name: 'SOC 2 Type II', status: 'compliant', lastAudit: '2025-09' },
  { name: 'GDPR', status: 'compliant', lastAudit: '2025-11' },
  { name: 'HIPAA', status: 'in-progress', lastAudit: '2025-06' },
  { name: 'ISO 27001', status: 'compliant', lastAudit: '2025-08' },
  { name: 'EU AI Act', status: 'in-progress', lastAudit: '2025-10' },
];

const riskAssessments = [
  { risk: 'Prompt Injection', severity: 'high', mitigation: 'Input validation + output filtering', status: 'mitigated' },
  { risk: 'Data Leakage', severity: 'high', mitigation: 'PII detection + access controls', status: 'mitigated' },
  { risk: 'Model Bias', severity: 'medium', mitigation: 'Bias testing + diverse training data', status: 'monitoring' },
  { risk: 'Hallucination', severity: 'medium', mitigation: 'RAG grounding + confidence scoring', status: 'mitigated' },
  { risk: 'Denial of Service', severity: 'medium', mitigation: 'Rate limiting + auto-scaling', status: 'mitigated' },
];

export default function AIGovernance() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">AI Governance</h1>
            <p className="text-sm text-gray-400">Responsible AI practices: security, access, privacy, and auditability</p>
          </div>
        </div>
      </div>

      {/* Governance Score */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-1">Overall Governance Score</h3>
            <p className="text-sm text-gray-400">Based on 47 controls across 4 pillars</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-green-400">94%</div>
            <div className="text-xs text-gray-400">+2% from last month</div>
          </div>
        </div>
        <div className="mt-4 h-3 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full bar-animate"
            style={{ width: '94%' }}
          />
        </div>
      </div>

      {/* Governance Pillars */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {governancePillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(index)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activePillar === index
                  ? 'bg-gray-800 border-red-500/30'
                  : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
              }`}
            >
              <Icon className={`w-6 h-6 mb-2 ${
                pillar.color === 'red' ? 'text-red-400' :
                pillar.color === 'blue' ? 'text-blue-400' :
                pillar.color === 'green' ? 'text-green-400' : 'text-purple-400'
              }`} />
              <div className="text-sm font-medium text-gray-200">{pillar.name}</div>
              <div className="text-xs text-gray-500 mt-1">{pillar.controls.length} controls</div>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Details */}
      <div
        key={activePillar}
        className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6 animate-fade-in-up"
      >
        <h3 className="text-lg font-semibold text-gray-200 mb-4">
          {governancePillars[activePillar].name} Controls
        </h3>
        <div className="space-y-2">
          {governancePillars[activePillar].controls.map((control) => (
            <div key={control} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-sm text-gray-300">{control}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance & Risk */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-gray-200">Compliance Frameworks</h3>
          </div>
          <div className="space-y-3">
            {complianceFrameworks.map((fw) => (
              <div key={fw.name} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <span className="text-sm text-gray-200">{fw.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500">{fw.lastAudit}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    fw.status === 'compliant' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                  }`}>
                    {fw.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-gray-200">Risk Assessment</h3>
          </div>
          <div className="space-y-3">
            {riskAssessments.map((risk) => (
              <div key={risk.risk} className="p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-200">{risk.risk}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    risk.severity === 'high' ? 'bg-red-500/10 text-red-400' : 'bg-yellow-500/10 text-yellow-400'
                  }`}>
                    {risk.severity}
                  </span>
                </div>
                <div className="text-xs text-gray-400">{risk.mitigation}</div>
                <div className="text-xs text-green-400 mt-1">Status: {risk.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
