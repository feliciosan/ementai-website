"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
} from "@/utils/contact-info";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      restaurant: formData.get("restaurant") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("Erro ao enviar formulário");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Erro ao enviar mensagem. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="grid md:grid-cols-2 gap-12">
        <div className="md:col-span-2">
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
        </div>
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
            <a
              href={`https://wa.me/${CONTACT_PHONE}?text=Olá! Gostaria de saber mais sobre o Ementai para meu restaurante.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-teal-50 rounded-lg transition-colors group"
            >
              <div className="bg-green-500 p-2 rounded-full group-hover:bg-green-600 transition-colors">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-green-700">
                  WhatsApp
                </p>
                <p className="text-gray-600 text-sm group-hover:text-green-600">
                  Falo conosco rapidamente via WhatsApp
                </p>
              </div>
            </a>
          </div>
          {/* <div className="flex items-center space-x-4 pl-6">
            <Mail className="h-6 w-6 text-teal-600" />
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-gray-600">{CONTACT_EMAIL}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pl-6">
            <MapPin className="h-6 w-6 text-teal-600" />
            <div>
              <p className="font-semibold text-gray-900">Endereço</p>
              <p className="text-gray-600">{CONTACT_ADDRESS}</p>
            </div>
          </div> */}
        </div>

        <div className="mt-4 p-6 bg-teal-50 rounded-lg">
          <h4 className="font-semibold text-teal-800 mb-2">
            Retorno do Atendimento
          </h4>
          <div className="text-sm text-teal-700 space-y-1">
            <p>Nossa equipe entrará em contato em até 24 horas.</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              name="restaurant"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent text-gray-700 placeholder-gray-500"
              placeholder="Ex: Pizzaria do João"
            />
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
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent text-gray-700 placeholder-gray-500"
              placeholder="seu@email.com"
            />
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
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent text-gray-700 placeholder-gray-500"
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
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent text-gray-700 placeholder-gray-500"
              placeholder="Como podemos ajudar você?"
            />
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

        <p className="mt-4 text-sm text-gray-600 text-center">
          * Campos obrigatórios. Seus dados estão seguros e não serão
          compartilhados.
        </p>
      </div>
    </div>
  );
}
