<template>
  <div
    :class="[ selected === id ? 'active item-container': 'item-container']"
    @click="clickedNode(id)"
  >
    <div>
      <b>{{ name }}</b>
    </div>
    <div>
      <img v-if="icon" v-bind:src="icon" />
      <span>{{ type }}</span>
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
  opacity: 0.9;
  background-color: rgb(102, 69, 138);
  border-radius: 20px;
  color: white;
  padding: 40px;
  margin: 10px;
}
.active {
    border: 2px solid tomato;
}
</style>

