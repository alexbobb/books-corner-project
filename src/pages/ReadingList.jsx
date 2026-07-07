import Header from "../components/Header"
import BookCard from "../components/BookCard"


function ReadingList() {
    return (
         <>
        <Header />

    <main>
        <h2>Your reading list</h2>
   
    <div id="list-head">
                <div id="filter"></div>
                <div id="numberOfBooks"></div>
            </div>
         <BookCard />
    </main>

    <footer>
        <p>&copy; 2025 Books Corner. All rights reserved.</p>
    </footer>
        </>
)}

export default ReadingList

