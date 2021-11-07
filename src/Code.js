import React, { useState } from "react";
import "./Code.css";

export default function Code() {
  const [orderNumber, setOrderNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [code, setCode] = useState(null);
  const [isAutobuyerOrder, setIsAutobuyerOrder] = useState(false);

  return (
    <div
      id="codeContainer"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      <h2>shortfuts order redemption</h2>
      <p style={{ marginTop: "0px", marginBottom: "24px" }}>
        Your order number can be found in the receipt sent to the email address
        you provided at checkout (subject is "Order #12345 confirmed").
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "150px" }}>order number:</div>
        <input
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          type="number"
          style={{ marginLeft: "12px" }}
          placeholder="i.e. 16420"
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
        <div style={{ width: "150px" }}>email:</div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginLeft: "12px" }}
        />
      </div>

      <button
        style={{ marginTop: "12px" }}
        onClick={async () => {
          setCode(null);
          setError(null);

          if (!orderNumber || !email) {
            setError("Please fill in all fields.");
            return;
          }

          const parsedOrderNumber = parseInt(orderNumber);
          if (parsedOrderNumber < 17531) {
            setError(
              "This order is too old to be looked up this way. Please screenshot this page and send it to shortfuts@gmail.com if you think it's incorrect."
            );
            return;
          }

          const resp = await fetch(
            `https://shortfuts-server.herokuapp.com/get-code/${orderNumber}/${email}`,
            {
              method: "GET",
            }
          );

          const response = await resp.json();

          if (response.error) {
            setError(response.error);
          } else if (response.code) {
            setCode(response.code);
            setIsAutobuyerOrder(response.isAutobuyerOrder);
          } else {
            setError(
              "An unspecified error occurred. Please screenshot this page and send it to shortfuts@gmail.com."
            );
          }
        }}
      >
        submit
      </button>

      <div
        style={{ marginTop: "12px", display: "flex", justifyContent: "center" }}
      >
        {error && <div style={{ color: "red" }}>{error}</div>}

        {!error && code && !isAutobuyerOrder && (
          <div>
            Here's your code: <b>{code}</b>
          </div>
        )}

        {!error && code && isAutobuyerOrder && (
          <div>
            <ol>
              <li>
                Install shortfuts auto{" "}
                <a
                  href="https://chrome.google.com/webstore/detail/shortfuts-auto/ejhpmpgfaoiecijmggjldlmjligknbnb"
                  target="_blank"
                >
                  from the Chrome Web Store
                </a>
              </li>
              <li>
                Redeem your code:{" "}
                <span style={{ fontWeight: "bold" }}>{code}</span>
              </li>
              <li>
                Watch{" "}
                <a href="https://youtu.be/DF4acQeJ54Y" target="_blank">
                  the tutorial on YouTube
                </a>
              </li>
              <li>
                Join the Discord (
                <a href="https://bit.ly/sf-discord" target="_blank">
                  here's an invite
                </a>
                )
              </li>
              <li>
                DM the following to M'Boopi (M'Boopi the Mod#2892) to claim your
                special role that'll give you access to news, updates, and new
                versions sooner:{" "}
                <span style={{ fontWeight: "bold" }}>
                  !claim {code} {email}
                </span>
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
