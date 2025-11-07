import React from 'react';
import {BrowserRouter, Routes, Route, Navigate, useParams} from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Profile from './components/profile/Profile.jsx';
import NotFound from './components/notFound/NotFound.jsx';
import Login from './components/login/Login.jsx';
import NoAccess from './components/noAccess/NoAccess.jsx';
import ProfileUpdate from './components/profile/ProfileUpdate.jsx';
import AnonymousSharing from './components/anonymous/AnonymousSharing.jsx';
import AnonymousPost from './components/anonymous/AnonymousPost.jsx';
import AllAnonymousPost from './components/anonymous/AllAnonymousPost.jsx';
import AboutUs from './components/aboutUs/AboutUs.jsx';
import Createjournal from './components/journal/Createjournal.jsx';
import Readjournal from './components/journal/Readjournal.jsx';
import Readonejournal from './components/journal/Readonejournal.jsx';
import MoodTrack from './components/moodtrack/MoodTrack.jsx';
import Quiz from './components/quiz/Quiz.jsx';

import Therapist from './components/AITherapist/Therapist.jsx';

import Signup from './components/SignupIn/Signup.jsx';
import JournalDetail from './components/journal/Readonejournal.jsx';
import UpdateJournal from './components/journal/Updatejournal.jsx';



const PrivateRoute = ({ children }) => {
  const { username: usernameFromUrl } = useParams(); // Extract username from URL
  const token = localStorage.getItem('token');
  const usernameFromStorage = localStorage.getItem('tokenUser');

  if (!token || usernameFromUrl !== usernameFromStorage) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenUser');
    return <Navigate to="/unauthorizedAccess" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorizedAccess" element={<NoAccess />} />
        <Route path="/:username/updateprofile" element={<PrivateRoute><ProfileUpdate /></PrivateRoute>} />
        <Route path="/:username/anonymoussharing" element={<PrivateRoute><AnonymousSharing /></PrivateRoute>} />
        <Route path="/:username/createanonymouspost" element={<PrivateRoute><AnonymousPost /></PrivateRoute>} />
        <Route path="/:username/allanonymousposts" element={<PrivateRoute><AllAnonymousPost /></PrivateRoute>} />
        <Route path="/:username/mood" element={<PrivateRoute><MoodTrack /></PrivateRoute>} />
        <Route path="/:username/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
        <Route path="/:username/therapist" element={<PrivateRoute><Therapist /></PrivateRoute>} />
        <Route path="/aboutus" element={<AboutUs />} /> 
        


        <Route path='/:username/createjournal' element={<PrivateRoute><Createjournal /></PrivateRoute>} />
        <Route path='/:username/readjournals' element={<PrivateRoute><Readjournal /></PrivateRoute>} />
        <Route path='/:username/readjournals/:id' element={<PrivateRoute><JournalDetail /></PrivateRoute>} />
        <Route path="/:username/journals/:id/edit" element={<PrivateRoute><UpdateJournal /> </PrivateRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
