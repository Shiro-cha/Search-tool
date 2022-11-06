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
              <div className="col-sm-12">
              <Button variant="contained">Prendre rendez-vous</Button>
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
