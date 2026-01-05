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
["Fetish (feat. Gucci Mane)", "682.082.862", "198.639", "198.543", "Solo"],
["Ice Cream (with Selena Gomez)", "649.030.151", "106.529", "102.899", "Solo"],
["The Heart Wants What It Wants", "633.567.337", "137.895", "134.097", "Solo"],
["Kill Em With Kindness", "581.664.325", "39.700", "40.061", "Solo"],
["Bad Liar", "538.879.488", "33.137", "33.046", "Solo"],
["Baila Conmigo (with Rauw Alejandro)", "512.300.518", "49.325", "46.643", "Solo"],
["Come & Get It", "493.487.835", "108.461", "107.709", "Solo"],
["People You Know", "440.564.148", "223.710", "219.915", "Solo"],
["I Want You To Know", "385.559.120", "127.648", "64.759", "Solo"],
["I Can’t Get Enough", "372.719.916", "22.034", "22.524", "Solo"],
["Look At Her Now", "339.051.733", "23.936", "22.385", "Solo"],
["Rare", "305.577.119", "21.537", "21.040", "Solo"],
["Let Somebody Go", "293.223.586", "49.109", "51.039", "Solo"],
["Single Soon", "270.176.083", "42.645", "42.276", "Solo"],
["Slow Down", "200.239.032", "51.744", "50.417", "Solo"],
["Ojos Tristes (with The Marías)", "191.777.496", "294.561", "277.581", "Solo"],
["Feel Me", "188.757.461", "20.611", "20.051", "Solo"],
["Trust Nobody", "183.952.114", "8.509", "4.412", "Solo"],
["Past Life (with Selena Gomez)", "175.387.891", "11.800", "12.090", "Solo"],
["My Mind & Me", "143.125.335", "14.181", "14.559", "Solo"],
["Boyfriend", "139.209.328", "9.118", "8.355", "Solo"],
["Souvenir", "135.311.431", "64.204", "66.844", "Solo"],
["Call Me When You Break Up", "126.400.312", "85.223", "86.881", "Solo"],
["Me & The Rhythm", "125.222.192", "11.266", "11.695", "Solo"],
["Anxiety", "124.894.351", "10.195", "4.950", "Solo"],
["Selfish Love (with Selena Gomez)", "121.637.547", "10.612", "10.569", "Solo"],
["Sober", "109.888.009", "10.438", "9.945", "Solo"],
["De Una Vez", "108.091.790", "7.661", "7.478", "Solo"],
["It Ain't Me (Tiësto Remix)", "102.637.703", "3.116", "3.082", "Solo"],
["Bluest Flame", "89.164.097", "91.075", "86.704", "Solo"],
["Only You", "88.222.411", "5.622", "5.693", "Solo"],
["999 (with Camilo)", "85.991.304", "5.655", "5.586", "Solo"],
["Me & My Girls", "84.165.943", "10.227", "10.617", "Solo"],
["Ring", "79.197.220", "10.448", "9.841", "Solo"],
["Love On", "78.976.546", "16.015", "14.945", "Solo"],
["How Does It Feel To Be Forgotten", "72.884.336", "48.154", "49.403", "Solo"],
["Vulnerable", "70.581.254", "8.655", "8.311", "Solo"],
["Dance Again", "68.809.714", "6.277", "5.856", "Solo"],
["Love Will Remember", "68.53.232", "5.172", "5.308", "Solo"],
["Crowded Room (feat. 6LACK)", "65.646.956", "5.800", "5.922", "Solo"],
["Sunset Blvd", "64.792.693", "51.803", "48.695", "Solo"],
["Perfect", "63.403.033", "6.130", "6.855", "Solo"],
["We Don't Talk Anymore (DROELOE Remix)", "62.701.696", "5.541", "6.006", "Solo"],
["Shake It Up", "51.480.823", "13.574", "12.827", "Solo"],
["Let Me Get Me", "48.085.787", "5.958", "6.504", "Solo"],
["Revival", "47.820.754", "2.580", "2.629", "Solo"],
["Kill Em With Kindness (Acoustic)", "47.476.471", "3.373", "3.446", "Solo"],
["Nobody", "46.299.094", "3.601", "3.868", "Solo"],
["Camouflage", "45.138.183", "2.030", "2.137", "Solo"],
["Tell Me Something I Don't Know (OST)", "44.907.527", "9.461", "9.641", "Solo"],
["A Sweeter Place (feat. Kid Cudi)", "44.100.613", "3.924", "3.955", "Solo"],
["Birthday", "40.933.379", "4.168", "3.635", "Solo"],
["Cut You Off", "37.958.398", "2.905", "2.967", "Solo"],
["Survivors", "34.995.461", "1.731", "1.791", "Solo"],
["Dámelo To’ (feat. Myke Towers)", "34.880.509", "1.546", "1.532", "Solo"],
["Kinda Crazy", "34.274.615", "3.423", "3.296", "Solo"],
["Everything Is Not As It Seems (Series)", "33.060.619", "6.569", "6.299", "Solo"],
["Wizards of Waverly Place Theme", "33.036.195", "0", "6.392", "Solo"],
["Scared Of Loving You", "32.670.553", "16.248", "16.596", "Solo"],
["She", "30.943.797", "4.230", "4.290", "Solo"],
["Stars Dance", "29.467.844", "2.947", "2.929", "Solo"],
["Body Heat", "29.114.020", "1.462", "1.432", "Solo"],
["Magic", "28.766.931", "3.928", "3.962", "Solo"],
["Undercover", "28.109.741", "3.311", "3.163", "Solo"],
["Same Old Love Remix", "27.683.687", "3.786", "3.826", "Solo"],
["Like A Champion", "26.873.587", "1.634", "1.688", "Solo"],
["Rise", "26.694.803", "1.255", "1.246", "Solo"],
["Back To You (Joey Pecoraro Remix)", "26.002.028", "664", "634", "Solo"],
["Do It", "25.839.611", "873", "880", "Solo"],
["Fun", "25.128.828", "1.723", "1.903", "Solo"],
["New Classic (Single)", "25.027.574", "8.513", "8.248", "Solo"],
["Younger And Hotter Than Me", "24.351.713", "12.507", "12.585", "Solo"],
["Don’t Wanna Cry", "22.919.385", "15.464", "16.894", "Solo"],
["Adiós", "22.657.829", "2.389", "2.487", "Solo"],
["Save The Day", "19.546.496", "1.404", "1.454", "Solo"],
["We Don't Talk Anymore (Attom Remix)", "18.785.973", "2.315", "2.424", "Solo"],
["Selfish Love (Tiësto Remix)", "18.615.549", "1.132", "1.179", "Solo"],
["Cowboy", "18.025.582", "9.963", "9.828", "Solo"],
["You Said You Were Sorry", "17.765.204", "9.035", "9.127", "Solo"],
["One and the Same", "17.758.398", "2.849", "3.050", "Solo"],
["Buscando Amor", "16.854.648", "1.403", "1.289", "Solo"],
["Vicio", "16.798.277", "1.482", "1.430", "Solo"],
["Don’t Take It Personally", "16.045.662", "7.033", "7.410", "Solo"],
["B.E.A.T.", "15.488.920", "1.366", "1.373", "Solo"],
["Already Missing You", "15.099.239", "0", "590", "Solo"],
["Pick It Up", "15.094.442", "30.607", "29.484", "Solo"],
["Fetish (Galantis Remix)", "14.958.797", "617", "635", "Solo"],
["Cologne", "14.407.376", "990", "1.069", "Solo"],
["Bidi Bidi Bom Bom", "14.130.615", "2.256", "2.124", "Solo"],
["We Don't Talk Anymore (Lash Remix)", "14.013.796", "1.398", "1.319", "Solo"],
["Let Somebody Go (Kygo Remix)", "13.879.096", "3.785", "3.621", "Solo"],
["Forget Forever", "13.400.064", "1.206", "1.363", "Solo"],
["Write Your Name", "12.557.536", "1.017", "973", "Solo"],
["Nobody Does It Like You", "12.403.634", "1.199", "1.305", "Solo"],
["Forget Forever (ST£FAN)", "12.022.537", "287", "313", "Solo"],
["Back To You (Riton Remix)", "11.534.665", "400", "329", "Solo"],
["Hands To Myself (Fareoh)", "11.171.626", "623", "643", "Solo"],
["Hands To Myself (KANDY)", "10.960.066", "1.764", "1.753", "Solo"],
["In The Dark (Nobody Wants This)", "10.889.474", "44.607", "53.074", "Solo"],
["Outta My Hands (Loco)", "10.831.700", "606", "698", "Solo"],
["Kill Em With Kindness (Felix Cartal)", "10.289.824", "450", "308", "Solo"],
["Music Feels Better", "9.619.455", "587", "523", "Solo"],
["Stained", "9.563.904", "5.451", "5.760", "Solo"],
["Lose You To Love Me (Demo)", "9.514.142", "1.355", "1.744", "Solo"],
["Rare (Alexander 23 Edit)", "8.957.276", "327", "299", "Solo"],
["Let Somebody Go (Single)", "8.790.674", "1.247", "1.335", "Solo"],
["Talk", "8.142.556", "6.173", "7.249", "Solo"],
["Do You Wanna Be Perfect", "8.022.820", "2.018", "2.050", "Solo"],
["I Said I Love You First", "7.909.061", "2.336", "2.471", "Solo"],
["Past Life (Lil Mosey Remix)", "7.475.171", "547", "561", "Solo"],
["Good For You (Phantoms)", "7.042.191", "147", "145", "Solo"],
["Wolves (MOTi Remix)", "6.970.942", "761", "816", "Solo"],
["Come & Get It (Jump Smokers)", "6.880.066", "1.050", "897", "Solo"],
["Let Somebody Go (Piano)", "6.815.110", "1.683", "1.633", "Solo"],
["Same Old Love (Grey Remix)", "6.427.517", "100", "128", "Solo"],
["Cruella De Vil", "6.320.881", "708", "501", "Solo"],
["Good For You (Yellow Claw)", "5.983.677", "555", "567", "Solo"],
["Back To You (Anki Remix)", "5.365.582", "304", "333", "Solo"],
["Let Somebody Go (Ofenbach)", "5.324.473", "663", "562", "Solo"],
["Bang A Drum", "4.864.529", "527", "580", "Solo"],
["Wolves (Said The Sky)", "4.798.948", "1.029", "1.140", "Solo"],
["Selfish Love (Acoustic)", "4.779.712", "306", "305", "Solo"],
["Same Old Love (Borgore)", "4.409.417", "136", "135", "Solo"],
["Call Me When You Break Up (Acoustic)", "4.375.777", "2.192", "2.623", "Solo"],
["Guess You Could Say I’m In Love", "4.295.342", "4.618", "4.736", "Solo"],
["Good For You (Nebbra)", "3.990.603", "112", "99", "Solo"],
["Come & Get It (Dave Audé)", "3.836.558", "211", "227", "Solo"],
["Magical", "3.647.680", "156", "159", "Solo"],
["Lover In Me", "3.334.485", "130", "115", "Solo"],
["Let Somebody Go (Spotify Singles)", "3.240.019", "636", "605", "Solo"],
["Good For You (KASBO)", "2.791.067", "98", "85", "Solo"],
["Kill Em With Kindness (Young Bombs)", "2.675.832", "52", "51", "Solo"],
["Disappear", "2.656.801", "177", "173", "Solo"],
["I Like It That Way", "2.631.133", "96", "100", "Solo"],
["New Classic (Live)", "2.585.780", "548", "618", "Solo"],
["Rare (Live from Village Studio)", "2.415.597", "208", "197", "Solo"],
["We Don't Talk Anymore (Junge Junge)", "2.413.253", "228", "231", "Solo"],
["Come & Get It (Robert DeLong)", "2.351.299", "26", "27", "Solo"],
["That's When I'll Care", "2.193.939", "1.896", "2.087", "Solo"],
["Hands To Myself (Betablock3r)", "2.120.162", "75", "74", "Solo"],
["Selfish Love (Jack Chirak)", "2.076.220", "156", "179", "Solo"],
["Slow Down (Smash Mode)", "2.014.685", "125", "133", "Solo"],
["Same Old Love (Filous)", "1.979.876", "82", "78", "Solo"],
["I Want You To Know (Lophiile)", "1.889.189", "169", "145", "Solo"],
["Trust in Me", "1.840.920", "76", "60", "Solo"],

// --- SELENA GOMEZ & THE SCENE ---
["Love You Like A Love Song", "1.199.088.818", "650.422", "613.574", "Scene"],
["Who Says", "608.514.727", "139.157", "138.352", "Scene"],
["Naturally", "178.086.777", "47.517", "47.559", "Scene"],
["A Year Without Rain", "139.950.223", "40.291", "40.965", "Scene"],
["Hit The Lights", "83.522.063", "19.180", "19.157", "Scene"],
["Round & Round", "74.025.795", "17.255", "16.659", "Scene"],
["Tell Me Something I Don't Know", "54.059.802", "13.887", "14.401", "Scene"],
["My Dilemma 2.0", "30.882.398", "3.426", "3.470", "Scene"],
["Un Año Sin Lluvia", "24.691.153", "11.963", "10.154", "Scene"],
["My Dilemma", "19.591.243", "5.884", "5.902", "Scene"],
["Falling Down", "17.142.301", "2.203", "2.223", "Scene"],
["Bang Bang Bang", "15.994.796", "2.856", "2.909", "Scene"],
["Ghost Of You", "9.423.466", "1.698", "1.540", "Scene"],
["A Year Without Rain (Dave Audé Radio)", "8.993.184", "482", "482", "Scene"],
["We Own The Night", "8.600.182", "1.269", "1.248", "Scene"],
["Naturally (Dave Audé Radio)", "8.495.412", "661", "661", "Scene"],
["Middle Of Nowhere", "8.346.582", "1.684", "1.746", "Scene"],
["I Won't Apologize", "8.225.331", "1.252", "1.332", "Scene"],
["Whiplash", "7.043.298", "1.647", "1.734", "Scene"],
["Más", "6.880.916", "399", "399", "Scene"],
["Off The Chain", "6.287.262", "1.262", "1.262", "Scene"],
["When The Sun Goes Down", "6.245.957", "969", "1.069", "Scene"],
["Dices", "6.167.620", "924", "955", "Scene"],
["Sick Of You", "6.108.849", "687", "792", "Scene"],
["Rock God", "5.946.644", "875", "875", "Scene"],
["The Way I Loved You", "5.665.087", "491", "505", "Scene"],
["I Don't Miss You At All", "5.169.661", "561", "594", "Scene"],
["Outlaw", "5.145.451", "706", "740", "Scene"],
["Live Like There's No Tomorrow", "4.423.892", "733", "818", "Scene"],
["Spotlight", "4.347.689", "619", "633", "Scene"],
["Kiss & Tell", "4.313.201", "460", "513", "Scene"],
["Intuition", "4.201.112", "566", "568", "Scene"],
["Summer's Not Hot", "4.045.439", "512", "514", "Scene"],
["That's More Like It", "3.991.291", "586", "587", "Scene"],
["I Promise You", "3.666.329", "566", "529", "Scene"],
["Stop & Erase", "3.366.468", "433", "433", "Scene"],
["More", "2.875.937", "418", "404", "Scene"],
["I Got U", "2.526.483", "326", "341", "Scene"],
["Crush", "2.324.975", "401", "372", "Scene"],
["As A Blonde", "2.258.603", "273", "281", "Scene"],
["Who Says (Dave Audé Club)", "145.570", "9", "5", "Scene"],
["Naturally (Ralphi Rosario Extended)", "104.199", "6", "3", "Scene"],
["Naturally (Disco Fries Remix)", "103.377", "4", "0", "Scene"]
];

let sortMode = 'total';
let currentFilter = 'All';

// FUNÇÃO PARA LIMPAR PONTOS E CONVERTER EM NÚMERO REAL
function toNum(val) {
    if (!val) return 0;
    if (typeof val === 'number') return val;
    return Number(val.toString().replace(/\./g, '').trim()) || 0;
}

function getTarget(total, daily) {
    let step;
    if (daily < 5000) step = 500000;
    else if (daily < 19000) step = 1000000;
    else if (daily < 50000) step = 2000000;
    else step = 5000000;
    return Math.ceil((total + 1) / step) * step;
}

function getLabel(t) {
    if (t >= 1000000000) return (t / 1000000000).toFixed(2).replace('.00', '') + "B";
    return (t / 1000000).toFixed(1).replace('.0', '') + "M";
}

function setSort(m) { sortMode = m; updateUI(); }

function toggleFilter(cat) {
    if (currentFilter === cat) currentFilter = 'All';
    else currentFilter = cat;
    document.getElementById("btnSolo").classList.toggle("active", currentFilter === 'Solo');
    document.getElementById("btnScene").classList.toggle("active", currentFilter === 'Scene');
    updateUI();
}

function updateUI() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const body = document.getElementById("tableBody");
    let dailyTotal = 0; // RESETADO A CADA CICLO PARA EVITAR NÚMEROS ENORMES

    // PROCESSAMENTO SEGURO DOS DADOS
    let data = musicas.map(m => {
        const total = toNum(m[1]);
        const daily = toNum(m[2]);
        const dailyOntem = toNum(m[3]);
        const target = getTarget(total, daily);
        
        // Proteção contra divisão por zero para evitar o NaN na estimativa
        let days = "---";
        if (daily > 0) {
            days = Math.ceil((target - total) / daily);
        }
        
        return { name: m[0], total, daily, dailyOntem, cat: m[4], target, days };
    });

    if (currentFilter !== 'All') data = data.filter(m => m.cat === currentFilter);
    data = data.filter(m => m.name.toLowerCase().includes(search));

    // ORDENAÇÃO
    if (sortMode === 'daily') data.sort((a,b) => b.daily - a.daily);
    else if (sortMode === 'est') {
        data.sort((a,b) => {
            if (a.days === "---") return 1;
            if (b.days === "---") return -1;
            return a.days - b.days;
        });
    }
    else if (sortMode === 'name') data.sort((a,b) => a.name.localeCompare(b.name));
    else data.sort((a,b) => b.total - a.total);

    body.innerHTML = "";
    data.forEach(m => {
        dailyTotal += m.daily;
        let compHTML = "";
        if (m.dailyOntem > 0) {
            const diff = m.daily - m.dailyOntem;
            const perc = ((diff / m.dailyOntem) * 100).toFixed(1);
            if (diff > 0) compHTML = `<br><span style="color:#2ecc71; font-size:0.7rem;">▲ ${perc}%</span>`;
            else if (diff < 0) compHTML = `<br><span style="color:#e74c3c; font-size:0.7rem;">▼ ${Math.abs(perc)}%</span>`;
        }

        body.innerHTML += `<tr>
            <td>${m.name}</td>
            <td class="daily-col number">${m.daily.toLocaleString()}${compHTML}</td>
            <td class="number" style="text-align:right">${m.total.toLocaleString()}</td>
            <td style="text-align:center"><span class="badge-target">${getLabel(m.target)}</span></td>
            <td class="number" style="text-align:right">${m.days === "---" ? "---" : m.days.toLocaleString() + " dias"}</td>
        </tr>`;
    });

    // ATUALIZA OS CARDS DE RESUMO
    document.getElementById("totalDailyStats").innerText = dailyTotal.toLocaleString();
    
    const next = data.filter(x => x.days !== "---").sort((a,b) => a.days - b.days).slice(0, 3);
    document.getElementById("nextMilestone").innerHTML = next.map(n => 
        `<div style="font-size:0.85rem; margin-top:5px;"><b>${n.name}</b> em <b>${n.days} dias</b></div>`
    ).join('');
}

function calcularMeta() {
    const totalAtual = toNum(document.getElementById("calcTotal").value);
    const metaDesejada = toNum(document.getElementById("calcMeta").value);
    const mediaDaily = toNum(document.getElementById("calcMedia").value);
    const boxResultado = document.getElementById("resultadoCalc");

    if(!totalAtual || !metaDesejada || !mediaDaily) {
        boxResultado.style.display = "block";
        boxResultado.innerHTML = "<span style='color:red; font-weight:bold;'>⚠️ Preencha todos os campos!</span>";
        return;
    }

    if(metaDesejada <= totalAtual) {
        boxResultado.style.display = "block";
        boxResultado.innerHTML = "<span style='color:#e67e22; font-weight:bold;'>🎉 Meta alcançada!</span>";
    } else {
        const faltam = metaDesejada - totalAtual;
        const dias = Math.ceil(faltam / mediaDaily);
        boxResultado.style.display = "block";
        boxResultado.innerHTML = `
            <div style="color:var(--ocean); margin-bottom:10px;">Faltam <strong>${faltam.toLocaleString()}</strong> streams.</div>
            <div style="font-size:1.4rem; color:var(--primary);">🚀 Estimativa: <strong>${dias.toLocaleString()} dias</strong></div>
        `;
    }
}
updateUI();
function openNav() {
  document.getElementById("mySidebar").style.left = "0";
}

function closeNav() {
  document.getElementById("mySidebar").style.left = "-250px";
}
