import { cn } from "@/lib/utils";

interface RewardLogoProps {
  className?: string;
}

export const RewardLogo = ({ className }: RewardLogoProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <img 
          src="/lovable-uploads/3e5a46cc-3554-46d8-ba85-18df325d7344.png" 
          alt="Logo" 
          className="w-16 h-16 rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};