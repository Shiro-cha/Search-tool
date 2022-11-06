import Typography from "@mui/material/Typography"
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function FilterPar() {
  return (
    <div className="container-fluid">
      <div className="navbar navbar-expand bg-light mt-2">
        <Typography>Filtrer par</Typography>
        <div className="navbar-nav">
        <div className="nav-item">
        <Button endIcon={<KeyboardArrowDownIcon />}>Disponibilité</Button>
        </div>
        <div className="nav-item">
        <Button endIcon={<KeyboardArrowDownIcon />}>Langue parlé</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPar;
