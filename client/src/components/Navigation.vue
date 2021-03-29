<template>
  <nav class="nav-main">
    <ul class="nav-list">
      <li><button class="nav-btn"
                  :class="{active: isOpen}"
                  v-on:click="setClick"
      >Аудитории</button>
      <li><button class="nav-btn"
                  :class="{active: isOpen}"
                  v-on:click="setClick"
      >Аудитории</button>
      <li><button class="nav-btn"
                  :class="{active: isOpen}"
                  v-on:click="setClick"
      >Аудитории</button>
      <li><button class="nav-btn"
                  :class="{active: isOpen}"
                  v-on:click="setClick"
      >Аудитории</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return{
      isOpen: false,
    }
  },
  name: "Navigation",
  methods:{
    setClick(){
      if(!this.isOpen){
        this.isOpen = true
      } else if(this.isOpen) {
        this.isOpen = false
      }
      console.log(this.isOpen)
      this.$emit('setOpen')
    },
  }
}
</script>

<style scoped>
.active {
  border-bottom: 2px solid white !important;
}
.nav-main {
  border-radius: 10px;
  padding: 15px;
  background: #6883bc;
}
.nav-btn {
  outline: none;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  border: none;
  background: transparent;
  color: white;
  transition: border-bottom 0.5s ease;
  cursor: pointer;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: pointer;
}
.nav-list {
  display: flex ;
  justify-content: space-between;
}

</style>