import React, { useContext } from 'react'
import OrderContext from '../Context';

const Checkout = () => {

  const [datas, setDatas] = useContext(OrderContext)
  console.log('data is ', datas)

      /* const datas = []

      !datas ? "Loading..." : datas */

      return (
        
      <OrderContext.Consumer>
        {
          (OrderContext) => (
            <h1>{OrderContext}</h1>
          )

        }
                
              
      </OrderContext.Consumer>
    
    )
}

export default Checkout