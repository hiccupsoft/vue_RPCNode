<template>
  <div
    :class="[ selected === id ? 'active item-container': 'item-container']"
    @click="clickedNode(id)"
  >
    <div>
      <b>{{ name }}</b>
    </div>
    <div class="icon">
      <img v-if="icon" v-bind:src="icon" width=30 />
      <span style="margin-left: 10px">{{ type }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    id: {
      attributes: Number,
      required: true
    },
    name: {
      attributes: String,
      required: true
    },
    type: {
      attributes: String,
      required: true
    },
    icon: {
      attributes: String
    }
  },
  methods: {
    // ...mapActions(['clickedNode']),
    clickedNode: function (id) {
      this.$store.dispatch('clickedNode', id)
    }
  },
  computed: {
    ...mapGetters({ selected: 'getSelectedItem' })
  }
}
</script>

<style>
.item-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(58, 59, 82);
  border-radius: 20px;
  color: white;
  padding: 40px;
  margin: 10px;
}
.active {
  position: relative;
  transform-style: preserve-3d;
}
.active::before {
  content:"";
  position: absolute;
  top: -1px;
  left: -1px;
  background: linear-gradient(90deg, orange, #5e54d0);
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border-radius: 22px;
  transform: translateZ(-1px);
}
.icon{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

