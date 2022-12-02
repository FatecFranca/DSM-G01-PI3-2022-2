// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('ic_home'),
  },
  {
    title: 'Avaliações Realizadas',
    path: '/dashboard/user',
    icon: icon('ic_play'),
  },
  {
    title: 'Questionario',
    path: '/dashboard/question',
    icon: icon('ic_document'),
  },
  {
    title: 'Glossário',
    path: '/dashboard/glossary',
    icon: icon('ic_document'),
  },
  
];

export default navConfig;
