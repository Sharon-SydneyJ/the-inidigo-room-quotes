import { useState, useEffect } from "react";
import QuotesList from './QuotesList';

const Home = () => {
  // testing useState under photo on home page
    // const name = "Vickie Valesquez";
    // const [name, setName] = useState('Vickie Valesquez');
    

    const [quotes, setQuotes] = useState(null);
    const [isLoading, setIsLoading] = useState(true)      

    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8000/quotes')
      .then(res => {
        if (!res.ok) {
          throw Error('Danger Will Robinson, could not fetch data');
        }
        return res.json();
      })
      .then(data => {
        setQuotes(data);
        setIsLoading(false);

      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
      
      }, 1000);
    }, []);
    
    return (
        <div className="home">
          {isLoading && <div>LOADING...</div>}
            {quotes && <QuotesList quotes={ quotes} title="All Quotes" />}
            {/* {quotes && <QuotesList quotes={ quotes.filter((quote) => quote.author ==='Neville Goddard')} title="Neville Quotes" handleDelete={handleDelete} />} */}
         

            {/* testing Image on home page. and clickMe button */}
            

            {/* <h2>Homepage</h2> */}
            {/* <div className="image">
                <img src="https://sydneychase.files.wordpress.com/2012/03/neville.jpg" alt="Neville Created by Vickie Valesquez"
                />
                <p>Image Created by: { name } for The Indigo Room</p>
                <button onClick={handleCick}>Click Me Test</button>
            </div> */}
        </div>
    );
}
 
export default Home;