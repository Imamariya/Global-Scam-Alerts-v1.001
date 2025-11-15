import React, { useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import Header from './components/Header';
import Footer from './components/Footer';
import ScamReportCard from './components/ScamReportCard';
import SearchIcon from './components/icons/SearchIcon';
import TwitterIcon from './components/icons/TwitterIcon';
import FacebookIcon from './components/icons/FacebookIcon';
import LinkedInIcon from './components/icons/LinkedInIcon';
import InstagramIcon from './components/icons/InstagramIcon';
import { LATEST_SCAMS } from './constants';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedScams, setDisplayedScams] = useState(LATEST_SCAMS);

  const fuse = useMemo(() => new Fuse(LATEST_SCAMS, {
    keys: ['companyName'],
    includeScore: true,
    threshold: 0.4, // Adjust for more or less strictness
  }), []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setDisplayedScams(LATEST_SCAMS);
      return;
    }

    const results = fuse.search(searchQuery);
    const items = results.map(result => result.item);
    setDisplayedScams(items);
  }, [searchQuery, fuse]);


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1587322289694-0d52a2990a98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </section>

        {/* Latest Scam Reports Section */}
        <section id="reports" className="py-16 md:py-24 bg-gray-50 -mt-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Box */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a company name..."
                  className="w-full py-4 pl-6 pr-14 text-base rounded-full bg-brand-surface text-brand-text-primary placeholder-gray-500 border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all shadow-sm"
                  aria-label="Search for a scamming company"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-5 text-gray-500 pointer-events-none">
                  <SearchIcon className="w-6 h-6" />
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Scam Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {displayedScams.length > 0 ? (
                displayedScams.map((report) => (
                  <ScamReportCard key={report.id} report={report} />
                ))
              ) : (
                <div className="col-span-full text-center text-brand-text-secondary py-12">
                  <h3 className="text-2xl font-semibold">No Matching Reports Found</h3>
                  <p className="mt-2">Try adjusting your search query or check back later for new reports.</p>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="px-8 py-3 w-full sm:w-auto bg-brand-primary text-white font-bold rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg">
                    Report a Scam
                </button>
                <button className="px-8 py-3 w-full sm:w-auto bg-transparent border-2 border-brand-primary text-brand-primary font-bold rounded-full hover:bg-red-50 transition-all">
                    See More
                </button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-surface p-8 md:p-12 rounded-lg shadow-xl max-w-4xl mx-auto border border-brand-border">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Who We Are</h2>
              <div className="space-y-6 text-lg text-brand-text-secondary leading-relaxed text-left">
                <p>
                  <strong>Global Scam Alerts</strong> is a community-driven platform dedicated to fighting fraud on a global scale. We were founded on a simple principle: transparency is the best defense against deception. In a world where scams are increasingly sophisticated, we provide a central hub for individuals to report and research fraudulent activities.
                </p>
                <p>
                  Our focus is on the most pervasive and damaging types of fraud, including <strong className="text-brand-primary">employment scams</strong> that exploit job seekers, <strong className="text-brand-primary">financial scams</strong> that drain savings, and <strong className="text-brand-primary">fraudulent applications</strong> designed to steal personal data. By allowing anyone to report a scam with verifiable proof, we create a powerful, crowd-sourced database of illicit operations.
                </p>
                <p>
                  But we don't just stop at reporting. Our team is committed to analyzing trends, verifying reports, and providing actionable guidance. We help you recognize the red flags, understand the tactics scammers use, and take the necessary steps to protect yourself. For those who have fallen victim, we offer support and direction on how to report to authorities and pursue legal action. Your safety is our priority.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section id="mission" className="pb-16 md:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-surface p-8 md:p-12 rounded-lg shadow-xl max-w-4xl mx-auto border border-brand-border">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-brand-primary">Our Mission</h3>
                    <p className="text-xl text-brand-text-secondary mb-6 text-left">
                        To create a safer digital world by exposing fraudulent activities and empowering individuals to protect themselves and their assets against scams.
                    </p>
                    <ul className="space-y-4 text-brand-text-secondary text-lg text-left">
                        <li className="flex items-start">
                        <span className="text-brand-primary font-bold mr-3">✓</span>
                        <span><strong>Expose:</strong> To shine a bright light on scammers and their methods, making their operations visible to everyone.</span>
                        </li>
                        <li className="flex items-start">
                        <span className="text-brand-primary font-bold mr-3">✓</span>
                        <span><strong>Educate:</strong> To provide the public with the knowledge and tools needed to identify and avoid scams before they happen.</span>
                        </li>
                        <li className="flex items-start">
                        <span className="text-brand-primary font-bold mr-3">✓</span>
                        <span><strong>Empower:</strong> To support victims by guiding them through the reporting and recovery process, helping them reclaim their power.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-brand-primary text-center">Get In Touch</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                    <label htmlFor="name" className="sr-only">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Full Name" required className="w-full bg-brand-surface border border-brand-border rounded-md py-3 px-4 text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                    </div>
                    <div>
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Email Address" required className="w-full bg-brand-surface border border-brand-border rounded-md py-3 px-4 text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                    </div>
                    <div>
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject" className="w-full bg-brand-surface border border-brand-border rounded-md py-3 px-4 text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all" />
                    </div>
                    <div>
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea id="message" name="message" rows={4} placeholder="Your Message" required className="w-full bg-brand-surface border border-brand-border rounded-md py-3 px-4 text-brand-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-md hover:bg-red-700 transition duration-300 ease-in-out">
                    Send Message
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <h4 className="text-lg font-semibold text-brand-text-primary">Follow Us</h4>
                    <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors" aria-label="Twitter">
                        <TwitterIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors" aria-label="Facebook">
                        <FacebookIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors" aria-label="LinkedIn">
                        <LinkedInIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors" aria-label="Instagram">
                        <InstagramIcon className="w-6 h-6" />
                    </a>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;