function BookCard({ book_id, img_source, author, title, description }) {
	return (
		<article className="book-card" id={book_id}>
			<img src={img_source} alt={`${title} cover`}></img>
			<div className="book-info">
				{author} - {title}
				<p className="book-description">{description}</p>
			</div>
			<div className="action-buttons">
				<button>Start Reading</button>
			</div>
			{/* <div class="action-buttons"><button>Add to Reading List</button></div>  
                <div class="action-buttons"><button>Remove from Reading List</button></div>   */}
		</article>
	);
}

export default BookCard;
