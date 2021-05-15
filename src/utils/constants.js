import paintingService from "../assets/images/painting-service.jpg";
import gardeningService from "../assets/images/gardening-service.jpg";
import cleaningService from "../assets/images/cleaning-service.jpg";

export const services = [
	{
		image:
			"https://res.cloudinary.com/wocman-technology/image/upload/v1604144197/wocman/IMG_20200701_141851_umrzny.jpg",
		heading: "Electrical Fittings",
		text: "Get connected to the best electrician in your hood",
	},
	{
		image:
			"https://res.cloudinary.com/wocman-technology/image/upload/v1604143974/wocman/IMG_3095_yjs1ws.jpg",
		heading: "Sanitary Fittings",
		text: "Get linked to a talented plumbing expert nearest to you",
	},
	{
		image:
			"https://res.cloudinary.com/wocman-technology/image/upload/v1604147431/wocman/IMG_3484_o5licw.jpg",
		heading: "Kitchen Fittings",
		text: "We have skilled technicians that can help fix your kitchen",
	},
	{
		image: paintingService,
		heading: "Painting Service",
		text: "We connect you to talented painters in your locality",
	},
	{
		image: gardeningService,
		heading: "Gardening Service",
		text: "Get your flowers and grasses trimmed just the way you like it",
	},
	{
		image: cleaningService,
		heading: "Cleaning Service",
		text: "We have the perfect cleaner for you",
	},
];

export const BASE_URL = "https://wocman-node-api-8080.herokuapp.com/api/v1";
