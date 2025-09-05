import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductCard } from "@/components/ProductCard";
import { BenefitCard } from "@/components/BenefitCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { 
  Clock, 
  Shield, 
  CheckCircle, 
  CreditCard, 
  Truck, 
  Eye,
  Search,
  ArrowRight,
  MessageCircle,
  Users,
  Leaf,
  ChevronRight,
  Star
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-apartment.jpg";
import studyTableImage from "@/assets/study-table.jpg";
import refrigeratorImage from "@/assets/refrigerator.jpg";
import bedImage from "@/assets/bed.jpg";
import circleLogo from "@/assets/circle-logo.png";

const Index = () => {
  const hotDeals = [
    {
      image: studyTableImage,
      title: "Modern Study Table with Chair",
      condition: "Like New",
      originalPrice: 8000,
      circlePrice: 3500,
      savings: 56
    },
    {
      image: refrigeratorImage,
      title: "Double Door Refrigerator 260L",
      condition: "Very Good",
      originalPrice: 25000,
      circlePrice: 12000,
      savings: 52
    },
    {
      image: bedImage,
      title: "Queen Size Bed with Mattress",
      condition: "Like New",
      originalPrice: 15000,
      circlePrice: 7500,
      savings: 50
    }
  ];

  const benefits = [
    {
      icon: <Clock size={40} />,
      title: "No Time Wasted",
      description: "We find and negotiate for you. No endless scrolling through listings or meeting strangers."
    },
    {
      icon: <Shield size={40} />,
      title: "Zero Security Risk",
      description: "No stranger meetings, secure payments, and verified sellers. Your safety is guaranteed."
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Quality Guaranteed",
      description: "Every item is inspected, cleaned, and condition-verified before reaching you."
    },
    {
      icon: <CreditCard size={40} />,
      title: "Payment Protected",
      description: "Money-back guarantee with secure payment processing. Pay only after inspection."
    },
    {
      icon: <Truck size={40} />,
      title: "Doorstep Delivery",
      description: "Delivery in 72 hours. Open box inspection before payment - just like buying new."
    },
    {
      icon: <Eye size={40} />,
      title: "Complete Transparency",
      description: "See exact condition details, original purchase info, and honest pricing."
    },
    {
      icon: <Leaf size={40} />,
      title: "Eco-Friendly Impact",
      description: "Every reused item saves 12kg CO₂ from the environment. Make a positive impact with every purchase."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Setting up my Bangalore apartment was so easy with Circle. Got a complete furniture set in 2 days without any hassle!",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      role: "Product Manager",
      content: "The quality inspection process is amazing. Everything arrived exactly as described. Saved ₹15,000 on my home setup!",
      rating: 5
    },
    {
      name: "Ananya Singh",
      role: "Marketing Executive",
      content: "No more dealing with sketchy sellers! Circle made furniture shopping actually enjoyable and stress-free.",
      rating: 5
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background py-4 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <img src="/lovable-uploads/1b39179d-4984-49b6-8a16-4cbbd51436ec.png" alt="Circle" className="h-12 w-auto" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light via-background to-success-light py-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-primary-light border-primary text-primary">
                  🏠 Circle - Home Essentials
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Quality home essentials at unbeatable prices in 
                  <span className="text-primary"> Bangalore</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Skip the hassle of marketplace hunting. Get furniture & appliances delivered in 72 hours - quality checked, payment protected.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-success">
                  <CheckCircle size={20} />
                  <span className="font-medium">50%+ Savings</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Shield size={20} />
                  <span className="font-medium">Quality Verified</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Truck size={20} />
                  <span className="font-medium">Delivery in 72 Hours</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg">
                  Shop Circle Collection
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="whatsapp" size="lg" className="text-lg shadow-lg hover:shadow-xl border-2 border-white/20">
                  <img src="/lovable-uploads/fc9b9a33-1f05-4e7a-9a59-89c3c37a48f7.png" alt="WhatsApp" className="mr-2 w-5 h-5" />
                  Speak to Circle
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img 
                src={heroImage} 
                alt="Modern furnished apartment in Bangalore"
                className="rounded-xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hot Deals Carousel */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">🔥 Hot Deals This Week</h2>
            <p className="text-muted-foreground">Quality-checked items at unbeatable prices</p>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-4">
            {hotDeals.map((deal, index) => (
              <ProductCard
                key={index}
                {...deal}
                onBuyNow={() => console.log(`Buy ${deal.title}`)}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Circle Collection
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Circle Rewards Program */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent rounded-2xl p-8 text-center animate-fade-in border border-border">
            <div className="mb-6">
              <Badge variant="secondary" className="bg-[hsl(var(--badge-success-bg))] text-[hsl(var(--badge-success-text))] text-lg px-4 py-2 border-none">
                🎉 Circle Rewards Program
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Make 3 purchases → Unlock ₹500 Credits
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Complete your home setup and save even more with our rewards program
            </p>
            
            {/* Milestone Tracker */}
            <div className="flex items-center justify-center mb-8 max-w-2xl mx-auto">
              <div className="flex items-center w-full">
                {/* Milestone 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mb-2">
                    1
                  </div>
                  <p className="text-sm text-foreground font-medium">First Purchase</p>
                </div>
                
                {/* Arrow 1 */}
                <div className="flex-1 mx-4">
                  <div className="h-1 bg-border rounded-full relative">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-border" size={16} />
                  </div>
                </div>
                
                {/* Milestone 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-2 border-border bg-background text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold mb-2">
                    2
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Second Purchase</p>
                </div>
                
                {/* Arrow 2 */}
                <div className="flex-1 mx-4">
                  <div className="h-1 bg-border rounded-full relative">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-border" size={16} />
                  </div>
                </div>
                
                {/* Milestone 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-2 border-[hsl(var(--badge-success-bg))] bg-[hsl(var(--badge-success-bg))] text-[hsl(var(--badge-success-text))] rounded-full flex items-center justify-center text-xs font-bold mb-2">
                    ₹500
                  </div>
                  <p className="text-sm text-[hsl(var(--badge-success-bg))] font-medium">Credits Unlocked!</p>
                </div>
              </div>
            </div>
            
            <Button variant="bundle" size="lg" className="text-lg">
              Start Your Circle Journey
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="text-primary" size={24} />
              <span className="text-lg font-semibold text-primary">Join 1000+ Happy Circle Customers</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="py-16 px-4 gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Set Up Your Home?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of young professionals who chose the smarter way to furnish their homes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg bg-white text-primary hover:bg-white/90">
              Shop Circle Collection
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="whatsapp" size="lg" className="text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200">
              <img src="/lovable-uploads/fc9b9a33-1f05-4e7a-9a59-89c3c37a48f7.png" alt="WhatsApp" className="mr-2 w-5 h-5" />
              Did not find what you were looking for?
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span className="text-sm">No Hidden Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span className="text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} />
              <span className="text-sm">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;