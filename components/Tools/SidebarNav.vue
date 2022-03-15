<template>
  <div class="sidenav-container">
    ????
    <div v-if="store.active" class="backdrop" @click="store.toggle">adssdaasd</div>
    <transition v-else name="slide-side">
      <div class="sidenav">
        <span @click="store.toggle">FECHAR</span>
        <Sidebar />
      </div>
    </transition>
  </div>
</template>

<script>
import { useStore } from '@/store/sidebar'
import { defineComponent } from '@vue/composition-api'
import Sidebar from '~~/components/Tools/Sidebar';

export default defineComponent({
  name: 'SidebarNav',
  components: {
    Sidebar
  },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
});
</script>


<style lang="scss">
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: #d6d6d6;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.sidenav span {
  position: absolute;
  right: 20px;
  top: 20px;
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}

.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>