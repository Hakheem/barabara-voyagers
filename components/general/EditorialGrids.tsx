'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const EditorialGrids = () => {
    return (
        <section className="py-8 overflow-hidden">
            <div className="flex flex-col gap-12">

                {/* 1. Adventure Awaits */}
                <div className="flex flex-col lg:flex-row items-stretch bg-gray-100 overflow-hidden lg:mr-24 min-h-[500px]">
                    <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative">
                        <Image
                            src="/adve.webp"
                            alt="Adventure"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-16 xl:px-20 py-16 flex flex-col justify-center">
                        <span className="label-luxury text-amber-700 block mb-4">Adventure</span>
                        <h2 className="title text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                           Adventure Awaits
                        </h2>
                        <p className="text-gray-700 text-lg  leading-relaxed mb-6 max-w-xl">
                     True living begins where the familiar ends. At Barabara Voyagers, we invite you to step into a world of inspirational narratives and breathtaking landscapes. Whether you seek the adrenaline of a classic African safari or the serenity of a hidden luxury retreat, our expeditions are meticulously designed to help you rediscover the wild heartbeat of the world.
                        </p>
                        <div className="flex">
                            <Button variant="outline" size="md" asChild>
                                <Link href="/destinations" className="flex items-center">
                                    Start Your Adventure <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 2. Beautiful Destinations - Right Image (Grid) */}
                <div className="flex flex-col lg:flex-row-reverse items-stretch bg-gray-100 overflow-hidden lg:ml-24 min-h-[500px]">
                    <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full grid grid-cols-3">
                        <div className="relative h-full"><Image src="/girr.jpg" alt="Lion" fill className="object-cover" /></div>
                        <div className="relative h-full scale-105"><Image src="/leop.jpg" alt="Leopard" fill className="object-cover" /></div>
                        <div className="relative h-full"><Image src="/lionness.jpg" alt="Elephant" fill className="object-cover" /></div>
                    </div>
                    <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-16 xl:px-20 py-16 flex flex-col justify-center">
                        <span className="label-luxury text-amber-700 block mb-4">Destination</span>
                        <h2 className="title text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                            Beautiful Destinations
                        </h2>
                        <p className="text-gray-700 text-lg  leading-relaxed mb-6 max-w-xl">
                       The allure of East Africa is a tapestry of shifting sands, emerald forests, and vast, golden savannahs. Our veteran guides lead you beyond the tourist trails into the most pristine corners of the continent. From the majestic peaks to the tranquil shores, we curate journeys that immerse you in the authentic beauty and timeless spirit of the Eastern African landscape.
                        </p>
                        <div className="flex">
                            <Button variant="outline" size="md" asChild>
                                <Link href="/destinations">View Destinations</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 3. The Experience */}
                <div className="flex flex-col lg:flex-row items-stretch bg-gray-100 overflow-hidden lg:mr-24 min-h-[500px]">
                    <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full ">
                        <div className="relative h-full border-r border-gray-100"><Image src="/roar.jpg" alt="Experience" fill className="object-cover" /></div>
                        {/* <div className="relative h-full"><Image src="/leop.jpg" alt="Experience" fill className="object-cover" /></div> */}
                    </div>
                    <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-16 xl:px-20 py-16 flex flex-col justify-center">
                        <span className="label-luxury text-amber-700 block mb-4">Voyagers</span>
                        <h2 className="title text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                            The Barabara Experience
                        </h2>
                        <p className="text-gray-700 text-lg  leading-relaxed mb-6 max-w-xl">
                       We believe that travel should be more than a visit—it should be a transformation. The Barabara Experience is defined by a seamless blend of ancestral wisdom and modern refinement. Every detail of your itinerary is orchestrated to ensure that while you explore the wonders of the wild, you remain grounded in comfort and connected to the soul of the places you visit.
                        </p>
                        <div className="flex">
                            <Button variant="outline" size="md" asChild>
                                <Link href="/about">Start Your Adventure</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 4. Our Guides - Right Image */}
                <div className="flex flex-col lg:flex-row-reverse items-stretch bg-gray-100 overflow-hidden lg:ml-24 min-h-[500px]">
                    <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative">
                        <Image
                            src="/guides.webp"
                            alt="Guides"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-8 md:px-12 lg:px-16 xl:px-20 py-16 flex flex-col justify-center">
                        <span className="label-luxury text-amber-700 block mb-4">Our Safari Team</span>
                        <h2 className="title text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                            Our Safari Guides
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-xl">
                        The heartbeat of every voyage is the storyteller who guides the way. Our team consists of local experts with a profound, lifelong connection to their homeland. They are more than just navigators; they are cultural ambassadors and conservationists who decode the language of the wilderness, ensuring your journey is as insightful as it is safe.
                        </p>
                        <div className="flex">
                            <Button variant="outline" size="md" asChild>
                                <Link href="/team">Lets Take a Tour</Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EditorialGrids;

