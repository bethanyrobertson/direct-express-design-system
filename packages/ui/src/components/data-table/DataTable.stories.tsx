import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { DataTableDemo, columns, Payment } from "../ui/data-table";

const meta: Meta<typeof DataTableDemo> = {
  title: "Components/Data Table",
  component: DataTableDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A data table component with sorting, filtering, column visibility, and row selection. Built with TanStack Table.`,
      },
    },
  },
};

export default meta;

export const Default: StoryFn<typeof DataTableDemo> = () => (
  <div className="p-8">
    <DataTableDemo />
  </div>
);

Default.parameters = {
  docs: {
    description: {
      story: `A full-featured data table with sorting, filtering, column visibility controls, and pagination.`,
    },
  },
};

export const UsageExamples: StoryFn = () => (
  <div className="space-y-8 p-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
      <p className="text-gray-600 mb-6">
        The Data Table component provides a powerful way to display structured data with advanced features.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Features</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Sorting:</strong> Click column headers to sort ascending/descending</li>
        <li><strong>Filtering:</strong> Use the search input to filter by email</li>
        <li><strong>Column Visibility:</strong> Toggle columns on/off via the "Columns" button</li>
        <li><strong>Row Selection:</strong> Select individual rows or all rows with the checkbox</li>
        <li><strong>Pagination:</strong> Navigate between pages with Previous/Next buttons</li>
        <li><strong>Actions Menu:</strong> Right-click or click the three dots for row actions</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Best Practices</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Use data tables for complex data that requires sorting or filtering</li>
        <li>Provide clear column headers that describe the data</li>
        <li>Keep the number of columns manageable (5-8 columns recommended)</li>
        <li>Use pagination for large datasets</li>
        <li>Implement proper loading states for async data</li>
        <li>Make sure the table is responsive on mobile devices</li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Integration</h3>
      <div className="bg-gray-50 rounded-lg p-4">
        <pre className="text-sm text-gray-700">
{`import { DataTableDemo, columns, Payment } from "ui/components/ui/data-table";
import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  useReactTable,
} from "@tanstack/react-table";

// Define your data type
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

// Define your columns
const columns: ColumnDef<Payment>[] = [
  // ... column definitions
];

function MyTable() {
  return <DataTableDemo />;
}`}
        </pre>
      </div>
    </div>
  </div>
);

