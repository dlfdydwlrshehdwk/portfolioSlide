import { Link, Outlet } from 'react-router-dom';
import "./css/layout.css"
import './css/dim.css'
import $ from 'jquery'
import { useEffect, useState } from 'react';
import pofoldata from './data/pofoldata';
import Dim from './Dim';

function Layout(props){

    const [soga, setSoga] = useState([1,1])
    const [pjsoga , setPjsoga] = useState(0)
    const [desc, setDesc] = useState('')
    const [dim, setDim] = useState(1)

    useEffect(()=>{
        // 마우스 휠에 따른 네모리스트 이동
        let i = 0;
        $(window).on('wheel',function(e){
          let a = e.originalEvent.wheelDelta
          if(dim) return;
          if(a < 0){
            console.log('밑으로')
            i++;
            // 만약 ul을 100으로 나눈숫자보다 커진다면 그숫자+1 보다 작게
            console.log($('.main_flexwrap'))
            let c = $('.main_flexwrap').innerWidth() / 100 - $('.main_flexwrap').innerWidth() / 100 / 10
            if(i > c) i = c;
          }
          else{
            console.log('위로')
            i--;
            // 만약 i가 0보다 작아진다면 i는 0
            if(i < 0) i = 0;
          }
    
          // 트랜스폼을 i * 100px로 셋팅 
          $('.main_flexwrap').css({
            transition : '.1s linear ',
            transform : `translate(${(i * -100) + 'px'},-50%)`
          })
        })
      },[dim])

    return(
        <>
            <header>
                <nav>
                    <ul className='layout_header_ul'>
                        <li className='logo'>
                            {/* <Link to="/main"> */}
                            {/* 배포할때 이미지 경로 ./image/... */}
                                <img src='./../images/logo.png'/>
                            {/* </Link> */}
                        </li>
                        <li className='menu'>
                            <button onClick={()=>{setPjsoga(1)}}> 
                                INFO
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <main id='main'>
                <Outlet />
            </main>

            {
                pjsoga == 1 ?
            
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
                                총 {pofoldata.length}개의 프로젝트로 이루어져있는<br/>
                                김동호의 포트폴리오 사이트입니다.
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
            </aside> : null
            }
            {
                dim ? <Dim setDim={setDim}/> : null
            }
        </>
    )
}

export default Layout;