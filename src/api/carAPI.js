import { useState, useEffect, useContext } from 'react'
//import axios from 'axios'
//import USERTYPE from '../../assets/data/userType'
//import axios from './axios';
//import { userColumns, userRows } from "../../datatablesource";
//import useAxiosPrivate from '../hooks/useAxiosPrivate'
//import AuthUserContext from '../../context/AuthUserContext';
import axiosPrivate from './axios'

function CarAPI() {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    // const [authUser, setAuthUser] = useContext(AuthUserContext)
    //const axiosPrivate = useAxiosPrivate()

    const path = "car/";


    // useEffect(() => {
    //     alert("user id :" + authUser.userId)
    // }, [])

    const createCar = async (car) => {

        const url = path + `create`;
        const response = await axiosPrivate().post(url, { ...car }).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response


    }


    const deleteCar = async (carId, dealerId) => {

        const url = path + `${carId}` + "?dealerId=" + dealerId;;
        const response = await axiosPrivate().delete(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response


    }

    const updateCar = async (car, carDatabaseId) => {

        const url = path + 'update?id=' + carDatabaseId;
        const response = await axiosPrivate().put(url, { ...car }).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response


    }


    const getAll = async () => {

        const url = path + 'all';
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response

    }

    const getCarDetails = async (carId) => {
        const url = path + carId;
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response;

        // return new Promise((resolve, reject) => resolve(getDummyData()))
    }

    const getCarList = (dealerId) => {
        const url = path + "?dealerId=" + dealerId;
        const response = axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response

        // return new Promise((resolve, reject) => resolve(getDummyTableData()))

    }

    const searchCars = (filter) => {
        const url = path + 'search';
        const response = axiosPrivate().post(url, { ...filter }).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response
        // return new Promise((resolve, reject) => resolve(getDummyTableData()))
    }

    const searchByFilterSet = (filter) => {
        const url = path + 'search-by-filter-set';
        const response = axiosPrivate().post(url, { ...filter }).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response
        // return new Promise((resolve, reject) => resolve(getDummyTableData()))
    }


    const deleteAll = async (dealerId) => {
        const url = path + "?dealerId=" + dealerId;
        const response = await axiosPrivate.delete(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response
    }

    const getTotalCount = async () => {
        const url = path + `totalCount`;
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response
    }


    const getAllCarBrands = async () => {
        const url = path + `all/brands`;
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response
    }

    const getAllCarModels = async () => {
        const url = path + `all/models`;
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response
    }

    const getAllCarYears = async () => {
        const url = path + `all/years`;
        const response = await axiosPrivate().get(url).catch(
            error => {
                if (error.response)
                    return Promise.reject(error.response)
                else if (error.request)
                    return Promise.reject(error.request)
                else
                    return Promise.reject(error)
            }
        );
        return response
    }






    

    return {
        createCar,
        updateCar,
        deleteCar,
        getAll,
        getCarDetails,
        getCarList,
        searchCars,
        deleteAll,
        getTotalCount,
        searchByFilterSet,
        getAllCarBrands,
        getAllCarModels,
        getAllCarYears
    }

}

export default CarAPI


