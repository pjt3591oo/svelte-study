<script>
	import { onDestroy } from 'svelte';
  
  export let value = "";
  export let onInput;

  onDestroy(() => {
    console.log('Component was destroyed');
  })
</script>

<template>
  <div>component</div>
  <div>
    <slot></slot>
  </div>
  <span>export를 해야 props를 받을수 있습니다.</span>
  <div>
    <div>value: {value}</div>
    <input type="text" bind:value={value} on:input={onInput}/>
  </div>
</template>