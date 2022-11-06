import "./BarreRecherche.css"
import Search from "@mui/icons-material/Search"
import Button from "@mui/material/Button"

function BarreRecherche() {
  return (
    <div className="container">
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <Search />
          </div>
        </div>
        <input type="text" className="form-control" name="" value="" />
        <div className="input-group-prepend">
          <Button>Recherce</Button>
        </div>
      </div>
    </div>
  );
}
export default BarreRecherche;
