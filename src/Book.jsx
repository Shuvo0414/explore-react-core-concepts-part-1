
import './Book.css'

export default function Book ({book}) {
    const {id, name, price} = book;
    return (
        <div className='book'>
            <h3>ID: {id}</h3>
            <h4>Book Name: {name}</h4>
            <p>Price: {price}</p>
        </div>
    )
}