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
        featured: true,
        description:
          " The three-sided ultrathin bezel design in 4K UHD (3840 x 2160) resolution lets you enjoy immersive viewing in incredible clarity and fine detail with 4 times the resolution of Full HD        Be in the action: The curved 1800R screen expands your field of vision and provides a wrap-around view for an immersive movie experience.        Easy on the eyes: This TÜV-certified monitor has a flicker-free screen with ComfortView, a feature that reduces harmful blue light emissions and optimizes eye comfort.        Adjust to your comfort: Pivot, tilt, swivel and adjust the height of your monitor for a comfortable setup all day long. Or choose from a variety of mounts and stands, including VESA, for even more flexibility.",
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
        featured: true,
        description: "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small spaces.Improved speaker quality - Better speaker quality than Echo Dot Gen 2 for richer and louder sound. Pair with a second Echo Dot for stereo sound.Voice control your music - Stream songs from Amazon Music, Apple Music, Spotify, Sirius XM, and others.Ready to help - Ask Alexa to play music, answer questions, read the news, check the weather, set alarms, control compatible smart home devices, and more.Voice control your smart home - Turn on lights, adjust thermostats, lock doors, and more with compatible connected devices. Create routines to start and end your day. Connect with others - Call almost anyone hands-free. Instantly drop in on other rooms in your home or make an announcement to every room with a compatible Echo device.        Alexa has skills - With tens of thousands of skills and counting, Alexa is always getting smarter and adding new skills like tracking fitness, playing games, and more.        Designed to protect your privacy - Built with multiple layers of privacy protections and controls, including a microphone off button that electronically disconnects the microphones",
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
        featured: true,
        description:
          "The most powerful 4K streaming media stick.        Watch favorites from Netflix, YouTube, Prime Video, Disney+, Apple TV, HBO, and more. Stream for free with Pluto, IMDB TV, and more.        Launch and control content with the Alexa Voice Remote.        Enjoy brilliant picture with access to 4K Ultra HD, Dolby Vision, HDR, and HDR10+.        Choose from 500,000 movies and TV episodes.        More storage for apps and games than any other streaming media stick.        Experience tens of thousands of channels, apps, and Alexa skills.        Alexa on Fire TV provides the most comprehensive voice experience of any streaming media player.        Amazon Prime members get unlimited access to thousands of movies and TV episodes.        Live Q&A with culinary expert and more with a 1-year complimentary Food Network Kitchen subscription.",
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
        featured: true,
        description:
          "Tenth-generation quad-core Intel Core i5 processor        Brilliant Retina display with True Tone technology        Backlit Magic Keyboard        Touch Bar and Touch ID        Intel Iris Plus Graphics        Ultrafast SSD        Four Thunderbolt 3 (USB-C) ports        Up to 10 hours of battery life        802.11ac Wi-Fi        Force Touch trackpad",
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
        featured: true,
        description:
          "10th Gen Intel Core i7-10510U (1.8 GHz base frequency, up to 4.9 GHz base with Intel Turbo Boost Technology, 8 MB cache, 4 cores)         diagonal HD SVA BrightView micro-edge WLED-backlit (1366 x 768) Display; Intel UHD Graphics        8GB DDR4-2666MHz SDRAM Memory for full-power multitasking; 128GB SSD; Ideal for Home, Student, Professionals, Small Business, School Education, and Commercial Enterprise, Online Class, Google Classroom, Remote Learning, Zoom Ready.        802.11b/g/n (1x1) Wi-Fi and Bluetooth 4.2 combo; 1 USB 3.1 Gen 1 Type-C (Data Transfer Only, 5 Gb/s signaling rate); 2 USB 3.1 Gen 1 Type-A (Data Transfer Only); 1 RJ-45; 1 AC smart pin; 1 HDMI 1.4b; 1 headphone/microphone combo; 1 multi-format SD media card reader        ▌Authorized BROAGE Bundle ▌Bundled with BROAGE MousePad, Authorized Sellers ONLY. Windows 10 Home 64-Bit, Natural silver",
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
        featured: true,
        description: "Superb DSLM image quality without the bulk and weight of traditional DSLRs        Never miss a photo with three unique 4K ultra HD video pause and save 4K photo modes        Fast and precise auto focusing tracks the subject; Focus mode AFS (single) / AFF (flexible) / AFC (continuous) / MF, AF mode face/eye detection / tracking / 49 area / custom Multi / 1 area / pinpoint        Class leading, ultra compact, interchangeable lens and accessory option; HDMI: microHDMI TypeD / VIERA Link,video: Auto / 4K / 1080p / 1080i / 720p / 480p, Audio: stereo        Unwire your creativity with integrated Wi Fi sharing",
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
        featured: true,
        description: "This Grace Photo Camera Bundle Comes Complete With Manufacturer Supplied Accessories(U.S. Compatible) and a 1 Year Seller Provided Warranty, Package Includes:        Nikon D3500 DSLR Camera (International Version) 24.2MP DX-Format CMOS Sensor; EXPEED 4 Image Processor; No Optical Low-Pass Filter; Native ISO 100-25600; 5 fps Shooting; 3.0 921k-Dot LCD Monitor; Full HD 1080p Video Recording at 60 fps; Multi-CAM 1000 11-Point AF System; SnapBridge Bluetooth Connectivity        Nikon AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Lens - F-Mount Lens/DX Format , 27-82.5mm (35mm Equivalent) , Super Integrated Coating , Pulse Stepping Motor AF System , Nikon VR Image Stabilization , Access Lens Settings in Camera Menu , Ro",
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
        featured: true,
        description: "The advanced video capabilities of the Power Shot G7 X Mark II camera can capture moments in the quality they deserve        Features a large 1.0 inch, 20.1 Megapixel CMOS sensor that helps capture high quality images and videos with a wide dynamic range. Autofocus system features ttl autofocus and manual focus. Operating temperature is 0 to 40 degree celsius. Note charging time varies considerably depending on the remaining battery power        An aperture value of f/1.8 at the wide angle and f/2.8 when fully zoomed to a factor of 4.2x (24 100 millimeter), this lens equipped to capture a variety of situations with precision        High resolution, 3.0 inches LCD monitor that tilts up 180 degrees and down 45 degrees is ideal for self portraits and capturing pictures at high and low angles with ease        Built in Wi Fi for on the go convenience and the ability to easily post your images to select social networking and media sites        With the ability to shoot continuously at up to 8 fps, it can help you capture incredible images with nearly no time wasted",
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
        featured: true,
        description: "Theta V shoots hi-def smooth 360 Degree video at 30 fps @ 3840 x 1920 pixels or 4K. It supports the H.264 file format for video recording ; Remote release: CA-3-compatible        Hi-res 360 Degree spherical stills & video with improvements to the image quality. New Qualcomm Snapdragon processor has completely enhanced the exposure accuracy and white balance algorithm. Object distance- Approx. 10cm - ∞ (from front of lens).Lens configuration:7 elements in 6 groups        Theta has a 4-channel microphone that supports 360 Degree spatial audio recording built in Omnidirectional audio is recorded not just in the horizontal direction but also in the vertical direction. Storage temperature range - -20°C - 60°C        The world’s-first Remote Playback capable fully spherical camera allows users to wirelessly playback 360 Degree images and videos on a large-screen display Using a compatible wireless display adapter        Wireless LAN transfer speed (WLAN, MAX): 2.4GHz, 3mm: 20Mbps; 2.4GHz, 10mm: 10Mbps; 5GHz, 3mm: 50Mbps; 5GHz, 10mm: 10Mbps. The camera can always be connected to a smartphone using Bluetooth low energy (BLE) This function provides improvements in usability and power consumption",
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
        featured: true,
        description: "20MP live MOS sensor        Portable, weather sealed design        121-point all-cross-type on-chip phase detection AF        Compact, in-body 5-axis image stabilization (up to approx. 5.5 EV steps of compensation)        50MP tripod high-res shot",
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
        featured: true,
        description: "Automatically on, automatically connected        Easy setup for all your Apple devices        Quick access to Siri by saying “Hey Siri”        Double-tap to play or skip forward        New Apple H1 headphone chip delivers faster wireless connection to your devices",
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
        featured: true,
        description: "",
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
        featured: true,
        description: "",
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
        featured: true,
        description: "",
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
        featured: true,
        description: "",
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
        featured: true,
        description: "",
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
        featured: true,
        description: "",
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
        featured: true,
        description: "",
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
        featured: true,
        description: "",
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
        featured: true,
        description: "",
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
            db.collection("amazon")
              .doc(el.routeName)
              .collection("products")
              .add(product);
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
