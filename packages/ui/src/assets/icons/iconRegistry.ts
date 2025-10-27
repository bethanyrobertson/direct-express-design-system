// Icon registry for automatic icon discovery and categorization
// This file automatically generates icon categories based on the file structure

import * as Icons from './svg';

// Define the category mapping based on folder structure
const categoryMapping = {
  'icons:a11y': {
    name: 'Accessibility',
    description: 'Icons for accessibility features and inclusive design',
    emoji: '♿'
  },
  'icons:actions': {
    name: 'Actions',
    description: 'Action buttons, toggles, and interactive elements',
    emoji: '🎯'
  },
  'icons:alerts': {
    name: 'Alerts',
    description: 'Alert, warning, and notification icons',
    emoji: '🚨'
  },
  'icons:arrows': {
    name: 'Arrows',
    description: 'Navigation arrows and directional indicators',
    emoji: '➡️'
  },
  'icons:general': {
    name: 'General',
    description: 'General purpose UI icons and common elements',
    emoji: '🏠'
  },
  'icons:mapping': {
    name: 'Mapping',
    description: 'Location, mapping, and geography icons',
    emoji: '🗺️'
  },
  'icons:money': {
    name: 'Money',
    description: 'Financial, payment, and money-related icons',
    emoji: '💰'
  },
  'icons:security': {
    name: 'Security',
    description: 'Security, authentication, and safety icons',
    emoji: '🔒'
  }
};

// Function to categorize icons based on their name patterns
function categorizeIcon(iconName: string): string {
  // Check if icon name contains category indicators
  if (iconName.includes('Accessible') || iconName.includes('Blind') || iconName.includes('Ear')) {
    return 'icons:a11y';
  }
  if (iconName.includes('Add') || iconName.includes('Check') || iconName.includes('Cancel') || 
      iconName.includes('Close') || iconName.includes('Bookmark') || iconName.includes('Star') ||
      iconName.includes('Favorite') || iconName.includes('Copy') || (iconName.includes('List') && !iconName.includes('General'))) {
    return 'icons:actions';
  }
  if (iconName.includes('Error') || iconName.includes('Warning') || iconName.includes('Help') || 
      iconName.includes('Notification')) {
    return 'icons:alerts';
  }
  if (iconName.includes('Arrow') || iconName.includes('Download') || iconName.includes('Upload') || 
      iconName.includes('Forward') || iconName.includes('Navigate') || iconName.includes('Transfer')) {
    return 'icons:arrows';
  }
  if (iconName.includes('Map') || iconName.includes('Location') || iconName.includes('Distance')) {
    return 'icons:mapping';
  }
  if (iconName.includes('Money') || iconName.includes('Card') || iconName.includes('Wallet') || 
      iconName.includes('Bank') || iconName.includes('Cash') || iconName.includes('Payment') ||
      iconName.includes('Receipt') || iconName.includes('Savings') || iconName.includes('Credit')) {
    return 'icons:money';
  }
  if (iconName.includes('Lock') || iconName.includes('Key') || iconName.includes('Shield') || 
      iconName.includes('Password') || iconName.includes('Verified') || iconName.includes('Dialpad')) {
    return 'icons:security';
  }
  if (iconName.includes('Chart') || iconName.includes('Bar') || iconName.includes('Pie')) {
    return 'icons:data';
  }
  // Default to general for everything else
  return 'icons:general';
}

// Automatically generate icon categories
export function generateIconCategories() {
  const categories: Record<string, { icons: string[]; name: string; description: string; emoji: string }> = {};

  // Get all icon names from the Icons object
  const allIconNames = Object.keys(Icons).filter(name => name.endsWith('Svg'));

  // Categorize each icon
  allIconNames.forEach(iconName => {
    const categoryKey = categorizeIcon(iconName);
    
    if (!categories[categoryKey]) {
      const categoryInfo = categoryMapping[categoryKey as keyof typeof categoryMapping] || {
        name: 'General',
        description: 'General purpose icons',
        emoji: '🏠'
      };
      categories[categoryKey] = {
        icons: [],
        ...categoryInfo
      };
    }
    
    categories[categoryKey].icons.push(iconName);
  });

  // Sort icons within each category alphabetically
  Object.values(categories).forEach(category => {
    category.icons.sort();
  });

  return categories;
}

// Export the generated categories
export const iconCategories = generateIconCategories();

// Helper function to get total icon count
export function getTotalIconCount(): number {
  return Object.values(iconCategories).reduce((sum, category) => sum + category.icons.length, 0);
}

// Helper function to search icons
export function searchIcons(searchTerm: string): Record<string, { icons: string[]; name: string; description: string; emoji: string }> {
  if (!searchTerm) return iconCategories;

  const filtered: Record<string, { icons: string[]; name: string; description: string; emoji: string }> = {};

  Object.entries(iconCategories).forEach(([categoryKey, categoryData]) => {
    const matchingIcons = categoryData.icons.filter(iconName =>
      iconName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (matchingIcons.length > 0) {
      filtered[categoryKey] = {
        ...categoryData,
        icons: matchingIcons
      };
    }
  });

  return filtered;
}
