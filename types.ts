
export interface ScamReport {
  id: number;
  companyName: string;
  scamType: 'Employment' | 'Money Looting' | 'Fraudulent App' | 'Phishing' | 'Investment';
  description: string;
  date: string;
  location: string;
  status: 'Verified' | 'Under Review';
}
