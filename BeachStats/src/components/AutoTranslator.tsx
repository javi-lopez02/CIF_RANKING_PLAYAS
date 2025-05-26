import React, { useState } from 'react';
import { BiCheck, BiGlobe } from 'react-icons/bi';

interface Language {
  name: string;
  flag: string;
  code: string;
}

interface Translations {
  title: string;
  selectLang: string;
  translating: string;
  translated: string;
  error: string;
}

type LanguageCode = 'es' | 'en' | 'de' | 'pt' | 'fr' | 'it';
type TranslationStatus = 'ready' | 'translating' | 'translated' | 'error';

const AutoTranslator: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('es');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<TranslationStatus>('ready');
  const [notification, setNotification] = useState<string>('');

  const languages: Record<LanguageCode, Language> = {
    es: { name: 'Español', flag: '🇪🇸', code: 'es' },
    en: { name: 'English', flag: '🇺🇸', code: 'en' },
    de: { name: 'Deutsch', flag: '🇩🇪', code: 'de' },
    pt: { name: 'Português', flag: '🇵🇹', code: 'pt' },
    fr: { name: 'Français', flag: '🇫🇷', code: 'fr' },
    it: { name: 'Italiano', flag: '🇮🇹', code: 'it' }
  };

  const translations: Record<LanguageCode, Translations> = {
    es: {
      title: 'Traductor Automático',
      selectLang: 'Seleccionar idioma',
      translating: 'Traduciendo página...',
      translated: 'Página traducida',
      error: 'Error al traducir'
    },
    en: {
      title: 'Auto Translator',
      selectLang: 'Select language',
      translating: 'Translating page...',
      translated: 'Page translated',
      error: 'Translation error'
    },
    de: {
      title: 'Auto-Übersetzer',
      selectLang: 'Sprache wählen',
      translating: 'Seite wird übersetzt...',
      translated: 'Seite übersetzt',
      error: 'Übersetzungsfehler'
    },
    pt: {
      title: 'Tradutor Automático',
      selectLang: 'Selecionar idioma',
      translating: 'Traduzindo página...',
      translated: 'Página traduzida',
      error: 'Erro na tradução'
    },
    fr: {
      title: 'Traducteur Automatique',
      selectLang: 'Sélectionner la langue',
      translating: 'Traduction en cours...',
      translated: 'Page traduite',
      error: 'Erreur de traduction'
    },
    it: {
      title: 'Traduttore Automatico',
      selectLang: 'Seleziona lingua',
      translating: 'Traduzione in corso...',
      translated: 'Pagina tradotta',
      error: 'Errore di traduzione'
    }
  };

  // Función para activar el traductor integrado del navegador
  const triggerBrowserTranslation = (targetLang: LanguageCode): void => {
    // Establecer el idioma de la página
    document.documentElement.lang = currentLang;
    
    // Agregar meta tag para especificar el idioma
    let langMeta = document.querySelector('meta[name="google"]') as HTMLMetaElement;
    if (!langMeta) {
      langMeta = document.createElement('meta');
      langMeta.name = 'google';
      document.head.appendChild(langMeta);
    }
    langMeta.content = 'translate';

    // Intentar activar la traducción automática del navegador
    // Chrome y Edge soportan esto
    if ('chrome' in window || 'edge' in window) {
      // Crear evento personalizado para trigger de traducción
      const translateEvent = new CustomEvent('translate', {
        detail: { targetLanguage: targetLang }
      });
      document.dispatchEvent(translateEvent);
    }

    // Mostrar el popup de traducción si está disponible
    if (typeof (window as any).google !== 'undefined' && (window as any).google.translate) {
      (window as any).google.translate.TranslateElement.getInstance().showBanner();
    }
  };

  // Función alternativa: Usar Google Translate Element
  const initGoogleTranslateWidget = (): void => {
    // Agregar el script de Google Translate si no existe
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.head.appendChild(script);

      // Función callback para inicializar el widget
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: currentLang,
          includedLanguages: 'es,en,de,pt,fr,it',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
      };

      // Crear div para el widget (oculto)
      if (!document.getElementById('google_translate_element')) {
        const div = document.createElement('div');
        div.id = 'google_translate_element';
        div.style.display = 'none';
        document.body.appendChild(div);
      }
    }
  };

  const translatePage = async (targetLang: LanguageCode): Promise<void> => {
    if (targetLang === currentLang) return;
    
    setStatus('translating');
    setNotification(translations[currentLang].translating);
    
    try {
      // MÉTODO 1: Activar traducción integrada del navegador
      // triggerBrowserTranslation(targetLang);
      
      // MÉTODO 2: Inicializar Google Translate Widget (descomenta si prefieres este método)
      // initGoogleTranslateWidget();
      
      // MÉTODO 3: Abrir en nueva pestaña con Google Translate (más confiable)
      const currentUrl = encodeURIComponent(window.location.href);
      window.open(`https://translate.google.com/translate?sl=${currentLang}&tl=${targetLang}&u=${currentUrl}`, '_blank');
      
      setCurrentLang(targetLang);
      setStatus('translated');
      setNotification(translations[targetLang].translated);
      
      setTimeout(() => {
        setNotification('');
        setStatus('ready');
      }, 2000);
      
    } catch (error) {
      console.error('Translation error:', error);
      setStatus('error');
      setNotification(translations[currentLang].error);
      setTimeout(() => {
        setNotification('');
        setStatus('ready');
      }, 3000);
    }
    
    setIsOpen(false);
  };

  const handleToggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleCloseDropdown = (): void => {
    setIsOpen(false);
  };

  const getNotificationStyles = (status: TranslationStatus): string => {
    const baseStyles = 'absolute top-16 right-0 px-4 py-2 rounded-lg shadow-lg text-white text-sm whitespace-nowrap transition-all duration-300';
    
    switch (status) {
      case 'translating':
        return `${baseStyles} bg-blue-500`;
      case 'translated':
        return `${baseStyles} bg-green-500`;
      case 'error':
        return `${baseStyles} bg-red-500`;
      default:
        return baseStyles;
    }
  };

  const getButtonStyles = (code: LanguageCode, currentLang: LanguageCode, status: TranslationStatus): string => {
    const baseStyles = 'w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between group';
    const activeStyles = code === currentLang ? 'bg-blue-50 text-blue-600' : 'text-gray-700';
    const disabledStyles = status === 'translating' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    return `${baseStyles} ${activeStyles} ${disabledStyles}`;
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Notificación */}
      {notification && (
        <div className={getNotificationStyles(status)}>
          <div className="flex items-center gap-2">
            {status === 'translating' && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {status === 'translated' && <BiCheck size={16} />}
            {notification}
          </div>
        </div>
      )}

      {/* Botón principal */}
      <div className="relative">
        <button
          onClick={handleToggleDropdown}
          className="bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
          disabled={status === 'translating'}
          aria-label={translations[currentLang].title}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg" role="img" aria-label={languages[currentLang].name}>
              {languages[currentLang].flag}
            </span>
            <BiGlobe size={20} className="text-gray-600" />
          </div>
        </button>

        {/* Dropdown de idiomas */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl min-w-[180px] overflow-hidden">
            <div className="p-3 border-b border-gray-100 bg-gray-50">
              <span className="text-sm font-medium text-gray-700">
                {translations[currentLang].selectLang}
              </span>
            </div>
            
            <div className="max-h-60 overflow-y-auto">
              {(Object.entries(languages) as [LanguageCode, Language][]).map(([code, lang]) => (
                <button
                  key={code}
                  onClick={() => translatePage(code)}
                  disabled={status === 'translating'}
                  className={getButtonStyles(code, currentLang, status)}
                  aria-label={`${translations[currentLang].selectLang}: ${lang.name}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg" role="img" aria-label={lang.name}>
                      {lang.flag}
                    </span>
                    <span className="font-medium">{lang.name}</span>
                  </div>
                  {code === currentLang && (
                    <BiCheck size={16} className="text-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Overlay para cerrar dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={handleCloseDropdown}
        />
      )}
    </div>
  );
};

export default AutoTranslator;