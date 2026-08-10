import ServiceHero from "@/app/components/services/ServiceHero";
import ProgramsGrid from "@/app/components/services/ProgramsGrid";
import FAQ from "@/app/components/services/FAQ";
import ServiceCTA from "@/app/components/services/ServiceCTA";

const programs = [
  {
    icon: "shield",
    title: "Refugee Claims",
    description:
      "Legal guidance for individuals seeking protection in Canada because they fear persecution or serious harm in their home country.",
  },
  {
    icon: "filecheck",
    title: "Claim Preparation",
    description:
      "Professional assistance preparing your claim, supporting documents and personal information for the refugee determination process.",
  },
  {
    icon: "users",
    title: "Family Protection",
    description:
      "Guidance for eligible family members and dependants involved in a refugee or protection claim.",
  },
  {
    icon: "scale",
    title: "Legal Representation",
    description:
      "Representation and legal support throughout the refugee protection process and related proceedings.",
  },
  {
    icon: "building",
    title: "Immigration Appeals",
    description:
      "Legal guidance for eligible individuals dealing with decisions or proceedings related to their immigration matter.",
  },
  {
    icon: "globe",
    title: "Protection in Canada",
    description:
      "Understand your legal options and the requirements involved in seeking protection under Canada's immigration system.",
  },
];

const faq = [
  {
    question: "Who can make a refugee claim in Canada?",
    answer:
      "People who are in Canada and meet the legal requirements for refugee protection may be eligible to make a claim. Eligibility depends on the individual circumstances and applicable Canadian immigration law.",
  },
  {
    question: "What happens after I make a refugee claim?",
    answer:
      "The claim goes through an eligibility and determination process. You may need to provide supporting documents and attend proceedings related to your claim.",
  },
  {
    question: "Can my family be included in my claim?",
    answer:
      "Depending on your circumstances and immigration status, certain family members may be included or may have related immigration options.",
  },
  {
    question: "Can Kanata Legal represent my refugee claim?",
    answer:
      "Yes. Kanata Legal Services can provide legal advice, help prepare your application and supporting documentation, and represent you throughout the applicable immigration process.",
  },
];

export default function RefugeeClaimsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Refugee Claims"
        title="Find Protection and Legal Guidance in Canada."
        description="If you are seeking protection in Canada, our legal team can help you understand your options, prepare your claim and navigate the immigration process with confidence."
      />

      <ProgramsGrid
        title="Refugee & Protection Services"
        subtitle="Legal guidance and representation for individuals seeking protection and navigating complex immigration matters in Canada."
        programs={programs}
      />

      <FAQ items={faq} />

      <ServiceCTA />
    </>
  );
}