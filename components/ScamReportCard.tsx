import React from 'react';
import { ScamReport } from '../types';

interface ScamReportCardProps {
  report: ScamReport;
}

const ScamReportCard: React.FC<ScamReportCardProps> = ({ report }) => {
  const getStatusColor = (status: 'Verified' | 'Under Review') => {
    return status === 'Verified' ? 'text-green-600' : 'text-yellow-600';
  };

  const getScamTypeColor = (type: ScamReport['scamType']) => {
    switch (type) {
      case 'Employment': return 'bg-blue-500 text-white';
      case 'Money Looting': return 'bg-red-500 text-white';
      case 'Fraudulent App': return 'bg-purple-500 text-white';
      case 'Phishing': return 'bg-orange-500 text-white';
      case 'Investment': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-brand-surface rounded-lg shadow-md overflow-hidden flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-brand-border">
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className={`text-xs font-bold px-2 py-1 rounded ${getScamTypeColor(report.scamType)}`}>
            {report.scamType}
          </span>
          <span className={`flex items-center text-xs font-medium ${getStatusColor(report.status)}`}>
            <span className="w-2 h-2 bg-current rounded-full mr-1.5"></span>
             {report.status}
          </span>
        </div>
        <h3 className="text-lg font-bold text-brand-text-primary mb-1">{report.companyName}</h3>
        <div className="text-xs text-brand-text-secondary mb-3">
          <span>{report.date}</span> | <span>{report.location}</span>
        </div>
        <p className="text-brand-text-secondary text-sm leading-relaxed h-20 overflow-hidden text-ellipsis">
          {report.description}
        </p>
      </div>
      <button className="w-full bg-brand-primary text-white font-bold py-3 px-4 hover:bg-red-700 transition duration-300 ease-in-out text-sm">
        More Details
      </button>
    </div>
  );
};

export default ScamReportCard;