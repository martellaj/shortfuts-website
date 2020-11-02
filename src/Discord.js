import React from "react";
import newServer from "./newserver.png";
import createChannel from "./createchannel.png";
import cog from "./cog.png";
import webhooks from "./webhooks.png";
import copyhook from "./copyhook.png";

export default function Discord() {
  return (
    <div>
      <h2>how to create your own discord channel for notifications</h2>

      <div>
        <h4>1. Create a server if you don't have one already.</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ marginTop: "12px" }} src={newServer} />
        </div>
      </div>

      <div>
        <h4>
          2. Create a channel where you'd like the messages to go if you don't
          have one already.
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ marginTop: "12px" }} src={createChannel} />
        </div>
      </div>

      <div>
        <h4>
          3. Open settings (cog next to the channel name) and go to the
          "Integrations" section.
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ marginTop: "12px" }} src={cog} />
        </div>
      </div>

      <div>
        <h4>4. Open the channel's webhooks by clicking "View Webhooks".</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ marginTop: "12px" }} src={webhooks} />
        </div>
      </div>

      <div>
        <h4>
          5. Copy the webhook URL and paste it in the appropriate field in the
          shortfuts auto app.
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ marginTop: "12px" }} src={copyhook} />
        </div>
      </div>
    </div>
  );
}
