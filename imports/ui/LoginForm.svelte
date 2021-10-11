<script>
    import { Meteor } from "meteor/meteor";
    import { Col, Row } from "sveltestrap";

    function swithSignup() {
        if (document.getElementById("loginDiv").style.display === "block") {
            document.getElementById("loginDiv").style.display = "none";
            document.getElementById("signupDiv").style.display = "block";
        }
    }

    let code = "";
    let username = "";
    let password = "";

    let email = "";
    let fullname = "";
    let signuppassword = "";
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
        <div
            id="loginDiv"
            style="padding-top: 20%; margin-right:10%; display:block;"
        >
            <h1
                style="font-family: Rockwell; color: #736AEF; font-size:2.95em; text-align: center;"
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
                style="font-family: Rockwell; color: #736AEF; font-size:2.45em; text-align: center;"
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
                <button
                    type="button"
                    style="margin: 40px;"
                    on:click={swithSignup}>Sign Up</button
                >
            </form>
        </div>
        <div
            id="signupDiv"
            style="padding-top: 20%; margin-right:10%; display: none;"
        >
            <h1
                style="font-family: Rockwell; color: #736AEF; font-size:2.25em; text-align: center;"
            >
                Join the styles,<br />goodbye to boring quiz
            </h1>
            <form>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    bind:value={email}
                    style="margin-top: 25px; margin-bottom: 35px"
                />
                <input
                    type="text"
                    placeholder="Full name"
                    name="fullname"
                    bind:value={fullname}
                    style="margin-bottom: 35px"
                />
                <input
                    type="text"
                    placeholder="Password"
                    name="signuppassword"
                    bind:value={signuppassword}
                    style="margin-bottom: 35px"
                />
                <input type="checkbox" id="agree" name="agree" value="agree" />
                <label for="agree" style="font-family: Arial; text-align:left;"
                    >By signing up, you agree to our Terms, Data Policy <br
                    />and Cookies Policy.</label
                >
            </form>
            <form on:submit|preventDefault={handleSubmit}>
                <button
                    type="button"
                    style="margin: 40px;"
                    on:click={swithSignup}>Sign Up</button
                >
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
