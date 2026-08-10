import ServiceHero from "@/app/components/services/ServiceHero";
import ProgramsGrid from "@/app/components/services/ProgramsGrid";
import FAQ from "@/app/components/services/FAQ";
import ServiceCTA from "@/app/components/services/ServiceCTA";

const programs = [
  {
    icon: "briefcase",
    title: "Express Entry",
    description:
      "Explore federal immigration pathways for skilled workers seeking permanent residence in Canada.",
  },
  {
    icon: "building",
    title: "Provincial Nominee Programs",
    description:
      "Discover provincial immigration programs designed for skilled workers with experience and qualifications in demand.",
  },
  {
    icon: "badgecheck",
    title: "Canadian Experience Class",
    description:
      "Permanent residence pathway for eligible skilled workers with qualifying Canadian work experience.",
  },
  {
    icon: "graduation",
    title: "Federal Skilled Worker Program",
    description:
      "Guidance for qualified professionals seeking permanent residence through Canada's federal skilled worker system.",
  },
  {
    icon: "globe",
    title: "Skilled Worker Pathways",
    description:
      "Identify immigration options based on your education, professional experience, language skills and career goals.",
  },
  {
    icon: "filecheck",
    title: "Application Preparation",
    description:
      "Professional guidance with documentation, eligibility requirements and preparation of your permanent residence application.",
  },
];

const faq = [
  {
    question: "What is Express Entry?",
    answer:
      "Express Entry is Canada's system for managing applications from skilled workers seeking permanent residence through eligible federal economic immigration programs.",
  },
  {
    question: "Do I need a job offer to immigrate through Express Entry?",
    answer:
      "A valid job offer is not required for every Express Entry pathway. Eligibility and ranking depend on factors such as work experience, education, language ability and other criteria.",
  },
  {
    question: "Can I apply through a Provincial Nominee Program?",
    answer:
      "Potentially. Canadian provinces and territories have their own nomination programs with different eligibility requirements based on labour market needs and applicant profiles.",
  },
  {
    question: "Can Kanata Legal help with my application?",
    answer:
      "Yes. Kanata Legal Services can provide legal advice, assess your potential immigration pathway, assist with documentation and represent you throughout the application process.",
  },
];

export default function SkilledImmigrationPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Skilled Immigration"
        title="Build Your Future Through Skilled Immigration."
        description="Explore Canadian immigration pathways for skilled professionals, workers and experienced applicants seeking permanent residence."
      />

      <ProgramsGrid
        title="Skilled Immigration Programs"
        subtitle="Explore pathways designed for skilled workers and professionals seeking permanent residence in Canada."
        programs={programs}
      />

      <FAQ items={faq} />

      <ServiceCTA />
    </>
  );
}