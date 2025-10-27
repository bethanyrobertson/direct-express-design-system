import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

interface TypographyToken {
  name: string;
  font: string;
  weight: string;
  size: number;
  lineHeight: number;
  tracking: number;
  category: string;
}

const TypographyPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const typographyTokens: TypographyToken[] = [
    // Display
    { name: "Display Large", font: "Source Serif Pro", weight: "SemiBold", size: 57, lineHeight: 64, tracking: -0.25, category: "Display" },
    { name: "Display Medium", font: "Source Serif Pro", weight: "SemiBold", size: 45, lineHeight: 52, tracking: 0, category: "Display" },
    { name: "Display Small", font: "Source Serif Pro", weight: "SemiBold", size: 36, lineHeight: 44, tracking: 0, category: "Display" },
    
    // Headline
    { name: "Headline Large", font: "Source Serif Pro", weight: "SemiBold", size: 32, lineHeight: 40, tracking: 0, category: "Headline" },
    { name: "Headline Medium", font: "Source Serif Pro", weight: "SemiBold", size: 28, lineHeight: 36, tracking: 0, category: "Headline" },
    { name: "Headline Small", font: "Source Serif Pro", weight: "SemiBold", size: 24, lineHeight: 32, tracking: 0, category: "Headline" },
    
    // Title
    { name: "Title Large", font: "Noto Sans", weight: "SemiBold", size: 22, lineHeight: 28, tracking: 0, category: "Title" },
    { name: "Title Medium", font: "Noto Sans", weight: "SemiBold", size: 16, lineHeight: 24, tracking: 0.15, category: "Title" },
    { name: "Title Small", font: "Noto Sans", weight: "SemiBold", size: 14, lineHeight: 20, tracking: 0.1, category: "Title" },
    { name: "Title Large Emphasized", font: "Noto Sans", weight: "Bold", size: 22, lineHeight: 28, tracking: 0, category: "Title Emphasized" },
    { name: "Title Medium Emphasized", font: "Noto Sans", weight: "Bold", size: 16, lineHeight: 24, tracking: 0.15, category: "Title Emphasized" },
    { name: "Title Small Emphasized", font: "Noto Sans", weight: "Bold", size: 14, lineHeight: 20, tracking: 0.1, category: "Title Emphasized" },
    { name: "Title Large Light", font: "Noto Sans", weight: "Medium", size: 22, lineHeight: 28, tracking: 0, category: "Title Light" },
    { name: "Title Medium Light", font: "Noto Sans", weight: "Medium", size: 16, lineHeight: 24, tracking: 0.15, category: "Title Light" },
    { name: "Title Small Light", font: "Noto Sans", weight: "Medium", size: 14, lineHeight: 20, tracking: 0.1, category: "Title Light" },
    
    // Body
    { name: "Body Large", font: "Noto Sans", weight: "Regular", size: 16, lineHeight: 24, tracking: 0.5, category: "Body" },
    { name: "Body Medium", font: "Noto Sans", weight: "Regular", size: 14, lineHeight: 20, tracking: 0.25, category: "Body" },
    { name: "Body Small", font: "Noto Sans", weight: "Regular", size: 12, lineHeight: 16, tracking: 0.4, category: "Body" },
    { name: "Body Large Emphasized", font: "Noto Sans", weight: "Bold", size: 16, lineHeight: 24, tracking: 0.5, category: "Body Emphasized" },
    { name: "Body Medium Emphasized", font: "Noto Sans", weight: "Bold", size: 14, lineHeight: 20, tracking: 0.25, category: "Body Emphasized" },
    { name: "Body Small Emphasized", font: "Noto Sans", weight: "Bold", size: 12, lineHeight: 16, tracking: 0.4, category: "Body Emphasized" },
    
    // Label
    { name: "Label Large", font: "Noto Sans", weight: "Medium", size: 14, lineHeight: 20, tracking: 0.1, category: "Label" },
    { name: "Label Medium", font: "Noto Sans", weight: "Medium", size: 12, lineHeight: 16, tracking: 0.5, category: "Label" },
    { name: "Label Small", font: "Noto Sans", weight: "Medium", size: 11, lineHeight: 16, tracking: 0.5, category: "Label" },
    { name: "Label Large Emphasized", font: "Noto Sans", weight: "Bold", size: 14, lineHeight: 20, tracking: 0.1, category: "Label Emphasized" },
    { name: "Label Medium Emphasized", font: "Noto Sans", weight: "Bold", size: 12, lineHeight: 16, tracking: 0.5, category: "Label Emphasized" },
  ];

  const categories = React.useMemo(() => {
    const cats = new Set(typographyTokens.map(token => token.category));
    return Array.from(cats);
  }, []);

  const filteredTokens = React.useMemo(() => {
    if (selectedCategory === "all") return typographyTokens;
    return typographyTokens.filter(token => token.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;500;600;700&family=Noto+Sans:wght@400;500;600;700&display=swap');
      `}</style>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            📝 Typography Tokens
          </h1>
          <p className="text-gray-600">
            Font families, sizes, weights, and spacing
          </p>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mt-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="Display">Display</TabsTrigger>
            <TabsTrigger value="Headline">Headline</TabsTrigger>
            <TabsTrigger value="Title">Title</TabsTrigger>
            <TabsTrigger value="Title Emphasized">Title Emphasized</TabsTrigger>
            <TabsTrigger value="Title Light">Title Light</TabsTrigger>
            <TabsTrigger value="Body">Body</TabsTrigger>
            <TabsTrigger value="Body Emphasized">Body Emphasized</TabsTrigger>
            <TabsTrigger value="Label">Label</TabsTrigger>
            <TabsTrigger value="Label Emphasized">Label Emphasized</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Font</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Weight</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Size</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Line Height</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Tracking</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Preview</th>
            </tr>
          </thead>
          <tbody>
            {filteredTokens.map((token, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900 font-mono text-sm">
                  {token.name}
                </td>
                <td className="py-3 px-4 text-gray-900 text-sm">
                  {token.font}
                </td>
                <td className="py-3 px-4 text-gray-900 text-sm">
                  {token.weight}
                </td>
                <td className="py-3 px-4 text-gray-900 font-mono text-sm">
                  {token.size}px
                </td>
                <td className="py-3 px-4 text-gray-900 font-mono text-sm">
                  {token.lineHeight}px
                </td>
                <td className="py-3 px-4 text-gray-900 font-mono text-sm">
                  {token.tracking.toFixed(2)}px
                </td>
                <td className="py-3 px-4">
                  <div
                    className="text-gray-900"
                    style={{
                      fontFamily: token.font,
                      fontWeight: token.weight === "Regular" ? "400" : token.weight === "Medium" ? "500" : token.weight === "SemiBold" ? "600" : "700",
                      fontSize: `${token.size}px`,
                      lineHeight: `${token.lineHeight}px`,
                      letterSpacing: `${token.tracking}px`,
                    }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredTokens.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No typography tokens found in this category.</p>
        </div>
      )}
      </div>
    </>
  );
};

const meta: Meta<typeof TypographyPage> = {
  title: "Tokens/Typography",
  component: TypographyPage,
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;

export const Typography: StoryFn = () => <TypographyPage />;
