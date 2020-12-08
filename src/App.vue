<template>
 <div class="container-fluid">
   <nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">Participants</span>
  </nav>
  <div class="app-content">
    <participants-list v-bind:participants="participants" v-on:remove-participant="onRemove($event)"></participants-list>
    <participant-add-form v-on:addParticipant="addParticipant($event)"></participant-add-form>
  </div>
 </div>
</template>

<script>
  import ParticipantsList from './components/ParticipantsList.vue';
  import ParticipantAddForm from './components/ParticipantAddForm.vue';

  export default {
    components: {
      ParticipantsList,
      ParticipantAddForm
    },
    data: function () {
      return {
        participants: [],
      }
    },
	mounted() {
	  this.$http.get('participants').then(response => {
		this.participants = response.body;
	  });
	},
    methods: {
      addParticipant: function(newParticipant){
        this.participants.push(newParticipant);
      },
      onRemove: function (participantToRemove){
        this.participants = this.participants.filter((participant) => {
          return participant.id !== participantToRemove.id;
        });
      }
    }
  };
</script>

<style>
.container-fluid {
  margin: 0;
  padding: 0;
}

.app-content {
  margin: 30px;
}
</style>