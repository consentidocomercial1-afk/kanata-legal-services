import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function EventsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-neutral-200">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:py-20">
            
            {/* LEFT */}
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                Kanata Legal Services
              </p>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                What Comes After
                <span className="block">Your Studies in Canada?</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
                Are you graduating soon or wondering what comes after your
                studies in Canada? Join Kanata Legal Services and Havana
                Restaurant & Cocktail Lounge for an informative session
                designed specifically for international students and recent
                graduates.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#register"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-base font-semibold text-white transition hover:bg-red-700"
                >
                  Register for the Session
                </a>

                <a
                  href="#learn"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-4 text-base font-semibold text-neutral-900 transition hover:border-neutral-900"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* EVENT IMAGE */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[28px] bg-neutral-100 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                <img
                  src="/images/events/event.jpg"
                  alt="Kanata Legal Services event"
                  className="block h-auto w-full rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section
          id="learn"
          className="scroll-mt-28 bg-neutral-50"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Plan Your Next Step
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Practical immigration guidance for international students and
              recent graduates.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Our experienced immigration professionals will explain your
              options after graduation and provide practical guidance to help
              you confidently plan your next steps.
            </p>
          </div>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                During This Session
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                What you&apos;ll learn
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-3xl border border-neutral-200 p-8 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="text-sm font-semibold text-red-600">
                  01
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  Post-Graduation Work Permit
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  Understand the Post-Graduation Work Permit (PGWP) and what
                  it means for your next steps in Canada.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-200 p-8 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="text-sm font-semibold text-red-600">
                  02
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  OINP Pathways
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  Learn about Ontario Immigrant Nominee Program pathways and
                  eligibility considerations.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-200 p-8 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="text-sm font-semibold text-red-600">
                  03
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  Canadian Work Permits
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  Explore options for obtaining a Canadian work permit after
                  your studies.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-200 p-8 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="text-sm font-semibold text-red-600">
                  04
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  Successful Applications
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  Get practical tips for preparing a successful immigration
                  application.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-200 p-8 transition hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:col-span-2">
                <span className="text-sm font-semibold text-red-600">
                  05
                </span>

                <h3 className="mt-8 text-2xl font-semibold">
                  Common Mistakes & Best Practices
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                  Learn about common mistakes to avoid and best practices for
                  planning your next steps with greater confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ATTEND */}
        <section className="bg-neutral-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
                Your Next Chapter
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Don&apos;t leave your next step to chance.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-neutral-300">
                Your options after graduation can depend on your circumstances
                and immigration pathway. This session is designed to give
                international students and recent graduates practical
                information to help them understand what comes next.
              </p>

              <p className="mt-6 text-lg leading-8 text-neutral-300">
                Connect with experienced immigration professionals and get a
                clearer understanding of the possibilities available to you.
              </p>
            </div>
          </div>
        </section>

        {/* REGISTRATION */}
        <section
          id="register"
          className="scroll-mt-28 bg-neutral-50"
        >
          <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                Reserve Your Spot
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Ready to plan your next step?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Register your interest in the session and the Kanata Legal
                Services team can provide the next steps for attending.
              </p>
            </div>

            <form className="mt-10 rounded-[28px] border border-neutral-200 bg-white p-7 shadow-sm sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-neutral-900"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-neutral-900"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-neutral-900"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="status"
                    className="mb-2 block text-sm font-semibold text-neutral-900"
                  >
                    Current Status in Canada
                  </label>

                  <select
                    id="status"
                    name="status"
                    defaultValue=""
                    className="w-full rounded-2xl border border-neutral-300 bg-white px-5 py-4 outline-none transition focus:border-red-600"
                  >
                    <option value="" disabled>
                      Select your status
                    </option>
                    <option value="international-student">
                      International Student
                    </option>
                    <option value="recent-graduate">
                      Recent Graduate
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-neutral-900"
                >
                  Question or Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Is there anything you would like to ask?"
                  className="w-full resize-none rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-red-600"
                />
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  className="w-full rounded-full bg-red-600 px-7 py-4 text-base font-semibold text-white transition hover:bg-red-700"
                >
                  Register Your Interest
                </button>
              </div>

              <p className="mt-4 text-center text-sm text-neutral-500">
                Registration functionality can be connected to Kanata&apos;s
                preferred registration system.
              </p>
            </form>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Kanata Legal Services
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Your Canadian journey deserves a clear next step.
            </h2>

            <a
              href="/#contact"
              className="mt-9 inline-flex rounded-full bg-neutral-950 px-8 py-4 font-semibold text-white transition hover:bg-neutral-800"
            >
              Contact Kanata Legal Services
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}