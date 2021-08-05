//지도

//경기+인천
//인천 선택자
const IncheonEl=document.getElementById('KR-28')
//경기 선택자
const GyeonggiEl=document.getElementById('KR-41')
//경기 글씨 선택자
const GyeonggitextEl=document.getElementById('text-KR-41')

//인천위에 마우스 올려지면
IncheonEl.addEventListener("mouseover", function(){
    IncheonEl.style.fill='#000'
    GyeonggiEl.style.fill='#000'
    GyeonggitextEl.style.fill='#fff'})
//인천 밖으로 마우스 나가면
IncheonEl.addEventListener("mouseout", function(){
    GyeonggiEl.style.fill="#CCCCCC"
    IncheonEl.style.fill='#cccccc'
    GyeonggitextEl.style.fill='#000'
  })
//경기 위에 마우스 올려지면
GyeonggiEl.addEventListener("mouseover", function(){  
    IncheonEl.style.fill='#000'
    GyeonggiEl.style.fill='#000'
    GyeonggitextEl.style.fill='#fff'
})
//경기 밖으로 마우스 나가면
GyeonggiEl.addEventListener("mouseout", function(){
    IncheonEl.style.fill="#CCCCCC"
    GyeonggiEl.style.fill="#CCCCCC"
    GyeonggitextEl.style.fill='#000'
    })
//경기 글씨 위로 마우스 올라가면
GyeonggitextEl.addEventListener("mouseover", function(){  
    IncheonEl.style.fill='#000'
    GyeonggiEl.style.fill='#000'
    GyeonggitextEl.style.fill='#fff'
})
//경기 글씨 밖으로 마우스 나가면
GyeonggitextEl.addEventListener("mouseout", function(){
    IncheonEl.style.fill="#CCCCCC"
    GyeonggiEl.style.fill="#CCCCCC"
    GyeonggitextEl.style.fill='#000'
    })

//대구+경북
//대구 선택자
const DaeguEl=document.getElementById('KR-27')
//경북 선택자
const NorthGyeongsangEl=document.getElementById('KR-47')
//경북 글씨 선택자
const NorthGyeongtextEl=document.getElementById('text-KR-47')

//대구 위에 마우스 올려지면
DaeguEl.addEventListener("mouseover", function(){
    DaeguEl.style.fill='#000'
    NorthGyeongsangEl.style.fill='#000'
    NorthGyeongtextEl.style.fill='#fff'
})
//대구 밖으로 마우스 나가면
DaeguEl.addEventListener("mouseout", function(){
    NorthGyeongsangEl.style.fill="#cccccc"
    DaeguEl.style.fill='#cccccc'
    NorthGyeongtextEl.style.fill='#000'
})
  
//경북 위에 마우스 올려지면
NorthGyeongsangEl.addEventListener("mouseover", function(){  
    NorthGyeongsangEl.style.fill='#000'
    DaeguEl.style.fill='#000'
    NorthGyeongtextEl.style.fill='#fff'})
//경북 밖으로 마우스 나가면
NorthGyeongsangEl.addEventListener("mouseout", function(){
    NorthGyeongsangEl.style.fill="#cccccc"
    DaeguEl.style.fill="#cccccc"
    NorthGyeongtextEl.style.fill='#000'
    })

//경북 글씨 위에 마우스 올려지면
NorthGyeongtextEl.addEventListener("mouseover", function(){  
    NorthGyeongsangEl.style.fill='#000'
    DaeguEl.style.fill='#000'
    NorthGyeongtextEl.style.fill='#fff'})
//경북 글씨 밖으로 마우스 나가면
NorthGyeongtextEl.addEventListener("mouseout", function(){
    NorthGyeongsangEl.style.fill="#cccccc"
    DaeguEl.style.fill="#cccccc"
    NorthGyeongtextEl.style.fill='#000'
    })

//울산+부산+경남
//울산 선택자
const UlsanEl=document.getElementById('KR-31')
//부산 선택자
const BusanEl=document.getElementById('KR-26')
//경남 선택자
const SouthGyeongsangEl=document.getElementById('KR-48')
//경남 글씨 선택자
const SouthGyeongtextEl=document.getElementById('text-KR-48')

// 울산 위에 마우스 올려지면
UlsanEl.addEventListener("mouseover", function(){
    UlsanEl.style.fill='#000'
    BusanEl.style.fill='#000'
    SouthGyeongsangEl.style.fill='#000'
    SouthGyeongtextEl.style.fill='#fff'})
//울산 밖으로 마우스 나가면
UlsanEl.addEventListener("mouseout", function(){
    UlsanEl.style.fill='#cccccc'
    BusanEl.style.fill='#cccccc'
    SouthGyeongsangEl.style.fill='#cccccc'
    SouthGyeongtextEl.style.fill='#000'
  })
//부산 위에 마우스 올려지면
BusanEl.addEventListener("mouseover", function(){
    UlsanEl.style.fill='#000'
    BusanEl.style.fill='#000'
    SouthGyeongsangEl.style.fill='#000'
    SouthGyeongtextEl.style.fill='#fff'
})
//부산 밖으로 마우스 나가면
BusanEl.addEventListener("mouseout", function(){
    UlsanEl.style.fill='#cccccc'
    BusanEl.style.fill='#cccccc'
    SouthGyeongsangEl.style.fill='#cccccc'
    SouthGyeongtextEl.style.fill='#000'
  })
//경남 위에 마우스 올려지면
SouthGyeongsangEl.addEventListener("mouseover", function(){
    UlsanEl.style.fill='#000'
    BusanEl.style.fill='#000'
    SouthGyeongsangEl.style.fill='#000'
    SouthGyeongtextEl.style.fill='#fff'})
//경남 밖으로 마우스 나가면
SouthGyeongsangEl.addEventListener("mouseout", function(){
    UlsanEl.style.fill='#cccccc'
    BusanEl.style.fill='#cccccc'
    SouthGyeongsangEl.style.fill='#cccccc'
    SouthGyeongtextEl.style.fill='#000'
  })
//경남 글씨 위에 마우스 올려지면
SouthGyeongtextEl.addEventListener("mouseover", function(){
    UlsanEl.style.fill='#000'
    BusanEl.style.fill='#000'
    SouthGyeongsangEl.style.fill='#000'
    SouthGyeongtextEl.style.fill='#fff'})
//경남 글씨 밖으로 마우스 나가면
SouthGyeongtextEl.addEventListener("mouseout", function(){
    UlsanEl.style.fill='#cccccc'
    BusanEl.style.fill='#cccccc'
    SouthGyeongsangEl.style.fill='#cccccc'
    SouthGyeongtextEl.style.fill='#000'
  })

//세종+대전+충남
//세종 선택자
const SejongEl=document.getElementById('KR-50')
//대전 선택자
const DaejeonEl=document.getElementById('KR-30')
//충남 선택자
const SouthChungcheongEl=document.getElementById('KR-44')
//충남 글씨 선택자
const SouthChungtextEl=document.getElementById('text-KR-44')

//세종 위에 마우스 올려지면
SejongEl.addEventListener("mouseover", function(){
    SejongEl.style.fill='#000'
    DaejeonEl.style.fill='#000'
    SouthChungcheongEl.style.fill='#000'
    SouthChungtextEl.style.fill='#fff'})
//세종 밖으로 마우스 나가면
SejongEl.addEventListener("mouseout", function(){
    SejongEl.style.fill='#cccccc'
    DaejeonEl.style.fill='#cccccc'
    SouthChungcheongEl.style.fill='#cccccc'
    SouthChungtextEl.style.fill='#000'
  })
//대전 위에 마우스 올려지면
DaejeonEl.addEventListener("mouseover", function(){
    SejongEl.style.fill='#000'
    DaejeonEl.style.fill='#000'
    SouthChungcheongEl.style.fill='#000'
    SouthChungtextEl.style.fill='#fff'})
//대전 밖으로 마우스 나가면
DaejeonEl.addEventListener("mouseout", function(){
    SejongEl.style.fill='#cccccc'
    DaejeonEl.style.fill='#cccccc'
    SouthChungcheongEl.style.fill='#cccccc'
    SouthChungtextEl.style.fill='#000'
  })
//충남 위에 마우스 올려지면
SouthChungcheongEl.addEventListener("mouseover", function(){
    SejongEl.style.fill='#000'
    DaejeonEl.style.fill='#000'
    SouthChungcheongEl.style.fill='#000'
    SouthChungtextEl.style.fill='#fff'})
//충남 밖으로 마우스 나가면
SouthChungcheongEl.addEventListener("mouseout", function(){
    SejongEl.style.fill='#cccccc'
    DaejeonEl.style.fill='#cccccc'
    SouthChungcheongEl.style.fill='#cccccc'
    SouthChungtextEl.style.fill='#000'
  })
//충남 글씨 위에 마우스 올려지면
SouthChungtextEl.addEventListener("mouseover", function(){
    SejongEl.style.fill='#000'
    DaejeonEl.style.fill='#000'
    SouthChungcheongEl.style.fill='#000'
    SouthChungtextEl.style.fill='#fff'})
//충남 글씨 밖으로 마우스 나가면
SouthChungtextEl.addEventListener("mouseout", function(){
    SejongEl.style.fill='#cccccc'
    DaejeonEl.style.fill='#cccccc'
    SouthChungcheongEl.style.fill='#cccccc'
    SouthChungtextEl.style.fill='#000'
  })
//광주 + 전남
//광주 선택자
const GwangjuEl=document.getElementById('KR-29')
//전남 선택자
const SouthJeollaEl=document.getElementById('KR-46')
//전남 글씨 선택자
const SouthJeollatextEl=document.getElementById('text-KR-46')

//광주위에 마우스 올려지면
GwangjuEl.addEventListener("mouseover", function(){
    GwangjuEl.style.fill='#000'
    SouthJeollaEl.style.fill='#000'
    SouthJeollatextEl.style.fill='#fff'})
//광주 밖으로 마우스 나가면
GwangjuEl.addEventListener("mouseout", function(){
    SouthJeollaEl.style.fill="#CCCCCC"
    GwangjuEl.style.fill='#cccccc'
    SouthJeollatextEl.style.fill='#000'
  })
//전남 위에 마우스 올려지면
SouthJeollaEl.addEventListener("mouseover", function(){  
    SouthJeollaEl.style.fill='#000'
    GwangjuEl.style.fill='#000'
    SouthJeollatextEl.style.fill='#fff'
})
//전남 밖으로 마우스 나가면
SouthJeollaEl.addEventListener("mouseout", function(){
    GwangjuEl.style.fill="#CCCCCC"
    SouthJeollaEl.style.fill="#CCCCCC"
    SouthJeollatextEl.style.fill='#000'
    })
//전남 글씨 위에 마우스 올려지면
SouthJeollatextEl.addEventListener("mouseover", function(){  
    SouthJeollaEl.style.fill='#000'
    GwangjuEl.style.fill='#000'
    SouthJeollatextEl.style.fill='#fff'
})
//전남 글씨 밖으로 마우스 나가면
SouthJeollatextEl.addEventListener("mouseout", function(){
    GwangjuEl.style.fill="#CCCCCC"
    SouthJeollaEl.style.fill="#CCCCCC"
    SouthJeollatextEl.style.fill='#000'
    })



//서울
//서울 글씨 선택자
const Seoultext=document.getElementById('text-KR-11')
//서울 선택자
const SeoulEl=document.getElementById('KR-11')
//글씨 위에 마우스 올려지면
Seoultext.addEventListener("mouseover", function(){  
    SeoulEl.style.fill='#000'
    Seoultext.style.fill='#fff'
})
//글씨 밖으로 마우스 나가면
Seoultext.addEventListener("mouseout", function(){
    SeoulEl.style.fill="#CCCCCC"
    Seoultext.style.fill='#000'
})
//지도 위에 마우스 올려지면
SeoulEl.addEventListener("mouseover", function(){  
    SeoulEl.style.fill='#000'
    Seoultext.style.fill='#fff'
})
//지도 밖으로 마우스 나가면
SeoulEl.addEventListener("mouseout", function(){
    SeoulEl.style.fill="#CCCCCC"
    Seoultext.style.fill='#000'
})

//전북
//전북 글씨 선택자
const NorthJeollatext=document.getElementById('text-KR-45')
//전북
const NorthJeollaEl=document.getElementById('KR-45')
//글씨 위에 마우스 올려지면
NorthJeollatext.addEventListener("mouseover", function(){  
    NorthJeollaEl.style.fill='#000'
    NorthJeollatext.style.fill='#fff'
})
//글씨 밖으로 마우스 나가면
NorthJeollatext.addEventListener("mouseout", function(){
    NorthJeollaEl.style.fill="#CCCCCC"
    NorthJeollatext.style.fill='#000'
})
//지도 위에 마우스 올려지면
NorthJeollaEl.addEventListener("mouseover", function(){  
    NorthJeollaEl.style.fill='#000'
    NorthJeollatext.style.fill='#fff'
})
//지도 밖으로 마우스 나가면
NorthJeollaEl.addEventListener("mouseout", function(){
    NorthJeollaEl.style.fill="#CCCCCC"
    NorthJeollatext.style.fill='#000'
})

//강원
//강원 글씨 선택자
const Gangwontext=document.getElementById('text-KR-42')
//강원 선택자
const GangwonEl=document.getElementById('KR-42')
//글씨 위에 마우스 올려지면
Gangwontext.addEventListener("mouseover", function(){  
    GangwonEl.style.fill='#000'
    Gangwontext.style.fill='#fff'
})
//글씨 밖으로 마우스 나가면
Gangwontext.addEventListener("mouseout", function(){
    GangwonEl.style.fill="#CCCCCC"
    Gangwontext.style.fill='#000'
})
//지도 위에 마우스 올려지면
GangwonEl.addEventListener("mouseover", function(){  
    GangwonEl.style.fill='#000'
    Gangwontext.style.fill='#fff'
})
//지도 밖으로 마우스 나가면
GangwonEl.addEventListener("mouseout", function(){
    GangwonEl.style.fill="#CCCCCC"
    Gangwontext.style.fill='#000'
})

//충북
//충북 글씨 선택자
const NorthChungtext=document.getElementById('text-KR-43')
//충북 선택자
const NorthChungEl=document.getElementById('KR-43')
//글씨 위에 마우스 올려지면
NorthChungtext.addEventListener("mouseover", function(){  
    NorthChungEl.style.fill='#000'
    NorthChungtext.style.fill='#fff'
})
//글씨 밖으로 마우스 나가면
NorthChungtext.addEventListener("mouseout", function(){
    NorthChungEl.style.fill="#CCCCCC"
    NorthChungtext.style.fill='#000'
})
//지도 위에 마우스 올려지면
NorthChungEl.addEventListener("mouseover", function(){  
    NorthChungEl.style.fill='#000'
    NorthChungtext.style.fill='#fff'
})
//지도 밖으로 마우스 나가면
NorthChungEl.addEventListener("mouseout", function(){
    NorthChungEl.style.fill="#CCCCCC"
    NorthChungtext.style.fill='#000'
})

//제주
//제주 글씨 선택자
const Jejutext=document.getElementById('text-KR-49')
//제주 선택자
const JejuEl=document.getElementById('KR-49')
//글씨 위에 마우스 올려지면
Jejutext.addEventListener("mouseover", function(){  
    JejuEl.style.fill='#000'
    Jejutext.style.fill='#fff'
})
//글씨 밖으로 마우스 나가면
Jejutext.addEventListener("mouseout", function(){
    JejuEl.style.fill="#CCCCCC"
    Jejutext.style.fill='#000'
})
//지도 위에 마우스 올려지면
JejuEl.addEventListener("mouseover", function(){  
    JejuEl.style.fill='#000'
    Jejutext.style.fill='#fff'
})
//지도 밖으로 마우스 나가면
JejuEl.addEventListener("mouseout", function(){
    JejuEl.style.fill="#CCCCCC"
    Jejutext.style.fill='#000'
})


//scrolltotop 
//데스크탑 스크롤투탑 
const $scrollToTop = document.querySelector("#scrollToTop");

//데스트탑일떄 스크롤투탑 기능 작성
$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });})

  // 윈도우에 스크롤 이벤트가 발생시,
// 스크롤 위치에 따라 scrollToTop 아이콘 투명도 변경
window.addEventListener("scroll", function () {
 
  // 만약 스크롤 위치가 600 이상이라면,
  window.scrollY >= 600
    ? ($scrollToTop.style.opacity = 1) // scrollToTop 버튼이 보이게 합니다
    : ($scrollToTop.style.opacity = 0); // 아니라면 안보이게 합니다
});

//gps
// function getLocation() {
//     if (navigator.geolocation) { // GPS를 지원하면
//       navigator.geolocation.getCurrentPosition(function(position) {
//         alert(position.coords.latitude + ' ' + position.coords.longitude);
//       }, function(error) {
//         console.error(error);
//       }, {
//         enableHighAccuracy: false,
//         maximumAge: 0,
//         timeout: Infinity
//       });
//     } else {
//       alert('GPS를 지원하지 않습니다');
//     }
//   }
//연습연습중
//햄버거 바 아이콘 선택자
const menuEl=document.getElementById('menuicon')
//닫는 아이콘 선택자
// const menuCloseEl=document.getElementById('btn--close')
//사이드 네비게이션 선택자
const firstEl=document.getElementById('sidemenu1')

//햄버거 바 아이콘을 클릭(이벤트)하면,
menuEl.addEventListener("click", function(){
    //햄버거바 아이콘 숨기기
    menuEl.style.display='none'

    //사이드 메뉴 나타내기
    firstEl.style.transform='translateX(0%)'
  
})
//먹거리 선택자
const foodsEl=document.getElementById('foods')
//두번째 사이드 메뉴(지역) 선택자
const area1El=document.getElementById('sidemenu1-0')
//먹거리를 클릭(이벤트)하면,
foodsEl.addEventListener("click", function(){   
    //사이드 메뉴 나타내기
    area1El.style.transform='translateX(0%)' 
})
//먹거리 선택자
const seoul1El=document.getElementById('서울1')
//두번째 사이드 메뉴(지역) 선택자
const sideMenu1El=document.getElementById('sidemenu1-1')
//먹거리를 클릭(이벤트)하면,
seoul1El.addEventListener("click", function(){
    
    //사이드 메뉴 나타내기
    sideMenu1El.style.transform='translateX(0%)'
  
})
//먹거리 선택자
const gyeongi1El=document.getElementById('경기1')
//두번째 사이드 메뉴(지역) 선택자
const sideMenu2El=document.getElementById('sidemenu1-2')
//먹거리를 클릭(이벤트)하면,
gyeongi1El.addEventListener("click", function(){
    
    //사이드 메뉴 나타내기
    sideMenu2El.style.transform='translateX(0%)'
  
})
//먹거리 선택자
const gangwon1El=document.getElementById('강원1')
//두번째 사이드 메뉴(지역) 선택자
const sideMenu3El=document.getElementById('sidemenu1-3')
//먹거리를 클릭(이벤트)하면,
gangwon1El.addEventListener("click", function(){
    
    //사이드 메뉴 나타내기
    sideMenu3El.style.transform='translateX(0%)'
  
})
//먹거리 선택자
const gyeongbuk1El=document.getElementById('경북1')
//두번째 사이드 메뉴(지역) 선택자
const sideMenu4El=document.getElementById('sidemenu1-4')
//먹거리를 클릭(이벤트)하면,
gyeongbuk1El.addEventListener("click", function(){
    
    //사이드 메뉴 나타내기
    sideMenu4El.style.transform='translateX(0%)'
  
})
//먹거리 선택자
const gyeongnam1El=document.getElementById('경남1')
//두번째 사이드 메뉴(지역) 선택자
const sideMenu5El=document.getElementById('sidemenu1-5')
//먹거리를 클릭(이벤트)하면,
gyeongnam1El.addEventListener("click", function(){
    
    //사이드 메뉴 나타내기
    sideMenu5El.style.transform='translateX(0%)'
  
})
//먹거리 선택자
const chungbuk1El=document.getElementById('충북1')
//두번째 사이드 메뉴(지역) 선택자
const sideMenu6El=document.getElementById('sidemenu1-6')
//먹거리를 클릭(이벤트)하면,
chungbuk1El.addEventListener("click", function(){
    
    //사이드 메뉴 나타내기
    sideMenu6El.style.transform='translateX(0%)'
  
})
//먹거리 선택자
const chungnum1El=document.getElementById('충남1')
//두번째 사이드 메뉴(지역) 선택자
const sideMenu7El=document.getElementById('sidemenu1-7')
//먹거리를 클릭(이벤트)하면,
chungnum1El.addEventListener("click", function(){
    
    //사이드 메뉴 나타내기
    sideMenu7El.style.transform='translateX(0%)'
  
})
//먹거리 선택자
const jeonbuk1El=document.getElementById('전북1')
//두번째 사이드 메뉴(지역) 선택자
const sideMenu8El=document.getElementById('sidemenu1-8')
//먹거리를 클릭(이벤트)하면,
jeonbuk1El.addEventListener("click", function(){
    
    //사이드 메뉴 나타내기
    sideMenu8El.style.transform='translateX(0%)'
  
})
//먹거리 선택자
const jeonnum1El=document.getElementById('전남1')
//두번째 사이드 메뉴(지역) 선택자
const sideMenu9El=document.getElementById('sidemenu1-9')
//먹거리를 클릭(이벤트)하면,
jeonnum1El.addEventListener("click", function(){
    
    //사이드 메뉴 나타내기
    sideMenu9El.style.transform='translateX(0%)'
  
})
//먹거리 선택자
const jeju1El=document.getElementById('제주1')
//두번째 사이드 메뉴(지역) 선택자
const sideMenu10El=document.getElementById('sidemenu1-10')
//먹거리를 클릭(이벤트)하면,
jeju1El.addEventListener("click", function(){
    
    //사이드 메뉴 나타내기
    sideMenu10El.style.transform='translateX(0%)'
  
})