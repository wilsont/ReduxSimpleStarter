export function selectBook(book) {
    console.log('a book selected:', book.title);
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    }
}