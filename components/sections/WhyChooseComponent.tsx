import Image from 'next/image';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps, Sparkles } from 'lucide-react';
import { IconType } from 'react-icons';
import Container from '@/components/ui/Container';

interface WhyChooseItem {
  title: string;
  desc: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType;
  img: string;
}

interface WhyChooseSectionProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  description?: string;
  items: WhyChooseItem[];
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  accentColor?: string;
}

export default function WhyChooseSection({
  title,
  subtitle = 'The Cradle of Humanity',
  tagline = '',
  description,
  items,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-950',
  borderColor = 'border-gray-100',
  accentColor = 'text-amber-600'
}: WhyChooseSectionProps) {
  return (
    <section className={`py-22 relative overflow-hidden border-b ${borderColor} ${backgroundColor}`}>
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <Container className="relative">
        <div className="max-w-5xl mb-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-transparent" />
            <span className="text-amber-700 uppercase tracking-[0.3em] text-xs font-normal">
              {subtitle}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="text-5xl md:text-6xl title leading-[0.9] mb-4">
                {title}
              </h2>
              {tagline && (
                <p className={`text-lg ${accentColor} font-light italic mb-2`}>
                  {tagline}
                </p>
              )}
              {description && (
                <p className="text-lg text-gray-600 font-light max-w-2xl leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {items.map((item, i) => (
            <div key={i} className="relative h-[400px] group overflow-hidden border border-gray-200/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-amber-400">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h4 className="text-2xl title text-white mb-3 tracking-wide">
                  {item.title}
                </h4>
                
                <p className="text-gray-300 text-sm font-light leading-relaxed max-w-[260px] mb-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
