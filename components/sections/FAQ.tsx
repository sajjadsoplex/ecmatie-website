"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is ECMatie?",
    answer:
      "ECMatie is an education and career platform designed to help students organize their studies, develop their skills, explore career paths, track progress, and connect with other students.",
  },
  {
    question: "Is ECMatie available on Google Play?",
    answer:
      "ECMatie is currently in closed testing. The public Google Play release will be available soon.",
  },
  {
    question: "What can I do with ECMatie?",
    answer:
      "You can organize subjects and study tasks, manage your daily schedule, follow career roadmaps, track progress, and build connections with other students.",
  },
  {
    question: "Is ECMatie free?",
    answer:
      "Pricing and future membership options will be communicated as ECMatie moves toward its public release.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="ecmatie-section bg-[#f8fbff]">
      <div className="ecmatie-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769e0]">
            FAQ
          </p>

          <h2 className="mt-4">
            Questions?
            <br />
            <span className="ecmatie-gradient-text">We've got answers.</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[#071b3a]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-[#1769e0] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                    <p className="text-sm leading-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}