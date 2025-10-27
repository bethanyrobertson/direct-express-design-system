import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";

// Import logos from the assets
import * as Logos from "../../assets/logos/svg";

const LogosPage: React.FC = () => {
  const logos: Array<{ name: string; src: string }> = [
    { name: "Logomark Green", src: Logos.LogomarkGreenSvg },
    { name: "Logomark Light", src: Logos.LogomarkLightSvg },
    { name: "Wordmark Green", src: Logos.WordmarkGreenSvg },
    { name: "Wordmark Light", src: Logos.WordmarkLightSvg },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🎨 Logos
        </h1>
        <p className="text-gray-600">
          Brand logos and mark assets
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {logos.map((logo, index) => {
          const isLight = logo.name.toLowerCase().includes('light');
          return (
            <div key={index} className={`group relative p-8 border rounded-lg hover:shadow-md transition-all ${
              isLight 
                ? 'border-gray-700 bg-gray-900' 
                : 'border-gray-200 bg-white'
            }`}>
              <div className="flex flex-col items-center space-y-4">
                <div className={`w-full h-32 flex items-center justify-center rounded ${
                  isLight ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <div className="text-center">
                  <span className={`text-sm font-medium ${
                    isLight ? 'text-white' : 'text-gray-900'
                  }`}>
                    {logo.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Usage</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <pre className="text-sm text-gray-700">
{`import { LogoName } from '@/assets/logos'

<img src={LogoName} alt="Logo" />`}
          </pre>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof LogosPage> = {
  title: "Foundations/Logos/All Logos",
  component: LogosPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light"
    }
  }
};

export default meta;

export const AllLogos: StoryFn<typeof LogosPage> = () => <LogosPage />;

