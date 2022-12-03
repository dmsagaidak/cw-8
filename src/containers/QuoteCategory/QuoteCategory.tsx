import React, {useCallback, useEffect, useState} from 'react';
import {Quote, QuotesList} from "../../types";
import axiosApi from "../../axiosApi";
import Quotes from "../../components/Quotes/Quotes";

interface Props {
  title: string;
  id: string;
}

const QuoteCategory: React.FC<Props> = ({title, id}) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchCategories = useCallback(async (id: string) => {
    const categoriesResponse = await axiosApi.get<QuotesList>('quotes.json?orderBy="category"&equalTo="' + id +'"');
    const categoriesList = Object.keys(categoriesResponse.data).map(key => {
      const category = categoriesResponse.data[key];
      category.id = key;
      return category
    });
    setQuotes(categoriesList)
  }, [id]);

  useEffect(() =>{
    void fetchCategories(id)
  }, [fetchCategories])

  return (
    <div>
      <h2>{title}</h2>
      <Quotes
      quotes={quotes}
      />
    </div>
  );
};

export default QuoteCategory;