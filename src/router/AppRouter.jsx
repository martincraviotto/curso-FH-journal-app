import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalPage } from '../journal/pages/JournalPage'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {
  const {status} = useSelector(state =>state.auth);
  if(status === 'checking'){
    return <CheckingAuth />
  }

  return (
    <Routes>
        {/* Login y registro */}
        <Route path='/auth/*' element={<AuthRoutes />} />

        {/* JournalApp */}
        <Route path='/*' element={<JournalPage />}/>
    </Routes>
  )
}
