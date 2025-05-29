import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

export function getInitials(name: string): string {
  if (!name) return '';
  
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function getSeverityColor(severity: 'critical' | 'high' | 'medium' | 'low'): string {
  switch (severity) {
    case 'critical':
      return 'bg-red-600 text-white';
    case 'high':
      return 'bg-orange-500 text-white';
    case 'medium':
      return 'bg-amber-400 text-amber-950';
    case 'low':
      return 'bg-blue-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
}