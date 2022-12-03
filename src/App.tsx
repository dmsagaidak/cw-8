import React, {useCallback, useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "../src/containers/Home/Home";
import axiosApi from "./axiosApi";
import {Route, Routes} from "react-router-dom";
import {Quote} from "./types";
import {QuotesList} from "./types";
import Sidebar from "./components/Sidebar/Sidebar";
import NewQuote from "./containers/NewQuote/NewQuote";


function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchQuotes = useCallback(async () => {
    try{
      const quotesResponse = await axiosApi.get<QuotesList>('/quotes.json');
      const quotes = Object.keys(quotesResponse.data).map(key => {
        const quote = quotesResponse.data[key];
        quote.id = key;
        return quote
      });
      setQuotes(quotes)
    }catch(e){
      console.log(e)
    }finally{

    }
  }, []);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes])

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="row no-gutters">
        <div className=" col col-2">
          <Sidebar/>
        </div>
        <div className="col me-5">
          <Routes>
            <Route
              path="/"
              element={(
                <Home quotes={quotes}/>
              )}
            />
            <Route
              path="add-quote"
              element={(
                <NewQuote/>
              )}/>
          </Routes>
        </div>

      </main>
    </>
  );
}

export default App;
