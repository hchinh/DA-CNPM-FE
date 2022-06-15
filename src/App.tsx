import MainWrapper from './Main';
import Routes from 'routes';

const App = () => {
  document.title = 'Spider Shop';
  return (
    <MainWrapper>
      <Routes />
    </MainWrapper>
  );
};

export default App;
