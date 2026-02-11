import { getPackageBySlug, getPackages } from '@/lib/sanity-queries';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

/**
 * Generate static params for all package slugs
 * This enables static site generation for all safari packages
 */
export async function generateStaticParams() {
  const packages = await getPackages();
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

/**
 * Generate metadata for each package page
 * Provides SEO-optimized titles, descriptions, and keywords
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);

  if (!pkg) {
    return {
      title: 'Package Not Found | Barabara Voyagers',
      description: 'The safari package you are looking for does not exist.',
    };
  }

  return {
    title: `${pkg.title} - ${pkg.destination || 'African Safari'} | Barabara Voyagers`,
    description: pkg.excerpt || `Experience ${pkg.destination} with our ${pkg.title} package.`,
    keywords: [
      pkg.destination,
      'safari',
      'luxury safari',
      'african safari',
      ...(pkg.highlights || []),
    ].filter(Boolean),
    openGraph: {
      title: pkg.title,
      description: pkg.excerpt,
      images: [pkg.image],
      type: 'website',
    },
  };
}

/**
 * Layout component for package detail pages
 * Wraps all safari package pages regardless of destination
 */
export default function PackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
