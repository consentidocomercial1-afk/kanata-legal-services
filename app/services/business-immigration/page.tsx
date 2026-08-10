import ProgramsGrid from "@/app/components/services/ProgramsGrid";
import FAQ from "@/app/components/services/FAQ";
import ServiceCTA from "@/app/components/services/ServiceCTA";

const programs = [
  {
    icon: "building",
    title: "Business Immigration",
    description:
      "Explore Canadian immigration pathways designed for entrepreneurs, business owners and qualified investors.",
  },
  {
    icon: "briefcase",
    title: "Entrepreneur Immigration",
    description:
      "Guidance for entrepreneurs looking to establish, operate or expand a business in Canada.",
  },
  {
    icon: "globe",
    title: "Provincial Entrepreneur Programs",
    description:
      "Explore provincial immigration programs for qualified entrepreneurs seeking permanent residence in Canada.",
  },
  {
    icon: "users",
    title: "Business Owner Immigration",
    description:
      "Personalized legal guidance for established business owners considering Canadian immigration options.",
  },
  {
    icon: "filecheck",
    title: "Business Plan Guidance",
    description:
      "Understand the documentation and business information required to support your immigration application.",
  },
  {
    icon: "shield",
    title: "Application Representation",
    description:
      "Legal representation and application support throughout your Canadian business immigration process.",
  },
];

const faq = [
  {
    question: "Who can qualify for business immigration to Canada?",
    answer:
      "Eligibility depends on the specific immigration program. Factors may include your business experience, investment capacity, language ability, net worth and proposed business activity in Canada.",
  },
  {
    question: "Do I need to own a business to immigrate through a business program?",
    answer:
      "Not necessarily. Some programs are designed for entrepreneurs and business owners, while others may be available to applicants with specific business or investment experience.",
  },
  {
    question: "Can my family accompany me to Canada?",
    answer:
      "Depending on the immigration pathway, your spouse or common-law partner and dependent children may be eligible to accompany you or obtain their own immigration status.",
  },
  {
    question: "Can Kanata Legal help with my business immigration application?",
    answer:
      "Yes. Kanata Legal Services can provide legal advice, application preparation, document review and representation throughout the immigration process.",
  },
];

export default function BusinessImmigrationPage() {
  return (
    <>
      <ProgramsGrid
        title="Business Immigration Programs"
        subtitle="Explore Canadian immigration pathways for entrepreneurs, business owners and qualified applicants seeking opportunities to establish themselves in Canada."
        programs={programs}
      />

      <FAQ items={faq} />

      <ServiceCTA />
    </>
  );
}