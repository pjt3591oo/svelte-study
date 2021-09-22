
<script context="module">
  // 페이지 로드될 때 실행되는 함수 - server, client
  export async function load(par) {
    console.log('load')
    const url = `http://localhost:3000/blog/${par.page?.params?.slug || 1}`;
    const res = await fetch(url);
    const { posts } =  await res.json()
    
    // 에러 발생시 __error.svelte에서 에러처리
    // throw 'asdf123'

    return {
      props: {
        name: '멍개',
        posts,
      }
    }
  }
</script>

<script>
	import { onMount, beforeUpdate, afterUpdate, onDestroy, tick } from 'svelte';
  import Component from './component.svelte';
  
  // lifecycle: beforeUpdate => onMount => afterUpdate => onDestroy
  // client life cycle
  onMount(async () => {
		console.log('onMount: before tick')
    await tick(); // 컴포넌트 업데이트 완료되는 시점을 기다리는 Promise 반환
    console.log('onMount: after tick')
	});

  // before update dom 
  beforeUpdate(() => {
    console.log('beforeUpdate', text)
  });

  // after update dom
  afterUpdate(() => {
    console.log('afterUpdate', text)
  });

  // unmounted dom
  onDestroy(() => {
    console.log('onDestroy')
  })




  export let text="";
  export let name;
  export let posts=[];
  export let w = 300;
  export let isShow = true;

  function handleClick(event) {
    console.log('update start')
    posts = [...posts, {title: text, id: posts.length}]
    text = "";
    console.log('update end')
  }

  $: totalPosts = posts.length;

  function onInput(event) {
    text = event.target.value;
  }
</script>

<template>
  <hr>
  <input type="checkbox" bind:checked={isShow} />
  {#if isShow}
    <Component 
      value={text} 
      onInput={onInput}
    >react의 children을 svelte에선 slot으로 처리합니다.</Component>
  {/if}
  <hr>

  <hr>

  <div>blog</div>
  <span>name: {name}</span>
  <div bind:clientWidth={w}>
    <input bind:value={text}>
    <button on:click={handleClick}>추가</button>
    <span>전체 포스트 갯수: {totalPosts}</span>
  </div>

  <!-- class:클래스 명={true/false} true일 경우 class="클래스 명", false일 경우 class=""이 된다.-->
  <ul class:a={false}>
    {#each posts as post, index(post.id)}
      <li>[{post.id}] {post.title}</li>
    {/each}
  </ul>
</template>