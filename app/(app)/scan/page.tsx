import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scan, Server, Globe, Code, Shield } from "lucide-react";

export default function ScanPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Vulnerability Scan</h1>
      </div>
      <Tabs defaultValue="new-scan" className="w-full">
        <TabsList className="grid grid-cols-2 w-[400px]">
          <TabsTrigger value="new-scan">New Scan</TabsTrigger>
          <TabsTrigger value="history">Scan History</TabsTrigger>
        </TabsList>
        <TabsContent value="new-scan">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Network Scan</CardTitle>
                <CardDescription>
                  Scan network infrastructure for vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
                  <Server className="h-10 w-10 text-muted-foreground" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="network-target">Target IP or Range</Label>
                  <Input id="network-target" placeholder="192.168.1.0/24" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="scan-depth">Scan Depth</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger id="scan-depth">
                      <SelectValue placeholder="Select scan depth" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quick">Quick Scan</SelectItem>
                      <SelectItem value="standard">Standard Scan</SelectItem>
                      <SelectItem value="deep">Deep Scan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Scan className="mr-2 h-4 w-4" />
                  Start Network Scan
                </Button>
              </CardFooter>
            </Card>
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Web Application Scan</CardTitle>
                <CardDescription>
                  Scan web applications for security vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
                  <Globe className="h-10 w-10 text-muted-foreground" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="web-target">Target URL</Label>
                  <Input id="web-target" placeholder="https://example.com" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="auth-required">Authentication</Label>
                  <Select defaultValue="none">
                    <SelectTrigger id="auth-required">
                      <SelectValue placeholder="Authentication Required?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Authentication</SelectItem>
                      <SelectItem value="basic">Basic Auth</SelectItem>
                      <SelectItem value="form">Form Authentication</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Scan className="mr-2 h-4 w-4" />
                  Start Web Scan
                </Button>
              </CardFooter>
            </Card>
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Code Analysis</CardTitle>
                <CardDescription>
                  Analyze source code for security vulnerabilities
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="flex h-20 items-center justify-center rounded-md border-2 border-dashed">
                  <Code className="h-10 w-10 text-muted-foreground" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="repository">Repository URL</Label>
                  <Input id="repository" placeholder="https://github.com/user/repo" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="language">Primary Language</Label>
                  <Select defaultValue="auto">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto Detect</SelectItem>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="java">Java</SelectItem>
                      <SelectItem value="csharp">C#</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Scan className="mr-2 h-4 w-4" />
                  Start Code Analysis
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Scan History</CardTitle>
              <CardDescription>
                View and manage your previous vulnerability scans
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex h-60 items-center justify-center rounded-md border-2 border-dashed">
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No scan history yet</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-[300px]">
                    Start a new scan to assess your systems for vulnerabilities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}