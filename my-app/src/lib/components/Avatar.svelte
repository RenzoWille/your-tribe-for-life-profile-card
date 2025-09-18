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
        margin: 0 auto; /* mobiel: gecentreerd */
        margin-top: 5rem;
    }

    @media (min-width: 441px) {
        .pc-avatar {
            margin: 0; /* desktop: niet centreren */
            width: 100px;
            height: 100px;
        }
    }
</style>
