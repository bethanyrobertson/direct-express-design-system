import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon, PlusIcon, XIcon } from "lucide-react";
import { Badge } from "../ui/badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A badge component for displaying status, counts, or labels.`,
      },
    },
  },
};

export default meta;

export const BadgeDemo: StoryFn<typeof Badge> = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex w-full flex-wrap gap-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
    <div className="flex w-full flex-wrap gap-2">
      <Badge
        variant="secondary"
        className="bg-blue-500 text-white dark:bg-blue-600"
      >
        <BadgeCheckIcon className="mr-1 h-3 w-3" />
        Verified
      </Badge>
      <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
        8
      </Badge>
      <Badge
        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        variant="destructive"
      >
        99
      </Badge>
      <Badge
        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        variant="outline"
      >
        20+
      </Badge>
    </div>
  </div>
);

export const Default: StoryFn<typeof Badge> = () => (
  <div className="flex flex-wrap gap-2">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
);

Default.parameters = {
  docs: {
    description: {
      story: `Basic badge variants and configurations.`,
    },
  },
};

export const Variants: StoryFn = () => (
  <div className="flex flex-wrap gap-2">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
);

Variants.parameters = {
  docs: {
    description: {
      story: `Different badge variants for different use cases.`,
    },
  },
};

export const WithIcons: StoryFn = () => (
  <div className="flex flex-wrap gap-2">
    <Badge>
      <CheckIcon className="mr-1 h-3 w-3" />
      Completed
    </Badge>
    <Badge variant="secondary">
      <BadgeCheckIcon className="mr-1 h-3 w-3" />
      Verified
    </Badge>
    <Badge variant="destructive">
      <AlertCircleIcon className="mr-1 h-3 w-3" />
      Error
    </Badge>
  </div>
);

WithIcons.parameters = {
  docs: {
    description: {
      story: `Badges with icons for enhanced visual communication.`,
    },
  },
};

export const Counters: StoryFn = () => (
  <div className="flex flex-wrap gap-2">
    <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
      8
    </Badge>
    <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="secondary">
      42
    </Badge>
    <Badge
      className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
      variant="destructive"
    >
      99
    </Badge>
    <Badge
      className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
      variant="outline"
    >
      20+
    </Badge>
  </div>
);

Counters.parameters = {
  docs: {
    description: {
      story: `Badges as counters or indicators with rounded-full styling.`,
    },
  },
};

export const UsageExamples: StoryFn = () => (
  <div className="space-y-6 p-6">
    <div>
      <h3 className="text-sm font-medium mb-3">Status Badges</h3>
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">Active</Badge>
        <Badge variant="destructive">Inactive</Badge>
        <Badge variant="outline">Pending</Badge>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-medium mb-3">Notification Counters</h3>
      <div className="flex flex-wrap gap-2">
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
          3
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="destructive"
        >
          12
        </Badge>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-medium mb-3">With Icons</h3>
      <div className="flex flex-wrap gap-2">
        <Badge>
          <CheckIcon className="mr-1 h-3 w-3" />
          Verified Account
        </Badge>
        <Badge variant="secondary">
          <AlertCircleIcon className="mr-1 h-3 w-3" />
          Warning
        </Badge>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-medium mb-3">Custom Styling</h3>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-blue-500 text-white hover:bg-blue-600">
          Custom Blue
        </Badge>
        <Badge className="bg-purple-500 text-white hover:bg-purple-600">
          Custom Purple
        </Badge>
        <Badge className="bg-orange-500 text-white hover:bg-orange-600">
          Custom Orange
        </Badge>
      </div>
    </div>
  </div>
);

UsageExamples.parameters = {
  docs: {
    description: {
      story: `Real-world examples of badge usage in different contexts.`,
    },
  },
};

export const AddableRemoveable: StoryFn = () => {
  const initialBadges = ["Tag 1", "Tag 2", "Tag 3", "Tag 4"];
  const [badges, setBadges] = React.useState<string[]>(initialBadges);
  const [dismissedBadges, setDismissedBadges] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const addBadge = () => {
    if (inputValue.trim() && !badges.includes(inputValue.trim())) {
      setBadges([...badges, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeBadge = (badgeToRemove: string) => {
    setBadges(badges.filter((badge) => badge !== badgeToRemove));
    setDismissedBadges([...dismissedBadges, badgeToRemove]);
  };

  const resetBadges = () => {
    setBadges(initialBadges);
    setDismissedBadges([]);
  };

  return (
    <div className="space-y-6 p-6 w-full max-w-2xl">
      <div>
        <h3 className="text-sm font-medium mb-3">Add New Badge</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addBadge();
              }
            }}
            placeholder="Enter tag name"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#02514E] focus:border-transparent"
          />
          <button
            onClick={addBadge}
            className="px-4 py-2 bg-[#02514E] text-white rounded-md hover:bg-[#023d39] transition-colors"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium">
            Current Badges ({badges.length})
          </h3>
          {dismissedBadges.length > 0 && (
            <button
              onClick={resetBadges}
              className="text-xs text-[#02514E] hover:text-[#023d39] transition-colors underline"
            >
              Reset all badges
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge key={badge} variant="secondary">
              {badge}
              <button
                onClick={() => removeBadge(badge)}
                className="ml-2 hover:opacity-70 transition-opacity"
                aria-label={`Remove ${badge}`}
              >
                <XIcon className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {badges.length === 0 && (
            <p className="text-sm text-gray-500">No badges currently displayed</p>
          )}
        </div>
      </div>

      {dismissedBadges.length > 0 && (
        <div>
          <h3 className="text-sm font-medium mb-3">
            Dismissed Badges ({dismissedBadges.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {dismissedBadges.map((badge) => (
              <Badge key={badge} variant="outline" className="opacity-50">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-sm font-medium mb-3">Icons Position Examples</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-600 mb-2">Icon before text (Add)</p>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <PlusIcon className="mr-1 h-3 w-3" />
                New Tag
              </Badge>
              <Badge variant="secondary">
                <PlusIcon className="mr-1 h-3 w-3" />
                Add Item
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-600 mb-2">Icon after text (Remove)</p>
            <div className="flex flex-wrap gap-2">
              <Badge>
                Remove
                <button
                  onClick={() => {}}
                  className="ml-1 hover:opacity-70 transition-opacity"
                >
                  <XIcon className="h-3 w-3" />
                </button>
              </Badge>
              <Badge variant="secondary">
                Delete
                <button
                  onClick={() => {}}
                  className="ml-1 hover:opacity-70 transition-opacity"
                >
                  <XIcon className="h-3 w-3" />
                </button>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddableRemoveable.parameters = {
  docs: {
    description: {
      story: `Demonstration of interactive badges with add and remove functionality. Shows icon placement before and after text.`,
    },
  },
};

