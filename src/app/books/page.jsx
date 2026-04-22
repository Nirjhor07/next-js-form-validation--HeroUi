import { getBooks } from "@/lib/getBooks";
import BooksCard from "./Component/BooksCard";
import { AddPersonForm } from "@/Componets/AddPersonForm";
import { createActions } from "@/lib/actions";

const BooksPage = async () => {
  const books = await getBooks();
  console.log(books.books);
  return (
    <div>
      <p> Books : {books.books.length}</p>
      <div className="grid grid-cols-3 gap-4 p-10">
        {/* here the books card will be displayed */}
        {books.books.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>

      {/* adding form data here  */}
      <div className="flex items-center justify-center">
        <AddPersonForm createActions={createActions} />
      </div>
    </div>
  );
};

export default BooksPage;
