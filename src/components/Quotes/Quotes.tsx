import React from 'react';
import QuoteItem from "./QuoteItem";
import {Quote} from "../../types";

interface Props {
  quotes: Quote[];
}

const Quotes: React.FC<Props> = ({quotes}) => {
  return (
    <div className="mt-1">
      {quotes.map((quote) => (
        <QuoteItem
        key={quote.id}
        quote={quote}
        />
      ))}

    </div>
  );
};

export default Quotes;