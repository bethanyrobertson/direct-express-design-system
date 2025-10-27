import { Meta, StoryFn } from "@storybook/react";
import { AddSvg, LogoArrowSvg, ShareSvg, ShieldSvg, WalletSvg } from "../../assets/icons";
import { Button } from "../ui/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "text", "tonal"],
      description: "Material 3 button variant",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    fullWidth: {
      control: "boolean",
      description: "Full width button",
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Icon position",
    },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args: any) => <Button {...args} />;

export const Default: StoryFn<typeof Button> = Template.bind({});
Default.args = {
  variant: "filled",
  children: "Button",
};
Default.parameters = {
  docs: {
    description: {
      story: `Default filled button.`,
    },
  },
};

export const AllVariants: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px" }}>
    <Button variant="filled">Filled</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
    <Button variant="tonal">Tonal</Button>
  </div>
);
AllVariants.parameters = {
  docs: {
    description: {
      story: `All button variants displayed together.`,
    },
  },
};

export const AllVariantsWithIcons: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px" }}>
    <Button variant="filled" icon={<img src={AddSvg} alt="Add" />} iconPosition="left">
      Add Item
    </Button>
    <Button variant="outlined" icon={<img src={WalletSvg} alt="Wallet" />} iconPosition="left">
      View Wallet
    </Button>
    <Button variant="text" icon={<img src={ShareSvg} alt="Share" />} iconPosition="left">
      Share
    </Button>
    <Button variant="tonal" icon={<img src={ShieldSvg} alt="Security" />} iconPosition="left">
      Security
    </Button>
  </div>
);
AllVariantsWithIcons.parameters = {
  docs: {
    description: {
      story: `All button variants with icons.`,
    },
  },
};

export const IconPositions: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
    <div>
      <h3 style={{ marginBottom: "1rem" }}>Icon on Left (8px gap)</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="filled" icon={<img src={AddSvg} alt="Add" />} iconPosition="left">
          Add
        </Button>
        <Button variant="outlined" icon={<img src={WalletSvg} alt="Wallet" />} iconPosition="left">
          Wallet
        </Button>
        <Button variant="text" icon={<img src={ShareSvg} alt="Share" />} iconPosition="left">
          Share
        </Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "1rem" }}>Icon on Right (4px gap)</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="filled" icon={<img src={LogoArrowSvg} alt="Arrow" />} iconPosition="right">
          Continue
        </Button>
        <Button variant="outlined" icon={<img src={LogoArrowSvg} alt="Arrow" />} iconPosition="right">
          Next
        </Button>
        <Button variant="text" icon={<img src={LogoArrowSvg} alt="Arrow" />} iconPosition="right">
          Proceed
        </Button>
      </div>
    </div>
  </div>
);
IconPositions.parameters = {
  docs: {
    description: {
      story: `Buttons with icons on left and right positions.`,
    },
  },
};

export const AllStates: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
    <div>
      <h3 style={{ marginBottom: "1rem" }}>Filled</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="filled">Enabled</Button>
        <Button variant="filled" disabled>
          Disabled
        </Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "1rem" }}>Outlined</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="outlined">Enabled</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "1rem" }}>Text</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="text">Enabled</Button>
        <Button variant="text" disabled>
          Disabled
        </Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "1rem" }}>Tonal</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="tonal">Enabled</Button>
        <Button variant="tonal" disabled>
          Disabled
        </Button>
      </div>
    </div>
  </div>
);
AllStates.parameters = {
  docs: {
    description: {
      story: `All button states (enabled and disabled) across all variants.`,
    },
  },
};
