// 캐릭터 이름과 정보를 추가하거나 수정하는 곳입니다. 아래 예시와 같은 형태로 작성하세요.
const DATA = {
  email: '', twitter: '', youtube: '', banner: '',
  groups: [
    {id:'doctor', name:'Doctor Original', ko:'닥터 오리지널', color:'#dce5ef', members:['타사','써멜','티레비','선푼']},
    {id:'slime', name:'Slime Sibling', ko:'슬라임 시블링', color:'#e0ecd9', members:['슬라보','슬라비']},
    {id:'riding', name:'Riding', ko:'라이딩', color:'#f0e2d3', members:['웨이크','포터']},
    {id:'space', name:'Machine in the Space', ko:'머신 인 더 스페이스', color:'#e5e1f2', members:['스타게이저','호라이즌']},
    {id:'half', releaseStatus:'private', name:'Half Voice', ko:'하프 보이스', color:'#f0dfe5', members:['우타호','카라타주','포르타코']}
  ],
  // 이름이 정확히 일치하면 캐릭터 페이지에 정보가 반영됩니다.
  // 예시: '타사': { roman:'Tasa', image:'assets/tasa.png', profile:'프로필', description:'설정', banks:[{name:'일본어 CV', version:'1.0', format:'CV', demo:'assets/tasa.mp3', download:'https://...', notes:'음원 설명'}] },
  characters: {},
  // 예시: {title:'제1화', date:'2026-11-26', images:['assets/comic01.png']}
  comics: [],
  news: [{date:'', title:'Otherkind 홈페이지 준비 중', text:'캐릭터 소개와 음원 배포 페이지를 준비하고 있습니다.'}],
  guidelines: ''
};
