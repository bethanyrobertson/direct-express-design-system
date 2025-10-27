import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";

const GridsPage: React.FC = () => {
  const gridSystems = [
    { name: "12 Column Grid", description: "Standard 12-column layout system", columns: 12 },
    { name: "8 Column Grid", description: "Alternative 8-column layout", columns: 8 },
    { name: "16 Column Grid", description: "Flexible 16-column system", columns: 16 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          📐 Grid Systems
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Layout grid systems for consistent design structure
        </p>
      </div>

      <div className="space-y-8">
        {gridSystems.map((grid) => (
          <div key={grid.name} className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {grid.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {grid.description}
            </p>
            <div className={`grid grid-cols-${grid.columns} gap-4`}>
              {Array.from({ length: grid.columns }, (_, i) => (
                <div key={i} className="h-16 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
                  <span className="text-xs text-blue-700 dark:text-blue-300 font-mono">
                    {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta: Meta<typeof GridsPage> = {
  title: "Foundations/Grids/Grid Systems",
  component: GridsPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light"
    }
  }
};

export default meta;

export const GridSystems: StoryFn<typeof GridsPage> = () => <GridsPage />;
