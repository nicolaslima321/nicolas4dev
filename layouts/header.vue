<template>
  <nav>
		<input type="checkbox" id="check">

		<label for="check" class="checkbtn">
			<IconUil:bars />
		</label>

    <img
      class="header__logo"
      height="64px"
      width="64px"
      :src="picture"
    />

		<ul>
			<li><nuxt-link to="/">Home</nuxt-link></li>
			<li><nuxt-link to="/about">About</nuxt-link></li>
			<li><nuxt-link to="/articles">Articles</nuxt-link></li>
			<li><nuxt-link to="/contact">Contact</nuxt-link></li>

			<li
				@click="$colorMode.preference = 'dark'"
			>
				<a v-if="isMobile">Escurecer</a>
				<IconUil:moon class="header__icon"/>
			</li>

			<li
				@click="$colorMode.preference = 'sepia'"
			>
				<a v-if="isMobile">Leitura</a>
				<IconUil:coffee class="header__icon"/>
			</li>

			<li
				@click="$colorMode.preference = 'light'"
			>
				<a v-if="isMobile">Acender</a>
				<IconUil:lightbulb class="header__icon"/>
			</li>

		</ul>
	</nav>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import picture from '@/assets/images/main.jpeg';
import { isMobile } from '@/utils/device';

export default defineComponent({
  name: 'Header',
  setup() {
		const isMobile = ref(null);

    return {
      picture,
			isMobile,
    };
  },
	mounted() {
		this.isMobile = isMobile();
	},
});
</script>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
	text-decoration: none;
	list-style: none;
	box-sizing: border-box;
}

nav {
  align-items: center;
  background: #5434af;
  display: flex;
	font-weight: 600;
  height: $header-height;
  justify-content: space-between;
  padding: $space-lg;
  width: $header-width;
	box-shadow: rgba(99, 99, 99, 0.7) 0px 2px 8px 0px;
}

.dark-mode nav {
  background: #1b2538;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: $dark-color;
}

.light-mode nav {
  background: $gray-light;
  color: $default-color;
}

.sepia-mode nav {
  background: #EBCB8B;
  color: $sepia-color;
}

.header__logo {
	opacity: 85%;
  border-radius: 50%;
}

nav ul {
	float: right;
	margin-right: 20px;
}

nav ul li {
	display: inline-block;
	line-height: 80px;
	margin: 0 5px;
}

nav ul li a {
	color: white;
	font-size: 17px;
	padding: 7px 13px;
	border-radius: 3px;
	text-transform: uppercase;
}

.dark-mode li a {
	color: $dark-color;
}

.light-mode li a {
	@media (min-width: 858px) {
		color: $gray-lighter;
	}

	color: $default-color;

	&:hover {
		color: $gray-dark !important;
	}
}

.sepia-mode li a {
	color: $sepia-color;
}

a.active, a:hover {
	color: $link-hover-color !important;
	transition: .5s;
}

.light-mode a.active, a:hover {
	color: $default-color !important;
}

.dark-mode a.active, a:hover {
	color: $gray-lighter !important;
}

.sepia-mode a.active, a:hover {
	color: $gray-light !important;
}

.checkbtn {
  color: white;
	cursor: pointer;
  display: none;
	float: right;
	font-size: 30px;
	margin-right: 40px;
  place-self: center;
}

.dark-mode .checkbtn {
	color: $dark-color;
}

.light-mode .checkbtn {
	color: $gray-lighter;
}

.sepia-mode .checkbtn {
	color: $sepia-color;
}

#check {
	display: none;
}

@media (max-width: 952px){
	nav ul li a{
		font-size: 16px;
	}
}

@media (max-width: 858px){
	.checkbtn {
		display: block;
	}

	ul {
		position: fixed;
		width: 100%;
		height: 100vh;
		background: #1d075f;
		top: 80px;
		left: -100%;
		text-align: center;
		transition: all .5s;
		box-shadow: rgba(99, 99, 99, 0.9) 0px 2px 8px 0px;
	}

	.dark-mode ul {
		background: #3B4252;
		color: $dark-color;
		box-shadow: rgba(99, 99, 99, 0.01) 0px 2px 8px 0px;
	}

	.light-mode ul {
		background: $gray-lighter;
		color: $default-color;
	}

	.sepia-mode ul {
		background: $sepia-bg;
		color: $sepia-color;
	}

	nav ul li{
		display: block;
		margin: 50px 0;
		line-height: 30px;
	}

	nav ul li a {
		font-size: 20px;
	}

	a:hover, a.active {
		background: none;
		color: $link-hover-color;
	}

	#check:checked ~ ul {
		left: 0;
	}
}

.header__icon {
	margin: 0;

	@media (min-width: 858px) {
		margin: 0 $space-s;
	}

	&:hover {
		cursor: pointer;
		color: $link-hover-color !important;
		transition: .5s;
	}
}
</style>