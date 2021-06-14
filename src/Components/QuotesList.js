import { Link } from "react-router-dom";

const QuotesList = ({ quotes, title }) => {

    return (
         <div className="quotes-list">
             <h2>{ title }</h2>
             {quotes.map((quote) => (
                 <div className="quotes-preview" key={ quote.id }>
                     <Link to={`/quotes/${quote.id}` }>
                     <h3>{quote.title}</h3>
                     <p>Written by: { quote.author }</p>
                     </Link>
                     </div>
                     ))}
         </div>
         );
 }
 
  
 export default QuotesList;