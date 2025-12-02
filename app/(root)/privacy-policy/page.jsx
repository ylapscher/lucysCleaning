import PrivacyPolicy from "@/components/sections/PrivacyPolicy";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lucys-cleaning.com';

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Lucy's Cleaning LLC. Learn how we collect, use, and protect your personal information when you use our professional cleaning services.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Lucy's Cleaning",
    description: "Privacy Policy for Lucy's Cleaning LLC. Learn how we collect, use, and protect your personal information.",
    url: `${siteUrl}/privacy-policy`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
