"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BarChart3, FileText, Lock, Settings, Shield, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

interface SidebarItemProps {
  icon: React.ElementType;
  title: string;
  href: string;
  collapsed?: boolean;
}

function SidebarItem({ icon: Icon, title, href, collapsed }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (collapsed) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Link href={href} passHref>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-10 w-10 my-1",
                isActive && "bg-primary/10 text-primary"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{title}</span>
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="ml-1">
          {title}
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Link href={href} passHref>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start mb-1",
          isActive && "bg-primary/10 text-primary"
        )}
      >
        <Icon className="mr-2 h-5 w-5" />
        {title}
      </Button>
    </Link>
  );
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  return (
    <aside
      className={cn(
        "group flex flex-col border-r bg-background transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className={cn("flex h-14 items-center border-b px-4", collapsed ? "justify-center" : "justify-between")}>
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2 px-4 py-2">
            <Shield className="h-6 w-6" />
            <span className="font-bold text-lg">Cynerra</span>
          </Link>
        )}
        {collapsed && (
          <Shield className="h-6 w-6 text-primary" />
        )}
      </div>
      <ScrollArea className="flex-1 py-4 px-2">
        <div className="flex flex-col px-2">
          <SidebarItem
            icon={BarChart3}
            title="Dashboard"
            href="/dashboard"
            collapsed={collapsed}
          />
          <SidebarItem
            icon={ShieldAlert}
            title="Vulnerabilities"
            href="/vulnerabilities"
            collapsed={collapsed}
          />
          <SidebarItem
            icon={Lock}
            title="Scan"
            href="/scan"
            collapsed={collapsed}
          />
          <SidebarItem
            icon={FileText}
            title="Reports"
            href="/reports"
            collapsed={collapsed}
          />
          <SidebarItem
            icon={Settings}
            title="Settings"
            href="/settings"
            collapsed={collapsed}
          />
        </div>
      </ScrollArea>
    </aside>
  );
}