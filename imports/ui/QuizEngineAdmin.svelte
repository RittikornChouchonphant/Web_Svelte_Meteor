<script>
    import { Meteor } from "meteor/meteor";

    export let id;
    let quizArr = [
        "Rittikorn",
        "123456",
        {
            quiz: [
                {
                    q: "บุคคลใดต่อไปนี้ ใครที่มีหลักการในการคงคุณค่าของสารอาหารได้ถูกต้อง",
                    timeout: "30",
                    img: null,
                    c1: "กระแตแช่เย็นผลไม้แทนการแช่แข็งเพื่อคงคุณค่าทางวิตามินไว้",
                    c1t: false,
                    c2: "กระรอกซื้อนมพาสเจอไรซ์ที่บรรจุในขวดแก้วใส เนื่องจากเห็นเนื้อนมชัดเจนดี",
                    c2t: false,
                    c3: "กระต่ายนำเนื้อหมูแช่แข็งมาละลายในน้ำเพื่อประหยัดเวลา",
                    c3t: false,
                    c4: "ไม่มีข้อใดถูกต้อง",
                    c4t: true,
                },
                {
                    q: "ข้อใดกล่าวผิด",
                    timeout: "15",
                    img: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4V4p7x8JvliFZynX755QON674rKLNllwJ7tF3Fn2tkVOJU1T7Ex.jpg",
                    c1: "การอบแห้งเป็นการแปรรูปอาหารที่ทำให้คุณค่าทางอาหารสูงขึ้น เนื่องมาจากความเข้มข้นของปริมาณสารอาหารที่มากขึ้น",
                    c1t: false,
                    c2: "อาหารประเภทให้พลังงานสูง เช่นเนื้อสัตว์ ควรรับประทานในมื้อเที่ยงจึงจะเหมาะสมที่สุด",
                    c2t: true,
                    c3: "",
                    c3t: false,
                    c4: "",
                    c4t: false,
                },
                {
                    q: "คำว่าโภชนาการสามารถเกิดขึ้นได้ตั้งแต่เมื่อไร",
                    timeout: "15",
                    img: "https://www.nutritionbureau.nz/wp-content/uploads/2021/09/healthy-food-nutrition.jpg",
                    c1: "เมื่อแม่ครัวกำลังทำอาหารให้เรา",
                    c1t: false,
                    c2: "เมื่ออาหารถูกรับประทานเข้าปาก",
                    c2t: true,
                    c3: "เมื่อแม่ครัวนำอาหารวางบนจาน",
                    c3t: false,
                    c4: "ตั้งแต่เลือกวัตถุดิบมาปรุงอาหาร",
                    c4t: false,
                },
                {
                    q: "ในพลังงาน 400 กิโลแคลอรี่เท่ากัน อาหารชนิดใดมีความหนาแน่นของพลังงานอาหารน้อยที่สุด",
                    timeout: "10",
                    img: null,
                    c1: "ซาลาเปาใส้ครีม",
                    c1t: false,
                    c2: "สลัดผักกาดแก้ว",
                    c2t: true,
                    c3: "ไก่ทอดหนังกรอบ",
                    c3t: false,
                    c4: "เวเฟอร์เคลือบช็อคโกแลต",
                    c4t: false,
                },
                {
                    q: "คนสอนชื่ออะไร",
                    timeout: "5",
                    img: null,
                    c1: "เอ",
                    c1t: false,
                    c2: "โอ",
                    c2t: true,
                    c3: "ไอ",
                    c3t: false,
                    c4: "อี",
                    c4t: false,
                },
            ],
        },
    ];

    let results = {
        c1r: 2,
        c2r: 1,
        c3r: 23,
        c4r: 4,
        c1p: 6.7,
        c2p: 3.3,
        c3p: 76.7,
        c4p: 13.3,
    };

    let use = quizArr[2].quiz;
    let qindex = 0;

    let user = null;
    let uno = 10;
    let isStart = 2;

    // Todo: invalid url checking from existing code in db

    function handleStart() {
        if (uno == 0) {
            alert(
                "It is lonely out there, you need some people to join first!"
            );
        } else {
            isStart = 1;
        }
    }

    $m: {
        user = Meteor.user();
    }
</script>

{#if user}
    {#if isStart == 0}
        <div class="masteradmin">
            <h1 class="info" style="margin-bottom: 0.2em">{id}</h1>
            <button on:click={handleStart}>Start Quiz</button>
        </div>
    {:else if isStart == 1}
        <div id="quiz" class="quiz">
            <div class="contain" style="height: 100vh;">
                <div class="qbase">
                    <h1 style="font-family: Supermarket;">{use[qindex].q}</h1>
                </div>
                {#if use[qindex].img != null}
                    <img alt="img" src={use[qindex].img} />
                {/if}
                <div class="xbase">
                    <div id="c1" class="cbase">
                        <p style="font-family: Supermarket;">
                            {use[qindex].c1}
                        </p>
                    </div>
                    <div id="c2" class="cbase">
                        <p style="font-family: Supermarket;">
                            {use[qindex].c2}
                        </p>
                    </div>
                    {#if use[qindex].c3 != ""}
                        <div id="c3" class="cbase">
                            <p style="font-family: Supermarket;">
                                {use[qindex].c3}
                            </p>
                        </div>
                    {/if}
                    {#if use[qindex].c4 != ""}
                        <div id="c4" class="cbase">
                            <p style="font-family: Supermarket;">
                                {use[qindex].c4}
                            </p>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    {:else}
        <div class="masteradmin" style="background-color: #8299f5;">
            <p style="padding: 0;">{use[qindex].q}</p>
            <div class="masterchart">
                <div class="masterbar">
                    <div class="basebar">
                        {#if use[qindex].c1t == true}
                            <div
                                id="c1p"
                                class="correctbar"
                                style="height: {results.c1p}%;"
                            >
                                <p>{results.c1r}</p>
                            </div>
                        {:else}
                            <div
                                id="c1p"
                                class="bar"
                                style="height: {results.c1p}%;"
                            >
                                <p>{results.c1r}</p>
                            </div>
                        {/if}
                    </div>
                    <div><p>choice 1</p></div>
                </div>
                <div class="masterbar">
                    <div class="basebar">
                        {#if use[qindex].c1t == true}
                            <div
                                id="c2p"
                                class="correctbar"
                                style="height: {results.c2p}%;"
                            >
                                <p>{results.c2r}</p>
                            </div>
                        {:else}
                            <div
                                id="c2p"
                                class="bar"
                                style="height: {results.c2p}%;"
                            >
                                <p>{results.c2r}</p>
                            </div>
                        {/if}
                    </div>
                    <div><p>choice 2</p></div>
                </div>
                {#if use[qindex].c3 != ""}
                    <div class="masterbar">
                        <div class="basebar">
                            {#if use[qindex].c3t == true}
                                <div
                                    id="c3p"
                                    class="correctbar"
                                    style="height: {results.c3p}%;"
                                >
                                    <p>{results.c3r}</p>
                                </div>
                            {:else}
                                <div
                                    id="c3p"
                                    class="bar"
                                    style="height: {results.c3p}%;"
                                >
                                    <p>{results.c3r}</p>
                                </div>
                            {/if}
                        </div>
                        <div><p>choice 3</p></div>
                    </div>
                {/if}
                {#if use[qindex].c4 != ""}
                    <div class="masterbar">
                        <div class="basebar">
                            {#if use[qindex].c4t == true}
                                <div
                                    id="c4p"
                                    class="correctbar"
                                    style="height: {results.c4p}%;"
                                >
                                    <p>{results.c4r}</p>
                                </div>
                            {:else}
                                <div
                                    id="c4p"
                                    class="bar"
                                    style="height: {results.c4p}%;"
                                >
                                    <p>{results.c4r}</p>
                                </div>
                            {/if}
                        </div>
                        <div><p>choice 4</p></div>
                    </div>
                {/if}
            </div>
        </div>
    {/if}
{:else}
    <h1>Sorry, this page is not avilable right now.</h1>
{/if}

<style>
    @font-face {
        font-family: "Supermarket";
        src: url(/fonts/supermarket.ttf) format("truetype");
    }

    .masteradmin {
        background-color: #6ad6a4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .info {
        font-family: "Rockwell";
        font-size: 6vw;
        font-weight: 600;
    }

    h1 {
        margin: 0;
        color: #ffffff;
        font-family: "Gotham";
    }

    p {
        font-family: "Supermarket";
        font-size: 2em;
        color: #ffffff;
        margin: 0;
    }

    img {
        border-radius: 0.5em;
        max-height: 300px;
    }

    button {
        border: none;
        border-radius: 0.4em;
        font-size: 2em;
        background-color: #8299f5;
        color: #ffffff;
        padding: 0.1em 0.5em 0.1em 0.5em;
        font-family: Nunito;
    }

    .quiz {
        background-color: #7f83ff;
        align-items: center;
    }

    .contain {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3em;
        padding-bottom: 6em;
    }

    .qbase {
        background-color: #6f72dd;
        border-radius: 0.8em;
        padding: 0.1em 2.2em 0.3em 2.2em;
        margin-bottom: 2em;
        max-width: 85%;
        text-align: center;
    }

    .xbase {
        width: 87vw;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 0.5rem;
        margin-top: 6em;
    }

    .cbase {
        height: 20em;
        background-color: #6f72dd;
        padding: 0.5em 2.2em 0.7em 2.2em;
        border-radius: 0.4em;
        text-align: center;
        word-wrap: break-word;
    }

    .bar {
        width: 100%;
        height: 80%;
        background-color: #fa8072;
        border-radius: 0.5em;
        display: inline-block;
        align-self: flex-end;
        text-align: center;
        padding-top: 0.2em;
    }

    .correctbar {
        width: 100%;
        height: 80%;
        background-color: #6ad6a4;
        border-radius: 0.4em;
        display: inline-block;
        align-self: flex-end;
        text-align: center;
        padding-top: 0.2em;
    }

    .basebar {
        height: 70%;
        width: 50%;
        display: flex;
    }

    .masterbar {
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .masterchart {
        width: 60%;
        height: 75%;
        display: flex;
        flex-direction: row;
    }
</style>
