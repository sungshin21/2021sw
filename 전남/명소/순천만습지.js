//거리 계산 연습
var ourCoords = {
    latitude : 34.886173398022855,  //위도
    longitude : 127.50896542459404,  //경도
};

window.onload = getMyLocation;

function getMyLocation() {

     // navigator.geolocation 없다면 null을 반환하고 조건식의 결과는 false
    if (navigator.geolocation) {
        
        //getCurrentPosition(successhandler, errorHandler, option)
        navigator.geolocation.getCurrentPosition(
            displayLocation, 
            displayError); 
    } else {
        alert("내 위치 정보제공 설정이 꺼져있거나, 지원하지 않는 브라우져 입니다." );
    }
}

function displayLocation(position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    var distance = computeDistance(position.coords, ourCoords);
    $("#distance").html("당신과 순천만습지 사이의 대략적인 거리:"+distance.toFixed(1)+"km");
                        
}

function displayError(error) {
    var errorTypes = {
        0: "알려지지 않은 에러",
        1: "사용자가 권한 거부",
        2: "위치를 찾을 수 없음",
        3: "요청 응답 시간 초과"
    };
    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    $("#location").html(errorMessage);        
}


// 구면 코사인 법칙(Spherical Law of Cosine) 으로 두 위도/경도 지점의 거리를 구함
// 반환 거리 단위 (km)
function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);

    var Radius = 6371; //지구의 반경(km)
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
                    Math.cos(startLatRads) * Math.cos(destLatRads) *
                    Math.cos(startLongRads - destLongRads)) * Radius;

    return distance;
}

function degreesToRadians(degrees) {
    radians = (degrees * Math.PI)/180;
    return radians;
}