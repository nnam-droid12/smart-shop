const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4xluEmffOnSc_ESBvT697lpoH2vIMFU0N5-p8MvkTXRP3eeEr8cU3dAe-iUJGKpGsP4&usqp=CAU',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFr-PHVtPlfewqaIpE9ZR6rSHxitL-TYOk0_pVMk461-xY8898PT9CP2s9YOZUPmoBMs&usqp=CAU',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rXUp59UnwwyPxsRg8K_D2MIRXddHEsw2DKavCa8vxgqDVJ6gNxxugnY-IedG9VVq-IU&usqp=CAU',
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjISKaOuxYKCsS0ID7SAon2WSyROgHl3vCA&usqp=CAU',
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTc1_MGAoK0GnIJGeBUSBzDPgMLPrZDH6OXw&usqp=CAU',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYILSGvFcPAoMVC5u-fxAFSETMpU3M40JMog&usqp=CAU',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuB__8GlcQNKpMnMcMZn6DBfyIDOOEX0YzQ&usqp=CAU',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3pkXPP5RbKHtH7YHy9aMS_IkYTOGHuAjoShVPA8fizjZfOToiqopEXhHLZfjfvSSLAI&usqp=CAU',
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDkHmrOABwJoWT7T-cmPM-TTbOGDA4h9AlnNph5QjhJOymUEMDGiVGpkfLMEnhItExnM&usqp=CAU',
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/M/154070_1626094099.jpg',
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwkExge6FXyUPBHAZo-oYcTv4HtDL5nVkZpJSvEVpWAuQFI8WAp6FVozg--PRwgTEfs0&usqp=CAU',
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://pictures-nigeria.jijistatic.com/57538152_img-20201204-wa0231_180x180.jpg',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k2bhZtTJiAz2oNbpnep3ZK2FPeYzcgJfMZI4IDR3UNKluWyZ7LFlMC-xB8YtmINAfNQ&usqp=CAU',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojuGTtzxBJhLfxQ1DtqGePRrsBgeyxdAGZvDxVy1HtWTZ55_hwd_uBFvhKZ3GkOrAbJE&usqp=CAU',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
        ]
       },
        {
            id: 6,
            title: 'Watch',
            routeName: 'watch',
            items: [
              {
                id: 36,
                name: 'digital watch',
                imageUrl: 'https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFYRjgwMjl3OVMuX0FDX1VMMTUwMF8uanBn.jpg',
                price: 25
              },
              {
                id: 37,
                name: 'solar watch',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0S2kJpQLr6OrJJS5nDazAZ1mG7EqB2UpqgaihEc-6K_oVGYgD7qV3fgutKmHevb_3h1I&usqp=CAU',
                price: 20
              },
              {
                id: 38,
                name: 'crystal',
                imageUrl: 'https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF1SjNlNFB4aEwuX0FDX1VMMTUwMF8uanBn.jpg',
                price: 80
              },
              {
                id: 39,
                name: 'fural',
                imageUrl: 'https://pixahive.com/wp-content/uploads/2020/11/A-wrist-watch-188654-pixahive.jpg',
                price: 80
              },
              {
                id: 40,
                name: 'strout',
                imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1545150814-6298518le.jpg',
                price: 45
              },
              {
                id: 41,
                name: 'Malto',
                imageUrl: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/652329/1.jpg?6871',
                price: 135
              }
            ]
          },
          {
            id: 7,
            title: 'Ear Pod',
            routeName: 'ear pod',
            items: [
              {
                id: 42,
                name: 'Auspal',
                imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/U/174353_1595691489.jpg',
                price: 25
              },
              {
                id: 43,
                name: 'solar charging',
                imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/L/116163_1601303431.jpg',
                price: 20
              },
              {
                id: 44,
                name: 'specy pod',
                imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/F/51948_1591794683.jpg',
                price: 80
              },
              {
                id: 45,
                name: 'cluster pod',
                imageUrl: 'https://pictures-nigeria.jijistatic.com/78422787_MTUwMC0xNTAwLTExYjEyZTAzMDM.jpg',
                price: 80
              },
              {
                id: 46,
                name: 'fuss pod',
                imageUrl: 'https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9pLmViYXlpbWcuY29tL2ltYWdlcy9nL1RQQUFBT1N3ekgxZVJhUjMvcy1sNTAwLmpwZw.jpg',
                price: 45
              }
            ]
          },
          {
            id: 8,
            title: 'Phones',
            routeName: 'phones',
            items: [
              {
                id: 47,
                name: 'smasung 11 pro',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpauT2PoC3gcjmOMR8j0edv7k9GA6dAWFdC2M89kqekWCQiB-sFIx11ZT72rpnD_oEL4&usqp=CAU',
                price: 25
              },
              {
                id: 48,
                name: 'iphone 11 pro',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XU2PN2cbhYwqws5Gz3w0I546-u1NUhyKeJ1hqw0n-VSVmdQrcDPPxwMDBgC-wBaUPEs&usqp=CAU',
                price: 20
              },
              {
                id: 49,
                name: 'Tecno Camon',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjv45mfjg-7CTyIwnWiAJp2d-PCOYJLfNIm_eEPTwDSAt_4e_J1kd-W0L8ibh6PVmPPHQ&usqp=CAU',
                price: 80
              },
              {
                id: 50,
                name: 'itel 56',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_Gfuy-5sZIvtbLy16r591s4LKlLPXpNEUO_yeUrdAwJFY88zvlmL4_CHMPfll7NAw3o&usqp=CAU',
                price: 80
              },
              {
                id: 51,
                name: 'Opoo 96',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyep07M2XUGZ43DC2AyP4C0C4SVF8wHBP7-OYbM2GCxjSvN2Du_OB2seiS6g25qca5u4&usqp=CAU',
                price: 45
              }
            ]
          },
          {
            id: 9,
            title: 'Bag',
            routeName: 'bag',
            items: [
              {
                id: 52,
                name: 'Italian nug',
                imageUrl: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/22/192317/2.jpg?6753',
                price: 25
              },
              {
                id: 53,
                name: 'glod',
                imageUrl: 'https://media.womensweekly.com.sg/public/2021/01/Ergonomic-School-Bags-Bromin-Lite.png',
                price: 20
              },
              {
                id: 54,
                name: 'grey',
                imageUrl: 'https://media.womensweekly.com.sg/public/2021/01/Ergonomic-School-Bags-Bromin-Lite.png',
                price: 80
              },
              {
                id: 55,
                name: 'val linch',
                imageUrl: 'https://static-01.daraz.com.bd/p/baf33d1a2e994221144e819110ba8eda.jpg',
                price: 80
              },
              {
                id: 56,
                name: 'habiscus',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZ4U-38xGHKSF8Y2g95pTg5Z0MZsja4-dQ1L4yUpPHQQ0knfqwDpeU4iTzN-et4CMeNo&usqp=CAU',
                price: 45
              }
            ]
          },
          {
            id: 10,
            title: 'Chargers',
            routeName: 'chargers',
            items: [
              {
                id: 57,
                name: 'adapt charger',
                imageUrl: '',
                price: 25
              },
              {
                id: 58,
                name: 'Floral Blouse',
                imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                price: 20
              },
              {
                id: 59,
                name: 'Floral Dress',
                imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                price: 80
              },
              {
                id: 60,
                name: 'Red Dots Dress',
                imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                price: 80
              },
              {
                id: 61,
                name: 'Striped Sweater',
                imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                price: 45
              },
              {
                id: 62,
                name: 'Yellow Track Suit',
                imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                price: 135
              },
              {
                id: 63,
                name: 'White Blouse',
                imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                price: 20
              }
            ]
          },
        {
            id: 11,
            title: 'Cars',
            routeName: 'cars',
            items: [
              {
                id: 64,
                name: 'benz',
                imageUrl: 'https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp',
                price: 25
              },
              {
                id: 65,
                name: 'lesuz',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvyoecyTV4TN9DoIMQk_3Gbbn97-HNINAvvQNVD4h6lOId341SBw2S3sGrxRZO0ySS0xQ&usqp=CAU',
                price: 20
              },
              {
                id: 66,
                name: 'honda',
                imageUrl: 'https://media.wired.com/photos/61bbc2cbb540f6bc340c4429/3:2/w_1280%2Cc_limit/Gear-Mercedes-EQS-21C0123_001.jpg',
                price: 80
              },
              {
                id: 67,
                name: 'camry',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPxDX_71By0ekJDht69DuFF-zTpYxfWc0qO8AXfGzXWu21kb-Ysgml0205_QKxauvcbs&usqp=CAU',
                price: 80
              },
              {
                id: 68,
                name: 'volks wagen',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGgQp_WFi_NA6YN5D0Y66Umnfqg6UdzshLrIElS663ER2kRMu32a1nLy5W9DTmK8eA_I&usqp=CAU',
                price: 45
              },
              {
                id: 69,
                name: 'hyundai',
                imageUrl: 'https://www.indiacarnews.com/wp-content/uploads/2022/01/Toyota-Veloz-MPV.jpg',
                price: 135
              },
              {
                id: 70,
                name: 'formatic',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2T_oRFl8SZ8Qh1HAWubOyjUN6f4FNsVxw6zuFXt8Ktdq2sFwWl5H4oO7fNunDLbscHU&usqp=CAU',
                price: 20
              }
            ]
          },
  ];
  
  export default SHOP_DATA;
  