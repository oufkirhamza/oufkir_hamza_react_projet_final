
import React, { createContext, useState } from 'react'
import img1 from "../assets/img/Pump_Workout_Hoodie_Grey_IT4309_21_model.jpg"
import img2 from "../assets/img/Camo_Hoodie_Black_IS2898_21_model.jpg"
import img3 from "../assets/img/Inter_Miami_CF_24-25_Messi_Home_Jersey_Pink_JE9741_23_model.jpg"
import img4 from "../assets/img/Argentina_1994_Away_Jersey_Blue_IS0266_HM4.jpg"
import img5 from "../assets/img/Predator_Elite_Firm_Ground_Cleats_Orange_IF8883_HM1.jpg"
import img6 from "../assets/img/Predator_Accuracy_Firm_Ground_Soccer_Cleats_Blue_GZ2606_HM1.jpg"
import img7 from "../assets/img/Copa_Icon_Firm_Ground_Soccer_Cleats_Blue_GZ2528_HM1.jpg"
import img8 from "../assets/img/Predator_24_Elite_Low_Firm_Ground_Cleats_Black_IE1804_04_standard.jpg"
import img9 from "../assets/img/3-Stripes_Leggings_Black_IP2968_21_model.jpg"
import img10 from "../assets/img/Primegreen_Essentials_Warm-Up_Slim_3-Stripes_Track_Jacket_Black_H48443_21_model.jpg"
import img11 from "../assets/img/adidas_x_FARM_Rio_Tiro_Track_Jacket_Red_IQ4496_21_model.jpg"
import img12 from "../assets/img/KSENIASCHNAIDER_Denim_Patchwork_Track_Top_Multi_IU2464_21_model.jpg"
import img13 from "../assets/img/Marvels_Spider-Man_Grand_Court_Shoes_Kids_White_IF0925_01_standard.jpg"
import img14 from "../assets/img/adidas_Originals_x_Hello_Kitty_and_Friends_Stan_Smith_Shoes_White_IG8407_01_standard.jpg"
import img15 from "../assets/img/Grand_Court_2.0_Shoes_Kids_Pink_ID7870_01_standard.jpg"
import img16 from "../assets/img/adidas_Originals_x_Hello_Kitty_and_Friends_Superstar_360_Shoes_Kids_Pink_IF3558_01_standard.jpg"
import img17 from "../assets/img/Breaknet_2.0_Shoes_Kids_White_ID5297_01_standard.jpg"
import img18 from "../assets/img/Copa_Pure_II_Pro_Firm_Ground_Cleats_Beige_IE4979_01_standard_hover.jpg"
import img19 from "../assets/img/Predator_Elite_L_FG_Black_IE1802_HM1.jpg"
import img20 from "../assets/img/X_Crazyfast_FG_Yellow_IE2375_HM1.jpg"

export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [panier, setPanier] = useState([])
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "PUMP WORKOUT HOODIE",
            price: 85,
            description: "High-performance workout Hoodie for men",
            gender: "men",
            state: "new",
            size: "S",
            image: img1,
            quantity: 0,
        },
        {
            id: 2,
            name: "CAMO HOODIE",
            price: 80,
            description: "High-performance workout Hoodie for men",
            gender: "men",
            state: "old",
            size: "S",
            image: img2,
            quantity: 0,
        },
        {
            id: 3,
            name: "INTER MIAMI CF 24/25 MESSI HOME JERSEY",
            price: 130,
            description: "INTER MIAMI CF 24/25 MESSI HOME JERSEY",
            gender: "men",
            state: "new",
            size: "S",
            image: img3,
            quantity: 0,
        },
        {
            id: 4,
            name: "ARGENTINA 1994 AWAY JERSEY",
            price: 150,
            description: "ARGENTINA 1994 AWAY JERSEY",
            gender: "men",
            state: "old",
            size: "S",
            image: img4,
            quantity: 0,
        },
        {
            id: 5,
            name: "PREDATOR FIRM GROUND BOOTS",
            price: 260,
            description: "PREDATOR ELITE LACELESS FIRM GROUND BOOTS",
            gender: "men",
            state: "new",
            size: "S",
            image: img5,
            quantity: 0,
        },
        {
            id: 6,
            name: "PREDATOR SOCCER CLEATS",
            price: 180,
            description: "PREDATOR ACCURACY+ FIRM GROUND SOCCER CLEATS",
            gender: "men",
            state: "old",
            size: "S",
            image: img6,
            quantity: 0,
        },
        {
            id: 7,
            name: "COPA ICON",
            price: 90,
            description: "COPA ICON FIRM GROUND SOCCER CLEATS",
            gender: "men",
            state: "old",
            size: "S",
            image: img7,
            quantity: 0,
        },
        {
            id: 8,
            name: "X CRAZYFAST.3",
            price: 100,
            description: "X CRAZYFAST.3 LACELESS FIRM GROUND SOCCER CLEATS",
            gender: "men",
            state: "new",
            size: "S",
            image: img8,
            quantity: 0,
        },
        {
            id: 9,
            name: "Women's Yoga Leggings",
            price: 40,
            description: "Comfortable and stylish leggings for women",
            gender: "women",
            state: "old",
            size: "S",
            image: img9,
            quantity: 0,
        },
        {
            id: 10,
            name: "PRIMEGREEN  JACKET",
            price: 55,
            description: "PRIMEGREEN ESSENTIALS WARM-UP SLIM 3-STRIPES TRACK JACKET",
            gender: "women",
            state: "old",
            size: "S",
            image: img10,
            quantity: 0,
        },
        {
            id: 11,
            name: "ADIDAS X FARM",
            price: 65,
            description: "ADIDAS X FARM RIO TIRO TRACK JACKET",
            gender: "women",
            state: "new",
            size: "S",
            image: img11,
            quantity: 0,
        },
        {
            id: 12,
            name: "KSENIASCHNAIDER",
            price: 150,
            description: "KSENIASCHNAIDER DENIM PATCHWORK TRACK TOP",
            gender: "women",
            state: "new",
            size: "S",
            image: img12,
            quantity: 0,
        },
        {
            id: 13,
            name: "MARVEL'S SPIDER-MAN GRAND COURT SHOES ",
            price: 52,
            description: "MARVEL'S SPIDER-MAN GRAND COURT SHOES KIDS",
            gender: "kids",
            state: "new",
            size: "M",
            image: img13,
            quantity: 0,
        },
        {
            id: 14,
            name: "HELLO KITTY",
            price: 80,
            description: "ADIDAS ORIGINALS X HELLO KITTY AND FRIENDS STAN SMITH SHOES",
            gender: "kids",
            state: "new",
            size: "M",
            image: img14,
            quantity: 0,
        },
        {
            id: 15,
            name: "GRAND COURT 2.0 SHOES KIDS",
            price: 42,
            description: "GRAND COURT 2.0 SHOES KIDS",
            gender: "kids",
            state: "old",
            size: "M",
            image: img15,
            quantity: 0,
        },
        {
            id: 16,
            name: "HELLO KITTY SUPERSTAR",
            price: 65,
            description: "ADIDAS ORIGINALS X HELLO KITTY AND FRIENDS SUPERSTAR 360 SHOES KIDS",
            gender: "kids",
            state: "new",
            size: "M",
            image: img16,
            quantity: 0,
        },
        {
            id: 17,
            name: "BREAKNET 2.0 SHOES KIDS",
            price: 45,
            description: "BREAKNET 2.0 SHOES KIDS",
            gender: "kids",
            state: "new",
            size: "M",
            image: img17,
            quantity: 0,
        },
        {
            id: 18,
            name: "COPA PURE II PRO FIRM GROUND CLEATS",
            price: 140,
            description: "COPA PURE II PRO FIRM GROUND CLEATS",
            gender: "kids",
            state: "new",
            size: "M",
            image: img18,
            quantity: 0,
        },
        {
            id: 19,
            name: "PREDATOR ELITE L FG",
            price: 260,
            description: "PREDATOR ELITE L FG",
            gender: "men",
            state: "old",
            size: "M",
            image: img19,
            quantity: 0,
        },
        {
            id: 20,
            name: "X CRAZYFAST+ FG",
            price: 300,
            description: "X CRAZYFAST+ FG",
            gender: "men",
            state: "new",
            size: "M",
            image: img20,
            quantity: 0,
        },
    ]);
    return (

        <>
            <MyContext.Provider value={[products, setProducts, data, setData, panier, setPanier]} >
                {children}
            </MyContext.Provider>
        </>
    )
}
