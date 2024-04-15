
import React, { createContext, useEffect, useState } from 'react'
import basset from "../assets/img/abdelbasset-profile.webp"
import minsh from "../assets/img/mohamed-siddiq-el-minshawi-profile.avif"
import sdis from "../assets/img/sdis.jpeg"
import husri from "../assets/img/mahmoud-khalil-al-hussary-profile.avif"
import yasser from "../assets/img/yasser-doussari-profile.jpeg"
import affassi from "../assets/img/mishary-rashid-alafasy-profile.avif"
import maher from "../assets/img/maher-lmaiiqli-profile.jpeg"
import hani from "../assets/img/hani-ar-rifai-profile.avif"
export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    const [surahNumber, setSurahNumber] = useState(() => {
        // Retrieve Surah number from localStorage or set default to 0
        return localStorage.getItem('surahNumber') || 0;
    });
    // Update localStorage whenever Surah number changes
    useEffect(() => {
        localStorage.setItem('surahNumber', surahNumber);
    }, [surahNumber]); 

    const [receiter, setSReceiter] = useState(() => {
        return localStorage.getItem('receiter') || 0;
    });
    useEffect(() => {
        localStorage.setItem('receiter', receiter);
    }, [receiter]); 
    
    const [readers, setReaders] = useState([
        {
            id: 1,
            title: "عبدالباسط عبدالصمد",
            img: basset,
            api: "https://server7.mp3quran.net/basit/"
        },
        {
            id: 2,
            title: "محمد صديق المنشاوي",
            img: minsh,
            api: "https://server10.mp3quran.net/minsh/"
        },
        {
            id: 3,
            title: "عبدالرحمن السديس",
            img: sdis,
            api: "https://server11.mp3quran.net/sds/"
        },
        {
            id: 4,
            title: "محمود خليل الحصري",
            img: husri,
            api: "https://server13.mp3quran.net/husr/"
        },
        {
            id: 5,
            title: "ياسر الدوسري",
            img: yasser,
            api: "https://server11.mp3quran.net/yasser/"
        },
        {
            id: 6,
            title: "مشاري العفاسي",
            img: affassi,
            api: "https://server8.mp3quran.net/afs/"
        },
        {
            id: 7,
            title: "ماهر المعيقلي",
            img: maher,
            api: "https://server12.mp3quran.net/maher/"
        },
        {
            id: 8,
            title: "هاني الرفاعي",
            img: hani,
            api: "https://server8.mp3quran.net/hani/"
        },
        
    ])
    return (
        <>
            <MyContext.Provider value={[surahNumber, setSurahNumber, readers, setReaders, receiter, setSReceiter]} >
                {children}
            </MyContext.Provider>
        </>
    )
}
