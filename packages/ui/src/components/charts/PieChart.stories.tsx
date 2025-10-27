import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { PieChart } from "../ui/pie-chart";
import { ChartConfig } from "../ui/chart";

// Spending categories data
const spendingData = [
  { category: "Bills & Utilities", amount: 1776.13, fill: "#02514e" },
  { category: "Shopping", amount: 210.02, fill: "#6BA6D8" },
  { category: "Gas", amount: 43.0, fill: "#EA580C" },
  { category: "Restaurants & Dining", amount: 57.92, fill: "#cce6c8" },
  { category: "Entertainment & Travel", amount: 29.88, fill: "#EDB854" },
  { category: "Other", amount: 45.0, fill: "#C48DE5" },
];

const chartConfig = {
  "Bills & Utilities": {
    label: "Bills & Utilities",
    color: "#02514e",
  },
  Shopping: {
    label: "Shopping",
    color: "#6BA6D8",
  },
  Gas: {
    label: "Gas",
    color: "#EA580C",
  },
  "Restaurants & Dining": {
    label: "Restaurants & Dining",
    color: "#cce6c8",
  },
  "Entertainment & Travel": {
    label: "Entertainment & Travel",
    color: "#EDB854",
  },
  Other: {
    label: "Other",
    color: "#C48DE5",
  },
} satisfies ChartConfig;

const meta: Meta<typeof PieChart> = {
  title: "Data Visualization/Pie Chart",
  component: PieChart,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `The Pie Chart component provides a flexible way to visualize proportional data and part-to-whole relationships. Built with Recharts and styled to match the design system. Supports both standard pie charts and donut charts with center labels.`,
      },
    },
  },
  argTypes: {
    dataKey: {
      control: "text",
      description: "Key for the data values",
    },
    nameKey: {
      control: "text",
      description: "Key for the segment names",
    },
    title: {
      control: "text",
      description: "Chart title",
    },
    height: {
      control: "number",
      description: "Chart height in pixels",
    },
    showLegend: {
      control: "boolean",
      description: "Show legend",
    },
    showTooltip: {
      control: "boolean",
      description: "Show tooltip on hover",
    },
    innerRadius: {
      control: "number",
      description: "Inner radius (0 for pie, >0 for donut)",
    },
    outerRadius: {
      control: "text",
      description: "Outer radius",
    },
    showCenterLabel: {
      control: "boolean",
      description: "Show center label (for donut charts)",
    },
    centerLabelText: {
      control: "text",
      description: "Custom text for center label",
    },
    centerLabelSubtext: {
      control: "text",
      description: "Subtext for center label",
    },
    strokeWidth: {
      control: "number",
      description: "Stroke width between segments",
    },
  },
};

export default meta;

const Template: StoryFn<typeof PieChart> = (args) => (
  <div className="w-full max-w-4xl">
    <PieChart {...args} config={chartConfig} />
  </div>
);

// Donut Chart with Center Label
export const Default = Template.bind({});
Default.args = {
  data: spendingData,
  dataKey: "amount",
  nameKey: "category",
  title: "Spending by Category",
  height: 400,
  showLegend: true,
  showTooltip: true,
  innerRadius: 80,
  outerRadius: "80%",
  showCenterLabel: true,
  centerLabelText: "$2,161.95",
  centerLabelSubtext: "Total Spent",
  strokeWidth: 2,
};
Default.parameters = {
  docs: {
    description: {
      story: `A donut chart showing spending breakdown by category with monetary values.`,
    },
  },
};

// Regular Pie Chart (no inner radius)
export const PieChartOnly = Template.bind({});
PieChartOnly.args = {
  ...Default.args,
  innerRadius: 0,
  showCenterLabel: false,
  title: "Spending Breakdown",
};
PieChartOnly.parameters = {
  docs: {
    description: {
      story: `A standard pie chart without an inner radius showing spending categories.`,
    },
  },
};

// With custom colors
export const CustomColors = Template.bind({});
CustomColors.args = {
  ...Default.args,
  colors: ["#02514e", "#cce6c8", "#8cd5b4", "#68c0a0"],
};
CustomColors.parameters = {
  docs: {
    description: {
      story: `A donut chart with custom color palette.`,
    },
  },
};

// Documentation
export const Documentation = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Pie Chart Documentation</h1>
    <p className="text-gray-600 mb-8">
      The Pie Chart component provides a flexible way to visualize proportional data and
      part-to-whole relationships. Built with Recharts and styled to match the design system.
      Supports both standard pie charts and donut charts with center labels.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
    <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
      <li>
        <strong>Responsive</strong>: Automatically adjusts to container width
      </li>
      <li>
        <strong>Customizable Colors</strong>: Uses design token colors by default
      </li>
      <li>
        <strong>Accessible</strong>: Proper labels, tooltips, and legends
      </li>
      <li>
        <strong>Center Labels</strong>: Display totals or custom text in donut center
      </li>
      <li>
        <strong>Design System Colors</strong>: Automatically uses your color palette
      </li>
      <li>
        <strong>Hover Effects</strong>: Interactive segments with opacity change
      </li>
      <li>
        <strong>Custom Colors</strong>: Each data point can specify its own color via <code>fill</code>
      </li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
    <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
      <li>Use for showing part-to-whole relationships (proportions, percentages)</li>
      <li>Limit segments to 5-8 for clarity</li>
      <li>Order segments by size (largest to smallest) when possible</li>
      <li>Use donut charts when you want to display a central metric</li>
      <li>Consider using a legend for charts with many segments</li>
      <li>Ensure colors have sufficient contrast</li>
      <li>Use tooltips to show exact values</li>
      <li>The default color palette uses design system tokens for consistency</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">Color Palette</h2>
    <p className="mb-4">The default colors follow the design system:</p>
    <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
      <li>Primary 500 (#02514e) - Dark teal</li>
      <li>Primary 100 (#cce6c8) - Light green</li>
      <li>Tertiary 100 (#dff4ed) - Light teal</li>
      <li>Primary 200 (#8cd5b4) - Medium green</li>
      <li>Primary 300 (#68c0a0) - Teal green</li>
      <li>Primary 400 (#44ab8c) - Deep green</li>
      <li>Tertiary 500 (#629a95) - Sage</li>
      <li>Tertiary 300 (#a3cac4) - Light sage</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">Usage</h2>
    <div className="bg-gray-50 rounded-lg p-6">
      <pre className="text-sm text-gray-700">
        {`import { PieChart } from "ui/components/ui/pie-chart";
import { ChartConfig } from "ui/components/ui/chart";

const data = [
  { category: "Bills", amount: 1776, fill: "#02514e" },
  { category: "Shopping", amount: 210, fill: "#6BA6D8" },
  // ...
];

const chartConfig = {
  Bills: { label: "Bills", color: "#02514e" },
  Shopping: { label: "Shopping", color: "#6BA6D8" },
} satisfies ChartConfig;

function MyComponent() {
  return (
    <PieChart
      data={data}
      dataKey="amount"
      nameKey="category"
      title="Spending by Category"
      config={chartConfig}
      innerRadius={80}
      outerRadius="80%"
      showCenterLabel={true}
      centerLabelText="$2,161"
      centerLabelSubtext="Total Spent"
    />
  );
}`}
      </pre>
    </div>
  </div>
);

