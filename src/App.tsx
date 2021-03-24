import React, { useState } from 'react';
import './styles/index.scss';
import Button from './components/Button/button'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import { Input } from './components/Input/input'
import Upload from './components/Upload/upload'
import AutoComplete from './components/AutoComplete';
import Icon from './components/Icon/Icon';


function App() {
  const [InputValue, setInputValue] = useState('123')
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({items}) => {
      console.log(items)
      const formatItems = items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
      return formatItems
    })
  }
  return (
    <div className="App">
      test rock-ui
      
      <Menu defaultIndex='2' mode={"horizontal"} onSelect={index => console.log(index)} defaultOpenSubMenus={['2']}>
        <MenuItem> link</MenuItem>
        <MenuItem disabled > link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
        </SubMenu>
        <MenuItem > link3</MenuItem>
      </Menu>

      <Input value={InputValue} onChange={(e) => {setInputValue(e.target.value)}}></Input>

      <AutoComplete
      fetchSuggestions={handleFetch}
      ></AutoComplete>

      <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              onChange={() => console.log('changed')}
              onRemove={() => console.log('removed')}
              name="fileName"
              multiple
              drag
            >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br/>
        <p>Drag file over to upload</p>
      </Upload>

      <Button className={'custom'} onClick={(e) => {e.preventDefault(); alert(111)}}>default</Button>
      <Button disabled>default disabled</Button>
      <Button btnType={'primary'} size={'lg'}>primary large</Button>
      <Button btnType={'danger'
      } size={'sm'}>danger small</Button>
      <Button btnType={'link'} href="http://www.baidu.com">link default</Button>
      <Button disabled btnType={'link'}
        href="http://www.baidu.com"
      >link disabled</Button>
    </div>
  );
}

export default App;
