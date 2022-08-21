import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({children}){

const [items, setItems] = useState(JSON.parse(localStorage.getItem("mycart")|| null));

const [sizes, setSizes] = useState((items?.map((item,i)=>(item.attribute.map((attr)=>(attr))))))

const [quantity,setQuantity] = useState((items?.map((item,i)=>(item.nbr))))

const [img,setImg] = useState((items?.map((item,i)=>(item?.product.gallery.map((attr)=>(attr))))))


    const SetSize = (val,i,ii) =>{
        sizes[i][ii]=(val)
        items[i].attribute=sizes[i]
      localStorage.removeItem("mycart")
      const newItems = JSON.stringify(items)
      
      localStorage.setItem("mycart",newItems);
      
        setSizes([...sizes])
        
      }

      const increment=(val,i,sign)=>{
        if (sign=="+"){
          val++
          quantity[i]=val
          items[i].nbr=quantity[i]
    
          localStorage.removeItem("mycart")
          const newItems = JSON.stringify(items)
      
      localStorage.setItem("mycart",newItems);
          setQuantity([...quantity])
        }else{
          if(val>1)
          {quantity[i]-=1 ;
            items[i].nbr=quantity[i]
    
          localStorage.removeItem("mycart")
          const newItems = JSON.stringify(items)
          localStorage.setItem("mycart",newItems);
          setQuantity([...quantity])}
          else
          {
           var aa=items[i].product.id
           const newItems=JSON.stringify(items.filter(data=>data.product.id != aa))
      
          localStorage.removeItem("mycart")
          localStorage.setItem("mycart",newItems);
          items.splice(i,1);
      
          }
      
        }
        calculTotal();
      }
      const [total,SetTotal] =useState(0);
      const [tax,SetTax] =useState();
      const [nombreProduit,SetNombreProduit] =useState();
      const calculTotal=()=>{
        setItems([...items])
     
        
        var nbreProduct=0;
        let  result=0;
        let  resultt=0;
        let  x=0;
      for(var i=0;i<items.length;i++){
        nbreProduct+=quantity[i];
      x=x+(parseInt(items[i].product.prices.map((p) => (() => {if(p.currency.symbol===localStorage.getItem('currency')){
       result=result+p.amount;
        return(p.amount)}})()))*quantity[i]);
      resultt=(resultt+result)*quantity[i];
    
      }
    let tax = parseFloat((resultt *21)/100).toFixed(2);
    result=parseInt(resultt)+parseInt(tax);
    result=parseFloat(result).toFixed(2);
    SetTotal(result);
    SetTax(tax);
    SetNombreProduit(nbreProduct);
      }


    

    return(
    <CartContext.Provider value={{items, setItems, sizes, SetSize, setSizes, quantity , setQuantity, img, setImg, calculTotal, nombreProduit, increment, total, calculTotal,tax}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContext;