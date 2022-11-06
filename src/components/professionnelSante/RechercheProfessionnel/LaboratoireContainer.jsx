import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import DisponibiliteSchedule from "./DisponibiliteSchedule.jsx"
import "./LaboratoireContainer.css"


function LaboratoireContainer() {
  return (
    <div className="container bg-light">
        <Box className="shadow w-90 p-4">
          <div className="row">
            <div className="col-sm-5">
              <div className="row">
              <div className="col-sm-3">
              <div className="my-logo">MyLogo</div>
              </div>
              <div className="col-sm-9">
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
            <div className="col-sm-7">
              <DisponibiliteSchedule />
            </div>
          </div>
        </Box>
    </div>
  );
}

export default LaboratoireContainer;
