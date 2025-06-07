import React, { useState } from 'react';
import { BiGlobe, BiMailSend, BiMapPin, BiMessage, BiPhone, BiSend } from 'react-icons/bi';
import { FaClock, FaUsers } from 'react-icons/fa6';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  category: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  info: string;
  description: string;
}

interface Category {
  value: string;
  label: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form después de 3 segundos
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 3000);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: BiMailSend,
      title: "Email",
      info: "info@rankingsmejoresplayas.org",
      description: "Respuesta en 24-48 horas"
    },
    {
      icon: BiPhone,
      title: "Teléfono",
      info: "+34 900 123 456",
      description: "Lun-Vie 9:00-18:00 CET"
    },
    {
      icon: BiMapPin,
      title: "Ubicación",
      info: "Barcelona, España",
      description: "Oficinas principales"
    },
    {
      icon: BiGlobe,
      title: "Red Global",
      info: "25+ países",
      description: "Evaluadores internacionales"
    }
  ];

  const categories: Category[] = [
    { value: 'general', label: 'Consulta General' },
    { value: 'eiep', label: 'Escuela EIEP' },
    { value: 'consejo', label: 'Consejo Científico' },
    { value: 'evaluacion', label: 'Proceso de Evaluación' },
    { value: 'colaboracion', label: 'Colaboración' },
    { value: 'prensa', label: 'Medios de Comunicación' }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-navy-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BiSend className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Mensaje Enviado!</h3>
          <p className="text-gray-600 mb-4">
            Gracias por contactarnos. Responderemos a tu consulta en las próximas 24-48 horas.
          </p>
          <div className="animate-pulse text-sky-600 text-sm">
            Redirigiendo al formulario...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-navy-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-600 rounded-full mb-4">
            <BiMessage className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestro ranking, la Escuela EIEP o el Consejo Científico? 
            Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((item: ContactInfo, index: number) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-sky-600 font-medium">{item.info}</p>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-gradient-to-br from-sky-500 to-navy-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <FaClock className="w-6 h-6 mr-2" />
                <h3 className="text-lg font-bold">Horarios de Atención</h3>
              </div>
              <div className="space-y-2 text-sky-100">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
              <p className="text-sky-100 text-sm mt-4">
                * Horario Central Europeo (CET)
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h3>
              
              <div className="space-y-6">
                {/* Nombre y Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Categoría */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoría de Consulta
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  >
                    {categories.map((category: Category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Asunto */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="Resumen de tu consulta"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Detalla tu consulta, pregunta o comentario..."
                  />
                </div>

                {/* Botón de envío */}
                <div className="flex items-center justify-between pt-4">
                  <p className="text-gray-500 text-sm">
                    * Campos obligatorios
                  </p>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <BiSend className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA adicional */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <FaUsers className="w-8 h-8 text-sky-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">¿Interesado en Colaborar?</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Si eres investigador, universidad o institución y quieres formar parte de nuestra red global, 
              contáctanos para conocer las oportunidades de colaboración.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-medium">
                Únete a EIEP
              </div>
              <div className="bg-conservation-50 text-conservation-700 px-4 py-2 rounded-full text-sm font-medium">
                Consejo Científico
              </div>
              <div className="bg-protection-50 text-protection-700 px-4 py-2 rounded-full text-sm font-medium">
                Evaluador Internacional
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;