import React , {useState} from 'react' ;
import "./Style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from "./Navbar.js"

const uniqueList = [
    ...new Set(Menu.map((currElem) => {
   return currElem.category;
} )
),
"All",
];
console.log(uniqueList)
const Restaurant = () => {
    const [menuData, setMenuData]= useState(Menu);
    const [menuList, setMenuList]=useState(uniqueList);
    console.log(setMenuList)
    
    const filterItem = (category) => {
        if (category==="All"){
            setMenuData(Menu);
            return
        }
        const updatedList=Menu.filter((currElem) => {
           return currElem.category === category;
     } );
     setMenuData(updatedList);
    }; 
    return (

        <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant
