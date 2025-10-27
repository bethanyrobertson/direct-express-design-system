import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";

// Import illustration SVGs
import * as Illustrations from "../../assets/illustrations/svg";

const IllustrationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedIllustration, setSelectedIllustration] = React.useState<string | null>(null);

  // Get all illustration exports
  const getIllustrations = () => {
    const illustrationNames: string[] = [];
    Object.keys(Illustrations).forEach((key) => {
      if (key !== 'default' && key.endsWith('Svg')) {
        illustrationNames.push(key);
      }
    });
    return illustrationNames;
  };

  const allIllustrations = getIllustrations();

  const filteredIllustrations = React.useMemo(() => {
    if (!searchTerm) return allIllustrations;
    return allIllustrations.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allIllustrations]);

  const handleIllustrationClick = (name: string) => {
    setSelectedIllustration(name);
  };

  const closeModal = () => {
    setSelectedIllustration(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Illustrations Library
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {allIllustrations.length} illustrations available
        </p>
        
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search illustrations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {searchTerm && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredIllustrations.length} of {allIllustrations.length} illustrations
          </p>
        )}
      </div>

      {filteredIllustrations.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {allIllustrations.length === 0 ? 'No illustrations yet' : 'No illustrations found'}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {allIllustrations.length === 0 
              ? 'Add SVG illustrations to the illustrations/svg folder to see them here.'
              : 'Try adjusting your search terms.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredIllustrations.map((illustrationName) => {
            const Illustration = (Illustrations as any)[illustrationName];
            return (
              <div 
                key={illustrationName}
                onClick={() => handleIllustrationClick(illustrationName)}
                className="group relative cursor-pointer p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-24 h-24 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                    {Illustration ? (
                      <img src={Illustration} alt={illustrationName} className="max-w-full max-h-full object-contain" />
                    ) : (
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
                        <span className="text-2xl">🎨</span>
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-center text-gray-600 dark:text-gray-400 font-mono break-all">
                    {illustrationName.replace('Svg', '')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal for full-size view */}
      {selectedIllustration && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] p-6 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {selectedIllustration.replace('Svg', '')}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center">
              {(() => {
                const Illustration = (Illustrations as any)[selectedIllustration];
                return Illustration ? (
                  <img 
                    src={Illustration} 
                    alt={selectedIllustration} 
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                ) : (
                  <div className="w-96 h-96 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center">
                    <span className="text-6xl">🎨</span>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof IllustrationsPage> = {
  title: "Foundations/Illustrations/All Illustrations",
  component: IllustrationsPage,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light"
    }
  }
};

export default meta;

export const AllIllustrations: StoryFn<typeof IllustrationsPage> = () => <IllustrationsPage />;
