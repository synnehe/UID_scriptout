import './App.css';
import './css/main.css'
import HomePage from './components/HomePage';
import IntroPage from './components/IntroPage';
import { Route, Routes } from 'react-router-dom';
import RulesPage from './components/RulesPage';
import SettingsPage from './components/SettingsPage';
import TaskPage from './components/TaskPage';
import InfoPage from './components/InfoPage';
import HistoryPage from './components/HistoryPage';
import TheoryPage from './components/TheoryPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/regler" element={<RulesPage />}/>
      <Route path="/innstillinger" element={<SettingsPage />}/>
      <Route path="/teori" element={<TheoryPage />}/>
      <Route path="/historie" element={<HistoryPage />}/>
      <Route path="/info" element={<InfoPage />}/>
      <Route path="/oppgave" element={<TaskPage />}/>
    </Routes>
    </>
  );
}

export default App;
