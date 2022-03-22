<template>
  <nav :class="headerClass">
		<input type="checkbox" id="check">

		<label for="check" class="checkbtn">
			<IconUil:bars />
		</label>

		<!-- <label class="logo">Minha Logo</label> -->
    <img
      class="header__logo"
      height="64px"
      width="64px"
      :src="picture"
    />

		<ul>
			<li><a class="active" href="#">Início</a></li>
			<li><a href="#">Sobre</a></li>
			<li><a href="#">Serviços</a></li>
			<li><a href="#">Contato</a></li>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
		</ul>
	</nav>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import picture from '@/assets/images/main.jpeg';

export default defineComponent({
  name: 'Header',
  setup() {

    return {
      picture,
    }
  },
	computed: {
		headerClass() {
			switch(this.$colorMode.value) {
				case 'light':
				case 'system':
					return 'header-light-mode';
				case 'sepia':
					return 'header-sepia-mode';
				case 'dark':
				default:
					return 'header-dark-mode';
			}
		}
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
  height: 80px;
  justify-content: space-between;
  padding: $space-lg;
  width: 100%;

	&.header-dark-mode {
		background: $dark-bg;
	}
}

.header__logo {
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

a.active, a:hover {
	background: #1d075f;
	transition: .5s;
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

	ul{
		position: fixed;
		width: 100%;
		height: 100vh;
		background: #1d075f;
		top: 80px;
		left: -100%;
		text-align: center;
		transition: all .5s;
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
		color: #5434af;
	}

	#check:checked ~ ul {
		left: 0;
	}
}
</style>