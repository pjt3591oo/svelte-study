# svelte speed study

* 프로젝트 생성(SSR)

```bash
$ npm init svelte@next ssr-app
$ cd my-app
$ npm i
$ npm run dev
$ npm run build
```

* 프로젝트 생성(CSR)

```bash
$ npx degit sveltejs/template svelte-todo
$ cd csr-app
$ npm install
```

### 특징 & 장점

* 양방향 바인딩 제공

* props/store 제공

* slot 제공(similar children on react)

* 빠른 빌드타임(rollup)

---

### svelte@next 기능

* SSR 제공 

* 디렉터리로 url 구성

  - slug 형태로 path param 전달가능

  - __layout.svelte, __error.svelte와 같은 특수 파일 제공

* js, ts 파일로 만들어진 코드는 서버 역할을 수행, get, post, put, delete 함수를 만들어 http method 라우팅 가능