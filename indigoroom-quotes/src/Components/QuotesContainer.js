import { useParams } from "react-router-dom";

const QuotesContainer = () => {

    const { id } = useParams()
    return (
        <div className="quotes-container">
            <h2>Quote Details - { id } </h2>
        </div>
    );
}
 
export default QuotesContainer;