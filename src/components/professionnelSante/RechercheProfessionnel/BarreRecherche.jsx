import React , {useState} from "react"
import "./BarreRecherche.css"
import Search from "@mui/icons-material/Search"
import Button from "@mui/material/Button"
import Input from "@mui/material/Input"

function BarreRecherche() {
  //const [valeurRecherche,setValeurRecherche] = useState("")


  return (
    <div className="container">
      <div className="input-group mt-3">
        <div className="input-group-prepend bg-none">
          <div className="input-group-text">
            <Search className="icon-Search"/>
          </div>
        </div>
        <Input type="text" className="form-control"  name="recherche"  placeholder="Nom, spécialité, établissement..."/>
        <div className="input-group-prepend">
          <Button className="btn-Search">Recherce</Button>
        </div>
      </div>
    </div>
  );
}
export default BarreRecherche;
