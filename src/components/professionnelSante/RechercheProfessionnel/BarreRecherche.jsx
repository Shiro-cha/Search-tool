import React , {useState} from "react"
import "./BarreRecherche.css"
import Search from "@mui/icons-material/Search"
import Button from "@mui/material/Button"


function BarreRecherche() {
  const [valeurRecherche,setValeurRecherche] = useState("")


function rechercheHandler(e){
  if(e.target.value.trim()){
    setValeurRecherche(e.target.value)
  }
}
  return (
    <div className="container">
      <div className="input-group mt-3">
        <div className="input-group-prepend bg-none">
          <div className="input-group-text">
            <Search className="icon-Search"/>
          </div>
        </div>
        <nput type="text" className="form-control" value={valeurRecherche} onChange={rechercheHandler} name="recherche"  placeholder="Nom, spécialité, établissement..."/>
        <div className="input-group-prepend">
          <Button className="btn-Search">Recherce</Button>
        </div>
      </div>
    </div>
  );
}
export default BarreRecherche;
