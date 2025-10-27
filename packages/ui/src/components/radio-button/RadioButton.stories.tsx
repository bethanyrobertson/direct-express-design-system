import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { RadioButton, RadioGroup } from "../ui/radio-button";

const meta: Meta<typeof RadioButton> = {
  title: "Components/Radio Button",
  component: RadioButton,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `Material 3 Radio Button component with support for labels, error states, and comprehensive state management.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the radio button is selected",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    error: {
      control: "boolean",
      description: "Error state",
    },
    label: {
      control: "text",
      description: "Label text for the radio button",
    },
  },
};

export default meta;

// Controlled radio button wrapper for stories
const ControlledRadioButton = (args: any) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  return <RadioButton {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
};

export const Default: StoryFn<typeof RadioButton> = ControlledRadioButton.bind({});
Default.args = {
  value: "option",
  label: "Radio button label",
  checked: false,
};
Default.parameters = {
  docs: {
    description: {
      story: `Default unselected radio button.`,
    },
  },
};

export const Checked: StoryFn<typeof RadioButton> = ControlledRadioButton.bind({});
Checked.args = {
  value: "option",
  label: "Selected option",
  checked: true,
};
Checked.parameters = {
  docs: {
    description: {
      story: `Selected radio button state.`,
    },
  },
};

export const WithoutLabel: StoryFn<typeof RadioButton> = ControlledRadioButton.bind({});
WithoutLabel.args = {
  value: "option",
  checked: false,
};
WithoutLabel.parameters = {
  docs: {
    description: {
      story: `Radio button without a label.`,
    },
  },
};

export const Disabled: StoryFn<typeof RadioButton> = ControlledRadioButton.bind({});
Disabled.args = {
  value: "option",
  label: "Disabled option",
  disabled: true,
  checked: false,
};
Disabled.parameters = {
  docs: {
    description: {
      story: `Disabled radio button.`,
    },
  },
};

export const DisabledChecked: StoryFn<typeof RadioButton> = ControlledRadioButton.bind({});
DisabledChecked.args = {
  value: "option",
  label: "Disabled selected",
  disabled: true,
  checked: true,
};
DisabledChecked.parameters = {
  docs: {
    description: {
      story: `Disabled radio button in the selected state.`,
    },
  },
};

export const ErrorState: StoryFn<typeof RadioButton> = ControlledRadioButton.bind({});
ErrorState.args = {
  value: "option",
  label: "Error option",
  error: true,
  checked: true,
};
ErrorState.parameters = {
  docs: {
    description: {
      story: `Radio button in an error state.`,
    },
  },
};

// Radio Group Examples
export const SimpleRadioGroup = () => {
  const [value, setValue] = React.useState("option1");

  return (
    <RadioGroup name="simple-group" value={value} onChange={(e) => setValue(e.target.value)} label="Select an option">
      <RadioButton value="option1" label="Option 1" />
      <RadioButton value="option2" label="Option 2" />
      <RadioButton value="option3" label="Option 3" />
    </RadioGroup>
  );
};
SimpleRadioGroup.parameters = {
  docs: {
    description: {
      story: `Simple vertical radio group.`,
    },
  },
};

export const HorizontalRadioGroup = () => {
  const [value, setValue] = React.useState("male");

  return (
    <RadioGroup name="gender" value={value} onChange={(e) => setValue(e.target.value)} label="Gender" orientation="horizontal">
      <RadioButton value="male" label="Male" />
      <RadioButton value="female" label="Female" />
      <RadioButton value="other" label="Other" />
      <RadioButton value="prefer-not-to-say" label="Prefer not to say" />
    </RadioGroup>
  );
};
HorizontalRadioGroup.parameters = {
  docs: {
    description: {
      story: `Horizontal radio group layout.`,
    },
  },
};

export const AllStates = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <RadioButton value="1" label="Default" checked={false} />
    <RadioButton value="2" label="Checked" checked={true} />
    <RadioButton value="3" label="Disabled" disabled checked={false} />
    <RadioButton value="4" label="Disabled Checked" disabled checked={true} />
    <RadioButton value="5" label="Error" error checked={true} />
  </div>
);
AllStates.parameters = {
  docs: {
    description: {
      story: `All radio button states in a single view.`,
    },
  },
};

