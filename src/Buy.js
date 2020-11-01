import React, { useState } from "react";
import "./App.css";
import orderNumberScreenshot from "./orderNumber.png";
import redeemScreenshot from "./redeem.png";
import codeScreenshot from "./code.png";

function Buy() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>buy shortfuts premium</h2>

      <div style={{ marginTop: "36px", marginBottom: "36px" }}>
        <div className="ting">
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
              border: "black solid 1px",
              padding: "12px",
              backgroundColor: "lightgoldenrodyellow",
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
            <em style={{ fontWeight: "bold", color: "red" }}>$1.25/month</em>
          </div>
        </div>
      </div>

      {/* STEP #1 */}
      <div style={{ marginBottom: "36px", fontWeight: "bold" }}>
        1. Decide how much time (1 month, 3 months, or 12 months) you want to
        purchase.
      </div>

      {/* STEP #2 */}
      <div style={{ marginBottom: "36px", fontWeight: "bold" }}>
        2. Get your code that was sent to your email (check your spam folder if
        you don't see it).
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ marginTop: "12px", width: "450px" }}
            src={codeScreenshot}
          />
        </div>
      </div>

      {/* STEP #3 */}
      <div style={{ marginBottom: "36px", fontWeight: "bold" }}>
        3. Enter your order number in the box and press the "redeem" button.
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ marginTop: "12px", width: "450px" }}
            src={redeemScreenshot}
          />
        </div>
      </div>
    </div>
  );
}

export default Buy;
