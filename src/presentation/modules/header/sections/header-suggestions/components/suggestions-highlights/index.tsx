import { Fragment } from 'react';
import { SuggestionHightlightsStruct } from './suggestions-hightlights-types';

const SuggestionsHighlight = ({ value, term }: SuggestionHightlightsStruct) => {
  const higthlightText = () => {
    const lowerCaseWord = value.toLowerCase();
    const lowerCaseTerm = term.toLowerCase();
    const initIndex = lowerCaseWord.indexOf(lowerCaseTerm);
    const endIndex = initIndex + term.length;

    if (initIndex === -1) {
      return value;
    }

    return (
      <Fragment>
        <span style={{ fontWeight: 'bold', fontSize: 14 }}>
          {value.substring(0, initIndex)}
        </span>

        <span>{value.substring(initIndex, endIndex)}</span>
        <span style={{ fontWeight: 'bold', fontSize: 14 }}>
          {value.substring(endIndex, value.length)}
        </span>
      </Fragment>
    );
  };

  return <div>{higthlightText()}</div>;
};

export default SuggestionsHighlight;
