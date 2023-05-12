import { useNavigate } from "react-router-dom";

export default function GoBackBtn() {

  const navigate = useNavigate();

  return(
  <button type="button" id="go-back" alt="Gå tilbake" onClick={() => navigate(-1)}><i className="bi bi-arrow-left"></i></button>
  )
}