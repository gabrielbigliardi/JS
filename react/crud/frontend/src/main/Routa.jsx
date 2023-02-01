import React from 'react'
import { Route, Switch, NavLink, Link, Routes, Redirect } from 'react-router-dom'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default function Routa() {
    <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/users' element={<UserCrud />} />
        <Redirect from='*' to='/'/>
    </Routes>
}