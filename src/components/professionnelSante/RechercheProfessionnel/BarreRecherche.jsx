import React , {useState,useEffect} from "react"
import "./BarreRecherche.css"
import Search from "@mui/icons-material/Search"
import Button from "@mui/material/Button"



function BarreRecherche() {
  const [valeurRecherche,setValeurRecherche] = useState("")

//fonction hadler pour l'event onChange input recherche
function rechercheHandler(e){
  if(e.target.value.trim() || e.target.value===""){
    setValeurRecherche(e.target.value)
  }
}
useEffect(()=>{
  console.log(valeurRecherche);
},[valeurRecherche])
  return (
    <div className="container">
      <div className="input-group mt-3">
        <div className="input-group-prepend bg-none">
          <div className="input-group-text">
            <Search className="icon-Search"/>
          </div>
        </div>
        <input type="text"  className="form-control" onchange={rechercheHandler}  placeholder="Nom, spécialité, établissement"/>
                <div className="input-group-prepend">
          <Button className="btn-Search" disabled={valeurRecherche===""}>Recherce</Button>
        </div>
      </div>
    </div>
  );
}

export default BarreRecherche;
