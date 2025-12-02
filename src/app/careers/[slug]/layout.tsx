import type { Metadata } from "next";
import { JOB_POSITIONS } from "@/lib/constants";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = JOB_POSITIONS.find((j) => j.id === params.slug);

  if (!job) {
    return {
      title: "Job Not Found | Hotel Korona Careers",
    };
  }

  return {
    title: `${job.title} - Apply Now | Hotel Korona Careers`,
    description: `${job.description} Apply for ${job.title} position at Hotel Korona in ${job.location}. ${job.employmentType} employment with competitive benefits.`,
    keywords: `${job.title.toLowerCase()}, hotel jobs, ${job.category.toLowerCase()} jobs, careers in Crimea, ${job.employmentType.toLowerCase()} jobs`,
    openGraph: {
      title: `${job.title} at Hotel Korona`,
      description: job.description,
      type: "website",
      locale: "en_US",
    },
    alternates: {
      canonical: `https://hotelkorona.com/careers/${job.id}`,
    },
  };
}

export async function generateStaticParams() {
  return JOB_POSITIONS.map((job) => ({
    slug: job.id,
  }));
}

export default function JobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
