import { Link, Outlet } from 'react-router-dom';
import "./css/layout.css"
import $ from 'jquery'
import { useEffect, useState } from 'react';
import pofoldata from './data/pofoldata';

function Layout(){

    const [soga, setSoga] = useState([1,1])
    const [pjsoga , setPjsoga] = useState(0)
    const [desc, setDesc] = useState('')

    useEffect(()=>{
        console.log(soga)
    })

    return(
        <>
            <header>
                <nav>
                    <ul className='layout_header_ul'>
                        <li className='logo'>
                            {/* <Link to="/main"> */}
                                <img src='./images/logo.png'/>
                            {/* </Link> */}
                        </li>
                        <li className='menu'>
                            <button onClick={()=>{setPjsoga(1)}}> 
                                MENU
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <main id='main'>
                <Outlet />
            </main>

            {
                pjsoga == 1 &&
            

            <aside className='side'>
                <ul>

                    {/* 소개글 */}
                    <li>
                        <div className='flexbx'>
                            <div>소개글</div>
                            {
                                soga[0] == 1 &&
                                <div onClick={()=>{
                                    let copy = [...soga]
                                    copy[0] = 0
                                    setSoga(copy)
                                }}>－</div>
                            }
                            {
                                soga[0] == 0 &&
                                <div onClick={()=>{
                                    let copy = [...soga]
                                    copy[0] = 1
                                    setSoga(copy)
                                }}>＋</div>
                            }
                        </div>
                        {
                            soga[0] == 1 &&
                            <div className='txtbx'>
                                <p>
                                {pofoldata.length}개의 프로젝트로 이루어져있는
                                </p>
                                <p>
                                김동호의 포트폴리오 사이트입니다.<br/>
                                (프론트엔드 취업준비중)
                                </p>
                            </div>
                        }
                    </li>

                    <li>
                        <div className='flexbx'>
                            <div>프로젝트 소개</div>
                            {
                                soga[1] == 0 &&
                                <div onClick={()=>{
                                    let copy = [...soga];
                                    copy[1] = 1;
                                    setSoga(copy)
                                }}>＋</div>
                            }
                            {
                                soga[1] == 1 &&
                                <div onClick={()=>{
                                    let copy = [...soga];
                                    copy[1] = 0;
                                    setSoga(copy)
                                }}>－</div>
                            }
                        </div>
                        {
                            soga[1] == 1 &&
                            <div className='sogabtnbx'>
                            {
                                pofoldata.map((x,i)=>
                                <button onClick={()=>{setDesc(i)}} key={i}>{x.title}</button>
                                )
                            }
                            </div>
                        }
                        <div className='descbx'>
                            {
                                desc !== '' && soga[1] == 1 &&
                                <span>{pofoldata[desc].desc}</span>
                            }
                        </div>
                    </li>

                    {/* 연락처 */}
                    <li>
                        <div>
                            연락처 : fkrmsk147@naver.com
                        </div>
                    </li>
                </ul>
                <div className='xbtn' onClick={()=>{setPjsoga(0)}}>×</div>
            </aside>
            }
        </>
    )
}

export default Layout;