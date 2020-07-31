import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [view, setView] = useState("");

  // update view based on view param ("v")
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const viewParam = urlParams.get("v");
    if (viewParam) {
      setView(viewParam);
    } else {
      setView("faq");
    }
  }, []);

  return <div className="App">{getContent(view)}</div>;
}

const getContent = (view) => {
  if (view === "") {
    return null;
  }

  if (view === "premium") {
    return (
      <div>
        <h2>shortfuts premium features</h2>

        <div className="faq">
          <span className="question">search + buy now (hands-free BIN)</span>
          <span className="answer">
            This is a shortcut that combines shortcuts (search and buy now) to
            create a very powerful shortcut that'll allow you to search and
            immediately buy the first result on the page. Perfect for sniping!
          </span>
        </div>

        <div className="faq">
          <span className="question">
            FUT Alert integration (real-time prices)
          </span>
          <span className="answer">
            Use the "display pricing data" shortcut to get the latest pricing
            data from FUT Alert brought directly into the web app so you can
            ensure you're buying or selling at the right price.
          </span>
        </div>

        <div className="faq">
          <span className="question">
            more powerful sniping (disable safety settings)
          </span>
          <span className="answer">
            You can disable the "buy now delay" and "frequent search warning"
            settings when you're premium. While these settings are there to make
            shortfuts a little safer, you can be comfortable disabling them (so
            long as you don't go crazy with it).
          </span>
        </div>

        <div className="faq">
          <span className="question">sniping guard (ignore back setting)</span>
          <span className="answer">
            This setting helps prevent you backing out of search results if
            you're sniping quickly. If there's a search result and you have this
            setting enabled, shortfuts will ignore the "back" shortcut
            momentarily so you don't miss a snipe.
          </span>
        </div>

        <div className="faq">
          <span className="question">sniping filter presets</span>
          <span className="answer">
            Premium users can save up to 5 sniping filter presets. After you
            create your sniping filter presets, then you can easily load them up
            with a shortcut.
          </span>
        </div>

        <div className="faq">
          <span className="question">select most recently listed card</span>
          <span className="answer">
            This setting will automatically select the most recently listed
            search result on the page which will give you a better chance at the
            snipe.
          </span>
        </div>
      </div>
    );
  } else {
    // faq
    return (
      <div>
        <h2>shortfuts faq</h2>

        <div className="faq">
          <span className="question">What is shortfuts?</span>
          <span className="answer">
            shortfuts is a Chrome extension that augments the FUT web app.
            Primarily, the extension allows you to assign keyboard shortcuts to
            common actions that you do in the web app to make you faster.
          </span>
        </div>

        <div className="faq">
          <span className="question">Can I get banned using shortfuts?</span>
          <span className="answer">
            Yes. All third party extensions are against EA's ToS. However,
            thousands of people have used shortfuts since FIFA 18 and permanent
            account bans are extremely rare. If you are using shortfuts and
            shortfuts only, your risk of ban is extremely low. The worst
            punishment people generally face is a temporary market ban for a few
            hours (which happens often when using the web app even if you're not
            using shortfuts).
          </span>
        </div>

        <div className="faq">
          <span className="question">
            How can I buy premium without using the Chrome Web Store?
          </span>
          <span className="answer">
            You can purchase premium access for the remainder of the current
            FIFA using PayPal. Please follow all of the instructions (or else
            I'll simply refund your payment and let you try again).
            <ol>
              <li>
                Find the email address you use for the Chrome Web Store by
                visiting{" "}
                <a href="http://chrome.google.com/webstore" target="_blank">
                  this link
                </a>{" "}
                and looking at the top-right corner. Copy this email address to
                your clipboard.
              </li>
              <li>
                Use{" "}
                <a
                  href="https://www.paypal.com/paypalme/martellaj/15usd"
                  target="_blank"
                >
                  this link
                </a>{" "}
                to send me $15 USD. When you click "Next", you'll be brought to
                a screen where you can add a note. Please paste your Chrome Web
                Store email address in the note section. If you miss this step,
                I will charge you an extra $5 USD when you try again.
              </li>
              <li>
                Be patient. This is a manual process. I will do my best to
                process your payment as fast as I can (generally within 48
                hours). When your payment is processed, you will receive an
                email with an install link.
              </li>
            </ol>
          </span>
        </div>

        <div className="faq">
          <span className="question">
            How come by shortcuts aren't working?
          </span>
          <span className="answer">
            If your shortcuts aren't working, please try clearing your cache and
            fully restarting Google Chrome. If your problem persists, please
            post in the{" "}
            <a href="https://discord.gg/UDAUHsf" target="_blank">
              #shortfuts-questions channel in my Discord server
            </a>
            .
          </span>
        </div>

        <div className="faq">
          <span className="question">
            How can I unsubscribe from shortfuts premium?
          </span>
          <span className="answer">
            If you really want to unsubscribe, simply go to your{" "}
            <a
              href="https://pay.google.com/payments/u/home#subscriptionsAndServices"
              target="_blank"
            >
              Google Pay subscriptions
            </a>{" "}
            page to manage your subscription.
          </span>
        </div>
      </div>
    );
  }
};

export default App;
