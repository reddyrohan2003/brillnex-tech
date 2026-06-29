import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Brillnex Technologies",
  description: "Read the Terms & Conditions governing the use of Brillnex Technologies services and courses.",
};

export default function TermsConditions() {
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
            <FileText className="text-primary w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-3xl md:text-4xl font-bold font-heading">Terms & Conditions</h1>
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
              1. Agreement to Terms
            </h2>
            <p className="leading-relaxed text-gray-600">
              By accessing our website, subscribing to our services, or registering for any upskilling program or training course at Brillnex Technologies, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use our services or enroll in our courses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              2. Course Enrollment and Access
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Registration:</strong> To access course content, participants must register through our counselors or digital forms. You agree to provide accurate, current, and complete registration information.</li>
              <li><strong>Account Responsibility:</strong> Student credentials and course access are for individual use only. Sharing credentials or redistributing course content to others will result in immediate termination of course access without refund.</li>
              <li><strong>Updates:</strong> We reserve the right to modify course structures, curriculums, projects, timings, and trainers to maintain academic quality and keep up with changing technology standards.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              3. Payments, Fees, and Refund Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Fees:</strong> All course fees must be paid according to the chosen pricing plan (Single Payment or installment-based) prior to the start of classes, unless authorized in writing by our finance team.</li>
              <li><strong>Refunds:</strong> Since our courses involve live classes, mentor allocation, and digital learning assets, course fees are generally **non-refundable** once the batch starts. If you wish to cancel or reschedule, please reach out to support within 3 business days prior to your class start date.</li>
              <li><strong>Taxes:</strong> All listed prices are exclusive or inclusive of applicable taxes as indicated at the checkout page or booking invoice.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              4. Code of Conduct
            </h2>
            <p className="leading-relaxed text-gray-600">
              Students and participants are expected to maintain professional conduct during live mentorship sessions, group projects, and forum discussions. We reserve the right to suspend or terminate student access to our platform and communities, without refund, if they engage in:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Harassment, abusive language, or discrimination of any kind towards instructors, staff, or fellow students.</li>
              <li>Plagiarism, academic dishonesty, or submitting projects and assignments copied from others.</li>
              <li>Any form of malicious behavior attempting to disrupt our website, servers, or class environments.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              5. Intellectual Property
            </h2>
            <p className="leading-relaxed text-gray-600">
              All materials provided to you during training, including lectures, slide decks, codebase repositories, templates, designs, and branding assets are the exclusive intellectual property of Brillnex Technologies. You are granted a limited, personal, non-exclusive, non-transferable license to access and view these materials for personal learning purposes only. Commercial exploitation, resale, or distribution of our material is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              6. Disclaimers & Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>No Job Guarantee:</strong> While we offer career support, portfolio building, and job interview preparation assistance, Brillnex Technologies does not guarantee employment, placements, or salary hikes upon course completion.</li>
              <li><strong>As-Is Services:</strong> Our educational programs and software development projects are provided on an "as-is" and "as-available" basis, without warranties of any kind.</li>
              <li><strong>Liability Cap:</strong> To the maximum extent permitted by law, Brillnex Technologies will not be liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use our services. Our total liability is capped at the amount paid by you for the specific course or service.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              7. Governing Law
            </h2>
            <p className="leading-relaxed text-gray-600">
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in Bangalore, Karnataka.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary border-b border-gray-100 pb-2">
              8. Contacting Us
            </h2>
            <p className="leading-relaxed text-gray-600">
              If you have any questions or require clarification regarding our Terms and Conditions, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-2 text-gray-700">
              <p><strong>Brillnex Technologies</strong></p>
              <p>Email: <a href="mailto:support@brillnex.com" className="text-primary hover:underline font-semibold">support@brillnex.com</a></p>
              <p>WhatsApp Support: <a href="https://wa.me/917204398855" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">+91 7204398855</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
