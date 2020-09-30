import React, { useEffect, useState } from "react";
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
          Install a premium version of shortfuts using this link: <a target="_blank" href="https://chrome.google.com/webstore/detail/shortfuts-premium-for-fif/mdchpfpjdphgknacgbbalnpjljjdabkb">https://chrome.google.com/webstore/detail/shortfuts-premium-for-fif/mdchpfpjdphgknacgbbalnpjljjdabkb</a>
          <br />
          Please make sure you disable or uninstall the regular version of shortfuts so the 2 versions do not collide with each other!
          <br />
          <br />
          Happy trading!
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
