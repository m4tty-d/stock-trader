<template>
  <section class="section">
      <div class="container">
          <h1 class="title">Trade or View your Portfolio</h1>
          <p>You may Save & Load your Data</p>
          <p>Click on 'End Day' to begin a new Day!</p>
          <hr>
          <h3 class="is-size-3">Your Funds: {{ fund | formatMoney }} </h3>
      </div>
  </section>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'fund'
            ])
        }
    }
</script>

