import connectDB from '../config/db.js';
import Movie from '../models/movie.model.js';

async function seedMovies() {
	try {
		await Movie.deleteMany();
		await Movie.insertMany([
			{
				title: 'The Matrix',
				releaseYear: 1999,
				genre: 'Acción, Ciencia Ficción',
				director: 'Lana Wachowski, Lilly Wachowski',
				actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
				description:
					'Un hacker llamado Neo descubre que la realidad que conoce es una simulación controlada por máquinas, y se une a un grupo de rebeldes para liberar a la humanidad.',
				rating: 8.7,
				image: 'https://i.ibb.co/QvpPX6t/The-Matrix.webp',
			},
			{
				title: '¡Huye!',
				releaseYear: 2017,
				genre: 'Terror, Suspenso',
				director: 'Jordan Peele',
				actors: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford'],
				description:
					'Un joven afroamericano visita la finca familiar de su novia blanca, donde descubre una conspiración perturbadora que cambiará su vida para siempre.',
				rating: 7.8,
				image: 'https://i.ibb.co/MDNcLg0/Huye.jpg',
			},
			{
				title: 'Tu Nombre',
				releaseYear: 2016,
				genre: 'Anime, Fantasía, Romance',
				director: 'Makoto Shinkai',
				actors: ['Ryunosuke Kamiki', 'Mone Kamishiraishi'],
				description:
					'Dos adolescentes intercambian cuerpos misteriosamente y desarrollan una conexión especial mientras intentan descubrir la verdad detrás de este fenómeno.',
				rating: 8.4,
				image: 'https://i.ibb.co/Pz7x5cw/Tu-Nombre.webp',
			},
			{
				title: 'It',
				releaseYear: 2017,
				genre: 'Terror',
				director: 'Andy Muschietti',
				actors: ['Bill Skarsgård', 'Jaeden Martell', 'Finn Wolfhard'],
				description:
					'Un grupo de niños se une para enfrentar a una entidad cambiante que adopta la forma de sus peores miedos y acecha la ciudad de Derry.',
				rating: 7.3,
				image: 'https://i.ibb.co/rs5mss5/It.webp',
			},
			{
				title: 'Coco',
				releaseYear: 2017,
				genre: 'Animación, Aventura, Familia',
				director: 'Lee Unkrich, Adrian Molina',
				actors: ['Anthony Gonzalez', 'Gael García Bernal', 'Benjamin Bratt'],
				description:
					'Un niño aspirante a músico se embarca en un viaje al mundo de los muertos para descubrir la verdad detrás de su familia y su pasión por la música.',
				rating: 8.4,
				image: 'https://i.ibb.co/8jQRpcW/Coco.jpg',
			},
			{
				title: 'Spider-Man: Into the Spider-Verse',
				releaseYear: 2018,
				genre: 'Animación, Acción, Aventura',
				director: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
				actors: ['Shameik Moore', 'Jake Johnson', 'Hailee Steinfeld'],
				description:
					'Miles Morales se convierte en Spider-Man y se une a otros héroes arácnidos de diferentes dimensiones para salvar el multiverso.',
				rating: 8.4,
				image: 'https://i.ibb.co/HhLPSJx/Spider-Man-Into-the-Spider-Verse.jpg',
			},
			{
				title: 'Free Guy',
				releaseYear: 2021,
				genre: 'Acción, Comedia, Ciencia Ficción',
				director: 'Shawn Levy',
				actors: ['Ryan Reynolds', 'Jodie Comer', 'Taika Waititi'],
				description:
					'Un cajero de banco descubre que es un personaje no jugable dentro de un videojuego masivo y decide convertirse en el héroe de su propia historia.',
				rating: 7.1,
				image: 'https://i.ibb.co/V9jrPwD/Free-Guy.jpg',
			},
			{
				title: 'Top Gun: Maverick',
				releaseYear: 2022,
				genre: 'Acción, Drama',
				director: 'Joseph Kosinski',
				actors: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
				description:
					'Después de más de 30 años de servicio, Maverick regresa para entrenar a un grupo de pilotos de élite mientras enfrenta su propio pasado.',
				rating: 8.3,
				image: 'https://i.ibb.co/tP8c7gK/Top-Gun-Maverick.jpg',
			},
			{
				title: 'Joker',
				releaseYear: 2019,
				genre: 'Crimen, Drama, Suspenso',
				director: 'Todd Phillips',
				actors: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
				description:
					'La historia de Arthur Fleck, un comediante fracasado cuya vida llena de abusos y rechazo lo lleva a convertirse en el icónico villano conocido como el Joker.',
				rating: 8.4,
				image: 'https://i.ibb.co/rbbRpM5/Joker.jpg',
			},
			{
				title: 'The Batman',
				releaseYear: 2022,
				genre: 'Crimen, Drama, Acción',
				director: 'Matt Reeves',
				actors: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
				description:
					'En sus primeros años como vigilante, Batman investiga una serie de asesinatos y descubre una red de corrupción que afecta a toda Gotham.',
				rating: 7.8,
				image: 'https://i.ibb.co/gjTFv3W/The-Batman.jpg',
			},
			{
				title: 'Interstellar',
				releaseYear: 2014,
				genre: 'Aventura, Drama, Ciencia Ficción',
				director: 'Christopher Nolan',
				actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
				description:
					'Un grupo de exploradores viaja a través de un agujero de gusano en el espacio para asegurar el futuro de la humanidad.',
				rating: 8.6,
				image: 'https://i.ibb.co/FVs2CZn/Interstellar.jpg',
			},
			{
				title: 'La La Land',
				releaseYear: 2016,
				genre: 'Musical, Drama, Romance',
				director: 'Damien Chazelle',
				actors: ['Ryan Gosling', 'Emma Stone', 'John Legend'],
				description:
					'En Los Ángeles, un pianista de jazz y una aspirante a actriz se enamoran mientras persiguen sus sueños artísticos, enfrentando decisiones que pondrán a prueba su relación.',
				rating: 8.0,
				image: 'https://i.ibb.co/kqHkZrt/La-La-Land.webp',
			},
			{
				title: "Parasite",
				releaseYear: 2019,
				genre: "Thriller",
				director: "Bong Joon-ho",
				actors: ["Song Kang-ho", "Choi Woo-shik"],
				description: "Una familia pobre se infiltra en una casa rica con consecuencias inesperadas.",
				rating: 8.5,
				image: "https://i.ibb.co/S4Yr226M/Parasite.jpg"
			},
			{
				title: "The Shawshank Redemption",
				releaseYear: 1994,
				genre: "Drama",
				director: "Frank Darabont",
				actors: ["Tim Robbins", "Morgan Freeman"],
				description: "Dos hombres forjan una amistad en prisión mientras uno planea su fuga.",
				rating: 9.3,
				image: "https://i.ibb.co/VppF7PgL/The-Shawshank-Redemption.jpg"
			},
			{
				title: "The Godfather",
				releaseYear: 1972,
				genre: "Crime",
				director: "Francis Ford Coppola",
				actors: ["Marlon Brando", "Al Pacino"],
				description: "La historia de la familia criminal Corleone en Nueva York.",
				rating: 9.2,
				image: "https://i.ibb.co/Y7TSbRTZ/The-Godfather.jpg"
			},
			{
				title: "The Dark Knight",
				releaseYear: 2008,
				genre: "Action",
				director: "Christopher Nolan",
				actors: ["Christian Bale", "Heath Ledger"],
				description: "Batman enfrenta al Joker, un criminal caótico que aterroriza Gotham.",
				rating: 9.0,
				image: "https://i.ibb.co/gbzJ9gcx/The-Dark-Knight.jpg"
			},
			{
				title: "Pulp Fiction",
				releaseYear: 1994,
				genre: "Crime",
				director: "Quentin Tarantino",
				actors: ["John Travolta", "Samuel L. Jackson"],
				description: "Historias entrelazadas de crimen y redención en Los Ángeles.",
				rating: 8.9,
				image: "https://i.ibb.co/yBFD0DsM/Pulp-Fiction.jpg"
			},
			{
				title: "Forrest Gump",
				releaseYear: 1994,
				genre: "Drama",
				director: "Robert Zemeckis",
				actors: ["Tom Hanks", "Robin Wright"],
				description: "Un hombre con discapacidad intelectual vive eventos históricos clave de EE.UU.",
				rating: 8.8,
				image: "https://i.ibb.co/KjDwVy83/Forrest-Gump.jpg"
			},
			{
				title: "Inception",
				releaseYear: 2010,
				genre: "Sci-Fi",
				director: "Christopher Nolan",
				actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
				description: "Un ladrón entra en los sueños para robar o implantar ideas.",
				rating: 8.8,
				image: "https://i.ibb.co/fYsGSC7C/Inception.jpg"
			},
			{
				title: "Fight Club",
				releaseYear: 1999,
				genre: "Drama",
				director: "David Fincher",
				actors: ["Brad Pitt", "Edward Norton"],
				description: "Un hombre desilusionado forma un club secreto de peleas clandestinas.",
				rating: 8.8,
				image: "https://i.ibb.co/8L134D1X/Fight-Club.jpg"
			},
			{
				title: "Goodfellas",
				releaseYear: 1990,
				genre: "Crime",
				director: "Martin Scorsese",
				actors: ["Robert De Niro", "Ray Liotta"],
				description: "La vida de un mafioso desde su adolescencia hasta su caída.",
				rating: 8.7,
				image: "https://i.ibb.co/tw21ff0T/Goodfellas.jpg"
			},
			{
				title: "The Lord of the Rings: The Return of the King",
				releaseYear: 2003,
				genre: "Fantasy",
				director: "Peter Jackson",
				actors: ["Elijah Wood", "Viggo Mortensen"],
				description: "Frodo y Sam completan su viaje para destruir el Anillo Único.",
				rating: 8.9,
				image: "https://i.ibb.co/zVvWXTwB/The-Lord-of-the-Rings-The-Return-of-the-King.jpg"
			},
			{
				title: "The Silence of the Lambs",
				releaseYear: 1991,
				genre: "Thriller",
				director: "Jonathan Demme",
				actors: ["Jodie Foster", "Anthony Hopkins"],
				description: "Una joven agente del FBI busca la ayuda de un asesino para atrapar a otro.",
				rating: 8.6,
				image: "https://i.ibb.co/PGR4Bxw1/The-Silence-of-the-Lambs.jpg"
			},
			{
				title: "Gladiator",
				releaseYear: 2000,
				genre: "Action",
				director: "Ridley Scott",
				actors: ["Russell Crowe", "Joaquin Phoenix"],
				description: "Un general romano cae en desgracia y regresa como gladiador para vengarse.",
				rating: 8.5,
				image: "https://i.ibb.co/b5BwLtGq/Gladiator.jpg"
			},
			{
				title: "Titanic",
				releaseYear: 1997,
				genre: "Romance",
				director: "James Cameron",
				actors: ["Leonardo DiCaprio", "Kate Winslet"],
				description: "Una historia de amor trágica a bordo del Titanic.",
				rating: 7.9,
				image: "https://i.ibb.co/LhQn1X9f/Titanic.jpg"
			},
			{
				title: "The Green Mile",
				releaseYear: 1999,
				genre: "Drama",
				director: "Frank Darabont",
				actors: ["Tom Hanks", "Michael Clarke Duncan"],
				description: "Un guardia de prisión descubre los poderes sobrenaturales de un recluso.",
				rating: 8.6,
				image: "https://i.ibb.co/HTxYyg8k/The-Green-Mile.jpg"
			},
			{
				title: "The Lion King",
				releaseYear: 1994,
				genre: "Animation",
				director: "Roger Allers, Rob Minkoff",
				actors: ["Matthew Broderick", "James Earl Jones"],
				description: "El joven león Simba debe reclamar su lugar como rey.",
				rating: 8.5,
				image: "https://i.ibb.co/NRfJTpH/The-Lion-King.jpg"
			},
			{
				title: "Saving Private Ryan",
				releaseYear: 1998,
				genre: "War",
				director: "Steven Spielberg",
				actors: ["Tom Hanks", "Matt Damon"],
				description: "Un escuadrón busca a un soldado en medio de la Segunda Guerra Mundial.",
				rating: 8.6,
				image: "https://i.ibb.co/8nPWdfqR/Saving-Private-Ryan.jpg"
			},
			{
				title: "Whiplash",
				releaseYear: 2014,
				genre: "Drama",
				director: "Damien Chazelle",
				actors: ["Miles Teller", "J.K. Simmons"],
				description: "Un joven baterista lucha por la excelencia bajo la dirección de un instructor abusivo.",
				rating: 8.5,
				image: "https://i.ibb.co/9mGYn4ry/Whiplash.jpg"
			},
		]);
		console.log('Películas insertadas');
	} catch (error) {
		console.error('Error al insertar películas:', error);
	}
}

connectDB();
seedMovies();
