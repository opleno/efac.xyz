import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import es from "../lang/es.json";
import en_US from "../lang/en-US.json";
import ar from "../lang/ar.json";
import fr from "../lang/fr.json";

import "../styles/globals.css";

const messages = {
  es,
  ar,
  "en-US": en_US,
  fr,
};

// gets direction of the text (i.e. arab goes right to left)
function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  );
}

export default MyApp;
