import { Link } from 'react-router-dom';
import '../styles/GridBook.css'


export function CardBook({image_url,name_book,quantity_book,category}){
    return (<>
        <div className="grid_books_children">
                <img src={image_url} alt={name_book} className='image_book_card' />    
                <div className='container-information-book'>
                        <div className="info_book_badge">
                            <p className='text_card_book'><strong>Name:</strong>{name_book}</p>
                        </div>
                        <p className="text_card_book"><strong>Category:</strong> {category}</p>
                        <p><span className={"badge text-bg-" + (quantity_book > 0 ? 'success' : 'danger' )}>{quantity_book>0?'Available':'Unavailable'}</span></p>
                </div>
                <Link className="book_information_link" to="#">Show</Link>
        </div>
    </>);
}