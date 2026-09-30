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
      <div className="border border-[#DDE3D9] bg-[#F7F8F4] p-8 sm:p-10">
        <div className="flex h-12 w-12 items-center justify-center bg-[#E2EBDD]">
          <CheckCircle2 className="h-6 w-6 text-[#4D6A50]" />
        </div>

        <h3 className="mt-7 text-2xl font-semibold text-[#263F31]">
          Message ready to be connected.
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#6D796F]">
          The form interface is ready. Connect the submission handler to your
          production email or backend endpoint before deploying the contact
          workflow.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-semibold text-[#4D6A50] hover:text-[#263F31]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#E3E7DF] bg-white p-7 shadow-[0_20px_60px_rgba(38,63,49,0.06)] sm:p-9"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-[#263F31]">Name</span>

          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="mt-2 w-full border border-[#DDE3D9] bg-[#FAFBF8] px-4 py-3.5 text-sm text-[#263F31] outline-none transition placeholder:text-[#A1A8A1] focus:border-[#4D6A50] focus:bg-white"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#263F31]">Email</span>

          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full border border-[#DDE3D9] bg-[#FAFBF8] px-4 py-3.5 text-sm text-[#263F31] outline-none transition placeholder:text-[#A1A8A1] focus:border-[#4D6A50] focus:bg-white"
          />
        </label>
      </div>

      <label className="mt-6 block">
        <span className="text-sm font-semibold text-[#263F31]">Subject</span>

        <input
          required
          name="subject"
          type="text"
          placeholder="How can we help?"
          className="mt-2 w-full border border-[#DDE3D9] bg-[#FAFBF8] px-4 py-3.5 text-sm text-[#263F31] outline-none transition placeholder:text-[#A1A8A1] focus:border-[#4D6A50] focus:bg-white"
        />
      </label>

      <label className="mt-6 block">
        <span className="text-sm font-semibold text-[#263F31]">Message</span>

        <textarea
          required
          name="message"
          rows={7}
          placeholder="Tell us what you would like to know..."
          className="mt-2 w-full resize-none border border-[#DDE3D9] bg-[#FAFBF8] px-4 py-3.5 text-sm text-[#263F31] outline-none transition placeholder:text-[#A1A8A1] focus:border-[#4D6A50] focus:bg-white"
        />
      </label>

      <button
        type="submit"
        className="group mt-7 inline-flex items-center justify-center gap-2 bg-[#4D6A50] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3F5942]"
      >
        Send message
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="mt-5 text-xs leading-5 text-[#929B92]">
        Please avoid submitting sensitive health information through a general
        contact form.
      </p>
    </form>
  );
}
