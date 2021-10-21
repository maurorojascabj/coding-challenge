import React, {useState, useEffect} from 'react';

import { Header, ItemRedeem, Filter, SubHeader, MainContent, ItemShopList} from './components'

import classes from './components/HeaderSection/Header.module.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App(){

  /* API */
  const productsUrl = process.env.REACT_APP_API_URL
  const userUrl = process.env.REACT_APP_API_URL_USER
  const pointUrl = process.env.REACT_APP_API_URL_POINT
  const redeemUrl = process.env.REACT_APP_API_URL_REDEEM
  const historyUrl = process.env.REACT_APP_API_URL_HISTORY
  const baseToken = process.env.REACT_APP_API_TOKEN

  /* products state */
  const [products, setProducts] = useState([])
  /* user state*/
  const [user, setUser] = useState([])
  
  /* points state */
  const [currentPoints, setCurrentPoints] = useState(null)

  /* Values of Pagination */
  const [paginatorLeft, setPaginatorLeft] = useState(0)
  const [paginatorRight, setPaginatorRight] = useState(15)

  /* Values of Filter */
  const [nameCategoryFilter, setNameCategoryFilter] = useState('')

  /*Values to screen disposition */
  const [disposition, setDisposition] = useState('grid')

  /* Shop list */
  const [shopList, setShopList] = useState([])

  useEffect( () => {
    getProducts()
    getUser()
  }, [])

  const getProducts = async() => {
    try {
      const response = await fetch(productsUrl, {
        method: 'GET',
        headers: new Headers({
          'Authorization': `Bearer ${baseToken}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
      const dataProducts = await response.json()
      setProducts(dataProducts)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const amountProducts = products.length
 
  const dataProducts = products

  /*get User */
  const getUser = async() => {
    try {
      const response = await fetch(userUrl, {
        method: 'GET',
        headers: new Headers({
            'Authorization': `Bearer ${baseToken}`, 
            'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
      const dataUser = await response.json()
      setUser(dataUser)
      setCurrentPoints(dataUser.points)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  return (
    <Router>
      <Header
        user={user}
        currentPoints={currentPoints}
        setCurrentPoints={setCurrentPoints}
        pointUrl={pointUrl}
        baseToken={baseToken}
      />
      <div 
        className={classes.container}
        style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          width:'100%',
          marginRight:0, 
        }}
      >
        <Switch>
          <Route path="/" exact>
            <SubHeader/>
            <Filter
              paginatorLeft={paginatorLeft}
              setPaginatorLeft={setPaginatorLeft}
              paginatorRight={paginatorRight}
              setPaginatorRight={setPaginatorRight}
              amountProducts={amountProducts}
              products={products}
              setProducts={setProducts}
              getProducts={getProducts}
              nameCategoryFilter={nameCategoryFilter}
              setNameCategoryFilter={setNameCategoryFilter}
              disposition={disposition}
              setDisposition={setDisposition}
            />
            <MainContent
              data={dataProducts}
              paginatorLeft={paginatorLeft}
              paginatorRight={paginatorRight}
              currentPoints={currentPoints}
              setCurrentPoints={setCurrentPoints}
              disposition={disposition}
              user={user}
              shopList={shopList}
              setShopList={setShopList}
              redeemUrl={redeemUrl}
              baseToken={baseToken}
            />
          </Route>
          <Route path="/shops">
              <ItemShopList
                shopList={shopList}
                currentPoints={currentPoints}
                setCurrentPoints={setCurrentPoints}
                redeemUrl={redeemUrl}
                baseToken={baseToken}
              />
          </Route>
          <Route path="/redeem">
            <ItemRedeem
              historyUrl={historyUrl}
              baseToken={baseToken}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;