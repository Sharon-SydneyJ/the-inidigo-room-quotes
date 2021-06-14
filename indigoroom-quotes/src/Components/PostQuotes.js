import { useState } from "react";



const PostQuotes = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const quote = { title, body, author, image };

        setIsLoading(true);

        fetch('http://localhost:8000/quotes', {
            method: `POST`,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quote)
        }).then(() => {
            console.log('new quote posted');
            setIsLoading(false);
        })

    }
    
    return (
        <div className="post-quotes">
            <h2>Add Your own Quotes Here</h2>
            <form onSubmit={ handleSubmit }>
                <label>Quote title:</label>
                <input 
                type="text"
                placeholder="Type quote title here ..."
                required
                value={ title }
                onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <br />

                <label>Quote body:</label>
                <textarea
                placeholder="Type your quote here ..."
                  required
                  value={ body }
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <br />
                <br />

                <label>Quote author:</label>
                <input
                type="text"
                placeholder="Enter the Quote Author..."
                required
                value={ author }
                onChange={(e) => setAuthor(e.target.value)}
                />
                <br />
                <br />

                 <label> Quote image:</label>
                <input
                type="text"
                placeholder="Enter a quote's image URL..."
                value={ image }
                onChange={(e) => setImage(e.target.value)}
                />
                <br />
                <br />
                { !isLoading && <button>Submit Your Quote</button>}
                { isLoading && <button disabled>Submitting Your Quote...</button>}
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
                <img src={image} alt={""} />
               
            </form>
        </div>
    );
}
 
export default PostQuotes;