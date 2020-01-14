import React, {useState, useEffect}from 'react';
import SearchBar  from'./components/SearchBar';
import CardListContainer from'./components/CardList.Container';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from'../../redux/item/item.action';
//import CardList from'./components/CardList';
import {createStructuredSelector} from'reselect';
import {selectCollections, selectIsCollectionFetching} from'../../redux/item/item.selector';

const Home = ({collections, fetchCollectionsStart, isLoading}) => {
    
    const [items, setItems] = useState(null)

    useEffect(()=>{
     fetchCollectionsStart()  
    },[])

    useEffect(()=>{
        isLoading ? setItems(null) :setItems(collections)
       },[isLoading, collections])

    return (
    <>
        <SearchBar setItems ={setItems} />
        <CardListContainer items ={items} />      
    </>
    )
}



const mapDispatchToProps =dispatch=>({
    fetchCollectionsStart:()=> dispatch(fetchCollectionsStart())
})
 const mapStateToProps = createStructuredSelector ({
     collections: selectCollections,
     isLoading: selectIsCollectionFetching
 })
 
export default connect(mapStateToProps, mapDispatchToProps)(Home)
