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
		]); // [{12}]
		console.log('Películas insertadas');
	} catch (error) {
		console.error('Error al insertar películas:', error);
	}
}

connectDB();
seedMovies();
