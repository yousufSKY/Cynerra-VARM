'use client';

import { Button } from '@/components/ui/button';
import { 
  Menu, 
  User, 
  Settings, 
  LogOut, 
  Bell,
  Shield,
  HelpCircle,
  Check
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { useRouter } from 'next/navigation';
import { logout } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { useUser } from '@/hooks/use-user';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from 'next/link';
import { format } from 'date-fns';

interface NavbarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export function Navbar({ collapsed, setCollapsed }: NavbarProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { user, notifications, unreadCount, markAsRead, markAllAsRead } = useUser();

  const handleLogout = async () => {
    const { error } = await logout();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to logout",
        variant: "destructive"
      });
      return;
    }
    router.push('/');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const userName = user?.displayName || user?.email?.split('@')[0] || 'User';
  const userEmail = user?.email || '';
  const avatarUrl = user?.photoURL || '';

  return (
    <div className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6 lg:px-8">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCollapsed(!collapsed)}
        className="lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div className="ml-auto flex items-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            <div className="flex items-center justify-between pb-4">
              <h4 className="text-sm font-semibold">Notifications</h4>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-auto p-0 text-muted-foreground">
                  Mark all as read
                </Button>
              )}
            </div>
            <ScrollArea className="h-[300px] px-1">
              {notifications.length > 0 ? (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex gap-4 rounded-lg p-2 ${
                        notification.read ? 'opacity-70' : ''
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{notification.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {format(notification.timestamp, 'PPp')}
                        </p>
                      </div>
                      {!notification.read && (
                        <div className="flex h-8 w-8 items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">No notifications</p>
                </div>
              )}
            </ScrollArea>
          </PopoverContent>
        </Popover>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src={avatarUrl} alt={userName} />
                <AvatarFallback>{getInitials(userName)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userName}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {userEmail}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile?tab=security">
                  <Shield className="mr-2 h-4 w-4" />
                  <span>Security</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Documentation</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}