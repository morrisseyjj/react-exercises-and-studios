export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679496983i/62628727.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672574587i/60531406.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663935844i/61109069.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Romantic Comedy by Curtis Sittenfield" />
         <img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" />
         <img src={book3} alt="The London Seance Society by Sarah Penner" />
      </div>      
   );
}