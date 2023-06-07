import './App.css';
import { Route, Routes } from 'react-router';
import RootLayout from './components/RootLayout'
import Homepage from './pages/Homepage'
import MealCategories from './pages/MealCategories';
import MealSingleCategory from './pages/MealSingleCategory';
import SinglePage from './pages/SinglePage';
import Search from './pages/Search';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/categories' element={<MealCategories />} />
          <Route path='/category/:mealName' element={<MealSingleCategory />} />
          <Route path='/:id' element={<SinglePage />} />
          <Route path='/search/:search' element={<Search />} />
          <Route path='*' element={<PageNotFound />} />

        </Route>
      </Routes >
    </>

  );
}

export default App;
