import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { AreaChart } from "../ui/area-chart";
import { BarChart } from "../ui/bar-chart";
import { ChartConfig } from "../ui/chart";
import { Dashboard, DashboardWidget } from "../ui/dashboard";
import { LineChart } from "../ui/line-chart";
import { PieChart } from "../ui/pie-chart";

const spendingDepositsData = [
  { month: "Aug", spending: 875.0, deposits: 775.0 },
  { month: "Sept", spending: 675.0, deposits: 775.0 },
  { month: "Oct", spending: 800.0, deposits: 775.0 },
  { month: "Nov", spending: 950.0, deposits: 775.0 },
  { month: "Dec", spending: 900.0, deposits: 775.0 },
  { month: "Jan", spending: 225.0, deposits: 775.0 },
];

const monthlyRevenueData = [
  { month: "Jan", revenue: 4000.0 },
  { month: "Feb", revenue: 3000.0 },
  { month: "Mar", revenue: 5000.0 },
  { month: "Apr", revenue: 4500.0 },
  { month: "May", revenue: 6000.0 },
  { month: "Jun", revenue: 5500.0 },
  { month: "Jul", revenue: 7000.0 },
  { month: "Aug", revenue: 6500.0 },
  { month: "Sep", revenue: 8000.0 },
  { month: "Oct", revenue: 7500.0 },
  { month: "Nov", revenue: 9000.0 },
  { month: "Dec", revenue: 8500.0 },
];

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

const spendingData = [
  { category: "Bills & Utilities", amount: 1776.13, fill: "#02514e" },
  { category: "Shopping", amount: 210.02, fill: "#6BA6D8" },
  { category: "Gas", amount: 43.0, fill: "#EA580C" },
  { category: "Restaurants & Dining", amount: 57.92, fill: "#cce6c8" },
  { category: "Entertainment & Travel", amount: 29.88, fill: "#EDB854" },
  { category: "Other", amount: 45.0, fill: "#C48DE5" },
];

const barChartConfig = {
  spending: {
    label: "Spending",
    color: "#335533",
  },
  deposits: {
    label: "Deposits",
    color: "#ADD8E6",
  },
} satisfies ChartConfig;

const areaChartConfig = {
  expenses: {
    label: "Expenses",
    color: "#02514e",
  },
} satisfies ChartConfig;

const lineChartConfig = {
  revenue: {
    label: "Revenue",
    color: "#02514e",
  },
} satisfies ChartConfig;

const meta: Meta<typeof Dashboard> = {
  title: "Data Visualization/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Dashboard component for displaying multiple data visualizations in a flexible grid layout.`,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Dashboard title",
    },
    layout: {
      control: "select",
      options: ["grid", "flex", "masonry"],
      description: "Layout type (grid, flex, masonry)",
    },
    columns: {
      control: "number",
      description: "Number of columns",
    },
    gap: {
      control: "text",
      description: "Gap between widgets",
    },
    padding: {
      control: "text",
      description: "Dashboard padding",
    },
  },
};

export default meta;

export const WithCharts: StoryFn<typeof Dashboard> = () => (
  <Dashboard title="Financial Dashboard with Charts" layout="grid" columns={2}>
    <DashboardWidget title="Spending vs Deposits" subtitle="Monthly comparison" span={1}>
      <BarChart
        data={spendingDepositsData}
        dataKey="spending"
        secondaryBarKey="deposits"
        categoryKey="month"
        config={barChartConfig}
        height={300}
        showGrid={true}
        showLegend={false}
        showTooltip={true}
        barColor="#335533"
        secondaryBarColor="#ADD8E6"
      />
    </DashboardWidget>

    <DashboardWidget title="Monthly Expenses" subtitle="Expense tracking" span={1}>
      <AreaChart
        data={monthlyExpensesData}
        dataKey="expenses"
        categoryKey="month"
        config={areaChartConfig}
        height={300}
        showGrid={true}
        showTooltip={true}
        areaColor="#02514e"
        fillOpacity={0.4}
        strokeWidth={2}
        curveType="monotone"
      />
    </DashboardWidget>

    <DashboardWidget title="Spending by Category" subtitle="Budget breakdown" span={1}>
      <PieChart
        data={spendingData}
        dataKey="amount"
        nameKey="category"
        config={{}}
        height={300}
        showLegend={true}
        showTooltip={true}
        innerRadius={60}
        outerRadius="80%"
        showCenterLabel={true}
        centerLabelText="$2,161.95"
        centerLabelSubtext="Total Spent"
        strokeWidth={2}
      />
    </DashboardWidget>

    <DashboardWidget title="Monthly Spending" subtitle="Revenue trends over time" span={1}>
      <LineChart
        data={monthlyRevenueData}
        dataKey="revenue"
        categoryKey="month"
        config={lineChartConfig}
        height={300}
        showGrid={true}
        showLegend={false}
        showTooltip={true}
        lineColor="#02514e"
        strokeWidth={2}
      />
    </DashboardWidget>
  </Dashboard>
);

WithCharts.parameters = {
  docs: {
    description: {
      story: `A comprehensive dashboard showcasing all chart types working together.`,
    },
  },
};
