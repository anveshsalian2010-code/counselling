const $=s=>document.querySelector(s);
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const SEC=Object.fromEntries(THEORY.map(s=>[s.h.replace(/’/g,"'"),s]));
const reduced=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Animated plates ---------- */
const ART={
spectrum:()=>{const n=[["Guidance","help with choices","unequal · oldest"],["Coaching","consultation","future · performance"],["Counselling","relationship","8–12 sessions"],["Psychotherapy","deep change","20–40 sessions"]];
 return `<svg class="art" viewBox="0 0 640 230" role="img" aria-label="Guidance, coaching, counselling and psychotherapy on one line">
 <line x1="60" y1="110" x2="580" y2="110" class="ln"/><line x1="60" y1="110" x2="580" y2="110" stroke="var(--t)" stroke-width="3" class="dash"/>
 ${n.map(([a,b,c],i)=>{const x=[90,235,390,545][i];return `<g class="rise" style="animation-delay:${i*.15}s"><circle class="pulse" style="animation-delay:${i*.5}s" cx="${x}" cy="110" r="${i===2?26:18}" fill="${i===2?'var(--t)':'var(--t-soft)'}"/><text x="${x}" y="64" text-anchor="middle" font-size="20" font-family="var(--display)">${a}</text><text x="${x}" y="158" text-anchor="middle" font-size="13" font-weight="700">${b}</text><text x="${x}" y="178" text-anchor="middle" class="mono mut" font-size="10.5">${c}</text></g>`}).join("")}
 <text x="320" y="215" text-anchor="middle" class="mut" font-size="12">“Counseling is a rehearsal for action” (Casey, 1996, in Gladding, 2018)</text></svg>`},
goals:()=>{const g=[["1","Life-enhancing outcomes","manage problems, use unused resources"],["2","Learning to help oneself","“skilling clients”"],["3","Prevention mentality","$1 in prevention saves $10 in cure"]];
 return `<svg class="art" viewBox="0 0 640 240" role="img" aria-label="Egan's three goals as rising steps">
 ${g.map(([n,a,b],i)=>`<g class="rise" style="animation-delay:${i*.25}s"><rect x="${40+i*190}" y="${150-i*45}" width="180" height="${70+i*45}" rx="14" fill="${i===2?'var(--t)':'var(--t-soft)'}"/><text x="${130+i*190}" y="${185-i*45}" text-anchor="middle" font-size="34" font-family="var(--display)" ${i===2?'fill="var(--surface)"':''}>${n}</text><text x="${130+i*190}" y="${140-i*45}" text-anchor="middle" font-size="14" font-weight="700">${a}</text><text x="${130+i*190}" y="${210-i*45}" text-anchor="middle" font-size="11" ${i===2?'fill="var(--surface)"':'class="mut"'}>${b}</text></g>`).join("")}
 <text x="40" y="30" class="mono mut" font-size="11">EGAN (2014) · GOALS OF HELPING</text></svg>`},
ethics:()=>{const p=["Beneficence","Nonmaleficence","Autonomy","Justice","Fidelity","Veracity"],d=["do good","do no harm","client chooses","fairness","keep promises","truthfulness"];
 return `<svg class="art" viewBox="0 0 640 260" role="img" aria-label="Six ethical principles around the client">
 <circle cx="320" cy="130" r="44" fill="var(--t)"/><text x="320" y="127" text-anchor="middle" fill="var(--surface)" font-weight="700" font-size="13">client's</text><text x="320" y="144" text-anchor="middle" fill="var(--surface)" font-weight="700" font-size="13">welfare</text>
 ${p.map((t,i)=>{const a=i/6*Math.PI*2-Math.PI/2,x=320+Math.cos(a)*230,y=130+Math.sin(a)*96;return `<line x1="320" y1="130" x2="${x}" y2="${y}" class="ln"/><g class="pulse" style="animation-delay:${i*.4}s"><rect x="${x-62}" y="${y-22}" width="124" height="44" rx="22" fill="${i===1?'var(--s-soft)':'var(--surface)'}" stroke="${i===1?'var(--s)':'var(--line)'}" stroke-width="2"/></g><text x="${x}" y="${y-2}" text-anchor="middle" font-size="12.5" font-weight="700">${t}</text><text x="${x}" y="${y+13}" text-anchor="middle" class="mut" font-size="10.5">${d[i]}</text>`}).join("")}
 </svg>`},
timeline:()=>{const e=[[1907,"Davis"],[1908,"Parsons · Beers"],[1913,"NVGA"],[1917,"Smith-Hughes"],[1930,"Williamson"],[1942,"Rogers"],[1952,"APGA · Div 17"],[1958,"NDEA"]];const X=y=>50+(y-1905)/(1960-1905)*540;
 return `<svg class="art" viewBox="0 0 640 220" role="img" aria-label="Timeline of counselling 1907 to 1958">
 <line x1="40" y1="120" x2="600" y2="120" class="ln"/><line x1="40" y1="120" x2="600" y2="120" stroke="var(--t)" stroke-width="3" class="dash"/>
 ${e.map(([y,t],i)=>`<g class="rise" style="animation-delay:${i*.18}s"><circle cx="${X(y)}" cy="120" r="${y===1942?11:7}" fill="${y===1942?'var(--c)':'var(--t)'}"/><text x="${X(y)}" y="${i%2?160:92}" text-anchor="middle" font-size="12" font-weight="700">${t}</text><text x="${X(y)}" y="${i%2?177:76}" text-anchor="middle" class="mono mut" font-size="11">${y===1930?"1930s":y}</text></g>`).join("")}
 <text x="40" y="30" class="mono mut" font-size="11">GLADDING (2018) · FROM GUIDANCE TO PROFESSION</text></svg>`},
india:()=>`<svg class="art" viewBox="0 0 640 230" role="img" aria-label="From guru guidance to professional counselling, with rapport as the bridge">
 <g class="rise"><rect x="40" y="70" width="190" height="96" rx="16" class="box"/><text x="135" y="106" text-anchor="middle" font-size="24" font-family="var(--display)">Elders · guru</text><text x="135" y="132" text-anchor="middle" class="mut" font-size="12">informal · hierarchical</text></g>
 <g class="rise" style="animation-delay:.3s"><rect x="410" y="70" width="190" height="96" rx="16" fill="var(--t)"/><text x="505" y="106" text-anchor="middle" font-size="24" font-family="var(--display)" fill="var(--surface)">Counsellor</text><text x="505" y="132" text-anchor="middle" font-size="12" fill="var(--surface)">scientific · egalitarian · confidential</text></g>
 <path d="M232 118 C 300 60, 340 60, 408 118" fill="none" stroke="var(--c)" stroke-width="3" class="dash"/>
 <text x="320" y="62" text-anchor="middle" font-weight="700" fill="var(--c)" font-size="15">rapport</text>
 <text x="320" y="200" text-anchor="middle" class="mut" font-size="12">family involvement · hierarchy norms · help-seeking stigma (Rao, 1981)</text></svg>`,
core:()=>`<svg class="art" viewBox="0 0 640 260" role="img" aria-label="Rogers' three core conditions as a triangle">
 <polygon points="320,30 140,220 500,220" fill="var(--t-soft)" stroke="var(--t)" stroke-width="3"/>
 ${[[320,30,"Congruence","genuine · real"],[140,220,"Unconditional","positive regard"],[500,220,"Empathy","≠ sympathy"]].map(([x,y,a,b],i)=>`<g class="pulse" style="animation-delay:${i*.6}s"><circle cx="${x}" cy="${y}" r="16" fill="var(--t)"/></g><text x="${x+(i===1?-24:i===2?24:0)}" y="${y+(i?4:-14)}" text-anchor="${i===1?'end':i===2?'start':'middle'}" font-size="18" font-family="var(--display)">${a}</text><text x="${x+(i===1?-24:i===2?24:0)}" y="${y+(i?22:-30)+(i?0:-2)}" text-anchor="${i===1?'end':i===2?'start':'middle'}" class="mut" font-size="11">${b}</text>`).join("")}
 <text x="320" y="150" text-anchor="middle" font-size="14" font-weight="700">growth</text><text x="320" y="168" text-anchor="middle" class="mut" font-size="11">“necessary and sufficient”</text></svg>`,
pyramid:()=>{const L=[["Ethics · multicultural · neuroscience · positive psychology · resilience","Foundation"],["Attending & observation","Attending"],["Basic listening sequence","Listening"],["Five-stage interview","Five stages"],["Influencing skills","Influencing"],["Integration · personal style · transcendence","Apex"]];
 return `<svg class="art pyr" viewBox="0 0 640 290" role="img" aria-label="Ivey's microskills pyramid built from the base up">
 ${L.map(([t],i)=>{const w=560-i*84,y=250-i*40;return `<g class="rise" style="animation-delay:${i*.2}s" data-lv="${i}"><rect x="${320-w/2}" y="${y}" width="${w}" height="36" rx="8" fill="${i===5?'var(--c)':i%2?'var(--t)':'var(--t-soft)'}"/><text x="320" y="${y+23}" text-anchor="middle" font-size="${i===0?11.5:13}" font-weight="700" ${i%2||i===5?'fill="var(--surface)"':''}>${t}</text></g>`}).join("")}
 <text x="320" y="20" text-anchor="middle" class="mono mut" font-size="11">IVEY ET AL. (2018) · MASTER ONE BY ONE, THEN INTEGRATE</text></svg>`},
soler:()=>`<svg class="art" viewBox="0 0 640 260" role="img" aria-label="A counsellor leaning in towards a client, showing SOLER">
 <line x1="60" y1="230" x2="580" y2="230" class="ln"/>
 <g class="lean"><circle cx="210" cy="80" r="26" fill="var(--t)"/><rect x="186" y="110" width="48" height="80" rx="20" fill="var(--t)"/></g><rect x="176" y="190" width="70" height="10" rx="4" fill="var(--muted)"/><rect x="236" y="190" width="10" height="40" fill="var(--muted)"/>
 <circle cx="430" cy="80" r="26" fill="var(--c)"/><rect x="406" y="110" width="48" height="80" rx="20" fill="var(--c)"/><rect x="394" y="190" width="70" height="10" rx="4" fill="var(--muted)"/><rect x="394" y="190" width="10" height="40" fill="var(--muted)"/>
 <path d="M245 82 L 395 82" stroke="var(--s)" stroke-width="2.5" class="dash"/>
 ${"SOLER".split("").map((l,i)=>`<g class="rise" style="animation-delay:${i*.2}s"><circle cx="${200+i*60}" cy="250" r="0"/><text x="${200+i*60}" y="30" text-anchor="middle" font-size="26" font-family="var(--display)" fill="var(--t)">${l}</text></g>`).join("")}
 <text x="320" y="56" text-anchor="middle" class="mut" font-size="11">Squarely · Open · Lean · Eye contact · Relaxed</text></svg>`,
qwheel:()=>{const q=[["What","facts"],["How","process · feelings"],["Why","reasons · use with care"],["Could","most open"]];
 return `<svg class="art" viewBox="0 0 640 250" role="img" aria-label="Question words and what they draw out">
 ${q.map(([a,b],i)=>{const x=90+i*155;return `<g class="rise" style="animation-delay:${i*.2}s"><circle class="pulse" style="animation-delay:${i*.5}s" cx="${x}" cy="105" r="52" fill="${i===2?'var(--s-soft)':i===3?'var(--t)':'var(--t-soft)'}"/><text x="${x}" y="114" text-anchor="middle" font-size="30" font-family="var(--display)" ${i===3?'fill="var(--surface)"':''}>${a}?</text><text x="${x}" y="186" text-anchor="middle" font-size="13" font-weight="700">${b}</text></g>`}).join("")}
 <text x="320" y="230" text-anchor="middle" class="mut" font-size="12">Open: what · how · why · could   ·   Closed: is · are · do</text></svg>`},
continuum:()=>{const s=[["Encourager","“uh-huh”, nod",60],["Restatement","2+ exact words",110],["Paraphrase","distilled essence",170],["Summary","whole session",240]];
 return `<svg class="art" viewBox="0 0 640 230" role="img" aria-label="From encourager to summary, each response covers more of the client's talk">
 ${s.map(([a,b,w],i)=>`<g class="rise" style="animation-delay:${i*.2}s"><rect x="${320-w}" y="${30+i*44}" width="${w*2}" height="34" rx="17" fill="${i===2?'var(--t)':'var(--t-soft)'}"/><text x="320" y="${52+i*44}" text-anchor="middle" font-size="14" font-weight="700" ${i===2?'fill="var(--surface)"':''}>${a} <tspan font-weight="400" font-size="12">· ${b}</tspan></text></g>`).join("")}
 <text x="320" y="218" text-anchor="middle" class="mut" font-size="12">more of the client's talk covered →</text></svg>`},
rof:()=>{const p=["Stem","Feeling label","Context","Tense","Checkout"];
 return `<svg class="art" viewBox="0 0 640 210" role="img" aria-label="Five parts of a reflection of feeling linked in a chain">
 ${p.map((t,i)=>{const x=70+i*125;return `${i?`<line x1="${x-80}" y1="95" x2="${x-46}" y2="95" stroke="var(--t)" stroke-width="3" class="dash"/>`:""}<g class="rise" style="animation-delay:${i*.2}s"><circle cx="${x}" cy="95" r="44" fill="${i===1?'var(--c)':'var(--t-soft)'}"/><text x="${x}" y="90" text-anchor="middle" font-size="26" font-family="var(--display)" ${i===1?'fill="var(--surface)"':''}>${i+1}</text><text x="${x}" y="110" text-anchor="middle" font-size="12" font-weight="700" ${i===1?'fill="var(--surface)"':''}>${t}</text></g>`}).join("")}
 <text x="320" y="180" text-anchor="middle" font-size="16" font-family="var(--display)">“Sounds like you feel <tspan fill="var(--c)">anxious</tspan> when you blank out… is that right?”</text></svg>`},
stages:()=>{const M=[["Ivey",[["Empathic relationship"],["Story & strength"],["Goals"],["Restory","Action"]]],["Egan",[["(skills run beneath)"],["Current picture"],["Preferred picture"],["Way forward"]]],["Brammer & Shostrom",[["Relationship","Structure"],["Clarification","Exploration","Deepening"],["Consolidation"],["Planning","Termination"]]],["Carkhuff",[["Involving"],["Exploring"],["Understanding"],["Acting"]]]];
 const band=["var(--t-soft)","var(--c-soft)","var(--s-soft)","var(--t)"];
 return `<svg class="art" viewBox="0 0 640 300" role="img" aria-label="Four stage models lined up against four shared movements">
 ${["Relationship","Explore","Understand / goals","Act"].map((b,j)=>`<rect x="128" y="${36+j*62}" width="506" height="56" rx="10" fill="${band[j]}" opacity=".55"/><text x="10" y="${68+j*62}" font-size="12" font-weight="700">${b}</text>`).join("")}
 ${M.map(([m,cols],i)=>{const x=136+i*125;return `<text x="${x+56}" y="24" text-anchor="middle" font-size="12" font-weight="700">${m}</text>`+cols.map((c,j)=>`<g class="rise" style="animation-delay:${(i*4+j)*.06}s">${c.map((t,k)=>`<text x="${x+56}" y="${64+j*62+(k-(c.length-1)/2)*15}" text-anchor="middle" font-size="11" ${j===3?'fill="var(--surface)"':''}>${t}</text>`).join("")}</g>`).join("")}).join("")}
 </svg>`},
focus:()=>{const f=["Client","Main theme","Others","Mutual “we”","Counsellor","Cultural / context","Here & now"];
 return `<svg class="art" viewBox="0 0 640 270" role="img" aria-label="Seven types of focus orbiting the client">
 <circle cx="320" cy="135" r="110" class="ln" stroke-dasharray="4 6"/><circle cx="320" cy="135" r="34" fill="var(--c)"/><text x="320" y="140" text-anchor="middle" fill="var(--surface)" font-weight="700" font-size="13">client</text>
 <g class="orbit">${f.map((t,i)=>{const a=i/7*Math.PI*2,x=320+Math.cos(a)*110,y=135+Math.sin(a)*110;return `<g transform="translate(${x} ${y})"><g class="counter"><rect x="-54" y="-14" width="108" height="28" rx="14" fill="${i===5?'var(--s-soft)':'var(--t-soft)'}" stroke="var(--t)"/><text y="5" text-anchor="middle" font-size="11.5" font-weight="700">${t}</text></g></g>`}).join("")}</g>
 <text x="16" y="262" class="mut" font-size="11">“I am I and my circumstances” · Ortega y Gasset</text></svg>`},
meaning:()=>`<svg class="art" viewBox="0 0 640 230" role="img" aria-label="Reflection of meaning comes from the client, reframes come from the counsellor">
 <circle cx="140" cy="110" r="54" fill="var(--c)"/><text x="140" y="116" text-anchor="middle" fill="var(--surface)" font-size="22" font-family="var(--display)">client</text>
 <circle cx="500" cy="110" r="54" fill="var(--t)"/><text x="500" y="116" text-anchor="middle" fill="var(--surface)" font-size="22" font-family="var(--display)">counsellor</text>
 <path d="M196 90 C 280 40, 360 40, 444 90" fill="none" stroke="var(--c)" stroke-width="3" class="dash"/><text x="320" y="44" text-anchor="middle" font-size="13" font-weight="700" fill="var(--c)">reflection of meaning · client's own values</text>
 <path d="M444 132 C 360 182, 280 182, 196 132" fill="none" stroke="var(--t)" stroke-width="3" class="dash"/><text x="320" y="190" text-anchor="middle" font-size="13" font-weight="700" fill="var(--t)">interpretation / reframe · new frame</text>
 <text x="320" y="220" text-anchor="middle" class="mut" font-size="11">Frankl: the last freedom is to choose one's attitude</text></svg>`,
lenses:()=>`<svg class="art" viewBox="0 0 640 260" role="img" aria-label="Gladding, Ivey and Egan as three overlapping lenses">
 <circle cx="250" cy="110" r="90" fill="var(--t)" opacity=".22" class="pulse"/><circle cx="390" cy="110" r="90" fill="var(--c)" opacity=".22" class="pulse" style="animation-delay:.8s"/><circle cx="320" cy="180" r="90" fill="var(--s)" opacity=".22" class="pulse" style="animation-delay:1.6s"/>
 <text x="215" y="90" text-anchor="middle" font-size="20" font-family="var(--display)">Gladding</text><text x="215" y="108" text-anchor="middle" class="mut" font-size="11">what it is</text>
 <text x="425" y="90" text-anchor="middle" font-size="20" font-family="var(--display)">Ivey</text><text x="425" y="108" text-anchor="middle" class="mut" font-size="11">what you do</text>
 <text x="320" y="225" text-anchor="middle" font-size="20" font-family="var(--display)">Egan</text><text x="320" y="243" text-anchor="middle" class="mut" font-size="11">what it achieves</text>
 <text x="320" y="142" text-anchor="middle" font-size="12" font-weight="700">Rogers</text></svg>`,
books:()=>`<svg class="art" viewBox="0 0 640 180" role="img" aria-label="Stack of the six textbooks used">
 ${["Gladding 2018","Ivey et al. 2018","Egan 2014","Corey 2013","Carkhuff 2008","Rao 1981"].map((b,i)=>`<g class="rise" style="animation-delay:${i*.12}s"><rect x="${70+i*85}" y="${40+(i%2)*10}" width="70" height="${110-(i%2)*10}" rx="6" fill="${i%3===0?'var(--t)':i%3===1?'var(--c)':'var(--s)'}" opacity=".85"/><text transform="translate(${110+i*85} ${140}) rotate(-90)" font-size="12" font-weight="700" fill="var(--surface)">${b}</text></g>`).join("")}</svg>`
};

/* ---------- Theory topics ---------- */
const TOPICS=[
{id:"what",n:"01",name:"What counselling is",art:"spectrum",cap:"Four helping roles, from direction-giving to deep change.",secs:["Counselling","Definition of Counselling","Counselling, Guidance, Psychotherapy, and Coaching"],
 keys:["<b>Consensus definition (2010):</b> after the three-year <i>20/20: A Vision for the Future of Counseling</i> process, 29 associations agreed: counselling is “a professional relationship that empowers diverse individuals, families, and groups to accomplish mental health, wellness, education, and career goals.”","<b>Four implications (Gladding):</b> wellness, not just pathology; individuals, groups and families; diverse and multicultural; a dynamic process, “a rehearsal for action” (Casey, 1996).","<b>Guidance:</b> oldest, narrowest; helping make choices in an unequal relationship; has “gone the way of ‘consumption’ in medicine” (Tyler, 1986).","<b>Psychotherapy:</b> past, insight, detached, expert; 20–40 sessions over 6 months–2 years vs 8–12 for counselling. Distinction now blurred.","<b>Coaching:</b> individual consultation, future and performance focused, for functioning clients (Board Certified Coach).","<b>Ivey:</b> counselling and therapy share the goal of self-actualization, always “in relationship to others”."],
 tip:"Structure this paper the way the record does: Ivey's pyramid, from foundations up to <b>transcendence</b>, “your capacity to go beyond yourself”."},
{id:"goals",n:"02",name:"Goals of counselling",art:"goals",cap:"Egan's three outcome-focused goals.",secs:["Goals of Counselling"],
 keys:["<b>Egan Goal 1:</b> life-enhancing outcomes. Help clients manage problems and use unused resources. Helpers don't control outcomes; “clients can choose to live more effectively or not”.","<b>Goal 2:</b> learning to help oneself. A good counsellor “skills clients” (Nelson-Jones).","<b>Goal 3:</b> prevention mentality. “Every dollar spent in prevention saves… ten in cure.”","<b>Positive psychology:</b> clients bring “missed opportunities and unused potential”; treatment is “nurturing what is best” (Seligman & Csikszentmihalyi, 2000).","<b>Ivey:</b> resilient self-actualization, relational and cultural.","<b>Bottom line:</b> durable, self-directed, life-enhancing change the client can sustain without the counsellor."],
 tip:"If asked “What is the goal of counselling?”, give Egan's three goals by name, then Ivey's single construct."},
{id:"ethics",n:"03",name:"Ethics",art:"ethics",cap:"Nonmaleficence is often treated as primary.",secs:["Ethics in Counselling","The Institutional Home of Counselling Ethics: Division 17"],
 keys:["<b>Why codes exist:</b> without them a group isn't a profession (Allen, 1986).","<b>Three functions</b> (Van Hoose & Kottler, 1985): self-regulation instead of government control; less internal disagreement; protection from malpractice claims.","<b>Six principles:</b> beneficence, nonmaleficence, autonomy, justice, fidelity, veracity.","<b>Limitations of codes:</b> some dilemmas can't be solved, hard to enforce, provisions conflict, codes are historical, weak on cross-cultural issues.","<b>Swanson's 4 guidelines:</b> honesty, client's best interest, no malice or personal gain, can justify the action.","<b>Egan:</b> mandatory vs aspirational ethics. “Ethics is a way of thinking about becoming the best practitioner possible” (Corey).","<b>Division 17</b> (Society of Counseling Psychology), APA, 1952. Super (1955): counselling psychology = normal growth; clinical = pathology. APA vs ACA: 2 vs 5 years before dating a former client."],
 tip:"Know the six principles in pairs: <b>doing good / not harming</b>, <b>freedom / fairness</b>, <b>promises / truth</b>."},
{id:"history",n:"04",name:"History of counselling",art:"timeline",cap:"Gladding calls the 1940s the most consequential decade, and the 1950s the most profound impact.",secs:["History of Counselling"],
 keys:["<b>1907</b> Jesse B. Davis: first systematic school guidance (Grand Rapids).","<b>1908</b> Frank Parsons, “founder of guidance”: Boston Vocational Bureau. <i>Choosing a Vocation</i> (1909): self + work + “true reasoning”.","<b>1908</b> Clifford Beers, <i>A Mind That Found Itself</i>: impetus for the mental health movement.","<b>1913</b> NVGA (forerunner of ACA) · <b>1917</b> Smith-Hughes Act · WWI Army Alpha and Beta tests.","<b>1930s</b> E. G. Williamson: first theory, directive trait-and-factor (“Minnesota point of view”).","<b>1942</b> Carl Rogers, <i>Counseling and Psychotherapy</i>: non-directive, client responsible for growth; guidance “disappeared”.","<b>1950s:</b> APGA 1952, Division 17 1952, ASCA 1953, NDEA 1958 (after Sputnik) quadrupled school counsellors."],
 tip:"Parsons, Davis and Beers are the <b>three founders</b> of the first decade. Rogers 1942 is the turning point."},
{id:"india",n:"05",name:"Indian context & rapport",art:"india",cap:"Rapport as a measurable, teachable skill.",secs:["Counselling in the Indian Context"],
 keys:["<b>S. Narayana Rao, <i>Counselling Psychology</i> (1981)</b>: standard Indian reference.","Counselling grows from older guidance by <b>elders, the guru and religious figures</b>, but modern counselling is <b>scientific, egalitarian and confidential</b>.","<b>Rapport (scientific definition):</b> a measurable, purposeful state of mutual trust, comfort and cooperative engagement, built through attending, unconditional acceptance and respect for the client's culture and family.","Indian sensitivities: <b>family involvement</b> in decisions, <b>hierarchical</b> norms between young clients and older counsellors, <b>stigma</b> around help-seeking."],
 tip:"Define rapport as <b>a skill, not a personality trait</b>. That's the line examiners want."},
{id:"rogers",n:"06",name:"Rogers' core conditions",art:"core",cap:"The relationship itself is the agent of change.",secs:["Carl Rogers's Core Conditions","The Relevance of the Core Conditions","Two Basic Assumptions Underlying the Core Conditions"],
 keys:["<b>Six conditions</b> (Rogers, 1957): psychological contact; client in incongruence; therapist congruent; unconditional positive regard; empathic understanding; communicated to a minimal degree. “No other conditions were necessary.”","<b>Congruence:</b> real, no false front; inner experience matches outer expression. Self-disclosure must be well-timed and constructive.","<b>UPR:</b> deep, nonpossessive caring; acceptance is <b>not approval</b> of all behaviour.","<b>Empathy:</b> grasping the client's world “as if”, without losing separateness. <b>Empathy ≠ sympathy.</b> Watson (2002): 60 years of research, the strongest predictor of progress.","<b>Relevance:</b> adopted by nearly all schools; cross-cultural but may feel too direct or individualistic in collectivist settings.","<b>Two assumptions:</b> the actualizing tendency; the conditions are necessary <i>and sufficient</i>. Ivey keeps them as necessary but not sufficient."],
 tip:"Classic viva trap: <b>empathy vs sympathy</b>. Empathy understands the client's world; sympathy feels sorry for them."},
{id:"ivey",n:"07",name:"Ivey's microskills model",art:"pyramid",cap:"From the base up: master each skill, then integrate.",secs:["Ivey's Microskills Model"],
 keys:["Microskills are “the specific communication skills that provide ways for you to reach many types of clients”; they clarify the <b>“how”</b> of every theory.","<b>Base:</b> ethics, multicultural competence, neuroscience, positive psychology, resilience.","<b>Then:</b> attending and observation → basic listening sequence (questioning, encouraging, paraphrasing, summarizing, reflecting feelings) → five-stage interview → influencing skills (focusing, confrontation, reflection of meaning, interpretation, action strategies).","<b>Apex:</b> skills integration, personal style, transcendence."],
 tip:"Draw the pyramid in the exam. Six levels, base to apex, gets marks quickly."},
{id:"attending",n:"08",name:"Attending, observation & SOLER",art:"soler",cap:"Egan's SOLER: guidelines, not rules.",secs:["Attending Skills","Observation Skills","Micro and Macro Nonverbal Expressions","SOLER: Nonverbal Attending"],
 keys:["<b>Attending = 3 V's + B:</b> visual/eye contact, vocal qualities, verbal tracking, body language. Adapt to culture.","<b>Neuroscience:</b> good listening activates the ventral striatum (reward), medial PFC (cognitive empathy) and right anterior insula (affective empathy).","<b>Observation:</b> “watching carefully and intentionally”; “85% or more of communication is nonverbal”. Watch the client <i>and</i> yourself; note <b>movement synchrony</b>.","<b>Macro nonverbals:</b> easy to see (eyes down, turning away). <b>Micro:</b> as fast as 1/15 of a second; note silently.","<b>SOLER</b> (Egan): Squarely, Open, Lean, Eye contact, Relaxed. For visually impaired clients, <b>SOLAR</b>: Aim towards the voice."],
 tip:"Remember SOLAR. It shows you understand SOLER is about the <b>mind-set</b>, not the posture."},
{id:"questions",n:"09",name:"Questioning",art:"qwheel",cap:"The first word predicts the answer.",secs:["Questioning","Guidelines for Using Questions Well"],
 keys:["<b>Open</b> questions can't be answered in a few words; <b>closed</b> (is, are, do) get specifics but leave the burden with the counsellor.","<b>What</b> → facts · <b>How</b> → process or feelings · <b>Why</b> → reasons (risk of feeling grilled) · <b>Could</b> → most open.","Use questions to begin, to draw out a story, and for concreteness (“Could you give me a specific example?”).","<b>Pitfalls:</b> bombardment, multiple questions at once, questions as disguised statements, why questions.","In many non-Western cultures, too many questions can feel intrusive. Use them “wisely and intentionally”."],
 tip:"Your record shows closed questions dominating Session 1 and Case 2. Use that as a self-critical example in the viva."},
{id:"listening",n:"10",name:"Encouragers, paraphrasing & summarizing",art:"continuum",cap:"One continuum, widening in scope.",secs:["Encouragers","Paraphrasing","The Dimensions of Paraphrasing","Summarizing"],lab:"para",
 keys:["<b>Encouragers:</b> “uh-huh”, nods, open gestures, supportive silence; too many feel wooden, too few feel uninterested. “Smiling is an effective encourager.”","<b>Restatement:</b> repeats 2+ exact client words, and can steer more than you think.","<b>Paraphrase:</b> “the most important cognitive empathic listening skill”; several sentences distilled. Four dimensions: <b>stem, key words, essence, checkout</b>.","Accurate paraphrase → “That's right” → client stops repeating the story.","<b>Summarizing:</b> longer stretch, adds emotion; used at the start, middle or end; supports executive functioning (Theory of Mind)."],
 tip:"Paraphrase = <b>distillation without distortion</b>."},
{id:"rof",n:"11",name:"Reflection of feeling",art:"rof",cap:"“The heart of empathic understanding.”",secs:["Reflection of Feeling"],lab:"rof",
 keys:["Five components: <b>sentence stem</b> (vary it), <b>feeling label</b> (more than one for mixed feelings), <b>context</b> (about / when / because), <b>tense</b> (present is more powerful), <b>checkout</b>.","<b>Acknowledgment of feelings:</b> a brief recognition, for passing exchanges.","It's a skill <i>and</i> an art; too mechanical “takes the authenticity out of the relationship”."],
 tip:"Practise one full reflection out loud with all five parts before the practical. Try the builder below."},
{id:"stages",n:"12",name:"Stage models",art:"stages",cap:"Four models, one arc: relationship → explore → understand → act.",secs:["Stage Models of the Counselling Process","Ivey's Five-Stage Model","Comparison with Egan's Three-Stage Model","Brammer and Shostrom's Eight Stages of Counselling","Carkhuff's Model of Helping","A Comparative Summary of the Models"],
 keys:["<b>Ivey (5):</b> empathic relationship → story & strength → goals → restory → action. A checklist, not a script.","<b>Egan (3):</b> current picture (“What's going on?”) → preferred picture (“What do I want?”) → way forward (“How do I get it?”). Relationship skills run underneath.","<b>Brammer & Shostrom (8):</b> relationship, clarification, structure, deepening, exploration, consolidation, planning, termination. Separates <b>structure</b> as its own stage.","<b>Carkhuff:</b> pre-helping <i>involving</i>, then exploring → understanding → acting. Named for what the <b>helpee</b> does.","All four share four movements. Brammer & Shostrom is the most granular, Carkhuff the most compressed."],
 tip:"Sessions 4 and 5 show Ivey's stages live: story → strengths → goals (videos, 75% by 3 Nov) → action. Cite them."},
{id:"focusing",n:"13",name:"Focusing",art:"focus",cap:"Clients are persons-in-relation and persons-in-community.",secs:["Focusing","Types of Focusing"],
 keys:["Moves counselling from an individual to a <b>systemic</b> lens.","Multimorbidity research: multiple concerns (especially low income) bring death <b>5–7 years earlier</b>.","<b>Seven foci:</b> client, main theme, others, mutual (“we”), counsellor, cultural/environmental/contextual (CEC), here and now.","<b>Nelida case:</b> refocusing from self-blame to “cultural oppression… internalized”, with family as a strength."],
 tip:"Seven foci memory aid: <b>C-M-O-M-C-C-H</b>: Client, Main theme, Others, Mutual, Counsellor, Cultural, Here-and-now."},
{id:"influencing",n:"14",name:"Influencing skills",art:"meaning",cap:"Clients generate meanings; reframes come from the counsellor.",secs:["Influencing Skills","Interpretation and Reflection of Meaning"],
 keys:["“Clients are the ‘deciders’”: influencing skills used <b>judiciously and sparingly</b>.","Include self-disclosure, feedback, logical consequences, directives, psychoeducation, reflection of meaning, interpretation/reframing.","<b>Reflection of meaning:</b> “What does ___ mean to you?”; values, goals, vision, from the client's own perspective.","<b>Interpretation/reframe:</b> a new frame from the counsellor (decisional, psychodynamic, multicultural).","<b>Viktor Frankl:</b> “the last of the human freedoms, to choose one's attitude”. Many see meaning as the most important influencing skill."],
 tip:"Session 4, T26: “What value does it hold for you?” is your own example of reflection of meaning."},
{id:"effective",n:"15",name:"The effective counsellor",art:"lenses",cap:"Three complementary entry points, one Rogerian base.",secs:["Characteristics of an Effective Counsellor","Comparing Gladding, Ivey, and Egan"],
 keys:["<b>Wampold (2001):</b> personal and interpersonal factors matter; techniques have relatively little effect. Clients value the therapist's personality (Lambert, 2011).","<b>Corey's characteristics:</b> identity, self-respect, openness to change, authenticity, humour, admitting mistakes, living in the present, cultural humility, interest in others, interpersonal skill, involvement, passion, healthy boundaries.","<b>Gladding's self-examination:</b> curious, self-aware, humorous, good listener, empathic, insightful, comfortable with power and intimacy. Counsellors “use themselves as instruments”.","<b>Gladding</b> = what counselling is · <b>Ivey</b> = what a counsellor does · <b>Egan</b> = what it should achieve."],
 tip:"End your viva answer with the synthesis line: a historically situated profession, a teachable set of skills, and an outcome-focused process, all on Rogers' foundation."},
{id:"refs",n:"16",name:"References",art:"books",cap:"The six sources your record draws on.",secs:["References"],keys:["Gladding (2018) · Ivey, Ivey & Zalaquett (2018) · Egan (2014) · Corey (2013) · Carkhuff (2008) · Rao (1981)."],tip:"Quote author and year every time. It's the fastest way to sound prepared."}
];
const STEM=["I hear you saying","Sounds like","Looks like the situation is","So, you're saying","If I understand correctly"];
const FEEL=["anxious","frustrated","relieved","overwhelmed","sad","excited","nervous","tired","proud","confused"];

/* ---------- Skill families ---------- */
const FAMS=[["Structuring",/structur|rapport-building/],["Open question",/\bopen\b/],["Closed question",/closed/],["Encourager",/encourager/],["Paraphrasing",/paraphras/],["Restatement",/restatement/],["Reflection of feeling",/reflection of feeling|^reflection$|reflection \(tentative/],["Reflection of meaning",/reflection of meaning/],["Summarisation",/summari/],["Clarification",/clarif/],["Confrontation",/confront/],["Feedback",/feedback/],["Focusing",/focusing/],["Checkout",/checkout/],["Verbal tracking",/tracking/],["Positive asset search",/asset|strength/],["Goal setting",/goal/],["Eliciting concreteness",/concreteness/],["Eliciting feelings",/eliciting feelings/]];
const fams=l=>{l=(l||"").toLowerCase();return FAMS.filter(([,r])=>r.test(l)).map(([f])=>f)};
const FDEF={"Structuring":"Setting up or closing the session: purpose, time, confidentiality, consent.","Open question":"Can't be answered in a few words; what, how, why, could.","Closed question":"Gets specifics in a few words; is, are, do.","Encourager":"Minimal prompts like “uh-huh”, nods, “okay” that keep the client talking.","Paraphrasing":"Distils the essence of what the client said, in the client's key words.","Restatement":"Repeats two or more of the client's exact words.","Reflection of feeling":"Names the emotion with a stem, a feeling label and context.","Reflection of meaning":"Explores the client's values: “What does it mean to you?”","Summarisation":"Pulls together a longer stretch of the session, often with feelings.","Clarification":"Checks or asks what the client meant.","Confrontation":"Points out a discrepancy, gently and without judgement.","Feedback":"Gives the client an observation, often about strengths.","Focusing":"Deliberately steers attention to a theme, goal or person.","Checkout":"Asks the client to confirm accuracy: “Is that right?”","Verbal tracking":"Stays on the client's topic.","Positive asset search":"Draws out strengths and resources.","Goal setting":"Turns the story into concrete, achievable goals.","Eliciting concreteness":"Asks for specifics or examples.","Eliciting feelings":"A question aimed at the client's emotions."};
const LISTEN=["Paraphrasing","Restatement","Reflection of feeling","Reflection of meaning","Summarisation","Encourager"];

/* ---------- Theory view ---------- */
let done=new Set(store.get("lr-done",[])),tcur=store.get("lr-topic","what");if(!TOPICS.some(t=>t.id===tcur))tcur="what";
function prog(){$("#prog").textContent=`${done.size}/${TOPICS.length} topics done`}
const blocks=b=>b.t==="p"?`<p>${esc(b.x)}</p>`:`<${b.t} class="items">${b.items.map(i=>`<li>${esc(i)}</li>`).join("")}</${b.t}>`;
function trail(){$("#trail").innerHTML=`<div class="grp">Introduction to counselling</div>`+TOPICS.map(t=>`<button data-id="${t.id}" aria-current="${t.id===tcur}"><span class="n">${t.n}</span><span>${t.name}</span>${done.has(t.id)?'<span class="tick">✓</span>':'<span></span>'}</button>`).join("")}
function topic(){
 const i=TOPICS.findIndex(t=>t.id===tcur),t=TOPICS[i];
 let h=`<div class="eyebrow">Theory · ${t.n} of ${TOPICS.length}</div><h2>${t.name}</h2><div class="plate">${ART[t.art]()}<div class="cap">${t.cap}</div></div>
 <div class="keys"><h3>Key points</h3><ul>${t.keys.map(k=>`<li>${k}</li>`).join("")}</ul></div>`;
 if(t.lab)h+=`<div class="card" id="labbox"></div>`;
 h+=`<div class="reading src">${t.secs.map(s=>SEC[s]).filter(Boolean).map((s,k)=>`${k||s.h!=="Counselling"?`<h3>${esc(s.h)}</h3>`:`<h3>Overview</h3>`}${s.blocks.map(blocks).join("")}`).join("")}</div>`;
 h+=`<div class="tip"><b>Viva tip.</b> ${t.tip}</div><div class="done-row"><button class="btn ${done.has(t.id)?"":"primary"}" id="mark">${done.has(t.id)?"Done ✓":"Mark as done"}</button>${TOPICS[i+1]?`<button class="btn" id="next">Next: ${TOPICS[i+1].name} →</button>`:""}</div>`;
 $("#tbody").innerHTML=h;
 if(t.lab)BUILD[t.lab]($("#labbox"));
 if(reduced())document.querySelectorAll("#tbody svg").forEach(s=>s.pauseAnimations&&s.pauseAnimations());
 $("#mark").onclick=()=>{done.has(t.id)?done.delete(t.id):done.add(t.id);store.set("lr-done",[...done]);trail();topic();prog()};
 if(TOPICS[i+1])$("#next").onclick=()=>{tgo(TOPICS[i+1].id);scrollTo(0,0)};
}
function tgo(id){tcur=id;store.set("lr-topic",id);trail();topic()}
$("#trail").onclick=e=>{const b=e.target.closest("button");if(b){tgo(b.dataset.id);scrollTo(0,0)}};

/* ---------- Builders ---------- */
const BUILD={
para(el){
 el.innerHTML=`<h3>Paraphrase builder</h3><p class="hint">Client (Session 4, C11): “For me, making notes is very important, because I cannot study everything. Just reading does not stick in the brain. You need to really write it down.”</p>
 <div class="row"><label class="f">1 · Stem<select id="ps">${STEM.map(s=>`<option>${s}</option>`).join("")}</select></label><label class="f">2 · Client's key words<input id="pk" value="making notes, reading doesn't stick"></label></div>
 <div class="row"><label class="f">3 · Essence<input id="pe" value="writing things down is how you really learn"></label><label class="f">4 · Checkout<select id="pc"><option>Is that right?</option><option>Did I get that?</option><option>Is that how you see it?</option></select></label></div>
 <div class="out" id="po"></div>`;
 const u=()=>$("#po").textContent=`“${$("#ps").value} ${$("#pk").value} matter to you, and ${$("#pe").value}. ${$("#pc").value}”`;
 el.querySelectorAll("input,select").forEach(x=>x.oninput=u);u();
},
rof(el){
 let picks=new Set(["anxious"]);
 el.innerHTML=`<h3>Reflection-of-feeling builder</h3><p class="hint">Client (Session 5, C11): “My mind just stops working. I'm not able to process what's happening. And then I start to panic.”</p>
 <div class="row"><label class="f">1 · Stem<select id="rs"><option>Sounds like you feel</option><option>I hear you are feeling</option><option>It seems you're</option><option>You look</option></select></label><label class="f">4 · Tense<select id="rt"><option value="now">Present</option><option value="past">Past</option></select></label></div>
 <div><span class="hint">2 · Feeling labels (pick one or two)</span><div class="chips" id="rf">${FEEL.map(f=>`<button aria-pressed="${picks.has(f)}">${f}</button>`).join("")}</div></div>
 <div class="row"><label class="f">3 · Context<select id="rc"><option>when</option><option>because</option><option>about</option></select></label><label class="f">&nbsp;<input id="rx" value="your mind freezes in the exam"></label><label class="f">5 · Checkout<select id="rk"><option>Is that right?</option><option>Am I close?</option><option>Does that fit?</option></select></label></div>
 <div class="out" id="ro"></div>`;
 const u=()=>{const f=[...picks];let stem=$("#rs").value;if($("#rt").value==="past")stem=stem.replace("feel","felt").replace("are feeling","were feeling").replace("you're","you were").replace("You look","You looked");$("#ro").textContent=`“${stem} ${f.length?f.join(" and "):"…"} ${$("#rc").value} ${$("#rx").value}. ${$("#rk").value}”`};
 $("#rf").onclick=e=>{const b=e.target.closest("button");if(!b)return;const f=b.textContent;picks.has(f)?picks.delete(f):picks.size<2&&picks.add(f);$("#rf").querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",picks.has(x.textContent)));u()};
 el.querySelectorAll("input,select").forEach(x=>x.oninput=u);u();
}};

/* ---------- Cases ---------- */
const SUM={
"0-1":"Intake and rapport. Hostel water shortage disrupting the morning routine; moving in with a friend; missing family; adjusts well to new places.",
"0-2":"Settled after the move. Commute stress, plan to get a licence, less me-time with chores. Goals: licence, me-time, a chores timetable.",
"0-3":"Recap and goal review. Coping with workload using skills from her previous college; closing with feedback on resilience.",
"0-4":"Exam blanking out and anxiety. Study methods explored, discrepancy confronted, values explored (skills vs marks, parents). Goal: find videos or AI notes-to-video. Live supervision.",
"0-5":"Exam follow-up. Bodily experience of panic (freeze and unfreeze), strengths (reading the paper first). Goal: cover 75% of concepts through videos by 3 November.",
"1-1":"Pro bono intake with structuring, consent and confidentiality. Compulsory competitions clashing with CA exams; class representative and event manager role. Goal: start preparing for January exams."};
let ccur=store.get("lr-case","0-1");if(ccur!=="0-all"&&!CASES.some((c,ci)=>c.sessions.some(s=>`${ci}-${s.n}`===ccur)))ccur="0-1";
function crail(){let h="";CASES.forEach((c,ci)=>{h+=`<div class="grp">Case ${ci+1} · Client ${c.initial}</div>`;if(ci===0)h+=`<button data-id="0-all" aria-current="${ccur==="0-all"}"><span class="n">★</span><span>Progress across sessions</span><span></span></button>`;c.sessions.forEach(s=>{const id=`${ci}-${s.n}`;h+=`<button data-id="${id}" aria-current="${id===ccur}"><span class="n">S${s.n}</span><span>${s.title} · ${s.date}</span><span></span></button>`})});$("#crail").innerHTML=h}
function count(s){const T=s.turns.filter(t=>t.who==="T"),c={};T.forEach(t=>fams(t.skill).forEach(f=>c[f]=(c[f]||0)+1));return {T:T.length,C:s.turns.filter(t=>t.who==="C").length,S:s.turns.filter(t=>t.who==="S").length,c}}
function barChart(c){const e=Object.entries(c).sort((a,b)=>b[1]-a[1]),m=Math.max(...e.map(x=>x[1]),1),h=e.length*26+20;
 return `<svg class="art" viewBox="0 0 640 ${h}" role="img" aria-label="Skill counts for this session">${e.map(([f,v],i)=>`<text x="190" y="${i*26+28}" text-anchor="end" font-size="12.5">${f}</text><rect x="200" y="${i*26+14}" width="${Math.max(4,v/m*380)}" height="18" rx="5" fill="${LISTEN.includes(f)?'var(--c)':f.includes("question")?'var(--t)':'var(--s)'}"/><text x="${206+v/m*380}" y="${i*26+28}" font-size="12" class="mono">${v}</text>`).join("")}</svg>`}
function overview(){
 const c=CASES[0],rows=c.sessions.map(s=>{const k=count(s);return {s,k,open:k.c["Open question"]||0,closed:k.c["Closed question"]||0,listen:LISTEN.reduce((n,f)=>n+(k.c[f]||0),0),types:Object.keys(k.c).length}});
 const mini=(title,key,colour,max)=>{const m=max||Math.max(...rows.map(r=>r[key]),1);return `<div class="stat"><span>${title}</span><svg class="art" viewBox="0 0 200 110" role="img" aria-label="${title} by session">${rows.map((r,i)=>`<rect x="${12+i*38}" y="${88-r[key]/m*70}" width="26" height="${Math.max(2,r[key]/m*70)}" rx="4" fill="${colour}"/><text x="${25+i*38}" y="${82-r[key]/m*70}" text-anchor="middle" font-size="11" class="mono">${r[key]}</text><text x="${25+i*38}" y="104" text-anchor="middle" font-size="10" class="mut">S${r.s.n}</text>`).join("")}</svg></div>`};
 $("#cbody").innerHTML=`<div class="eyebrow">Case 1 · Client ${c.initial} · ${c.age} · ${c.occupation}</div><h2>How the sessions changed</h2>
 <p class="reading">Counted from the skill labels in your record. Session 1 leans on closed questions; by Sessions 4 and 5 paraphrasing, reflection and summarising carry the session, matching what your reflections describe.</p>
 <div class="stats">${mini("Closed questions","closed","var(--t)")}${mini("Open questions","open","var(--t)")}${mini("Listening responses","listen","var(--c)")}${mini("Different skills used","types","var(--s)")}</div>
 <div class="tbl"><table><thead><tr><th>Session</th><th>Date</th><th>Duration</th><th>Counsellor turns</th><th>Focus</th></tr></thead><tbody>${rows.map(r=>`<tr><td><b>S${r.s.n}</b></td><td style="white-space:nowrap">${r.s.date}</td><td>${r.s.duration}</td><td>${r.k.T}</td><td>${SUM["0-"+r.s.n]}</td></tr>`).join("")}</tbody></table></div>
 <div class="tip"><b>Viva angle.</b> Describe your growth in one line per session: casual intake → restatements and closed questions → conscious paraphrasing → confrontation and reflection of meaning under supervision → bodily awareness and concrete goal setting.</div>`;
}
function session(){
 if(ccur==="0-all")return overview();
 const [ci,sn]=ccur.split("-").map(Number),c=CASES[ci],s=c.sessions.find(x=>x.n===sn)||c.sessions[0],k=count(s);
 const allF=Object.keys(k.c);let filt=null;
 const key=s.turns.filter(t=>t.who==="T"&&/summari|confront|reflection of meaning|asset|goal/i.test(t.skill));
 const sup=s.turns.filter(t=>t.who==="S");
 const msg=t=>`<div class="msg ${t.who}" data-f="${esc(fams(t.skill).join("|"))}"><div class="meta"><span class="who">${t.who==="T"?"Counsellor":t.who==="C"?"Client "+c.initial:"Supervisor (live)"} · ${t.id}</span><span>${t.time||""}</span></div>${esc(t.text)}${t.skill?`<div class="skills">${esc(t.skill).split(/[;,]\s*/).map(x=>`<span class="chip">${x}</span>`).join("")}</div>`:""}</div>`;
 let h=`<div class="eyebrow">Case ${ci+1} · Client ${c.initial} · ${c.age} · ${c.occupation}</div><h2>${s.title}</h2>
 <div class="stats"><div class="stat"><b style="font-size:1.45rem;white-space:nowrap">${s.date}</b><span>date</span></div><div class="stat"><b>${s.duration}</b><span>duration</span></div><div class="stat"><b>${k.T}</b><span>counsellor turns</span></div><div class="stat"><b>${k.C}</b><span>client turns</span></div>${k.S?`<div class="stat"><b>${k.S}</b><span>supervisor prompts</span></div>`:""}</div>
 <div class="card"><h3>What this session was about</h3><p>${SUM[ccur]||""}</p></div>
 <div class="card"><h3>Skills used</h3><div class="legend"><span><i style="background:var(--t)"></i>questions</span><span><i style="background:var(--c)"></i>listening responses</span><span><i style="background:var(--s)"></i>other skills</span></div>${barChart(k.c)}</div>`;
 if(key.length)h+=`<div class="card"><h3>Key moments to quote</h3><div class="chat">${key.map(msg).join("")}</div></div>`;
 if(sup.length)h+=`<div class="card"><h3>Live supervisor prompts</h3><div class="chat">${sup.map(msg).join("")}</div></div>`;
 h+=`<div class="card"><h3>Personal reflection</h3><p>${esc(s.reflection)}</p>${s.supervisor?`<h4>Supervisor feedback</h4><p>${esc(s.supervisor)}</p>`:""}</div>
 <div class="card"><h3>Full transcript</h3><p class="hint">Tap a skill to highlight every turn where it was used.</p><div class="chips" id="sf">${allF.map(f=>`<button aria-pressed="false">${f}</button>`).join("")}</div><div class="chat" id="tx">${s.turns.map(msg).join("")}</div></div>`;
 $("#cbody").innerHTML=h;
 $("#sf").onclick=e=>{const b=e.target.closest("button");if(!b)return;filt=filt===b.textContent?null:b.textContent;$("#sf").querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x.textContent===filt));document.querySelectorAll("#tx .msg").forEach(m=>m.classList.toggle("dim",!!filt&&!m.dataset.f.split("|").includes(filt)))};
}
function cgo(id){ccur=id;store.set("lr-case",id);crail();session()}
$("#crail").onclick=e=>{const b=e.target.closest("button");if(b){cgo(b.dataset.id);scrollTo(0,0)}};

/* ---------- Skills lab: name that skill ---------- */
const GAMEF=["Open question","Closed question","Encourager","Paraphrasing","Reflection of feeling","Reflection of meaning","Summarisation","Confrontation","Feedback","Focusing","Structuring","Clarification","Restatement"];
const POOL=[];CASES.forEach((c,ci)=>c.sessions.forEach(s=>s.turns.forEach((t,i)=>{if(t.who!=="T"||!t.skill)return;const f=fams(t.skill).filter(x=>GAMEF.includes(x));if(!f.length)return;const prev=[...s.turns.slice(0,i)].reverse().find(x=>x.who==="C");POOL.push({t,f,prev,where:`Case ${ci+1} · ${s.title} · ${t.id}`})})));
let g={q:[],i:0,r:0};
function lab(){
 const pick=()=>{const byF={};POOL.forEach(p=>{const k=p.f[0];(byF[k]=byF[k]||[]).push(p)});const fs=shuffle(Object.keys(byF));const out=[];while(out.length<12){for(const f of fs){if(out.length>=12)break;const a=byF[f];out.push(a[Math.random()*a.length|0])}}return shuffle(out)};
 const start=()=>{g={q:pick(),i:0,r:0};draw()};
 const draw=()=>{
  if(g.i>=g.q.length){const best=Math.max(store.get("lr-gbest",0),g.r);store.set("lr-gbest",best);$("#lab").innerHTML=`<div class="eyebrow">Name that skill</div><div class="score">${g.r}/${g.q.length}</div><p>${g.r>=10?"You can label a verbatim like your supervisor.":g.r>=7?"Solid. Watch combos like paraphrase + checkout.":"Re-read the listening sequence topics, then go again."} Best: ${best}/12.</p><button class="btn primary" id="again">New round</button>`;$("#again").onclick=start;return}
  const p=g.q[g.i],right=p.f[0],opts=shuffle([right,...shuffle(GAMEF.filter(x=>!p.f.includes(x))).slice(0,3)]);let answered=false;
  $("#lab").innerHTML=`<div class="eyebrow">Skills lab · name that skill · ${g.i+1}/${g.q.length} · score ${g.r}</div><h2 style="font-size:2.2rem">Which skill is the counsellor using?</h2><div class="bar"><i style="width:${g.i/g.q.length*100}%"></i></div>
  <div class="chat" style="margin-top:16px">${p.prev?`<div class="msg C"><div class="meta"><span class="who">Client</span></div>${esc(p.prev.text)}</div>`:""}<div class="msg T"><div class="meta"><span class="who">Counsellor</span><span>${p.t.time||""}</span></div>${esc(p.t.text)}</div></div>
  <div class="opts">${opts.map(o=>`<button>${o}</button>`).join("")}</div><p id="why"></p><div class="row" id="nx"></div>`;
  $("#lab .opts").onclick=e=>{const b=e.target.closest("button");if(!b||answered)return;answered=true;const ok=p.f.includes(b.textContent);if(ok)g.r++;[...$("#lab .opts").children].forEach(x=>{if(p.f.includes(x.textContent))x.classList.add("right");x.disabled=true});if(!ok)b.classList.add("wrong");
   $("#why").innerHTML=`<b>${ok?"Correct.":"Not quite."}</b> Your record labels this <b>${esc(p.t.skill)}</b>. ${FDEF[right]} <span class="hint">(${p.where})</span>`;$("#nx").innerHTML=`<button class="btn primary" id="nq">${g.i+1<g.q.length?"Next":"See score"}</button>`;$("#nq").onclick=()=>{g.i++;draw()};$("#nq").focus()};
 };
 start();
}

/* ---------- Flashcards ---------- */
const CARDS=[
["2010 consensus definition of counselling","“A professional relationship that empowers diverse individuals, families, and groups to accomplish mental health, wellness, education, and career goals.” (20/20, 29 associations)"],
["Four implications of the definition","Wellness not just pathology · individuals, groups, families · diverse and multicultural · a dynamic process (“rehearsal for action”)."],
["Counselling vs psychotherapy","Therapy: past, insight, detached, expert, 20–40 sessions over 6 months–2 years. Counselling: present, change, 8–12 sessions. Now blurred."],
["Coaching","Individual consultation for functioning clients; future and performance focused; Board Certified Coach."],
["Egan's three goals","Life-enhancing outcomes · learning to help oneself · prevention mentality."],
["Three functions of ethical codes","Self-regulation instead of government control · less internal disagreement · protection from malpractice (Van Hoose & Kottler)."],
["Six ethical principles","Beneficence, nonmaleficence, autonomy, justice, fidelity, veracity."],
["Swanson's four guidelines","Honesty · client's best interest · no malice or personal gain · able to justify the action."],
["Mandatory vs aspirational ethics","Avoiding harm and rule-breaking vs aspiring to the highest ideals (Handelsman et al., via Egan)."],
["Division 17","Society of Counseling Psychology, APA, 1952. Counselling psychology = normal growth (Super, 1955)."],
["Founder of guidance","Frank Parsons: Boston Vocational Bureau 1908; Choosing a Vocation 1909."],
["Clifford Beers","A Mind That Found Itself (1908); impetus for the mental health movement."],
["E. G. Williamson","1930s; first counselling theory; directive trait-and-factor; Minnesota point of view."],
["Rogers 1942","Counseling and Psychotherapy: non-directive, client-centred; guidance “disappeared”."],
["NDEA 1958","National Defense Education Act after Sputnik; quadrupled school counsellors."],
["Rapport (Rao)","A measurable, purposeful state of mutual trust, comfort and cooperative engagement, built deliberately."],
["Rogers' six conditions","Contact · client incongruent · therapist congruent · UPR · empathy · communicated minimally."],
["UPR vs approval","UPR accepts the person's right to their feelings; it isn't approval of all behaviour."],
["Empathy vs sympathy","Empathy grasps the client's world without losing separateness; sympathy is feeling sorry."],
["Two assumptions behind the core conditions","Actualizing tendency · conditions are necessary and sufficient."],
["Ivey's pyramid, base to apex","Foundations → attending & observation → basic listening sequence → five stages → influencing → integration & transcendence."],
["3 V's + B","Visual/eye contact · vocal qualities · verbal tracking · body language."],
["Brain areas lit by good listening","Ventral striatum (reward) · medial PFC (cognitive empathy) · right anterior insula (affective empathy)."],
["Micro vs macro nonverbals","Micro: as fast as 1/15 s, concealed emotion. Macro: easy to see, e.g. eyes down."],
["SOLER","Squarely · Open · Lean · Eye contact · Relaxed (Egan). SOLAR for visually impaired: Aim at the voice."],
["What / how / why / could","Facts · process or feelings · reasons · most open."],
["Question pitfalls","Bombardment · multiple questions · disguised statements · why questions."],
["Four dimensions of a paraphrase","Stem · key words · essence · checkout."],
["Five parts of a reflection of feeling","Stem · feeling label · context · tense · checkout."],
["When to summarise","Start (review), middle (consolidate), end (close)."],
["Ivey's five stages","Empathic relationship · story & strength · goals · restory · action."],
["Egan's three stages","Current picture · preferred picture · way forward."],
["Brammer & Shostrom's eight stages","Relationship · clarification · structure · deepening · exploration · consolidation · planning · termination."],
["Carkhuff's phases","Involving (pre-helping) · exploring · understanding · acting."],
["Seven types of focus","Client · main theme · others · mutual · counsellor · cultural/contextual · here and now."],
["Reflection of meaning vs reframe","Meaning comes from the client; a reframe comes from the counsellor."],
["Wampold (2001)","Personal and interpersonal factors matter; technique has relatively little effect on outcome."],
["Gladding vs Ivey vs Egan","What counselling is · what a counsellor does · what it should achieve."],
["Session 4 supervisor feedback","Explore physical panic symptoms; use body mapping; explore more of the client's story."],
["Case 2 lesson from your reflection","J's problems were situational, so use opportunity-focused counselling instead of searching for pathology."]
];
let deck=[],di=0,again=[];
function buildDeck(list){deck=list||shuffle(CARDS);di=0;again=[];drawCard()}
function drawCard(){
 let h=`<div class="eyebrow">Flashcards · ${CARDS.length} cards</div><h2>Say it out loud, then flip</h2>`;
 if(di>=deck.length)h+=`<div class="face" style="position:static;min-height:180px;margin:16px 0"><div class="q">Deck done</div><div>${deck.length-again.length} of ${deck.length} known.</div></div><div class="row">${again.length?'<button class="btn primary" id="redo">Review missed</button>':""}<button class="btn" id="restart">Shuffle & restart</button></div>`;
 else{const c=deck[di];h+=`<div class="bar"><i style="width:${di/deck.length*100}%"></i></div><div class="fc" id="fc" tabindex="0" role="button" aria-label="Flip card"><div class="fc-in"><div class="face"><span class="eyebrow">${di+1} / ${deck.length}</span><div class="q">${c[0]}</div><span class="hint">Tap or press Space</span></div><div class="face back"><span class="eyebrow">Answer</span><div>${c[1]}</div></div></div></div><div class="row"><button class="btn" id="miss">Still learning (←)</button><button class="btn primary" id="got">Got it (→)</button></div>`}
 $("#cards").innerHTML=h;
 if(di>=deck.length){$("#restart").onclick=()=>buildDeck();if(again.length)$("#redo").onclick=()=>buildDeck(shuffle(again));return}
 $("#fc").onclick=()=>$("#fc").classList.toggle("flip");$("#got").onclick=()=>{di++;drawCard()};$("#miss").onclick=()=>{again.push(deck[di]);di++;drawCard()};
}
document.addEventListener("keydown",e=>{if($("#cards").hidden||!$("#fc")||e.target.matches("input,select,textarea"))return;if(e.code==="Space"){e.preventDefault();$("#fc").classList.toggle("flip")}if(e.key==="ArrowRight")$("#got")?.click();if(e.key==="ArrowLeft")$("#miss")?.click()});

/* ---------- Viva quiz ---------- */
const QUIZ=[
["The 2010 consensus definition came from which process?",["20/20: A Vision for the Future of Counseling","The Minnesota point of view","NDEA","Division 17 charter"],0,"29 associations agreed it over three years."],
["“Counseling is a rehearsal for action” is Gladding quoting…",["Rogers","Casey (1996)","Egan","Tyler"],1,"Casey, 1996."],
["Which is NOT one of Egan's three goals?",["Life-enhancing outcomes","Learning to help oneself","Prevention mentality","Insight into the past"],3,"Insight into the past is the classic psychotherapy emphasis."],
["Which principle is often treated as primary?",["Beneficence","Nonmaleficence","Justice","Fidelity"],1,"It covers preventing future harm and the duty to act."],
["Veracity means…",["Fairness","Keeping promises","Truthfulness","Self-determination"],2,"Fidelity = promises; justice = fairness; autonomy = self-determination."],
["Division 17 was formed in…",["1942","1952","1958","1913"],1,"1952, alongside APGA."],
["Who is called the founder of guidance?",["Jesse B. Davis","Frank Parsons","Clifford Beers","E. G. Williamson"],1,"Boston Vocational Bureau, 1908."],
["Williamson's approach was…",["Non-directive","Trait-and-factor, directive","Psychodynamic","Solution-focused"],1,"The Minnesota point of view."],
["Rogers' 1942 book was…",["On Becoming a Person","Counseling and Psychotherapy","Client-Centered Therapy","A Way of Being"],1,"It challenged Williamson and Freud."],
["NDEA (1958) was a response to…",["World War II","Sputnik I","The Great Depression","The 20/20 process"],1,"It quadrupled school counsellors."],
["The Indian reference text cited is by…",["S. Narayana Rao","Udai Pareek","Sudhir Kakar","Girishwar Misra"],0,"Counselling Psychology, 1981."],
["Empathy differs from sympathy because empathy…",["Feels sorry for the client","Grasps the client's world without losing separateness","Approves of behaviour","Gives advice"],1,"Corey: empathy is not sympathy."],
["UPR means…",["Approving all behaviour","Caring without judging the client as good or bad","Agreeing with the client","Praising the client"],1,"Acceptance, not approval."],
["What sits at the apex of Ivey's pyramid?",["Attending","Influencing skills","Integration, personal style, transcendence","Ethics"],2,"Ethics and multicultural competence are the base."],
["“3 V's + B” stands for…",["Voice, vision, verbal, behaviour","Visual, vocal, verbal tracking, body language","Values, vision, verbs, beliefs","Validation, vocal, visual, breathing"],1,"Ivey's attending behaviour."],
["Micro nonverbal expressions can last as little as…",["1/2 second","1/15 second","2 seconds","1/100 second"],1,"Matsumoto et al. (2011)."],
["In SOLER, L stands for…",["Listen","Lean towards the client","Look","Language"],1,"Squarely, Open, Lean, Eye contact, Relaxed."],
["SOLAR replaces eye contact with…",["Attention","Aim towards the client's voice","Acceptance","Affirmation"],1,"For visually impaired clients."],
["Which question type is most open?",["What","Why","Could","Is"],2,"Could/would explicitly lets the client decline."],
["“Don't you think you should study more?” is an example of…",["Open question","Question as disguised statement","Reflection of feeling","Paraphrase"],1,"Ivey: if you mean a statement, don't frame it as a question."],
["The four dimensions of a paraphrase are…",["Stem, key words, essence, checkout","Stem, feeling, context, tense","Open, closed, why, could","Story, goals, restory, action"],0,"Reflection of feeling adds feeling label, context and tense."],
["Ivey calls the most important cognitive empathic skill…",["Summarizing","Paraphrasing","Encouraging","Questioning"],1,"Paraphrasing."],
["Egan's Stage II asks…",["What's going on?","What do I need or want?","How do I get it?","Who am I?"],1,"Preferred picture."],
["Which model separates structure into its own stage?",["Ivey","Egan","Brammer & Shostrom","Carkhuff"],2,"Stage 3: structure."],
["Carkhuff's phases are named for what the…",["Helper does","Helpee does","Supervisor does","Family does"],1,"Exploring, understanding, acting."],
["“I am I and my circumstances” is quoted for which skill?",["Focusing","Paraphrasing","Confrontation","Encouraging"],0,"Ortega y Gasset, in Ivey's focusing chapter."],
["Reflection of meaning is anchored in the work of…",["Viktor Frankl","Carl Jung","Albert Ellis","Aaron Beck"],0,"The last human freedom: choosing one's attitude."],
["Wampold (2001) found that outcome depends most on…",["Techniques","Personal and interpersonal factors","Number of sessions","Theory used"],1,"Techniques have relatively little effect."],
["In Session 4, what did your supervisor suggest for exam panic?",["Thought records","Body mapping","Free association","Homework sheets"],1,"Track where stress sits in the body."],
["Your Case 2 reflection says J's problems were…",["Pathological","Situational, so use opportunity-focused counselling","Family-related","Unclear"],1,"Build on strengths, manage the schedule."]
];
let qs=[],qi=0,qr=0;
function startQuiz(){qs=shuffle(QUIZ).slice(0,15).map(q=>({q:q[0],o:shuffle(q[1].map((t,k)=>({t,ok:k===q[2]}))),why:q[3]}));qi=0;qr=0;drawQ()}
function drawQ(){
 if(qi>=qs.length){const p=Math.round(qr/qs.length*100),best=Math.max(p,store.get("lr-qbest",0));store.set("lr-qbest",best);$("#quiz").innerHTML=`<div class="eyebrow">Result</div><div class="score">${qr}/${qs.length}</div><p>${p>=80?"Viva ready.":p>=50?"Close. Revisit the topics you missed.":"Work through the theory topics first."} Best: ${best}%.</p><button class="btn primary" id="qa">New quiz</button>`;$("#qa").onclick=startQuiz;return}
 const q=qs[qi];let a=false;
 $("#quiz").innerHTML=`<div class="eyebrow">Viva question ${qi+1} of ${qs.length} · score ${qr}</div><div class="bar" style="margin:10px 0"><i style="width:${qi/qs.length*100}%"></i></div><h2 style="font-size:2rem">${q.q}</h2><div class="opts">${q.o.map((o,k)=>`<button data-k="${k}">${o.t}</button>`).join("")}</div><p class="hint" id="qy"></p><div class="row" id="qn"></div>`;
 $("#quiz .opts").onclick=e=>{const b=e.target.closest("button");if(!b||a)return;a=true;const p=q.o[+b.dataset.k];[...$("#quiz .opts").children].forEach((x,k)=>{if(q.o[k].ok)x.classList.add("right");x.disabled=true});if(p.ok)qr++;else b.classList.add("wrong");$("#qy").textContent=(p.ok?"Correct. ":"Not quite. ")+q.why;$("#qn").innerHTML=`<button class="btn primary" id="nq">${qi+1<qs.length?"Next":"See result"}</button>`;$("#nq").onclick=()=>{qi++;drawQ()};$("#nq").focus()};
}

/* ---------- Modes ---------- */
let labStarted=false;
function mode(m){
 document.querySelectorAll("nav button").forEach(b=>b.setAttribute("aria-selected",b.dataset.mode===m));
 ["theory","cases","lab","cards","quiz"].forEach(id=>$("#"+id).hidden=id!==m);
 if(m==="cases"){crail();session()}
 if(m==="lab"&&!labStarted){labStarted=true;lab()}
 scrollTo(0,0);
}
document.querySelector("nav").onclick=e=>{const b=e.target.closest("button");if(b)mode(b.dataset.mode)};
trail();topic();prog();buildDeck();startQuiz();
