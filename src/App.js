import React, { useEffect, useState } from "react";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";

// test
// const stripePromise = loadStripe("pk_test_CzSGkLAPEdl9VcVmDNKvGd8Q00x4IyVhbt");

// prod
const stripePromise = loadStripe("pk_live_Dd6tmAPDrcaK7m20TDG1OhjI00MZibIg97");

function App() {
  const [view, setView] = useState("");

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);

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

  return (
    <div className="App">
      {getContent(
        view,
        option1,
        setOption1,
        option2,
        setOption2,
        option3,
        setOption3,
        option4,
        setOption4
      )}
    </div>
  );
}

const buyShortfutsMonthlySubscription = async (event) => {
  // Get Stripe.js instance
  const stripe = await stripePromise;

  // Call your backend to create the Checkout Session
  const response = await fetch(
    "https://shortfuts-server.azurewebsites.net/purchase-monthly",
    { method: "POST" }
  );
  // const response = await fetch("http://localhost:3000/purchase-monthly", {
  //   method: "POST",
  // });

  const session = await response.json();

  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  }
};

const buyShortfutsAnnualSubscription = async (event) => {
  // Get Stripe.js instance
  const stripe = await stripePromise;

  // Call your backend to create the Checkout Session
  const response = await fetch(
    "https://shortfuts-server.azurewebsites.net/purchase-annual",
    { method: "POST" }
  );
  // const response = await fetch("http://localhost:3000/purchase-annual", {
  //   method: "POST",
  // });

  const session = await response.json();

  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  }
};

const onTipClick = async () => {
  // Get Stripe.js instance
  const stripe = await stripePromise;

  // Call your backend to create the Checkout Session
  const response = await fetch("https://shortfuts-server.herokuapp.com/tip", {
    method: "POST",
  });

  const session = await response.json();

  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  }
};

const getContent = (
  view,
  option1,
  setOption1,
  option2,
  setOption2,
  option3,
  setOption3,
  option4,
  setOption4
) => {
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
  } else if (view === "privacy") {
    return (
      <div>
        <h1>Privacy Policy for shortfuts</h1>

        <p>
          At shortfuts, accessible from the shortfuts Google Chrome extension,
          one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by shortfuts and how we use it.
        </p>

        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>

        <h2>Log Files</h2>

        <p>
          shortfuts follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services' analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users' movement on the website, and gathering demographic information.
        </p>

        <h2>Privacy Policies</h2>

        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of shortfuts. Our Privacy Policy was created with
          the help of the{" "}
          <a href="https://www.privacypolicygenerator.info">
            Privacy Policy Generator
          </a>{" "}
          and the{" "}
          <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">
            Online Privacy Policy Generator
          </a>
          .
        </p>

        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on shortfuts, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>

        <p>
          Note that shortfuts has no access to or control over these cookies
          that are used by third-party advertisers.
        </p>

        <h2>Third Party Privacy Policies</h2>

        <p>
          shortfuts's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options. You may find a complete list of these
          Privacy Policies and their links here: Privacy Policy Links.
        </p>

        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites. What Are Cookies?
        </p>

        <h2>Children's Information</h2>

        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>

        <p>
          shortfuts does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>

        <h2>Online Privacy Policy Only</h2>

        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in shortfuts. This policy is not applicable to
          any information collected offline or via channels other than this
          website.
        </p>

        <h2>Consent</h2>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </p>
      </div>
    );
  } else if (view === "annual") {
    return (
      <div>
        <h2>shortfuts premium for FIFA 21</h2>

        <div className="faq">
          <span className="question">
            How can I buy premium for all of FIFA 21?
          </span>
          <span className="answer">
            <br />
            If you'd rather not have another subscription and want to purchase
            premium access for the remainder of the current FIFA, you can!
            Because of limitations Google has placed on the Chrome Web Store
            because of COVID-19, the only way to buy premium for all of FIFA 21
            is via PayPal. <br />
            <br /> If PayPal doesn't work for you, you can always subscribe via
            the Chrome Web Store through the app. <br />
            <br /> Please follow all of the instructions (or else I'll simply
            refund your payment and let you try again).
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
                a screen where you can add a note.{" "}
                <span style={{ backgroundColor: "lightblue" }}>
                  Please paste your Chrome Web Store email address in the note
                  section.
                </span>{" "}
                If you miss this step, I will charge you an extra $5 USD when
                you try again.
              </li>
              <li style={{ backgroundColor: "lightblue" }}>
                Be patient. This is a manual process. I will do my best to
                process your payment as fast as I can{" "}
                <strong>(generally within 48 hours)</strong>. When your payment
                is processed, you will receive an email with an install link.
              </li>
            </ol>
          </span>
        </div>
      </div>
    );
  } else if (view === "install") {
    return (
      <div>
        <h2>shortfuts premium for FIFA 21</h2>

        <div className="faq">
          Thanks for purchasing shortfuts premium for FIFA 21!
          <br />
          <br />
          Install a premium version of shortfuts using this link:{" "}
          <a
            target="_blank"
            href="https://chrome.google.com/webstore/detail/shortfuts-premium-for-fif/mdchpfpjdphgknacgbbalnpjljjdabkb"
          >
            https://chrome.google.com/webstore/detail/shortfuts-premium-for-fif/mdchpfpjdphgknacgbbalnpjljjdabkb
          </a>
          <br />
          Please make sure you disable or uninstall the regular version of
          shortfuts so the 2 versions do not collide with each other!
          <br />
          <br />
          Happy trading!
        </div>
      </div>
    );
  } else if (view === "install2") {
    return (
      <div>
        <h2>shortfuts premium for FIFA 21</h2>

        <div className="faq">
          Thanks for purchasing shortfuts premium for FIFA 21!
          <br />
          <br />
          Install a premium version of shortfuts using this link:{" "}
          <a
            target="_blank"
            href="https://chrome.google.com/webstore/detail/shortfuts-premium-for-fif/nnipdfpcchbdmlcpjhkchdlhfceggpba"
          >
            https://chrome.google.com/webstore/detail/shortfuts-premium-for-fif/nnipdfpcchbdmlcpjhkchdlhfceggpba
          </a>
          <br />
          Please make sure you disable or uninstall the regular version of
          shortfuts so the 2 versions do not collide with each other!
          <br />
          <br />
          Happy trading!
        </div>
      </div>
    );
  } else if (view === "auto") {
    return (
      <div>
        <h2>shortfuts auto for FIFA 21</h2>

        <div className="faq">
          Thanks for purchasing shortfuts auto for FIFA 21!
          <br />
          <br />
          Install shortfuts auto from this link:{" "}
          <a
            target="_blank"
            href="https://chrome.google.com/webstore/detail/shortfuts-auto/licncdcgncjnmkfcbmdikknkgojihecb"
          >
            https://chrome.google.com/webstore/detail/shortfuts-auto/licncdcgncjnmkfcbmdikknkgojihecb
          </a>
          <br />
          Send me an email or reach out on Discord (shortfuts#6568) to get an
          invite to the shortfuts auto Discord server!
        </div>
      </div>
    );
  } else if (view === "buy") {
    const enablePurchase = option1 && option2 && option3 && option4;

    return (
      <div style={{ textAlign: "center" }}>
        <h2>buy shortfuts premium</h2>
        <p style={{ lineHeight: "1.8" }}>
          There are 2 options for purchasing shortfuts premium. You can{" "}
          <span style={{ backgroundColor: "lightyellow" }}>
            subscribe monthly at $1.50 USD per month
          </span>{" "}
          or{" "}
          <span style={{ backgroundColor: "lightblue" }}>
            subscribe annually for $15.00 USD per year (
            <strong>2 months free</strong>)
          </span>
          !
        </p>
        <div style={{ textAlign: "left" }}>
          <strong>
            To purchase either option, please read the following and check the
            box to agree.
          </strong>
          <div style={{ marginTop: "12px" }}>
            <div className="purchaseAgreementDiv">
              <input
                type="checkbox"
                value={option1}
                onChange={(e) => setOption1(e.target.checked)}
              />
              <label>
                I will get my Chrome email address by visiting{" "}
                <a href="http://chrome.google.com/webstore" target="_blank">
                  this link
                </a>{" "}
                and looking at the top-right corner, and then{" "}
                <b>I will use that email when I purchase shortfuts premium.</b>
              </label>
            </div>

            <div className="purchaseAgreementDiv">
              <input
                type="checkbox"
                value={option2}
                onChange={(e) => setOption2(e.target.checked)}
              />
              <label>
                I understand that shortfuts premium is a subscription and that
                if I cancel that subscription that I will lose access{" "}
                <b>immediately</b>.
              </label>
            </div>

            <div className="purchaseAgreementDiv">
              <input
                type="checkbox"
                value={option4}
                onChange={(e) => setOption4(e.target.checked)}
              />
              <label>
                I understand that I have to use the credit card option and
                cannot use the digital wallet option (i.e. Apple Pay, Google
                Pay, etc.).
              </label>
            </div>

            <div className="purchaseAgreementDiv">
              <input
                type="checkbox"
                value={option3}
                onChange={(e) => setOption3(e.target.checked)}
              />
              <label>
                I understand that shortfuts relies on the FUT web app and if,
                for whatever reason, shortfuts cannot continue that{" "}
                <b>I am not eligible for a refund of any kind.</b>
              </label>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "175px",
              justifyContent: "center",
            }}
          >
            <button
              role="link"
              onClick={buyShortfutsMonthlySubscription}
              disabled={!enablePurchase}
              style={{ marginRight: "40px", marginRight: "0" }}
            >
              🚀 subscribe monthly
            </button>
            <b>$1.50/month</b>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "175px",
              justifyContent: "center",
            }}
          >
            <button
              role="link"
              onClick={buyShortfutsAnnualSubscription}
              disabled={!enablePurchase}
              style={{ marginRight: "40px", marginRight: "0" }}
            >
              🚀 subscribe annually
            </button>
            <b>$15.00/year</b>
          </div>
        </div>
      </div>
    );
  } else if (view === "purchase_success") {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>thanks for purchasing shortfuts premium!</h2>
        <div>
          Your new <b>shortfuts premium subscription</b> can take up to{" "}
          <span style={{ backgroundColor: "lightblue" }}>10 minutes</span> to
          get activated! So please, set a 10 minute timer, grab a glass of cold
          water, and go relax. When your timer ends, come back to your computer,
          fully quit Google Chrome, and restart it and your subscription will be
          active.
        </div>
        <br />
        <div>
          While you wait, feel free to stop by the{" "}
          <a href="http://bit.ly/sf-discord" target="_blank">
            Discord server
          </a>{" "}
          and say hello!
        </div>
      </div>
    );
  } else if (view === "tip") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>buy Joe a coffee</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Thanks for using shortfuts and thanks for considering leaving me a
          tip! Most tips will go towards my espresso addiction!
          <br />
          <br />
          <button onClick={onTipClick} style={{ width: "200px" }}>
            buy me a ☕
          </button>
          <p>
            If this fails for you for whatever reason, please let me know via
            Discord, Twitter, or email. Thank you!
          </p>
        </div>
      </div>
    );
  } else if (view == "tipthanks") {
    return <div>Thanks so much for the tip! It's very much appreciated!</div>;
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
          <br />
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
                a screen where you can add a note.{" "}
                <span style={{ backgroundColor: "lightblue" }}>
                  Please paste your Chrome Web Store email address in the note
                  section.
                </span>{" "}
                If you miss this step, I will charge you an extra $5 USD when
                you try again.
              </li>
              <li style={{ backgroundColor: "lightblue" }}>
                Be patient. This is a manual process. I will do my best to
                process your payment as fast as I can{" "}
                <strong>(generally within 48 hours)</strong>. When your payment
                is processed, you will receive an email with an install link.
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
