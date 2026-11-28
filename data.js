// image: 상세 일러스트 / icon: 목록 아이콘 / groups[].image: 그룹 단체샷
const DATA = {
  "email": "",
  "twitter": "https://x.com/TAURANGx2",
  "youtube": "https://www.youtube.com/channel/UC9SDm11FIFxXMgDWKLyeFPQ",
  "banner": "assets/otherkind-main.png",
  "groups": [
    {
      "id": "doctor",
      "name": "Doctor Original",
      "ko": "닥터 오리지널",
      "accent": "#637C96",
      "secondary": "#A9B9CA",
      "color": "#E7EDF3",
      "members": [
        "타사",
        "써멜",
        "티레비",
        "선푼"
      ],
      "description": "일상에서 쉽게 접할 수 있는 소리를 기반으로 제작된 무생물 UTAU 음원 그룹입니다.",
      "image": "assets/groups/doctor-original.png"
    },
    {
      "id": "riding",
      "name": "Riding",
      "ko": "라이딩",
      "accent": "#B78143",
      "secondary": "#E2BE8B",
      "color": "#F5EBDD",
      "members": [
        "웨이크",
        "포터"
      ],
      "description": "다양한 이동수단에서 발생하는 소리를 기반으로 제작된 무생물 UTAU 음원 그룹입니다.",
      "image": "assets/groups/riding.png"
    },
    {
      "id": "slime",
      "name": "Slime Sibling",
      "ko": "슬라임 시블링",
      "accent": "#64A78E",
      "secondary": "#A8DCC8",
      "color": "#E6F4EC",
      "members": [
        "슬라보",
        "슬라비"
      ],
      "description": "슬라임(액체괴물)에서 발생하는 소리를 기반으로 제작된 무생물 UTAU 음원 그룹입니다.",
      "image": "assets/groups/slime-sibling.png"
    },
    {
      "id": "space",
      "name": "Machine in the Space",
      "ko": "머신 인 더 스페이스",
      "accent": "#49466F",
      "secondary": "#9694BD",
      "color": "#E3E2F1",
      "members": [
        "스타게이저",
        "호라이즌"
      ],
      "description": "우주에서 관측되는 현상을 소리로 구현한 자료를 기반으로 제작된 무생물 UTAU 음원 그룹입니다.",
      "image": "assets/groups/machine-in-the-space.png"
    },
    {
      "id": "half",
      "name": "Half Voice",
      "ko": "하프 보이스",
      "accent": "#D9AF32",
      "secondary": "#F4D76B",
      "color": "#FFF6D6",
      "members": [
        "우타호",
        "카라타주",
        "시야벨"
      ],
      "description": "제작자의 목소리 또는 목소리를 활용한 소리를 기반으로 제작된 UTAU 음원 그룹입니다.",
      "releaseStatus": "private",
      "image": "assets/groups/half-voice.png"
    }
  ],
  "characters": {
    "타사": {
      "roman": "TASA",
      "profile": {
        "성별": "남성형",
        "외관 나이": "소년~청년",
        "신장": "177cm",
        "종족": "안드로이드",
        "생일": "7월 7일",
        "테마": "청춘!"
      },
      "traits": [
        "느긋한",
        "여유로운",
        "다정한"
      ],
      "description": "느긋하고 여유로운 성격의 안드로이드. 타인을 다정하게 대한다.",
      "voice": {
        "음원 소재": "탄산 소리",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "단독음 (CV)",
        "수록 음계": "C4"
      },
      "credits": [
        "※ 본 음원은 촙타우러(@infinityecho00) 님의 자모툴과 @HAE4ii 님의 유료 자음셋을 사용하여 제작되었습니다."
      ],
      "artCredits": [
        "Design by 츠키스즈 (ツキ スズ)"
      ],
      "banks": [],
      "icon": "assets/icons/tasa.png",
      "releaseStatus": "ready",
      "demos": [
        {
          "title": "Juggernaut / 나츠시로 타카아키",
          "url": "https://youtu.be/fPilPSDexbs",
          "thumbnail": "https://i.ytimg.com/vi/fPilPSDexbs/hqdefault.jpg"
        }
      ]
    },
    "써멜": {
      "roman": "Thermel",
      "profile": {
        "성별": "?",
        "외관 나이": "청년",
        "신장": "172cm",
        "종족": "안드로이드",
        "생일": "5월 12일",
        "테마": "간호"
      },
      "traits": [
        "친절한",
        "건강 중시",
        "걱정이 많은"
      ],
      "description": "친절하고 걱정이 많은 안드로이드. 건강을 중요하게 여긴다.",
      "voice": {
        "음원 소재": "체온계 소리",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "단독음 (CV)",
        "수록 음계": "C4"
      },
      "credits": [
        "※ 본 음원은 촙타우러(@infinityecho00) 님의 자모툴과 @HAE4ii 님의 유료 자음셋을 사용하여 제작되었습니다."
      ],
      "artCredits": [],
      "banks": [],
      "catchphrase": "건강 챙기세요, 닥터.",
      "icon": "assets/icons/thermel.png",
      "releaseStatus": "ready"
    },
    "티레비": {
      "roman": "TreVi",
      "profile": {
        "성별": "남성형",
        "외관 나이": "중년",
        "신장": "198cm",
        "종족": "안드로이드",
        "생일": "11월 21일",
        "테마": "브라운관"
      },
      "traits": [
        "쾌남",
        "개그캐"
      ],
      "description": "호쾌한 성격의 안드로이드. 개그 캐릭터를 담당한다.",
      "voice": {
        "음원 소재": "브라운관 TV 전원음",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "단독음 (CV)",
        "수록 음계": "C4"
      },
      "credits": [
        "※ 본 음원은 촙타우러(@infinityecho00) 님의 자모툴과 @HAE4ii 님의 유료 자음셋을 사용하여 제작되었습니다."
      ],
      "artCredits": [],
      "banks": [],
      "icon": "assets/icons/trevi.png",
      "releaseStatus": "ready"
    },
    "선푼": {
      "roman": "Sunpun",
      "profile": {
        "성별": "남성",
        "외관 나이": "청년",
        "신장": "167cm",
        "종족": "안드로이드",
        "생일": "10월 27일",
        "테마": "한 여름의 희망"
      },
      "traits": [
        "유쾌한",
        "능청스러운",
        "현실적인"
      ],
      "description": "유쾌하고 능청스러운 성격의 안드로이드. 현실적인 사고방식을 지니고 있다.",
      "voice": {
        "음원 소재": "선풍기 소리",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "단독음 (CV)",
        "수록 음계": "C4"
      },
      "credits": [
        "※ 본 음원은 촙타우러(@infinityecho00) 님의 자모툴과 @HAE4ii 님의 유료 자음셋을 사용하여 제작되었습니다."
      ],
      "artCredits": [],
      "banks": [],
      "icon": "assets/icons/sunpun.png",
      "releaseStatus": "ready"
    },
    "웨이크": {
      "roman": "Wake",
      "profile": {
        "성별": "남성형",
        "외관 나이": "청년",
        "신장": "197cm",
        "종족": "안드로이드 (비행기)",
        "생일": "8월 22일",
        "테마": "파랑을 가로지르다"
      },
      "traits": [
        "무뚝뚝한",
        "신사적인",
        "예의 바른"
      ],
      "description": "무뚝뚝하지만 신사적이고 예의 바른 안드로이드.",
      "voice": {
        "음원 소재": "비행기 이륙음",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "단독음 (CV)",
        "수록 음계": "C4",
        "음색 특징": "초저음"
      },
      "credits": [
        "※ 본 음원은 촙타우러(@infinityecho00) 님의 자모툴과 @HAE4ii 님의 유료 자음셋을 사용하여 제작되었습니다."
      ],
      "artCredits": [],
      "banks": [],
      "icon": "assets/icons/wake.png",
      "releaseStatus": "undecided"
    },
    "포터": {
      "roman": "Porter",
      "profile": {
        "성별": "남성형",
        "외관 나이": "소년",
        "신장": "157cm",
        "종족": "안드로이드 (증기기관열차)",
        "생일": "8월 22일",
        "테마": "Bon voyage!, 짐꾼"
      },
      "traits": [
        "장난기 많은",
        "능청스러운",
        "활발한"
      ],
      "description": "장난기가 많고 능청스러운 안드로이드. 활발한 성격을 지니고 있다.",
      "voice": {
        "음원 소재": "증기기관차 기적음",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "단독음 (CV)",
        "수록 음계": "C4"
      },
      "credits": [
        "※ 본 음원은 촙타우러(@infinityecho00) 님의 자모툴과 @HAE4ii 님의 유료 자음셋을 사용하여 제작되었습니다."
      ],
      "artCredits": [],
      "banks": [],
      "icon": "assets/icons/porter.png",
      "releaseStatus": "undecided"
    },
    "슬라보": {
      "roman": "Slabo",
      "profile": {
        "성별": "여성",
        "외관 나이": "소녀~청년",
        "신장": "161cm",
        "종족": "슬라임이 탑승한 안드로이드",
        "생일": "9월 14일",
        "테마": "슬라임이 안에 타고 있어요, 슬라임 남매 중 누나"
      },
      "traits": [
        "성가신",
        "츤데레",
        "다혈질"
      ],
      "description": "다혈질에 다소 성가신 성격을 지닌 슬라임 남매의 누나. 츤데레 기질이 있다.",
      "voice": {
        "음원 소재": "슬라임 (액체괴물) 소리",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "연속음 (VCV)",
        "수록 음계": ""
      },
      "credits": [
        "無生物子音音源 by Haruqa"
      ],
      "artCredits": [
        "Design by 마사"
      ],
      "banks": [],
      "releaseStatus": "undecided",
      "icon": "assets/icons/slabo.png"
    },
    "슬라비": {
      "roman": "Slabi",
      "profile": {
        "성별": "남성",
        "외관 나이": "소년~청년",
        "신장": "176cm",
        "종족": "슬라임이 탑승한 안드로이드",
        "생일": "9월 14일",
        "테마": "슬라임이 안에 타고 있어요, 슬라임 남매 중 남동생"
      },
      "traits": [
        "장난스러운",
        "능청맞은",
        "느긋한"
      ],
      "description": "장난스럽고 능청맞은 성격의 슬라임 남매 중 남동생. 누나와 달리 느긋하다.",
      "voice": {
        "음원 소재": "슬라임 (액체괴물) 소리",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "연속음 (VCV)",
        "수록 음계": ""
      },
      "credits": [
        "無生物子音音源 by Haruqa"
      ],
      "artCredits": [
        "Design by 마사"
      ],
      "banks": [],
      "releaseStatus": "undecided",
      "icon": "assets/icons/slabi.png"
    },
    "스타게이저": {
      "roman": "Stargazer",
      "profile": {
        "성별": "?",
        "외관 나이": "?",
        "신장": "300cm",
        "종족": "별의 파편 (신체는 안드로이드)",
        "생일": "10월 4일",
        "테마": "별, 성악가"
      },
      "traits": [
        "우아한",
        "능청스러운",
        "엉뚱한"
      ],
      "description": "안드로이드의 신체를 지닌 별의 파편. 우아하고 정중한 말투를 사용하지만, 다소 엉뚱하고 능청스러운 면모가 있다.",
      "voice": {
        "음원 소재": "성진 (별의 진동)",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "연속음 (VCV)",
        "수록 음계": ""
      },
      "credits": [
        "無生物子音音源 by Haruqa"
      ],
      "artCredits": [],
      "banks": [],
      "releaseStatus": "undecided",
      "icon": "assets/icons/stargazer.png"
    },
    "호라이즌": {
      "roman": "Horizon",
      "profile": {
        "성별": "?",
        "외관 나이": "청년",
        "신장": "187cm",
        "종족": "블랙홀의 파편 (신체는 안드로이드)",
        "생일": "",
        "테마": "블랙홀, 대식가"
      },
      "traits": [
        "침착한",
        "능청스러운",
        "미식가"
      ],
      "description": "안드로이드의 신체를 지닌 블랙홀의 파편. 침착하면서도 능청스러운 성격으로, 먹는 것을 좋아하며 음식의 맛 또한 중요하게 여긴다.",
      "voice": {
        "음원 소재": "블랙홀 소리",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "연속음 (VCV)",
        "수록 음계": ""
      },
      "credits": [
        "無生物子音音源 by Haruqa"
      ],
      "artCredits": [],
      "banks": [],
      "releaseStatus": "undecided",
      "icon": "assets/icons/horizon.png"
    },
    "우타호": {
      "roman": "UTAHO",
      "profile": {
        "성별": "무성",
        "외관 나이": "청년",
        "신장": "157cm",
        "종족": "사이보그",
        "생일": "2월 1일",
        "테마": "호랑이"
      },
      "traits": [
        "소심한"
      ],
      "description": "다소 소심한 성격의 사이보그.",
      "voice": {
        "음원 소재": "제작자의 목소리",
        "대응 언어": "",
        "음원 방식": "단독음 (CV) ONLY",
        "수록 음계": ""
      },
      "credits": [],
      "artCredits": [],
      "banks": [],
      "icon": "assets/icons/utaho.png"
    },
    "카라타주": {
      "roman": "Karatazu",
      "profile": {
        "성별": "여성",
        "외관 나이": "청년",
        "신장": "172cm",
        "종족": "안드로이드",
        "생일": "1월 20일",
        "테마": "햇살, 카주"
      },
      "traits": [
        "쾌활한",
        "호탕한",
        "밝은"
      ],
      "description": "밝고 호탕한 성격의 안드로이드. 쾌활하고 시원시원한 면모를 지니고 있다.",
      "voice": {
        "음원 소재": "제작자가 연주한 카주 소리",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "단독음 (CV)",
        "수록 음계": ""
      },
      "credits": [
        "촙타우러(@infinityecho00) 님의 자모툴 사용.",
        "@HAE4ii 님의 유료 자음셋 사용 예정."
      ],
      "artCredits": [],
      "banks": [],
      "icon": "assets/icons/karatazu.png"
    },
    "시야벨": {
      "roman": "Cyabel",
      "profile": {
        "성별": "여성",
        "외관 나이": "소녀",
        "신장": "161cm",
        "종족": "안드로이드",
        "생일": "12월 12일",
        "테마": "바다, 종"
      },
      "traits": [
        "해맑은",
        "순수한"
      ],
      "description": "해맑고 순수한 성격의 안드로이드.",
      "voice": {
        "음원 소재": "제작자의 목소리",
        "대응 언어": "일본어 ONLY",
        "음원 방식": "단독음 (CV) ONLY",
        "수록 음계": "",
        "제작 방식": "모음 녹음 및 자음셋 조합",
        "제작 상태": "제작 예정"
      },
      "credits": [
        "※ 본 음원은 촙타우러(@infinityecho00) 님의 자모툴과 @HAE4ii 님의 유료 자음셋을 사용하여 제작될 예정입니다."
      ],
      "artCredits": [],
      "banks": [],
      "releaseStatus": "development",
      "icon": "assets/icons/cyabel.png"
    }
  },
  "comics": [
    {
      "title": "OK_DocOri 01. 자기소개…?",
      "date": "",
      "images": [
        "assets/comics/ok-docori-01.png"
      ]
    }
  ],
  "news": [
    {
      "date": "",
      "title": "캐릭터 프로필 업데이트",
      "text": "그룹 소개와 캐릭터 13명의 프로필을 추가했습니다."
    }
  ],
  "guidelines": ""
};
