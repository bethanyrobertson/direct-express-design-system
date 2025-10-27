import * as React from "react";
import { cn } from "../../lib/utils";

export interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  layout?: "grid" | "flex" | "masonry";
  columns?: number;
  gap?: string;
  padding?: string;
  children: React.ReactNode;
}

export const Dashboard = React.forwardRef<HTMLDivElement, DashboardProps>(
  (
    {
      title = "Dashboard",
      layout = "grid",
      columns = 2,
      gap = "24px",
      padding = "24px",
      children,
      className,
      ...props
    },
    ref
  ) => {
    const dashboardClasses = ["ds-dashboard", `ds-dashboard--${layout}`, className].filter(Boolean).join(" ");

    const dashboardStyle = {
      "--dashboard-columns": columns,
      "--dashboard-gap": gap,
      "--dashboard-padding": padding,
    } as React.CSSProperties;

    return (
      <div ref={ref} className={dashboardClasses} style={dashboardStyle} {...props}>
        {title && (
          <div className="ds-dashboard__header">
            <h1 className="ds-dashboard__title">{title}</h1>
          </div>
        )}

        <div className="ds-dashboard__content">{children}</div>
      </div>
    );
  }
);

Dashboard.displayName = "Dashboard";

export interface DashboardWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  span?: number;
  height?: string | number;
}

export const DashboardWidget = React.forwardRef<HTMLDivElement, DashboardWidgetProps>(
  ({ title, subtitle, children, className, span = 1, height = "auto", ...props }, ref) => {
    const widgetClasses = ["ds-dashboard-widget", className].filter(Boolean).join(" ");

    const widgetStyle = {
      gridColumn: `span ${span}`,
      height: height,
    } as React.CSSProperties;

    return (
      <div ref={ref} className={widgetClasses} style={widgetStyle} {...props}>
        {(title || subtitle) && (
          <div className="ds-dashboard-widget__header">
            {title && <h3 className="ds-dashboard-widget__title">{title}</h3>}
            {subtitle && <p className="ds-dashboard-widget__subtitle">{subtitle}</p>}
          </div>
        )}

        <div className="ds-dashboard-widget__content">{children}</div>
      </div>
    );
  }
);

DashboardWidget.displayName = "DashboardWidget";

