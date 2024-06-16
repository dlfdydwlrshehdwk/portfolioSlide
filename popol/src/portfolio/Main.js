import React, { useEffect, useState } from 'react';
import './css/main.css';
import $ from 'jquery'
import pofoldata from './data/pofoldata';
function Main(){

    let copy = [...pofoldata]
    // idx를 기준으로해서 역으로 배열정렬
    copy = copy.sort((x,y)=>{
        return x.idx === y.idx ? 0 : x.idx > y.idx ? -1 : 1;
    })
    console.log(copy)
    let [img , setImg] = useState(0)

    useEffect(()=>{
    },[])

    useEffect(()=>{
        $('.bg').css({transition : 'none', opacity : 0.6 })
        setTimeout(()=>{
        $('.bg').css({
            transition : "1s linear",
            opacity : 1
        })
        },10)

        $(window).on('resize',function(){
            console.log('리사이즈')
            $('.bg').css({
                transition : "none",
                opacity : 1
            })
        })
    },[img])

    return(
        <>
            <section className='main_wrap'>
                <ul className='main_flexwrap'>
                    {
                        copy.map((x,i)=>
                        <li key={i} className='main_flex_item' onMouseOver={()=>{setImg(i)}}>
                            <h4>{x.language}</h4>
                            <p>{x.title}</p>
                            <button onClick={()=>{window.open(x.address)}}>View Project</button>
                        </li>
                        )
                    }
                </ul>
                <div className='bg'>
                    <img src={copy[img].isrc}/>
                </div>
            </section>
        </>
    )
}

export default Main;