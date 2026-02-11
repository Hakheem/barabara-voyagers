import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
    isPhone?: boolean;
  };
  backgroundImage: string;
  overlay?: boolean;
  brightness?: number;
  textAlign?: 'center' | 'left';
  paddingY?: string;
}

export default function DestinationCTA({
  title,
  subtitle = 'Begin Your Journey',
  description,
  primaryButton,
  secondaryButton,
  backgroundImage,
  overlay = true,
  brightness = 50,
  textAlign = 'center',
  paddingY = 'py-24'
}: CTASectionProps) {
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left'
  };

  return (
    <section className={`relative ${paddingY} overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <Image 
          src={backgroundImage} 
          alt={title} 
          fill 
          className={`object-cover ${overlay ? 'brightness-' + brightness : ''}`} 
          priority
        />
      </div>
      <Container className="relative z-10">
        <div className={`max-w-2xl ${alignClasses[textAlign]}`}>
          <span className="text-amber-400 uppercase tracking-[0.4em] text-[10px] font-bold block mb-6">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl title text-white mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-base text-gray-200 mb-10 font-light leading-relaxed">
            {description}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 ${textAlign === 'center' ? 'justify-center' : ''}`}>
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white h-12 px-10 text-sm font-bold border-none" 
              asChild
            >
              <Link href={primaryButton.href}>
                {primaryButton.text}
              </Link>
            </Button>
            {secondaryButton && (
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 h-12 px-10 text-sm font-bold" 
                asChild
              >
                {secondaryButton.isPhone ? (
                  <a href={`tel:${secondaryButton.href}`}>
                    {secondaryButton.text}
                  </a>
                ) : (
                  <Link href={secondaryButton.href}>
                    {secondaryButton.text}
                  </Link>
                )}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}