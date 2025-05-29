import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Search, Shield } from "lucide-react";
import { getSeverityColor } from "@/lib/utils";

interface Vulnerability {
  id: string;
  name: string;
  severity: "critical" | "high" | "medium" | "low";
  cve: string | null;
  affectedAsset: string;
  status: "open" | "in_progress" | "resolved" | "false_positive";
}

const vulnerabilities: Vulnerability[] = [
  {
    id: "vuln-001",
    name: "SQL Injection in Login Form",
    severity: "critical",
    cve: "CVE-2022-1234",
    affectedAsset: "auth-service.example.com",
    status: "open",
  },
  {
    id: "vuln-002",
    name: "Outdated SSL Certificate",
    severity: "high",
    cve: null,
    affectedAsset: "api.example.com",
    status: "in_progress",
  },
  {
    id: "vuln-003",
    name: "Weak Password Policy",
    severity: "medium",
    cve: null,
    affectedAsset: "User Management",
    status: "open",
  },
  {
    id: "vuln-004",
    name: "Missing CSRF Protection",
    severity: "medium",
    cve: "CVE-2023-5678",
    affectedAsset: "profile.example.com",
    status: "resolved",
  },
  {
    id: "vuln-005",
    name: "Insecure Direct Object Reference",
    severity: "high",
    cve: "CVE-2023-9876",
    affectedAsset: "order-service.example.com",
    status: "open",
  },
  {
    id: "vuln-006",
    name: "Cross-Site Scripting (XSS)",
    severity: "high",
    cve: "CVE-2023-4321",
    affectedAsset: "comments.example.com",
    status: "open",
  },
  {
    id: "vuln-007",
    name: "Unpatched Server Software",
    severity: "critical",
    cve: "CVE-2024-1111",
    affectedAsset: "web-01.example.com",
    status: "open",
  },
  {
    id: "vuln-008",
    name: "Insecure File Upload",
    severity: "medium",
    cve: null,
    affectedAsset: "documents.example.com",
    status: "in_progress",
  },
];

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

function getSeverityBadge(severity: "critical" | "high" | "medium" | "low") {
  return (
    <Badge className={getSeverityColor(severity)}>
      {severity.charAt(0).toUpperCase() + severity.slice(1)}
    </Badge>
  );
}

export default function VulnerabilitiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Vulnerabilities</h1>
        <Button>
          <Shield className="mr-2 h-4 w-4" />
          New Scan
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Detected Vulnerabilities</CardTitle>
          <CardDescription>
            A comprehensive list of all detected vulnerabilities across your systems
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search vulnerabilities..."
                className="w-full pl-8"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                Sort
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>CVE</TableHead>
                  <TableHead>Affected Asset</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vulnerabilities.map((vuln) => (
                  <TableRow key={vuln.id}>
                    <TableCell className="font-medium">{vuln.name}</TableCell>
                    <TableCell>{getSeverityBadge(vuln.severity)}</TableCell>
                    <TableCell>{vuln.cve || "N/A"}</TableCell>
                    <TableCell>{vuln.affectedAsset}</TableCell>
                    <TableCell className="text-right">{getStatusBadge(vuln.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}