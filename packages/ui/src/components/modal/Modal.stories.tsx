import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Modal, useModal } from "../ui/modal";
import { Button } from "../ui/button";
import CalendarLarge from "../../assets/illustrations/svg/calendar-large.svg";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Modal dialogs interrupt the user flow to display important information or require user input. They appear on top of the main content with a backdrop overlay.`,
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the modal is open",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "fullscreen"],
      description: "Modal size",
    },
    showCloseButton: {
      control: "boolean",
      description: "Show close button in header",
    },
    closeOnBackdropClick: {
      control: "boolean",
      description: "Close when clicking backdrop",
    },
    closeOnEscape: {
      control: "boolean",
      description: "Close when pressing Escape",
    },
  },
};

export default meta;

export const Default: StoryFn = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div style={{ padding: "40px", backgroundColor: "#FBFAF8", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "16px", fontFamily: "Source Serif Pro" }}>Payment Confirmation Modal</h2>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Modal with illustration matching design specifications.
      </p>
      <Button onClick={openModal}>Schedule Payment</Button>

      <Modal
        open={isOpen}
        onClose={closeModal}
        size="small"
        actions={
          <>
            <Button fullWidth onClick={closeModal} variant="filled">
              Add More Payees
            </Button>
            <Button fullWidth onClick={closeModal} variant="outlined">
              Back to Bill Pay
            </Button>
          </>
        }
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            padding: "8px 0",
          }}
        >
          {/* Illustration - 96px as per design specs */}
          <div style={{ width: "96px", height: "96px" }}>
            <img src={CalendarLarge} alt="Calendar" style={{ width: "100%", height: "100%" }} />
          </div>

          {/* Headline */}
          <h3
            style={{
              fontFamily: "Source Serif Pro",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "32px",
              letterSpacing: "0",
              color: "#0c1f1e",
              margin: 0,
              textAlign: "center",
            }}
          >
            You scheduled a payment!
          </h3>

          {/* Supporting Text */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}
          >
            <p
              style={{
                fontFamily: "Noto Sans",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "0.15px",
                color: "#060808",
                margin: 0,
                textAlign: "center",
              }}
            >
              $50.00 will be paid to Xfinity Wifi
            </p>

            {/* Additional Info */}
            <p
              style={{
                fontFamily: "Noto Sans",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.25px",
                color: "#060808",
                margin: 0,
                textAlign: "center",
              }}
            >
              Checks are mailed next business day. Please allow 4-7 business days for delivery.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

Default.parameters = {
  docs: {
    description: {
      story: `A modal with illustration and confirmation message.`,
    },
  },
};

export const DifferentSizes: StoryFn = () => {
  const { isOpen: smallOpen, openModal: openSmall, closeModal: closeSmall } = useModal();
  const { isOpen: mediumOpen, openModal: openMedium, closeModal: closeMedium } = useModal();
  const { isOpen: largeOpen, openModal: openLarge, closeModal: closeLarge } = useModal();
  const { isOpen: fullscreenOpen, openModal: openFullscreen, closeModal: closeFullscreen } = useModal();

  return (
    <div style={{ padding: "40px", backgroundColor: "#FBFAF8", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "32px", fontFamily: "Source Serif Pro" }}>Modal Sizes</h2>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Button onClick={openSmall}>Small Modal</Button>
        <Button onClick={openMedium}>Medium Modal</Button>
        <Button onClick={openLarge}>Large Modal</Button>
        <Button onClick={openFullscreen}>Fullscreen Modal</Button>
      </div>

      <Modal open={smallOpen} onClose={closeSmall} size="small" title="Small Modal">
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <p>This is a small modal (314px wide).</p>
        </div>
      </Modal>

      <Modal
        open={mediumOpen}
        onClose={closeMedium}
        size="medium"
        title="Medium Modal"
        actions={
          <>
            <Button onClick={closeMedium} variant="filled">
              OK
            </Button>
          </>
        }
      >
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <p>This is a medium modal (560px max width).</p>
        </div>
      </Modal>

      <Modal
        open={largeOpen}
        onClose={closeLarge}
        size="large"
        title="Large Modal"
        actions={
          <>
            <Button onClick={closeLarge} variant="filled">
              OK
            </Button>
          </>
        }
      >
        <div style={{ padding: "20px 0" }}>
          <p>This is a large modal (800px max width).</p>
          <p>It's suitable for more detailed content.</p>
        </div>
      </Modal>

      <Modal open={fullscreenOpen} onClose={closeFullscreen} size="fullscreen" title="Fullscreen Modal">
        <div style={{ padding: "20px 0" }}>
          <p>This is a fullscreen modal that takes up the entire viewport.</p>
        </div>
      </Modal>
    </div>
  );
};

DifferentSizes.parameters = {
  docs: {
    description: {
      story: `Modal components in different sizes.`,
    },
  },
};

export const WithCustomContent: StoryFn = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div style={{ padding: "40px", backgroundColor: "#FBFAF8", minHeight: "100vh" }}>
      <Button onClick={openModal}>Open Modal</Button>

      <Modal open={isOpen} onClose={closeModal} size="medium" title="Custom Content Modal">
        <div style={{ width: "100%", padding: "20px 0" }}>
          <h4 style={{ marginBottom: "16px", fontFamily: "Noto Sans" }}>Card Details</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: 600 }}>
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: 600 }}>
                  Expiry
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "4px", fontSize: "14px", fontWeight: 600 }}>
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

WithCustomContent.parameters = {
  docs: {
    description: {
      story: `Modal with custom form content.`,
    },
  },
};

