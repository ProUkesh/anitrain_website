"use client";
import { useEffect, useState, type ChangeEvent } from "react";
import s from "./store.module.css";
const products = [
  { id: "tee", name: "Oversized Tee", price: 39.99, path: "M165 90 195 76 Q230 108 265 76 L295 90 376 154 343 216 314 191 319 423 141 423 146 191 117 216 84 154Z" },
  { id: "hoodie", name: "Training Hoodie", price: 59.99, path: "M146 95 196 73 Q230 103 264 73 L314 95 379 172 346 212 314 180 318 424 142 424 146 180 114 212 81 172Z" },
  { id: "tank", name: "Training Tank", price: 29.99, path: "M171 86 Q202 116 230 116 Q258 116 289 86 L315 115 301 423 159 423 145 115Z" }
];
const colors = [{name:"Midnight",hex:"#181d20"},{name:"Bone",hex:"#ebe6dc"},{name:"Burgundy",hex:"#713b48"}];
export default function Store() {
  const [p,setP]=useState(0), [color,setColor]=useState(colors[0].hex), [size,setSize]=useState("M");
  const [words,setWords]=useState("TRAIN YOUR ARC"),[position,setPosition]=useState("center");
  const [ink,setInk]=useState("#d8ff3e"),[logo,setLogo]=useState(true),[side,setSide]=useState("front");
  const [art,setArt]=useState<string|null>(null),[error,setError]=useState("");
  useEffect(()=>()=>{if(art)URL.revokeObjectURL(art)},[art]);
  function onFile(e:ChangeEvent<HTMLInputElement>) {
    const file=e.target.files?.[0]; if(!file)return;
    if(!["image/png","image/jpeg","image/webp"].includes(file.type)||file.size>3145728){setError("Use PNG, JPG or WebP under 3MB.");return}
    setError("");setArt(URL.createObjectURL(file));
  }
  return <main className={s.root}>
    <nav className={s.nav}><a href="/">◈ ANITRAIN <small>STORE LAB</small></a><span>DESIGN STUDIO PREVIEW</span></nav>
    <div className={s.wrap}><header className={s.head}><p>WEAR YOUR TRAINING ARC</p><h1>WEAR YOUR <em>STORY.</em></h1>
      <div>Customize your clothing, add your words, and preview original artwork. This is a prototype—checkout is not enabled.</div></header>
    <section className={s.studio} aria-label="Product customizer">
      <div className={s.display}><div className={s.top}>LIVE PREVIEW <span>01 / CUSTOMIZER</span></div>
        <svg viewBox="0 0 460 475" className={s.preview} role="img" aria-label={products[p].name+" "+side+" preview"}>
          <ellipse cx="230" cy="445" rx="130" ry="15" fill="#000" opacity=".22"/>
          {p===1&&<path d="M166 97 Q164 22 230 24 Q296 22 294 97 L270 136 191 136Z" fill={color} stroke="#888"/>}
          <path d={products[p].path} fill={color} stroke="#ffffff33" strokeWidth="3"/>
          {logo&&<text x={position==="chest"&&side==="front"?190:230} y={position==="chest"&&side==="front"?192:222}
            textAnchor="middle" fill={ink} fontWeight="900" fontSize={position==="chest"&&side==="front"?13:24}>ANITRAIN</text>}
          <text x="230" y={logo?268:225} textAnchor="middle" fill={ink} fontWeight="800" fontSize={Math.max(12,22-words.length*.35)}>{words.toUpperCase()}</text>
          {art&&<image href={art} x="190" y="287" width="80" height="80"/>}
        </svg>
        <div className={s.switch}><button aria-pressed={side==="front"} onClick={()=>setSide("front")}>Front</button><button aria-pressed={side==="back"} onClick={()=>setSide("back")}>Back</button></div>
        <small>Illustrative silhouette only. Exact print zones and final pricing require supplier validation.</small>
      </div>
      <div className={s.controls}><p className={s.accent}>MAKE IT YOURS</p><h2>Design your fit.</h2>
        <label>01 — GARMENT</label><div className={s.choices}>{products.map((g,i)=><button key={g.id} aria-pressed={p===i} onClick={()=>setP(i)}>{g.name}</button>)}</div>
        <label>02 — FABRIC COLOR</label><div className={s.colors}>{colors.map(c=><button key={c.hex} title={c.name} aria-label={c.name} aria-pressed={color===c.hex} onClick={()=>setColor(c.hex)} style={{background:c.hex}}/>)}</div>
        <label htmlFor="ani-size">03 — SIZE</label><select id="ani-size" value={size} onChange={e=>setSize(e.target.value)}>{["XS","S","M","L","XL","2XL"].map(v=><option key={v}>{v}</option>)}</select>
        <label htmlFor="ani-words">04 — YOUR WORDS</label><input id="ani-words" maxLength={22} value={words} onChange={e=>setWords(e.target.value)}/>
        <label>05 — PRINT OPTIONS</label><div className={s.check}><input type="checkbox" checked={logo} onChange={e=>setLogo(e.target.checked)}/> ANITRAIN branding</div>
        <div className={s.dual}><select aria-label="Print position" value={position} onChange={e=>setPosition(e.target.value)}><option value="center">Center logo</option><option value="chest">Left chest logo</option></select>
        <select aria-label="Ink color" value={ink} onChange={e=>setInk(e.target.value)}><option value="#d8ff3e">Lime ink</option><option value="#ffffff">White ink</option><option value="#171717">Black ink</option></select></div>
        <label htmlFor="ani-art">06 — ORIGINAL ARTWORK</label><input id="ani-art" type="file" accept="image/png,image/jpeg,image/webp" onChange={onFile}/>
        {error&&<p role="alert" className={s.error}>{error}</p>}{art&&<button onClick={()=>setArt(null)}>Remove artwork</button>}
        <small>File stays in this browser preview. Upload only artwork you own or have permission to use.</small>
        <div className={s.buy}><div><small>ILLUSTRATIVE PRICE</small><strong>${products[p].price.toFixed(2)}</strong><small>Shipping & supplier quote not included</small></div>
          <button disabled>CHECKOUT COMING SOON</button></div>
      </div>
    </section></div>
  </main>;
}
