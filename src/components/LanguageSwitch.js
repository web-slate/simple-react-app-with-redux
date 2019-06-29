import React, { Fragment, useContext } from 'react';
import { IntlContext } from './IntlWrapper';
import { FormattedMessage } from 'react-intl';

export default function LanguageSwitch() {
  // Context.
  const { switchToEnglish, switchToSpanish } = useContext(IntlContext);

  return (
    <Fragment>
      <button onClick={switchToEnglish}>
        <FormattedMessage id="switch_to_english" />
      </button>
      <button onClick={switchToSpanish}>
        <FormattedMessage id="switch_to_spanish" />
      </button>
    </Fragment>
  );
};