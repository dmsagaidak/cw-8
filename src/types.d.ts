export interface Quote {
  id: string;
  category: string;
  author: string;
  text: string;
}

export interface QuoteMutation {
  category: string;
  author: string;
  text: string;
}

export interface QuotesList {
  [id: string]: Quote;
}