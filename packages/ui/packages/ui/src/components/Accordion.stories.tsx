import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["single", "multiple"],
    },
    collapsible: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    type: "single",
    collapsible: true,
    className: "w-full",
    defaultValue: "item-1"
  }
};

export default meta;

const Template: StoryFn<typeof Accordion> = (args: any) => (
  <Accordion {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Product Information</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          Our flagship product combines cutting-edge technology with sleek
          design. Built with premium materials, it offers unparalleled
          performance and reliability.
        </p>
        <p>
          Key features include advanced processing capabilities, and an
          intuitive user interface designed for both beginners and experts.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Shipping Details</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          We offer worldwide shipping through trusted courier partners.
          Standard delivery takes 3-5 business days, while express shipping
          ensures delivery within 1-2 business days.
        </p>
        <p>
          All orders are carefully packaged and fully insured. Track your
          shipment in real-time through our dedicated tracking portal.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Return Policy</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>
          We stand behind our products with a comprehensive 30-day return
          policy. If you&apos;re not completely satisfied, simply return the
          item in its original condition.
        </p>
        <p>
          Our hassle-free return process includes free return shipping and
          full refunds processed within 48 hours of receiving the returned
          item.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Default: StoryFn<typeof Accordion> = Template.bind({});
Default.args = {};

export const Multiple: StoryFn<typeof Accordion> = Template.bind({});
Multiple.args = {
  type: "multiple",
  defaultValue: ["item-1", "item-2"]
};

export const NotCollapsible: StoryFn<typeof Accordion> = Template.bind({});
NotCollapsible.args = {
  collapsible: false
};

export const CustomContent: StoryFn<typeof Accordion> = (args: any) => (
  <Accordion {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is this product?</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          <p>This is a high-quality product designed for modern users.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Feature 1: Advanced functionality</li>
            <li>Feature 2: User-friendly interface</li>
            <li>Feature 3: Reliable performance</li>
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How do I get started?</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2">
          <p>Getting started is easy:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Download the application</li>
            <li>Create your account</li>
            <li>Follow the setup wizard</li>
            <li>Start using the product</li>
          </ol>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
CustomContent.args = {
  defaultValue: "item-1"
};
