<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>CPU</th>
          <th>Video</th>
          <th>RAM</th>
          <th>Кнопка</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="item in room" v-bind:key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.tittle}}</td>
          <td>{{item.Video}}</td>
          <td>{{item.RAM}}</td>
          <td><button class="del-btn" v-on:click="$emit('setDelete',item.id)">Удалить</button></td>
        </tr>
      </tbody>
    </table>
  </div>
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
.wrapper {
  max-width: 700px;
  margin: 0 auto;
}
.del-btn {
  padding: 10px;
  border-radius: 12px;
  border: none;
}
.none {
  display: none;
}
th:first-child {
  border-top-left-radius: 10px;
}
th:last-child {
  border-top-right-radius: 10px;
}
tr:last-child td:first-child {
  border-radius: 0 0 0 10px;
}
tr:last-child td:last-child {
  border-radius: 0 0 10px 0;
}
th {
  color: white;
  padding: 5px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
}
th {
  background: #8a307f;
  text-shadow: 0 1px 1px #2d2020;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
  text-align: center;
  padding: 5px;
}
td {
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
  padding: 10px 20px;
  background: #6883bc;
}
table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
  width: 100%;
  /*border: 1px solid black;*/
  /*border-collapse: collapse;*/
}
</style>