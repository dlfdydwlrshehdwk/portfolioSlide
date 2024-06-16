import React from 'react'

function Dim(props) {
  return (
    <div className='dim'>
      <div className="info-box">
        마우스를 위아래로 스크롤하여 다양한 프로젝트를 볼 수 있습니다.<br/>
        우측상단에 INFO를 눌러 프로젝트별 정보를 확인할 수 있습니다.<br/>
        귀한시간 내주셔서 감사합니다.
        <button onClick={() => props.setDim(0)}>프로젝트 보러가기</button>
      </div>
    </div>
  )
}

export default Dim