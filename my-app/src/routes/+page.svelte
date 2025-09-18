<script>
    let { data } = $props();

    const member = data.member;
    const avatar = member.avatar;

    import { Avatar } from "$lib";
</script>

<div class="pc-container">
    <div class="pc-header">
        <Avatar {avatar} />

        <div class="pc-header-text">
            <h1 class="pc-title">{member.name}</h1>
            <h3 class="pc-nickname">{member.nickname}</h3>
        </div>
    </div>
    <p class="pc-bio">{member.bio}</p>

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
                <a class="pc-website" href="https://github.com/RenzoWille" target="_blank"
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
</div>

<style>
    :global(body) {
        background-color: #444444;
        font-family: "Inter", sans-serif;
        margin: 0;

        @media (min-width: 441px) {
            background-color: #ffffff;
            margin: auto;
        }
    }

    .pc-container {
        @media (min-width: 441px) {
            display: block;
            margin: 2rem auto;
            padding: 2rem;
            background-color: #444444;
            border-radius: 50px;
            width: 460px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        }
    }

    .pc-header {
        @media (min-width: 441px) {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }
    }

    .pc-title {
        font-size: 1.5rem;
        margin-bottom: -0.8rem;
        color: white;
        text-align: center;

        @media (min-width: 441px) {
            text-align: left;
            margin: 0;
        }
    }

    .pc-nickname {
        font-size: 1.2rem;
        color: #c7c7c7;
        margin-top: .5rem;
        font-weight: 350;
        text-align: center;
    }

    .pc-bio {
        display: none;

        @media (min-width: 441px) {
            display: block;
            text-align: left;
            font-size: 1.2rem;
            color: white;
            margin-bottom: 1rem;
        }
    }

    .button-section {
        text-align: center;

        @media  (min-width: 441px) {
            text-align: left;
            margin: 0;
        }

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

            @media (min-width: 441px) {
                margin: 0.25rem 0.5rem 0.25rem 0;
                font-size: 1rem;
            }

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

        @media (min-width: 441px) {
            background: none;
            width: 441px;
            border-radius: 40px;
            height: 450px;
            box-shadow: none;
        }

        h3 {
            padding-left: 1.5rem;
            padding-top: 2.5rem;
            color: #444444;
            font-weight: normal;

            @media (min-width: 441px) {
                color: white;
                padding: 2.5rem 0 1rem 0;
                margin: 0 0 0 .25rem;
                font-size: 1.2rem;
            }
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

                @media (min-width: 441px) {
                    margin: 0.25rem 0.5rem 0.25rem 0;
                    font-size: 1.2rem;
                }

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
            gap: 0.5rem;
        }

        .pc-website {
            font-size: 1rem;
            background-color: #aaaaaa;
            text-decoration: none;
            color: white;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease-in-out;
            padding: 0.5rem 1rem;
            width: max-content;

            @media (min-width: 441px) {
                    margin: 0.25rem 0.5rem 0.25rem 0;
                    font-size: 1.2rem;
                }

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
