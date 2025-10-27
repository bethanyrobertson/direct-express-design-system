import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Link } from "../ui/link";

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    external: {
      control: 'boolean',
      description: 'Opens in new tab',
    },
    href: {
      control: 'text',
      description: 'URL to navigate to',
    },
    children: {
      control: 'text',
      description: 'Link text/content',
    },
  },
};

export default meta;

export const Default: StoryFn<typeof Link> = (args) => (
  <Link {...args}>Link text</Link>
);
Default.args = {
  href: '#',
};

// Showcase all link states
export const AllStates: StoryFn = () => (
  <div style={{ padding: '40px', maxWidth: '600px' }}>
    <h2 style={{ 
      fontFamily: 'Source Serif Pro', 
      fontSize: '28px', 
      marginBottom: '32px',
      color: '#02514e',
    }}>
      Link States
    </h2>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Enabled (Default)</div>
        <Link href="#">Link text</Link>
        <div style={{ fontSize: '11px', color: '#999', marginTop: '4px', fontFamily: 'monospace' }}>
          Color: #0070c9 (--Schemes-Links-default)
        </div>
      </div>
      
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Hover (hover over this link)</div>
        <Link href="#">Hover me</Link>
        <div style={{ fontSize: '11px', color: '#999', marginTop: '4px', fontFamily: 'monospace' }}>
          Color: #0163b0 (--Schemes-Links-hover)
        </div>
      </div>
      
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Focused (tab to focus)</div>
        <Link href="#">Focus me</Link>
        <div style={{ fontSize: '11px', color: '#999', marginTop: '4px', fontFamily: 'monospace' }}>
          Color: #0163b0 + outline
        </div>
      </div>
      
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Pressed (click and hold)</div>
        <Link href="#">Click me</Link>
        <div style={{ fontSize: '11px', color: '#999', marginTop: '4px', fontFamily: 'monospace' }}>
          Color: #005497 (--Schemes-Links-pressed)
        </div>
      </div>
      
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>Disabled</div>
        <Link disabled>Disabled link</Link>
        <div style={{ fontSize: '11px', color: '#999', marginTop: '4px', fontFamily: 'monospace' }}>
          Color: #879d9c (--Schemes-Links-disabled)
        </div>
      </div>
    </div>
  </div>
);

// Usage examples
export const UsageExamples: StoryFn = () => (
  <div style={{ padding: '40px', maxWidth: '800px' }}>
    <h2 style={{ 
      fontFamily: 'Source Serif Pro', 
      fontSize: '28px', 
      marginBottom: '24px',
      color: '#02514e',
    }}>
      Link Usage Examples
    </h2>
    
    {/* In paragraphs */}
    <section style={{ marginBottom: '32px' }}>
      <h3 style={{ marginBottom: '12px', color: '#02514e' }}>In Text</h3>
      <p style={{ lineHeight: '1.6', color: '#0b1f1e' }}>
        This is a paragraph with an <Link href="#">inline link</Link> that 
        demonstrates how links appear within body text. You can also have{' '}
        <Link href="https://example.com" external>external links</Link> that 
        open in a new tab.
      </p>
    </section>
    
    {/* Navigation */}
    <section style={{ marginBottom: '32px' }}>
      <h3 style={{ marginBottom: '12px', color: '#02514e' }}>Navigation</h3>
      <nav style={{ display: 'flex', gap: '24px' }}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </section>
    
    {/* Footer links */}
    <section style={{ 
      padding: '24px', 
      backgroundColor: '#f4f3ed', 
      borderRadius: '12px',
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '16px', color: '#02514e' }}>Footer Links</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#02514e' }}>Company</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="#">About Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Press</Link>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#02514e' }}>Resources</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="#">Documentation</Link>
            <Link href="#">API Reference</Link>
            <Link href="#">Support</Link>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#02514e' }}>Legal</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Accessibility demo
export const Accessibility: StoryFn = () => (
  <div style={{ padding: '40px', maxWidth: '600px' }}>
    <h2 style={{ marginBottom: '24px', color: '#02514e' }}>Accessibility Features</h2>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <strong>Keyboard Navigation</strong>
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          Try tabbing through these links:
        </p>
        <div style={{ marginTop: '12px', display: 'flex', gap: '16px' }}>
          <Link href="#">First Link</Link>
          <Link href="#">Second Link</Link>
          <Link href="#">Third Link</Link>
        </div>
      </div>
      
      <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <strong>Focus Indicator</strong>
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          Links show a visible focus outline when focused via keyboard
        </p>
      </div>
      
      <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <strong>External Links</strong>
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
          External links automatically get{' '}
          <code style={{ background: '#e0e0e0', padding: '2px 6px', borderRadius: '4px' }}>
            target="_blank" rel="noopener noreferrer"
          </code>
        </p>
        <div style={{ marginTop: '12px' }}>
          <Link href="https://google.com" external>Google</Link>
        </div>
      </div>
    </div>
  </div>
);
