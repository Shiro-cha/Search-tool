import Box from "@mui/material/Box"
import Button from "@mui/material/Button"


function LaboratoireContainer() {
  return (
    <div className="container">
        <Box className="shadow w-90">
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
              <div className="col-sm-6">
              Logo laboratoire here
              </div>
              <div className="col-sm-6">
              info laboratoire here
              </div>
              <div className="col-sm-8">
              <Button variant="contained" sx={{width:"100%",background:"#1b7895"}}>Prendre rendez-vous</Button>
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
