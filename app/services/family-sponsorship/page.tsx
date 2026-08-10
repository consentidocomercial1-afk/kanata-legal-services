import ProgramsGrid from "@/app/components/services/ProgramsGrid";
import FAQ from "@/app/components/services/FAQ";
import ServiceCTA from "@/app/components/services/ServiceCTA";

const programs = [
  {
    icon: "users",
    title: "Spousal Sponsorship",
    description:
      "Sponsorship solutions for Canadian citizens and permanent residents who wish to reunite with their spouse or common-law partner in Canada.",
  },
  {
    icon: "heart",
    title: "Common-Law Partner Sponsorship",
    description:
      "Guidance through the sponsorship process for eligible common-law partners seeking permanent residence in Canada.",
  },
  {
    icon: "family",
    title: "Dependent Children",
    description:
      "Assistance with applications involving dependent children so families can build their future together in Canada.",
  },
  {
    icon: "userplus",
    title: "Parents & Grandparents",
    description:
      "Legal guidance for eligible Canadian citizens and permanent residents looking to sponsor their parents or grandparents.",
  },
  {
    icon: "filecheck",
    title: "Sponsorship Applications",
    description:
      "Professional preparation, document review and legal guidance throughout the family sponsorship application process.",
  },
  {
    icon: "shield",
    title: "Sponsorship Issues & Appeals",
    description:
      "Legal representation and guidance when a family sponsorship application faces complications, refusal or other immigration concerns.",
  },
];

const faq = [
  {
    question: "Who can sponsor a family member in Canada?",
    answer:
      "Canadian citizens and permanent residents may be eligible to sponsor certain family members, provided they meet the applicable sponsorship requirements.",
  },
  {
    question: "Can I sponsor my spouse or partner?",
    answer:
      "Depending on your circumstances, you may be able to sponsor your spouse, common-law partner or conjugal partner for permanent residence in Canada.",
  },
  {
    question: "Can I sponsor my children?",
    answer:
      "Eligible dependent children may be included in or sponsored through a family immigration application, depending on the circumstances of the family.",
  },
  {
    question: "How long does family sponsorship take?",
    answer:
      "Processing times vary depending on the type of sponsorship application, the applicants involved and current IRCC processing times.",
  },
  {
    question: "Can Kanata Legal represent my sponsorship application?",
    answer:
      "Yes. Kanata Legal Services can provide legal advice, application preparation, document review and representation throughout the immigration process.",
  },
];

export default function FamilySponsorshipPage() {
  return (
    <>
      <ProgramsGrid
        title="Family Sponsorship Programs"
        subtitle="Explore Canadian immigration pathways designed to help eligible families reunite and build their future together."
        programs={programs}
      />

      <FAQ items={faq} />

      <ServiceCTA />
    </>
  );
}