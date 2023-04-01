import React, { useState } from 'react'
import Helmet from '../components/Helmet'
import CommonSection from '../components/CommonSection'
import products from '../assets/data/products'
import { Container, Row, Col } from 'reactstrap'
import ProductList from '../components/ProductList'
const Shop = () => {

  const [productsData, setProductsData] = useState(products)

  const handleFilter = e => {
    const filterValue = e.target.value 
    if(filterValue==='sofa'){
      const filteredProducts = products.filter(item=> item.category==='sofa')
      setProductsData(filteredProducts)
    }

    if(filterValue==='gadgets'){
      const filteredProducts = products.filter(item=> item.category==='gadgets')
      setProductsData(filteredProducts)
    }
  } 

  const handleSearch = e => {
    const searchProduct = e.target.value
    const searchedProducts = products.filter(item=> item.productName.toLowerCase().includes(searchProduct.toLowerCase()))

    setProductsData(searchedProducts)
  }

    return (
        <Helmet title='Shop'>
          <CommonSection title='Products'/>

          <div className='bg-white mt-[6rem] md:mt-[23rem]'>
            <Container className='pb-3'>
              <Row>
                <Col lg='3' md='3' className='mb-4'>
                  <div>
                    <select onClick={handleFilter} className='py-2 px-3 border-[1.5px] border-[#0a1d37] outline-none cursor-pointer rounded-md'>
                      <option >Filter by Category</option>
                      <option value="sofa">Sofa</option>
                      <option value="gadgets">Gadgets</option>
                    </select>  
                  </div>  
                </Col>  
                {/* <Col lg='3' md='4'>
                  <div>
                    <select className='py-2 px-5'>
                      <option>Sort by</option>
                      <option value="ascending">Ascending</option>
                      <option value="descending">Descending</option>
                    </select>  
                  </div>
                </Col>   */}
                <Col lg='6' md='6'>
                  <div className="search__box w-full flex items-center justify-between border border-[#0a1d37] rounded pl-2 pr-3 cursor-pointer">
                    <input type="text" className='w-full px-3 py-2 border-none outline-none' placeholder='Search Products...' onChange={handleSearch}/>
                    <span className='border-[#0a1d37] '><i class='ri-search-line'></i></span>  
                  </div>  
                </Col>  
              </Row>  
            </Container>  
          </div>  

          <section>
            <Container>
              <Row>
                {
                  productsData.length === 0 ? ( <h1 className='text-center text-lg'>Products no dey</h1> )
                  : (
                   <ProductList data={productsData} />
                   )}
              </Row>
            </Container>
          </section>
        </Helmet>
    )
}

export default Shop
