import React, {useCallback, useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "../src/containers/Home/Home";
import axiosApi from "./axiosApi";
import {Route, Routes, useLocation} from "react-router-dom";
import {Quote} from "./types";
import {QuotesList} from "./types";
import Sidebar from "./components/Sidebar/Sidebar";
import NewQuote from "./containers/NewQuote/NewQuote";
import EditQuote from "./containers/EditQuote/EditQuote";
import QuoteCategory from "./containers/QuoteCategory/QuoteCategory";

const categories = [
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Music', id: 'music'},
  {title: 'Motivational', id: 'motivational'},
  {title: 'Politicians', id: 'politicians'},
  {title: 'Writers', id: 'writers'},
]


function App() {
  const location = useLocation();
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchQuotes = useCallback(async () => {
    try{
      const quotesResponse = await axiosApi.get<QuotesList>('/quotes.json');
      const quotes = Object.keys(quotesResponse.data).map(key => {
        const quote = quotesResponse.data[key];
        quote.id = key;
        return quote
      });
      setQuotes(quotes);

    }catch(e){
      console.log(e)
    }finally{

    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchQuotes();
    }
  }, [fetchQuotes, location]);

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="row no-gutters">
        <div className=" col col-2">
          <Sidebar/>
        </div>
        <div className="col  col-7 me-5">
          <Routes>
            <Route
              path="/"
              element={(
                <Home
                  title={"All"}
                  quotes={quotes}/>
              )}
            />
            {categories.map(item => (
              <Route
              path={"/categories/" + item.id}
              key={item.id}
              element={(
                <QuoteCategory
                  title={item.title}
                  id={item.id}/>
              )}
              />
            ))}
            <Route
              path="add-quote"
              element={(
                <NewQuote/>
              )}/>
            <Route
              path="/edit-quote/:id"
              element={(
                <EditQuote/>
            )}/>
          </Routes>
        </div>

      </main>
    </>
  );
}

export default App;
