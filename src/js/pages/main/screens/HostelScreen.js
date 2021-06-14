import React from 'react'

const HostelScreen  = (props) =>{
    const singleProduct = data.products.find(
        (item) => item._id === props.match.params.id
      );
      const {
          id,
        city ,
        street,
        parking,
        rules,
      } = singleProduct;

      
    return (
        <div>
            
        </div>
    )
}

export default HostelScreen
