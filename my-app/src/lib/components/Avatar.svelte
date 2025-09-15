<script>
    const { avatar } = $props();
</script>

<img class="pc-avatar" src={avatar} alt="member avatar" />

<style>
    .pc-avatar {
       width: 150px;
       height: 150px;
       border-radius: 50%;
       object-fit: cover;
       display: block;
       margin: 0 auto;
       margin-top: 2.5rem;
   }
</style>