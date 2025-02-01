import { type Requirement } from '../types/requirements';

export const requirements: Requirement[] = [
	{
		icon: 'Users',
		title: 'Requisitos Básicos',
		color: '#1F7EBE',
		items: [
			{
				description: 'Número de RUC',
			},
			{
				description: 'Título profesional y estar habilitado por el colegio profesional correspondiente, en el caso de servicios relacionados con la salud.',
			},
			{
				description:
					'Vigencia de poder, cuando se trate de personas Jurídicas',
			},
			{
				description:
					'De ser apoderado, carta poder simple firmada por el poderdante',
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
					'Contar con autorización sectorial respectiva en los casos de actividades comerciales que según Decreto Supremo Nº 006-2013-PCM, la requieran previo al otorgamiento de la Licencia de Funcionamiento. Como, por ejemplo, para los negocios de boticas o farmacias, se requiere Resolución de la DIRESA; para instituciones educativas, Resolución de DRE-UGEL.',
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
					'Copia simple de la autorización expedida por el Ministerio de Cultura, conforme a la Ley 28296, Ley General del Patrimonio Cultural de la Nación, excepto en los casos en que el Ministerio de Cultura haya participado en las etapas de remodelación y monitoreo de ejecución de obras previas inmediatas a la solicitud de la licencia del local.',
			},
		],
	},
];
