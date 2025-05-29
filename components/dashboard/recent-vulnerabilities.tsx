import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate, getSeverityColor } from "@/lib/utils";
import { Shield, ShieldAlert, ShieldCheck, ShieldQuestion } from "lucide-react";

interface Vulnerability {
  id: string;
  name: string;
  severity: "critical" | "high" | "medium" | "low";
  date: Date;
  status: "open" | "in_progress" | "resolved" | "false_positive";
  affectedAsset: string;
}

function getSeverityIcon(severity: "critical" | "high" | "medium" | "low") {
  switch (severity) {
    case "critical":
      return <ShieldAlert className="h-4 w-4" />;
    case "high":
      return <ShieldAlert className="h-4 w-4" />;
    case "medium":
      return <Shield className="h-4 w-4" />;
    case "low":
      return <ShieldCheck className="h-4 w-4" />;
    default:
      return <ShieldQuestion className="h-4 w-4" />;
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case "open":
      return <Badge variant="destructive">Open</Badge>;
    case "in_progress":
      return <Badge variant="default" className="bg-amber-500">In Progress</Badge>;
    case "resolved":
      return <Badge variant="default" className="bg-green-500">Resolved</Badge>;
    case "false_positive":
      return <Badge variant="outline">False Positive</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
}

const recentVulnerabilities: Vulnerability[] = [
  {
    id: "vuln-001",
    name: "SQL Injection in Login Form",
    severity: "critical",
    date: new Date(2025, 0, 15),
    status: "open",
    affectedAsset: "auth-service.example.com",
  },
  {
    id: "vuln-002",
    name: "Outdated SSL Certificate",
    severity: "high",
    date: new Date(2025, 0, 20),
    status: "in_progress",
    affectedAsset: "api.example.com",
  },
  {
    id: "vuln-003",
    name: "Weak Password Policy",
    severity: "medium",
    date: new Date(2025, 0, 22),
    status: "open",
    affectedAsset: "User Management",
  },
  {
    id: "vuln-004",
    name: "Missing CSRF Protection",
    severity: "medium",
    date: new Date(2025, 0, 25),
    status: "resolved",
    affectedAsset: "profile.example.com",
  },
  {
    id: "vuln-005",
    name: "Insecure Direct Object Reference",
    severity: "high",
    date: new Date(2025, 0, 27),
    status: "open",
    affectedAsset: "order-service.example.com",
  },
];

export function RecentVulnerabilities() {
  return (
    <Card className="col-span-full xl:col-span-7">
      <CardHeader>
        <CardTitle>Recent Vulnerabilities</CardTitle>
        <CardDescription>
          The most recent vulnerabilities detected in your systems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentVulnerabilities.map((vulnerability) => (
            <div
              key={vulnerability.id}
              className="flex items-center gap-4 rounded-lg border p-3"
            >
              <div className={`shrink-0 rounded-full p-2 ${getSeverityColor(vulnerability.severity)}`}>
                {getSeverityIcon(vulnerability.severity)}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between">
                  <p className="font-medium">{vulnerability.name}</p>
                  {getStatusBadge(vulnerability.status)}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center text-xs text-muted-foreground">
                  <p>{vulnerability.affectedAsset}</p>
                  <span className="hidden sm:inline mx-2">•</span>
                  <p>{formatDate(vulnerability.date)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}