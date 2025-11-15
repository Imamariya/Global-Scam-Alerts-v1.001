
import { ScamReport } from './types';

export const LATEST_SCAMS: ScamReport[] = [
  {
    id: 1,
    companyName: 'Apex Solutions Inc.',
    scamType: 'Employment',
    description: 'Offered a remote data entry job requiring a "refundable" software fee of $200. After payment, all communication ceased.',
    date: '2024-07-20',
    location: 'Global (Online)',
    status: 'Verified',
  },
  {
    id: 2,
    companyName: 'CryptoGain Invest',
    scamType: 'Investment',
    description: 'Promised unrealistic 50% weekly returns on crypto investments. Initial small withdrawals were possible, but larger amounts were blocked.',
    date: '2024-07-18',
    location: 'USA',
    status: 'Verified',
  },
  {
    id: 3,
    companyName: 'QuickLoan App',
    scamType: 'Fraudulent App',
    description: 'A mobile app that harvests personal data and contacts upon installation, then uses it for extortion with high-interest "loans".',
    date: '2024-07-15',
    location: 'India',
    status: 'Under Review',
  },
  {
    id: 4,
    companyName: 'Royal Inheritance Services',
    scamType: 'Money Looting',
    description: 'Email scam claiming the recipient is the heir to a large fortune, requiring "legal fees" to release the funds.',
    date: '2024-07-12',
    location: 'Nigeria',
    status: 'Verified',
  },
  {
    id: 5,
    companyName: 'TechSupport Pro',
    scamType: 'Phishing',
    description: 'Cold calls claiming to be from a major tech company, warning of a virus on the user\'s computer to gain remote access.',
    date: '2024-07-10',
    location: 'Canada',
    status: 'Verified',
  },
];
