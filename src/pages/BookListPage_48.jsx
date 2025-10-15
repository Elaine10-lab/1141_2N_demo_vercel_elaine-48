import books_data2 from '../assets/data/booklist_data2';
import Wrapper from '../assets/wrappers/BookList_48';

console.log("books_data2", books_data2)
const BookListPage_48 = () => {
  return (
    <Wrapper>
      <section className="booklist">
        {books_data2.map((book)=> {
          return(
            <article className="book">
              <img src={book.img}/>
              <div className="bookinfo">
                <h1>{book.title}</h1>
                <h4>{book.author}</h4>
              </div>
            </article>
          );
        })}
      </section>
    </Wrapper>
  );
};


export default BookListPage_48