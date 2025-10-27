import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { VirtualCard } from "../ui/virtual-card";

const meta: Meta<typeof VirtualCard> = {
  title: "Components/Virtual Card",
  component: VirtualCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A virtual debit/credit card component with realistic design. Supports Default, Locked, Deactivated states and Back view.`,
      },
    },
  },
  argTypes: {
    state: {
      control: "select",
      options: ["default", "locked", "deactivated"],
      description: "Card state",
    },
    showBack: {
      control: "boolean",
      description: "Show back of card",
    },
    cardNumber: {
      control: "text",
      description: "Card number (masked)",
    },
    cardHolder: {
      control: "text",
      description: "Cardholder name",
    },
    expiryDate: {
      control: "text",
      description: "Expiry date",
    },
    size: {
      control: "select",
      options: ["default", "small", "large"],
      description: "Size variant",
    },
  },
};

export default meta;

export const Default: StoryFn<typeof VirtualCard> = (args) => <VirtualCard {...args} />;

Default.args = {
  state: "default",
  cardNumber: "**** **** **** 1234",
  cardHolder: "JOHN DOE",
  expiryDate: "12/25",
};

Default.parameters = {
  docs: {
    description: {
      story: `A default active card showing card details.`,
    },
  },
};

export const AllStates: StoryFn = () => (
  <div style={{ padding: "40px", maxWidth: "1000px" }}>
    <h2
      style={{
        fontFamily: "Source Serif Pro",
        fontSize: "32px",
        marginBottom: "32px",
        color: "#01332E",
      }}
    >
      Virtual Card States
    </h2>

    <div style={{ display: "grid", gap: "32px" }}>
      {/* Default State */}
      <div>
        <h3 style={{ marginBottom: "16px", color: "#01332E" }}>Default</h3>
        <VirtualCard
          state="default"
          cardNumber="**** **** **** 1234"
          cardHolder="JOHN DOE"
          expiryDate="12/25"
        />
        <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
          Active card showing card details
        </p>
      </div>

      {/* Locked State */}
      <div>
        <h3 style={{ marginBottom: "16px", color: "#01332E" }}>Locked</h3>
        <VirtualCard state="locked" />
        <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
          Card is temporarily locked by user
        </p>
      </div>

      {/* Deactivated State */}
      <div>
        <h3 style={{ marginBottom: "16px", color: "#01332E" }}>Deactivated</h3>
        <VirtualCard state="deactivated" />
        <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
          Card is permanently deactivated
        </p>
      </div>

      {/* Card Back */}
      <div>
        <h3 style={{ marginBottom: "16px", color: "#01332E" }}>Card Back</h3>
        <VirtualCard showBack />
        <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
          Back of the card showing CVV and signature area
        </p>
      </div>
    </div>
  </div>
);

AllStates.parameters = {
  docs: {
    description: {
      story: `Showcase of all card states.`,
    },
  },
};

export const DifferentSizes: StoryFn = () => (
  <div style={{ padding: "40px", maxWidth: "1000px" }}>
    <h2
      style={{
        fontFamily: "Source Serif Pro",
        fontSize: "32px",
        marginBottom: "32px",
        color: "#01332E",
      }}
    >
      Different Sizes
    </h2>

    <div style={{ display: "grid", gap: "32px" }}>
      <div>
        <h3 style={{ marginBottom: "16px", color: "#01332E" }}>Small</h3>
        <VirtualCard state="default" size="small" cardNumber="**** **** **** 1234" cardHolder="JOHN DOE" />
        <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>197px × 124px</p>
      </div>

      <div>
        <h3 style={{ marginBottom: "16px", color: "#01332E" }}>Default</h3>
        <VirtualCard state="default" cardNumber="**** **** **** 1234" cardHolder="JOHN DOE" />
        <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>295px × 186px</p>
      </div>

      <div>
        <h3 style={{ marginBottom: "16px", color: "#01332E" }}>Large</h3>
        <VirtualCard state="default" size="large" cardNumber="**** **** **** 1234" cardHolder="JOHN DOE" />
        <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>393px × 248px</p>
      </div>
    </div>
  </div>
);

DifferentSizes.parameters = {
  docs: {
    description: {
      story: `Virtual cards in different sizes.`,
    },
  },
};

export const CardList: StoryFn = () => {
  const [cards, setCards] = React.useState([
    { id: 1, number: "**** **** **** 1234", holder: "JOHN DOE", expiry: "12/25", state: "default" as const },
    { id: 2, number: "**** **** **** 5678", holder: "JANE SMITH", expiry: "06/26", state: "locked" as const },
    { id: 3, number: "**** **** **** 9012", holder: "BOB WILSON", expiry: "03/24", state: "deactivated" as const },
  ]);

  return (
    <div style={{ padding: "40px", maxWidth: "1200px" }}>
      <h2
        style={{
          fontFamily: "Source Serif Pro",
          fontSize: "32px",
          marginBottom: "24px",
          color: "#01332E",
        }}
      >
        My Cards
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(295px, 1fr))",
          gap: "24px",
        }}
      >
        {cards.map((card) => (
          <div key={card.id}>
            <VirtualCard
              state={card.state}
              cardNumber={card.number}
              cardHolder={card.holder}
              expiryDate={card.expiry}
              onClick={() => console.log(`Card ${card.id} clicked`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

CardList.parameters = {
  docs: {
    description: {
      story: `Example of multiple cards in a list.`,
    },
  },
};

export const UsageExample: StoryFn = () => (
  <div style={{ padding: "40px", maxWidth: "800px" }}>
    <div
      style={{
        padding: "32px",
        backgroundColor: "#FBFAF8",
        borderRadius: "16px",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "24px", color: "#01332E" }}>
        Your Primary Card
      </h3>

      <VirtualCard
        state="default"
        cardNumber="**** **** **** 1234"
        cardHolder="ALEX JOHNSON"
        expiryDate="12/25"
        onClick={() => alert("View card details")}
      />

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          gap: "12px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#02514E",
            color: "#FBFAF8",
            border: "none",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Freeze Card
        </button>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "transparent",
            color: "#02514E",
            border: "1px solid #02514E",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  </div>
);

UsageExample.parameters = {
  docs: {
    description: {
      story: `Usage example of the Virtual Card in context.`,
    },
  },
};

