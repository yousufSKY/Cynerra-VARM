import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/stat-card";
import { RecentVulnerabilities } from "@/components/dashboard/recent-vulnerabilities";
import { SeverityDistribution } from "@/components/dashboard/severity-distribution";
import { AlertTriangle, AlertCircle, Shield, ShieldAlert, Target } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Vulnerabilities"
          value="94"
          subtitle="Last updated: 12 minutes ago"
          icon={<ShieldAlert className="h-4 w-4" />}
          variant="danger"
        />
        <StatCard
          title="Open Issues"
          value="42"
          subtitle="18 high priority"
          icon={<AlertCircle className="h-4 w-4" />}
          variant="warning"
        />
        <StatCard
          title="Assets Monitored"
          value="156"
          subtitle="24 servers, 132 applications"
          icon={<Target className="h-4 w-4" />}
          variant="info"
        />
        <StatCard
          title="Security Score"
          value="76%"
          subtitle="+5% from last month"
          icon={<Shield className="h-4 w-4" />}
          variant="success"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <CardTitle>Security Activity</CardTitle>
            <CardDescription>Overview of recent security events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <div className="flex h-full w-full items-center justify-center">
                <div className="space-y-2 text-center">
                  <AlertTriangle className="h-8 w-8 mx-auto text-muted-foreground" />
                  <h3 className="text-sm font-medium">Activity Timeline</h3>
                  <p className="text-sm text-muted-foreground">Security events will be displayed here</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <SeverityDistribution />
      </div>
      <RecentVulnerabilities />
    </div>
  );
}