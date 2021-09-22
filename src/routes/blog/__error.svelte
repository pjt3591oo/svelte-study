<script context="module">
  export function load(params) {
    console.log('[ERROR] blog/__error.svente 발생');
    return {
      props: {
        title: params.error.message
      }
    }
  }
</script>

<script>
	export let title;
</script>

<h1>페이지 로드 중 에러가 발생했습니다.</h1>
<h1>{title}</h1>