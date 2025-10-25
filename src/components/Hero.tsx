import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/20" />
      <div className="container relative h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfect Style
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Elevate your wardrobe with our curated collection of fashion-forward pieces. 
            Quality meets affordability.
          </p>
          <div className="flex gap-4">
            <Link to="/women">
              <Button size="lg" className="group">
                Shop Women
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/men">
              <Button size="lg" variant="outline">
                Shop Men
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
