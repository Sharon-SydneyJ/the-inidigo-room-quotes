const QuotesList = ({ quotes, title }) => {

    return (
         <div className="quotes-list">
             <h2>{ title }</h2>
             {quotes.map((quote) => (
                 <div className="quotes-preview" key={ quote.id }>
                     <h3>{quote.title}</h3>
                     <p>Written by: { quote.author }</p>
                     
                     </div>
                     ))}
         </div>
         );
 }
 
  
 export default QuotesList;