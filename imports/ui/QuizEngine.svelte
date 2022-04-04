<script>
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

    let use = quizArr[2].quiz;
    let qindex = 0;

    var interval, threshold;
    let icCounter = 1;
    let score = 0;
    var secleft = threshold;

    function coreCounter(id) {
        secleft -= 1000;
        document.querySelector(id).innerHTML = Math.abs(secleft / 1000);
        if (secleft == 0) {
            clearInterval(interval);
            if (id == "#quiztimeleft") {
                showAnswer();
                setTimeout(function () {
                    icCounter = 1;
                    if (qindex < use.length - 1) {
                        qindex += 1;
                    } else {
                        icCounter = 2;
                        qindex = 0;
                    }
                }, 2000);
            }
            if (id == "#prequizcounter") {
                icCounter = 0;
            }
        }
    }

    function startCounter(id, th) {
        clearInterval(interval);
        threshold = th * 1000;
        secleft = threshold;
        interval = setInterval(function () {
            coreCounter(id);
        }, 1000);
    }

    let isAnswer = false,
        timesup = false;
    let choosen = "";
    function handleAnswer(c) {
        cid = c.slice(0, -1);
        if (isAnswer == false && timesup == false) {
            choosen = c;
            isAnswer = true;
            document.getElementById(cid).style.backgroundColor = "#6f73dd80";
        }
    }

    function showAnswer() {
        isAnswer = false;
        let ca = "";
        let cid, sid;
        cid = choosen.slice(0, -1);
        for (const [key, value] of Object.entries(use[qindex])) {
            if (value == true) {
                ca = key;
                sid = ca.slice(0, -1);
            }
        }
        if (choosen == "") {
            document.getElementById(sid).style.backgroundColor = "#6AD6A4";
            return;
        }
        if (cid == sid) {
            document.getElementById(cid).style.backgroundColor = "#6AD6A4";
            score += 1;
            return;
        }
        if (cid != sid) {
            document.getElementById(cid).style.backgroundColor = "#FA8072";
            document.getElementById(sid).style.backgroundColor = "#6AD6A4";
            return;
        }
    }
</script>

{#if icCounter == 1}
    <div class="quiz" style="height: 100vh">
        <div class="contain" style="height: 90vh">
            {#if icCounter == true}
                <p style="display: none;">
                    {(z = startCounter("#prequizcounter", 3))}
                </p>
                <h2 id="prequizcounter">3</h2>
            {/if}
        </div>
    </div>
{:else if icCounter == 2}
    <div class="quiz">
        <div class="contain">
            <p>Your score is {score}</p>
            {#each use as n}
                <div class="pcard">
                    <h4 style="margin-bottom: 1em;">{n.q}</h4>
                    {#if n.c1t == true}
                        <h4 style="color: #6ad6a4;">{n.c1}</h4>
                    {:else}
                        <h4>{n.c1}</h4>
                    {/if}
                    {#if n.c2t == true}
                        <h4 style="color: #6ad6a4;">{n.c2}</h4>
                    {:else}
                        <h4>{n.c2}</h4>
                    {/if}
                    {#if n.c3 != ""}
                        {#if n.c3t == true}
                            <h4 style="color: #6ad6a4;">{n.c3}</h4>
                        {:else}
                            <h4>{n.c3}</h4>
                        {/if}
                    {/if}
                    {#if n.c4 != ""}
                        {#if n.c4t == true}
                            <h4 style="color: #6ad6a4;">{n.c4}</h4>
                        {:else}
                            <h4>{n.c4}</h4>
                        {/if}
                    {/if}
                </div>
            {/each}
        </div>
    </div>
{:else}
    <div id="quiz" class="quiz">
        <div class="contain" style="height: 100vh;">
            <p style="display: none;">
                {(z = startCounter("#quiztimeleft", use[qindex].timeout))}
            </p>
            <p style="margin-bottom: 1.2em;" id="quiztimeleft">30</p>
            <div class="qbase">
                <h1>{use[qindex].q}</h1>
            </div>
            {#if use[qindex].img != null}
                <img alt="img" src={use[qindex].img} />
            {/if}
            <div class="xbase">
                <div
                    id="c1"
                    class="cbase"
                    on:click={() => {
                        handleAnswer("c1t");
                    }}
                >
                    <p>{use[qindex].c1}</p>
                </div>
                <div
                    id="c2"
                    class="cbase"
                    on:click={() => {
                        handleAnswer("c2t");
                    }}
                >
                    <p>{use[qindex].c2}</p>
                </div>
                {#if use[qindex].c3 != ""}
                    <div
                        id="c3"
                        class="cbase"
                        on:click={() => {
                            handleAnswer("c3t");
                        }}
                    >
                        <p>{use[qindex].c3}</p>
                    </div>
                {/if}
                {#if use[qindex].c4 != ""}
                    <div
                        id="c4"
                        class="cbase"
                        on:click={() => {
                            handleAnswer("c4t");
                        }}
                    >
                        <p>{use[qindex].c4}</p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
    @font-face {
        font-family: "Gotham";
        src: url(/fonts/gotham-bold.woff2) format("woff2");
    }

    @font-face {
        font-family: "Supermarket";
        src: url(/fonts/supermarket.ttf) format("truetype");
    }

    img {
        border-radius: 0.5em;
        max-height: 300px;
    }

    h2 {
        font-family: "Gotham";
        font-size: 15em;
        color: #ffffff;
    }

    h1,
    h4 {
        font-family: "Supermarket";
        font-size: 3.7em;
        color: #ffffff;
    }

    h4 {
        font-size: 1.7em;
    }

    p {
        font-family: "Supermarket";
        font-size: 2em;
        color: #ffffff;
        margin: 0;
    }

    .counter {
        background-color: #7f83ff;
        align-items: center;
        height: 100vh;
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

    .cbase:hover {
        background-color: #6f73ddb7;
        cursor: pointer;
    }

    .pcard {
        width: 30%;
        margin-top: 0.7em;
        border: none;
        border-radius: 0.4rem;
        background-color: #6f73ddb7;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0.5em 1.5em 1em 1.5em;
    }
</style>
