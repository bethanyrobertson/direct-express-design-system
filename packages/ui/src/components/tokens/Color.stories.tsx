import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

interface ColorToken {
  name: string;
  light: string;
  dark: string;
  cssVariable: string;
  scope: string;
  category: string;
}

const ColorTokensPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const colorTokens: ColorToken[] = [
    // Schemes
    { name: "Schemes/Primary", light: "#00514e", dark: "#00514e", cssVariable: "--Schemes-Primary", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Primary", light: "#fafbfb", dark: "#fafbfb", cssVariable: "--Schemes-OnPrimary", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Secondary", light: "#cccc90", dark: "#cccc90", cssVariable: "--Schemes-Secondary", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Secondary", light: "#00514e", dark: "#00514e", cssVariable: "--Schemes-OnSecondary", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Tertiary", light: "#def4ed", dark: "#def4ed", cssVariable: "--Schemes-Tertiary", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Tertiary", light: "#00514e", dark: "#00514e", cssVariable: "--Schemes-OnTertiary", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Error", light: "#ba1a1a", dark: "#ba1a1a", cssVariable: "--Schemes-Error", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Error", light: "#ffffff", dark: "#ffffff", cssVariable: "--Schemes-OnError", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Error Container", light: "#ffece5", dark: "#ffece5", cssVariable: "--Schemes-ErrorContainer", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Error Container", light: "#410000", dark: "#410000", cssVariable: "--Schemes-OnErrorContainer", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Background", light: "#f4f2ed", dark: "#f4f2ed", cssVariable: "--Schemes-Background", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Background", light: "#002422", dark: "#002422", cssVariable: "--Schemes-OnBackground", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Surface", light: "#fafbfb", dark: "#fafbfb", cssVariable: "--Schemes-Surface", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Surface", light: "#0c1f1e", dark: "#0c1f1e", cssVariable: "--Schemes-OnSurface", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Surface Variant", light: "#f5f2ff", dark: "#f5f2ff", cssVariable: "--Schemes-SurfaceVariant", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Surface Variant", light: "#37413f", dark: "#37413f", cssVariable: "--Schemes-OnSurfaceVariant", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Outline", light: "#00514e", dark: "#00514e", cssVariable: "--Schemes-Outline", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Outline Variant", light: "#acb7b3", dark: "#acb7b3", cssVariable: "--Schemes-OutlineVariant", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Shadow", light: "#002422", dark: "#002422", cssVariable: "--Schemes-Shadow", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Scrim", light: "#002422", dark: "#002422", cssVariable: "--Schemes-Scrim", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Surface High", light: "#fc00fc", dark: "#fc00fc", cssVariable: "--Schemes-SurfaceHigh", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Surface Highest", light: "#ffffff", dark: "#ffffff", cssVariable: "--Schemes-SurfaceHighest", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Black", light: "#060808", dark: "#060808", cssVariable: "--Schemes-Black", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/White", light: "#fafbfb", dark: "#fafbfb", cssVariable: "--Schemes-White", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Success", light: "#348443", dark: "#348443", cssVariable: "--Schemes-Success", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Success", light: "#ffffff", dark: "#ffffff", cssVariable: "--Schemes-OnSuccess", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Success Container", light: "#e8f7dd", dark: "#e8f7dd", cssVariable: "--Schemes-SuccessContainer", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Success Container", light: "#2e6b35", dark: "#2e6b35", cssVariable: "--Schemes-OnSuccessContainer", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Warning", light: "#ffd363", dark: "#ffd363", cssVariable: "--Schemes-Warning", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Warning", light: "#060808", dark: "#060808", cssVariable: "--Schemes-OnWarning", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Warning Container", light: "#fdf6e3", dark: "#fdf6e3", cssVariable: "--Schemes-WarningContainer", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/On Warning Container", light: "#7c643c", dark: "#7c643c", cssVariable: "--Schemes-OnWarningContainer", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Links Default", light: "#0070c9", dark: "#0070c9", cssVariable: "--Schemes-LinksDefault", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Links Hover", light: "#0163b0", dark: "#0163b0", cssVariable: "--Schemes-LinksHover", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Links Disabled", light: "#877f9c", dark: "#877f9c", cssVariable: "--Schemes-LinksDisabled", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Links Pressed", light: "#005497", dark: "#005497", cssVariable: "--Schemes-LinksPressed", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Tertiary 2", light: "#e9f5f4", dark: "#e9f5f4", cssVariable: "--Schemes-Tertiary2", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Disabled background", light: "#f6f6f6", dark: "#f5fef1", cssVariable: "--Schemes-DisabledBackground", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Text- Display and Headline", light: "#00423d", dark: "#ffffff", cssVariable: "--Schemes-TextDisplayAndHeadline", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Placeholder text", light: "#688081", dark: "#ffffff", cssVariable: "--Schemes-PlaceholderText", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Segmented tab background", light: "#dd00ed", dark: "#ffffff", cssVariable: "--Schemes-SegmentedTabBackground", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Segmented tab fg resting", light: "#595268", dark: "#ffffff", cssVariable: "--Schemes-SegmentedTabFgResting", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Progress Bar Unfilled", light: "#a7b8b7", dark: "#a7b8b7", cssVariable: "--Schemes-ProgressBarUnfilled", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Success Border", light: "#a4c0a4", dark: "#a4c0a4", cssVariable: "--Schemes-SuccessBorder", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Warning Border", light: "#c9bc8c", dark: "#c9bc8c", cssVariable: "--Schemes-WarningBorder", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Error Border", light: "#b39595", dark: "#b39595", cssVariable: "--Schemes-ErrorBorder", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Info Border", light: "#9abab8", dark: "#9abab8", cssVariable: "--Schemes-InfoBorder", scope: "All Scopes", category: "Schemes" },
    { name: "Schemes/Surface Variant 2", light: "#f5fef1", dark: "#f5fef1", cssVariable: "--Schemes-SurfaceVariant2", scope: "All Scopes", category: "Schemes" },
    
    // Illustration
    { name: "Illustration/Accent -03", light: "#ea6556", dark: "#ea6556", cssVariable: "--Illustration-Accent03", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Green", light: "#abd6c0", dark: "#abd6c0", cssVariable: "--Illustration-Green", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Blue", light: "#e8f8f9", dark: "#e8f8f9", cssVariable: "--Illustration-Blue", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Line", light: "#00514e", dark: "#00514e", cssVariable: "--Illustration-Line", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/EmptyState-01", light: "#fbf9fc", dark: "#fbf9fc", cssVariable: "--Illustration-EmptyState01", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/EmptyState-02", light: "#e9f4f2", dark: "#e9f4f2", cssVariable: "--Illustration-EmptyState02", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/EmptyState-03", light: "#c6e0db", dark: "#c6e0db", cssVariable: "--Illustration-EmptyState03", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/EmptyState-04", light: "#a3cad7", dark: "#a3cad7", cssVariable: "--Illustration-EmptyState04", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Error-01", light: "#ffeb00", dark: "#ffeb00", cssVariable: "--Illustration-Error01", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Error-02", light: "#ba1a1a", dark: "#ba1a1a", cssVariable: "--Illustration-Error02", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Error-03", light: "#410000", dark: "#410000", cssVariable: "--Illustration-Error03", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/EmptyState-05", light: "#827f4b", dark: "#827f4b", cssVariable: "--Illustration-EmptyState05", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/EmptyState-06", light: "#4f7272", dark: "#4f7272", cssVariable: "--Illustration-EmptyState06", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Accent -02", light: "#c3e8ec", dark: "#c3e8ec", cssVariable: "--Illustration-Accent02", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Accent -01", light: "#e4f2f0", dark: "#e4f2f0", cssVariable: "--Illustration-Accent01", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Background", light: "#f4f2ed", dark: "#f4f2ed", cssVariable: "--Illustration-Background", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/White", light: "#ffffff", dark: "#ffffff", cssVariable: "--Illustration-White", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Black", light: "#0c1f1e", dark: "#0c1f1e", cssVariable: "--Illustration-Black", scope: "All Scopes", category: "Illustration" },
    { name: "Illustration/Surface", light: "#fafbfb", dark: "#fafbfb", cssVariable: "--Illustration-Surface", scope: "All Scopes", category: "Illustration" },
    
    // Mastercard
    { name: "Mastercard/Red", light: "#eb1b1b", dark: "#eb1b1b", cssVariable: "--Mastercard-Red", scope: "All Scopes", category: "Mastercard" },
    { name: "Mastercard/Orange", light: "#ff5f00", dark: "#ff5f00", cssVariable: "--Mastercard-Orange", scope: "All Scopes", category: "Mastercard" },
    { name: "Mastercard/Yellow", light: "#f79e1b", dark: "#f79e1b", cssVariable: "--Mastercard-Yellow", scope: "All Scopes", category: "Mastercard" },
    
    // Neutral
    { name: "Neutral/01", light: "#e9e9ed", dark: "#e9e9ed", cssVariable: "--Neutral-01", scope: "All Scopes", category: "Neutral" },
    { name: "Neutral/02", light: "#c8d2d2", dark: "#c8d2d2", cssVariable: "--Neutral-02", scope: "All Scopes", category: "Neutral" },
    { name: "Neutral/03", light: "#a7b8b7", dark: "#a7b8b7", cssVariable: "--Neutral-03", scope: "All Scopes", category: "Neutral" },
    { name: "Neutral/04", light: "#877f9c", dark: "#877f9c", cssVariable: "--Neutral-04", scope: "All Scopes", category: "Neutral" },
    { name: "Neutral/05", light: "#688081", dark: "#688081", cssVariable: "--Neutral-05", scope: "All Scopes", category: "Neutral" },
    { name: "Neutral/06", light: "#595268", dark: "#595268", cssVariable: "--Neutral-06", scope: "All Scopes", category: "Neutral" },
    { name: "Neutral/07", light: "#495150", dark: "#495150", cssVariable: "--Neutral-07", scope: "All Scopes", category: "Neutral" },
    { name: "Neutral/08", light: "#383838", dark: "#383838", cssVariable: "--Neutral-08", scope: "All Scopes", category: "Neutral" },
    { name: "Neutral/09", light: "#262626", dark: "#262626", cssVariable: "--Neutral-09", scope: "All Scopes", category: "Neutral" },
    
    // Badge
    { name: "Badge/Success", light: "#006b5f", dark: "#006b5f", cssVariable: "--Badge-Success", scope: "All Scopes", category: "Badge" },
    { name: "Badge/Malicious", light: "#f85d4d", dark: "#f85d4d", cssVariable: "--Badge-Malicious", scope: "All Scopes", category: "Badge" },
    { name: "Badge/Transitioned", light: "#ea6556", dark: "#ea6556", cssVariable: "--Badge-Transitioned", scope: "All Scopes", category: "Badge" },
    { name: "Badge/Inactive", light: "#acb7b3", dark: "#acb7b3", cssVariable: "--Badge-Inactive", scope: "All Scopes", category: "Badge" },
    { name: "Badge/Attempted", light: "#f79e1b", dark: "#f79e1b", cssVariable: "--Badge-Attempted", scope: "All Scopes", category: "Badge" },
    { name: "Badge/Declined", light: "#eb1b1b", dark: "#eb1b1b", cssVariable: "--Badge-Declined", scope: "All Scopes", category: "Badge" },
  ];

  const categories = React.useMemo(() => {
    const cats = new Set(colorTokens.map(token => token.category));
    return Array.from(cats);
  }, []);

  const filteredTokens = React.useMemo(() => {
    if (selectedCategory === "all") return colorTokens;
    return colorTokens.filter(token => token.category === selectedCategory);
  }, [selectedCategory]);

  const getContrast = (hex: string) => {
    // Simple contrast check - returns white or black based on luminance
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#ffffff";
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🎨 Color Tokens
        </h1>
        <p className="text-gray-600">
          Complete color token system
        </p>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mt-4">
          <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${categories.length + 1}, 1fr)` }}>
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map(cat => (
              <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Color</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">CSS Variable</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Scope</th>
            </tr>
          </thead>
          <tbody>
            {filteredTokens.map((token, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-900 font-mono text-sm">
                  {token.name}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded border border-gray-300"
                      style={{ backgroundColor: token.light }}
                    />
                    <span className="text-gray-900 font-mono text-sm">{token.light}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-900 font-mono text-sm">
                  {token.cssVariable}
                </td>
                <td className="py-3 px-4 text-gray-600 text-sm">
                  {token.scope}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredTokens.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No color tokens found in this category.</p>
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof ColorTokensPage> = {
  title: "Tokens/Color/Color Tokens",
  component: ColorTokensPage,
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;

export const ColorTokens: StoryFn<typeof ColorTokensPage> = () => <ColorTokensPage />;