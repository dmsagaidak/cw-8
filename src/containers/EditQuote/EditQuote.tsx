import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {QuoteApi} from "../../types";
import axiosApi from "../../axiosApi";
import AddForm from "../../components/AddForm/AddForm";

const EditQuote = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [quote, setQuote] = useState<QuoteApi | null>(null);

  const fetchOneQuote = useCallback(async  () => {
    try{
      const quoteResponse = await axiosApi.get<QuoteApi>(`/quotes/${id}.json`);
      console.log(quoteResponse.data);
      setQuote(quoteResponse.data);
    }catch(e){
      console.log(e)
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      void fetchOneQuote().catch(console.error);
    }

  }, [fetchOneQuote, id]);

  const updateQuote = async (quote: QuoteApi) => {
    try{
      await axiosApi.put(`/quotes/${id}.json`, quote);
      navigate('/')
    }catch(e){
      console.log(e)
    }

  }

  return (
    <div>
      {quote && (
        <AddForm
          onSubmit={updateQuote}
          currentQuote={quote}
        />
      )
      }

    </div>
  );
};

export default EditQuote;