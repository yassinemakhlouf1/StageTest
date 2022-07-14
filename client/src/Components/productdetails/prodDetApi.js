import axios from 'axios';
    // url: 'http://localhost:4000';

export const getDetailProd = async (id) => {
    try {
    const { data } = await axios.post(
        'http://localhost:4000',{"query":"{categories{products:products{name id inStock gallery description  category  brand }}}"},{
            headers: {
              'Content-Type': 'application/json'
            }
          }
    );

    return data.data.categories[0].products;
  } catch (error) {
    console.log(error);
  }
  
};