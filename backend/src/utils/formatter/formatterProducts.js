

const formatterProducts = (products)=>{

    return products.map((product)=>{
        const {
            id,
            brand,
            name,
            img,
            description,
            price,
            stock,
            rating,
            enabled,
            Categories,
          } = product;

          return {
            id,
            brand,
            name,
            img,
            description,
            price,
            stock,
            rating,
            enabled,
            Categories,
          };
    })
}


module.exports = formatterProducts