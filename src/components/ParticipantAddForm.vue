<template>
  <div class="add-participant-form">
    <h1>Add Participant</h1>
    <form>
      <div class="form-group">
        <label for="participant-name">Name</label>
        <input class="form-control" id="participant-name" placeholder="Enter name" v-model="newParticipantName">
      </div>
      <div class="form-group">
        <label for="participant-last-name">Last name</label>
        <input class="form-control" id="participant-last-name"  placeholder="Enter last name" v-model="newParticipantLastName">
      </div>
      <button type="submit" class="btn btn-dark" v-on:click.prevent="addParticipant()" >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
    data: function (){
        return {
            newParticipantName: null,
            newParticipantLastName: null,
        }
    }, 
    methods: {
      addParticipant: function(){
        var newParticipant = {firstname: this.newParticipantName, lastname: this.newParticipantLastName };
        this.$emit('addParticipant', newParticipant);
        this.newParticipantName = null;
        this.newParticipantLastName = null;
      },
    }
}
</script>

<style>
.add-participant-form form {
  margin: 2rem
}
</style>