import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import NavSideBar from './components/NavSideBar';
import Table from './components/Table';
import * as data from './data.json';

export interface Tab {
  id: string;
  title: string;
  order: number;
  path: string;
}

const DummyTable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const datas: { data: Tab[] } = data;

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dummyTable');
    }

  }, [navigate, location.pathname]);

  return (
    <div className="App">
      <nav className='nav'>
        {datas.data.map(item => (
          <NavSideBar key={item.order} to={`/${item.id}`} page={item.title} />
        ))}
      </nav>

        <Routes>
          <Route path='/dummyTable' element={<Table title="Dummy Table" />} />
          <Route path='/dummyChart' element={<Table title="Dummy Chart" />} />
          <Route path='/dummyList' element={<Table title="Dummy List" />} />
        </Routes>
    </div>
  );
}

export default DummyTable;
