import { Meta, StoryFn } from "@storybook/react";
import React from "react";

interface CornerRadiusToken {
  name: string;
  value: number;
  cssVariable: string;
}

const CornerRadiusPage: React.FC = () => {
  const cornerRadiusTokens: CornerRadiusToken[] = [
    { name: "None", value: 0, cssVariable: "--radius-none" },
    { name: "Extra extra small", value: 2, cssVariable: "--radius-xxs" },
    { name: "Extra small", value: 4, cssVariable: "--radius-xs" },
    { name: "Small", value: 8, cssVariable: "--radius-sm" },
    { name: "Medium", value: 12, cssVariable: "--radius-md" },
    { name: "Large", value: 16, cssVariable: "--radius-lg" },
    { name: "Large increased", value: 20, cssVariable: "--radius-lg-increased" },
    { name: "Extra large", value: 28, cssVariable: "--radius-xl" },
    { name: "Extra large increased", value: 32, cssVariable: "--radius-xl-increased" },
    { name: "Extra extra large", value: 48, cssVariable: "--radius-xxl" },
    { name: "Full", value: 999, cssVariable: "--radius-full" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          ⚪ Corner Radius Tokens
        </h1>
        <p className="text-gray-600">
          Border radius scale for consistent rounded corners
        </p>
      </div>

      <div className="space-y-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Value</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">CSS Variable</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Visual</th>
            </tr>
          </thead>
          <tbody>
            {cornerRadiusTokens.map((token, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 text-gray-900 text-sm">
                  {token.name}
                </td>
                <td className="py-4 px-4 font-mono text-sm text-gray-900">
                  {token.name === "Full" ? "Full" : `${token.value}px`}
                </td>
                <td className="py-4 px-4 font-mono text-sm text-gray-900">
                  {token.cssVariable}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-blue-500 flex-shrink-0"
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: token.name === "Full" ? "999px" : `${token.value}px`,
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Corner Radius Scale</h2>
          <div className="grid grid-cols-1 gap-8">
            {cornerRadiusTokens.map((token, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-sm text-gray-900">{token.name}</span>
                  <span className="font-mono text-sm text-gray-600">{token.name === "Full" ? "Full" : `${token.value}px`}</span>
                  <span className="font-mono text-xs text-gray-500">{token.cssVariable}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-2">
                    <div
                      className="bg-blue-500"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: token.name === "Full" ? "999px" : `${token.value}px`,
                      }}
                    />
                    <span className="text-xs text-gray-600 text-center">Square</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div
                      className="bg-blue-500"
                      style={{
                        width: '120px',
                        height: '60px',
                        borderRadius: token.name === "Full" ? "999px" : `${token.value}px`,
                      }}
                    />
                    <span className="text-xs text-gray-600 text-center">Wide</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div
                      className="bg-blue-500"
                      style={{
                        width: '60px',
                        height: '120px',
                        borderRadius: token.name === "Full" ? "999px" : `${token.value}px`,
                      }}
                    />
                    <span className="text-xs text-gray-600 text-center">Tall</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof CornerRadiusPage> = {
  title: "Tokens/Corner Radius",
  component: CornerRadiusPage,
  parameters: {
    layout: "fullscreen"
  }
};

export default meta;

export const CornerRadius: StoryFn = () => <CornerRadiusPage />;

