import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A table component for displaying structured data.`,
      },
    },
  },
};

export default meta;

export const Default: StoryFn<typeof Table> = () => (
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">INV002</TableCell>
        <TableCell>Pending</TableCell>
        <TableCell>PayPal</TableCell>
        <TableCell className="text-right">$150.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">INV003</TableCell>
        <TableCell>Unpaid</TableCell>
        <TableCell>Bank Transfer</TableCell>
        <TableCell className="text-right">$350.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">INV004</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell className="text-right">$450.00</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$1,200.00</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

Default.parameters = {
  docs: {
    description: {
      story: `A basic table with headers, body, and footer.`,
    },
  },
};

export const Simple: StoryFn<typeof Table> = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Admin</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane Smith</TableCell>
        <TableCell>jane@example.com</TableCell>
        <TableCell>User</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Bob Johnson</TableCell>
        <TableCell>bob@example.com</TableCell>
        <TableCell>User</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

Simple.parameters = {
  docs: {
    description: {
      story: `A simple table without caption or footer.`,
    },
  },
};

export const WithLongContent: StoryFn<typeof Table> = () => (
  <div className="w-full max-w-2xl">
    <Table>
      <TableCaption>Product inventory with detailed information.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Product</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">MacBook Pro</TableCell>
          <TableCell>14-inch MacBook Pro with M3 chip, 16GB RAM, 512GB SSD</TableCell>
          <TableCell className="text-right">$1,999.00</TableCell>
          <TableCell className="text-right">12</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">iPhone 15</TableCell>
          <TableCell>6.1-inch Super Retina XDR display, A17 Pro chip, 256GB storage</TableCell>
          <TableCell className="text-right">$899.00</TableCell>
          <TableCell className="text-right">45</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">iPad Air</TableCell>
          <TableCell>10.9-inch Liquid Retina display, M2 chip, 128GB storage, Wi‑Fi</TableCell>
          <TableCell className="text-right">$599.00</TableCell>
          <TableCell className="text-right">28</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

WithLongContent.parameters = {
  docs: {
    description: {
      story: `A table with longer content that requires more horizontal space.`,
    },
  },
};

export const EmptyTable: StoryFn<typeof Table> = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Product</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Stock</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell colSpan={3} className="text-center text-gray-500">
          No products found
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

EmptyTable.parameters = {
  docs: {
    description: {
      story: `A table showing an empty state.`,
    },
  },
};

export const UsageExamples: StoryFn = () => (
  <div className="space-y-8 p-6">
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Administrator</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>Editor</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Bob Johnson</TableCell>
            <TableCell>bob@example.com</TableCell>
            <TableCell>Viewer</TableCell>
            <TableCell>Inactive</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Financial Report</h2>
      <Table>
        <TableCaption>Monthly revenue and expenses</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Month</TableHead>
            <TableHead className="text-right">Revenue</TableHead>
            <TableHead className="text-right">Expenses</TableHead>
            <TableHead className="text-right">Profit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">January</TableCell>
            <TableCell className="text-right">$10,000</TableCell>
            <TableCell className="text-right">$7,000</TableCell>
            <TableCell className="text-right">$3,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">February</TableCell>
            <TableCell className="text-right">$12,000</TableCell>
            <TableCell className="text-right">$8,000</TableCell>
            <TableCell className="text-right">$4,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">March</TableCell>
            <TableCell className="text-right">$15,000</TableCell>
            <TableCell className="text-right">$9,000</TableCell>
            <TableCell className="text-right">$6,000</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="font-medium">
              Total
            </TableCell>
            <TableCell className="text-right font-medium">$37,000</TableCell>
            <TableCell className="text-right font-medium">$24,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className="font-medium">
              Net Profit
            </TableCell>
            <TableCell colSpan={2} className="text-right font-medium">
              $13,000
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </div>
);

UsageExamples.parameters = {
  docs: {
    description: {
      story: `Different real-world examples of using tables.`,
    },
  },
};

