import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { AreaChart } from "../ui/area-chart";

// Monthly expenses data
const monthlyExpensesData = [
  { month: "Jan", expenses: 4000.0 },
  { month: "Feb", expenses: 3000.0 },
  { month: "Mar", expenses: 5000.0 },
  { month: "Apr", expenses: 4500.0 },
  { month: "May", expenses: 6000.0 },
  { month: "Jun", expenses: 5500.0 },
  { month: "Jul", expenses: 7000.0 },
  { month: "Aug", expenses: 6500.0 },
  { month: "Sep", expenses: 8000.0 },
  { month: "Oct", expenses: 7500.0 },
  { month: "Nov", expenses: 9000.0 },
  { month: "Dec", expenses: 8500.0 },
];

const chartConfig = {
  expenses: {
    label: "Expenses",
    color: "#02514e",
  },
  revenue: {
    label: "Revenue",
    color: "#cce6c8",
  },
};

const meta: Meta<typeof AreaChart> = {
  title: "Data Visualization/Area Chart",
  component: AreaChart,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The Area Chart component provides a flexible way to visualize trends and cumulative data. Built with Recharts and styled to match the design system.",
      },
    },
  },
};

export default meta;

// Default story - Monthly Expenses
export const Default: StoryFn<typeof AreaChart> = (args) => (
  <AreaChart {...args} />
);

Default.args = {
  data: monthlyExpensesData,
  dataKey: "expenses",
  categoryKey: "month",
  config: chartConfig,
  title: "Monthly Expenses",
  height: 400,
  showGrid: true,
  showTooltip: true,
  areaColor: "#02514e",
  fillColor: "#cce6c8",
  fillOpacity: 0.4,
  strokeWidth: 2,
  curveType: "monotone",
};

Default.parameters = {
  docs: {
    description: {
      story: "An area chart showing monthly expenses trends with filled areas.",
    },
  },
};

// Multiple Areas
export const MultipleAreas: StoryFn<typeof AreaChart> = () => {
  const revenueData = [
    { month: "Jan", expenses: 4000, revenue: 12000 },
    { month: "Feb", expenses: 3000, revenue: 15000 },
    { month: "Mar", expenses: 5000, revenue: 18000 },
    { month: "Apr", expenses: 4500, revenue: 16000 },
    { month: "May", expenses: 6000, revenue: 20000 },
    { month: "Jun", expenses: 5500, revenue: 22000 },
  ];

  return (
    <AreaChart
      data={revenueData}
      dataKey="expenses"
      categoryKey="month"
      config={chartConfig}
      title="Expenses vs Revenue"
      height={400}
      showGrid={true}
      showTooltip={true}
      areaColor="#02514e"
      fillColor="#cce6c8"
      fillOpacity={0.4}
      secondaryAreaKey="revenue"
      secondaryAreaColor="#02514e"
      strokeWidth={2}
      curveType="monotone"
    />
  );
};

MultipleAreas.parameters = {
  docs: {
    description: {
      story: "Displaying multiple areas on the same chart for comparison.",
    },
  },
};

// Stacked Areas
export const StackedAreas: StoryFn<typeof AreaChart> = () => {
  const stackedData = [
    { month: "Jan", expenses: 4000, overhead: 2000 },
    { month: "Feb", expenses: 3000, overhead: 1500 },
    { month: "Mar", expenses: 5000, overhead: 2500 },
    { month: "Apr", expenses: 4500, overhead: 2200 },
    { month: "May", expenses: 6000, overhead: 3000 },
    { month: "Jun", expenses: 5500, overhead: 2800 },
  ];

  return (
    <AreaChart
      data={stackedData}
      dataKey="expenses"
      categoryKey="month"
      config={{ ...chartConfig, overhead: { label: "Overhead", color: "#02514e" } }}
      title="Total Costs (Stacked)"
      height={400}
      showGrid={true}
      showTooltip={true}
      areaColor="#02514e"
      fillColor="#cce6c8"
      fillOpacity={0.4}
      secondaryAreaKey="overhead"
      secondaryAreaColor="#6b8e86"
      stackAreas={true}
      strokeWidth={2}
      curveType="monotone"
    />
  );
};

StackedAreas.parameters = {
  docs: {
    description: {
      story: "Stacked areas showing cumulative totals.",
    },
  },
};

// Different Curve Types
export const CurveTypes: StoryFn = () => {
  const lineData = monthlyExpensesData.slice(0, 6);

  return (
    <div className="space-y-8">
      <AreaChart
        data={lineData}
        dataKey="expenses"
        categoryKey="month"
        config={chartConfig}
        title="Monotone Curve (Default)"
        height={300}
        showGrid={true}
        areaColor="#02514e"
        fillColor="#cce6c8"
        curveType="monotone"
      />
      <AreaChart
        data={lineData}
        dataKey="expenses"
        categoryKey="month"
        config={chartConfig}
        title="Linear Curve"
        height={300}
        showGrid={true}
        areaColor="#02514e"
        fillColor="#cce6c8"
        curveType="linear"
      />
      <AreaChart
        data={lineData}
        dataKey="expenses"
        categoryKey="month"
        config={chartConfig}
        title="Natural Curve"
        height={300}
        showGrid={true}
        areaColor="#02514e"
        fillColor="#cce6c8"
        curveType="natural"
      />
      <AreaChart
        data={lineData}
        dataKey="expenses"
        categoryKey="month"
        config={chartConfig}
        title="Step Curve"
        height={300}
        showGrid={true}
        areaColor="#02514e"
        fillColor="#cce6c8"
        curveType="step"
      />
    </div>
  );
};

// Documentation
export const Documentation: StoryFn = () => (
  <div style={{ padding: "24px", maxWidth: "800px" }}>
    <h2 style={{ color: "#01332E", marginBottom: "24px", fontFamily: "Source Serif Pro", fontSize: "28px", fontWeight: 600 }}>
      Features
    </h2>
    <ul style={{ marginBottom: "32px", fontFamily: "Noto Sans", fontSize: "14px", lineHeight: "1.6" }}>
      <li>
        <strong>Responsive</strong>: Automatically adjusts to container width
      </li>
      <li>
        <strong>Customizable Curves</strong>: Supports various curve types
        (monotone, natural, linear, step)
      </li>
      <li>
        <strong>Fill Opacity</strong>: Adjustable transparency for the area fill
      </li>
      <li>
        <strong>Multiple Areas</strong>: Can display multiple stacked or
        overlapping areas
      </li>
      <li>
        <strong>Interactive Tooltips</strong>: Shows detailed data on hover
      </li>
      <li>
        <strong>Active Dots</strong>: Highlights data points on hover
      </li>
      <li>
        <strong>Clean Grid</strong>: Displays horizontal gridlines for
        readability
      </li>
      <li>
        <strong>Design System Colors</strong>: Integrates seamlessly with your
        design tokens
      </li>
    </ul>

    <h2 style={{ color: "#01332E", marginBottom: "24px", fontFamily: "Source Serif Pro", fontSize: "28px", fontWeight: 600 }}>
      Best Practices
    </h2>
    <ul style={{ fontFamily: "Noto Sans", fontSize: "14px", lineHeight: "1.6" }}>
      <li>Use for visualizing trends over time or continuous data</li>
      <li>Ensure sufficient contrast between multiple areas if stacking</li>
      <li>Avoid using too many areas to prevent clutter</li>
      <li>Use clear and concise titles and labels</li>
      <li>Consider the baseline: start the Y-axis at zero for accurate comparisons</li>
      <li>Use tooltips to provide precise data values on demand</li>
    </ul>
  </div>
);

