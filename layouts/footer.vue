<template>
  <footer class="footer">
		<span class="footer__span">
			<h3>Build with <strong class="index__text-gradient">Nuxt3</strong> and much love</h3>
			<IconUil:heart class="footer__icon" />
		</span>
	</footer>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Footer',
});
</script>

<style lang="scss">
.footer {
  align-items: center;
	display: flex;
  flex-direction: column;
	padding: $space-m 0;
}

.footer__span {
	display: flex;
}

.footer__icon {
	margin-left: $space-xs;

	&:hover {
		transition: 1s;
		color: rgb(187, 22, 22);
	}
}
</style>