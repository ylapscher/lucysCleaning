import TermsConditions from "@/components/sections/TermsConditions";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lucys-cleaning.com';

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Lucy's Cleaning LLC. Review our service terms, payment policies, guarantees, and customer responsibilities for our professional cleaning services.",
  alternates: {
    canonical: `${siteUrl}/terms-conditions`,
  },
  openGraph: {
    title: "Terms & Conditions | Lucy's Cleaning",
    description: "Terms and Conditions for Lucy's Cleaning LLC. Review our service terms, payment policies, and guarantees.",
    url: `${siteUrl}/terms-conditions`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return <TermsConditions />;
}
