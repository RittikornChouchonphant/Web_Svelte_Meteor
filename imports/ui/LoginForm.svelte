<script>
    import { Meteor } from "meteor/meteor";
    import { navigate } from "svelte-routing";
    import { Accounts } from "meteor/accounts-base";
    import "bootstrap/dist/css/bootstrap.min.css";
    import { Quizlive } from '../api/Quizlive';

    function swithSignup() {
        if (document.getElementById("loginDiv").style.display === "block") {
            document.getElementById("loginDiv").style.display = "none";
            document.getElementById("signupDiv").style.display = "block";
        }
    }

    let qcode = "";
    let username = "";
    let password = "";

    let email = "";
    let fullname = "";
    let signuppassword = "";

    let user = null;

    $m: {
        user = Meteor.user();
    }
    
    var  quizlive = Quizlive.find({});

    function handleSubmit() {
        if (Meteor.users.findOne({ username: username })) {
            Meteor.loginWithPassword(username, password, function (error) {
                if (error != undefined) {
                    alert(error);
                } else {
                    navigate("/menu", { replace: true });
                }
            });
        } else {
            alert("Sorry, incorrect username or password. Please try again.");
        }
    }

    function handleSignup() {
        var rawemail = document.getElementById("signupemail");
        var rawfullname = document.getElementById("signupfullname");
        var rawpassword = document.getElementById("signuppassword");
        var email = trim(rawemail.value);
        var fullname = trim(rawfullname.value);
        var password = trim(rawpassword.value);

        Accounts.createUser({
            email: email,
            username: fullname,
            password: password,
        });

        navigate("/menu", { replace: true });
    }

    function trim(str) {
        return str.replace(/^\s+|\s+$/g, "");
    }

    function checkEmail(email) {
        var pattern =
            /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        if (pattern.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    function handleCode() {
    quizlive.forEach((q) => {
        if(q.no == qcode){
            navigate("/takequiz/" + qcode);
            return  false;
        }
    });{alert('not have this room');}
    }

</script>

<div class="row" style="width: 100vw;">
    <div class="col">
        <div class="pt-5" style="background-color: #736AEF; height: 100vh;">
            <h1
                style="font-family: Rockwell; color: #ffffff; font-size:3vw; font-weight: 600; text-align: center;"
            >
                Eliminate platitudinous quiz <br /> with your creativity!
            </h1>
            <p
                style="margin-top: 7%; margin-right: 18%; font-family: Gotham; font-size:1.6vw; color: #ffffff; text-align: right;"
            >
                No login required to take quiz <br /> <br />
                Create completed quiz in 2 minutes! <br /> <br />
                Get rid of outdated rule <br /> with WouldYouRather mode <br />
                <br />
                Tons of features to control <br /> sleepy students!
            </p>
        </div>
    </div>
    <div class="col">
        <div
            id="loginDiv"
            style="padding-top: 20%; margin-right:10%; display:block;"
        >
            <h1
                style="font-family: Rockwell; color: #736AEF; font-size:2.3vw; text-align: center;"
            >
                Just taking a quiz?
            </h1>
            <form on:submit={handleCode}>
                <input
                    type="number"
                    placeholder="Paste your quiz code here"
                    id="qcode"
                    bind:value={qcode}
                    class="qcode"
                />
            </form>
            <h1
                style="font-family: Rockwell; color: #736AEF; font-size:2.45em; text-align: center;"
            >
                Want to create a quiz?
            </h1>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    required
                    bind:value={username}
                    style="margin-top: 25px;"
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    bind:value={password}
                    style="margin-top: 40px;"
                />
                <button
                    on:click|preventDefault={handleSubmit}
                    style="margin-right: 0.65vw; margin-top: 50px;"
                    >Log In</button
                >
                <button
                    type="button"
                    style="margin-left: 0.65vw; margin-top: 50px;"
                    on:click={swithSignup}>Sign Up</button
                >
            </form>
        </div>
        <div
            id="signupDiv"
            style="padding-top: 20%; margin-right:10%; display: none;"
        >
            <div style="display: flex; justify-content: center;">
                <h1
                    style="font-family: Rockwell; color: #736AEF; font-size:1.8vw; text-align: left;"
                >
                    Join the styles,<br />goodbye to boring quiz
                </h1>
            </div>
            <form>
                <input
                    type="email"
                    placeholder="Email"
                    id="signupemail"
                    bind:value={email}
                    required
                    style="margin-top: 25px; margin-bottom: 35px"
                />
                <input
                    type="text"
                    placeholder="Username"
                    id="signupfullname"
                    bind:value={fullname}
                    required
                    style="margin-bottom: 35px"
                />
                <input
                    type="text"
                    placeholder="Password"
                    id="signuppassword"
                    bind:value={signuppassword}
                    required
                    style="margin-bottom: 35px"
                />
                <div
                    style="display: flex; align-items: flex-start; width: 19vw; margin-left: auto; margin-right: auto;"
                >
                    <input
                        type="checkbox"
                        id="signupagree"
                        name="agree"
                        value="agree"
                        class="checkbox"
                    />
                    <label
                        for="agree"
                        style="font-family: Arial; text-align:left; font-size: 0.77vw; margin-top: -12px;"
                        >By signing up, you agree to our Terms, Data Policy <br
                        />and Cookies Policy.</label
                    >
                </div>
            </form>
            <form>
                <button
                    type="button"
                    style="margin: 40px;"
                    on:click={handleSignup}>Sign Up</button
                >
            </form>
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: "Gotham";
        src: url(/fonts/gotham-bold.woff2) format("woff2");
    }

    form {
        text-align: center;
    }

    button {
        border: 1px solid #a655e4;
        border-radius: 21px;
        background: none;
        padding: 7px 3vw 10px 3vw;
        color: #a655e4;
        font-size: 0.9vw;
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
        font-size: 0.9vw;
        padding: 6px 0px 9px 14px;
        color: #7c7c7c;
    }

    .checkbox {
        margin: 0px;
        margin-right: 1vw;
        display: inline;
        top: 0%;
        width: auto;
    }

    br {
        margin: 7px 0;
    }

    .qcode {
        margin-top: 25px;
        margin-bottom: 90px;
    }

    .qcode:invalid {
        background-color: #ffddd9;
        color: #fa8072;
    }
</style>
