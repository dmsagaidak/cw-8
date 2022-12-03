import React from 'react';
import {Quote} from "../../types";
import Quotes from "../../components/Quotes/Quotes";

interface Props {
  quotes: Quote[];
}

const Home: React.FC<Props> = ({quotes}) => {
  return (
    <div>
      <Quotes quotes={quotes}/>
    </div>
  );
};

export default Home;