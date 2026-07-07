import Header from '../components/Header';
import BookCard from '../components/BookCard';
import booksData from '../data/booksFixtures';

function Overview() {
	const booksList = booksData.map((book) => (
		<BookCard
			id={book.book_id}
			key={book.book_id}
			cover={book.img_source}
			author={book.author}
			title={book.title}
			description={book.description}
		/>
	));

	return (
		<>
			<Header />
			<main>
				<h2>Track your reading progress:</h2>
				<article className="current-book-card">
					<div>
						<a href="./pages/currentRead.html">
							<img
								src="./src/assets/LegendsAndLattes.jpeg"
								alt="legends and lattes book cover"
							></img>
						</a>
					</div>
					<div className="book-info">
						Legends & Lattes - Travis Baldree
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
							beatae sint ipsa, quod, quas aperiam eaque consequatur optio
							provident, laboriosam velit! Libero consectetur quas sapiente.
							Necessitatibus tempora incidunt fugit quisquam.
						</p>
					</div>
					<div></div>
				</article>

				<h2>Your next reads:</h2>
				{booksList}
			</main>

			<footer>
				<p>&copy; 2025 Books Corner. All rights reserved.</p>
			</footer>
		</>
	);
}

export default Overview;
