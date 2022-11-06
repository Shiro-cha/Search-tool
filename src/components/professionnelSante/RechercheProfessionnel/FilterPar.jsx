import Typography from "@mui/material/Typography"

function FilterPar() {
  return (
    <div className="container-fluid">
      <div className="navbar navbar-expand bg-light mt-2">
        <Typography>Filtrer par</Typography>
        <div className="navbar-nav">
        <div className="nav-item">
        Disponibilité
        </div>
        <div className="nav-item">
        Langue parlé
        </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPar;
