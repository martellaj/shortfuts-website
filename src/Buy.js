import React, { useState } from "react";
import "./App.css";
import emailScreenshot from "./email.png";
import paypalScreenshot from "./paypal.png";
import creditcardScreenshot from "./creditcard.png";

function Buy() {
  const [purchaseOption, setPurchaseOption] = useState("");
  const [step2Complete, setStep2Complete] = useState(false);
  const [step3Complete, setStep3Complete] = useState(false);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>buy shortfuts premium</h2>

      <p style={{ lineHeight: "1.4" }}>
        <span style={{ backgroundColor: "lightyellow" }}>
          shortfuts premium
        </span>{" "}
        is tied to your Google Chrome account. Use the buttons below to add
        premium time (1 month, 3 months, or 12 months). You can add additional
        premium time at any time!
      </p>

      {/* STEP #1 */}
      <div style={{ marginBottom: "6px", fontWeight: "bold" }}>
        1. Choose your payment option
      </div>
      <div>
        <div>
          <input
            type="radio"
            value="PayPal"
            name="paymentOption"
            onChange={(e) => {
              setPurchaseOption("PayPal");
              setStep2Complete(false);
              setStep3Complete(false);
            }}
          />{" "}
          PayPal
        </div>
        <div>
          <input
            type="radio"
            value="Credit"
            name="paymentOption"
            onChange={(e) => {
              setPurchaseOption("CreditCard");
              setStep2Complete(false);
              setStep3Complete(false);
            }}
          />{" "}
          Credit card
        </div>
      </div>

      {/* STEP #2 */}
      {purchaseOption && (
        <div style={{ marginTop: "24px" }}>
          <div style={{ marginBottom: "6px", fontWeight: "bold" }}>
            2. Get your shortfuts account email address
          </div>
          <div>
            Simply open the app's pop-up, and copy the email address listed next
            to "Your account". This email will be used as the{" "}
            <strong>contact email</strong> for your purchase.
            <img style={{ marginTop: "6px" }} src={emailScreenshot} />
          </div>

          {!step2Complete && (
            <button
              style={{ marginTop: "12px" }}
              onClick={(e) => setStep2Complete(true)}
            >
              ✅ I got my shortfuts account email address!
            </button>
          )}
        </div>
      )}

      {/* STEP #3 */}
      {step2Complete && (
        <div style={{ marginTop: "24px" }}>
          <div style={{ marginBottom: "6px", fontWeight: "bold" }}>
            3. Use your shortfuts account email address as your contact email
            when you buy
          </div>
          {purchaseOption === "CreditCard" && (
            <div>
              Ensure the contact email you provide matches your shortfuts
              account email address.
              <img style={{ marginTop: "6px" }} src={creditcardScreenshot} />
            </div>
          )}
          {purchaseOption === "PayPal" && (
            <div>
              <div>
                After you log into your PayPal and click "Purchase", you'll be
                redirected back to the store page.{" "}
                <span style={{ backgroundColor: "chartreuse" }}>
                  At this point, you must make sure the contact email matches
                  your shortfuts account email address.
                </span>{" "}
                By default, it'll be your PayPal email address. If they are not
                the same, click the "Change" button and change it. This is
                essential!
              </div>
              <img style={{ marginTop: "6px" }} src={paypalScreenshot} />
            </div>
          )}

          {!step3Complete && (
            <button
              style={{ marginTop: "12px" }}
              onClick={(e) => setStep3Complete(true)}
            >
              ✅ I understand!
            </button>
          )}
        </div>
      )}

      {/* STEP #4 */}
      {step3Complete && (
        <div style={{ marginTop: "24px" }}>
          <div style={{ marginBottom: "6px", fontWeight: "bold" }}>
            4. Select an option and purchase shortfuts premium
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "125px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                role="link"
                onClick={() => {
                  window.open(
                    "https://shortfuts.myshopify.com/products/copy-of-shortfuts-premium-1-month",
                    "_blank"
                  );
                }}
                style={{ marginRight: "40px", marginRight: "0" }}
              >
                🌟 buy 1 month
              </button>
              <em>$2.00/month</em>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "125px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                role="link"
                onClick={() => {
                  window.open(
                    "https://shortfuts.myshopify.com/products/copy-of-shortfuts-premium-6-months",
                    "_blank"
                  );
                }}
                style={{ marginRight: "40px", marginRight: "0" }}
              >
                🌟 buy 3 months
              </button>
              <em>$1.66/month</em>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "125px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                role="link"
                onClick={() => {
                  window.open(
                    "https://shortfuts.myshopify.com/products/shortfuts-premium-for-fifa-21",
                    "_blank"
                  );
                }}
                style={{ marginRight: "40px", marginRight: "0" }}
              >
                🌟 buy 12 months
              </button>
              <em>$1.25/month</em>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buy;
