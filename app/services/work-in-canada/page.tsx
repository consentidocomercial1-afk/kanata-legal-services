import ServiceHero from "@/app/components/services/ServiceHero";
import ProgramsGrid from "@/app/components/services/ProgramsGrid";
import FAQ from "@/app/components/services/FAQ";
import ServiceCTA from "@/app/components/services/ServiceCTA";

const programs = [
  {
    icon: "briefcase",
    title: "Work Permit",
    description:
      "Obtain authorization to work legally in Canada through employer-specific or open work permit programs.",
  },
  {
    icon: "graduation",
    title: "Post-Graduation Work Permit (PGWP)",
    description:
      "Continue building your future in Canada after completing an eligible Canadian education program.",
  },
  {
    icon: "plane",
    title: "Temporary Resident Visa (TRV)",
    description:
      "Travel to Canada for tourism, family visits, business or other temporary purposes.",
  },
  {
    icon: "globe",
    title: "Electronic Travel Authorization (eTA)",
    description:
      "Fast electronic authorization for eligible visa-exempt travellers entering Canada by air.",
  },
  {
    icon: "building",
    title: "Employer Support",
    description:
      "Guidance for Canadian employers hiring qualified foreign workers.",
  },
  {
    icon: "filecheck",
    title: "Work Permit Extensions",
    description:
      "Renew or extend your legal authorization to continue working in Canada.",
  },
];

const faq = [
  {
    question: "Who needs a Canadian Work Permit?",
    answer:
      "Most foreign nationals require a valid work permit before accepting employment in Canada. Eligibility depends on your nationality, job offer and immigration category.",
  },
  {
    question: "How long does processing take?",
    answer:
      "Processing times vary depending on the type of application, your country of residence and current IRCC processing times.",
  },
  {
    question: "Can my family come with me?",
    answer:
      "Depending on the immigration pathway, your spouse and dependent children may also qualify to accompany you to Canada.",
  },
  {
    question: "Can Kanata Legal represent my application?",
    answer:
      "Yes. We provide legal advice, application preparation, document review and representation throughout the immigration process.",
  },
];

export default function WorkInCanadaPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Work in Canada"
        title="Build Your Career in Canada"
        description="Whether you are applying for your first work permit, extending your status or exploring temporary employment opportunities, our experienced legal team will guide you every step of the way."
      />

      <ProgramsGrid
        title="Work Permit Programs"
        subtitle="Explore the most common pathways available for individuals wishing to work legally in Canada."
        programs={programs}
      />

      <FAQ items={faq} />

      <ServiceCTA />
    </>
  );
}