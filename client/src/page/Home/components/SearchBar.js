import React, {useEffect, useState} from 'react'
import {Divider, Header, Icon, Input, Grid } from 'semantic-ui-react'
import {connect} from'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCollections  } from'../../../redux/item/item.selector';
import ControlledOpenSelectCategory from '../../../components/select/select';


const cityOptions =[
  {id: 1 ,name:'ALL - NewZealand', value:'all'},
  {id: 2 ,name:'Auckand', value:'auckland'},
  {id: 3 ,name:'Invercargill', value:'invercargill'}
]

const CategoryOptions =[
  {id: 1 ,name:'ALL - Items', value:'all'},
  {id: 2 ,name:' Car ', value:'car'},
  {id: 3 ,name:'Clothes', value:'clothes'},
  {id: 4 ,name:'Others', value:'others'},
]


const SearchBar = ({collections, setItems}) => {
  const [city, setCity] = useState('all');
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');


  const searchResult =( data ) => 
  data.filter((c) => c.title.indexOf(search) !== -1)

// Search condition...
  const filterComponents = (data)=>{  
       if(data !== null) {
         if(city !=='all'){
           if(category !== 'all'){
             if(search !=='') {
              const result = data.filter((item) =>(item.city === city && item.category === category))
              //const result = selectResult(data, city, category);
              // const filterResult = result.filter((c) => {
              //   return c.title.indexOf(search) !== -1;
              // });
              return setItems(searchResult(result))
             }   

             const result = data.filter((item) =>(item.city === city && item.category === category))            
             return setItems(result)
            } else if(search !=='') {
              const result = data.filter((item) =>(item.city === city))
              return setItems(searchResult(result))
            }
            const result = data.filter((item) =>(item.city === city))
            return setItems(result)

        } else if (category !== 'all') {

            if(search !==''){
                const result = data.filter((item) =>(item.category === category))
                return setItems(searchResult(result))
              }          

             const result =data.filter((item) =>(item.category === category))
             return setItems(result)
           } 
           
        else if(search !== ''){
          return setItems(searchResult(data))     
        }
         return  setItems(data);
       } 
    }
    
    useEffect(()=> {
      filterComponents(collections)    
      },[city, category, search])

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  return (
  <>
      <Divider horizontal>
      <Header as='h4'>
        <Icon name='search' />
        Search Items
      </Header>
    </Divider>
   <br/>
    <Grid textAlign="center">
      <ControlledOpenSelectCategory category={city} setCategory={setCity} options={cityOptions} title='city'/>
      <ControlledOpenSelectCategory category={category} setCategory={setCategory} options={CategoryOptions} title='category' />
      <Input type='text' placeholder='Search...'
          value={search} 
          onChange={handleSearchChange}>
          <input />
      </Input>  
    </Grid>
    <br/>
    <br/>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='clipboard list' />
        Item List
      </Header>
    </Divider>
  </>
  );
}

const mapStateToProps = createStructuredSelector ({
   collections : selectCollections
})


export default connect(mapStateToProps)(SearchBar)