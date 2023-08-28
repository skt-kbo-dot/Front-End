import { useParams } from "react-router-dom"

export default function Detail(props) {

    let {id} = useParams();
    let product = props.store_item.find(function(x){
        return x.id == id
    })

    return (
        <div>
            <img src ={product.img}/>
            <div>{product.title}</div>
            <div>{product.content}</div>
            <div>{product.price}</div>
        </div>
        
    )
}