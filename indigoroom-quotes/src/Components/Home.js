import { useState, useEffect } from "react";
import QuotesList from './QuotesList';

const Home = () => {
  // testing useState under photo on home page
    const name = "Vickie Valesquez";
    // const [name, setName] = useState('Vickie Valesquez');
    
    
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);     

    useEffect(() => {
      const abortCont = new AbortController();

      setTimeout(() => {
        fetch('https://indigoroom.herokuapp.com/quotes', { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('Danger Will Robinson, could not fetch data');
        }
        return res.json();
      })
      .then(data => {
        setQuotes(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
        setIsLoading(false);
        setError(err.message);
        }
      })
      
      }, 1000);

      return () => abortCont.abort();
     

    }, []);

    
    return (
        <div className="home">
          { error && <div>{ error }</div> }
          {isLoading && <div>LOADING...</div>}
            {quotes && <QuotesList quotes={ quotes} title="All Quotes Below:" />}
          
         

            {/* testing Image on home page. and clickMe button */}
            

            <div className="image">
                <img src="https://sydneychase.files.wordpress.com/2012/03/neville.jpg" alt="Neville Created by Vickie Valesquez"
                />
                <p>Image Created by: { name } for The Indigo Room</p>
                
            </div>
        </div>
    );
};
  
 
export default Home;