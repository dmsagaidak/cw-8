import React from 'react';
import AddForm from "../../components/AddForm/AddForm";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";
import {QuoteApi} from "../../types";

const NewQuote = () => {
  const navigate = useNavigate()
  const addQuote = async (quote: QuoteApi) => {
    try{
      await axiosApi.post('/quotes.json', quote);
      navigate('/')
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div>
      <AddForm onSubmit={addQuote}/>
    </div>
  );
};

export default NewQuote;