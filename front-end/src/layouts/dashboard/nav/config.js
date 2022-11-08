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
    title: 'Iniciar teste',
    path: '/dashboard/user',
    icon: icon('ic_play'),
  },
  {
    title: 'Projetos',
    path: '/dashboard/products',
    icon: icon('ic_document'),
  },
  {
    title: 'Questionario',
    path: '/dashboard/products',
    icon: icon('ic_document'),
  },
  
  
];

export default navConfig;
