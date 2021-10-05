<script>
    import { Meteor } from "meteor/meteor";
    import { Col, Container, Row } from "sveltestrap";
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
        <div style="padding-top: 20%; margin-right:25%">
            <h1
                style="font-family: Rockwell; color: #736AEF; font-size:2.5em; text-align: center;"
            >
                Just taking a quiz?
            </h1>
            <form>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Paste your quiz code here"
                    name="code"
                    style="width: 42%; margin: 4% auto 10% auto"
                    bind:value={code}
                />
            </form>
            <h1
                style="font-family: Rockwell; color: #736AEF; font-size:2.5em; text-align: center;"
            >
                Want to create a quiz?
            </h1>
            <form class="login-form" on:submit|preventDefault={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>

                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                        bind:value={username}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        bind:value={password}
                    />
                </div>
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    </Col>
</Row>

<style>
    @font-face {
        font-family: "Gotham";
        src: local("Gotham Bold"), local("Gotham-Bold");
    }

    br {
        margin: 7px 0;
    }
</style>
