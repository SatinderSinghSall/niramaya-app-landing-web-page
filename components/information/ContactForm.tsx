"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [generalError, setGeneralError] = useState("");

  function handleChange(field: keyof FormValues, value: string) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));

    // Remove the inline error as soon as the user starts
    // correcting that particular field.
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }

    // Remove the general error when the user starts editing again.
    if (generalError) {
      setGeneralError("");
    }
  }

  function validateForm(): FormErrors {
    const newErrors: FormErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (values.name.trim().length < 2) {
      newErrors.name = "Please enter at least 2 characters.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!values.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    } else if (values.subject.trim().length < 3) {
      newErrors.subject = "Please enter a little more detail.";
    }

    if (!values.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (values.message.trim().length < 10) {
      newErrors.message = "Please enter at least 10 characters.";
    }

    return newErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setGeneralError("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Move focus to the first invalid field.
      const firstErrorField = Object.keys(validationErrors)[0];

      requestAnimationFrame(() => {
        document.getElementById(`contact-${firstErrorField}`)?.focus();
      });

      return;
    }

    setErrors({});
    setIsSubmitting(true);

    if (!API_URL) {
      setGeneralError(
        "The contact form is temporarily unavailable. Please try again later.",
      );
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    };

    try {
      const response = await fetch(
        `${API_URL.replace(/\/$/, "")}/contact-submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error(
            data?.message ||
              "Please check the information you entered and try again.",
          );
        }

        if (response.status === 429) {
          throw new Error(
            "Too many requests. Please wait a moment and try again.",
          );
        }

        if (response.status >= 500) {
          throw new Error(
            "We're having trouble receiving your message right now. Please try again shortly.",
          );
        }

        throw new Error(
          data?.message || "We couldn't send your message. Please try again.",
        );
      }

      if (!data?.success) {
        throw new Error(
          data?.message ||
            "We couldn't confirm your message was submitted. Please try again.",
        );
      }

      setValues(initialValues);
      setSubmitted(true);
    } catch (submissionError) {
      if (submissionError instanceof TypeError) {
        setGeneralError(
          "We couldn't connect to our server. Please check your internet connection and try again.",
        );
      } else {
        setGeneralError(
          submissionError instanceof Error
            ? submissionError.message
            : "Something went wrong while sending your message. Please try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-[#D8E0D5] bg-[#F7F8F4] p-7 sm:p-9">
        <div className="flex h-10 w-10 items-center justify-center bg-[#E5EDE1]">
          <CheckCircle2 className="h-5 w-5 text-[#4D6A50]" strokeWidth={1.7} />
        </div>

        <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#263F31]">
          Message sent successfully.
        </h3>

        <p className="mt-2 max-w-lg text-sm leading-6 text-[#6D796F]">
          Thank you for reaching out. We&apos;ve received your message and will
          get back to you soon.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setGeneralError("");
            setErrors({});
          }}
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
      noValidate
      aria-busy={isSubmitting}
      className="relative border border-[#D8E0D5] bg-white"
    >
      {/* Loading overlay */}
      {isSubmitting && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-white/65 backdrop-blur-[1px]"
          aria-hidden="true"
        >
          <div className="flex items-center gap-3 border border-[#D8E0D5] bg-white px-5 py-3 shadow-sm">
            <Loader2
              className="h-4 w-4 animate-spin text-[#4D6A50]"
              strokeWidth={1.8}
            />

            <span className="text-sm font-medium text-[#263F31]">
              Sending your message...
            </span>
          </div>
        </div>
      )}

      <div className={isSubmitting ? "pointer-events-none select-none" : ""}>
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

        <div className="px-6 py-6 sm:px-8 sm:py-7">
          {/* General error */}
          {generalError && (
            <div
              role="alert"
              className="mb-6 flex gap-3 border border-[#E7D2CE] bg-[#FCF7F5] px-4 py-3.5"
            >
              <div className="mt-0.5 shrink-0">
                <AlertCircle
                  className="h-4 w-4 text-[#9A5A50]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#6F4039]">
                  We couldn&apos;t send your message
                </p>

                <p className="mt-0.5 text-xs leading-5 text-[#8A5148]">
                  {generalError}
                </p>
              </div>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Name */}
            <label className="block">
              <span className="text-xs font-semibold text-[#263F31]">Name</span>

              <input
                id="contact-name"
                required
                name="name"
                type="text"
                value={values.name}
                placeholder="Your name"
                disabled={isSubmitting}
                aria-invalid={!!errors.name}
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
                onChange={(event) => handleChange("name", event.target.value)}
                className={`mt-2 h-12 w-full border bg-[#FAFBF8] px-3.5 text-sm text-[#263F31] outline-none transition-colors placeholder:text-[#A3AAA4] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60 ${
                  errors.name
                    ? "border-[#C9877D] focus:border-[#A85E53]"
                    : "border-[#DDE3D9] focus:border-[#4D6A50]"
                }`}
              />

              {errors.name && (
                <p
                  id="contact-name-error"
                  className="mt-1.5 text-xs text-[#A85E53]"
                >
                  {errors.name}
                </p>
              )}
            </label>

            {/* Email */}
            <label className="block">
              <span className="text-xs font-semibold text-[#263F31]">
                Email
              </span>

              <input
                id="contact-email"
                required
                name="email"
                type="email"
                value={values.email}
                placeholder="you@example.com"
                disabled={isSubmitting}
                aria-invalid={!!errors.email}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                onChange={(event) => handleChange("email", event.target.value)}
                className={`mt-2 h-12 w-full border bg-[#FAFBF8] px-3.5 text-sm text-[#263F31] outline-none transition-colors placeholder:text-[#A3AAA4] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60 ${
                  errors.email
                    ? "border-[#C9877D] focus:border-[#A85E53]"
                    : "border-[#DDE3D9] focus:border-[#4D6A50]"
                }`}
              />

              {errors.email && (
                <p
                  id="contact-email-error"
                  className="mt-1.5 text-xs text-[#A85E53]"
                >
                  {errors.email}
                </p>
              )}
            </label>
          </div>

          {/* Subject */}
          <label className="mt-5 block">
            <span className="text-xs font-semibold text-[#263F31]">
              Subject
            </span>

            <input
              id="contact-subject"
              required
              name="subject"
              type="text"
              value={values.subject}
              placeholder="How can we help?"
              disabled={isSubmitting}
              aria-invalid={!!errors.subject}
              aria-describedby={
                errors.subject ? "contact-subject-error" : undefined
              }
              onChange={(event) => handleChange("subject", event.target.value)}
              className={`mt-2 h-12 w-full border bg-[#FAFBF8] px-3.5 text-sm text-[#263F31] outline-none transition-colors placeholder:text-[#A3AAA4] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60 ${
                errors.subject
                  ? "border-[#C9877D] focus:border-[#A85E53]"
                  : "border-[#DDE3D9] focus:border-[#4D6A50]"
              }`}
            />

            {errors.subject && (
              <p
                id="contact-subject-error"
                className="mt-1.5 text-xs text-[#A85E53]"
              >
                {errors.subject}
              </p>
            )}
          </label>

          {/* Message */}
          <label className="mt-5 block">
            <span className="text-xs font-semibold text-[#263F31]">
              Message
            </span>

            <textarea
              id="contact-message"
              required
              name="message"
              rows={6}
              value={values.message}
              placeholder="Tell us what you would like to know..."
              disabled={isSubmitting}
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              onChange={(event) => handleChange("message", event.target.value)}
              className={`mt-2 w-full resize-none border bg-[#FAFBF8] px-3.5 py-3.5 text-sm leading-6 text-[#263F31] outline-none transition-colors placeholder:text-[#A3AAA4] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60 ${
                errors.message
                  ? "border-[#C9877D] focus:border-[#A85E53]"
                  : "border-[#DDE3D9] focus:border-[#4D6A50]"
              }`}
            />

            {errors.message && (
              <p
                id="contact-message-error"
                className="mt-1.5 text-xs text-[#A85E53]"
              >
                {errors.message}
              </p>
            )}
          </label>

          <div className="mt-6 flex flex-col gap-4 border-t border-[#E3E7DF] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-[11px] leading-5 text-[#929B92]">
              Please avoid submitting sensitive health information through this
              general contact form.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-3 bg-[#263F31] pl-5 pr-2 text-sm font-semibold !text-white transition-colors hover:bg-[#3F5942] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="!text-white">
                {isSubmitting ? "Sending..." : "Send message"}
              </span>

              <span className="flex h-8 w-8 items-center justify-center bg-white/10">
                {isSubmitting ? (
                  <Loader2
                    className="h-4 w-4 animate-spin !text-white"
                    strokeWidth={1.7}
                  />
                ) : (
                  <ArrowRight
                    className="h-4 w-4 !text-white transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={1.7}
                  />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
