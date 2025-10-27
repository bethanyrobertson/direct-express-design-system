import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A select component for choosing from multiple options.`,
      },
    },
  },
};

export default meta;

export const SelectDemo: StoryFn<typeof Select> = () => (
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

SelectDemo.parameters = {
  docs: {
    description: {
      story: `A basic select component with grouped options.`,
    },
  },
};

export const WithMultipleGroups: StoryFn = () => (
  <Select>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectGroup>
      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="carrot">Carrot</SelectItem>
        <SelectItem value="broccoli">Broccoli</SelectItem>
        <SelectItem value="spinach">Spinach</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

WithMultipleGroups.parameters = {
  docs: {
    description: {
      story: `Select with multiple groups for organizing options.`,
    },
  },
};

export const DifferentSizes: StoryFn = () => {
  const [selected1, setSelected1] = React.useState("");
  const [selected2, setSelected2] = React.useState("");
  const [selected3, setSelected3] = React.useState("");

  return (
    <div className="flex flex-col gap-4">
      <Select value={selected1} onValueChange={setSelected1}>
        <SelectTrigger className="w-[180px] h-8">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selected2} onValueChange={setSelected2}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Default" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selected3} onValueChange={setSelected3}>
        <SelectTrigger className="w-[180px] h-12">
          <SelectValue placeholder="Large" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

DifferentSizes.parameters = {
  docs: {
    description: {
      story: `Select components in different sizes.`,
    },
  },
};

export const WithForm: StoryFn = () => {
  const [formData, setFormData] = React.useState({
    country: "",
    region: "",
    status: "",
  });

  return (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Country</label>
        <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Region</label>
        <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select a region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="na">North America</SelectItem>
            <SelectItem value="sa">South America</SelectItem>
            <SelectItem value="eu">Europe</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Status</label>
        <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded-md">
        <p className="text-sm font-medium mb-2">Form Data:</p>
        <pre className="text-xs">{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

WithForm.parameters = {
  docs: {
    description: {
      story: `Select components used in a form context.`,
    },
  },
};

export const Disabled: StoryFn = () => (
  <Select disabled>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Disabled select" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
    </SelectContent>
  </Select>
);

Disabled.parameters = {
  docs: {
    description: {
      story: `A disabled select component.`,
    },
  },
};

export const LongList: StoryFn = () => (
  <Select>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Countries</SelectLabel>
        <SelectItem value="us">United States</SelectItem>
        <SelectItem value="uk">United Kingdom</SelectItem>
        <SelectItem value="ca">Canada</SelectItem>
        <SelectItem value="au">Australia</SelectItem>
        <SelectItem value="de">Germany</SelectItem>
        <SelectItem value="fr">France</SelectItem>
        <SelectItem value="it">Italy</SelectItem>
        <SelectItem value="es">Spain</SelectItem>
        <SelectItem value="nl">Netherlands</SelectItem>
        <SelectItem value="be">Belgium</SelectItem>
        <SelectItem value="ch">Switzerland</SelectItem>
        <SelectItem value="at">Austria</SelectItem>
        <SelectItem value="se">Sweden</SelectItem>
        <SelectItem value="no">Norway</SelectItem>
        <SelectItem value="dk">Denmark</SelectItem>
        <SelectItem value="fi">Finland</SelectItem>
        <SelectItem value="pl">Poland</SelectItem>
        <SelectItem value="cz">Czech Republic</SelectItem>
        <SelectItem value="ie">Ireland</SelectItem>
        <SelectItem value="pt">Portugal</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

LongList.parameters = {
  docs: {
    description: {
      story: `Select with many options showing scrolling behavior.`,
    },
  },
};

