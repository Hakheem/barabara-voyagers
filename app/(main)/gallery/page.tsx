import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { getGalleryAlbums } from '@/lib/wordpress';
import Container from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'Safari Photo Gallery - Barabara Voyagers',
  description: 'Browse our collection of stunning safari photography from across East Africa.',
};
 
export const revalidate = 3600;

export default async function GalleryPage() {
  const albums = await getGalleryAlbums({ per_page: 100 });

  return (
    <>
     

      {/* Gallery Albums */}
      <section className=" pt-[18vh] lg:pt-[28vh] ">
        <Container>
          {albums.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Gallery albums coming soon. Check back later for stunning safari photography.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((album) => (
                <Card key={album.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <Link href={`/gallery/${album.slug}`}>
                    <div className="relative h-72">
                      <Image
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{album.destination}</span>
                        </div>
                        <h3 className="text-2xl font-bold">{album.title}</h3>
                        <p className="text-sm mt-1">{album.images.length} photos</p>
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
