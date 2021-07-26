//지도

//경기+인천
//인천 선택자
const IncheonEl=document.getElementById('KR-28')
//경기 선택자
const GyeonggiEl=document.getElementById('KR-41')

//인천위에 마우스 올려지면
IncheonEl.addEventListener("mouseover", function(){
    IncheonEl.style.fill='#000'
    GyeonggiEl.style.fill='#000'})
//인천 밖으로 마우스 나가면
IncheonEl.addEventListener("mouseout", function(){
    GyeonggiEl.style.fill="#CCCCCC"
    IncheonEl.style.fill='#cccccc'
  })
//경기 위에 마우스 올려지면
GyeonggiEl.addEventListener("mouseover", function(){  
    IncheonEl.style.fill='#000'
    GyeonggiEl.style.fill='#000'
})
//경기 밖으로 마우스 나가면
GyeonggiEl.addEventListener("mouseout", function(){
    IncheonEl.style.fill="#CCCCCC"
    GyeonggiEl.style.fill="#CCCCCC"
    })

//대구+경북
//대구 선택자
const DaeguEl=document.getElementById('KR-27')
//경북 선택자
const NorthGyeongsangEl=document.getElementById('KR-47')

//대구 위에 마우스 올려지면
DaeguEl.addEventListener("mouseover", function(){
    DaeguEl.style.fill='#000'
    NorthGyeongsangEl.style.fill='#000'})
//대구 밖으로 마우스 나가면
DaeguEl.addEventListener("mouseout", function(){
    NorthGyeongsangEl.style.fill="#cccccc"
    DaeguEl.style.fill='#cccccc'
  })
//경북 위에 마우스 올려지면
NorthGyeongsangEl.addEventListener("mouseover", function(){  
    NorthGyeongsangEl.style.fill='#000'
    DaeguEl.style.fill='#000'
})
//경북 밖으로 마우스 나가면
NorthGyeongsangEl.addEventListener("mouseout", function(){
    NorthGyeongsangEl.style.fill="#cccccc"
    DaeguEl.style.fill="#cccccc"
    })

//울산+부산+경남
//울산 선택자
const UlsanEl=document.getElementById('KR-31')
//부산 선택자
const BusanEl=document.getElementById('KR-26')
//경남 선택자
const SouthGyeongsangEl=document.getElementById('KR-48')

// 울산 위에 마우스 올려지면
UlsanEl.addEventListener("mouseover", function(){
    UlsanEl.style.fill='#000'
    BusanEl.style.fill='#000'
    SouthGyeongsangEl.style.fill='#000'})
//울산 밖으로 마우스 나가면
UlsanEl.addEventListener("mouseout", function(){
    UlsanEl.style.fill='#cccccc'
    BusanEl.style.fill='#cccccc'
    SouthGyeongsangEl.style.fill='#cccccc'
  })
//부산 위에 마우스 올려지면
BusanEl.addEventListener("mouseover", function(){
    UlsanEl.style.fill='#000'
    BusanEl.style.fill='#000'
    SouthGyeongsangEl.style.fill='#000'})
//부산 밖으로 마우스 나가면
BusanEl.addEventListener("mouseout", function(){
    UlsanEl.style.fill='#cccccc'
    DaeguEl.style.fill='#cccccc'
    SouthGyeongsangEl.style.fill='#cccccc'
  })
//경남 위에 마우스 올려지면
SouthGyeongsangEl.addEventListener("mouseover", function(){
    UlsanEl.style.fill='#000'
    BusanEl.style.fill='#000'
    SouthGyeongsangEl.style.fill='#000'})
//경남 밖으로 마우스 나가면
SouthGyeongsangEl.addEventListener("mouseout", function(){
    UlsanEl.style.fill='#cccccc'
    BusanEl.style.fill='#cccccc'
    SouthGyeongsangEl.style.fill='#cccccc'
  })

//세종+대전+충남
//세종 선택자
const SejongEl=document.getElementById('KR-50')
//대전 선택자
const DaejeonEl=document.getElementById('KR-30')
//충남 선택자
const SouthChungcheongEl=document.getElementById('KR-44')

//세종 위에 마우스 올려지면
SejongEl.addEventListener("mouseover", function(){
    SejongEl.style.fill='#000'
    DaejeonEl.style.fill='#000'
    SouthChungcheongEl.style.fill='#000'})
//세종 밖으로 마우스 나가면
SejongEl.addEventListener("mouseout", function(){
    SejongEl.style.fill='#cccccc'
    DaejeonEl.style.fill='#cccccc'
    SouthChungcheongEl.style.fill='#cccccc'
  })
//대전 위에 마우스 올려지면
DaejeonEl.addEventListener("mouseover", function(){
    SejongEl.style.fill='#000'
    DaejeonEl.style.fill='#000'
    SouthChungcheongEl.style.fill='#000'})
//대전 밖으로 마우스 나가면
DaejeonEl.addEventListener("mouseout", function(){
    SejongEl.style.fill='#cccccc'
    DaejeonEl.style.fill='#cccccc'
    SouthChungcheongEl.style.fill='#cccccc'
  })
//충남 위에 마우스 올려지면
SouthChungcheongEl.addEventListener("mouseover", function(){
    SejongEl.style.fill='#000'
    DaejeonEl.style.fill='#000'
    SouthChungcheongEl.style.fill='#000'})
//충남 밖으로 마우스 나가면
SouthChungcheongEl.addEventListener("mouseout", function(){
    SejongEl.style.fill='#cccccc'
    DaejeonEl.style.fill='#cccccc'
    SouthChungcheongEl.style.fill='#cccccc'
  })
//광주 + 전남
//광주 선택자
const GwangjuEl=document.getElementById('KR-29')
//전남 선택자
const SouthJeollaEl=document.getElementById('KR-46')

//광주위에 마우스 올려지면
GwangjuEl.addEventListener("mouseover", function(){
    GwangjuEl.style.fill='#000'
    SouthJeollaEl.style.fill='#000'})
//광주 밖으로 마우스 나가면
GwangjuEl.addEventListener("mouseout", function(){
    SouthJeollaEl.style.fill="#CCCCCC"
    GwangjuEl.style.fill='#cccccc'
  })
//전남 위에 마우스 올려지면
SouthJeollaEl.addEventListener("mouseover", function(){  
    SouthJeollaEl.style.fill='#000'
    GwangjuEl.style.fill='#000'
})
//전남 밖으로 마우스 나가면
SouthJeollaEl.addEventListener("mouseout", function(){
    GwangjuEl.style.fill="#CCCCCC"
    SouthJeollaEl.style.fill="#CCCCCC"
    })

//글씨
//서울
//글씨 선택자
const Seoultext=document.getElementById('text-seoul')
//지도 선택자
const Seoulmap=document.getElementById('KR-11')
//글씨 위에 마우스 올려지면
Seoultext.addEventListener("mouseover", function(){  
    Seoulmap.style.fill='#000'
    Seoultext.style.fill='#fff'
})
//글씨 밖으로 마우스 나가면
Seoultext.addEventListener("mouseout", function(){
    Seoulmap.style.fill="#CCCCCC"
    Seoultext.style.fill='#000'
    })