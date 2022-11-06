import Header from "../../components/professionnelSante/Header/Header.js"
import BarreRecherche from "../../components/professionnelSante/RechercheProfessionnel/BarreRecherche.jsx"
import FilterPar from "../../components/professionnelSante/RechercheProfessionnel/FilterPar.jsx"
import Typography from "@mui/material/Typography"

function RechercheProfessionnel() {
  return (
    <>
    <Header/>
    <BarreRecherche/>
    <FilterPar/>
    <Typography>Trouver un laboratoire et réserver en ligne<Typography/>
    
    </>
  );
}

export default RechercheProfessionnel;
