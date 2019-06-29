import React, { Fragment } from "react";
import { FormattedMessage } from 'react-intl';
import LanguageSwitch from './components/LanguageSwitch';

function App(props) {
  return (
    <h1>
      <FormattedMessage id="welcomeMessage" />
      {props.country && (
        <Fragment>
          , <span>{props.country}</span>
        </Fragment>
      )}
      <FormattedMessage id="withoutCli" />
      <LanguageSwitch />
    </h1>
  );
}

export default App;
