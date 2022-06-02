<template>
    <component :is="currentMenu" :right="side === 'right' ? true: false">
    <a href="#A">
        <i class="fa fa-fw fa-star-o"></i>
        <span>Favourites</span>
    </a>
    <a href="#">
        <i class="fa fa-fw fa-bell-o"></i>
        <span>Alerts</span>
    </a>
    <a href="#">
        <i class="fa fa-fw fa-envelope-o"></i>
        <span>Messages</span>
    </a>
    <a href="#">
        <i class="fa fa-fw fa-comment-o"></i>
        <span>Comments</span>
    </a>
    <a href="#">
        <i class="fa fa-fw fa-bar-chart-o"></i>
        <span>Analytics</span>
    </a>
    <a href="#">
        <i class="fa fa-fw fa-newspaper-o"></i>
        <span>Reading</span>
    </a>
  </component>
</template>

<script>
  import Menu from './Menu/Menu.vue';
  import Slide from './Menu/slide.vue';
  
  export default {
    data() {
      return {
        menus: {
          Slide: { buttonText: 'Slide' },
        },
        side: 'left',
        currentMenu: 'Slide'
      };
    },
    components: {
      Slide,
      Menu
    },
    methods: {
      changeMenu(menu) {
        this.currentMenu = menu.replace(/ +/g, '').toLowerCase();
        return this.currentMenu;
      },
      changeSide(side) {
        this.side = side;
      }
    }
  };
</script>