import { useState } from "react";
import { decode } from "html-entities";

//@ts-ignore

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message: any) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <div className="relative" id="#contact">
        <div className="mx-auto max-w-lg lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-zinc-900 overflow-hidden shadow-xl lg:px-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 lg:-mt-32 lg:mt-0"
            ></div>
            <div className="relative mx-auto max-w-md lg:max-w-xl lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight lg:text-4xl">
                  Register Now.
                </h2>
              </div>
              <div className="mc-field-group mt-10">
                <label htmlFor="cta-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cta-email"
                  onChange={(event) => setEmail(event?.target?.value ?? "")}
                  type="email"
                  className="block w-full border border-transparent rounded-lg: px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent"
                  placeholder="Enter your email"
                  onKeyUp={(event) => handleInputKeyEvent(event)}
                />
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  className="block w-full rounded-lg: border border-transparent px-5 py-3 bg-primary text-base font-medium text-white shadow hover:bg-pink-700 focus:outline-none lg:px-10"
                >
                  {status === "sending" ? "Signing Up..." : "Get early access"}
                </button>
              </div>
              <div className="mt-4">
                {status === "error" || error ? (
                  <div
                    className="text-3xl text-white"
                    dangerouslySetInnerHTML={{
                      //@ts-ignore
                      __html: error || getMessage(message),
                    }}
                  />
                ) : null}
                {status === "success" && status !== "error" && !error && (
                  <div
                    className="text-3xl text-white"
                    dangerouslySetInnerHTML={{ __html: decode(message) }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
