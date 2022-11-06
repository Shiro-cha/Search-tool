import Header from "../../components/professionnelSante/Header/Header.js"
import BarreRecherche from "../../components/professionnelSante/RechercheProfessionnel/BarreRecherche.jsx"
import FilterPar from "../../components/professionnelSante/RechercheProfessionnel/FilterPar.jsx"
import Typography from "@mui/material/Typography"
import LaboratoireContainer from "../../components/professionnelSante/RechercheProfessionnel/LaboratoireContainer.jsx"

function RechercheProfessionnel() {
  return (
    <>
    <Header/>
    <BarreRecherche/>
    <FilterPar/>
    <Typography>Trouver un laboratoire et réserver en ligne</Typography>
    <LaboratoireContainer/>
    </>
  );
}

export default RechercheProfessionnel;
