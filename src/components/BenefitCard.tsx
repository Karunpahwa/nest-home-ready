import { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-lg transition-all duration-300 animate-slide-up">
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-card-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};