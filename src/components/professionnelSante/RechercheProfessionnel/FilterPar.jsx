import React , {useState} from "react"
import Typography from "@mui/material/Typography"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function FilterPar() {
  const [selectDisponibilte,setSelectDisponibilte] = useState(false)
  const [selectLangue,setSelectLangue] = useState(false)
  const [anchorEl,setAnchorEl]=(null)
  function handleClick(e){
    if(e.currentTarget.id==="disponibilite"){
      setAnchorEl(null)
      if(selectDisponibilte){
        setAnchorEl(null)
      }else{
        setAnchorEl(e.currentTarget)
      }
      setSelectDisponibilte(!selectDisponibilte)
    }else if(e.currentTarget.id==="langue"){
      setAnchorEl(null)
      if(selectLangue){
        setAnchorEl(null)
      }else{
        setAnchorEl(e.currentTarget)
      }
      setSelectDisponibilte(!setSelectLangue)
    }
  }
  return (
    <div className="container-fluid">
      <div className="navbar navbar-expand bg-light mt-2">
        <Typography sx={{textTransfrom:"uppercase",color:"#606060"}}>Filtrer par</Typography>
        <div className="navbar-nav">
        <div className="nav-item">
        <Button endIcon={<KeyboardArrowDownIcon />} onClick={handleClick} id="disponibilite">Disponibilité</Button>
        <Menu
        open={selectDisponibilte}
        anchorEl={anchorEl}
        >
        <MenuItem>
        <Typography>Matin</Typography>
        </MenuItem>
        <MenuItem>
        <Typography>Après-midi</Typography>
        </MenuItem>
        </Menu>
        </div>
        <div className="nav-item">
        <Button endIcon={<KeyboardArrowDownIcon />} onClick={handleClick} id="langue">Langue parlé</Button>
        <Menu
        open={selectLangue}
        anchorEl={anchorEl}
        >
        <MenuItem>
        <Typography>Anglais</Typography>
        </MenuItem>
        <MenuItem>
        <Typography>Français</Typography>
        </MenuItem>
        </Menu>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPar;
