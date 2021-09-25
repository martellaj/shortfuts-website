import React, { useEffect, useState } from "react";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import emailScreenshot from "./email.png";
import Buy from "./Buy";
import Discord from "./Discord";
import unsubscribe1 from "./cancelSubscriptionImages/1.png";
import unsubscribe2 from "./cancelSubscriptionImages/2.png";
import unsubscribe3 from "./cancelSubscriptionImages/3.png";
import unsubscribe4 from "./cancelSubscriptionImages/4.png";
import unsubscribe5 from "./cancelSubscriptionImages/5.png";

// test
// const stripePromise = loadStripe("pk_test_CzSGkLAPEdl9VcVmDNKvGd8Q00x4IyVhbt");

// prod
const stripePromise = loadStripe("pk_live_Dd6tmAPDrcaK7m20TDG1OhjI00MZibIg97");

function App() {
  const [view, setView] = useState("");

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);

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
        setOption3
      )}
    </div>
  );
}

const buyShortfutsForFifa21 = async (url) => {
  const confirmResponse = window.confirm(
    "If you choose to purchase shortfuts premium with PayPal, you must make sure that the contact email you provide matches your Chrome Web Store email.\n\nIf you pay with credit card, you must make sure that the contact email you provide matches your Chrome Web Store email.\n\nIf it doesn't match, your shortfuts premium will not work and you will not be refunded."
  );

  if (confirmResponse) {
    window.open(url, "_blank");
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
  setOption3
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
          <span className="question">ratings filter</span>
          <span className="answer">
            This is an additional filter added to the search page where you can
            specify what ratings you'd like to see in the search results. Please
            note that it only filters per page of results; shortfuts does{" "}
            <strong>not</strong> modify requests sent to EA's servers (because I
            don't want you to get banned).
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
          <b
            style={{
              fontSize: "12px",
              marginTop: "10px",
              backgroundColor: "lightblue",
            }}
          >
            NOTE: This feature is not available for users that play FIFA on PC.
          </b>
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
          DM me on Discord (shortfuts#6568) to get an invite to the shortfuts
          auto Discord server!
        </div>
      </div>
    );
  } else if (view === "buyold") {
    const enablePurchase = option1 && option2 && option3;

    return (
      <div style={{ textAlign: "center" }}>
        <h2>buy shortfuts premium</h2>
        <p style={{ lineHeight: "1.4" }}>
          <span style={{ backgroundColor: "lightyellow" }}>
            shortfuts premium
          </span>{" "}
          is tied to your Google Chrome account. Use the buttons below to add
          premium time (1 month, 3 months, or 12 months). You can add additional
          premium time at any time!
        </p>
        <div style={{ textAlign: "left" }}>
          <strong>
            Before purchasing, please read the following and check the boxes to
            accept each statement.
          </strong>
          <div style={{ marginTop: "12px" }}>
            <div className="purchaseAgreementDiv">
              <input
                type="checkbox"
                value={option1}
                onChange={(e) => setOption1(e.target.checked)}
              />
              <label>
                I will get my shortfuts account by checking the app's pop-up,
                and I will copy that email address and then{" "}
                <b>
                  I will use that email address as my contact email when I
                  purchase shortfuts premium.
                </b>
                <br />
                <br />
                <span style={{ marginTop: "4px", marginBottom: "4px" }}>
                  Copy the value after <strong>Your account:</strong>.
                </span>
                <img src={emailScreenshot} alt="logo" />
              </label>
            </div>

            <div className="purchaseAgreementDiv">
              <input
                type="checkbox"
                value={option3}
                onChange={(e) => setOption3(e.target.checked)}
              />
              <label>
                I understand that my shortfuts premium status may take up to{" "}
                <b>10 minutes to update after purchasing</b> and I will not ask
                about it until those 10 minutes are up.
              </label>
            </div>

            <div className="purchaseAgreementDiv">
              <input
                type="checkbox"
                value={option2}
                onChange={(e) => setOption2(e.target.checked)}
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
              width: "125px",
              justifyContent: "center",
            }}
          >
            <button
              role="link"
              onClick={() => {
                buyShortfutsForFifa21(
                  "https://shortfuts.myshopify.com/products/copy-of-shortfuts-premium-1-month"
                );
              }}
              disabled={!enablePurchase}
              style={{ marginRight: "40px", marginRight: "0" }}
            >
              🌟 buy 1 month
            </button>
            <b>$2.00/month</b>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "125px",
              justifyContent: "center",
            }}
          >
            <button
              role="link"
              onClick={() => {
                buyShortfutsForFifa21(
                  "https://shortfuts.myshopify.com/products/copy-of-shortfuts-premium-6-months"
                );
              }}
              disabled={!enablePurchase}
              style={{ marginRight: "40px", marginRight: "0" }}
            >
              🌟 buy 3 months
            </button>
            <b>$1.66/month</b>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "125px",
              justifyContent: "center",
            }}
          >
            <button
              role="link"
              onClick={() => {
                buyShortfutsForFifa21(
                  "https://shortfuts.myshopify.com/products/shortfuts-premium-for-fifa-21"
                );
              }}
              disabled={!enablePurchase}
              style={{ marginRight: "40px", marginRight: "0" }}
            >
              🌟 buy 12 months
            </button>
            <b>$1.25/month</b>
          </div>
        </div>
      </div>
    );
  } else if (view === "buy") {
    return <Buy />;
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
  } else if (view === "migration") {
    return (
      <div>
        <h2>shortfuts premium migration</h2>

        <div className="faq">
          <span className="question">What's going on?</span>
          <span className="answer">
            I've handled subscriptions and payments via the Chrome Web Store for
            the last 2 years. This year - a week before the FUT web app launched
            - I was notified by Google that they are deprecating their payment
            system in the next few months and that I need to come up with a
            different solution for payments.
          </span>

          <br />

          <span className="question">What's the new solution?</span>
          <span className="answer">
            The new solution is simple. You have an account (pictured below) and
            you add shortfuts premium time to that account via my new web store.
            The app will now direct you to the{" "}
            <a href="https://shortfuts.com?v=buy" target="_blank">
              buy page
            </a>{" "}
            which will give you an option to buy 1 month, 3 months, or 12 months
            (the price per month is cheaper the more months you buy).
            <img style={{ marginTop: "4px" }} src={emailScreenshot} />
          </span>

          <br />

          <span className="question">
            What about my existing Chrome Web Store subscription?
          </span>
          <span className="answer">
            Your Chrome Web Store subscription will continue to work until
            December 31, 2020. Until then, you'll retain shortfuts premium
            access while your subscription is active. However, I highly
            encourage you to cancel your shortfuts premium subscription at the
            end of your current month (you will lose shortfuts premium when you
            cancel) and start adding shortfuts premium time via the new{" "}
            <a href="https://shortfuts.com?v=buy" target="_blank">
              buy page
            </a>{" "}
            as soon as possible. This will ensure there's no interruption in
            your shortfuts premium access!
            <div style={{ marginTop: "12px" }}>
              To unsubscribe, simply go to your{" "}
              <a
                href="https://pay.google.com/payments/u/home#subscriptionsAndServices"
                target="_blank"
              >
                Google Pay subscriptions
              </a>{" "}
              page to manage your subscription.
            </div>
          </span>

          <br />

          <span className="question">
            What if I paid for shortfuts premium for FIFA 21?
          </span>
          <span className="answer">
            This new process doesn't affect you! You will retain you shortfuts
            premium until the end of FIFA 21. At that point, you can then start
            adding shortfuts premium time to your account.
          </span>
        </div>
      </div>
    );
  } else if (view === "discord") {
    return <Discord />;
  } else if (view === "x") {
    return (
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "0" }}>shortfuts x</h2>
        <h3 style={{ textAlign: "center", marginTop: "6px" }}>
          <u>shortfuts</u> e<u>x</u>cept some stuff
        </h3>

        <div className="faq">
          <span className="question">What is shortfuts x?</span>
          <span className="answer">
            shortfuts x is a version of shortfuts without <i>any</i> injected
            code. In this version of the app, there's absolutely no code
            injected into the web app's code and no UI elements injected into
            the web app's UI. All of the code that powers this app runs
            independently of the web app to make it safer for you to use.
          </span>

          <br />

          <span className="question">Why was shortfuts x made?</span>
          <span className="answer">
            I developed shortfuts x because of a new "extension detection"
            system put place in by EA during December 2020. While regular
            shortfuts (which will still continue to be supported) has some
            injected code, there are very few features that require it (listed
            later on). So this version of the app has a few less features, but
            is ultimately incredibly safe and difficult to detect.
          </span>

          <br />

          <span className="question">
            How is shortfuts x different from shortfuts?
          </span>
          <span className="answer">
            There are a few features of regular shortfuts that require injected
            code; those are the features missing from this version.
            <ul>
              <li>
                The "display pricing data" shortcut is not in shortfuts x.
              </li>
              <li>The ratings filter is not in shortfuts x.</li>
              <li>The "show good deals" setting is not in shortfuts x.</li>
              <li>The "list min BIN" shortcut is not in shortfuts x.</li>
              <li>The snipe counter feature is not in shortfuts x.</li>
              <li>
                The tax calculator is modified in shortfuts x. Instead of my own
                tax calculator popping in the app, this shortcut will open a new
                page with an EA tax calculator instead.
              </li>
            </ul>
          </span>

          <br />

          <span className="question">
            Does shortfuts premium apply to shortfuts x?
          </span>
          <span className="answer">
            Yes! So long as you have purchased premium via my store (
            <a href="https://shortfuts.com?v=buy" target="_blank">
              link
            </a>
            ), your premium status will be reflected in shortfuts x.
            <br />
          </span>

          <br />

          <span className="question">
            Do I recommend using shortfuts x instead of shortfuts?
          </span>
          <span className="answer">
            At time of writing this page (December 27, 2020), regular shortfuts
            has been protected against EA's new "extension detection" system and
            is as safe to use as ever. If you'd like to be extra cautious,
            shortfuts x is still for you as it will always be safer (because
            there's no injected code into the page).
            <br />
            <br />
            <u>
              If you do decide to take the extra precaution, make sure to
              disable regular shortfuts by going to chrome://extensions in your
              browser and toggling it off for now.
            </u>
          </span>

          <br />

          <span className="question">Where can I get shortfuts x?</span>
          <span className="answer">
            Install shortfuts x{" "}
            <a href="https://bit.ly/shortfuts-x" target="_blank">
              here
            </a>
            .
            <br />
            <br />
            <u>
              If you do decide to take the extra precaution, make sure to
              disable regular shortfuts by going to chrome://extensions in your
              browser and toggling it off for now.
            </u>
          </span>
        </div>
      </div>
    );
  } else if (view === "new-premium") {
    return (
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "0" }}>
          shortfuts premium in FIFA 22
        </h2>
        <p>
          Thank you so much for your support in FIFA 21! Last year, you
          purchased premium for FIFA 21 by sending me money via PayPal and me
          adding you to an explicit list of premium users. I'm happy to tell you
          that since then, I've been able to improve the premium purchasing
          experience.
        </p>
        <strong>
          If you're interested in continuing to support me and buy shortfuts
          premium for FIFA 22, you can do by first installing shortfuts from the
          Chrome Web Store (
          <a href="https://bit.ly/shortfuts-app" target="_blank">
            here
          </a>
          ) and then heading over to my store and purchasing a shortfuts premium
          code (
          <a href="https://shortfuts.com/?v=buy" target="_blank">
            instructions here
          </a>
          ).
        </strong>
        <p>
          Whether or you continue to support or not, I appreciate your support
          so far and wish you a succesful FIFA 22 cycle!
        </p>
      </div>
    );
  } else if (view === "sideload") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>sideload shortfuts</h2>
        <p>
          shortfuts requires an update and the Chrome Web Store is taking too
          long to publish it. While we wait, you can download the patched
          version below.{" "}
        </p>

        <p>
          This is <strong>temporary</strong>, as it isn't the official version
          and thus won't get updates in the future. Because it's{" "}
          <strong>temporary</strong>, it will only work for a few days.
        </p>

        <p>
          When it's expired or when you get an announcement from me that the
          official version has been published, you should go delete this version
          of the app from chrome://extensions and re-enable the official one
          immediately.
        </p>

        <strong style={{ backgroundColor: "gold" }}>
          It is recommended to switch back to the official version (from{" "}
          <a href="http://bit.ly/shortfuts-app" target="_blank">
            http://bit.ly/shortfuts-app
          </a>
          ) as soon as the patched version is available in the Chrome Web Store
          (will be announced in the Discord server).
        </strong>

        <p>
          Included in the ZIP file is a README.txt file which has instructions
          on how to sideload the app in to Google Chrome.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => window.open("https://shortfuts.com/shortfuts.zip")}
          >
            download shortfuts
          </button>
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
            If you want to cancel your shortfuts premium subscription, follow
            these easy steps.
            <ol>
              <li>
                Create an account from my store page (
                <a href="https://shortfuts.myshopify.com/" target="_blank">
                  https://shortfuts.myshopify.com
                </a>
                ).
                <img
                  style={{ width: "600px", marginBottom: "12px" }}
                  src={unsubscribe1}
                />
              </li>
              <li>
                Click the "Create account" button to create an account.
                <img
                  style={{ width: "600px", marginBottom: "12px" }}
                  src={unsubscribe2}
                />
              </li>
              <li>
                Go to your account page and then click the "MANAGE SUBSCRIPTION"
                button.
                <img
                  style={{ width: "600px", marginBottom: "12px" }}
                  src={unsubscribe3}
                />
              </li>
              <li>
                Click the "See more details" button to manage a specific
                subscription.
                <img
                  style={{ width: "600px", marginBottom: "12px" }}
                  src={unsubscribe4}
                />
              </li>
              <li>
                Click "Cancel Subscription" to cancel the subscription.
                <img
                  style={{ width: "600px", marginBottom: "12px" }}
                  src={unsubscribe5}
                />
              </li>
            </ol>
          </span>
        </div>
      </div>
    );
  }
};

export default App;
