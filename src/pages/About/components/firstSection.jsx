import { useContext } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';
import axios from "axios";
import React, { useEffect, useState } from 'react';
export const FirstSectionAbout = () => {

    const [surahNumber, setSurahNumber, readers, setReaders, receiter, setSReceiter] = useContext(MyContext);

    const [surah, setSurah] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
                const data = await response.data
                // console.log(response);
                // console.log(data.data);
                const surah = [data.data]
                setSurah(surah)
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        }
        fetchData()
    }, [surahNumber])
    const nextSurah = () => {
        setSurahNumber(surahNumber + 1)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    return (
        <div className='py-2 font-custom'>
            {
                surah.map((surah, index) =>
                    <div className='flex text-xl flex-col items-center gap-2'>
                        <h1 className='text-3xl font-medium'>{surah.name}</h1>
                        <h1 className='text-2xl font-medium'>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ</h1>
                        <div className='text-xl w-[80%] text-center'>
                            {
                                surah.ayahs.map((ayah) =>
                                    <div className='w-fit inline leading-10 text-2xl '>
                                        <span>{ayah.text.split('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ')} </span>
                                        <span className='number mx-3'>{ayah.numberInSurah}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
            <div className='flex justify-center my-5'>
                <button onClick={nextSurah} className='bg-green-300 px-3 py-2 rounded-lg'>السورة التالية</button>
            </div>
        </div>
    );
}








