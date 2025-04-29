import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";
import { Experience_Years, SpecializationAreas, Study_Level } from "../../types";

interface FormData {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  institution: string;
  codeNode: string;
  graduatedDate: string;
  studyLevel: Study_Level | undefined;
  experienceYears: Experience_Years | undefined;
  specializationAreas: SpecializationAreas[] | string[];
}

export default function BeachRegisterForm() {

  // Estado para manejar los datos del formulario a través de los pasos
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    institution: "",
    codeNode: "",
    graduatedDate: "",
    studyLevel: undefined,
    experienceYears: undefined,
    specializationAreas: [],
  });

  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Estado de error y autenticación
  const [error, setError] = useState<Array<string>>([]);
  const { errors, signUp, isAuth } = useAuth();
  const navigate = useNavigate();

  // Limpiar errores después de 5 segundos
  useEffect(() => {
    if (error.length > 0) {
      const time = setTimeout(() => {
        setError([]);
      }, 5000);
      return () => clearTimeout(time);
    }
  }, [error]);

  // Actualizar errores cuando cambien en el hook de autenticación
  useEffect(() => {
    setError(errors);
  }, [errors]);

  // Redirigir si está autenticado
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const studyLevelOptions = [
    "SECONDARY_UNIVERSITY",
    "GRADUATE_UNIVERSITY",
    "SPECIALIZATION",
    "MASTER",
    "DOCTORATE",
  ];

  const experienceYearsOptions = [
    "LESS_5",
    "BETWEEN_5_10",
    "BETWEEN_11_15",
    "BETWEEN_16_20",
    "MORE_THAN_20",
  ];

  const specializationAreasOptions = [
    {
      id: "BIOLOGIA_ECOLOGIA",
      value: "BIOLOGIA_ECOLOGIA",
      name: "BIOLOGIA ECOLOGIA",
    },
    {
      id: "GEOGRAFIA",
      value: "GEOGRAFIA",
      name: "GEOGRAFIA",
    },
    { id: "GEOLOGIA", value: "GEOLOGIA", name: "GEOLOGIA" },
    {
      id: "GESTION_COSTERA",
      value: "GESTION_COSTERA",
      name: "GESTION COSTERA",
    },
    {
      id: "INGENIERIA",
      value: "INGENIERIA",
      name: "INGENIERIA",
    },
    {
      id: "OCEANOGRAFIA",
      value: "OCEANOGRAFIA",
      name: "OCEANOGRAFIA",
    },
    { id: "QUIMICA", value: "QUIMICA", name: "QUIMICA" },
    { id: "TURISMO", value: "TURISMO", name: "TURISMO" },
    { id: "OTROS", value: "OTROS", name: "OTROS" },
  ];

  // Manejar cambios en cualquier input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData((prev) => ({
      ...prev,
      specializationAreas: selectedOptions,
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: string[] = [];

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.push("Nombre completo es requerido");
      }

      if (!formData.email.trim()) {
        newErrors.push("Email es requerido");
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.push("Email no válido");
      }

      if (!formData.username.trim()) {
        newErrors.push("Nombre de usuario es requerido");
      } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
        newErrors.push(
          "El nombre de usuario solo puede contener letras, números y guiones bajos"
        );
      }

      if (!formData.password) {
        newErrors.push("Contraseña es requerida");
      }

      if (
        !formData.confirmPassword ||
        formData.password !== formData.confirmPassword
      ) {
        newErrors.push("Las contraseñas no coinciden");
      }
    } else if (currentStep === 2) {
      if (!formData.institution.trim()) {
        newErrors.push("Institución es requerida");
      }

      if (!formData.codeNode.trim()) {
        newErrors.push("Código de nodo es requerido");
      }

      if (!formData.graduatedDate) {
        newErrors.push("Fecha de graduación es requerida");
      }

      if (!formData.studyLevel) {
        newErrors.push("Nivel de estudios es requerido");
      }

      if (!formData.experienceYears) {
        newErrors.push("Años de experiencia es requerido");
      }
    } else if (currentStep === 3) {
      if (formData.specializationAreas.length === 0) {
        newErrors.push("Selecciona al menos un área de especialización");
      }
    }

    if (newErrors.length > 0) {
      setError(newErrors);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Validar el paso actual
      if (!validateStep(step)) {
        setIsLoading(false);
        return;
      }

      // Si es el paso final y no hay errores, procedemos con el registro
      if (step === 3) {
        await signUp({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          username: formData.username,
          institution: formData.institution,
          codeNode: formData.codeNode,
          graduatedDate: formData.graduatedDate,
          studyLevel: formData.studyLevel,
          experienceYears: formData.experienceYears,
          specializationAreas: formData.specializationAreas,
        });

        // Limpiar el formulario después de un registro exitoso
        setFormData({
          name: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          institution: "",
          codeNode: "",
          graduatedDate: "",
          studyLevel: undefined,
          experienceYears: undefined,
          specializationAreas: [],
        });
      } else {
        // Si no es el paso final, avanzamos al siguiente
        nextStep();
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      setError(["Error en el proceso de registro"]);
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex min-h-screen">
      {/* Panel lateral con imagen de playa */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-700 opacity-80"></div>
        <img
          src="/api/placeholder/800/600"
          alt="Hermosa playa"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-white">
          <h2 className="text-4xl font-bold mb-4">Beach Ranking</h2>
          <p className="text-xl max-w-md text-center">
            Únete a nuestra comunidad y ayúdanos a descubrir las mejores playas
            del mundo
          </p>
          <div className="mt-8">
            <ul className="space-y-2">
              <li className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 1
                      ? "bg-white text-blue-600"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  1
                </div>
                <span className="ml-3">Información Básica</span>
              </li>
              <li className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 2
                      ? "bg-white text-blue-600"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  2
                </div>
                <span className="ml-3">Perfil Académico</span>
              </li>
              <li className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 3
                      ? "bg-white text-blue-600"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  3
                </div>
                <span className="ml-3">Áreas de Especialización</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Formulario de registro */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img
              src="/api/placeholder/120/120"
              alt="Logo"
              className="mx-auto h-20 w-20 mb-4 rounded-full"
            />
            <h1 className="text-3xl font-bold text-gray-800">
              Crear una cuenta
            </h1>
            <p className="text-gray-600 mt-2">
              {step === 1 && "Completa tus datos personales para comenzar"}
              {step === 2 && "Cuéntanos sobre tu formación académica"}
              {step === 3 && "Selecciona tus áreas de especialización"}
            </p>
          </div>

          {/* Mostrar errores */}
          {error.length > 0 && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              <ul className="list-disc pl-5">
                {error.map((err, index) => (
                  <li key={index}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre de usuario
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="juanperez123"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirmar contraseña
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                      formData.confirmPassword &&
                      formData.password !== formData.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="••••••••"
                  />
                  {formData.confirmPassword &&
                    formData.password !== formData.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600">
                        Las contraseñas no coinciden
                      </p>
                    )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="institution"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Institución
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Universidad o empresa"
                  />
                </div>

                <div>
                  <label
                    htmlFor="codeNode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Código de nodo
                  </label>
                  <input
                    id="codeNode"
                    name="codeNode"
                    type="text"
                    value={formData.codeNode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Código de identificación"
                  />
                </div>

                <div>
                  <label
                    htmlFor="graduatedDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Fecha de graduación
                  </label>
                  <input
                    id="graduatedDate"
                    name="graduatedDate"
                    type="date"
                    value={formData.graduatedDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="studyLevel"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nivel de estudios
                  </label>
                  <select
                    id="studyLevel"
                    name="studyLevel"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {studyLevelOptions.map((level, index) => (
                      <option key={index} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="experienceYears"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Años de experiencia
                  </label>
                  <select
                    id="experienceYears"
                    name="experienceYears"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {experienceYearsOptions.map((years, index) => (
                      <option key={index} value={years}>
                        {years}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Áreas de especialización
                  </label>
                  <select
                    id="specializationAreas"
                    name="specializationAreas"
                    multiple
                    onChange={handleMultiSelectChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    size={5}
                  >
                    {specializationAreasOptions.map((area) => (
                      <option key={area.id} value={area.value}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-gray-500 mt-2">
                    Mantén presionada la tecla Ctrl (o Cmd en Mac) para seleccionar múltiples opciones
                  </p>
                </div>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Términos y condiciones
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-start">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                      />
                      <label
                        htmlFor="terms"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Acepto los{" "}
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Términos de Servicio
                        </a>{" "}
                        y la{" "}
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Política de Privacidad
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                >
                  Anterior
                </button>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  step === 1 || step === 2 ? "ml-auto" : ""
                } px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition disabled:opacity-70`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {step === 3 ? "Registrando..." : "Procesando..."}
                  </span>
                ) : step === 3 ? (
                  "Registrarse"
                ) : (
                  "Siguiente"
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <a
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Inicia sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
