import axios from 'axios';
    // url: 'http://localhost:4000';

export const getDetailProd = async (id) => {
    try {
    const { data } = await axios.post(
      
        'http://localhost:4000',{"query":"{product(id:"+'"'+id+'"' +"){id name inStock gallery description  brand prices{currency{symbol}} prices{amount} }}"},{
            headers: {
              'Content-Type': 'application/json'
            }
          }
    );

    return data.data.product;
  } catch (error) {
    console.log(error);
  }
  
};