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
      description: "Free delivery included. Open box inspection before payment - just like buying new."
    },
    {
      icon: <Eye size={40} />,
      title: "Complete Transparency",
      description: "See exact condition details, original purchase info, and honest pricing."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Setting up my Bangalore apartment was so easy with Circle Nest. Got a complete furniture set in 2 days without any hassle!",
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
      content: "No more dealing with sketchy sellers! Circle Nest made furniture shopping actually enjoyable and stress-free.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How do you ensure the quality of items?",
      answer: "Every item goes through our rigorous inspection process. We check functionality, cleanliness, and structural integrity. Items are cleaned and sanitized before delivery."
    },
    {
      question: "What if I don't like the item after delivery?",
      answer: "You can inspect the item before payment. If you're not satisfied, we'll take it back immediately. We also offer a 3-day return policy for peace of mind."
    },
    {
      question: "How long does delivery take?",
      answer: "Most items are delivered within 24-48 hours in Bangalore. We'll coordinate with you for the most convenient delivery time."
    },
    {
      question: "Is the pricing negotiable?",
      answer: "No negotiations needed! Our prices are already optimized for maximum savings. What you see is what you pay - no hidden costs."
    },
    {
      question: "How does the bundle offer work?",
      answer: "Buy any 3 Circle Nest items and get ₹500 instant credits in your account. Credits can be used for future purchases or additional items."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light via-background to-success-light py-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-primary-light border-primary text-primary">
                  🏠 Circle Nest - Home Essentials
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Get quality home essentials at 
                  <span className="text-primary"> unbeatable prices</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  No hassle, guaranteed quality. Perfect for young professionals setting up their new homes in Bangalore.
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
                  <span className="font-medium">Delivery Included</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg">
                  Shop Nest Collection
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp Support
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
              View All Nest Collection
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Circle Nest */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Circle Nest?</h2>
            <p className="text-xl text-muted-foreground">
              The smart way to set up your home without the marketplace headaches
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-primary-light/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple as buying new items online
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-slide-up">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground">Browse & Buy</h3>
              <p className="text-muted-foreground">
                Select from our curated Nest collection. Add to cart and checkout securely.
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground">We Handle Everything</h3>
              <p className="text-muted-foreground">
                Inspection, pickup, cleaning, and quality verification - all done by our team.
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground">Get It Delivered</h3>
              <p className="text-muted-foreground">
                Open box, inspect the item, and pay only when you're completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-success-light rounded-2xl p-8 text-center animate-fade-in">
            <div className="mb-6">
              <Badge variant="secondary" className="bg-success text-success-foreground text-lg px-4 py-2">
                🎉 Special Bundle Offer
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Buy 3 Items → Get ₹500 Credits
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Complete your home setup and save even more with our bundle deal
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Study Setup</h4>
                <p className="text-muted-foreground text-sm">Table + Chair + Lamp</p>
                <p className="text-success font-bold">Save ₹2,000+</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Kitchen Essentials</h4>
                <p className="text-muted-foreground text-sm">Fridge + Microwave + Table</p>
                <p className="text-success font-bold">Save ₹3,500+</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Living Room</h4>
                <p className="text-muted-foreground text-sm">Sofa + TV + Coffee Table</p>
                <p className="text-success font-bold">Save ₹4,000+</p>
              </div>
            </div>
            
            <Button variant="bundle" size="lg" className="text-lg">
              Shop Nest Bundle
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
              <span className="text-lg font-semibold text-primary">Join 1000+ Happy Nest Customers</span>
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

      {/* Trust & Guarantee */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Circle Guarantee</h2>
            <p className="text-xl text-muted-foreground">
              Your peace of mind is our priority
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center">
                  <CheckCircle className="text-success" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Quality Inspection Promise</h3>
                  <p className="text-muted-foreground">
                    Every item undergoes 15-point quality check including functionality, cleanliness, and structural integrity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">3-Day Protection</h3>
                  <p className="text-muted-foreground">
                    Not satisfied? Return within 3 days for full refund. No questions asked.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warning-light rounded-full flex items-center justify-center">
                  <MessageCircle className="text-warning" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">24/7 WhatsApp Support</h3>
                  <p className="text-muted-foreground">
                    Need help? Our support team is available round the clock via WhatsApp.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-light/20 rounded-xl p-8 text-center">
              <Leaf className="text-success mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-foreground mb-2">Environmental Impact</h3>
              <p className="text-muted-foreground mb-4">
                By choosing Circle Nest, you're helping reduce waste and carbon footprint.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-success">50kg</div>
                  <div className="text-sm text-muted-foreground">CO₂ Saved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">85%</div>
                  <div className="text-sm text-muted-foreground">Waste Reduced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Circle Nest
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
              Shop Nest Collection
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white/10">
              Get Notified About New Arrivals
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