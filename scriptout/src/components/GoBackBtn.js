import { useNavigate } from "react-router-dom";

export default function GoBackBtn() {

  const navigate = useNavigate();

  return(
  <button type="button" id="go-back" alt="Gå tilbake" onClick={() => navigate(-1)}><i className="bi bi-arrow-left"></i></button>
  )
}

/*
* Knapp som blir brukt for å gå tilbake til forrige side
* Brukes i komponentene HistoryPage, InfoPage, RulesPage, SettingsPage, Taskpage og TheoryPage
* Kilde til useNavigate: https://reactrouter.com/en/main/hooks/use-navigate 
*/