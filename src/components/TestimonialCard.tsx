import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card animate-fade-in">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'fill-warning text-warning' : 'text-muted-foreground'}`}
          />
        ))}
      </div>
      
      <blockquote className="text-card-foreground italic mb-4">
        "{content}"
      </blockquote>
      
      <div>
        <div className="font-semibold text-card-foreground">{name}</div>
        <div className="text-muted-foreground text-sm">{role}</div>
      </div>
    </div>
  );
};