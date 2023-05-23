import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import { HeroRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    return (
        <>
            <Routes>

                {/* <Route path='login' element={<Login />} /> */}

                {/* <Route path='login' element={<PublicRoute>
                    <Login />
                </PublicRoute>} /> */}

                <Route path='login/*' element={
                    <PublicRoute>
                       <Routes>
                            <Route path='/*' element={<Login />} />
                       </Routes>
                    </PublicRoute>
                } />


                <Route path='/*' element={<PrivateRoute>
                    <HeroRoutes />
                </PrivateRoute>} />
                {/* <Route path='/*' element={<HeroRoutes />} /> */}
            </Routes>
        </>
    )
}
