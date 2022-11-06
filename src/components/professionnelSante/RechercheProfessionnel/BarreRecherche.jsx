import "./BarreRecherche.css"

function BarreRecherche() {
  return (
    <div className="container">
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <span className="fa fa-search"></span>
          </div>
        </div>
        <input type="text" className="form-control" name="" value="">
      </div>
    </div>
  );
}
export default BarreRecherche;
