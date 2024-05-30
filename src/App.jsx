import "./App.css";
import Search from "./Components/search/Search.jsx";
import AllBooks from "./Components/Catalog/AllBooks.jsx";
import AllRequests from "./Components/Requests/AllRequests.jsx";
import database from "../BookData.json";
import { useState } from "react";

export default function App() {
  // initialize request list state
  const [myRequests, setMyRequests] = useState([]);
  console.log("requests", myRequests);

  //initialize book list state
  const [myBooks, setMyBooks] = useState(database.catalog);
  console.log(myBooks);

  function addToRequestListHandler(bookToAdd) {
    setMyRequests(() => {
      //myRequests.push(bookToAdd);
      //console.log ("NEW REQUEST LIST", myRequests);
      //let myNewRequest = [...myRequest, bookToAdd]
      //return myNewRequests;
      console.log("hello world", [...myRequests, bookToAdd]);

      return [...myRequests, bookToAdd];
    });
  }
  function removeFromRequestListHandler(bookToRemove) {
    //filter out the bookToRemove from myRequests
    setMyRequests(() => {
      //filter out bookToRemove
      return myRequests.filter(
        (thisRequest) => thisRequest.id != bookToRemove.id,
      );
    });
  }

  return (
    <main>
      <div className="main">
        <img src="src/image/lion.png" alt="lion"></img>
        <img src="src/image/inside.png" alt="inside of library"></img>
        <img src="src/image/accessibility.jpg" alt="two people"></img>
        <img src="src/image/diversity.png" alt="lady sitting"></img>
      </div>

      <marquee>
        {" "}
        &#128483; PROTEST! &#128483; PROTEST ! THE MAYOR'S $58.3 MILLION DOLLAR
        BUDGET CUTS TO 2025 THIS WILL SEVERELY AFFECT ALL NEW YORK PUBLIC
        LIBRARIES&#128552; &#128552;{" "}
      </marquee>

      <h1>
        {" "}
        The New York Peoples 2024 Library Catalog &#128218; &#128451; &#128187;
      </h1>

      <Search></Search>

      <img className="cartoon"
  src="src/image/spiderman.giphy.gif"></img>

      <nav>
        <ul className="underline">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#books">Books/Music//Movies</a>
          </li>
          <li>
            <a href="#event">Research</a>
          </li>
          <li>
            <a href="#event">Education</a>
          </li>
          <li>
            <a href="#event">Events</a>
          </li>
          <li>
            <a href="#tech connect">Tech Connect</a>
          </li>
        </ul>
      </nav>

      <section id="books-and-requests">
        <AllBooks
          bookList={myBooks}
          addToRequestListHandler={addToRequestListHandler}
        ></AllBooks>
        <AllRequests
          requestList={myRequests}
          removeFromRequestListHandler={removeFromRequestListHandler}
        ></AllRequests>
      </section>
    </main>
  );
}
