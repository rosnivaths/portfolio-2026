import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, content, tags, icon, actionLink, actionText }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ margin: 0 }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-brand-dark border border-slate-700/50 shadow-2xl rounded-2xl overflow-hidden animate-fade-in sm:scale-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50 shrink-0">
          <div className="flex items-center gap-4">
            {icon && (
              <div className="p-3 rounded-xl bg-slate-800/80">
                {icon}
              </div>
            )}
            <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 overflow-y-auto">
          <div className="text-slate-300 leading-relaxed mb-6 whitespace-pre-line text-lg">
            {content}
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-sm font-medium rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {actionLink && (
              <a 
                href={actionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700 ml-auto mt-4 sm:mt-0"
              >
                {actionText || 'View Details'} <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
