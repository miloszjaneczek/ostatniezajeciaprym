<template>
    <div class="app-list">
      <h1>List</h1>
      <div v-if="participants.length > 0" class="app-list-content">
        <div class="app-list-item" v-for="participant in participants" v-bind:key="participant.id">
          <span class="app-list-item-data">{{ participant.firstname }} {{ participant.lastname}}</span>
          <button v-on:click="onRemove(participant)" class="btn btn-danger" type="button">Remove</button>
        </div>
      </div>
      <div class="alert alert-warning" role="alert" v-else>
        Noone here :c 
      </div>
    </div>
</template>

<script>
export default {
    data: function (){
        return {}
    },
    props: ['participants'],
    methods: {
        onRemove: function (participant) {
            this.$emit('remove-participant', participant);
        }
    }
}
</script>

<style>
.app-list-content {
    margin: 2rem 0;
}

.app-list-item {
    margin: 0.5rem;
    padding: 0.5rem;
}

</style>