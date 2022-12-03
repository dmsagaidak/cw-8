import React from 'react';
import {Quote} from "../../types";

interface Props {
  quote: Quote;
}

const QuoteItem: React.FC<Props> = ({quote}) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <span className="pe-5"><b>Author:</b> {quote.author}</span>
        <span className="ps-5"><b>Category: </b>{quote.category}</span>
        <p>{quote.text}</p>
      </div>
    </div>
  );
};

export default QuoteItem;