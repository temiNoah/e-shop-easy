import React, { useContext, useEffect, useState, useCallback, useRef } from 'react'
import {
    Row, Col, Spinner, Modal, ModalBody, ModalHeader,
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
import { APIContext } from '../../../../context/APIContext';
import { StoreItem } from './storeItems';
import { connect } from 'react-redux'
import {
    showErrorMessage,
    showSuccessMessage,
    dismissErrorMessage,
    dismissSuccessMessage,
    updateLoading
} from '../../../../redux/actions/tunnel';
import CustomSpinner from '../../../../components/loaders/spinner';
import './style.scss'
import { useInfiniteQuery } from 'react-query';
//import CustomImageGallery from '../../../../../components/imageGallery/imageGallery'
import CustomCarousel from '../../../../components/carousel/Carousel'




function ProductThumbNailView(props) {
    const state = useContext(APIContext);
    const { getCarList, getAll, searchCars } = state.CarAPI
    const [productItems, setProductItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [showSlider, setShowSlider] = useState(false)
    const [modal, setModal] = useState(false);
    const [maximize, setMaximize] = useState(false);

    const pageSize = 1; let i = 0;

    let { fetchNextPage, hasNextPage, isFetchingNextPage, data, status, error } = useInfiniteQuery(
        '/search',
        async ({ pageParam = 1 }) => {
            const p = await searchCars({ pageNum: pageParam - 1, pageSize: pageSize }); //console.log("calling.....")
            setLoading(false);
            return p
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                const pageNum = parseInt(JSON.parse(lastPage.config.data).pageNum)
                const total = allPages[0].data.totalDocs
                const allPageCount = total % pageSize == 0 ? Math.trunc(total / pageSize) : Math.trunc(total / pageSize) + 1;
                const nextPage = pageNum + 1 + 1
                return nextPage - 1 < allPageCount ? nextPage : undefined
            }
        })


    const toggle = () => {
        //setModal((prev) => !prev)
        setShowSlider((prev) => !prev)
        // setSelectedImg(imgUrl)
    };






    useEffect(() => {
        // console.log("data:" + JSON.stringify(data))
        if (data?.pages?.length > 0) {
            //console.log("data:" + JSON.stringify(data))
            setProductItems(
                (prev) => {
                    let arr = []
                    data.pages.forEach((page, index) => {

                        const newCars = page.data.data.map((item, index) =>
                        ({
                            id: item._id,
                            name: item.manufacturer,
                            price: item.sellingPrice,
                            imgUrl: item?.images[0],
                            dealerID: item.dealerID,
                            model: item.model,
                            speed: item.speed,
                            transmissionType: item.transmissionType,
                            purpose: item.purpose

                        }));
                        arr.push(...newCars)
                    })
                    return arr

                }
            )
            console.log("productItem:" + JSON.stringify(productItems))
        }

        // return () => {
        //     // Cleanup code here
        //     setLoading(false)
        // };

        if (data)
            setLoading(false)

    }, [data]);



    // useEffect(
    //     (data) => {
    //         getAll().then(
    //             (res) => {
    //                 setLoading(false);
    //                 setProductItems(
    //                     res.data.map((item, index) =>
    //                     ({
    //                         id: index,
    //                         name: item.manufacturer,
    //                         price: item.sellingPrice,
    //                         imgUrl: item.images[0]
    //                     }
    //                     )))
    //             },
    //             (error) => {
    //                 const msg = error.data.msg;
    //                 props.showErrorMessage(msg);
    //                 setTimeout(() => { props.dismissErrorMessage() }, parseInt(process.env.REACT_APP_TOAST_DURATION_SHORT));
    //                 setLoading(false);
    //                 setMessage(error.description);

    //             }
    //         );
    //     },
    //     []);


    const intersectionObserver = useRef()
    const lastCarCard = useCallback((cardRef) => {

        if (isFetchingNextPage) return

        if (intersectionObserver.current) intersectionObserver.current.disconnect()

        const options = {
            root: null,
            rootMargin: "0px 0px 0px 0px",
            threshhold: 0
        }
        const callback = (targets) => {

            if (targets[0].isIntersecting && hasNextPage) {
                console.log('We are near the last post!')
                fetchNextPage();
                cardRef.style.backgroundColor = "red"
                cardRef.style.border = "1px solid #000"
                // intersectionObserver.current.unobserve(cardRef)
            }

        }
        intersectionObserver.current = new IntersectionObserver(callback)

        if (cardRef) intersectionObserver.current.observe(cardRef);
    }, [hasNextPage]);


    console.log(productItems.length);//(JSON.stringify(data))
    return loading ?
        <CustomSpinner />
        :
        <div>
            <div className='customer-car-thumbnailview-wrapper'>
                <div className="customer-car-thumbnailview" >
                    {
                        productItems.map((item, index) => {

                            if (productItems.length === index + 1) {

                                return <StoreItem {...item} ref={lastCarCard} onClick={() => setShowSlider(true)} key={item.id} />

                            } else {
                                return <StoreItem {...item} onClick={() => setShowSlider(true)} key={item.id} />
                            }
                        })

                    }
                </div>
            </div>

            {(status === 'error') && <p className='center'>Error: {error.message}</p>}
            {isFetchingNextPage && <div><h3>Loading...</h3></div>}

            {/* {showSlider && */}
            <Modal isOpen={showSlider} size='lg' fade={true} centered={true} fullscreen={maximize}>
                <ModalHeader style={{ display: 'flex', justifyContent: 'flex-end', background: 'rgba(243,242,240,0.9)' }}>
                    <i class="ri-aspect-ratio-line" onClick={() => setMaximize((prev) => !prev)} style={{ fontSize: '13px' }}>
                    </i> <i class="ri-close-line" onClick={() => toggle()} style={{ color: 'black', fontSize: '15px' }}></i>
                </ModalHeader>
                <ModalBody
                    className={""}
                    style={{
                        backgroundColor: 'rgba(243,242,240,0.9)',
                        //  background: 'linear-gradient(0.25turn, rgba(243, 242, 240, 0.3) 10 %, rgba(243, 242, 240, 1) 50 %, rgba(243, 242, 240, 1) 80 %)'
                    }}
                >
                    <CustomCarousel
                        items={
                            productItems.map(
                                (item, index) => ({
                                    caption: 'Sample Caption One',
                                    src: item.imgUrl,
                                    altText: 'Slide One',
                                    key: index
                                })

                            )
                        }
                    />

                </ModalBody>
            </Modal>


        </div>




}
function mapStateToProps(state) {
    return {
        isLoading: state.tunnel.isLoading,
        errorMessage: state.tunnel.errorMessage,
        successMessage: state.tunnel.successMessage,
        loadingPercentage: state.tunnel.loadingPercentage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dismissErrorMessage: () => dispatch(dismissErrorMessage()),
        dismissSuccessMessage: () => dispatch(dismissSuccessMessage()),
        showErrorMessage: message => dispatch(showErrorMessage(message)),
        showSuccessMessage: message => dispatch(showSuccessMessage(message)),
        updateLoading: (isLoading, percentage = null) => dispatch(updateLoading({ isLoading, percentage }))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductThumbNailView)
