import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Input } from "../ui/input";
import {
  basicPasswordRequirements,
  defaultPasswordRequirements,
  PasswordRequirements,
  strictPasswordRequirements,
  usePasswordValidation,
} from "../ui/password-requirements";

const meta: Meta<typeof PasswordRequirements> = {
  title: "Components/Password Requirements",
  component: PasswordRequirements,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `Password Requirements component displays password validation criteria with real-time feedback.`,
      },
    },
  },
  argTypes: {
    password: {
      control: "text",
      description: "Current password value",
    },
    title: {
      control: "text",
      description: "Title text",
    },
    showTitle: {
      control: "boolean",
      description: "Show or hide title",
    },
  },
};

export default meta;

const Template: StoryFn<typeof PasswordRequirements> = (args) => <PasswordRequirements {...args} />;

export const Default: StoryFn<typeof PasswordRequirements> = Template.bind({});
Default.args = {
  password: "",
  title: "Password requirements",
  showTitle: true,
};
Default.parameters = {
  docs: {
    description: {
      story: `Default state with no password entered.`,
    },
  },
};

export const WithPassword: StoryFn<typeof PasswordRequirements> = Template.bind({});
WithPassword.args = {
  password: "MyPass123!",
  title: "Password requirements",
  showTitle: true,
};
WithPassword.parameters = {
  docs: {
    description: {
      story: `Password requirements with a sample password showing all criteria met.`,
    },
  },
};

export const PartiallyMet: StoryFn<typeof PasswordRequirements> = Template.bind({});
PartiallyMet.args = {
  password: "password",
  title: "Password requirements",
  showTitle: true,
};
PartiallyMet.parameters = {
  docs: {
    description: {
      story: `Some criteria met, some not - shows mixed validation state.`,
    },
  },
};

export const AllMet: StoryFn<typeof PasswordRequirements> = Template.bind({});
AllMet.args = {
  password: "MySecurePass123!",
  title: "Password requirements",
  showTitle: true,
};
AllMet.parameters = {
  docs: {
    description: {
      story: `All password criteria are satisfied.`,
    },
  },
};

// Interactive Example with Input
export const WithPasswordInput = () => {
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div style={{ maxWidth: "400px", padding: "20px" }}>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
      />
      <div style={{ marginTop: "16px" }}>
        <PasswordRequirements password={password} />
      </div>
    </div>
  );
};
WithPasswordInput.parameters = {
  docs: {
    description: {
      story: `Interactive example with password input field.`,
    },
  },
};

// Different Requirement Sets
export const StrictRequirements = () => {
  const [password, setPassword] = React.useState("");

  return (
    <div style={{ maxWidth: "400px", padding: "20px" }}>
      <Input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={{ marginTop: "16px" }}>
        <PasswordRequirements password={password} requirements={strictPasswordRequirements} title="Strong password requirements" />
      </div>
    </div>
  );
};
StrictRequirements.parameters = {
  docs: {
    description: {
      story: `Stricter password requirements for high-security scenarios.`,
    },
  },
};

export const BasicRequirements = () => {
  const [password, setPassword] = React.useState("");

  return (
    <div style={{ maxWidth: "400px", padding: "20px" }}>
      <Input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={{ marginTop: "16px" }}>
        <PasswordRequirements password={password} requirements={basicPasswordRequirements} title="Basic password requirements" />
      </div>
    </div>
  );
};
BasicRequirements.parameters = {
  docs: {
    description: {
      story: `Basic password requirements for simple scenarios.`,
    },
  },
};

// Compact Variant
export const CompactVariant = () => {
  const [password, setPassword] = React.useState("");

  return (
    <div style={{ maxWidth: "400px", padding: "20px" }}>
      <Input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div style={{ marginTop: "12px" }}>
        <PasswordRequirements password={password} className="ds-password-requirements--compact ds-password-requirements--borderless" />
      </div>
    </div>
  );
};
CompactVariant.parameters = {
  docs: {
    description: {
      story: `Compact borderless variant for tight spaces.`,
    },
  },
};

