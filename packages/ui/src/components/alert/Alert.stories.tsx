import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

// Simple icons for the demo (you can replace with your icon system later)
const CheckCircle2Icon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </svg>
);

const AlertCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const PopcornIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const WarningIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="16" x2="12" y2="12"/>
    <line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
      description: 'Alert variant',
    },
  },
};

export default meta;

export const Default: StoryFn<typeof Alert> = (args) => (
  <Alert {...args}>
    <CheckCircle2Icon />
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
  </Alert>
);

export const Destructive: StoryFn<typeof Alert> = (args) => (
  <Alert variant="destructive" {...args}>
    <AlertCircleIcon />
    <AlertTitle>Unable to process your payment.</AlertTitle>
    <AlertDescription>
      <p>Please verify your billing information and try again.</p>
      <ul className="list-inside list-disc text-sm">
        <li>Check your card details</li>
        <li>Ensure sufficient funds</li>
        <li>Verify billing address</li>
      </ul>
    </AlertDescription>
  </Alert>
);

export const DestructiveDismissible: StoryFn<typeof Alert> = () => {
  const [showAlert, setShowAlert] = React.useState(true);
  
  if (!showAlert) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Destructive alert has been dismissed.</p>
        <button 
          onClick={() => setShowAlert(true)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Show Alert
        </button>
      </div>
    );
  }
  
  return (
    <Alert variant="destructive" dismissible onDismiss={() => setShowAlert(false)}>
      <AlertCircleIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        Please verify your billing information and try again.
      </AlertDescription>
    </Alert>
  );
};

export const Success: StoryFn<typeof Alert> = (args) => (
  <Alert variant="success" {...args}>
    <CheckCircle2Icon />
    <AlertTitle>Success!</AlertTitle>
    <AlertDescription>
      Your changes have been saved successfully.
    </AlertDescription>
  </Alert>
);

export const SuccessDismissible: StoryFn<typeof Alert> = () => {
  const [showAlert, setShowAlert] = React.useState(true);
  
  if (!showAlert) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Success alert has been dismissed.</p>
        <button 
          onClick={() => setShowAlert(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Show Alert
        </button>
      </div>
    );
  }
  
  return (
    <Alert variant="success" dismissible onDismiss={() => setShowAlert(false)}>
      <CheckCircle2Icon />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  );
};

export const Warning: StoryFn<typeof Alert> = (args) => (
  <Alert variant="warning" {...args}>
    <WarningIcon />
    <AlertTitle>Storage Almost Full</AlertTitle>
    <AlertDescription>
      You're using 90% of your storage capacity. Consider upgrading your plan or deleting old files.
    </AlertDescription>
  </Alert>
);

export const WarningDismissible: StoryFn<typeof Alert> = () => {
  const [showAlert, setShowAlert] = React.useState(true);
  
  if (!showAlert) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Warning alert has been dismissed.</p>
        <button 
          onClick={() => setShowAlert(true)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Show Alert
        </button>
      </div>
    );
  }
  
  return (
    <Alert variant="warning" dismissible onDismiss={() => setShowAlert(false)}>
      <WarningIcon />
      <AlertTitle>Storage Almost Full</AlertTitle>
      <AlertDescription>
        You're using 90% of your storage capacity. Consider upgrading your plan or deleting old files.
      </AlertDescription>
    </Alert>
  );
};

export const Info: StoryFn<typeof Alert> = (args) => (
  <Alert variant="info" {...args}>
    <InfoIcon />
    <AlertTitle>New Feature Available</AlertTitle>
    <AlertDescription>
      We've added a new dashboard feature. Check it out in your account settings.
    </AlertDescription>
  </Alert>
);

export const InfoDismissible: StoryFn<typeof Alert> = () => {
  const [showAlert, setShowAlert] = React.useState(true);
  
  if (!showAlert) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Info alert has been dismissed.</p>
        <button 
          onClick={() => setShowAlert(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Show Alert
        </button>
      </div>
    );
  }
  
  return (
    <Alert variant="info" dismissible onDismiss={() => setShowAlert(false)}>
      <InfoIcon />
      <AlertTitle>New Feature Available</AlertTitle>
      <AlertDescription>
        We've added a new dashboard feature. Check it out in your account settings.
      </AlertDescription>
    </Alert>
  );
};

export const WithIconOnly: StoryFn<typeof Alert> = (args) => (
  <Alert {...args}>
    <PopcornIcon />
    <AlertTitle>
      This Alert has a title and an icon. No description.
    </AlertTitle>
  </Alert>
);

export const AllVariants: StoryFn = () => (
  <div className="grid w-full max-w-xl items-start gap-4">
    <Alert>
      <CheckCircle2Icon />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
    
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        <p>Please verify your billing information and try again.</p>
        <ul className="list-inside list-disc text-sm">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
          <li>Verify billing address</li>
        </ul>
      </AlertDescription>
    </Alert>
    
    <Alert variant="warning">
      <WarningIcon />
      <AlertTitle>Storage Almost Full</AlertTitle>
      <AlertDescription>
        You're using 90% of your storage capacity. Consider upgrading your plan or deleting old files.
      </AlertDescription>
    </Alert>
    
    <Alert variant="info">
      <InfoIcon />
      <AlertTitle>New Feature Available</AlertTitle>
      <AlertDescription>
        We've added a new dashboard feature. Check it out in your account settings.
      </AlertDescription>
    </Alert>
  </div>
);

export const WithoutIcon: StoryFn = () => (
  <div className="grid w-full max-w-xl items-start gap-4">
    <Alert>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This alert doesn't have an icon, just title and description.
      </AlertDescription>
    </Alert>
    
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        This destructive alert also doesn't have an icon.
      </AlertDescription>
    </Alert>
  </div>
);

export const Dismissible: StoryFn<typeof Alert> = () => {
  const [showAlert, setShowAlert] = React.useState(true);
  
  if (!showAlert) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500">Alert has been dismissed. Click the button below to show it again.</p>
        <button 
          onClick={() => setShowAlert(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Show Alert
        </button>
      </div>
    );
  }
  
  return (
    <Alert dismissible onDismiss={() => setShowAlert(false)}>
      <CheckCircle2Icon />
      <AlertTitle>This alert can be dismissed</AlertTitle>
      <AlertDescription>
        Click the X button on the right to dismiss this alert.
      </AlertDescription>
    </Alert>
  );
};
Dismissible.parameters = {
  docs: {
    description: {
      story: `A dismissible alert with a close button.`,
    },
  },
};

export const AllVariantsDismissible: StoryFn<typeof Alert> = () => {
  const alerts = [
    { variant: "default" as const, title: "Default Alert", description: "This is a default dismissible alert." },
    { variant: "destructive" as const, title: "Destructive Alert", description: "This is a destructive dismissible alert." },
    { variant: "success" as const, title: "Success Alert", description: "This is a success dismissible alert." },
    { variant: "warning" as const, title: "Warning Alert", description: "This is a warning dismissible alert." },
    { variant: "info" as const, title: "Info Alert", description: "This is an info dismissible alert." },
  ];
  
  const [visible, setVisible] = React.useState(alerts.map(() => true));
  
  return (
    <div className="space-y-4">
      <button 
        onClick={() => setVisible(alerts.map(() => true))}
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 mb-4"
      >
        Reset All Alerts
      </button>
      
      {alerts.map((alert, index) => 
        visible[index] && (
          <Alert 
            key={index}
            variant={alert.variant}
            dismissible
            onDismiss={() => setVisible(prev => {
              const newVisible = [...prev];
              newVisible[index] = false;
              return newVisible;
            })}
          >
            <CheckCircle2Icon />
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertDescription>{alert.description}</AlertDescription>
          </Alert>
        )
      )}
    </div>
  );
};
AllVariantsDismissible.parameters = {
  docs: {
    description: {
      story: `All alert variants can be made dismissible by setting the dismissible prop.`,
    },
  },
};

export const UsageExamples: StoryFn = () => (
  <div className="space-y-6 p-6 max-w-4xl">
    <div>
      <h2 className="text-2xl font-bold mb-4">Alert Usage Examples</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Success Messages</h3>
          <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Account Created Successfully</AlertTitle>
            <AlertDescription>
              Welcome! Your account has been created and you can now access all features.
            </AlertDescription>
          </Alert>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Error Messages</h3>
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Login Failed</AlertTitle>
            <AlertDescription>
              The email or password you entered is incorrect. Please try again.
            </AlertDescription>
          </Alert>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Information</h3>
          <Alert>
            <PopcornIcon />
            <AlertTitle>New Feature Available</AlertTitle>
            <AlertDescription>
              We've added a new dashboard feature. Check it out in your account settings.
            </AlertDescription>
          </Alert>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Warning</h3>
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Storage Almost Full</AlertTitle>
            <AlertDescription>
              You're using 90% of your storage. Consider upgrading your plan or deleting old files.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  </div>
);
