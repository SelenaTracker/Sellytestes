const musicas = [
    ["We Don't Talk Anymore (feat. Selena Gomez)", "2.424.410.837", "1.199.257", "1.073.855", "Solo"],
    ["Calm Down (with Selena Gomez)", "1.799.965.367", "563.347", "582.429", "Solo"],
    ["Taki Taki (with Selena Gomez, Ozuna & Cardi B)", "1.778.443.720", "314.755", "319.448", "Solo"],
    ["It Ain’t Me (with Selena Gomez)", "1.663.358.938", "398.015", "351.376", "Solo"],
    ["Wolves", "1.513.329.217", "207.314", "204.467", "Solo"],
    ["Lose You To Love Me", "1.429.536.109", "236.902", "246.746", "Solo"],
    ["Back To You - From 13 Reasons Why", "1.194.756.161", "132.130", "130.528", "Solo"],
    ["Good For You", "903.798.031", "292.708", "287.605", "Solo"],
    ["Hands To Myself", "763.837.075", "94.543", "91.468", "Solo"],
    ["Same Old Love", "761.148.606", "173.383", "169.867", "Solo"],
    ["Love You Like A Love Song", "1.199.088.818", "650.422", "613.574", "Scene"],
    ["Who Says", "608.514.727", "139.157", "138.352", "Scene"]
    // ... (as outras músicas que você tem no GitHub continuam aqui)
];

let sortMode = 'total';
let currentFilter = 'All';

function toNum(val) {
    if (!val) return 0;
    return Number(val.toString().replace(/\./g, '').trim()) || 0;
}

function getTarget(total, daily) {
    let step = daily < 5000 ? 500000 : (daily < 50000 ? 2000000 : 5000000);
    return Math.ceil((total + 1) / step) * step;
}

function getLabel(t) {
    if (t >= 1000000000) return (t / 1000000000).toFixed(2) + "B";
    return (t / 1000000).toFixed(1) + "M";
}

function toggleFilter(cat) {
    currentFilter = currentFilter === cat ? 'All' : cat;
    const btnSolo = document.getElementById("btnSolo");
    const btnScene = document.getElementById("btnScene");
    if(btnSolo) btnSolo.classList.toggle("active", currentFilter === 'Solo');
    if(btnScene) btnScene.classList.toggle("active", currentFilter === 'Scene');
    updateUI();
}

function setSort(m) { sortMode = m; updateUI(); }

function updateUI() {
    const search = document.getElementById("searchInput") ? document.getElementById("searchInput").value.toLowerCase() : "";
    const body = document.getElementById("tableBody");
    if (!body) return;

    let dailyTotal = 0;

    let data = musicas.map(m => {
        const total = toNum(m[1]);
        const daily = toNum(m[2]);
        const target = getTarget(total, daily);
        let days = daily > 0 ? Math.ceil((target - total) / daily) : "---";
        return { name: m[0], total, daily, cat: m[4], target, days };
    });

    if (currentFilter !== 'All') data = data.filter(m => m.cat === currentFilter);
    data = data.filter(m => m.name.toLowerCase().includes(search));

    if (sortMode === 'daily') data.sort((a,b) => b.daily - a.daily);
    else if (sortMode === 'est') data.sort((a,b) => (a.days === "---" ? 1 : b.days === "---" ? -1 : a.days - b.days));
    else data.sort((a,b) => b.total - a.total);

    body.innerHTML = "";
    data.forEach(m => {
        dailyTotal += m.daily;
        body.innerHTML += `<tr>
            <td>${m.name}</td>
            <td style="text-align:right; color:#2ecc71;">${m.daily.toLocaleString()}</td>
            <td style="text-align:right">${m.total.toLocaleString()}</td>
            <td style="text-align:center"><span style="background:#2c3e50; color:#ccff90; padding:4px 8px; border-radius:5px; font-size:0.8rem;">${getLabel(m.target)}</span></td>
            <td style="text-align:right">${m.days === "---" ? "---" : m.days.toLocaleString() + " d"}</td>
        </tr>`;
    });

    // CORREÇÃO DOS CARDS DE RESUMO
    //const dailyElem = document.getElementById("totalDailyStats");
    //if (dailyElem) dailyElem.innerText = dailyTotal.toLocaleString();

    const nextElem = document.getElementById("nextMilestone");
    if (nextElem) {
        const next = data.filter(x => x.days !== "---").sort((a,b) => a.days - b.days).slice(0, 3);
        nextElem.innerHTML = next.map(n => `<div>${n.name}: <b>${n.days}d</b></div>`).join('');
    }
}

// Inicializa
updateUI();

// Funções do Menu
function openNav() { document.getElementById("mySidebar").style.left = "0"; }
function closeNav() { document.getElementById("mySidebar").style.left = "-250px"; }

// Função Calculadora
function calcularMeta() {
    const total = toNum(document.getElementById("calcTotal").value);
    const meta = toNum(document.getElementById("calcMeta").value);
    const media = toNum(document.getElementById("calcMedia").value);
    const res = document.getElementById("resultadoCalc");
    if(res) {
        res.style.display = "block";
        if(meta <= total) res.innerHTML = "Meta atingida!";
        else res.innerHTML = "Faltam " + Math.ceil((meta-total)/media) + " dias.";
    }
}
