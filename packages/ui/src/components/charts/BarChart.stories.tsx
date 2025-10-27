import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { BarChart } from "../ui/bar-chart";
import { ChartConfig } from "../ui/chart";

// Spending vs Deposits data (matching the original)
const spendingDepositsData = [
  { month: "Aug", spending: 875.0, deposits: 775.0 },
  { month: "Sept", spending: 675.0, deposits: 775.0 },
  { month: "Oct", spending: 800.0, deposits: 775.0 },
  { month: "Nov", spending: 950.0, deposits: 775.0 },
  { month: "Dec", spending: 900.0, deposits: 775.0 },
  { month: "Jan", spending: 225.0, deposits: 775.0 },
];

const chartConfig = {
  spending: {
    label: "Spending",
    color: "#335533",
  },
  deposits: {
    label: "Deposits",
    color: "#ADD8E6",
  },
} satisfies ChartConfig;

const meta: Meta<typeof BarChart> = {
  title: "Data Visualization/Bar Chart",
  component: BarChart,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `The Bar Chart component provides a flexible way to visualize data using bars. Built with Recharts and styled to match the design system.`,
      },
    },
  },
  argTypes: {
    dataKey: {
      control: "select",
      options: ["spending", "deposits"],
      description: "Key for the primary data values to display",
    },
    categoryKey: {
      control: "text",
      description: "Key for the category labels (e.g., 'month')",
    },
    title: {
      control: "text",
      description: "Chart title",
    },
    height: {
      control: "number",
      description: "Chart height in pixels",
    },
    showGrid: {
      control: "boolean",
      description: "Show grid lines",
    },
    showLegend: {
      control: "boolean",
      description: "Show legend",
    },
    showTooltip: {
      control: "boolean",
      description: "Show tooltip on hover",
    },
    barColor: {
      control: "color",
      description: "Primary bar color",
    },
    secondaryBarKey: {
      control: "select",
      options: [undefined, "spending", "deposits"],
      description: "Secondary data key for grouped bars",
    },
    secondaryBarColor: {
      control: "color",
      description: "Secondary bar color",
    },
    barRadius: {
      control: "object",
      description: "Border radius for bars",
    },
  },
};

export default meta;

const Template: StoryFn<typeof BarChart> = (args) => (
  <div className="w-full max-w-4xl">
    <BarChart {...args} config={chartConfig} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: spendingDepositsData,
  dataKey: "spending",
  secondaryBarKey: "deposits",
  categoryKey: "month",
  title: "Spending vs. Deposits",
  height: 400,
  showGrid: true,
  showLegend: false,
  showTooltip: true,
  barColor: "#335533",
  secondaryBarColor: "#ADD8E6",
  barRadius: [4, 4, 0, 0],
};
Default.parameters = {
  docs: {
    description: {
      story: `A grouped bar chart showing spending vs deposits over a 6-month period.`,
    },
  },
};

// Single bar series
export const SingleBar = Template.bind({});
SingleBar.args = {
  data: spendingDepositsData,
  dataKey: "spending",
  categoryKey: "month",
  title: "Monthly Spending",
  height: 400,
  showGrid: true,
  showLegend: false,
  showTooltip: true,
  barColor: "#02514e",
  barRadius: [4, 4, 0, 0],
};
SingleBar.parameters = {
  docs: {
    description: {
      story: `A single bar series displaying monthly spending trends.`,
    },
  },
};

// Different colors
export const CustomColors = Template.bind({});
CustomColors.args = {
  ...Default.args,
  barColor: "#02514e",
  secondaryBarColor: "#cce6c8",
  title: "Custom Color Scheme",
};
CustomColors.parameters = {
  docs: {
    description: {
      story: `Demonstrates custom color schemes for bars.`,
    },
  },
};

// Documentation
export const Documentation = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Bar Chart Documentation</h1>
    <p className="text-gray-600 mb-8">
      The Bar Chart component provides a flexible way to visualize data using bars. Built with
      Recharts and styled to match the design system.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
    <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
      <li>
        <strong>Responsive</strong>: Automatically adjusts to container width
      </li>
      <li>
        <strong>Customizable</strong>: Control colors, grid, legend, and more
      </li>
      <li>
        <strong>Accessible</strong>: Proper labels and tooltips
      </li>
      <li>
        <strong>Multiple Bars</strong>: Support for grouped bar charts
      </li>
      <li>
        <strong>Design System Colors</strong>: Uses design tokens by default
      </li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
    <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
      <li>Use clear, descriptive labels for categories</li>
      <li>Limit the number of bars to maintain readability (typically 5-12)</li>
      <li>Choose colors with good contrast</li>
      <li>Provide tooltips for detailed information</li>
      <li>The hover highlight uses Primary 100 (#cce6c8) for consistency</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">Usage</h2>
    <div className="bg-gray-50 rounded-lg p-6">
      <pre className="text-sm text-gray-700">
        {`import { BarChart } from "ui/components/ui/bar-chart";
import { ChartConfig } from "ui/components/ui/chart";

const data = [
  { month: "Aug", spending: 875 },
  { month: "Sept", spending: 675 },
  // ...
];

const chartConfig = {
  spending: {
    label: "Spending",
    color: "#02514e",
  },
} satisfies ChartConfig;

function MyComponent() {
  return (
    <BarChart
      data={data}
      dataKey="spending"
      categoryKey="month"
      title="Monthly Spending"
      config={chartConfig}
    />
  );
}`}
      </pre>
    </div>
  </div>
);

