import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A checkbox component built with Radix UI primitives.`,
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Checkbox> = (args) => (
  <div className="flex items-center space-x-2">
    <Checkbox {...args} />
    <Label htmlFor="checkbox">Accept terms and conditions</Label>
  </div>
);

export const Default: StoryFn<typeof Checkbox> = () => (
  <div className="flex flex-col gap-6 p-6">
    <div className="flex items-center gap-3">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
    <div className="flex items-start gap-3">
      <Checkbox id="terms-2" defaultChecked />
      <div className="grid gap-2">
        <Label htmlFor="terms-2">Accept terms and conditions</Label>
        <p className="text-sm text-gray-600">
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <Checkbox id="toggle" disabled />
      <Label htmlFor="toggle">Enable notifications</Label>
    </div>
    <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-gray-50">
      <Checkbox id="toggle-2" defaultChecked />
      <div className="grid gap-1.5 font-normal">
        <p className="text-sm leading-none font-medium">Enable notifications</p>
        <p className="text-sm text-gray-600">You can enable or disable notifications at any time.</p>
      </div>
    </Label>
  </div>
);

Default.parameters = {
  docs: {
    description: {
      story: `Checkbox component with various states and configurations.`,
    },
  },
};

export const Checked: StoryFn<typeof Checkbox> = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="checkbox-checked" checked />
    <Label htmlFor="checkbox-checked">Checked checkbox</Label>
  </div>
);

export const Unchecked: StoryFn<typeof Checkbox> = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="checkbox-unchecked" />
    <Label htmlFor="checkbox-unchecked">Unchecked checkbox</Label>
  </div>
);

export const Disabled: StoryFn<typeof Checkbox> = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox-disabled" disabled />
      <Label htmlFor="checkbox-disabled">Disabled checkbox</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox-disabled-checked" disabled checked />
      <Label htmlFor="checkbox-disabled-checked">Disabled checked checkbox</Label>
    </div>
  </div>
);

