import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

// Icons for the demo
const AppWindowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
);

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Default active tab value',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Tab orientation',
    },
  },
};

export default meta;

export const Default: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-name">Name</Label>
            <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-username">Username</Label>
            <Input id="tabs-demo-username" defaultValue="@peduarte" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="password">
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password here. After saving, you'll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-current">Current password</Label>
            <Input id="tabs-demo-current" type="password" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-new">New password</Label>
            <Input id="tabs-demo-new" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save password</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
);
Default.args = {
  defaultValue: "account",
};

export const WithIcons: StoryFn = () => (
  <Tabs defaultValue="code">
    <TabsList>
      <TabsTrigger value="code">
        <CodeIcon />
        Code
      </TabsTrigger>
      <TabsTrigger value="preview">
        <AppWindowIcon />
        Preview
      </TabsTrigger>
    </TabsList>
    <TabsContent value="code">
      <Card>
        <CardHeader>
          <CardTitle>Code Editor</CardTitle>
          <CardDescription>
            Write your code here. This is a code editor tab.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md font-mono text-sm">
            <div>function hello() {'{'}</div>
            <div>  console.log("Hello, World!");</div>
            <div>{'}'}</div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="preview">
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            See how your code looks when rendered.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-md border">
            <h3 className="text-lg font-semibold">Hello, World!</h3>
            <p>This is a preview of your code.</p>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
);

export const SimpleTabs: StoryFn = () => (
  <Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Overview</TabsTrigger>
      <TabsTrigger value="tab2">Details</TabsTrigger>
      <TabsTrigger value="tab3">Settings</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>Get a high-level view of your information.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Recent Activity</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• User logged in 2 hours ago</li>
                <li>• Profile updated yesterday</li>
                <li>• Settings changed 3 days ago</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Active Users</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Revenue</p>
                  <p className="text-2xl font-bold">$12,345</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="tab2">
      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
          <CardDescription>View and manage detailed information.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-3">
              <Label htmlFor="tab2-field1">Field 1</Label>
              <Input id="tab2-field1" placeholder="Enter value..." />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tab2-field2">Field 2</Label>
              <Input id="tab2-field2" placeholder="Enter value..." />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tab2-field3">Field 3</Label>
              <Input id="tab2-field3" placeholder="Enter value..." />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="tab3">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Configure your preferences and options.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Enable Notifications</h4>
                <p className="text-xs text-gray-500">Receive updates and alerts</p>
              </div>
              <input type="checkbox" className="h-4 w-4" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Auto-save</h4>
                <p className="text-xs text-gray-500">Automatically save your work</p>
              </div>
              <input type="checkbox" className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium">Dark Mode</h4>
                <p className="text-xs text-gray-500">Toggle dark theme</p>
              </div>
              <input type="checkbox" className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Settings</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
);

export const VerticalTabs: StoryFn = () => (
  <Tabs defaultValue="overview" orientation="vertical" className="flex">
    <TabsList className="flex-col h-auto w-48">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
      <TabsTrigger value="notifications">Notifications</TabsTrigger>
    </TabsList>
    <div className="ml-4 flex-1">
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Get a high-level view of your data.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Overview content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Detailed analytics and insights.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Analytics content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>Generate and view reports.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Reports content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your notification preferences.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Notifications content goes here...</p>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  </Tabs>
);

export const CustomStyling: StoryFn = () => (
  <Tabs defaultValue="custom1">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="custom1">Custom Tab 1</TabsTrigger>
      <TabsTrigger value="custom2">Custom Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="custom1">
      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Custom Styled Tab 1
        </h3>
        <p className="text-blue-700 dark:text-blue-300">
          This tab has custom styling with a blue theme.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="custom2">
      <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
          Custom Styled Tab 2
        </h3>
        <p className="text-green-700 dark:text-green-300">
          This tab has custom styling with a green theme.
        </p>
      </div>
    </TabsContent>
  </Tabs>
);
