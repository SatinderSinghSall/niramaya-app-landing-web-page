import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account | Niramaya",
  description:
    "Learn how to deactivate your Niramaya account or submit a formal request for permanent account deletion.",
};

const steps = [
  {
    number: "01",
    title: "Open the Niramaya app",
    description:
      "Sign in to your Niramaya account and open your Profile section.",
  },
  {
    number: "02",
    title: "Open account settings",
    description:
      "Go to Settings and select the option to delete or deactivate your account.",
  },
  {
    number: "03",
    title: "Verify your account",
    description:
      "Enter your current account password and type DELETE to confirm the request.",
  },
  {
    number: "04",
    title: "Confirm the action",
    description:
      "Review the information shown on screen and confirm that you want to deactivate your account.",
  },
];

const dataItems = [
  "Account information",
  "Profile information",
  "Wellness and health-profile information",
  "Goals and progress information",
  "Saved or favorite content",
  "Application settings",
];

const emailRecipients =
  "satindersinghsall111@gmail.com,vaibhavsoni13228@gmail.com";

const emailSubject = encodeURIComponent("Niramaya Account Deletion Request");

const emailBody = encodeURIComponent(`Dear Niramaya Support Team,

I would like to formally request the deletion of my Niramaya account and the personal information associated with it.

Please find my account details below:

Full Name:
Registered Email Address:

I understand that you may need to verify my identity or account ownership before processing this request.

Please confirm once my account deletion request has been received and let me know if any additional information is required.

Thank you.

Regards,
Niramaya User`);

const deletionRequestMailto = `mailto:${emailRecipients}?subject=${emailSubject}&body=${emailBody}`;

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#EEF2E6] text-[#263F31]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-[#DDE4DA]">
        <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-white/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#DDE8D9]/60 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9D7C7] bg-white/80 px-4 py-2 text-sm font-semibold text-[#4D6A50] shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#6D8A70]" />
              Account &amp; Privacy
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#263F31] sm:text-5xl lg:text-6xl">
              Delete your Niramaya account
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#59665D] sm:text-lg">
              If you no longer want to use Niramaya, you can deactivate your
              account directly from the mobile application or submit a formal
              request for permanent account deletion.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#how-to-delete"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4D6A50] px-6 py-3 text-sm font-semibold !text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#3F5942] hover:shadow-md"
              >
                Deactivate in the app
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </a>

              <a
                href="#request-deletion"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C8D5C5] bg-white/90 px-6 py-3 text-sm font-semibold !text-[#4D6A50] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                Request permanent deletion
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* =====================================================
              CONTENT
          ===================================================== */}
          <div className="min-w-0 space-y-8">
            {/* ===================================================
                OPTION 1
            =================================================== */}
            <section
              id="how-to-delete"
              className="scroll-mt-32 rounded-3xl border border-[#DDE5DA] bg-white p-7 shadow-[0_8px_30px_rgba(38,63,49,0.05)] transition-shadow duration-200 hover:shadow-[0_12px_35px_rgba(38,63,49,0.08)] sm:p-9"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2E6] text-[#4D6A50] ring-1 ring-[#E1E9DF]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v4m0 4h.01M10.3 3.8 2.8 17a2 2 0 0 0 1.75 3h14.9a2 2 0 0 0 1.75-3l-7.5-13.2a2 2 0 0 0-3.4 0Z"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#4D6A50]">
                    Option 1
                  </p>

                  <h2 className="mt-1 text-2xl font-bold leading-tight text-[#263F31]">
                    Deactivate your account from the app
                  </h2>
                </div>
              </div>

              <p className="mt-6 leading-7 text-[#59665D]">
                If you still have access to the Niramaya mobile application, you
                can initiate the account deactivation process directly from your
                account settings.
              </p>

              <div className="mt-7 space-y-3">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="group flex gap-4 rounded-2xl border border-[#E5EAE3] bg-[#FAFBF9] p-5 transition duration-200 hover:border-[#CFDBCC] hover:bg-[#F8FAF7] hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF2E6] text-xs font-bold text-[#4D6A50] ring-1 ring-[#E0E8DE] transition group-hover:bg-[#E5EEE2]">
                      {step.number}
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold leading-6 text-[#263F31]">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-[#647068]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ===================================================
                WHAT HAPPENS
            =================================================== */}
            <section
              id="what-happens"
              className="scroll-mt-32 rounded-3xl border border-[#DDE5DA] bg-white p-7 shadow-[0_8px_30px_rgba(38,63,49,0.05)] transition-shadow duration-200 hover:shadow-[0_12px_35px_rgba(38,63,49,0.08)] sm:p-9"
            >
              <p className="text-sm font-semibold text-[#4D6A50]">
                Before you confirm
              </p>

              <h2 className="mt-1 text-2xl font-bold leading-tight text-[#263F31]">
                What happens to your account?
              </h2>

              <p className="mt-4 leading-7 text-[#59665D]">
                When you confirm the account action in the Niramaya app, your
                account is deactivated and your active session is ended. You
                will no longer be able to use the account normally.
              </p>

              <div className="mt-6 rounded-2xl border border-[#E1E8DE] bg-[#F8FAF7] p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 text-[#4D6A50]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M4.93 19h14.14a2 2 0 0 0 1.73-3L13.73 4a2 2 0 0 0-3.46 0L3.2 16a2 2 0 0 0 1.73 3Z"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#35473A]">
                      Deactivation is not the same as permanent deletion
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#647068]">
                      The in-app action currently deactivates your account. If
                      you want to request permanent deletion of your account and
                      associated personal information, use the formal deletion
                      request below.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ===================================================
                DATA
            =================================================== */}
            <section
              id="data"
              className="scroll-mt-32 rounded-3xl border border-[#DDE5DA] bg-white p-7 shadow-[0_8px_30px_rgba(38,63,49,0.05)] transition-shadow duration-200 hover:shadow-[0_12px_35px_rgba(38,63,49,0.08)] sm:p-9"
            >
              <p className="text-sm font-semibold text-[#4D6A50]">
                Your information
              </p>

              <h2 className="mt-1 text-2xl font-bold leading-tight text-[#263F31]">
                Information associated with your account
              </h2>

              <p className="mt-4 leading-7 text-[#59665D]">
                Niramaya may store information associated with your account to
                provide the application and its wellness features. This can
                include:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {dataItems.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-2xl border border-[#E5EAE3] bg-[#FAFBF9] px-4 py-4 transition duration-200 hover:border-[#CFDBCC] hover:bg-[#F8FAF7]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E6EFE4] text-sm font-bold text-[#4D6A50]">
                      ✓
                    </span>

                    <span className="text-sm font-medium leading-5 text-[#4F5D54]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ===================================================
                REQUEST DELETION
            =================================================== */}
            <section
              id="request-deletion"
              className="scroll-mt-32 overflow-hidden rounded-3xl border border-[#C9D8C7] bg-white shadow-[0_8px_30px_rgba(38,63,49,0.06)] transition-shadow duration-200 hover:shadow-[0_12px_35px_rgba(38,63,49,0.09)]"
            >
              <div className="relative overflow-hidden bg-[#EAF1E8] px-7 py-8 sm:px-9">
                <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/50 blur-2xl" />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#4D6A50] shadow-sm ring-1 ring-[#DDE7DA]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 6h18M9 6V4h6v2m-9 0 1 14h10l1-14M10 10v6m4-6v6"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#4D6A50]">
                      Option 2
                    </p>

                    <h2 className="mt-1 text-2xl font-bold leading-tight text-[#263F31]">
                      Request account deletion
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#59665D]">
                      If you want your Niramaya account and associated personal
                      information to be permanently deleted, you can submit a
                      formal request to the Niramaya team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <div className="rounded-2xl border border-[#E2E9E0] bg-[#F8FAF7] p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 text-[#4D6A50]">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5 6 7 6 7-6"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#35473A]">
                        Send your request by email
                      </p>

                      <p className="mt-1 text-sm leading-6 text-[#647068]">
                        The request will be addressed to the Niramaya team.
                        Please use the email address associated with your
                        Niramaya account so that your request can be verified.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-[#3F4D44]">
                    Your request should include:
                  </p>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {[
                      "Your full name",
                      "Registered Niramaya email address",
                      "A clear request for account deletion",
                      "Any additional information needed for verification",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-[#E5EAE3] bg-white px-4 py-3.5 transition hover:border-[#CFDBCC]"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEF2E6] text-xs font-bold text-[#4D6A50]">
                          ✓
                        </span>

                        <span className="text-sm leading-5 text-[#536057]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={deletionRequestMailto}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4D6A50] px-6 py-3.5 text-sm font-bold !text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#3F5942] hover:shadow-md"
                  >
                    Send Account Deletion Request
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-6-6 6 6-6 6"
                      />
                    </svg>
                  </a>

                  <a
                    href={`mailto:${emailRecipients}`}
                    className="inline-flex items-center justify-center rounded-full border border-[#CCD9CA] bg-white px-6 py-3.5 text-sm font-semibold !text-[#4D6A50] transition duration-200 hover:bg-[#F7F9F6]"
                  >
                    Email Support Directly
                  </a>
                </div>

                <p className="mt-5 text-xs leading-5 text-[#879289]">
                  By submitting a request, you acknowledge that Niramaya may
                  need to verify account ownership before processing the
                  request. Additional verification information may be requested
                  where necessary.
                </p>
              </div>
            </section>

            {/* ===================================================
                ADDITIONAL HELP
            =================================================== */}
            <section
              id="request"
              className="scroll-mt-32 rounded-3xl border border-[#D1DED0] bg-[#EAF1E8] p-7 sm:p-9"
            >
              <p className="text-sm font-semibold text-[#4D6A50]">
                Need additional help?
              </p>

              <h2 className="mt-1 text-2xl font-bold leading-tight text-[#263F31]">
                Can&apos;t access the Niramaya app?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#59665D]">
                If you cannot access your account, cannot sign in, or cannot
                complete the account action from the mobile application, contact
                the Niramaya team. Please include the email address associated
                with your account so that your request can be reviewed.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={deletionRequestMailto}
                  className="inline-flex items-center justify-center rounded-full bg-[#4D6A50] px-6 py-3 text-sm font-semibold !text-white shadow-sm transition duration-200 hover:bg-[#3F5942] hover:shadow-md"
                >
                  Contact Niramaya Support
                </a>

                <Link
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-full border border-[#C8D5C5] bg-white px-6 py-3 text-sm font-semibold !text-[#4D6A50] transition hover:bg-[#F7F9F6]"
                >
                  View Privacy Policy
                </Link>
              </div>
            </section>

            {/* ===================================================
                RELATED INFORMATION
            =================================================== */}
            <section className="border-t border-[#D7E0D5] pt-8">
              <h2 className="text-lg font-bold text-[#263F31]">
                Related information
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/privacy"
                  className="rounded-full border border-[#D5DED3] bg-white px-4 py-2 text-sm font-medium !text-[#4D6A50] shadow-sm transition hover:bg-[#F7F9F6]"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="rounded-full border border-[#D5DED3] bg-white px-4 py-2 text-sm font-medium !text-[#4D6A50] shadow-sm transition hover:bg-[#F7F9F6]"
                >
                  Terms of Use
                </Link>

                <Link
                  href="/disclaimer"
                  className="rounded-full border border-[#D5DED3] bg-white px-4 py-2 text-sm font-medium !text-[#4D6A50] shadow-sm transition hover:bg-[#F7F9F6]"
                >
                  Wellness Disclaimer
                </Link>

                <Link
                  href="/faq"
                  className="rounded-full border border-[#D5DED3] bg-white px-4 py-2 text-sm font-medium !text-[#4D6A50] shadow-sm transition hover:bg-[#F7F9F6]"
                >
                  FAQs
                </Link>
              </div>
            </section>
          </div>

          {/* =====================================================
              SIDEBAR
          ===================================================== */}
          <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-1">
            <div className="overflow-hidden rounded-3xl border border-[#D8E2D5] bg-white shadow-[0_10px_35px_rgba(38,63,49,0.07)]">
              {/* Sidebar header */}
              <div className="relative overflow-hidden bg-[#263F31] px-6 py-7 text-white">
                <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#4D6A50]/40 blur-2xl" />

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3 5 6v5c0 4.7 2.9 8.7 7 10 4.1-1.3 7-5.3 7-10V6l-7-3Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 12 2 2 4-4"
                      />
                    </svg>
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#B8C9B7]">
                    Account support
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    Account &amp; privacy
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#D0D9D1]">
                    Manage your Niramaya account and understand your available
                    privacy options.
                  </p>
                </div>
              </div>

              {/* Sidebar body */}
              <div className="p-5">
                <p className="px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B968E]">
                  On this page
                </p>

                <nav className="mt-3 space-y-1">
                  <a
                    href="#how-to-delete"
                    className="group flex items-center gap-3 rounded-xl bg-[#EEF2E6] px-3.5 py-3 text-sm font-semibold !text-[#354B39] transition hover:bg-[#E6EEE3]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-[#4D6A50] shadow-sm">
                      01
                    </span>

                    <span className="flex-1">Deactivate your account</span>

                    <span className="text-[#6E896F] transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>

                  <a
                    href="#what-happens"
                    className="group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium !text-[#59665D] transition hover:bg-[#F7F9F6] hover:!text-[#4D6A50]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F3F5F2] text-[10px] font-bold text-[#7C877E]">
                      02
                    </span>

                    <span className="flex-1">What happens</span>

                    <span className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#data"
                    className="group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium !text-[#59665D] transition hover:bg-[#F7F9F6] hover:!text-[#4D6A50]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F3F5F2] text-[10px] font-bold text-[#7C877E]">
                      03
                    </span>

                    <span className="flex-1">Your information</span>

                    <span className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#request-deletion"
                    className="group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium !text-[#59665D] transition hover:bg-[#F7F9F6] hover:!text-[#4D6A50]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F3F5F2] text-[10px] font-bold text-[#7C877E]">
                      04
                    </span>

                    <span className="flex-1">Request deletion</span>

                    <span className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#request"
                    className="group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium !text-[#59665D] transition hover:bg-[#F7F9F6] hover:!text-[#4D6A50]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F3F5F2] text-[10px] font-bold text-[#7C877E]">
                      05
                    </span>

                    <span className="flex-1">Need help?</span>

                    <span className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </nav>

                <div className="my-5 border-t border-[#E5EAE3]" />

                {/* Quick support */}
                <div className="rounded-2xl border border-[#E5EAE3] bg-[#F8FAF7] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#4D6A50] shadow-sm ring-1 ring-[#E5EAE3]">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5 6 7 6 7-6"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#35473A]">
                        Need assistance?
                      </p>

                      <p className="mt-0.5 text-[11px] text-[#7B877F]">
                        Contact the Niramaya team
                      </p>
                    </div>
                  </div>

                  <a
                    href={`mailto:${emailRecipients}`}
                    className="mt-3 flex items-center justify-center rounded-xl border border-[#D5DED3] bg-white px-3 py-2.5 text-xs font-semibold !text-[#4D6A50] transition hover:bg-[#EEF2E6]"
                  >
                    Email support
                  </a>
                </div>

                {/* Security note */}
                <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#FAFBF9] p-3">
                  <div className="mt-0.5 shrink-0 text-[#4D6A50]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3 5 6v5c0 4.7 2.9 8.7 7 10 4.1-1.3 7-5.3 7-10V6l-7-3Z"
                      />
                    </svg>
                  </div>

                  <p className="text-[11px] leading-5 text-[#89938C]">
                    Your request may require verification to protect your
                    account and personal information.
                  </p>
                </div>
              </div>
            </div>

            {/* Related links */}
            <div className="mt-4 rounded-3xl border border-[#DCE5D9] bg-white p-5 shadow-sm">
              <p className="px-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8B968E]">
                Related pages
              </p>

              <div className="mt-3 grid gap-1">
                <Link
                  href="/privacy"
                  className="rounded-xl px-3 py-2.5 text-sm font-medium !text-[#59665D] transition hover:bg-[#F7F9F6] hover:!text-[#4D6A50]"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="rounded-xl px-3 py-2.5 text-sm font-medium !text-[#59665D] transition hover:bg-[#F7F9F6] hover:!text-[#4D6A50]"
                >
                  Terms of Use
                </Link>

                <Link
                  href="/disclaimer"
                  className="rounded-xl px-3 py-2.5 text-sm font-medium !text-[#59665D] transition hover:bg-[#F7F9F6] hover:!text-[#4D6A50]"
                >
                  Wellness Disclaimer
                </Link>

                <Link
                  href="/faq"
                  className="rounded-xl px-3 py-2.5 text-sm font-medium !text-[#59665D] transition hover:bg-[#F7F9F6] hover:!text-[#4D6A50]"
                >
                  Frequently Asked Questions
                </Link>
              </div>
            </div>

            {/* Wellness note */}
            <div className="mt-4 rounded-3xl border border-[#DCE5D9] bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8B968E]">
                Niramaya
              </p>

              <p className="mt-3 text-xs leading-5 text-[#89938C]">
                Niramaya is a wellness application. Its informational content
                and recommendations are not intended to replace diagnosis,
                treatment, or professional medical care.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
