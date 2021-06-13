import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const QuotesContainer = () => {

    const { id } = useParams()
    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);   
    
    useEffect(() => {
        const abortCont = new AbortController();
  
        setTimeout(() => {
          fetch('http://localhost:8000/quotes/' + id, { signal: abortCont.signal })
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
        <div className="quotes-container">
           { error && <div>{ error }</div> }
          { isLoading && <div>LOADING...</div> }
            {quotes && (
                <article>
                    <h2>{ quotes.title}</h2>
                    <p>Written by { quotes.author }</p>
                    <div>{ quotes.body }</div>
                    <img src={quotes.image} alt="" />
                <button className="like-btn">Like {"<3"}</button>
                
                </article>
                
               
            )}
             </div>
    );
}
 
export default QuotesContainer;