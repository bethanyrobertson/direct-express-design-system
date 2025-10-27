import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
// Import actual SVG icons
import * as Icons from "../../assets/icons/svg";

// Type definitions
interface CategoryData {
  icons: string[];
  name: string;
  description: string;
  emoji?: string;
}

interface IconCategories {
  [key: string]: CategoryData;
}

// Simple Icons page with actual icon imports
const IconsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Dynamically get all icon categories from the exports
  const getAllIconCategories = (): IconCategories => {
    const categories: IconCategories = {
      "Accessibility": { icons: [], name: "Accessibility", description: "Icons for accessibility features and inclusive design" },
      "Actions": { icons: [], name: "Actions", description: "Action buttons, toggles, and interactive elements" },
      "Alerts": { icons: [], name: "Alerts", description: "Alert, warning, and notification icons" },
      "Arrows": { icons: [], name: "Arrows", description: "Navigation arrows and directional indicators" },
      "General": { icons: [], name: "General", description: "General purpose UI icons and common elements" },
      "Mapping": { icons: [], name: "Mapping", description: "Location and mapping icons" },
      "Money": { icons: [], name: "Money", description: "Financial, payment, and money-related icons" },
      "Security": { icons: [], name: "Security", description: "Security, authentication, and safety icons" },
    };

    // Get all exported icon names from the Icons object
    Object.keys(Icons).forEach((iconName) => {
      let category = "General";
      
      if (iconName.toLowerCase().includes("accessible") || 
          iconName.toLowerCase().includes("blind") || 
          iconName.toLowerCase().includes("ear")) {
        category = "Accessibility";
      } else if (iconName.toLowerCase().includes("add") || 
                 iconName.toLowerCase().includes("check") || 
                 iconName.toLowerCase().includes("close") || 
                 iconName.toLowerCase().includes("bookmark") || 
                 iconName.toLowerCase().includes("favorite") || 
                 iconName.toLowerCase().includes("copy") || 
                 iconName.toLowerCase().includes("cancel") || 
                 iconName.toLowerCase().includes("star")) {
        category = "Actions";
      } else if (iconName.toLowerCase().includes("error") || 
                 iconName.toLowerCase().includes("help") || 
                 iconName.toLowerCase().includes("notification") || 
                 iconName.toLowerCase().includes("warning")) {
        category = "Alerts";
      } else if (iconName.toLowerCase().includes("arrow") || 
                 iconName.toLowerCase().includes("download") || 
                 iconName.toLowerCase().includes("upload") || 
                 iconName.toLowerCase().includes("forward") || 
                 iconName.toLowerCase().includes("back")) {
        category = "Arrows";
      } else if (iconName.toLowerCase().includes("map") || 
                 iconName.toLowerCase().includes("location") || 
                 iconName.toLowerCase().includes("distance")) {
        category = "Mapping";
      } else if (iconName.toLowerCase().includes("card") || 
                 iconName.toLowerCase().includes("bank") || 
                 iconName.toLowerCase().includes("money") || 
                 iconName.toLowerCase().includes("cash") || 
                 iconName.toLowerCase().includes("wallet") || 
                 iconName.toLowerCase().includes("credit") || 
                 iconName.toLowerCase().includes("receipt") || 
                 iconName.toLowerCase().includes("payment") || 
                 iconName.toLowerCase().includes("attach") || 
                 iconName.toLowerCase().includes("account") || 
                 iconName.toLowerCase().includes("piggy")) {
        category = "Money";
      } else if (iconName.toLowerCase().includes("lock") || 
                 iconName.toLowerCase().includes("key") || 
                 iconName.toLowerCase().includes("shield") || 
                 iconName.toLowerCase().includes("password") || 
                 iconName.toLowerCase().includes("verified") || 
                 iconName.toLowerCase().includes("dialpad")) {
        category = "Security";
      }
      
      categories[category].icons.push(iconName);
    });

    return categories;
  };

  const iconCategories = React.useMemo(() => getAllIconCategories(), []);

  const filteredCategories = React.useMemo(() => {
    if (!searchTerm) return iconCategories;
    
    const filtered: IconCategories = {};
    Object.entries(iconCategories).forEach(([key, category]) => {
      const matchingIcons = category.icons.filter((icon: string) => 
        icon.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matchingIcons.length > 0) {
        filtered[key] = { ...category, icons: matchingIcons };
      }
    });
    return filtered;
  }, [searchTerm]);

  const totalIcons = Object.values(iconCategories).reduce((sum, category) => sum + category.icons.length, 0);
  const filteredTotal = Object.values(filteredCategories).reduce((sum, category) => sum + category.icons.length, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Icon Library
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {totalIcons} icons organized by category
        </p>
        
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search icons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#02514E] focus:border-[#02514E] dark:bg-gray-800 dark:text-white"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {searchTerm && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredTotal} of {totalIcons} icons
          </p>
        )}
      </div>

      {Object.keys(filteredCategories).length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No icons found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search terms.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(filteredCategories).map(([categoryKey, categoryData]) => (
            <div key={categoryKey} className="mb-8">
              <div className="flex items-center justify-between w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {categoryData.name} ({categoryData.icons.length})
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{categoryData.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
                {categoryData.icons.map((iconName: string) => {
                  const IconComponent = (Icons as any)[iconName];
                  return (
                    <div key={iconName} className="group relative p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {IconComponent ? (
                            <img src={IconComponent} alt={iconName} className="w-8 h-8" />
                          ) : (
                            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                              <span className="text-lg"></span>
                            </div>
                          )}
                        </div>
                        <span className="text-xs text-center text-gray-600 dark:text-gray-400 font-mono">
                          {iconName.replace('Svg', '')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof IconsPage> = {
  title: "Foundations/Icons/All Icons",
  component: IconsPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light"
    }
  }
};

export default meta;

export const AllIcons: StoryFn<typeof IconsPage> = () => <IconsPage />;