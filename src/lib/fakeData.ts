const posts = [
  {
    id: '3eb09727-4c8d-4512-bcdf-a30822d98f6c',
    title: 'Prisma2 raw query',
    short_description: 'Prisma2 부터는 SQL을 직접 보낼 수 있습니다.imageimage모두 정상적으로 DB가 조회 되었습니다.하지만, 이상한 점 한 가지를 느끼진 않으셨나요?users는 배열로 반환되는게 당연시 되지만, user 또한 배열 형태로 반환 되어지고 있습니다.단일 객체라서',
    comments_count: 0,
    user: {
      username: 'jhj46456',
      id: 'ec5709f0-2885-11ea-bc75-e31143fb1c43',
      profile: {
        thumbnail: 'https://images.velog.io/images/jhj46456/profile/237c0798-1265-481a-a221-a76cadd25442/1584241671281-1.png',
      },
    },
    thumbnail: null,
    url_slug: 'Prisma2-raw-query-27nc2tgr',
    liked: false,
    released_at: '2020-04-03T13:32:28.191Z',
  },
  {
    id: '51a348b1-7122-4b07-ae7a-bfeeebbf54ce',
    title: 'TIL - 04/03 - Django part1',
    short_description: 'Django Replit 최대한 안보고 따라하기\n\n우선 Django 프로젝트 생성전에 파이썬 가상환경 먼저 생성해준다.\n\n생성한 가상환경을 활성화\n\n장고를 설치하자\n\n프로젝트 생성\n\n우선 test02/setting.py에서 프로젝트를 개발하기전에 초기 설정 먼저 해준다.\n\ntest02/settings.py\n\nINSTALLED_APPS의 admin,auth ...',
    comments_count: 0,
    user: {
      username: 'sungjun-jin',
      id: 'cf6e3300-4a7b-11ea-bf16-21cfb7538151',
      profile: {
        thumbnail: 'https://images.velog.io/images/sungjun-jin/profile/e1ec5d6e-606f-472f-af20-3bb444f6efd7/profile.jpeg.jpg',
      },
    },
    thumbnail: null,
    url_slug: 'TIL-0403-Django',
    liked: false,
    released_at: '2020-04-03T13:31:39.115Z',
  },
  {
    id: '66d92306-acdd-484f-9767-99e6f61eb096',
    title: 'python try except 예외처리 #1',
    short_description: '예외(exception)은 코드 실행중 발생한 에러를 말한다. TypeError,ZeroDivisionErrorAttributeErrorNameErrorIndexErrorexcept키워드 다음 예외종류를 넣어주게 되면 해당 오류에 대해서만 반응 하게 된다. 즉 예외마다',
    comments_count: 0,
    user: {
      username: 'hwang-eunji',
      id: 'e26c294e-65c4-41e5-8e33-bf6ab307abbc',
      profile: {
        thumbnail: 'https://images.velog.io/images/hwang-eunji/profile/841902c0-60d8-4807-a1bd-a3669ef7c443/70BB3466-5086-43F0-8B47-1BC173F158D9.jpeg',
      },
    },
    thumbnail: null,
    url_slug: 'python-try-except-예외처리-1',
    liked: false,
    released_at: '2020-04-03T13:17:01.246Z',
  },
  {
    id: 'a349c1ec-1bb9-46eb-90a7-e9ad1a349070',
    title: '[TIL] 20.04.03',
    short_description: 'login, signup 기능을 다시 구현saga 연결11회트렐로 작업을 처음부터 다시 해보았다. 서버 쪽에서 놓친는 부분이 많았었는데 보충이 되었다. 내일은 지난번 했던 트렐로 작업에 관한 글을 써보려 한다.',
    comments_count: 0,
    user: {
      username: 'sbinha',
      id: 'cc1e87c0-f163-11e9-b82d-2f213cce3b3f',
      profile: {
        thumbnail: 'https://images.velog.io/images/sbinha/profile/8c0952d0-1d4d-11ea-ae8c-4daae4dd8c7d/js.png',
      },
    },
    thumbnail: null,
    url_slug: 'TIL-20.04.03',
    liked: false,
    released_at: '2020-04-03T13:16:08.674Z',
  },
  {
    id: '6bb5dacb-5eaa-4314-a5b5-067b01dd3731',
    title: 'npm semver - Version Range, Prerelease Tags',
    short_description: '^ 와 -alpha.2 을 확인할 수 있는데, Node에서는 특히 이같은 Version Range를 권장하며 Prerelease Tags가 있냐, major가 0이냐 에 따라 달라진다.Strict constraint (or fully qualified constrain',
    comments_count: 0,
    user: {
      username: 'slaslaya',
      id: '14fc6ef0-6652-11e9-91cd-571f298b0040',
      profile: {
        thumbnail: 'https://images.velog.io/images/slaslaya/profile/cbca6c40-69c7-11e9-b0bb-3112f0133e0d/DkuR8K-V4AEzDJP.jpg',
      },
    },
    thumbnail: null,
    url_slug: 'npm-semver-Version-Range-Prerelease-Tags',
    liked: false,
    released_at: '2020-04-03T13:15:58.402Z',
  },
  {
    id: '1f54372b-18a6-4766-b06b-f4a1548ec850',
    title: '[wecode 2weeks] Django Relp.it 1',
    short_description: '튜토리얼\n\nviews.py -> 함수형 view\nrelp.it views.py => 클래스 형\n\n함수형은 어떤 함수가 뭐하는지 구분이 안됨 클래스는 명확한 구분이 가능하다.\n\n메인 클래스안에 포스트와 겟이 있음\n함수형을 쓰면 패스안에 인덱스로 하나하나 만들어줘야됨\nas',
    comments_count: 0,
    user: {
      username: 'jeongin',
      id: 'd52e4a92-d9ec-4cef-addd-e6d75113936e',
      profile: {
        thumbnail: 'https://images.velog.io/images/jeongin/profile/409e4dfc-32ff-4f61-a6a6-a0570f941cb2/social.png',
      },
    },
    thumbnail: null,
    url_slug: 'python-Django',
    liked: false,
    released_at: '2020-04-03T13:15:27.040Z',
  },
  {
    id: 'f641aaf5-f2c2-4c86-90d3-7212421c87da',
    title: 'django 구조',
    short_description: 'd',
    comments_count: 0,
    user: {
      username: 'ikswary',
      id: '050db6ae-f6da-4378-9de2-e039b22b7acf',
      profile: {
        thumbnail: 'https://images.velog.io/images/ikswary/profile/3ef04ef3-43eb-444f-9aaf-2e9dd217fad2/social.png',
      },
    },
    thumbnail: 'https://images.velog.io/images/ikswary/post/ca287f31-1ed0-42d0-b337-87ae3cc3c1f6/image.png',
    url_slug: 'django-구조',
    liked: false,
    released_at: '2020-04-03T12:57:20.110Z',
  },
  {
    id: 'ff58fe9a-d78c-453f-9bd7-c79a51507611',
    title: 'python Package',
    short_description: '모듈과 같은 개념이지만 더 크다. 모듈이 라이브러리라면 패키지는 프레임 워크라고 생각할 수 있다. 아래 폴더구조를 보자. 모듈이 코드를 모아둔 파일이라 module을 설명하면서 언급했다. package는 모듈의 집함, 디렉토리가 된다.파이썬 패키지 참고이미지패키지 또한',
    comments_count: 0,
    user: {
      username: 'hwang-eunji',
      id: 'e26c294e-65c4-41e5-8e33-bf6ab307abbc',
      profile: {
        thumbnail: 'https://images.velog.io/images/hwang-eunji/profile/841902c0-60d8-4807-a1bd-a3669ef7c443/70BB3466-5086-43F0-8B47-1BC173F158D9.jpeg',
      },
    },
    thumbnail: 'https://images.velog.io/images/hwang-eunji/post/f61e1869-c2d8-4856-aad4-12c62d8a6d30/image.png',
    url_slug: 'python-Package',
    liked: false,
    released_at: '2020-04-03T12:55:40.136Z',
  },
  {
    id: '5dfd7eea-ccfb-4fb9-bff6-9ecf3ef6747c',
    title: '40. 제너레이터',
    short_description: '제너레이터: 이터레이터를 생성해주는 함수이터레이터는 클래스에 iter, next 또는 getitem 메서드를 구현해야 하지만 제너레이터는 함수 안에서 yield라는 키워드만 사용하면 끝yield 값함수 안에서 yield를 사용하면 함수는 제너레이터가 되며 yield에는',
    comments_count: 0,
    user: {
      username: 'joygoround',
      id: 'd46ebb9b-a96f-4127-91c6-778b506c0f2b',
      profile: {
        thumbnail: 'https://images.velog.io/images/joygoround/profile/4c96a064-885b-4cb4-9129-7bfb92a81120/제목 없음.png',
      },
    },
    thumbnail: null,
    url_slug: '40.-제너레이터',
    liked: false,
    released_at: '2020-04-03T12:44:54.705Z',
  },
  {
    id: '833ffe8a-2637-49d3-a231-7b6e4f7d77bf',
    title: '❓Django migrations 집중 탐구',
    short_description: 'Django의 models.py에서 class를 통해 테이블의 형식을 만들고, migrate하는 과정에 너무 이해가 안 되어서 따로 정리했다.그냥 전체 페이지에다 담으려니 너무 내용 강조도 안 되고 모르는 단어도 있어서 ... 여기에 검색한 내용을 포함해서 엄청 자세하',
    comments_count: 0,
    user: {
      username: 'matisse',
      id: 'e425395e-2776-414d-adba-498226702e85',
      profile: {
        thumbnail: 'https://images.velog.io/images/matisse/profile/33ee5635-fbf9-471c-a734-6ddd87b5f2eb/링크드인.최종.png',
      },
    },
    thumbnail: null,
    url_slug: 'Django-migrations-집중-탐구',
    liked: false,
    released_at: '2020-04-03T12:42:49.009Z',
  },
  {
    id: '77cff652-c249-4da7-bffd-0d2802a94c50',
    title: 'python module 이해하기',
    short_description: 'my_module.py변수, 함수, 클래스 등을 모아 놓은 파일이며, 아래와 같은 이유로 만든다.다른 파일, 프로젝트에서 재사용 가능하도록 코드모음전체 코드가 너무 길어졌을때, 나누어 정리하기 위해모듈은 import &lt;모듈이름> 을 통해 불러사용 한다. 한가지 유',
    comments_count: 0,
    user: {
      username: 'hwang-eunji',
      id: 'e26c294e-65c4-41e5-8e33-bf6ab307abbc',
      profile: {
        thumbnail: 'https://images.velog.io/images/hwang-eunji/profile/841902c0-60d8-4807-a1bd-a3669ef7c443/70BB3466-5086-43F0-8B47-1BC173F158D9.jpeg',
      },
    },
    thumbnail: null,
    url_slug: 'python-module-이해하기',
    liked: false,
    released_at: '2020-04-03T12:39:53.726Z',
  },
  {
    id: 'c13de8f2-6c2c-4645-b4cc-12244000fe28',
    title: 'C언어 기초: 연봉 입력 받아 세금 계산하기',
    short_description: '이번 문제는 연봉을 입력 받아서 세금을 계산하여 출력하는 프로그램이다.\n\n출력 예시는 아래와 같다.\n\n이번 문제는 특히 까다로웠던 이유가, 연봉이 일정 금액 이상 넘으면, 해당 금액에 대해서만 세금을 매기는 것이 아니였기 때문이다.\n예를 들어,',
    comments_count: 0,
    user: {
      username: 'kevinkim2586',
      id: '56e75ae7-2371-4785-8194-306016ad0dad',
      profile: {
        thumbnail: 'https://images.velog.io/images/kevinkim2586/profile/7aeee56a-7ccf-42ad-8f9a-1c91b957bb2b/20190710_163550_HDR_Original.JPG',
      },
    },
    thumbnail: 'https://images.velog.io/images/kevinkim2586/post/0f89d4b3-df7a-4046-bc8c-ba3ae462c3c4/c002.jpg',
    url_slug: 'C언어-기초-연봉-입력-받아-세금-계산하기',
    liked: false,
    released_at: '2020-04-03T12:34:11.639Z',
  },
  {
    id: '8a8b3782-128f-42a4-8a52-fd733bb624ae',
    title: '[TIL] 2020-04-03 ',
    short_description: '미세먼지 프로젝트가 끝났다. 아쉬움도 남고 뿌듯하기도 한 프로젝트였다. 그래도 저번 미션과 달리 기능이 잘 되고 마감시간을 지켜서 뿌듯했지만 미션 하기 급급해서 공부 및 정리를 제대로 못한 것 같아 너무 아쉬웠다. 일주일에 미션도 구현하고 공부도 하려니 너무 시간에 쪼',
    comments_count: 0,
    user: {
      username: 'lllen',
      id: '837cbcd5-580b-4613-b7ff-e3a90e8a7bdc',
      profile: {
        thumbnail: null,
      },
    },
    thumbnail: null,
    url_slug: 'TIL-2020-04-03',
    liked: false,
    released_at: '2020-04-03T12:26:58.351Z',
  },
  {
    id: '24842a18-7b88-40e2-b650-6bf6c2dbfa1c',
    title: '20200403 TIL',
    short_description: 'TDD(Test-driven Development) 테스트 주도 개발BDD(Behaviour-driven development) 행위 주도 개발Mocha & Chai갈길이 멀다.공부해야할 것은 많은데 나는 왜이렇게 이해를 못할까뭐든지 하면 할수록 느는데 내가 느는거보다',
    comments_count: 0,
    user: {
      username: 'wanderer-s',
      id: '421fc363-c2e1-4127-8bd7-a32000c2a828',
      profile: {
        thumbnail: null,
      },
    },
    thumbnail: null,
    url_slug: '20200403-TIL',
    liked: false,
    released_at: '2020-04-03T12:26:00.869Z',
  },
  {
    id: '4805724a-9b92-4e0a-b1c8-d5f33557405c',
    title: 'TIL_2020.04.03',
    short_description: '음... 오늘은 TDD라는 방법론을 익혀보는 시간을 가졌다.. 코드를 작성하기 전에 테스트를 쓰는 방법론이었는데 갸념을 이해하는데 큰 도움이 된 것 같다... 이번에도 역시 hit-hub에서 fork한 값을 내 locsl로 가져와서 작업 하였다. 콘솔에서 작업하는데 콘',
    comments_count: 0,
    user: {
      username: 'gyu716625',
      id: 'dccc310e-f30e-4866-8bd9-720dfa0938b9',
      profile: {
        thumbnail: 'https://images.velog.io/images/gyu716625/profile/1877207c-2105-4e9b-9b7a-81b7ede87ea4/IMG_0206.JPG',
      },
    },
    thumbnail: null,
    url_slug: 'TIL2020.04.03',
    liked: false,
    released_at: '2020-04-03T12:21:48.057Z',
  },
  {
    id: '7a245af2-8ed1-4f8a-b13f-a98f8bcae5ed',
    title: '날짜와 시간(Date)',
    short_description: 'getTime',
    comments_count: 0,
    user: {
      username: 'fromswat',
      id: 'eb843377-9ba0-4add-a1cc-1ee57d196f0f',
      profile: {
        thumbnail: 'https://images.velog.io/images/fromswat/profile/cb1e2320-30d0-4adb-afcf-02108441c2ce/social.png',
      },
    },
    thumbnail: 'https://images.velog.io/images/fromswat/post/8131c133-19b9-462d-9a67-c50260b8be0b/스크린샷 2020-04-03 오후 8.28.39.png',
    url_slug: '날짜와-시간Date',
    liked: false,
    released_at: '2020-04-03T12:16:48.636Z',
  },
  {
    id: 'ac6c6403-8044-4fde-a1d4-d8627114f785',
    title: '[Django] AskDjango와 함께하는 장고걸스 튜토리얼 따라하기 (1)',
    short_description: "참조 사이트인터넷은 어떻게 작동할까요우리는 매일 인터넷을 사용한다. 주소창에 url을 입력하면 사이트에 접속할 수 있다.우리는 주소를 입력해서 특정 컴퓨터에 요청을 보낸다. '나 이 페이지 내용을 보고싶어' 라고 보내면 컴퓨터에서 응답을 보낸다.응답 은 실제로 홈페이지",
    comments_count: 0,
    user: {
      username: 'magnoliarfsit',
      id: '2780c44d-d0db-41ff-adbe-a6bef262c6fd',
      profile: {
        thumbnail: 'https://images.velog.io/images/magnoliarfsit/profile/835b99ad-b954-43ef-9921-cf16492677a6/social.png',
      },
    },
    thumbnail: null,
    url_slug: 'Django-AskDjango와-함께하는-장고걸스-튜토리얼-따라하기-1',
    liked: false,
    released_at: '2020-04-03T12:14:52.560Z',
  },
  {
    id: 'c5a22fbe-c76c-425b-a409-7a6316c624fa',
    title: '(TIL10) Linux',
    short_description: 'Linux Basics\n\n 리눅스는 1991년 Linus Torvals가 개발한 운영체제로, Window 시스템이나 application이 아닌 이상 일반적으로 시스템 서버는 linux 기반으로 운영\n\n 리눅스의 파일구조는 아래 그림과 같이 tree 형태로 구성되어 있',
    comments_count: 0,
    user: {
      username: 'trequartista',
      id: '35ed16d1-6f82-4169-81b9-04bf9cdead65',
      profile: {
        thumbnail: 'https://images.velog.io/images/trequartista/profile/2e880231-4006-4d40-a888-2cf0cff9cea7/social.png',
      },
    },
    thumbnail: 'https://images.velog.io/images/trequartista/post/6142f2c7-3b3e-4f0d-8bdc-1eac9b3e0cef/image.png',
    url_slug: 'TIL-Linux',
    liked: false,
    released_at: '2020-04-03T12:05:39.249Z',
  },
  {
    id: '3fb9fa78-f0a7-4599-8953-860ab3fce225',
    title: 'C언어 기초: 반복문을 이용한 출력',
    short_description: '요즘 학교에서 C언어 기초 과목을 수강하고 있는데, 3주차 밖에 되지 않았음에도 꽤 진도를 빠르게 나가고 있다. 뭐랄까, 배운건 아주 기초적인데 문제로 나오는 것들은 엄청난 응용 버전이랄까?\n\n비대면 강의로 과목들을 수강하고 있어서 다른 학생들은 얼마나 잘 따라오는지는',
    comments_count: 0,
    user: {
      username: 'kevinkim2586',
      id: '56e75ae7-2371-4785-8194-306016ad0dad',
      profile: {
        thumbnail: 'https://images.velog.io/images/kevinkim2586/profile/7aeee56a-7ccf-42ad-8f9a-1c91b957bb2b/20190710_163550_HDR_Original.JPG',
      },
    },
    thumbnail: 'https://images.velog.io/images/kevinkim2586/post/8f0c6b7e-926d-4534-8b1e-37d417dfda95/c002.jpg',
    url_slug: 'C언어-기초-반복문을-이용한-출력',
    liked: false,
    released_at: '2020-04-03T11:28:21.845Z',
  },
  {
    id: '0827f1ca-0cbb-42b9-8d9f-be214012b875',
    title: 'String, Number의 변환',
    short_description: '\n',
    comments_count: 0,
    user: {
      username: 'fromswat',
      id: 'eb843377-9ba0-4add-a1cc-1ee57d196f0f',
      profile: {
        thumbnail: 'https://images.velog.io/images/fromswat/profile/cb1e2320-30d0-4adb-afcf-02108441c2ce/social.png',
      },
    },
    thumbnail: null,
    url_slug: 'String-Number의-변환',
    liked: false,
    released_at: '2020-04-03T11:24:41.057Z',
  },
];

export default posts;