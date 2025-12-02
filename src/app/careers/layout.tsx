import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Hotel Korona | Join Our Hospitality Team in Crimea",
  description: "Join Hotel Korona's team in Utyos, Crimea. We're hiring Front Desk Receptionists, Chefs, Servers, Housekeepers, and Maintenance staff. Competitive salary, meals, training, and career growth opportunities.",
  keywords: "hotel jobs Crimea, hospitality careers Alushta, hotel employment Utes, work at Hotel Korona, receptionist jobs, chef jobs, server jobs, housekeeper jobs, maintenance jobs",
  openGraph: {
    title: "Careers at Hotel Korona - Join Our Team",
    description: "Build your hospitality career at Hotel Korona. We offer competitive pay, training, and a supportive work environment near the beach.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://hotelkorona.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
