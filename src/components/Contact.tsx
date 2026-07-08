import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, Sparkles, CheckCircle, Copy, Check, Github, Linkedin, Twitter } from 'lucide-react';
import { developerProfile } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setFormError('Please fill out all fields before submitting.');
      return;
    }

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    // Simulate real database write/network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0f19] relative overflow-hidden">
      {/* Decorative gradient blur sphere */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3 flex items-center justify-center space-x-1"
          >
            <Sparkles size={12} />
            <span>Connect</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '60px' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="h-1 bg-emerald-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels and info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-display text-white tracking-tight">Let's discuss your next launch</h3>
              <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
                Whether you want to build a real-time analytics system, optimize an existing client application, or structure standard deployment planes, feel free to drop a message.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <div className="p-5 bg-gray-950/40 border border-gray-800/80 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-500 uppercase">Direct Email</h4>
                  <p className="text-sm sm:text-base font-semibold text-white mt-1 truncate">{developerProfile.email}</p>
                  <button
                    id="contact-copy-email-btn"
                    onClick={handleCopyEmail}
                    className="flex items-center space-x-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-mono mt-2 transition-colors cursor-pointer"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? 'Copied to clipboard' : 'Copy email address'}</span>
                  </button>
                </div>
              </div>

              <div className="p-5 bg-gray-950/40 border border-gray-800/80 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-semibold tracking-wider text-gray-500 uppercase">Location</h4>
                  <p className="text-sm sm:text-base font-semibold text-white mt-1">{developerProfile.location}</p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">My Professional Networks</h4>
              <div className="flex space-x-3">
                <a
                  id="contact-social-github"
                  href={developerProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-950/40 border border-gray-800 hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:text-emerald-400 text-gray-400 rounded-xl transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  id="contact-social-linkedin"
                  href={developerProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-950/40 border border-gray-800 hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:text-emerald-400 text-gray-400 rounded-xl transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with full feedback */}
          <div className="lg:col-span-7 bg-[#0d1321] border border-gray-800/80 p-6 sm:p-8 rounded-3xl shadow-xl relative border-glow">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">Your Name</label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-950/80 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600 text-sm font-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">Email Address</label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-950/80 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600 text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject-input" className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">Subject</label>
                    <input
                      id="subject-input"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project details, partnership, query..."
                      className="w-full px-4 py-3 bg-gray-950/80 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600 text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message-input" className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">Detailed Message</label>
                    <textarea
                      id="message-input"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Hi Chinna, let's discuss building a scalable Cloud architecture..."
                      className="w-full px-4 py-3 bg-gray-950/80 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600 text-sm font-sans resize-none"
                    />
                  </div>

                  {/* Errors block */}
                  {formError && (
                    <div id="contact-form-error" className="text-xs font-mono text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
                      {formError}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 bg-emerald-500 text-gray-950 font-display font-bold rounded-xl hover:bg-emerald-400 disabled:opacity-50 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/10 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Message'}</span>
                    {!isSubmitting && <Send size={15} />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6 flex flex-col items-center"
                >
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 animate-bounce">
                    <CheckCircle size={44} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display text-white tracking-tight">Message Received!</h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Your project brief has been successfully logged. I will analyze the details and get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    id="contact-reset-btn"
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 px-5 py-2.5 bg-gray-950 border border-gray-800 text-xs font-mono text-gray-300 hover:text-white hover:border-gray-700 rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
