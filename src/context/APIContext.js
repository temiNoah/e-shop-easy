import React, { createContext, useState, useEffect, useContext } from 'react'
// import ProductsAPI from './api/ProductsAPI'
// import UserAPI from './api/UserAPI'
// import CategoriesAPI from './api/CategoriesAPI'

//import axios from 'axios'

//import AuthService from '../api/resources/auth.service'
import { api } from '../api/api'
// import ExpenseAPI from '../api/resources/expenseAPI';

const {
    ProductAPI,
    MockAPI,
} = api;

export const APIContext = createContext()


export const APIProvider = ({ children }) => {


    const state = {
        //  Token: [token, setToken],
        //AuthServiceAPI: AuthServiceAPI(),
        ProductAPI: ProductAPI(),
        MockAPI: MockAPI()
       
    }

    return (
        <APIContext.Provider value={state}>
            {children}
        </APIContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(APIContext)
}