import React from 'react'
import {Divider, Header, Icon, Select, Input, Grid, Button } from 'semantic-ui-react'


const LocationOptions = [
  { key: 'all', text: 'All - NewZealand', value: 'all' },
  { key: 'auckland', text: 'Auckland', value: 'auckland' },
  { key: 'invercargill', text: 'Invercargill', value: 'invercargill' },
]

const ItemOptions = [
  { key: 'all', text: 'All - Items', value: 'all' },
  { key: 'car', text: 'Car', value: 'car' },
  { key: 'clothes', text: 'Clothes', value: 'clothes' },
  { key: 'others', text: 'Others', value: 'others' },
]

const InputExampleActions = () => (
  <>
      <Divider horizontal>
      <Header as='h4'>
        <Icon name='search' />
        Search Items
      </Header>
    </Divider>

  <Grid>
    <Grid.Column width={5}>
    </Grid.Column>
    <Grid.Column width={6}>
        <Input type='text' placeholder='Search...' action>
          <input />  
          <Select compact options={LocationOptions} defaultValue='all' /> 
          <Select compact options={ItemOptions} defaultValue='all' /> 
          <Button type='submit'>Search</Button>
        </Input>
      </Grid.Column>
      <Grid.Column width={5}>
      </Grid.Column>
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
)

export default InputExampleActions