<template>
<table>
  <thead>
    <tr>
      <th>id</th>
      <th>CPU</th>
      <th>Video</th>
      <th>RAM</th>
      <th>Кнопка</th>
      <th>Добавить</th>
    </tr>
  </thead>
  <tbody v-for="item in room" v-bind:key="item.id">
    <tr>
      <td>{{item.id}}</td>
      <td>{{item.tittle}}</td>
      <td>{{item.Video}}</td>
      <td>{{item.RAM}}</td>
      <td><button v-on:click="$emit('setDelete',item.id)">Удалить</button></td>
      <td><button v-on:click="$emit('addNew')">Добавить</button></td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  props:['room'],
  name: "Table",
  data() {
    return{

    }
  },
}
</script>

<style>
.none {
  display: none;
}
th {
  border: 2px solid black;
}
td {
  border: 1px solid black;
}
table {

  width: 100%;
  border: 1px solid black;
}
</style>