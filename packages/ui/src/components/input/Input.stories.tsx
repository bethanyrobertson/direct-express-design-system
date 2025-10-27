import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Input } from "../ui/input";

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size variant',
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Input variant',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export default meta;

export const Default: StoryFn<typeof Input> = (args) => (
  <Input {...args} placeholder="Enter text..." />
);
Default.args = {
  type: 'text',
};

export const AllSizes: StoryFn = () => (
  <div className="space-y-4 w-80">
    <div>
      <label className="block text-sm font-medium mb-2">Small</label>
      <Input size="sm" placeholder="Small input" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Medium (Default)</label>
      <Input size="md" placeholder="Medium input" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Large</label>
      <Input size="lg" placeholder="Large input" />
    </div>
  </div>
);

export const AllVariants: StoryFn = () => (
  <div className="space-y-4 w-80">
    <div>
      <label className="block text-sm font-medium mb-2">Default</label>
      <Input variant="default" placeholder="Default input" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Error</label>
      <Input variant="error" placeholder="Error input" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Success</label>
      <Input variant="success" placeholder="Success input" />
    </div>
  </div>
);

export const InputTypes: StoryFn = () => (
  <div className="space-y-4 w-80">
    <div>
      <label className="block text-sm font-medium mb-2">Text</label>
      <Input type="text" placeholder="Enter text" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Email</label>
      <Input type="email" placeholder="Enter email" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Password</label>
      <Input type="password" placeholder="Enter password" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Number</label>
      <Input type="number" placeholder="Enter number" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Search</label>
      <Input type="search" placeholder="Search..." />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">URL</label>
      <Input type="url" placeholder="https://example.com" />
    </div>
  </div>
);

export const States: StoryFn = () => (
  <div className="space-y-4 w-80">
    <div>
      <label className="block text-sm font-medium mb-2">Normal</label>
      <Input placeholder="Normal state" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Focused</label>
      <Input placeholder="Click to focus" autoFocus />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Disabled</label>
      <Input placeholder="Disabled input" disabled />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">With Value</label>
      <Input defaultValue="Pre-filled value" />
    </div>
  </div>
);

export const WithLabels: StoryFn = () => (
  <div className="space-y-6 w-96">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Full Name
      </label>
      <Input id="name" placeholder="John Doe" />
    </div>
    
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Email Address
      </label>
      <Input id="email" type="email" placeholder="john@example.com" />
    </div>
    
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Password
      </label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
    
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Phone Number
      </label>
      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
    </div>
  </div>
);

export const FormExample: StoryFn = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! Check console for data.');
    console.log('Form data:', formData);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Sign Up Form</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              First Name
            </label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              placeholder="John"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Last Name
            </label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              placeholder="Doe"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            placeholder="Enter password"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
