<script>
    let { data } = $props();

    const member = data.member;
    const avatar = member.avatar;

    import { Avatar } from '$lib';

</script>


<Avatar {avatar} />

<!-- <img class="pc-avatar" src={member.avatar} alt="member avatar" /> -->
<h1 class="pc-title">{member.name}</h1>
<h3 class="pc-nickname">{member.nickname}</h3>
<p style="display: none" class="pc-bio">{member.bio}</p>


<div class="button-section">
    <button class="skill-button">CSS</button>
    <button class="skill-button">JavaScript</button>
    <button class="skill-button">NodeJS</button>
    <button class="skill-button">Svelte</button>
</div>

<section class="interests-container">
    <h3>Interests</h3>

    <div class="interest-buttons">
        <button class="interest-button-1">Coding</button>
        <button class="interest-button-2">Self-help books</button>
        <button class="interest-button-3">Going for long runs</button>
        <button class="interest-button-4">Business</button>
        <button class="interest-button-5">Building UI Interfaces</button>
        <button class="interest-button-6">Playing sports</button>
        <button class="interest-button-7"
            >Listening to all kinds of music</button
        >
        <button class="interest-button-8">CSS</button>
    </div>

    <div class="links-container">
        <h3>Find me on</h3>

        <div class="links-buttons">
            <a class="pc-website" href={member.website} target="_blank"
                >Github</a
            >
            <a
                class="pc-website"
                href="https://www.linkedin.com/in/renzowille/"
                target="_blank">LinkedIn</a
            >
        </div>
    </div>
</section>

<style>
    :global(body) {
        background-color: #444444;
        font-family: "Inter", sans-serif;
        margin: 0;
    }

    .pc-title {
        font-size: 1.5rem;
        margin-bottom: -0.8rem;
        color: white;
        text-align: center;
    }

    .pc-nickname {
        font-size: 1.2rem;
        color: #c7c7c7;
        margin-bottom: 1rem;
        font-weight: 350;
        text-align: center;
    }

    .pc-bio {
        font-size: 1rem;
        color: white;
        margin-bottom: 1rem;
        text-align: left;
    }

    .pc-website {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    }

    .button-section {
        text-align: center;

        .skill-button {
            background-color: #aaaaaa;
            color: white;
            border: none;
            border-radius: 10px;
            padding: 0.5rem 1rem;
            margin: 0.25rem;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: #969696;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            }
        }
    }

    .interests-container {
        background-color: white;
        width: 100vw;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        height: 60vh;

        h3 {
            padding-left: 1.5rem;
            padding-top: 2.5rem;
            color: #444444;
            font-weight: normal;
        }

        .interest-buttons {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            padding: 0 1rem;
            gap: 0.5rem;

            .interest-button-1,
            .interest-button-2,
            .interest-button-3,
            .interest-button-4,
            .interest-button-5,
            .interest-button-6,
            .interest-button-7,
            .interest-button-8 {
                font-size: 1rem;
                background-color: #aaaaaa;
                color: white;
                border: none;
                border-radius: 20px;
                cursor: pointer;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease-in-out;
                padding: 0.5rem 1rem;
                width: max-content;

                &:hover {
                    background-color: #969696;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                }
            }

            .interest-button-1,
            .interest-button-4,
            .interest-button-5,
            .interest-button-6 {
                flex-grow: 1;
            }

            .interest-button-2,
            .interest-button-7 {
                flex-grow: 2;
            }
        }

        .links-buttons {
            display: flex;
            padding: 0 1rem;
            gap: .5rem;
        }

        .pc-website {
            font-size: 1rem;
                background-color: #aaaaaa;
                color: white;
                border: none;
                border-radius: 20px;
                cursor: pointer;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease-in-out;
                padding: 0.5rem 1rem;
                width: max-content;

                &:hover {
                    background-color: #969696;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                }
        }
    }

    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
    /* transition: all 0.3s ease-in-out; */
    /* 
        &:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        } */
</style>
