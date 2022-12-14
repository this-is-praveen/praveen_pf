import { useForm, ValidationError } from "@formspree/react";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";
import validator from "validator";
import { ThemeContext } from "../../theme-context";
import { Container, ContainerSucces } from "./styles";

export function Form() {
  const [state, handleSubmit] = useForm("myyvbprj");

  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");
  const { theme } = React.useContext(ThemeContext);

  function verifyEmail(email: string) {
    setValidEmail(!!validator.isEmail(email));
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email successfully sent!", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    }
  });

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thank you for contacting us!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form below</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Leave your message"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <ReCAPTCHA
          sitekey="6LcHU9EiAAAAALJfHeYWetBK1fIEtzp7CRM4wgyo"
          theme={theme === "light" ? "light" : "dark"}
          onChange={() => {
            setIsHuman(true);
          }}
        />
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
