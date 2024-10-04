import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';

export default function Example() {
  return (
    <Menu menuButton={<MenuButton>Menu</MenuButton>} transition>
      <MenuItem>m1</MenuItem>
      <MenuItem>m2</MenuItem>
      <MenuItem>m3</MenuItem>
    </Menu>
  );
}
