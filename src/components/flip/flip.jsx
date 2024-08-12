import React, { useState, useEffect } from 'react'
//import H1 from 'reactstrap';
//import { labels } from '../../../utilities/ui-labels'
import SubNav from '../subnav/SubNav';
//import Datatable from '../../datatable/Datatable';
// import Single from '../../../pages/admin/users/customers/view/Single';
//import New from '../../../pages/admin/users/customers/add/New';
//import { userInputs } from '../../../formSource';
import './style.scss'


export default function Flip(props) {
    const { configs } = props;

    // const [activeMainNav, setActiveMainNav] = useState(0);
    const [activeNavContent, setActiveNavContent] = useState(configs[0]);
    const [navigation, setNavigation] = useState([configs[0]]);

    // const customerNavContents = [
    //     { name: labels.customers, path: "/all" },
    //     { name: labels.view, path: "/view" },
    //     { name: labels.add, path: "/add" },
    // ]
    // const root = "custmer"

    // const artisanNavContents = [
    //     { name: labels.artisans, path: "/all" },
    //     { name: labels.view, path: "/view" },
    //     { name: labels.add, path: "/add" },
    // ]
    // const dealersNavContents = [
    //     { name: labels.dealers, path: "/all" },
    //     { name: labels.view, path: "/view" },
    //     { name: labels.add, path: "/add" },
    // ]


    // useEffect(() => {
    // if (activeMainNav == 0) {
    //     setNavigation([customerNavContents[0]]);
    //     setActiveNavContent(customerNavContents[0]);
    // }

    // else if (activeMainNav == 1) {
    //     setNavigation([artisanNavContents[0]])
    //     setActiveNavContent(artisanNavContents[0]);
    // }

    // else if (activeMainNav == 2) {
    //     setNavigation([dealersNavContents[0]])
    //     setActiveNavContent(dealersNavContents[0])
    // }

    // else
    //     setNavigation([])

    //load the navigatio
    // const navs = props.configs.map(
    //                  (config)=>{
    //                          return {"name":config.name,"path":config.path}
    //                  });
    //[{name:"",path:"",content:""},{name:"",path:"",content:""}]
    // setNavigation([configs[0]]);
    // setActiveNavContent(configs[0])


    // }, [])


    const handleSubNav = (e) => {
        const isNotlastChildLink = navigation[navigation.length - 1].name != e.name

        if (isNotlastChildLink) {
            const foundIndex = navigation.findIndex(item => item.name === e.name);

            console.log(foundIndex)

            setNavigation(
                (prev) => prev.filter(
                    (obj, index) => index <= foundIndex
                )
            )

        }
        setActiveNavContent(e)

    }

    const handleAddNav = (e) => {
        console.log(JSON.stringify(e))
        const foundIndex = navigation.findIndex(item => item.name === e.name);
        //console.log(foundIndex)
        if (foundIndex == -1) {
            // console.log(foundIndex)
            setNavigation((prev) => {
                prev.push(e);
                // console.log(JSON.stringify(prev)); 
                return prev
            })

            //setActiveNavContent(e);

        }
        // else {
        //     //replace the add with this eg { name: "view", path: `/view/${params.row.id}`, content:CarDetails }
        //     setNavigation(prev =>
        //         prev.filter(config => config.name != "view").push(e)
        //     )
        // }
        setActiveNavContent(e)

    }

    // const handleMainNav = (e, navs) => {
    //     const id = e.target.id;
    //     setActiveMainNav(id)
    //     setNavigation(navs)
    // }

    return (
        <div className="content">
            {/* <div className=''><h1 className='h1 test'>HDJSDLK</h1></div> */}
            <div>

                <SubNav onClick={handleSubNav} subNavs={navigation} />


                <activeNavContent.content title={activeNavContent.name} onClick={handleAddNav} configs={configs} activeNav={activeNavContent} />


                {/* {
                    activeMainNav == 0 && (
                        <div>


                            {activeNavContent.name == labels.customers &&<Datatable title={labels.customers} onClick={handleAddNav} />
                            }

                            {activeNavContent.name == labels.view && <Single />}

                            {activeNavContent.name == labels.add && <New inputs={userInputs} title={"Add New Custom"} />}

                        </div>
                    )
                } */}


            </div>

        </div>
    )
}
