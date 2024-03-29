import axios from 'axios';
    // url: 'http://localhost:4000';

export const products_details = async (id) => {
    try {
    const { data } = await axios.post(
        'http://localhost:4000',{"query":"{categories {name products{id name gallery inStock prices{currency{symbol}} prices{amount}}}}"},{
            headers: {
              'Content-Type': 'application/json'
            }
          }
    );

    return data.data.categories;
  } catch (error) {
    console.log(error);
  }
  
};