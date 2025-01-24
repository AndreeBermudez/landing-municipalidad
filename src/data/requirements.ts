import { type Requirement } from '../types/requirements';

export const requirements: Requirement[] = [
	{
		icon: 'Users',
		title: 'Requisitos Básicos',
		color: '#1F7EBE',
		items: [
			{
				description: 'Copia de ficha RUC',
			},
			{
				description: 'Copia de DNI (persona natural)',
			},
			{
				description:
					'Para persona jurídica: Copia de ficha RUC, DNI del representante y declaración jurada',
			},
		],
	},
	{
		icon: 'Building',
		title: 'Autorización Sectorial',
		color: '#16A34A',
		items: [
			{
				description:
					'Resolución de la DIRESA para negocios del ámbito salud (boticas, farmacias, veterinarias, centros médicos, laboratorios)',
			},
			{
				description:
					'Resolución de UGEL y Dirección Regional de Educación para negocios educativos',
			},
			{
				description:
					'Declaración jurada de contar con la autorización sectorial respectiva en el caso de actividades que, según la Ley 28976, la requieran antes de otorgar la licencia de funcionamiento.',
			},
		],
	},
	{
		icon: 'Award',
		title: 'Patrimonio Cultural',
		color: '#CF940E',
		items: [
			{
				description:
					'Para inmuebles declarados Monumento del Patrimonio Cultural:',
			},
			{
				description:
					'Copia simple de la autorización expedida por el Ministerio de Cultura (Mincul), según la Ley 28296, Ley General del Patrimonio Cultural de la Nación, excepto si el Mincul participó en la remodelación y monitoreo de obras previas a la solicitud de la licencia del local.',
			},
		],
	},
];
