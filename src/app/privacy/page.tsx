import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Brillnex Technologies",
  description: "Learn about how Brillnex Technologies collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Banner */}
      <div className="bg-text-primary text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm mb-6 font-medium"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-primary w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-3xl md:text-4xl font-bold font-heading">Privacy Policy</h1>
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Last Updated: June 27, 2026
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8">
          
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              1. Introduction
            </h2>
            <p className="leading-relaxed text-gray-600">
              Welcome to Brillnex Technologies ("we," "our," "us"). We are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly. This Privacy Policy describes how we collect, use, disclose, and protect your information when you visit our website, enroll in our courses, or use our digital development services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed text-gray-600">
              We collect personal information that you voluntarily provide to us when you fill out lead forms, request a callback, or communicate with us via WhatsApp. This information includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Contact Information:</strong> Your name, email address, phone number, and physical address.</li>
              <li><strong>Academic/Professional Interests:</strong> The courses, technologies, or services you express interest in.</li>
              <li><strong>Inquiry Details:</strong> Any messages, feedback, or details you provide when filling out forms or talking to our representatives.</li>
              <li><strong>Automated Data:</strong> Technical data including your IP address, browser type, device information, and interactions with our website using cookies.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed text-gray-600">
              We use the collected information for various business and educational purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To provide, manage, and deliver our training courses and services.</li>
              <li>To process your inquiry forms and redirect details to WhatsApp for immediate counselor assistance.</li>
              <li>To contact you regarding course registrations, schedules, syllabus materials, and payment details.</li>
              <li>To send you administrative updates, newsletters, promotional offers, and marketing materials (you may opt-out at any time).</li>
              <li>To improve our website functionality, customer support, and educational curricula.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              4. Sharing and Disclosure
            </h2>
            <p className="leading-relaxed text-gray-600">
              We respect your privacy and do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Service Providers:</strong> With trusted third-party vendors and integration services (e.g., WhatsApp, database hosting, email servers) that perform actions on our behalf.</li>
              <li><strong>Legal Compliance:</strong> If required by law, subpoena, or government authority to protect our rights or comply with legal processes.</li>
              <li><strong>Business Transitions:</strong> In the event of a merger, acquisition, or asset sale, your personal information may be transferred to the acquiring entity.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              5. Data Security
            </h2>
            <p className="leading-relaxed text-gray-600">
              We implement industry-standard administrative, technical, and physical security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or database storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              6. Your Privacy Rights
            </h2>
            <p className="leading-relaxed text-gray-600">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>The right to access or receive a copy of the personal information we hold about you.</li>
              <li>The right to request the correction of inaccurate or incomplete personal information.</li>
              <li>The right to request the deletion of your personal information from our databases.</li>
              <li>The right to withdraw your consent to process your data at any time.</li>
            </ul>
            <p className="leading-relaxed text-gray-600 mt-2">
              To exercise any of these rights, please contact us at <a href="mailto:support@brillnex.com" className="text-primary hover:underline font-semibold">support@brillnex.com</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              7. Third-Party Links
            </h2>
            <p className="leading-relaxed text-gray-600">
              Our website may contain links to external sites (such as WhatsApp) that are not operated by us. Please be aware that we have no control over the content and policies of those third-party sites, and cannot accept responsibility or liability for their respective privacy practices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              8. Contact Us
            </h2>
            <p className="leading-relaxed text-gray-600">
              If you have any questions, feedback, or concerns regarding this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-2 text-gray-700">
              <p><strong>Brillnex Technologies</strong></p>
              <p>Email: <a href="mailto:support@brillnex.com" className="text-primary hover:underline">support@brillnex.com</a></p>
              <p>WhatsApp Support: <a href="https://wa.me/917204398855" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+91 7204398855</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
