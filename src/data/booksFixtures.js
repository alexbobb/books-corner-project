// Mock data for books - will be replaced with MongoDB data later
const booksData = [
  {
    "book_id": "book_001",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    "author": "Harper Lee",
    "title": "To Kill a Mockingbird",
    "description": "A young girl in 1930s Alabama learns about racial injustice and moral courage through her father's defense of a Black man falsely accused of a crime.",
    "status": "read",
    "rating": 5,
    "ratings_count": 98432
  },
  {
    "book_id": "book_002",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    "author": "George Orwell",
    "title": "1984",
    "description": "In a dystopian superstate ruled by Big Brother, a low-ranking party member secretly rebels against the totalitarian regime that controls every aspect of life.",
    "status": "read",
    "rating": 5,
    "ratings_count": 87210
  },
  {
    "book_id": "book_003",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg",
    "author": "J.D. Salinger",
    "title": "The Catcher in the Rye",
    "description": "A disenchanted teenager recounts his experiences wandering New York City after being expelled from prep school, grappling with alienation and the phoniness of adulthood.",
    "status": "dnf",
    "rating": 2,
    "ratings_count": 65320
  },
  {
    "book_id": "book_004",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
    "author": "F. Scott Fitzgerald",
    "title": "The Great Gatsby",
    "description": "A mysterious millionaire throws lavish parties on Long Island in pursuit of a lost love, exposing the hollow decadence of the American Dream in the Jazz Age.",
    "status": "read",
    "rating": 4,
    "ratings_count": 72145
  },
  {
    "book_id": "book_005",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg",
    "author": "Toni Morrison",
    "title": "Beloved",
    "description": "A formerly enslaved woman is haunted by the ghost of her dead daughter in post-Civil War Ohio, confronting the brutal legacy of slavery and the weight of memory.",
    "status": "reading",
    "rating": 4,
    "ratings_count": 34219
  },
  {
    "book_id": "book_006",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780140283334-L.jpg",
    "author": "Khaled Hosseini",
    "title": "The Kite Runner",
    "description": "An Afghan-American man returns to Taliban-controlled Kabul to rescue the son of his childhood friend, seeking redemption for a betrayal that shaped both their lives.",
    "status": "read",
    "rating": 5,
    "ratings_count": 58903
  },
  {
    "book_id": "book_007",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780385333481-L.jpg",
    "author": "Frank Herbert",
    "title": "Dune",
    "description": "A young nobleman is thrust into a deadly political struggle on a desert planet, where he must master its harsh environment and lead its native people to fulfill a grand destiny.",
    "status": "read",
    "rating": 5,
    "ratings_count": 61234
  },
  {
    "book_id": "book_008",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg",
    "author": "Cormac McCarthy",
    "title": "The Road",
    "description": "A father and son push a shopping cart through the ashen ruins of a post-apocalyptic America, struggling to survive while holding on to their humanity.",
    "status": "read",
    "rating": 4,
    "ratings_count": 42876
  },
  {
    "book_id": "book_009",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780143105428-L.jpg",
    "author": "Donna Tartt",
    "title": "The Goldfinch",
    "description": "After surviving a bombing at a museum, a boy clings to a stolen masterpiece painting as his life spirals through grief, addiction, and the criminal underworld.",
    "status": "to-read",
    "rating": 0,
    "ratings_count": 38901
  },
  {
    "book_id": "book_010",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780062316110-L.jpg",
    "author": "Andy Weir",
    "title": "The Martian",
    "description": "An astronaut stranded alone on Mars must use his ingenuity and wit to survive until a rescue mission can reach him, armed with little more than duct tape and botany.",
    "status": "read",
    "rating": 5,
    "ratings_count": 77542
  },
  {
    "book_id": "book_011",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780374529260-L.jpg",
    "author": "Mikhail Bulgakov",
    "title": "The Master and Margarita",
    "description": "The Devil arrives in Soviet Moscow with a retinue of bizarre companions, unleashing chaos that intertwines with the tale of a writer and his devoted lover.",
    "status": "to-read",
    "rating": 0,
    "ratings_count": 29345
  },
  {
    "book_id": "book_012",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
    "author": "J.R.R. Tolkien",
    "title": "The Hobbit",
    "description": "A comfort-loving hobbit is swept into an epic quest with a company of dwarves and a wizard to reclaim a mountain kingdom from a fearsome dragon.",
    "status": "read",
    "rating": 5,
    "ratings_count": 91203
  },
  {
    "book_id": "book_013",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780679720201-L.jpg",
    "author": "Gabriel García Márquez",
    "title": "One Hundred Years of Solitude",
    "description": "Seven generations of the Buendía family live, love, and repeat their mistakes in the mythical town of Macondo, blending magical realism with the sweep of Latin American history.",
    "status": "reading",
    "rating": 4,
    "ratings_count": 51876
  },
  {
    "book_id": "book_014",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
    "author": "Douglas Adams",
    "title": "The Hitchhiker's Guide to the Galaxy",
    "description": "After Earth is demolished to make way for a hyperspace bypass, an ordinary man hitches a ride across the galaxy armed with nothing but a towel and a deeply unhelpful guidebook.",
    "status": "read",
    "rating": 4,
    "ratings_count": 68901
  },
  {
    "book_id": "book_015",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg",
    "author": "Madeline Miller",
    "title": "Circe",
    "description": "The daughter of a Titan discovers her power of witchcraft and is banished to a remote island, where she crosses paths with legendary figures from Greek mythology.",
    "status": "read",
    "rating": 4,
    "ratings_count": 45230
  },
  {
    "book_id": "book_016",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780399590528-L.jpg",
    "author": "Celeste Ng",
    "title": "Little Fires Everywhere",
    "description": "An enigmatic artist and her daughter upend a picture-perfect suburban community, exposing the weight of secrets, privilege, and motherhood beneath its orderly surface.",
    "status": "to-read",
    "rating": 0,
    "ratings_count": 39102
  },
  {
    "book_id": "book_017",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg",
    "author": "Suzanne Collins",
    "title": "The Hunger Games",
    "description": "In a brutal televised competition, a teenage girl volunteers to fight to the death in place of her younger sister, sparking a rebellion against a tyrannical government.",
    "status": "read",
    "rating": 4,
    "ratings_count": 82345
  },
  {
    "book_id": "book_018",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg",
    "author": "Hanya Yanagihara",
    "title": "A Little Life",
    "description": "Four college friends navigate ambition and identity in New York City, while one among them carries a devastating secret that threatens to consume them all.",
    "status": "dnf",
    "rating": 3,
    "ratings_count": 27654
  },
  {
    "book_id": "book_019",
    "img_source": "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg",
    "author": "Colson Whitehead",
    "title": "The Underground Railroad",
    "description": "A young enslaved woman escapes a Georgia plantation via a literal underground railroad, journeying through a nightmarish vision of American states each with their own brand of oppression.",
    "status": "to-read",
    "rating": 0,
    "ratings_count": 33210
  },
  {
    "book_id": "book_020",
    "img_source": "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
    "author": "Fredrik Backman",
    "title": "A Man Called Ove",
    "description": "A curmudgeonly old man who has given up on life finds unexpected purpose when a boisterous young family moves in next door and refuses to leave him alone.",
    "status": "read",
    "rating": 5,
    "ratings_count": 54321
  }
]

export default booksData
