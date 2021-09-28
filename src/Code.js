import React, { useState } from "react";

export default function Code() {
  const [orderNumber, setOrderNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [code, setCode] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
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
              "This order is too old to be looked up this way. Please screenshot this page and send it to shortfuts@gmail.com."
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
        {code && <div style={{ fontWeight: "bold" }}>{code}</div>}
      </div>
    </div>
  );
}
