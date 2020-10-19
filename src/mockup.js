import React from "react";
import { db } from "./firebase.utils";

// use each doc.id of firestore as its unique ID after fetching data from firebase

const MOCKUP_DATA = [
  {
    departmentName: "Computers and Accessories",
    routeName: "computers-and-accessories",
    products: [
      {
        title: "DELL 32 Curved Gaming Monitor, Recon Blue, S3220DGF",
        price: 760.35,
        seller: "Amazon",
        brand: "Dell",
        rate: 5,
        count: 100,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/51mwFQJqsSL._AC_AA160_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title: "Echo Dot (3rd Gen) - Smart speaker with alexa - Plum",
        price: 39.99,
        seller: "Amazon",
        brand: "Amazon",
        rate: 4,
        count: 280,
        imgUrl:
          "https://m.media-amazon.com/images/I/61V25P7mlyL._AC_UY218_.jpg",
        active: false,
        upcoming: true,
        missed: false,
      },
      {
        title: "Fire TV Stick 4K bundle with Echo Dot (3rd Gen - Charcoal)",
        price: 89.99,
        seller: "Amazon",
        brand: "Amazon",
        rate: 4.5,
        count: 30,
        imgUrl:
          "https://m.media-amazon.com/images/I/51byOLfKgHL._AC_UY218_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title:
          "New Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic Keyboard) - Space Gray",
        price: 1689.99,
        seller: "Apple",
        brand: "Apple",
        rate: 3,
        count: 602,
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41C9tXGfhrL._AC_US160_.jpg",
        active: false,
        upcoming: true,
        missed: false,
      },
      {
        title:
          "HP 15-dy1036nr 10th Gen Intel Core i5-1035G1, 15-Inch FHD Laptop, Natural Silver",
        price: 889.99,
        seller: "Amazon",
        brand: "HP",
        rate: 3.5,
        count: 69,
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41C9tXGfhrL._AC_US160_.jpg",
        active: false,
        upcoming: true,
        missed: false,
      },
    ],
  },
  {
    departmentName: "Camera & Photo",
    routeName: "camera-photo",
    products: [
      {
        title:
          "Panasonic LUMIX DC-FZ80GN-K 4K Bridge Hi-Zoom Point and Shoot Travel Camera, Black",
        price: 455.0,
        seller: "Amazon",
        brand: "Panasonic",
        rate: 5,
        count: 11,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg",
        active: false,
        upcoming: false,
        missed: true,
      },
      {
        title:
          "Nikon D3500 KIT + AF-P 18-55 VR + AF-P 70-300 VR Twin Lens Kit, Black",
        price: 898.2,
        seller: "Nikon",
        brand: "Nikon",
        rate: 4,
        count: 27,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/413eVsQoYeL._AC_AA160_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title:
          "G7X Mark II + Selphy Portable Printer + 40 Sheets of Photo Paper",
        price: 1064.8,
        seller: "Canon",
        brand: "Canon",
        rate: 4.5,
        count: 3,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/41KLEZXgg0L._AC_AA160_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title: "Ricoh Theta V 360 Spherical Camera",
        price: 599.99,
        seller: "Amazon",
        brand: "Ricoh",
        rate: 3.5,
        count: 110,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/31jNXNVKclL._AC_AA160_.jpg",
        active: false,
        upcoming: true,
        missed: false,
      },
      {
        title:
          "Olympus OM-D E-M5 Mark III Camera - Kit with 14-150mm Lens (Silver)",
        price: 1895.0,
        seller: "Olympus",
        brand: "Olympus",
        rate: 3,
        count: 7,
        imgUrl:
          "https://m.media-amazon.com/images/I/81mSUtJFdZL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
    ],
  },
  {
    departmentName: "Mobile Phones & Communication",
    routeName: "mobile-phones-communication",
    products: [
      {
        title: "Apple Airpods with Charging Case (2nd Gen)",
        price: 220.0,
        seller: "Apple",
        brand: "Apple",
        rate: 5,
        count: 110,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/31jBnwWr91L._AC_AA160_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title: "Sony Noise Cancelling Headphones WH1000XM3",
        price: 324.8,
        seller: "Sony",
        brand: "Sony",
        rate: 4.5,
        count: 507,
        imgUrl:
          "https://images-fe.ssl-images-amazon.com/images/I/31zoHMmFI+L._AC_AA160_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title:
          "Nokia 5.3 Android One Smartphone (Official Australian Version 2020)",
        price: 364.8,
        seller: "Nokia",
        brand: "Nokia",
        rate: 4,
        count: 30,
        imgUrl:
          "https://m.media-amazon.com/images/I/71M8ocFNBgL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title:
          "Samsung Galaxy A11 Smartphone with 2 Year Manufacturer Warranty,Black",
        price: 233.89,
        seller: "Amazon",
        brand: "Samsung",
        rate: 3,
        count: 20,
        imgUrl:
          "https://m.media-amazon.com/images/I/61aoEfQb63L._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title:
          "Apple iPhone 11 White 128GB Physical Dual Sim [AU Seller] MWN82CH/A",
        price: 1299.0,
        seller: "Apple",
        brand: "Apple",
        rate: 5,
        count: 10,
        imgUrl:
          "https://m.media-amazon.com/images/I/61U+Xz90BAL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
    ],
  },
  {
    departmentName: "Clothing, Shoes & Accessories",
    routeName: "clothing-shoes-accessories",
    products: [
      {
        title: "Mens 21861 Extreme Motion Swope Cargo Short Cargo",
        price: 89.99,
        seller: "Perfect Clothing",
        brand: "Lee",
        rate: 5,
        count: 1038,
        imgUrl:
          "https://m.media-amazon.com/images/I/81RHhaW4SOL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title: "Authentic Originals Sueded Fleece Pullover",
        price: 68.8,
        seller: "Amazon",
        brand: "Champion",
        rate: 3.5,
        count: 9,
        imgUrl:
          "https://m.media-amazon.com/images/I/91Sx6JsV9CL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title: "Half Dome Hoodie, TNF",
        price: 39.8,
        seller: "Amazon",
        brand: "The North Face",
        rate: 4.5,
        count: 1020,
        imgUrl:
          "https://m.media-amazon.com/images/I/81blGg02EJL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title: "Modern Series Extreme Motion Straight Fit Tapered Leg Jean",
        price: 28.09,
        seller: "Lee",
        brand: "Lee",
        rate: 4.5,
        count: 3441,
        imgUrl:
          "https://m.media-amazon.com/images/I/71ZsLtQOADL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
      {
        title: "Graphic Powerblend Fleece Crew",
        price: 35.0,
        seller: "Champion",
        brand: "Champion",
        rate: 4.5,
        count: 4848,
        imgUrl:
          "https://m.media-amazon.com/images/I/91MPi4sVKLL._AC_UL320_.jpg",
        active: true,
        upcoming: false,
        missed: false,
      },
    ],
  },
];

const Mockup = () => {
    
  const mockup = () => {
    MOCKUP_DATA.forEach((el) => {
      db.doc(`amazon/${el.routeName}`)
        .set({
          departmentName: el.departmentName,
          routeName: el.routeName,
        })
        .then(() => {
          el.products.forEach((product) => {
            db.collection('amazon').doc(el.routeName).collection('products').add(product)
          });
        });
    });
  };

  return (
    <div>
      <button onClick={mockup}>Mockup</button>
    </div>
  );
};

export default Mockup;
