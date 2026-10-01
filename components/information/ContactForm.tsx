"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect this handler to the Niramaya contact backend/email
    // when the production contact endpoint is available.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-[#D8E0D5] bg-[#F7F8F4] p-7 sm:p-9">
        <div className="flex h-10 w-10 items-center justify-center bg-[#E5EDE1]">
          <CheckCircle2 className="h-5 w-5 text-[#4D6A50]" strokeWidth={1.7} />
        </div>

        <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#263F31]">
          Your message is ready.
        </h3>

        <p className="mt-2 max-w-lg text-sm leading-6 text-[#6D796F]">
          The form interface is ready to be connected to the production contact
          endpoint.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-[#4D6A50] transition-colors hover:text-[#263F31]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="border border-[#D8E0D5] bg-white"
    >
      {/* Form header */}
      <div className="border-b border-[#E1E6DE] px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
              Contact form
            </p>

            <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-[#263F31]">
              Send us a message
            </h3>
          </div>

          <span className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-[#A0AAA1] sm:block">
            We&apos;ll get back to you
          </span>
        </div>
      </div>

      {/* Fields */}
      <div className="px-6 py-6 sm:px-8 sm:py-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold text-[#263F31]">Name</span>

            <input
              required
              name="name"
              type="text"
              placeholder="Your name"
              className="mt-2 h-12 w-full border border-[#DDE3D9] bg-[#FAFBF8] px-3.5 text-sm text-[#263F31] outline-none transition-colors placeholder:text-[#A3AAA4] focus:border-[#4D6A50] focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold text-[#263F31]">Email</span>

            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 h-12 w-full border border-[#DDE3D9] bg-[#FAFBF8] px-3.5 text-sm text-[#263F31] outline-none transition-colors placeholder:text-[#A3AAA4] focus:border-[#4D6A50] focus:bg-white"
            />
          </label>
        </div>

        <label className="mt-5 block">
          <span className="text-xs font-semibold text-[#263F31]">Subject</span>

          <input
            required
            name="subject"
            type="text"
            placeholder="How can we help?"
            className="mt-2 h-12 w-full border border-[#DDE3D9] bg-[#FAFBF8] px-3.5 text-sm text-[#263F31] outline-none transition-colors placeholder:text-[#A3AAA4] focus:border-[#4D6A50] focus:bg-white"
          />
        </label>

        <label className="mt-5 block">
          <span className="text-xs font-semibold text-[#263F31]">Message</span>

          <textarea
            required
            name="message"
            rows={6}
            placeholder="Tell us what you would like to know..."
            className="mt-2 w-full resize-none border border-[#DDE3D9] bg-[#FAFBF8] px-3.5 py-3.5 text-sm leading-6 text-[#263F31] outline-none transition-colors placeholder:text-[#A3AAA4] focus:border-[#4D6A50] focus:bg-white"
          />
        </label>

        {/* Submit */}
        <div className="mt-6 flex flex-col gap-4 border-t border-[#E3E7DF] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-[11px] leading-5 text-[#929B92]">
            Please avoid submitting sensitive health information through this
            general contact form.
          </p>

          <button
            type="submit"
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-3 bg-[#263F31] pl-5 pr-2 text-sm font-semibold !text-white transition-colors hover:bg-[#3F5942]"
          >
            <span className="!text-white">Send message</span>

            <span className="flex h-8 w-8 items-center justify-center bg-white/10">
              <ArrowRight
                className="h-4 w-4 !text-white transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={1.7}
              />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
