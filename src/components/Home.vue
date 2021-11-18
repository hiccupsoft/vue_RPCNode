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
          {name: 'RPC Node', type: 'Smartlink', icon: 'https://user-images.githubusercontent.com/40233733/142332001-b991a843-b17e-4bc6-a288-84d1916d4db5.png'},
          {name: 'RPC Node', type: 'Cryptonomic', icon: 'https://user-images.githubusercontent.com/40233733/142332005-1b2e9668-3096-433f-a27b-d9a82215c247.png'},
          {name: 'RPC Node', type: 'Giganode', icon: 'https://user-images.githubusercontent.com/40233733/142332007-3048d688-69b4-4842-a608-05a5134715f4.png'},
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
    background-color: rgb(49, 50, 70);
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
    background-color: rgb(94, 84, 208);
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
  }
</style>

