# Otherkind 홈페이지

## 공개하기
1. ZIP을 압축 해제합니다. index.html을 더블클릭하면 로컬 미리보기가 열립니다.
2. GitHub에서 `사용자아이디.github.io`라는 공개 저장소를 만듭니다.
3. 저장소의 Add file → Upload files에서 압축 해제한 폴더 **안의 파일 및 assets 폴더**를 모두 올립니다. index.html이 저장소 최상위에 있어야 합니다.
4. Commit changes를 누릅니다.
5. Settings → Pages → Source: Deploy from a branch → main / (root) → Save.
6. Pages 화면에 표시되는 사이트 주소를 확인합니다.

## 콘텐츠 수정
- data.js: 그룹, 캐릭터, 음원, 만화, 공지, 연락처를 관리합니다. 주석에 예시가 있습니다.
- assets: 일러스트와 데모 파일을 넣습니다. 파일명은 영문 소문자 권장.
- 이미지 경로는 `assets/파일명.png`처럼 적습니다. 음원 다운로드는 공개 공유 링크를 입력합니다.
- 캐릭터 목록은 이전 대화 기준 임시 목록입니다. 이름과 그룹을 확인하세요.
- 실제 음원, 캐릭터 그림, 이용규약, SNS 주소는 미입력 상태입니다. 공개 전 채워주세요.
- 공개 GitHub 저장소에는 개인 정보, 비공개 자료, 배포 권한이 없는 그림/파일을 올리지 마세요.

- 그룹 또는 캐릭터에 `releaseStatus: 'private'`를 지정하면 음원 배포 목록에서 제외되고 상세 페이지에서도 다운로드가 숨겨집니다. 하프 보이스에 적용되어 있습니다.
- `releaseStatus: 'development'`는 제작 중 표시용입니다. 다운로드 링크가 등록되면 배포 중으로 표시됩니다.

## v0.3
- 기존 사이트 업데이트: index.html, data.js, script.js, style.css, README.md를 저장소 최상위에 덮어쓰고 Commit changes. 기존 assets/logo.png는 그대로 사용 가능합니다.
- 캐릭터별 profile, voice, credits, artCredits 항목을 수정할 수 있습니다. 빈 값은 화면에 표시하지 않습니다. 실제 다운로드는 banks에 등록하세요.
- 하프 보이스는 도감에서만 열람 가능합니다.
