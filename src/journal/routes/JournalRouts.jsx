import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'

export const JournalRouts = () => {
  return (
    <Routes>
        <Route path='/' element={<JournalPage />} />
        
        <Route path='/*' element={<Navigate to="/" />} />
    </Routes>
  )
}
