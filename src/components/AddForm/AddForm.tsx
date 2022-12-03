import React, {useState} from 'react';
import {QuoteApi} from "../../types";
import {QuoteMutation} from "../../types";

interface Props {
  onSubmit: (quote: QuoteApi) => void;
  currentQuote?: QuoteApi;
}

const AddForm: React.FC<Props> = ({onSubmit, currentQuote}) => {
  const initialState = currentQuote ? {
    ...currentQuote
  } : {
    category: '',
    author: '',
    text: ''
  }

  const [quote, setQuote] = useState<QuoteMutation>(initialState);

  const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setQuote(prev => ({...prev, [name]: value}))
  }

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(quote);
    onSubmit({
      ...quote
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
        id="category"
        name="category"
        className="form-select mt-1"
        value={quote.category}
        onChange={onQuoteChange}
        >
          <option disabled value=''>Select a category</option>
          <option value="star-wars">Star Wars</option>
          <option value="writers">Writers</option>
          <option value="music">Music</option>
          <option value="motivational">Motivational</option>
          <option value="politicians">Politicians</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          className="form-control"
          value={quote.author}
          onChange={onQuoteChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Text</label>
        <textarea
        id="text"
        name="text"
        className="form-control"
        value={quote.text}
        onChange={onQuoteChange}
        />
      </div>
      <button className="btn btn-success">Send</button>
    </form>
  );
};

export default AddForm;