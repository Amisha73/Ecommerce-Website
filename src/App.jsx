import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3Uzyet5fYs_Nm4tPdfb3wq23McA3HkuzbJE2QjzIf_mZGEiPCIEPy3cgK1nDFnVB6CtWqlLHUuRA5uJ90u6JfQnxaXpsm9g2BpEtSt31F2n3_RK0Lt3ICNkV2wN8TlqDG3WPkDV4&usqp=CAc',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
    {
      url:"https://m.media-amazon.com/images/I/61+sQIuKWlL._AC_UL320_.jpg",
      name:"Inline Roller Skates",
      category: 'Adjustable skates',
      seller:'primes',
      price:2499
    },
    {
      url:"https://m.media-amazon.com/images/I/71RlOgFT-wL._AC_UL320_.jpg",
      name:"Casual Boot",
      category:"High Heel Boot",
      seller:"Long Walks",
      price:500
    },
    {
      url:"https://m.media-amazon.com/images/I/51AuqQ91PeL.AC_SX250.jpg",
      name:"LED USB String decor",
      category:"Home Decor",
      seller:"Amazon",
      price:150
    },
    {
      url:"https://m.media-amazon.com/images/I/51grGmHIfWS.AC_SX250.jpg",
      name:"3D Moon Lamp",
      category:"Lamp",
      seller:"Rucon",
      price:250
    },
    {
      url:"https://m.media-amazon.com/images/I/41nY3TNikPL.AC_SX250.jpg",
      name:"Wooden Wall Decor",
      category:"wall Decor",
      seller:"Amazon",
      price:300
    },
    {
      url:"https://m.media-amazon.com/images/I/61G3jGqkq3L._AC_UL320_.jpg",
      name:"Women Ankel Strap High Heel",
      category:"High Heel",
      seller:"Denill",
      price: 799
    },
    {
      url:"https://m.media-amazon.com/images/I/51ygo4N1PUL._AC_UL320_.jpg",
      name:"Blocked Heel Braid",
      category:"Sandals",
      seller:"RK Foot style",
      price: 699
    },
    {
      url:"https://m.media-amazon.com/images/I/51cgrPqB8TL._AC_UL320_.jpg",
      name:"Sutro Sunglasses",
      category:"oakley glasses",
      seller:"Glasses section",
      price: 10790
    },
    {
      url:"https://m.media-amazon.com/images/I/715aY98VTPL._AC_UL320_.jpg",
      name:"Stuffed animal poly fiber toy",
      category:"stuffed toy",
      seller:"prime",
      price:600
    },
    {
      url:"https://m.media-amazon.com/images/I/51w8FG7+j+L._AC_UL320_.jpg",
      name:"Nikku super soft toy",
      category:"teddy ",
      seller:"Lotus toys",
      price:320
    },
    {
      url:"https://m.media-amazon.com/images/I/71HgnQz2ORL._AC_UL640_QL65_.jpg",
      name:"Soft Rabbit toy",
      category:" teddy",
      seller:"Lotus toys",
      price:1000
    },
    {
      url : "https://m.media-amazon.com/images/I/61kIO7c7xxL._AC_UL320_.jpg" ,
      name: "Light weight high heel",
      category: "women foot wear",
      seller:"Fashion Footwear",
      price:599
    },
    {
      url:"https://m.media-amazon.com/images/I/61QMjAyPE4L._AC_UL320_.jpg",
      name:'Kids Scooter',
      category: 'scooter',
      seller:"Amazon Brand",
      price: 1999
    },
    
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;