<template>
	<a
		id="chat-widget"
		href="https://discord.gg/ThSJxNEHhZ"
		target="_blank"
	>
		<button>
			<fa :icon="['fab', 'discord']" />
		</button>
	</a>
</template>

<script>
export default {
	name: 'DiscordChatWidget',
};
</script>

<style lang="scss" scoped>
#chat-widget {
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 100;
}

button {
	height: 50px;
	width: 50px;
	font-size: 25px;
	border-radius: 50%;
	padding: 10px;
	border: none;
	color: white;
	background: #5865f2;
	cursor: pointer;
}
</style>
