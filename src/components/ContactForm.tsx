"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  restaurant: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Mensagem Enviada!
        </h3>
        <p className="text-green-700 mb-4">
          Obrigado pelo contato! Nossa equipe entrará em contato em até 24
          horas.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-green-600 hover:text-green-700 font-semibold"
        >
          Enviar Nova Mensagem
        </button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Fale Conosco</h3>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-teal-600" />
            <div>
              <p className="font-semibold text-gray-900">Telefone</p>
              <p className="text-gray-600">(11) 99999-9999</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-teal-600" />
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-gray-600">contato@ementai.com.br</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-6 w-6 text-teal-600" />
            <div>
              <p className="font-semibold text-gray-900">Endereço</p>
              <p className="text-gray-600">São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-teal-50 rounded-lg">
          <h4 className="font-semibold text-teal-800 mb-2">
            Horário de Atendimento
          </h4>
          <div className="text-sm text-teal-700 space-y-1">
            <p>Segunda a Sexta: 9h às 18h</p>
            <p>Sábado: 9h às 14h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="restaurant"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nome do Restaurante*
            </label>
            <input
              type="text"
              id="restaurant"
              {...register("restaurant", {
                required: "Nome do restaurante é obrigatório",
              })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                errors.restaurant ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Ex: Pizzaria do João"
            />
            {errors.restaurant && (
              <p className="mt-1 text-sm text-red-600">
                {errors.restaurant.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Seu Nome*
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Nome é obrigatório" })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Seu nome completo"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email inválido",
                },
              })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mensagem*
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("message", { required: "Mensagem é obrigatória" })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Como podemos ajudar você?"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
              isLoading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-teal-600 text-white hover:bg-teal-700"
            }`}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </>
            )}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          * Campos obrigatórios. Seus dados estão seguros e não serão
          compartilhados.
        </p>
      </div>
    </div>
  );
}
