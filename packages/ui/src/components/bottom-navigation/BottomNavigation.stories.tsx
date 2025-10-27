import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { BottomNavigation } from "../ui/bottom-navigation";

const meta: Meta<typeof BottomNavigation> = {
  title: "Components/Bottom Navigation",
  component: BottomNavigation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Bottom navigation bar component for mobile applications with toolbar and FAB (Floating Action Button).`,
      },
    },
  },
  argTypes: {
    activeTab: {
      control: "select",
      options: ["home", "card", "atm", "more", ""],
      description: "Currently active tab",
    },
    onTabChange: {
      action: "tab changed",
    },
    onHelpClick: {
      action: "help clicked",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          height: "300px",
          width: "100%",
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: StoryFn<typeof BottomNavigation> = (args) => <BottomNavigation {...args} />;

export const Default: StoryFn<typeof BottomNavigation> = Template.bind({});
Default.args = {
  activeTab: "home",
};
Default.parameters = {
  docs: {
    description: {
      story: `Default bottom navigation with Home tab active.`,
    },
  },
};

export const CardTabActive: StoryFn<typeof BottomNavigation> = Template.bind({});
CardTabActive.args = {
  activeTab: "card",
};
CardTabActive.parameters = {
  docs: {
    description: {
      story: `Bottom navigation with Card tab active.`,
    },
  },
};

export const AtmTabActive: StoryFn<typeof BottomNavigation> = Template.bind({});
AtmTabActive.args = {
  activeTab: "atm",
};
AtmTabActive.parameters = {
  docs: {
    description: {
      story: `Bottom navigation with ATM tab active.`,
    },
  },
};

export const HelpActive: StoryFn<typeof BottomNavigation> = Template.bind({});
HelpActive.args = {
  activeTab: "help",
};
HelpActive.parameters = {
  docs: {
    description: {
      story: `Bottom navigation with Help FAB active.`,
    },
  },
};

