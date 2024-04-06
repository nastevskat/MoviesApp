const moviesArray = [
    {
      "title": "The Godfather",
      "year": "1972",
      "genre": ["Crime", "Drama"],
      "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "image": "assets/thegodfather.jpg"
    },
    {
      "title": "The Dark Knight",
      "year": "2008",
      "genre": ["Action", "Crime", "Drama"],
      "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "image": "assets/thedarkknight.jpg"
    },
    {
      "title": "Schindler's List",
      "year": "1993",
      "genre": ["Biography", "Drama", "History"],
      "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      "image": "assets/schindler.jpg"
    },
    {
      "title": "The Good, the Bad and the Ugly",
      "year": "1966",
      "genre": ["Adventure", "Western"],
      "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      "image": "assets/goodbadugly.jpg"
    },
    {
      "title": "Fight Club",
      "year": "1999",
      "genre": ["Drama"],
      "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      "image": "assets/fightclub.jpg"
    },
    {
      "title": "Inception",
      "year": "2010",
      "genre": ["Action", "Adventure", "Sci-Fi"],
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      "image": "assets/inception.jpg"
    },
    {
      "title": "The Matrix",
      "year": "1999",
      "genre": ["Action", "Sci-Fi"],
      "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      "image": "assets/thematrix.jpg"
    },
    {
        "title": "Goodfellas",
        "year": "1990",
        "genre": ["Biography", "Crime", "Drama"],
        "description": "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
        "image": "assets/goodfellas.jpg"
    },
    {
        "title": "Forrest Gump",
        "year": "1994",
        "genre": ["Romance", "Drama"],
        "description": "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
        "image": "assets/forrestgump.jpg"
    },
    {
        "title": "Life is Beautiful",
        "year": "1997",
        "genre": ["Comedy", "Romance", "Drama"],
        "description": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
        "image": "assets/lifeisbeautiful.jpg"
    },
    {
        "title": "The Green Mile",
        "year": "1999",
        "genre": ["Crime", "Fantasy", "Drama"],
        "description": "A tale set on death row, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the lead guard, Paul Edgecombe, recognizes John's gift, he tries to help stave off the condemned man's execution.",
        "image": "assets/greenmile.jpg"
    },
    {
        "title": "Casablanca",
        "year": "1942",
        "genre": ["War", "Romance", "Drama"],
        "description": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
        "image": "assets/casablanca.jpg"
    },
    {
        "title": "Good Will Hunting",
        "year": "1997",
        "genre": ["Romance", "Drama"],
        "description": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
        "image": "assets/goodwillhunting.png"
    },
    {
        "title": "Gone with the Wind",
        "year": "1939",
        "genre": ["War", "Romance", "Drama"],
        "description": "A sheltered and manipulative Southern belle and a roguish profiteer face off in a turbulent romance as the society around them crumbles with the end of slavery and is rebuilt during the Civil War and Reconstruction periods.",
        "image": "assets/gone.jpg"
    },
    {
        "title": "12 Angry Men",
        "year": "1957",
        "genre": ["Crime", "Drama"],
        "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        "image": "assets/12angrymen.jpg"
    },
    {
        "title": "Mirror Game",
        "year": "1957",
        "genre": ["Crime", "Mystery", "Thriller"],
        "description": "A struggling actor becomes a professional impostor, hired to impersonate people for financial gain, but as he delves deeper into his work he becomes embroiled in trouble that threatens to unravel his life.",
        "image": "assets/mirrorgame.jpg"
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "year": "2003",
        "genre": ["Action", "Adventure", "Drama"],
        "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "image": "assets/rings1.jpg"
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": "2001",
        "genre": ["Action", "Adventure", "Drama"],
        "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "image": "assets/rings2.jpg"
    },
    {
        "title": "Dune: Part Two",
        "year": "2024",
        "genre": ["Action", "Adventure", "Drama"],
        "description": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
        "image": "assets/dune.jpeg"
    },
    {
        "title": "The Chaos Class",
        "year": "1975",
        "genre": ["Comedy", "Drama"],
        "description": "Lazy, uneducated students share a very close bond. They live together in the dormitory, where they plan their latest pranks. When a new headmaster arrives, the students naturally try to overthrow him. A comic war of nitwits follows.",
        "image": "assets/chaos.jpg"
    },
    {
        "title": "Back to the Future",
        "year": "1985",
        "genre": ["Comedy", "Adventure", "Sci-Fi"],
        "description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        "image": "assets/back.jpg"
    },
    {
        "title": "Toy Story",
        "year": "1995",
        "genre": ["Comedy", "Adventure", "Animation"],
        "description": "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
        "image": "assets/toy.jpg"
    },
    {
        "title": "Up",
        "year": "2009",
        "genre": ["Comedy", "Adventure", "Animation"],
        "description": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
        "image": "assets/up.jpg"
    }
  ]
  