import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' }
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Select language"
      >
        <MdLanguage size={20} className="text-cyan-400" />
        <span className="text-sm font-large text-black">{currentLanguage.flag}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-52 bg-gray-900/98 backdrop-blur-xl border-2 border-cyan-400/30 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden z-50"
            >
              {languages.map((language) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-all duration-200 border-b border-gray-800/60 last:border-b-0 ${
                    i18n.language === language.code
                      ? 'bg-gradient-to-r from-gray-800/40 to-gray-900/60 text-cyan-300 border-cyan-500/30'
                      : 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/30 hover:to-gray-900/40 hover:text-white'
                  }`}
                  whileHover={{ x: 6, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
                >
                  <span className="text-xl drop-shadow-sm">{language.flag}</span>
                  <span className="text-sm font-medium tracking-wide">{language.name}</span>
                  {i18n.language === language.code && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto text-cyan-400"
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
