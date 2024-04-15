import React, { useRef } from 'react';
import "./listen.sass"
import { useContext } from 'react';
import { MyContext } from '../../utils/contextProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss'
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCircleStop } from "react-icons/fa6"

export const ListenQuran = () => {
    const [surahNumber, setSurahNumber, readers, setReaders, receiter, setSReceiter] = useContext(MyContext);
    const [audioUrl, setAudioUrl] = useState(null);
    const [suwar, setSuwar] = useState([])
    const [sNumber, setSnumber] = useState(1)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://api.alquran.cloud/v1/surah")
                const data = await response.data
                setSuwar(data.data)
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        }
        fetchData()
    }, [])
    const readSurah = (num) => {
        setSnumber(num)
        const numberOfSurah = num < 10 ? `00${num}` : num >= 10 && num < 100 ? `0${num}` : num;
        setAudioUrl(`${receiter.api}${numberOfSurah}.mp3`);
    }
    const nextSurah = (num) => {
        setSnumber(num)
        const numberOfSurah = num < 10 ? `00${num}` : num >= 10 && num < 100 ? `0${num}` : num;
        setAudioUrl(`${receiter.api}${numberOfSurah}.mp3`);
    }
    return (
        <>
            <div className='flex justify-center py-4  border-b-2  border-[#897c66]'>
                {
                    <div className='flex items-center gap-8 w-[70%]'>
                        <img width={200} src={receiter.img} alt="" />
                        <div>
                        <h1>القرآن الكريم بصوت :</h1>
                        <h1 className='text-4xl font-bold'>{receiter.title}</h1>
                        </div>
                    </div>
                }
            </div>

            <div className='flex flex-wrap gap-3 justify-center p-3 pb-28 font-custom'>
                {
                    suwar.map((element, index) =>
                        <>
                            <div onClick={(e) => readSurah(element.number)} className='border-2 rounded-sm  border-[#3941295a] w-[15%] p-2 gap-3 flex justify-between items-center font-bold cursor-pointer hover:bg-[#f7e6c8]'>
                                <h1 className='text-2xl hover:text-[#3280b4]'> <FaRegPlayCircle /> </h1>
                                <h1 className='text-xl'>{element.name}</h1>
                                <div className='bg-[#d4e0969a] px-4 py-2 rounded-lg'>{element.number}</div>
                                {/* <h1>{element.numberOfAyahs}  <span className='font-medium'> ايات </span></h1> */}
                            </div>
                        </>
                    )
                }
            </div >
            <div dir="ltr" className='w-full fixed bottom-0'>
                <AudioPlayer
                    className='bg-black'
                    autoPlay
                    src={audioUrl}
                    // onPlay={e => console.log("onPlay")}
                    showSkipControls={true}
                    onClickNext={e => nextSurah(sNumber + 1)}
                />
            </div>

        </>

    );
};
