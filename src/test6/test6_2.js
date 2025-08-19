// 금칙어: 콜라

function hasCola(str) {
    if (str.indexOf("콜라") > -1) {
        console.log("금칙어가 포함되어 있습니다.");
    } else {
        console.log("통과")
    }
};

hasCola("와 사이다가 짱이야!"); // 문장에서 콜라를 찾을 수 없기 때문에 -1 반환, if(-1)은 true
hasCola("무슨소리, 콜라가 최고");
hasCola("콜라"); // 0 if(0)은 false


// includes(): 문자열에 특정 문자열이 포함되어 있는지 확인
// 문자가 있으면 true, 없으면 false 반환

function hasCola2(str) {
    if (str.includes("콜라")) {
        console.log("금칙어가 포함되어 있습니다.");
    } else {
        console.log("통과");
    }
};

hasCola2("와 사이다가 짱이야!"); // false
hasCola2("무슨소리, 콜라가 최고"); // true
hasCola2("콜라"); // true