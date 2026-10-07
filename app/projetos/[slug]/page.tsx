import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import ProjectDetail from "@/components/ProjectDetail";
import { getProject, projects } from "@/lib/data";
import { translations } from "@/lib/translations";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

// Só os slugs conhecidos existem; qualquer outro dá 404
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const text = translations.pt.projects[project.slug];

  return {
    title: `${text.title} | Vitor Lima`,
    description: text.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0D0E11' }}>
      <Header />
      <main className="pb-20 pt-28">
        <ProjectDetail slug={project.slug} />
      </main>
    </div>
  );
}
