'use client';

import * as React from 'react';
import Link from 'next/link';
import { Shield, ChevronRight, BarChart2, Lock, RefreshCcw, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Shield className="h-6 w-6" />
          <span className="text-lg font-bold">Cynerra</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {solutions.map((solution) => (
                    <ListItem
                      key={solution.title}
                      title={solution.title}
                      href={solution.href}
                    >
                      {solution.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#features" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Features
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#testimonials" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Testimonials
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link href="/welcome">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/welcome">Get Started</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">Trusted by Fortune 500 Companies</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secure Your Digital Infrastructure
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Comprehensive vulnerability assessment and risk management solution for modern enterprises
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2" asChild>
                    <Link href="/welcome">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-3xl"></div>
                  <div className="relative h-full rounded-lg border bg-card p-8 shadow-lg">
                    <div className="space-y-4">
                      <div className="h-2.5 w-32 rounded-full bg-muted"></div>
                      <div className="h-2.5 w-40 rounded-full bg-muted"></div>
                      <div className="h-2.5 w-36 rounded-full bg-muted"></div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="rounded-lg border bg-background p-4 shadow-sm">
                        <div className="h-2.5 w-12 rounded-full bg-muted"></div>
                        <div className="mt-3 h-20 rounded-md bg-muted"></div>
                      </div>
                      <div className="rounded-lg border bg-background p-4 shadow-sm">
                        <div className="h-2.5 w-12 rounded-full bg-muted"></div>
                        <div className="mt-3 h-20 rounded-md bg-muted"></div>
                      </div>
                      <div className="rounded-lg border bg-background p-4 shadow-sm">
                        <div className="h-2.5 w-12 rounded-full bg-muted"></div>
                        <div className="mt-3 h-20 rounded-md bg-muted"></div>
                      </div>
                      <div className="rounded-lg border bg-background p-4 shadow-sm">
                        <div className="h-2.5 w-12 rounded-full bg-muted"></div>
                        <div className="mt-3 h-20 rounded-md bg-muted"></div>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="h-2.5 w-24 rounded-full bg-muted"></div>
                      <div className="h-6 w-12 rounded-md bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-b bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features for Enhanced Security
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive suite of tools helps you identify, assess, and mitigate security risks effectively
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
                  <div className="space-y-2">
                    <feature.icon className="h-6 w-6 text-primary mb-2" />
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Trusted by Security Teams Worldwide
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about Cynerra
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-muted w-10 h-10" />
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Secure Your Infrastructure?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Start your security journey with Cynerra today. Set up in minutes, not days.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/welcome">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-between gap-4 border-t px-4 py-6 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          <p className="text-sm text-muted-foreground">
            © Cynerra 2025. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || '#'}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const solutions = [
  {
    title: "Vulnerability Assessment",
    href: "#",
    description: "Comprehensive scanning and assessment of your infrastructure vulnerabilities.",
  },
  {
    title: "Risk Management",
    href: "#",
    description: "Advanced risk analysis and mitigation strategies for your organization.",
  },
  {
    title: "Compliance",
    href: "#",
    description: "Stay compliant with industry standards and regulations.",
  },
  {
    title: "Security Operations",
    href: "#",
    description: "Streamline your security operations and incident response.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Monitoring" },
  { value: "500+", label: "Enterprise Clients" },
];

const benefits = [
  {
    title: "Real-time Monitoring",
    description: "Continuous monitoring of your infrastructure for potential security threats.",
    icon: BarChart2,
  },
  {
    title: "Advanced Protection",
    description: "Multi-layered security approach to protect your critical assets.",
    icon: Lock,
  },
  {
    title: "Automated Updates",
    description: "Stay protected with automatic security updates and patches.",
    icon: RefreshCcw,
  },
];

const features = [
  {
    title: "Vulnerability Scanning",
    description: "Automated scanning for vulnerabilities in your systems and applications",
    icon: AlertCircle,
  },
  {
    title: "Risk Assessment",
    description: "Comprehensive risk assessment and prioritization",
    icon: BarChart2,
  },
  {
    title: "Compliance Monitoring",
    description: "Track compliance with industry standards and regulations",
    icon: CheckCircle2,
  },
  // ...existing features
];

const testimonials = [
  {
    quote: "Cynerra has transformed how we approach security. The platform's comprehensive features and ease of use make it an invaluable tool for our team.",
    author: "Sarah Chen",
    role: "CISO at TechCorp",
  },
  {
    quote: "The real-time monitoring and instant alerts have helped us prevent several potential security incidents. Excellent platform!",
    author: "Michael Rodriguez",
    role: "Security Director at SecureNet",
  },
  {
    quote: "Implementation was smooth, and the support team is highly responsive. Cynerra has exceeded our expectations.",
    author: "Emily Thompson",
    role: "IT Manager at GlobalTech",
  },
];