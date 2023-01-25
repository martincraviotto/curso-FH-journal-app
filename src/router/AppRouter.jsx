import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalPage } from '../journal/pages/JournalPage'

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y registro */}
        <Route path='/auth/*' element={<AuthRoutes />} />

        {/* JournalApp */}
        <Route path='/*' element={<JournalPage />}/>
    </Routes>
  )
}
