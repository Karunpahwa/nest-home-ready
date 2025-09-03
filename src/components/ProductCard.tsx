import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  condition: string;
  originalPrice: number;
  circlePrice: number;
  savings: number;
  onBuyNow?: () => void;
}

export const ProductCard = ({
  image,
  title,
  condition,
  originalPrice,
  circlePrice,
  savings,
  onBuyNow
}: ProductCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-card p-4 min-w-[280px] animate-fade-in hover:shadow-lg transition-all duration-300">
      <div className="relative mb-3">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        <Badge variant="secondary" className="absolute top-2 left-2 bg-success-light text-success font-medium">
          {condition}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-card-foreground line-clamp-2">{title}</h3>
        
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground line-through text-sm">₹{originalPrice.toLocaleString()}</span>
          <span className="text-xl font-bold text-foreground">₹{circlePrice.toLocaleString()}</span>
        </div>
        
        <div className="bg-success-light px-2 py-1 rounded-md inline-block">
          <span className="text-success font-semibold text-sm">Save {savings}%</span>
        </div>
        
        <Button 
          variant="cta" 
          size="sm" 
          className="w-full"
          onClick={onBuyNow}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};