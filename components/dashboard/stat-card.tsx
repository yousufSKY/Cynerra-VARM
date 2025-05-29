import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("transition-all", {
  variants: {
    variant: {
      default: "",
      success: "border-green-500 dark:border-green-600",
      warning: "border-amber-500 dark:border-amber-600",
      danger: "border-red-500 dark:border-red-600",
      info: "border-blue-500 dark:border-blue-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const iconVariants = cva("rounded-full p-2", {
  variants: {
    variant: {
      default: "bg-muted",
      success: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
      warning: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
      danger: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
      info: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface StatCardProps extends VariantProps<typeof cardVariants> {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  variant,
  className,
}: StatCardProps) {
  return (
    <Card className={cn(cardVariants({ variant }), className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn(iconVariants({ variant }))}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}