import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const ResumeDownload = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = () => {
    setIsGenerating(true);
    
    // The target element is our hidden printable resume template
    const element = document.getElementById('printable-resume');
    
    if (!element) {
      console.error('Portfolio content not found');
      setIsGenerating(false);
      return;
    }
    
    const opt = {
      margin:       0,
      filename:     'ROS_Sopheak_Final.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak:    { mode: 'css', avoid: '.resume-section' },
      enableLinks:  true
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save().then(() => {
      setIsGenerating(false);
    }).catch(err => {
      console.error('PDF Generation Error:', err);
      setIsGenerating(false);
    });
  };

  return (
    <button 
      onClick={handleDownload}
      disabled={isGenerating}
      className="glass-button px-4 py-2 rounded-lg font-medium flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Download Resume"
    >
      {isGenerating ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
      )}
      <span>{isGenerating ? 'Generating...' : 'Download Resume'}</span>
    </button>
  );
};

export default ResumeDownload;
