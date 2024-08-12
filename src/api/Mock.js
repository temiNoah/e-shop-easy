import { useState, useEffect, useContext } from 'react'
//import axios from 'axios'
//import USERTYPE from '../../assets/data/userType'
//import axios from './axios';
//import { userColumns, userRows } from "../../datatablesource";
//import useAxiosPrivate from '../hooks/useAxiosPrivate'
//import AuthUserContext from '../../context/AuthUserContext';
import axiosPrivate from './axios'

function MockAPI() {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    // const [authUser, setAuthUser] = useContext(AuthUserContext)
    //const axiosPrivate = useAxiosPrivate()

    const path = "product/";
    const products =  [
        {
            "product_id": 1,
            "name": "Smartphone",
            "description": "High-end smartphone with advanced features.",
            "price": 599.99,
            "unit": "Piece",
            "image": "https://example.com/images/smartphone.jpg",
            "discount": 10,
            "availability": true,
            "brand": "BrandX",
            "category": "Electronics",
            "rating": 4.5,
            "reviews": [
                {
                    "user_id": 1,
                    "rating": 5,
                    "comment": "Great phone with a superb camera!"
                },
                {
                    "user_id": 2,
                    "rating": 4,
                    "comment": "Good performance, but the battery life could be better."
                }
            ]
        },
        {
            "product_id": 2,
            "name": "Laptop",
            "description": "Powerful laptop for work and gaming.",
            "price": 999.99,
            "unit": "Piece",
            "image": "https://example.com/images/laptop.jpg",
            "discount": 5,
            "availability": true,
            "brand": "BrandY",
            "category": "Electronics",
            "rating": 4.7,
            "reviews": [
                {
                    "user_id": 3,
                    "rating": 5,
                    "comment": "Excellent laptop for gaming and work tasks."
                },
                {
                    "user_id": 4,
                    "rating": 4,
                    "comment": "Good value for the price."
                }
            ]
        },
        {
            "product_id": 3,
            "name": "Wireless Headphones",
            "description": "Premium wireless headphones with noise-cancellation.",
            "price": 149.99,
            "unit": "Piece",
            "image": "https://example.com/images/headphones.jpg",
            "discount": 15,
            "availability": true,
            "brand": "SoundMasters",
            "category": "Electronics",
            "rating": 4.8,
            "reviews": [
                {
                    "user_id": 5,
                    "rating": 5,
                    "comment": "Top-notch sound quality and comfort."
                },
                {
                    "user_id": 6,
                    "rating": 4,
                    "comment": "Impressive noise-cancellation, but a bit pricey."
                }
            ]
        },
        {
            "product_id": 4,
            "name": "Smartwatch",
            "description": "Feature-packed smartwatch with fitness tracking.",
            "price": 199.99,
            "unit": "Piece",
            "image": "https://example.com/images/smartwatch.jpg",
            "discount": 10,
            "availability": true,
            "brand": "TechWear",
            "category": "Wearables",
            "rating": 4.6,
            "reviews": [
                {
                    "user_id": 7,
                    "rating": 4,
                    "comment": "Great value for the features it offers."
                },
                {
                    "user_id": 8,
                    "rating": 5,
                    "comment": "Sleek design and accurate fitness tracking."
                }
            ]
        },
        {
            "product_id": 5,
            "name": "Professional DSLR Camera",
            "description": "High-quality DSLR camera for photography enthusiasts.",
            "price": 499.99,
            "unit": "Piece",
            "image": "https://example.com/images/camera.jpg",
            "discount": 5,
            "availability": true,
            "brand": "PhotoPro",
            "category": "Cameras",
            "rating": 4.9,
            "reviews": [
                {
                    "user_id": 9,
                    "rating": 5,
                    "comment": "Exceptional image quality and versatility."
                },
                {
                    "user_id": 10,
                    "rating": 4,
                    "comment": "A bit heavy, but the results are worth it."
                }
            ]
        },
        {
            "product_id": 6,
            "name": "Smart TV",
            "description": "High-definition smart TV with built-in streaming apps.",
            "price": 799.99,
            "unit": "Piece",
            "image": "https://example.com/images/tv.jpg",
            "discount": 8,
            "availability": true,
            "brand": "ViewTech",
            "category": "Electronics",
            "rating": 4.7,
            "reviews": [
                {
                    "user_id": 11,
                    "rating": 5,
                    "comment": "Stunning picture quality and user-friendly interface."
                },
                {
                    "user_id": 12,
                    "rating": 4,
                    "comment": "A great addition to our home entertainment setup."
                }
            ]
        },
        {
            "product_id": 7,
            "name": "Tablet",
            "description": "Compact tablet for productivity and entertainment.",
            "price": 299.99,
            "unit": "Piece",
            "image": "https://example.com/images/tablet.jpg",
            "discount": 12,
            "availability": true,
            "brand": "TabTech",
            "category": "Electronics",
            "rating": 4.4,
            "reviews": [
                {
                    "user_id": 13,
                    "rating": 4,
                    "comment": "Good value for the price, but the battery life could be better."
                },
                {
                    "user_id": 14,
                    "rating": 5,
                    "comment": "Ideal for both work and entertainment on the go."
                }
            ]
        },
        {
            "product_id": 8,
            "name": "Gaming Console",
            "description": "Next-gen gaming console for immersive gaming experiences.",
            "price": 399.99,
            "unit": "Piece",
            "image": "https://example.com/images/console.jpg",
            "discount": 10,
            "availability": true,
            "brand": "GameX",
            "category": "Gaming",
            "rating": 4.8,
            "reviews": [
                {
                    "user_id": 15,
                    "rating": 5,
                    "comment": "Incredible gaming performance and graphics."
                },
                {
                    "user_id": 16,
                    "rating": 4,
                    "comment": "A must-have for gaming enthusiasts."
                }
            ]
        },
        {
            "product_id": 9,
            "name": "Energy-Efficient Refrigerator",
            "description": "Modern refrigerator with energy-saving features.",
            "price": 599.99,
            "unit": "Piece",
            "image": "https://example.com/images/refrigerator.jpg",
            "discount": 5,
            "availability": true,
            "brand": "CoolTech",
            "category": "Appliances",
            "rating": 4.6
        }
    ]


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

    const getCarDetails = async (id) => {
       const index = id-1 ;
       const r= products[index]
       const data ={data:r}
       return data;
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
        const data = {data: {data:products}}
        return Promise.resolve(data)
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

export default MockAPI


