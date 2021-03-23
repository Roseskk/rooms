<template>
  <div id="app">
    <Cards
        v-bind:audiences="audiences"
        v-bind:room="mainRoom"
        @newRoom="newRoom"
        @deleteMe="deleteMe"
        @setNew="setNew"
    />
      <Add v-if="active"
           v-bind:act="active"
      @addMerge="newMerge"
      />
  </div>
</template>

<script>
import Cards from "@/components/Cards";
import Add from "@/components/Add";

export default {
  name: 'App',
  data() {
    return{
      isOn:true,
      active:false,
      audiences:[
        {id:'401',tittle:'401', switch:false},
        {id:'402',tittle: '402', switch: false}
      ],
      Rooms:[
        {id:'1',tittle:'CPU',Video:'Nvidia1',RAM:'8gb',num:'401'},
        {id:'2',tittle:'CPU',Video:'Nvidia2',RAM:'8gb',num:'401'},
        {id:'3',tittle:'CPU',Video:'Nvidia3',RAM:'8gb',num:'402'},
        {id:'4',tittle:'CPU',Video:'Nvidia4',RAM:'8gb',num:'401'},
        {id:'5',tittle:'CPU',Video:'Nvidia5',RAM:'8gb',num:'402'},
      ],
      main:[],
      mainRoom:[],
    }
  },
  components: {
    Cards,
    Add,
  },
  methods: {
    newRoom(id){
      if(this.isOn){
        console.log(id)
        console.log(this.audiences)
        this.Rooms.forEach(item1=> {
          if (id === item1.num) {
            console.log(this.Rooms)
            this.mainRoom.push(item1)
          }
        })
        this.isOn = false;
      }else if(!this.isOn){
        this.Rooms.forEach(item1=> {
          if (id === item1.num) {
            //this.Rooms.push(item1)
            console.log()
            this.mainRoom = [];
            // this.main = [];
          }
        })
        this.isOn = true;
      }
      console.log(this.mainRoom)
      console.log(id)
    },
    deleteMe(id) {
      this.mainRoom = this.mainRoom.filter(t=> t.id !==id)
    },
    setNew() {
      if (!this.active){
        this.active =  true;
      } else if (this.active) {
        this.active = false;
      }
    },
    newMerge(some) {
      this.Rooms.push(some)

    }
  }
}
</script>

<style>

#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
</style>
