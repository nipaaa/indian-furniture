import { useEffect, useState } from "react"

const useFurnitures = () => {
    const [furnitures, setFurnitures] = useState([]);
    useEffect(()=>{
        fetch('furniture.json')
        .then(res => res.json())
        .then(data => setFurnitures(data));
    },[])
    return [furnitures, setFurnitures];
}
export default useFurnitures;