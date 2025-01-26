import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './store';
import Layout from './components/Layout';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Post = React.lazy(() => import('./pages/Post'));
const Editor = React.lazy(() => import('./pages/Editor'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Profile = React.lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Router>
          <Layout>
            <React.Suspense
              fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:slug" element={<Post />} />
                <Route path="/write" element={<Editor />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </React.Suspense>
          </Layout>
        </Router>
      </HelmetProvider>
    </Provider>
  );
}

export default App;