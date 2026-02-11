import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Calendar, Users, Check, X, ChevronRight, Map, ShieldCheck, Clock } from 'lucide-react';
import { getPackageBySlug } from '@/lib/sanity-queries';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <Container className="relative z-10 pt-20 md:pt-24 text-center text-white">
          <div className="flex items-center justify-center gap-2 text-amber-400 mb-4 uppercase tracking-[0.3em] text-sm font-bold">
            <MapPin className="h-4 w-4" />
            <span className="" >{pkg.destination}</span>
          </div>
          <h1 className="text-4xl md:text-6xl title font-bold mb-6 max-w-4xl mx-auto leading-tight">
            {pkg.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm md:text-base font-medium border-t border-white/20 pt-6 mt-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-400" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-amber-400" />
              <span>{pkg.groupSize}</span>
            </div>
            <div className="px-4 py-1 bg-amber-500/20 rounded-full border border-amber-500/50">
              <span className="text-amber-300 font-bold">Private Safari</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Layout */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left Column: Content  */}
            <div className="lg:col-span-8 space-y-20">

              {/* Overview */}
              <section>
                <h2 className="text-sm uppercase tracking-widest text-amber-600 font-bold mb-4">The Experience</h2>
                <h3 className="text-4xl  font-bold mb-8 text-gray-900">Journey Overview</h3>
                <div
                  className="prose prose-lg prose-slate max-w-none font-light leading-relaxed  "
                  dangerouslySetInnerHTML={{ __html: pkg.description }}
                />
              </section>

              {/* Highlights  */}
              {pkg.highlights && (
                <section className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl  font-bold mb-8">Trip Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                    {pkg.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                          <Check className="h-4 w-4 text-amber-700" />
                        </div>
                        <span className="text-gray-700 font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Itinerary - Premium Timeline Style */}
              <section>
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h2 className="text-sm uppercase tracking-widest text-amber-600 font-bold mb-2">Day-by-Day</h2>
                    <h3 className="text-4xl  font-bold  text-gray-900">The Itinerary</h3>
                  </div>
                  <div className="hidden md:block">
                    <Button variant="outline" className="rounded-full gap-2">
                      <Map className="h-4 w-4" /> View Route Map
                    </Button>
                  </div>
                </div>

                <div className="relative border-l border-gray-200 ml-4 md:ml-6 space-y-12 pb-8">
                  {pkg.itinerary.map((day, index) => (
                    <div key={index} className="relative pl-10 md:pl-16">
                      {/* Timeline Node */}
                      <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-white border-4 border-amber-600 z-10" />

                      <div className="flex flex-col gap-2 mb-3">
                        <span className="text-amber-600 font-bold tracking-tight text-sm  uppercase">Day {day.day}</span>
                        <h4 className="text-2xl  font-semibold text-gray-700 tracking-tighter ">{day.title}</h4>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6 font-normal text-lg">
                        {day.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4">
                        {day.accommodation && (
                          <div className="bg-gray-50 px-4 py-2 rounded-md border border-gray-100 text-xs">
                            <span className="text-gray-400 uppercase font-bold block mb-1">Stay</span>
                            <span className="text-gray-900 font-semibold">{day.accommodation}</span>
                          </div>
                        )}
                        {day.meals && (
                          <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 text-xs">
                            <span className="text-gray-400 uppercase font-bold block mb-1">Meals</span>
                            <span className="text-gray-900 font-semibold">{day.meals}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Inclusions / Exclusions */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
                <div>
                  <h4 className="flex items-center gap-2 text-xl  font-bold text-green-800 mb-6">
                    <Check className="h-5 w-5" /> Included
                  </h4>
                  <ul className="space-y-4">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start gap-3 italic">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-xl  font-bold text-gray-400 mb-6">
                    <X className="h-5 w-5" /> Not Included
                  </h4>
                  <ul className="space-y-4">
                    {pkg.excludes.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300 shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

            {/* Right Column*/}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">

                {/* Main Booking Card */}
                <div className="bg-gray-800 text-gray-100 p-8 rounded-lg shadow-lg overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

                  <div className="relative z-10">
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mb-2">Starting from</p>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl md:text-5xl leading-relaxed font-bold text-amber-500">
                        ${pkg.price.toLocaleString()}
                      </span>
                      {/* <span className="text-gray-400 text-sm">/pp</span> */}
                    </div>

                    <div className="space-y-4">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white  py-4  font-bold" asChild>
                        <Link href={`/contact?package=${pkg.slug}`}>Book This Adventure</Link>
                      </Button>
                      <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800  py-4" asChild>
                        <Link href="/contact">Customize Itinerary</Link>
                      </Button>
                    </div>

                    <p className="mt-6 text-[11px] text-gray-400 text-center leading-relaxed">
                      *Prices fluctuate based on seasonality and lodge availability. Private departures only.
                    </p>
                  </div>
                </div>

                {/* Trust / Info Card */}
                <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl space-y-6">
                  <h4 className=" font-bold text-lg border-b border-gray-50 pb-4">Trip Details</h4>

                  <div className="flex items-start gap-4">
                    <ShieldCheck className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Private Guaranteed</p>
                      <p className="text-xs text-gray-500">Your own vehicle and expert guide throughout the trip.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Best Time to Visit</p>
                      <p className="text-xs text-gray-500">{pkg.bestTimeToVisit}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Ideal Group Size</p>
                      <p className="text-xs text-gray-500">2-6 guests for maximum comfort.</p>
                    </div>
                  </div>
                </div>

                {/* Need Help? */}
                <div className="text-center p-6 border-2 border-dashed bg-gray-50 border-gray-100 rounded-xl">
                  <p className="text-gray-600 text-sm mb-4">Want a different lodge or route?</p>
                  <Link href="/contact" className="text-amber-700 font-bold flex items-center justify-center gap-1 hover:gap-3 transition-all">
                    Talk to a Specialist <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

