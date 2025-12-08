import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        skills: "Skills",
        projects: "Projects",
        about: "About"
      },
      hero: {
        greeting: "Hi, I'm",
        role: "Full Stack Developer",
        description: "Passionate MERN Stack Developer crafting scalable web solutions with modern technologies",
        contact: "Download Resume"
      },
      skills: {
        title: "My",
        titleBold: "Skills",
        description: "Expertise in modern web technologies"
      },
      projects: {
        title: "My",
        titleBold: "Projects",
        live: "Live",
        socialBlaze: {
          title: "Social Blaze",
          description: "A comprehensive social media management platform for creating posts across different connectors, scheduling content, automating with RSS feeds, and managing everything in calendar view."
        },
        baztel: {
          title: "Baztel eSIM",
          description: "An innovative eSIM purchasing platform that allows travelers to easily buy and activate eSIMs for any destination they plan to visit, ensuring seamless connectivity worldwide."
        },
        pitchset: {
          title: "Pitchset",
          description: "A powerful pitch deck and presentation management platform that helps businesses create, organize, and deliver compelling presentations with professional templates and collaboration features."
        }
      },
      about: {
        title: "About",
        titleBold: "Me",
        description: "Full-stack developer specializing in MERN stack development, with expertise in building efficient, scalable, and high-performance web solutions.",
        education: {
          bachelor: "Bachelor Of Engineering",
          school: "Physics, Chemistry & Maths",
          year: "Year"
        }
      },
      footer: {
        rights: "All rights reserved"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        skills: "Compétences",
        projects: "Projets",
        about: "À propos"
      },
      hero: {
        greeting: "Salut, je suis",
        role: "Développeur Full Stack",
        description: "Développeur MERN Stack passionné créant des solutions web évolutives avec des technologies modernes",
        contact: "Télécharger CV"
      },
      skills: {
        title: "Mes",
        titleBold: "Compétences",
        description: "Expertise dans les technologies web modernes"
      },
      projects: {
        title: "Mes",
        titleBold: "Projets",
        live: "En direct",
        socialBlaze: {
          title: "Social Blaze",
          description: "Une plateforme complète de gestion des médias sociaux pour créer des publications sur différents connecteurs, planifier du contenu, automatiser avec des flux RSS et tout gérer dans une vue calendrier."
        },
        baztel: {
          title: "Baztel eSIM",
          description: "Une plateforme innovante d'achat d'eSIM qui permet aux voyageurs d'acheter et d'activer facilement des eSIM pour toute destination qu'ils prévoient de visiter, garantissant une connectivité transparente dans le monde entier."
        },
        pitchset: {
          title: "Pitchset",
          description: "Une plateforme puissante de gestion de pitch deck et de présentations qui aide les entreprises à créer, organiser et livrer des présentations convaincantes avec des modèles professionnels et des fonctionnalités de collaboration."
        }
      },
      about: {
        title: "À propos",
        titleBold: "de moi",
        description: "Développeur full-stack spécialisé dans le développement MERN stack, avec une expertise dans la création de solutions web efficaces, évolutives et performantes.",
        education: {
          bachelor: "Licence en Ingénierie",
          school: "Physique, Chimie et Mathématiques",
          year: "Année"
        }
      },
      footer: {
        rights: "Tous droits réservés"
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: "Startseite",
        skills: "Fähigkeiten",
        projects: "Projekte",
        about: "Über mich"
      },
      hero: {
        greeting: "Hallo, ich bin",
        role: "Full Stack Entwickler",
        description: "Leidenschaftlicher MERN Stack Entwickler, der skalierbare Weblösungen mit modernen Technologien entwickelt",
        contact: "Lebenslauf herunterladen"
      },
      skills: {
        title: "Meine",
        titleBold: "Fähigkeiten",
        description: "Expertise in modernen Webtechnologien"
      },
      projects: {
        title: "Meine",
        titleBold: "Projekte",
        live: "Live",
        socialBlaze: {
          title: "Social Blaze",
          description: "Eine umfassende Social-Media-Management-Plattform zum Erstellen von Beiträgen über verschiedene Konnektoren, zum Planen von Inhalten, zum Automatisieren mit RSS-Feeds und zum Verwalten von allem in der Kalenderansicht."
        },
        baztel: {
          title: "Baztel eSIM",
          description: "Eine innovative eSIM-Kaufplattform, die es Reisenden ermöglicht, eSIMs für jedes Reiseziel, das sie besuchen möchten, einfach zu kaufen und zu aktivieren und so weltweite nahtlose Konnektivität zu gewährleisten."
        },
        pitchset: {
          title: "Pitchset",
          description: "Eine leistungsstarke Pitch-Deck- und Präsentationsverwaltungsplattform, die Unternehmen hilft, überzeugende Präsentationen mit professionellen Vorlagen und Zusammenarbeitsfunktionen zu erstellen, zu organisieren und zu liefern."
        }
      },
      about: {
        title: "Über",
        titleBold: "mich",
        description: "Full-Stack-Entwickler mit Spezialisierung auf MERN-Stack-Entwicklung, mit Expertise in der Erstellung effizienter, skalierbarer und leistungsstarker Weblösungen.",
        education: {
          bachelor: "Bachelor of Engineering",
          school: "Physik, Chemie und Mathematik",
          year: "Jahr"
        }
      },
      footer: {
        rights: "Alle Rechte vorbehalten"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "होम",
        skills: "कौशल",
        projects: "प्रोजेक्ट्स",
        about: "मेरे बारे में"
      },
      hero: {
        greeting: "नमस्ते, मैं हूँ",
        role: "फुल स्टैक डेवलपर",
        description: "आधुनिक तकनीकों के साथ स्केलेबल वेब सॉल्यूशंस बनाने वाला MERN स्टैक डेवलपर",
        contact: "रिज्यूमे डाउनलोड करें"
      },
      skills: {
        title: "मेरे",
        titleBold: "कौशल",
        description: "आधुनिक वेब तकनीकों में विशेषज्ञता"
      },
      projects: {
        title: "मेरे",
        titleBold: "प्रोजेक्ट्स",
        live: "लाइव",
        socialBlaze: {
          title: "सोशल ब्लेज़",
          description: "विभिन्न कनेक्टर्स पर पोस्ट बनाने, कंटेंट शेड्यूल करने, RSS फीड्स के साथ ऑटोमेट करने और कैलेंडर व्यू में सब कुछ प्रबंधित करने के लिए एक व्यापक सोशल मीडिया प्रबंधन प्लेटफॉर्म।"
        },
        baztel: {
          title: "बाज़टेल eSIM",
          description: "एक अभिनव eSIM खरीद प्लेटफॉर्म जो यात्रियों को किसी भी गंतव्य के लिए आसानी से eSIM खरीदने और सक्रिय करने की अनुमति देता है, दुनिया भर में निर्बाध कनेक्टिविटी सुनिश्चित करता है।"
        },
        pitchset: {
          title: "पिचसेट",
          description: "एक शक्तिशाली पिच डेक और प्रेजेंटेशन मैनेजमेंट प्लेटफॉर्म जो व्यवसायों को पेशेवर टेम्प्लेट और सहयोग सुविधाओं के साथ प्रभावशाली प्रस्तुतियाँ बनाने, व्यवस्थित करने और वितरित करने में मदद करता है।"
        }
      },
      about: {
        title: "मेरे",
        titleBold: "बारे में",
        description: "MERN स्टैक डेवलपमेंट में विशेषज्ञता वाला फुल-स्टैक डेवलपर, कुशल, स्केलेबल और उच्च-प्रदर्शन वेब सॉल्यूशंस बनाने में विशेषज्ञता के साथ।",
        education: {
          bachelor: "बैचलर ऑफ इंजीनियरिंग",
          school: "भौतिकी, रसायन विज्ञान और गणित",
          year: "वर्ष"
        }
      },
      footer: {
        rights: "सर्वाधिकार सुरक्षित"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: localStorage.getItem('language') || 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
