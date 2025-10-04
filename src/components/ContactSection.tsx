import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 scroll-mt-16 lg:scroll-mt-18"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tem dúvidas? Nossa equipe está pronta para ajudar você a transformar
            seu restaurante.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
