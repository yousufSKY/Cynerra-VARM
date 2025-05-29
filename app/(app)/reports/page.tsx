import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import { Download, FileText, MoreHorizontal } from "lucide-react";

interface Report {
  id: string;
  title: string;
  date: Date;
  type: string;
  status: string;
}

const reports: Report[] = [
  {
    id: "rep-001",
    title: "Monthly Security Assessment - January 2025",
    date: new Date(2025, 0, 31),
    type: "Monthly",
    status: "Completed",
  },
  {
    id: "rep-002",
    title: "Web Application Security Audit",
    date: new Date(2025, 0, 25),
    type: "Custom",
    status: "Completed",
  },
  {
    id: "rep-003",
    title: "Compliance Check - PCI DSS",
    date: new Date(2025, 0, 20),
    type: "Compliance",
    status: "Completed",
  },
  {
    id: "rep-004",
    title: "Network Infrastructure Assessment",
    date: new Date(2025, 0, 15),
    type: "Custom",
    status: "Completed",
  },
  {
    id: "rep-005",
    title: "Quarterly Executive Summary - Q1 2025",
    date: new Date(2025, 0, 10),
    type: "Quarterly",
    status: "Draft",
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Security Reports</CardTitle>
          <CardDescription>View and download security assessment reports</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.title}</TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell>{formatDate(report.date)}</TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      report.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                    }`}>
                      {report.status}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Report</DropdownMenuItem>
                        <DropdownMenuItem>Share Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <div className="text-xs text-muted-foreground">
            Showing 5 of 5 reports
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}