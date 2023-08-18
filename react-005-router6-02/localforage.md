# React 의 LocalForage

- 설치: `npm install localforage`
- react 의 `localforage`는 IndexedDB 를 핸들링하는데 마치 JS 의 localstorage 에 데이터를 저장, 읽기 하는 것처럼 매우 쉽게 적용할 수 있도록
  만들어진 3rd party Lib 이다
- 데이터 저장: `localforage.setItem("DOC 이름", 데이터)`
- 데이터 읽기: `localforage.getItem("DOC 이름)`
- localstorage 는 데이터를 보관할때 반드시 문자열화(Serialize)하여야 한다
  하지만 localforage 를 통한 IndexedDB 는 데이터를 사용하여 원래대로 저장하고, 원래대로 복원(읽기)된다.

## Web Browser 의 Indexed Database API(indexedDB)

- 2015년 모질라 재단에서 표준으로 설정한 브라우저에 저장하는 DBMS 규격
- 모든 데이터는 index(색인)을 갖는 JSON type 으로 데이터를 저장한다
- JSON type 으로 저장하는 DB를 보통 `NoSQL` 이라고 한다
- 기본적으로 VanilaJS 를 통하여 웹브라우저에 데이터를 저장한다
- 현재 IE 와 아이폰, 아이패드의 Safari 를 제외한 대부분의 브라우저에서 지원한다
- 향후에는 브라우저를 통해서 컴퓨터와 로컬디스크에 물리적인 방법으로 데이터를 저장하는 부분까지 확장, 확대될 전망이다

## NoSQL DBMS 의 특징

- 저장소(스키마), Entity 구조, 데이터의 type, 데이터의 길이 등에 상관없이 데이터를 insert(추가, CREATE)함으로서
  자동으로 구조가 만들어지는 DBMS
- JSON type 으로 데이털르 저장하며, 여러가지 프로그래밍 언어에서 구조에 상관없이 핸들링이 가능하다
- 대량의 데이터를 순간적으로 insert 하는데 매우 유리하다
