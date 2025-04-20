import { useEffect, useState } from 'react';
import '../styles/GridBook.css';
import { CardBook } from './CardBook';

export function GridBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
            .then(response => response.json())
            .then(data => {
                const mappedBooks = data.items.map(item => ({
                    id: item.id,
                    title: item.volumeInfo.title || 'Sin título',
                    image: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150',
                    category: item.volumeInfo.categories?.[0] || 'Sin categoría',
                    quantity: Math.floor(Math.random() * 10) 
                }));
                setBooks(mappedBooks);
            })
            .catch(error => console.error('Error al obtener libros:', error));
    }, []);

    return (
        <div className="grid_book_container">
            {books.map(book => (
                <CardBook
                    key={book.id}
                    image_url={book.image}
                    name_book={book.title}
                    quantity_book={book.quantity}
                    category={book.category}
                />
            ))}
        </div>
    );
}
