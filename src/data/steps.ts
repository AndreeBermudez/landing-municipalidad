import { type Step } from '../types/steps';
export const steps: Step[] = [
	{
		icon: 'FileText',
		title: '1. Dirígete a la municipalidad',
		color: '#1F7EBE',
		description:
			'Acércate a la oficina de desarrollo económico ubicada en Urb. José Carlos Mariátegui Centro Cívico S/N, Nuevo Chimbote, de lunes a viernes, de 8:00 a.m. a 1:00 p.m. y de 2:00 p.m. a 5:00 p.m. y completa el formulario (S/ 100).',
	},
	{
		icon: 'Dollar',
		title: '2. Realiza el pago',
		color: '#16A34A',
		description:
			'Cancela S/ 5.00 por derecho de trámite en la caja de la municipalidad. Guarda el recibo de pago.',
	},
	{
		icon: 'Clipboard',
		title: '3. Presenta tus documentos',
		color: '#CF940E',
		description:
			'Ve a la mesa de partes del Centro Cívico, ubicada en la misma sede, y entrega los requisitos junto con formulario y el recibo.',
	},
	{
		icon: 'Clock',
		title: '4. Espera la notificación',
		color: '#9333EA',
		description:
			'Una vez presentada la información, en un plazo máximo de 24 horas, recibirás una notificación al número o correo que registraste en tu solicitud para que continúes el trámite en la oficina de Defensa Civil.',
	},
	{
		icon: 'Building',
		title: '5. Dirígete a Defensa Civil',
		color: '#FF0000',
		description:
			'Acude a la oficina de Defensa Civil ubicada en Urb. José Carlos Mariátegui Centro Cívico S/N, Nuevo Chimbote, de lunes a viernes de 7:45 a.m. a 03:30 p.m. y cancela en la caja según el tipo de licencia que requieres.',
		costTitle: 'Costos según tamaño del local',
		costs: [
			{ range: 'Hasta 100 m²', price: 145.20 },
			{ range: 'De 101 a 500 m²', price: 197.56 },
			{ range: 'Más de 500 m²', price: 559.68 },
		],
	},
	{
		icon: 'FileText',
		title: '6. Obtén tu licencia',
		color: '#4F46E5',
		description:
			'En un plazo de 7 días hábiles, regresa a la oficina de desarrollo económico dentro del horario de atención para recoger tu licencia.',
	},
];
