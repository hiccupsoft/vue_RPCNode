<template>
  <div class="container d-flex">
    <div class="title"><b>Select a Node</b></div>
    <div style="flex: 10"> 
      <ItemNode v-for="(item, key) in childrenData" 
                :key="key" 
                :name="item.name" 
                :type="item.type" 
                :icon="item.icon" 
                :id="key"> 
      </ItemNode>
    </div>
    <div style="flex: 1">Changing node can improve stability and speed when the network is saturate</div>
    <button class="button" style="flex: 1">Confirm</button>
  </div>
</template>

<script>
  import ItemNode from './ItemNode'

  export default {
    components: {
      ItemNode
    },
    data: function () {
      return {
        childrenData: [
          {name: 'RPC Node', type: 'Smartlink'},
          {name: 'RPC Node', type: 'Cryptonomic'},
          {name: 'RPC Node', type: 'Giganode'},
          {name: 'Add New Node', type: 'https://...'}
        ]
      }
    }
  }
</script>

<style>
  .container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 400px;
    height: 700px;
    background-color: rgb(57, 41, 75);
    border-radius: 20px;
    color: white;
    padding: 20px;
  }
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: 1;
    font-size: 24px;
    flex: 1
  }
  .button {
    border-radius: 20px;
    background-color: rgb(75, 41, 172);
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
  }
</style>

