<template>
<div>
  <div class="fl" >
    <div>
      <ul>
        <li
            v-for="item in audiences"
            v-bind:key="item.id"
            class="item"
            v-bind:class="{open: item.switch}"
        >
          <h2>{{item.tittle}}</h2>
          <button
              v-on:click="$emit('newRoom',item.id),
               item.switch = !item.switch"
          >
            Посмотреть</button>
        </li>
      </ul>
    </div>
  </div>
    <Table  v-on:setDelete="deleteMe"
            v-bind:class="{active: isActive}"
            v-bind:room="room"
    />
</div>
</template>

<script>

import Table from "@/components/Table";
export default {
  props:['audiences','room'],
name: "Cards",
  data() {
    return{
      none:'none',
      isActive:false,
      isSwitch:false,
    }
  },
  components:{
    Table
  },
  methods:{
    deleteMe(id){
      this.$emit('deleteMe',id)
    },
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.open {
  position: absolute;
  background: lightslategray;
}
.item {
  min-width: 150px;
  transition: left  0.5s ease-in-out , background 0.5s ease-in-out;
}
.item:hover {

}

.item:hover {

}

.none {
  display: none;
}
.active {
  display: table;
}
.fl {
  display: flex;
}
ul{
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: row;
}
li {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  margin-left: 15px;
  padding: 30px;
  list-style: none;
  background: #8a307f;
  border-radius: 12px;
}
h2 {
  text-align: center;
  font-size: 18px;
  color: wheat;
}
button {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  color: white;
  text-shadow: 0 1px 1px #2d2020;
  padding: 10px;
  border: none;
  background: #79a7d3;
  border-radius: 7px;
}

</style>