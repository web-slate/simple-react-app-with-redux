import React, { useState } from "react";
import { IntlProvider, addLocaleData } from "react-intl";

import enLocaleData from "react-intl/locale-data/en";
import esLocaleData from "react-intl/locale-data/es";

import enTranslation from "../../locales/en";
import esTranslation from "../../locales/es";

addLocaleData([...enLocaleData, ...esLocaleData]);

const IntlContext = React.createContext();

function IntlWrapper(props) {
  const { children: ChildComponent } = props;
  const defaultLocale = "en";
  const IntlDefaultConfig = {
    locale: defaultLocale,
    messages: enTranslation
  };
  const [intlConfig, switchLang] = useState(IntlDefaultConfig);

  const IntlContextValue = {
    ...intlConfig,
    switchToEnglish: () => {
      switchLang({
        ...IntlDefaultConfig
      });
    },
    switchToSpanish: () => {
      switchLang({
        locale: "es",
        messages: esTranslation
      });
    }
  };

  return (
    <IntlContext.Provider value={IntlContextValue}>
      <IntlProvider
        defaultLocale={intlConfig.Locale}
        locale={intlConfig.locale}
        messages={intlConfig.messages}
      >
        {ChildComponent}
      </IntlProvider>
    </IntlContext.Provider>
  );
}

export {
  IntlWrapper,
  IntlContext,
}