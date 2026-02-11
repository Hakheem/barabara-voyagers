import Image from 'next/image';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title?: string;
  description?: string;
  image: string;
  height?: string;
  contentPositionClassName?: string;
  textAlignClassName?: string;
  textStyleClassName?: string;
  overlayOpacity?: string;
  maxWidth?: string;
}

export default function SectionHeader({
  title,
  description,
  image,
  height = "h-[70vh]",
  contentPositionClassName = "bottom-10 left-0",
  textAlignClassName = "text-left",
  textStyleClassName = "text-5xl md:text-7xl",
  overlayOpacity = "bg-black/50",
  maxWidth = "max-w-4xl"
}: SectionHeaderProps) {
  const hasContent = title || description;

  return (
    <section className={cn("relative w-full overflow-hidden", height)}>
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title || "Section header image"}
          fill
          className="object-cover"
          priority
        />
        <div className={cn("absolute inset-0", overlayOpacity)} />
      </div>

      {hasContent && (
        <Container className="relative z-10 h-full">
          <div className={cn(
            "absolute",
            contentPositionClassName
          )}>
            <div className={cn(
              "flex flex-col",
              maxWidth,
              textAlignClassName
            )}>
              {title && (
                <h1 className={cn(
                  "title text-white drop-shadow-lg leading-tight",
                  textStyleClassName
                )}>
                  {title}
                </h1>
              )}

              {description && (
                <p className="text-lg md:text-xl text-white/90 font-light mt-4 leading-relaxed max-w-3xl">
                  {description}
                </p>
              )}
            </div>
          </div>
        </Container>
      )}
    </section>
  );
}

