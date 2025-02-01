import { type Step } from '../types/steps';
export const steps: Step[] = [
	{
		icon: 'FileText',
		title: '1. Dirígete a la municipalidad',
		color: '#1F7EBE',
		description:
			'Acércate a la oficina de la Sub Gerencia de Comercio, Licencias y Promoción Empresarial, ubicado en Centro Cívico S/N, Nuevo Chimbote, de lunes a viernes de 8:00 am a 1:00 pm y de 2:00 pm a 4:30 pm y completa los formularios. Recuerda que el personal de comercio y defensa civil de guiaran en este procedimiento.',
	},
	{
		icon: 'Dollar',
		title: '2. Realiza el pago',
		color: '#16A34A',
		description:
			'El costo será evaluado por la Subgerencia de Gestión del Riesgo de Desastres y Defensa Civil, en función a la matriz de nivel de riesgo, aprobado por Decreto Supremo Nº 002-2018-PCM y su reglamento.',
		costTitle: 'Costos según nivel de riesgo:',
		costs: [
			{ type: 'Riesgo Bajo', price: 215.60 },
			{ type: 'Riesgo Medio', price: 384.10 },
			{ type: 'Riesgo Alto', price: 778.50 },
			{ type: 'Riesgo Muy Alto', price: 1370.10 },
		],
		adicionalMessage: 'El monto incluye derecho de trámite de Licencia e ITSE',
	},
	{
		icon: 'Clipboard',
		title: '3. Presenta tus documentos',
		color: '#CF940E',
		description:
			'Ingresa por mesa de partes los formatos de solicitud de licencia e inspección técnica de seguridad en edificaciones, constancia de pago. Posterior a ello, recibirás una hoja de trámite del cual podrás realizar seguimiento.',
	},
	{
		icon: 'FileText',
		title: '4. Obtén tu licencia',
		color: '#4F46E5',
		description:
			'En un plazo de 2 días hábiles, regresa a la oficina de la Sub Gerencia de Comercio, dentro del horario de atención para recoger tu licencia.',
	},
];
