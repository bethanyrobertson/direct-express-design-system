import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { CheckCircleSvg, ErrorSvg, WarningFilledSvg, HelpFilledSvg, NotificationsFilledSvg } from "../../assets/icons";

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
  <Alert variant="default" {...args}>
    <img src={CheckCircleSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(25%) sepia(55%) saturate(2000%) hue-rotate(95deg) brightness(0.9) contrast(1.1)' }} />
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
  </Alert>
);

export const Destructive: StoryFn<typeof Alert> = (args) => (
  <Alert variant="destructive" {...args}>
    <img src={ErrorSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(3000%) hue-rotate(340deg) brightness(0.7) contrast(1.3)' }} />
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
      <img src={ErrorSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(3000%) hue-rotate(340deg) brightness(0.7) contrast(1.3)' }} />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        Please verify your billing information and try again.
      </AlertDescription>
    </Alert>
  );
};

export const Success: StoryFn<typeof Alert> = (args) => (
  <Alert variant="success" {...args}>
    <img src={CheckCircleSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(25%) sepia(55%) saturate(2000%) hue-rotate(95deg) brightness(0.9) contrast(1.1)' }} />
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
      <img src={CheckCircleSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(25%) sepia(55%) saturate(2000%) hue-rotate(95deg) brightness(0.9) contrast(1.1)' }} />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  );
};

export const Warning: StoryFn<typeof Alert> = (args) => (
  <Alert variant="warning" {...args}>
    <img src={WarningFilledSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(30%) sepia(80%) saturate(2500%) hue-rotate(35deg) brightness(0.8) contrast(1.2)' }} />
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
      <img src={WarningFilledSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(30%) sepia(80%) saturate(2500%) hue-rotate(35deg) brightness(0.8) contrast(1.2)' }} />
      <AlertTitle>Storage Almost Full</AlertTitle>
      <AlertDescription>
        You're using 90% of your storage capacity. Consider upgrading your plan or deleting old files.
      </AlertDescription>
    </Alert>
  );
};

export const Info: StoryFn<typeof Alert> = (args) => (
  <Alert variant="info" {...args}>
    <img src={HelpFilledSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(8%) sepia(45%) saturate(2000%) hue-rotate(160deg) brightness(1.1) contrast(1.2)' }} />
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
      <img src={HelpFilledSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(8%) sepia(45%) saturate(2000%) hue-rotate(160deg) brightness(1.1) contrast(1.2)' }} />
      <AlertTitle>New Feature Available</AlertTitle>
      <AlertDescription>
        We've added a new dashboard feature. Check it out in your account settings.
      </AlertDescription>
    </Alert>
  );
};

export const WithIconOnly: StoryFn<typeof Alert> = (args) => (
  <Alert variant="default" {...args}>
    <img src={NotificationsFilledSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(25%) sepia(55%) saturate(2000%) hue-rotate(95deg) brightness(0.9) contrast(1.1)' }} />
    <AlertTitle>
      This Alert has a title and an icon. No description.
    </AlertTitle>
  </Alert>
);

export const AllVariants: StoryFn = () => (
  <div className="grid w-full max-w-xl items-start gap-4">
    <Alert variant="default">
      <img src={CheckCircleSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(25%) sepia(55%) saturate(2000%) hue-rotate(95deg) brightness(0.9) contrast(1.1)' }} />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
    
    <Alert variant="destructive">
      <img src={ErrorSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(3000%) hue-rotate(340deg) brightness(0.7) contrast(1.3)' }} />
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
      <img src={WarningFilledSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(30%) sepia(80%) saturate(2500%) hue-rotate(35deg) brightness(0.8) contrast(1.2)' }} />
      <AlertTitle>Storage Almost Full</AlertTitle>
      <AlertDescription>
        You're using 90% of your storage capacity. Consider upgrading your plan or deleting old files.
      </AlertDescription>
    </Alert>
    
    <Alert variant="info">
      <img src={HelpFilledSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(8%) sepia(45%) saturate(2000%) hue-rotate(160deg) brightness(1.1) contrast(1.2)' }} />
      <AlertTitle>New Feature Available</AlertTitle>
      <AlertDescription>
        We've added a new dashboard feature. Check it out in your account settings.
      </AlertDescription>
    </Alert>
  </div>
);

export const WithoutIcon: StoryFn = () => (
  <div className="grid w-full max-w-xl items-start gap-4">
    <Alert variant="default">
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
    <Alert variant="default" dismissible onDismiss={() => setShowAlert(false)}>
      <img src={CheckCircleSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(25%) sepia(55%) saturate(2000%) hue-rotate(95deg) brightness(0.9) contrast(1.1)' }} />
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
            <img src={CheckCircleSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(25%) sepia(55%) saturate(2000%) hue-rotate(95deg) brightness(0.9) contrast(1.1)' }} />
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
          <Alert variant="default">
            <img src={CheckCircleSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(25%) sepia(55%) saturate(2000%) hue-rotate(95deg) brightness(0.9) contrast(1.1)' }} />
            <AlertTitle>Account Created Successfully</AlertTitle>
            <AlertDescription>
              Welcome! Your account has been created and you can now access all features.
            </AlertDescription>
          </Alert>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Error Messages</h3>
          <Alert variant="destructive">
            <img src={ErrorSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(3000%) hue-rotate(340deg) brightness(0.7) contrast(1.3)' }} />
            <AlertTitle>Login Failed</AlertTitle>
            <AlertDescription>
              The email or password you entered is incorrect. Please try again.
            </AlertDescription>
          </Alert>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Information</h3>
          <Alert variant="default">
            <img src={NotificationsFilledSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(25%) sepia(55%) saturate(2000%) hue-rotate(95deg) brightness(0.9) contrast(1.1)' }} />
            <AlertTitle>New Feature Available</AlertTitle>
            <AlertDescription>
              We've added a new dashboard feature. Check it out in your account settings.
            </AlertDescription>
          </Alert>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Warning</h3>
          <Alert variant="destructive">
            <img src={ErrorSvg} alt="" style={{ width: '16px', height: '16px', filter: 'brightness(0) saturate(100%) invert(12%) sepia(85%) saturate(3000%) hue-rotate(340deg) brightness(0.7) contrast(1.3)' }} />
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
