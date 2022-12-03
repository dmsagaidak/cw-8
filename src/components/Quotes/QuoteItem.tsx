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

  let category
  if(quote.category === 'star-wars'){
    category = 'Star Wars';
  }else if(quote.category === 'writers'){
    category = 'Writers';
  }else if(quote.category === 'politicians'){
    category = 'Politicians';
  }else if(quote.category === 'music'){
    category = 'Music'
  }else{
    category = 'Motivational'
  }


  return (
    <div className="card mb-2">
      <div className="card-body row no-gutters">
        <div className="col col-10">
          <span className="pe-5"><b>Author:</b> {quote.author}</span>
          <span><b>Category: </b>{category}</span>
          <p className="mt-3">{quote.text}</p>
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