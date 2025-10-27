import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";

interface SpacingToken {
  name: string;
  tailwindValue: string;
  value: number;
  cssVariable: string;
}

const SpacingPage: React.FC = () => {
  const spacingTokens: SpacingToken[] = [
    { name: "0.5", tailwindValue: "0.5", value: 2, cssVariable: "--spacing-0-5" },
    { name: "1", tailwindValue: "1", value: 4, cssVariable: "--spacing-1" },
    { name: "1.5", tailwindValue: "1.5", value: 6, cssVariable: "--spacing-1-5" },
    { name: "2", tailwindValue: "2", value: 8, cssVariable: "--spacing-2" },
    { name: "2.5", tailwindValue: "2.5", value: 10, cssVariable: "--spacing-2-5" },
    { name: "3", tailwindValue: "3", value: 12, cssVariable: "--spacing-3" },
    { name: "4", tailwindValue: "4", value: 16, cssVariable: "--spacing-4" },
    { name: "4.5", tailwindValue: "4.5", value: 18, cssVariable: "--spacing-4-5" },
    { name: "5", tailwindValue: "5", value: 20, cssVariable: "--spacing-5" },
    { name: "6", tailwindValue: "6", value: 24, cssVariable: "--spacing-6" },
    { name: "8", tailwindValue: "8", value: 32, cssVariable: "--spacing-8" },
    { name: "9", tailwindValue: "9", value: 36, cssVariable: "--spacing-9" },
    { name: "10", tailwindValue: "10", value: 40, cssVariable: "--spacing-10" },
    { name: "12", tailwindValue: "12", value: 48, cssVariable: "--spacing-12" },
    { name: "14", tailwindValue: "14", value: 56, cssVariable: "--spacing-14" },
    { name: "16", tailwindValue: "16", value: 64, cssVariable: "--spacing-16" },
    { name: "20", tailwindValue: "20", value: 80, cssVariable: "--spacing-20" },
    { name: "24", tailwindValue: "24", value: 96, cssVariable: "--spacing-24" },
    { name: "32", tailwindValue: "32", value: 128, cssVariable: "--spacing-32" },
    { name: "40", tailwindValue: "40", value: 160, cssVariable: "--spacing-40" },
    { name: "48", tailwindValue: "48", value: 192, cssVariable: "--spacing-48" },
    { name: "56", tailwindValue: "56", value: 224, cssVariable: "--spacing-56" },
    { name: "64", tailwindValue: "64", value: 256, cssVariable: "--spacing-64" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          📐 Spacing Tokens
        </h1>
        <p className="text-gray-600">
          Spacing scale and utilities for consistent layouts
        </p>
      </div>

      <div className="space-y-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Tailwind Value</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Pixels</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">CSS Variable</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Example Class</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Visual</th>
            </tr>
          </thead>
          <tbody>
            {spacingTokens.map((token, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-mono text-sm text-gray-900">
                  {token.tailwindValue}
                </td>
                <td className="py-4 px-4 font-mono text-sm text-gray-900">
                  {token.value}px
                </td>
                <td className="py-4 px-4 font-mono text-sm text-gray-900">
                  {token.cssVariable}
                </td>
                <td className="py-4 px-4 font-mono text-sm text-blue-600">
                  p-{token.tailwindValue}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <div className="bg-blue-500 rounded" style={{ width: '4px', height: '20px' }} />
                      <div className="bg-gray-300" style={{ width: `${Math.min(token.value, 80)}px`, height: '4px', maxWidth: '80px' }} />
                      <div className="bg-blue-500 rounded" style={{ width: '4px', height: '20px' }} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Spacing Scale</h2>
          <div className="grid grid-cols-1 gap-8">
            {spacingTokens.map((token, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-mono font-semibold text-gray-900">{token.tailwindValue}</span>
                  <span className="font-mono text-sm text-gray-600">{token.value}px</span>
                  <span className="font-mono text-xs text-blue-600">p-{token.tailwindValue}</span>
                  <span className="font-mono text-xs text-gray-500">{token.cssVariable}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500 rounded" style={{ width: '8px', height: '32px' }} />
                  <div className="bg-blue-300 rounded-sm" style={{ width: `${Math.min(token.value, 200)}px`, height: '32px', minWidth: '8px' }} />
                  <div className="bg-blue-500 rounded" style={{ width: '8px', height: '32px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof SpacingPage> = {
  title: "Tokens/Spacing",
  component: SpacingPage,
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;

export const Spacing: StoryFn = () => <SpacingPage />;
