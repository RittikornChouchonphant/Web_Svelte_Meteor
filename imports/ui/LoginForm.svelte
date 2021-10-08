<script>
    import { Meteor } from "meteor/meteor";
    import { Col, Row } from "sveltestrap";
    let code = "";
    let username = "";
    let password = "";
    const handleSubmit = () => {
        Meteor.loginWithPassword(username, password);
    };
</script>

<Row>
    <Col>
        <div class="pt-5" style="background-color: #736AEF; height: 93vh;">
            <h1
                style="font-family: Rockwell; color: #ffffff; font-size:3.8em; font-weight: 600; text-align: center;"
            >
                Eliminate platitudinous quiz <br /> with your creativity!
            </h1>
            <p
                style="margin-top: 7%; margin-right: 18%; font-family: Gotham; font-size:2em; color: #ffffff; text-align: right;"
            >
                No login required to take quiz <br /> <br />
                Custom Power Point style quiz <br /> <br />
                Get rid of outdated <br /> style with our template <br /> <br />
                Tons of features to control <br /> sleepy students!
            </p>
        </div>
    </Col>
    <Col>
        <div style="padding-top: 20%; margin-right:10%">
            <h1
                style="font-family: Rockwell; color: #736AEF; font-size:2.5em; text-align: center;"
            >
                Just taking a quiz?
            </h1>
            <form>
                <input
                    type="text"
                    placeholder="Paste your quiz code here"
                    name="code"
                    bind:value={code}
                    style="margin-top: 25px; margin-bottom: 90px"
                />
            </form>
            <h1
                style="font-family: Rockwell; color: #736AEF; font-size:2.5em; text-align: center;"
            >
                Want to create a quiz?
            </h1>
            <form on:submit|preventDefault={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                    bind:value={username}
                    style="margin-top: 25px;"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    bind:value={password}
                    style="margin-top: 40px;"
                />
                <button type="submit" style="margin: 40px;">Log In</button>
                <button type="button" style="margin: 40px;">Sign Up</button>
            </form>
        </div>
    </Col>
</Row>

<style>
    @font-face {
        font-family: "Gotham";
        src: local("Gotham Bold"), local("Gotham-Bold");
    }

    form {
        text-align: center;
    }

    button {
        border: 1px solid #a655e4;
        border-radius: 21px;
        background: none;
        padding: 7px 46px 10px 46px;
        color: #a655e4;
        font-size: 1.2rem;
    }

    button:hover {
        color: #ffffff;
        background: #a655e4;
    }

    input {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        width: 43%;
        border: 1px solid rgb(199, 199, 199);
        border-radius: 6px;
        background: none;
        font-size: 1.2rem;
        padding: 6px 0px 9px 14px;
        color: #7c7c7c;
    }

    br {
        margin: 7px 0;
    }
</style>
