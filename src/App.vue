<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
html,
body,
#app {
	width: 100%;
	height: 100%;
}
ul,
li {
	list-style: none;
}
</style>
