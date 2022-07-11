import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import authRoutes from './routes/authRoute';
import routes from './routes/privateRoute';


function App() {

  const authRoute = authRoutes.map(({path, component: Component}) => (
    <Route key={path} path={path} element={ <Component />} />
  ));
  
  const privateRoutes = routes.map(({ path, component: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ))

  return (
    <Suspense fallback="Loading app...">
      <Router>
        <Routes>
          {authRoute}
          {privateRoutes}
          <Route path='*' element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;