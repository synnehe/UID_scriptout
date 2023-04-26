import { useNavigate } from "react-router-dom";

export default function GoBackBtn() {

  const navigate = useNavigate();

  return(
  <button id="go-back" onClick={() => navigate(-1)}><i class="bi bi-arrow-left"></i></button>
  )
}