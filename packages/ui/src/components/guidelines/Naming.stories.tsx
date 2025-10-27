import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";

const NamingConventionsPage: React.FC = () => {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            fontFamily: "Source Serif Pro",
            fontSize: "48px",
            fontWeight: 600,
            color: "#01332E",
            marginBottom: "12px",
          }}
        >
          File Naming Conventions
        </h1>
        <p style={{ color: "#495150", fontSize: "18px" }}>
          This guide outlines the naming conventions for Figma frames and files to maintain consistency with our Firebase event structure and development workflow.
        </p>
      </div>

      <section style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontFamily: "Source Serif Pro",
            fontSize: "32px",
            fontWeight: 600,
            color: "#01332E",
            marginBottom: "24px",
          }}
        >
          Figma Frame Naming
        </h2>

        <h3
          style={{
            fontFamily: "Source Serif Pro",
            fontSize: "24px",
            fontWeight: 600,
            color: "#01332E",
            marginBottom: "16px",
          }}
        >
          Structure
        </h3>
        <p style={{ marginBottom: "24px", fontSize: "16px", lineHeight: "24px" }}>
          All Figma frame names should follow the Firebase event structure:
        </p>
        <div style={{ 
          backgroundColor: "#f4fffa",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #DDECE7",
          marginBottom: "24px",
        }}>
          <code style={{ 
            fontSize: "24px",
            fontFamily: "monospace",
            color: "#01332E",
          }}>
            feature_flow/number
          </code>
        </div>

        <h3
          style={{
            fontFamily: "Source Serif Pro",
            fontSize: "24px",
            fontWeight: 600,
            color: "#01332E",
            marginBottom: "16px",
            marginTop: "32px",
          }}
        >
          Components
        </h3>
        <ul style={{ marginBottom: "24px", fontSize: "16px", lineHeight: "28px" }}>
          <li><strong>feature</strong>: The main feature or section of the app (e.g., `onboarding`, `transfer`, `card`)</li>
          <li><strong>flow</strong>: The specific user flow or action (e.g., `signup`, `send_money`, `activate`)</li>
          <li><strong>number</strong>: Sequential step number in the flow (e.g., `1`, `2`, `3`)</li>
        </ul>

        <h3
          style={{
            fontFamily: "Source Serif Pro",
            fontSize: "24px",
            fontWeight: 600,
            color: "#01332E",
            marginBottom: "16px",
            marginTop: "32px",
          }}
        >
          Examples
        </h3>

        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#01332E" }}>
            Onboarding Flows
          </h4>
          <div style={{ 
            backgroundColor: "#f9f9f9",
            padding: "16px",
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "14px",
          }}>
            <div style={{ marginBottom: "8px" }}>onboarding_signup/1</div>
            <div style={{ marginBottom: "8px" }}>onboarding_signup/2</div>
            <div style={{ marginBottom: "8px" }}>onboarding_signup/3</div>
            <div style={{ marginBottom: "8px" }}>onboarding_verification/1</div>
            <div>onboarding_verification/2</div>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#01332E" }}>
            Money Transfer Flows
          </h4>
          <div style={{ 
            backgroundColor: "#f9f9f9",
            padding: "16px",
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "14px",
          }}>
            <div style={{ marginBottom: "8px" }}>transfer_send/1</div>
            <div style={{ marginBottom: "8px" }}>transfer_send/2</div>
            <div style={{ marginBottom: "8px" }}>transfer_send/3</div>
            <div style={{ marginBottom: "8px" }}>transfer_confirmation/1</div>
            <div>transfer_success/1</div>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#01332E" }}>
            Card Management Flows
          </h4>
          <div style={{ 
            backgroundColor: "#f9f9f9",
            padding: "16px",
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "14px",
          }}>
            <div style={{ marginBottom: "8px" }}>card_activate/1</div>
            <div style={{ marginBottom: "8px" }}>card_activate/2</div>
            <div style={{ marginBottom: "8px" }}>card_lock/1</div>
            <div style={{ marginBottom: "8px" }}>card_unlock/1</div>
            <div>card_details/1</div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontFamily: "Source Serif Pro",
            fontSize: "32px",
            fontWeight: 600,
            color: "#01332E",
            marginBottom: "24px",
          }}
        >
          Naming Rules
        </h2>

        <div style={{
          backgroundColor: '#e8f7df',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '24px',
          border: '1px solid #a4c1a4',
        }}>
          <h3 style={{ fontFamily: "Source Serif Pro", fontSize: "20px", fontWeight: 600, color: "#01332E", marginTop: 0 }}>
            Do's ✓
          </h3>
          <ul style={{ fontSize: "16px", lineHeight: "28px" }}>
            <li><strong>Use lowercase</strong> for all parts</li>
            <li><strong>Use underscores</strong> to separate feature and flow</li>
            <li><strong>Use forward slash</strong> before the number</li>
            <li><strong>Be specific</strong> about the feature and flow</li>
            <li><strong>Number sequentially</strong> starting from 1</li>
            <li><strong>Group related screens</strong> under the same feature_flow</li>
          </ul>
          <div style={{ marginTop: "16px" }}>
            <p style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>Examples:</p>
            <div style={{ 
              backgroundColor: "#ffffff",
              padding: "12px",
              borderRadius: "8px",
              fontFamily: "monospace",
              fontSize: "14px",
            }}>
              <div>✓ onboarding_signup/1</div>
              <div>✓ transfer_send_money/3</div>
              <div>✓ card_lock/1</div>
              <div>✓ account_settings_profile/2</div>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#ffebe9',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '24px',
          border: '1px solid #b39595',
        }}>
          <h3 style={{ fontFamily: "Source Serif Pro", fontSize: "20px", fontWeight: 600, color: "#01332E", marginTop: 0 }}>
            Don'ts ✗
          </h3>
          <ul style={{ fontSize: "16px", lineHeight: "28px" }}>
            <li><strong>Don't use spaces</strong> (use underscores instead)</li>
            <li><strong>Don't use capital letters</strong></li>
            <li><strong>Don't use special characters</strong> (except underscore and slash)</li>
            <li><strong>Don't skip numbers</strong> in sequences</li>
            <li><strong>Don't use vague names</strong> like "screen1" or "page"</li>
          </ul>
          <div style={{ marginTop: "16px" }}>
            <p style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>Examples:</p>
            <div style={{ 
              backgroundColor: "#ffffff",
              padding: "12px",
              borderRadius: "8px",
              fontFamily: "monospace",
              fontSize: "14px",
            }}>
              <div>✗ Onboarding Signup/1 (capitals and spaces)</div>
              <div>✗ onboarding-signup-1 (hyphens instead of slash)</div>
              <div>✗ Screen1 (not descriptive)</div>
              <div>✗ transfer_send/4 (if steps 1-3 don't exist)</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontFamily: "Source Serif Pro",
            fontSize: "32px",
            fontWeight: 600,
            color: "#01332E",
            marginBottom: "24px",
          }}
        >
          Firebase Event Mapping
        </h2>
        <p style={{ marginBottom: "24px", fontSize: "16px", lineHeight: "24px" }}>
          The frame naming structure directly maps to Firebase Analytics events:
        </p>

        <div style={{ 
          backgroundColor: "#f9f9f9",
          padding: "24px",
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          marginBottom: "24px",
        }}>
          <h4 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#01332E" }}>
            Figma Frame
          </h4>
          <code style={{ fontSize: "14px", fontFamily: "monospace" }}>
            transfer_send_money/2
          </code>
        </div>

        <div style={{ 
          backgroundColor: "#f9f9f9",
          padding: "24px",
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
          marginBottom: "24px",
        }}>
          <h4 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#01332E" }}>
            Firebase Event
          </h4>
          <pre style={{ 
            fontSize: "14px",
            fontFamily: "monospace",
            margin: 0,
            backgroundColor: "#ffffff",
            padding: "16px",
            borderRadius: "8px",
            overflow: "auto",
          }}>
{`analytics.logEvent('screen_view', {
  screen_name: 'transfer_send_money',
  screen_step: 2,
  firebase_screen_class: 'TransferSendMoneyScreen'
});`}
          </pre>
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontFamily: "Source Serif Pro",
            fontSize: "32px",
            fontWeight: 600,
            color: "#01332E",
            marginBottom: "24px",
          }}
        >
          Benefits
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
        }}>
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h4 style={{ marginTop: 0, color: '#01332E', fontSize: "18px", fontWeight: 600 }}>
              Consistency
            </h4>
            <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: "20px" }}>
              Design, development, and analytics all use the same naming
            </p>
          </div>

          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h4 style={{ marginTop: 0, color: '#01332E', fontSize: "18px", fontWeight: 600 }}>
              Traceability
            </h4>
            <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: "20px" }}>
              Easy to trace user flows from design to analytics
            </p>
          </div>

          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h4 style={{ marginTop: 0, color: '#01332E', fontSize: "18px", fontWeight: 600 }}>
              Automation
            </h4>
            <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: "20px" }}>
              Frame names can auto-generate event tracking code
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontFamily: "Source Serif Pro",
            fontSize: "32px",
            fontWeight: 600,
            color: "#01332E",
            marginBottom: "24px",
          }}
        >
          Common Features & Flows
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#01332E" }}>
              Onboarding
            </h3>
            <div style={{ 
              backgroundColor: "#f9f9f9",
              padding: "16px",
              borderRadius: "8px",
              fontFamily: "monospace",
              fontSize: "14px",
            }}>
              <div style={{ marginBottom: "4px" }}>onboarding_welcome/1</div>
              <div style={{ marginBottom: "4px" }}>onboarding_signup/1-5</div>
              <div style={{ marginBottom: "4px" }}>onboarding_verification/1-3</div>
              <div>onboarding_success/1</div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#01332E" }}>
              Money Transfer
            </h3>
            <div style={{ 
              backgroundColor: "#f9f9f9",
              padding: "16px",
              borderRadius: "8px",
              fontFamily: "monospace",
              fontSize: "14px",
            }}>
              <div style={{ marginBottom: "4px" }}>transfer_select_recipient/1</div>
              <div style={{ marginBottom: "4px" }}>transfer_enter_amount/1</div>
              <div style={{ marginBottom: "4px" }}>transfer_review/1</div>
              <div style={{ marginBottom: "4px" }}>transfer_confirm/1</div>
              <div>transfer_success/1</div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#01332E" }}>
              Card Management
            </h3>
            <div style={{ 
              backgroundColor: "#f9f9f9",
              padding: "16px",
              borderRadius: "8px",
              fontFamily: "monospace",
              fontSize: "14px",
            }}>
              <div style={{ marginBottom: "4px" }}>card_list/1</div>
              <div style={{ marginBottom: "4px" }}>card_details/1</div>
              <div style={{ marginBottom: "4px" }}>card_activate/1-2</div>
              <div style={{ marginBottom: "4px" }}>card_lock/1</div>
              <div>card_unlock/1</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontFamily: "Source Serif Pro",
            fontSize: "32px",
            fontWeight: 600,
            color: "#01332E",
            marginBottom: "24px",
          }}
        >
          Quick Reference
        </h2>
        <div style={{
          backgroundColor: '#f4fffa',
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #acb4a2',
        }}>
          <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#01332E" }}>
            Template
          </h3>
          <code style={{ fontSize: "20px", fontFamily: "monospace" }}>
            [feature]_[flow]/[number]
          </code>
          
          <h3 style={{ fontSize: "18px", fontWeight: 600, marginTop: "24px", marginBottom: "12px", color: "#01332E" }}>
            Pattern
          </h3>
          <code style={{ fontSize: "14px", fontFamily: "monospace" }}>
            ^[a-z]+_[a-z_]+/[0-9]+$
          </code>

          <h3 style={{ fontSize: "18px", fontWeight: 600, marginTop: "24px", marginBottom: "12px", color: "#01332E" }}>
            Examples
          </h3>
          <div style={{ 
            backgroundColor: "#ffffff",
            padding: "16px",
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "14px",
          }}>
            <div style={{ marginBottom: "8px" }}>✓ onboarding_signup/1</div>
            <div style={{ marginBottom: "8px" }}>✓ transfer_send_money/3</div>
            <div style={{ marginBottom: "8px" }}>✓ card_activate/2</div>
            <div>✓ account_settings_security/1</div>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof NamingConventionsPage> = {
  title: "Guidelines/Naming Conventions",
  component: NamingConventionsPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const NamingConventions: StoryFn = () => <NamingConventionsPage />;

