import React from 'react';
import {Quote} from "../../types";
import {Link, useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  quote: Quote
}

const QuoteItem: React.FC<Props> = ({quote}) => {
  const navigate = useNavigate();

  const removeQuote = async (quote: Quote) => {
    try{
      await axiosApi.delete('/quotes/' + quote.id + '.json')
      navigate('/')
    }catch (e) {
      console.log(e)
    }
  }


  return (
    <div className="card mb-2">
      <div className="card-body row no-gutters">
        <div className="col col-10">
          <span className="pe-5"><b>Author:</b> {quote.author}</span>
          <span className="ps-5"><b>Category: </b>{quote.category}</span>
          <p>{quote.text}</p>
        </div>
        <div className="col">
          <button className="btn btn-sm btn-danger mb-1" onClick={() => removeQuote(quote)}>Remove</button>
          <Link to={"edit-quote/" + quote.id} className="btn btn-sm btn-primary">Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;