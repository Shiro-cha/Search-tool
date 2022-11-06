import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import "./LaboratoireContainer.css"


function LaboratoireContainer() {
  return (
    <div className="container">
        <Box className="shadow w-90 p-2">
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
              <div className="col-sm-2">
              MyLogo
              </div>
              <div className="col-sm-12">
              <h4 className="nom-etablissement">Aphalbo laboratory</h4>
              <p className="type-etablissement">Laboratoire</p>
              <p className="address-etablissement">Lot 3TER Ambohidratrimo</p>
              </div>
              <div className="col-sm-12 text-center">
              <Button variant="contained" sx={{width:"60%",margin:"0 auto",background:"#1b7895","&:hover":{
                background:"#1b7895"
              }}}>Prendre rendez-vous</Button>
              </div>
              </div>
            </div>
            <div className="col-sm-6">
            Details Disponibilité here
            </div>
          </div>
        </Box>
    </div>
  );
}

export default LaboratoireContainer;
