import React from 'react';
import {Quote} from "../../types";
import Quotes from "../../components/Quotes/Quotes";

interface Props {
  quotes: Quote[];
  title: string;
}

const Home: React.FC<Props> = ({quotes, title}) => {
  return (
    <div>
      <h2>{title}</h2>
      <Quotes quotes={quotes}/>
    </div>
  );
};

export default Home;