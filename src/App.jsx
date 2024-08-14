// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AppLayout from './ui/AppLayout';
import GlobalStyles from './styles/GlobalStyles';
import Notifications from './pages/notifications';
import Meetings from './pages/meetings';
import Tasks from './pages/tasks';
import Settings from './pages/settings';
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import PageNotFound from './pages/PageNotFound';
import ProtectedRoute from './ui/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 0
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
      <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
        <Route index element={<Navigate replace to ="dashboard"/>}></Route>
        <Route path = 'dashboard' element={<Dashboard/>}></Route>
        <Route path = 'notifications' element={<Notifications/>}></Route>
        <Route path = 'meetings' element={<Meetings/>}></Route>
        <Route path = 'tasks' element={<Tasks/>}></Route>
        <Route path = 'settings' element={<Settings/>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    <Toaster position="top-center" gutter={12} containerStyle={{margin: '8px'}} toastOptions={
      {success: { duration: 3000}, error: {duration: 5000}, style:{fontSize:'16px', maxWidth:'500px', padding: '16px 24px', backgroundColor: 'var(--color-grey-0)', color: 'var(--color-grey-700)'}}}/>
    </QueryClientProvider>
  )
}

export default App;
