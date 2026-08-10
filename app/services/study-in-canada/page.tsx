import ProgramsGrid from "@/app/components/services/ProgramsGrid";
import FAQ from "@/app/components/services/FAQ";
import ServiceCTA from "@/app/components/services/ServiceCTA";

const programs = [
  {
    icon: "graduation",
    title: "Study Permit",
    description:
      "Apply for authorization to study at an eligible Canadian educational institution.",
  },
  {
    icon: "building",
    title: "Designated Learning Institutions",
    description:
      "Get guidance on choosing and applying to an eligible Canadian institution.",
  },
  {
    icon: "briefcase",
    title: "Post-Graduation Work Permit",
    description:
      "Explore options to continue working in Canada after completing an eligible program.",
  },
  {
    icon: "users",
    title: "Family Members",
    description:
      "Understand options available for eligible spouses and dependent children accompanying international students.",
  },
  {
    icon: "filecheck",
    title: "Study Permit Extensions",
    description:
      "Maintain your legal status in Canada by extending your study authorization when required.",
  },
  {
    icon: "globe",
    title: "Student Immigration Strategy",
    description:
      "Receive personalized legal guidance based on your education and long-term immigration goals.",
  },
];

const faq = [
  {
    question: "Do I need a study permit to study in Canada?",
    answer:
      "Most foreign nationals who intend to study in Canada for more than six months require a valid study permit. Requirements depend on your circumstances and program.",
  },
  {
    question: "Can I work while studying in Canada?",
    answer:
      "Eligible international students may be permitted to work while studying, subject to current Canadian immigration rules and the conditions of their study permit.",
  },
  {
    question: "Can my family accompany me?",
    answer:
      "Depending on your circumstances, your spouse or dependent children may have options to accompany you to Canada.",
  },
  {
    question: "Can Kanata Legal help with my study permit?",
    answer:
      "Yes. Kanata Legal can provide legal advice, review your documents, assist with application preparation and represent you throughout the immigration process.",
  },
];

export default function StudyInCanadaPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Study in Canada
            </span>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
              Build Your Future Through Education in Canada
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
              From study permits to post-graduation opportunities, our legal
              team helps international students understand their options and
              navigate the Canadian immigration process with confidence.
            </p>
          </div>
        </div>
      </section>

      <ProgramsGrid
        title="Study in Canada Programs"
        subtitle="Explore common immigration pathways and legal services available to international students."
        programs={programs}
      />

      <FAQ items={faq} />

      <ServiceCTA />
    </>
  );
}