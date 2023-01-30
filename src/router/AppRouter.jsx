import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { FirebaseAuth } from '../firebase/config'
import { JournalPage } from '../journal/pages/JournalPage'
import { login, logout } from '../store/auth'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {
  const {status} = useSelector(state =>state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if(!user) return dispatch(logout());
      
      const {uid, email,phoneUrl} = user;
      dispatch(login({uid, email,phoneUrl}));
    });
  }, [])
  


  if(status === 'checking'){
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        status=== 'authenticated'
          ? <Route path='/*' element={<JournalPage />}/>
          : <Route path='/auth/*' element={<AuthRoutes />} />
      }

      <Route path='/*' element={<Navigate to='/auth/login' />} />

        {/* Login y registro */}
        {/* <Route path='/auth/*' element={<AuthRoutes />} /> */}

        {/* JournalApp */}
        {/* <Route path='/*' element={<JournalPage />}/> */}
    </Routes>
  )
}
