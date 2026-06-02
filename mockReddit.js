// mockReddit.js — simulated Reddit data
// Replace with real Reddit API calls once OAuth is set up

const MOCK_REDDIT = {
  "r/analog": {
    desc: "film photography",
    tags: ["traditional", "dark", "chaos"],
    posts: [
      {
        title: "Shot this on expired 400TX, wasn't expecting the grain to look like this",
        body: "Found a roll in my dad's old camera bag. 2003 expiry date. The grain is almost painterly in some frames — nothing I could replicate digitally.",
        comments: [
          "That kind of grain you can't fake in Lightroom.",
          "Expired film has this quality of time already embedded in it.",
          "The chemical decay is doing as much work as you are."
        ]
      },
      {
        title: "Double exposure accident turned into the best shot I've ever taken",
        body: "Forgot to wind the film. The overlap was a parking lot and my kitchen window. I'm going to start doing this on purpose.",
        comments: [
          "The mundane layered on the mundane becomes something else entirely.",
          "Accidents are just unplanned collaborations with the medium."
        ]
      },
      {
        title: "All my shots from a disposable I found in a charity shop",
        body: "Someone else's summer, 1998. I had them developed without looking up what might be on them. Felt like reading someone's diary.",
        comments: [
          "Found film is one of the strangest forms of found art.",
          "The people in these photos don't know you're looking at them.",
          "This is why I can't throw away old cameras without developing the film first."
        ]
      }
    ]
  },

  "r/Ceramics": {
    desc: "pottery & clay",
    tags: ["traditional", "optimistic", "minimalism"],
    posts: [
      {
        title: "My first woodfire piece came out nothing like I planned and I love it",
        body: "The ash glaze did something completely unexpected on the shoulder. Fire has better taste than me.",
        comments: [
          "This is exactly why woodfire is addictive. You're collaborating with chaos.",
          "The unintentional is often the most honest part of the work.",
          "Control is overrated in ceramics. The kiln knows things you don't."
        ]
      },
      {
        title: "Yunomi inspired by concrete textures from my city",
        body: "I kept photographing cracked pavements for months before I understood why. This is why.",
        comments: [
          "The city as sketchbook. I do this too.",
          "There's something right about bringing urban texture into a vessel you drink from."
        ]
      },
      {
        title: "Six months of making the same cup trying to understand centering",
        body: "I have 47 failed yunomi. They're all slightly wrong in different ways. I think I'm finally getting it.",
        comments: [
          "The failures are the education. Keep them all.",
          "Centering took me two years. One day it just clicks.",
          "47 cups of accumulated understanding."
        ]
      }
    ]
  },

  "r/collage": {
    desc: "collage art",
    tags: ["chaos", "dark", "traditional"],
    posts: [
      {
        title: "Using medical diagrams from 1962 as source material — is this done to death?",
        body: "I keep seeing it everywhere but I also can't stop cutting them up. The clinical language next to the body feels permanently strange to me.",
        comments: [
          "Anything is done to death until you do it in a way that's actually yours.",
          "The question isn't the source, it's what you do with the body parts.",
          "Nope. There's something permanently interesting about clinical language next to flesh."
        ]
      },
      {
        title: "Cut up a whole National Geographic from 1978, result inside",
        body: "Took me three sessions. The color palette of late 70s printing is insane — that warm orange-brown that only that era has.",
        comments: [
          "That warm orange-brown that only that era has.",
          "The paper texture alone is worth it.",
          "70s Nat Geo is the best collage material. The cyan dropout on skin tones is irreplaceable."
        ]
      },
      {
        title: "Trying to make collage that doesn't look like collage",
        body: "Seamless joins, matching paper grain, obsessive color matching. Not sure if this is interesting or just technically difficult for no reason.",
        comments: [
          "The tension between the seam and the seamlessness is the work.",
          "Trompe l'oeil collage has a long history. You're in good company.",
          "Why hide it though? The cut is the whole point."
        ]
      }
    ]
  },

  "r/liminalspaces": {
    desc: "uncanny empty spaces",
    tags: ["dark", "contemporary", "minimalism"],
    posts: [
      {
        title: "The break room at 4am",
        body: "I work nights. Nobody else is ever here. The fluorescent hum is the only sound. I've started looking forward to it.",
        comments: [
          "There's a specific loneliness that only exists in rooms designed for groups when you're alone in them.",
          "The coffee machine light is doing a lot of work in this photo.",
          "4am in a break room is its own timezone."
        ]
      },
      {
        title: "Hotel corridor, somewhere in Łódź, Poland",
        body: "The carpet pattern. The specific shade of beige that has no name. The emergency exit sign at the far end that feels very far away.",
        comments: [
          "The carpet pattern. Always the carpet pattern.",
          "Something about Eastern European brutalist interiors feels like a dream you half-remember.",
          "That specific shade of beige should have a name."
        ]
      },
      {
        title: "The gap between escalators in a shopping mall, 11pm",
        body: "Technically public space. Technically open. Nobody there. The music still playing.",
        comments: [
          "Architecture designed for crowds is haunted when empty.",
          "The music continuing with no audience is the detail that gets me."
        ]
      }
    ]
  },

  "r/abandoned": {
    desc: "decay & ruins",
    tags: ["dark", "traditional", "chaos"],
    posts: [
      {
        title: "Sanatorium in the mountains, untouched since 1991",
        body: "Personal items still on the windowsills. Calendars. A child's shoe. Whoever left didn't know they were leaving for the last time.",
        comments: [
          "Objects outlive the context that made them meaningful. That's the horror and the beauty.",
          "Whoever left that shoe behind — they had a whole life.",
          "The calendar stopped. Everything else kept going without them."
        ]
      },
      {
        title: "Factory floor, northern England",
        body: "The light comes through the broken roof in a way that feels almost staged. Nature doing better cinematography than most directors.",
        comments: [
          "Ruin as natural light studio.",
          "The industrial scale of it makes me feel very small in a good way.",
          "Post-industrial light is its own aesthetic category."
        ]
      },
      {
        title: "Entire apartment left intact — dishes in the sink, plants long dead",
        body: "Estate clearance job. Owner died alone, wasn't found for three weeks. I asked if I could photograph before we started. They said yes.",
        comments: [
          "The plants are the part I can't stop thinking about.",
          "Thank you for asking permission. For treating it with that weight.",
          "Someone's whole life compressed into a morning's work."
        ]
      }
    ]
  },

  "r/VintageAds": {
    desc: "old advertisements",
    tags: ["traditional", "chaos", "optimistic"],
    posts: [
      {
        title: "1967 ad for a tranquilizer. The copy is something else.",
        body: "The woman in the illustration looks absolutely dissociated. The tagline says 'for the tension of modern life.' Modern life in 1967.",
        comments: [
          "The pathologizing of just... being a woman with feelings.",
          "Modern life in 1967 vs modern life now. We didn't slow down, we sped up.",
          "The illustration style is doing so much heavy lifting here."
        ]
      },
      {
        title: "Soviet-era packaging design, found at a flea market in Kraków",
        body: "The typography on these is making me lose my mind a little. Economic constraint as design system.",
        comments: [
          "That red is so specific. You can't quite reproduce it digitally.",
          "The simplicity was economic necessity and it turned into aesthetic perfection.",
          "Constraint produces clarity. Every design school knows this. Few practice it."
        ]
      },
      {
        title: "American car ads 1958–1962 — the optimism is almost violent",
        body: "Every single ad is a promise of a future that was already starting to not exist. The colors. The fins. The absolute certainty.",
        comments: [
          "Confidence as design language.",
          "You can see exactly when the future stopped looking like this.",
          "The chrome isn't a material, it's an ideology."
        ]
      }
    ]
  },

  "r/WeirdLit": {
    desc: "strange fiction & writing",
    tags: ["dark", "contemporary", "chaos"],
    posts: [
      {
        title: "Recommendations for fiction that feels like being in a room where something already happened",
        body: "Not horror exactly. Just that feeling of aftermath. Residue. The wrong thing has already occurred and you're just living in its wake.",
        comments: [
          "Anna Kavan — Ice. The atmosphere is the entire point.",
          "Everything by Samanta Schweblin has that quality. Fever Dream especially.",
          "Muriel Spark does this quietly. You don't notice the wrongness until you're inside it."
        ]
      },
      {
        title: "Does anyone else feel like the most interesting genre is 'document fiction'?",
        body: "Novels written entirely as found documents, reports, transcripts. House of Leaves. World War Z. The raw shape of bureaucracy as narrative.",
        comments: [
          "The Illuminatus! Trilogy does this chaotically and brilliantly.",
          "There's something about the clinical format that makes the horror worse.",
          "The form is already saying something before the content starts."
        ]
      }
    ]
  },

  "r/somethingimade": {
    desc: "handmade things",
    tags: ["optimistic", "chaos", "traditional"],
    posts: [
      {
        title: "Zine about things I saw on public transport this month",
        body: "12 pages, risograph printed, edition of 30. The man who ate an entire rotisserie chicken on the tram gets a full spread.",
        comments: [
          "This is journalism.",
          "Please tell me there's a distro link somewhere.",
          "The rotisserie chicken man deserves documentation."
        ]
      },
      {
        title: "Made a book of every overheard conversation I wrote down this year",
        body: "Hand-bound, carbon paper interior, 200 pages. Some of these will haunt me. 'She said the tumor had its own personality by then.'",
        comments: [
          "Overheard dialogue is the best raw material.",
          "The carbon paper decision is perfect. Like a copy of something that didn't mean to be copied.",
          "Please protect the people in this but also please share it."
        ]
      }
    ]
  },

  "r/nostalgia": {
    desc: "memory & the past",
    tags: ["traditional", "optimistic", "dark"],
    posts: [
      {
        title: "The specific sound of dial-up connecting in an empty house after school",
        body: "Nobody else home. Low sun through dusty blinds. Something downloading slowly. The anticipation of a very small thing.",
        comments: [
          "The anticipation of that specific era. Nothing was instant, so everything felt like it mattered.",
          "That sound is a whole emotional landscape for me.",
          "The low sun through dusty blinds. You wrote a whole feeling in one sentence."
        ]
      },
      {
        title: "My grandmother's kitchen: the exact smell, the specific light, the sound of her radio",
        body: "She's been gone six years. I keep trying to reconstruct it before I can't anymore. The brand of dish soap. The curtain color. The frequency she kept the radio at.",
        comments: [
          "Memory as archival practice.",
          "The specific frequency. Yes. That's the detail.",
          "Write it all down. All of it."
        ]
      }
    ]
  },

  "r/bizarrebuildings": {
    desc: "strange architecture",
    tags: ["chaos", "contemporary", "dark"],
    posts: [
      {
        title: "This hotel in Yugoslavia that looks like it's descending into the cliff",
        body: "Built 1971. Still operational. Every floor slightly more wrong than the last. The pool is somehow underground and also outside.",
        comments: [
          "Architecture that argues with gravity.",
          "The audacity. The complete audacity.",
          "Socialist modernism had no fear and it shows."
        ]
      },
      {
        title: "The inside of this brutalist car park looks more like a cathedral than most cathedrals",
        body: "Preston, England. Due for demolition. The light at midday does something to the concrete that shouldn't be possible.",
        comments: [
          "Brutalism was always trying to be sacred and nobody told it to stop.",
          "The demolition of these things is a kind of cultural crime.",
          "Concrete as transcendence."
        ]
      }
    ]
  },

  "r/fontyou": {
    desc: "type in the wild",
    tags: ["traditional", "chaos", "optimistic"],
    posts: [
      {
        title: "Hand-painted sign on a butcher's in Naples, been there since at least 1954",
        body: "The letterforms are completely inconsistent and somehow perfect. Every letter is a slightly different decision. The whole thing holds together through force of personality.",
        comments: [
          "The inconsistency is the authenticity.",
          "A graphic designer would have 'fixed' it and ruined it.",
          "The hand that made this had opinions. You can feel every one of them."
        ]
      },
      {
        title: "Soviet factory signage, still up, somewhere in the Urals",
        body: "Found by a friend doing industrial photography. The color has gone but the letterforms are intact. There's something very serious about this type.",
        comments: [
          "Type that meant business. Literally.",
          "The weight of that sans-serif is ideological.",
          "Functional typography that became beautiful by refusing to be decorative."
        ]
      }
    ]
  },

  "r/medicalgore": {
    desc: "medical & anatomical imagery",
    tags: ["dark", "traditional", "minimalism"],
    posts: [
      {
        title: "Anatomical wax model from 18th century Florence, La Specola museum",
        body: "She looks peaceful. The detail is extraordinary and deeply strange. Someone made the eyelashes by hand, one by one.",
        comments: [
          "These exist in this space between art object and scientific instrument and I don't think we've resolved that.",
          "The eyelashes. Someone made those eyelashes by hand.",
          "The devotion required to make this. For science. For art. Both."
        ]
      },
      {
        title: "1890s surgical atlas illustrations — the draughtsmanship is unbelievable",
        body: "Before photography was reliable enough, someone had to draw everything they saw. These are more precise than most photographs.",
        comments: [
          "Scientific illustration as a lost high art.",
          "The illustrator had to watch and remember and then render. The observational pressure is unimaginable.",
          "There's a version of this job that still exists and nobody knows about it."
        ]
      }
    ]
  },

  "r/urbanexploration": {
    desc: "exploring forgotten places",
    tags: ["dark", "chaos", "contemporary"],
    posts: [
      {
        title: "Found an entire hospital wing locked since 1983",
        body: "Equipment still in place. Drug charts on the walls. Dietary menus from March 1983. The routine of care, fossilized.",
        comments: [
          "The dietary menu is what gets me. Someone planned those meals.",
          "Medical time capsules are a specific category of haunted.",
          "The care continues in the paperwork even after everyone's gone."
        ]
      },
      {
        title: "Spent 6 hours in a closed department store, documenting everything",
        body: "Mannequins still dressed. Sale signs still up. The escalators are still plugged in, just turned off. Everything ready for a day that didn't come.",
        comments: [
          "The escalators being plugged in is the detail.",
          "Consumer infrastructure as archaeology.",
          "The mannequins are dressed for a party nobody threw."
        ]
      }
    ]
  }
};

// Aesthetic styles database — mapped to vibe dimensions
// mood: 0=dark, 10=optimistic | composition: 0=chaos, 10=minimalism | time: 0=traditional, 10=contemporary

const AESTHETICS = [
  { name: "Punk Zine", desc: "Xeroxed urgency. Hand-lettered rage. Nothing is aligned on purpose. The medium is the message and the message is distrust.", mood:[0,3], comp:[0,3], time:[0,4] },
  { name: "Riot Grrrl", desc: "Political fury as aesthetic. Photocopied manifestos, messy collage, handwriting as weapon. Angry and alive.", mood:[0,4], comp:[0,4], time:[0,5] },
  { name: "Black Metal Xerox", desc: "Degraded imagery, illegible logos, forest and ruin. Beauty through maximum lo-fi destruction.", mood:[0,2], comp:[0,4], time:[0,5] },
  { name: "Samizdat", desc: "Self-published under pressure. Typewritten, carbon-copied, passed hand to hand. The physicality of forbidden text.", mood:[0,4], comp:[4,7], time:[0,5] },
  { name: "Soviet Constructivism", desc: "Diagonal force lines, bold primary colors, photomontage. The future as designed object. Optimism with edges.", mood:[3,7], comp:[3,7], time:[0,5] },
  { name: "Polish PRL Graphics", desc: "Poster art under constraint. Strange optimism, flat color, symbolic abstraction. The official dream rendered beautifully.", mood:[3,7], comp:[4,8], time:[0,5] },
  { name: "DDR Design", desc: "East German functionalism. Clean, earnest, slightly strange. Modernism with ideological undertones.", mood:[3,7], comp:[5,9], time:[0,6] },
  { name: "Risograph", desc: "Deliberate misregistration. Flat color with texture. The warmth of mechanical imprecision. Zine culture made formal.", mood:[3,8], comp:[4,8], time:[3,8] },
  { name: "Swiss International Style", desc: "Grid as religion. Helvetica as truth. White space as argument. Precision that borders on cold.", mood:[4,8], comp:[7,10], time:[3,8] },
  { name: "Bauhaus Print", desc: "Form follows function, function becomes beautiful. Geometric clarity, primary palette, the absence of ornament.", mood:[4,8], comp:[6,10], time:[0,5] },
  { name: "Medical Ephemera", desc: "Clinical language, anatomical illustration, the body as diagram. Strange intimacy of the diagnostic gaze.", mood:[0,5], comp:[5,9], time:[0,6] },
  { name: "Victorian Medical Illustration", desc: "Meticulous hand-drawn anatomy. Scientific devotion as art form. The precision of observation before photography.", mood:[0,5], comp:[5,9], time:[0,3] },
  { name: "Anatomy Atlas", desc: "The body mapped, labeled, understood. Beautiful systematic knowledge. Cross-section as aesthetic object.", mood:[2,6], comp:[6,10], time:[0,5] },
  { name: "Natural History Museum", desc: "Specimen, classification, the Wunderkammer impulse. Order imposed on infinite variety. Knowledge as collection.", mood:[3,7], comp:[5,9], time:[0,5] },
  { name: "Herbarium", desc: "Pressed plants, handwritten labels, the patience of taxonomy. Beauty through obsessive documentation.", mood:[4,8], comp:[6,10], time:[0,4] },
  { name: "Scientific Atlas", desc: "Knowledge organized into image. The grid as understanding. Information design before the term existed.", mood:[3,7], comp:[6,10], time:[0,5] },
  { name: "Field Notebook", desc: "Notes made in place, rough and immediate. Observation as practice. The aesthetics of attention.", mood:[4,8], comp:[3,7], time:[0,5] },
  { name: "Cabinet of Curiosities", desc: "The Wunderkammer before discipline. Everything together, beautiful and strange. Collection as worldview.", mood:[3,7], comp:[2,6], time:[0,4] },
  { name: "Redacted Documents", desc: "Black bars over truth. The shape of what can't be said. Bureaucracy as surrealism.", mood:[0,4], comp:[4,8], time:[3,8] },
  { name: "Intelligence Report", desc: "Classified coldness. Information presented without affect. The aesthetics of state knowledge.", mood:[0,4], comp:[6,10], time:[3,8] },
  { name: "Cold War Bureaucracy", desc: "Forms in triplicate. Rubber stamps. The machinery of systems. Administrative modernism at its most earnest.", mood:[0,5], comp:[5,9], time:[2,7] },
  { name: "Analog Horror", desc: "VHS degradation, found footage unease, the wrong thing glimpsed in static. Dread through format.", mood:[0,3], comp:[2,6], time:[3,8] },
  { name: "Liminal Spaces", desc: "Empty places designed for people. The uncanny of the familiar rendered strange by absence.", mood:[0,5], comp:[5,9], time:[3,9] },
  { name: "Dead Mall", desc: "Consumer optimism in advanced decay. Fountains still running, stores closed. The American dream in brackets.", mood:[0,4], comp:[3,7], time:[4,8] },
  { name: "Weirdcore", desc: "Dreamlike wrongness. Familiar elements made strange. The visual language of a bad feeling with no name.", mood:[0,4], comp:[2,6], time:[4,9] },
  { name: "Geocities", desc: "Early web maximalism. GIFs, tiled backgrounds, visitor counters. The internet when it was handmade.", mood:[4,8], comp:[0,4], time:[4,7] },
  { name: "Vaporwave", desc: "80s and 90s corporate aesthetics rendered nostalgic and strange. Mall muzak as visual language.", mood:[2,6], comp:[3,7], time:[4,8] },
  { name: "Frutiger Aero", desc: "Glassy optimism, clean interfaces, nature and technology merged. The 2000s belief that screens could be good.", mood:[5,9], comp:[5,9], time:[4,8] },
  { name: "Memphis Milano", desc: "Pattern as protest against good taste. Bright, geometric, deliberately excessive. Joy as manifesto.", mood:[6,10], comp:[0,5], time:[2,7] },
  { name: "Art Nouveau", desc: "Nature as ornament, the line as organism. Beauty as moral position. The curve against the grid.", mood:[5,9], comp:[2,6], time:[0,3] },
  { name: "Art Deco", desc: "Geometry at glamour's service. Gold and black, symmetry and speed. Modernism made luxurious.", mood:[5,9], comp:[5,9], comp:[4,8], time:[0,4] },
  { name: "Victorian Ephemera", desc: "Trade cards, chromolithography, the ornamental density of another era. Decoration as communication.", mood:[4,8], comp:[0,4], time:[0,2] },
  { name: "Dada Collage", desc: "Anti-art as art. Juxtaposition without logic, humor without mercy. The coherence of incoherence.", mood:[2,6], comp:[0,3], time:[0,5] },
  { name: "Futurist Manifesto", desc: "Speed, force, the machine as beauty. Diagonal dynamism, typographic violence, the noise of becoming.", mood:[3,8], comp:[0,5], time:[0,4] },
  { name: "Japanese City Pop", desc: "Pastel consumerism, metropolitan warmth, the specific optimism of Tokyo in the 80s. Soft and gleaming.", mood:[6,10], comp:[4,8], time:[3,7] },
  { name: "Showa Era Advertising", desc: "Mid-century Japanese commercial design. Earnest modernity, optimistic illustration, the future arriving.", mood:[6,10], comp:[4,8], time:[2,6] },
  { name: "Industrial Safety Posters", desc: "Clear, urgent, often strangely beautiful. Information design under the pressure of consequences.", mood:[3,7], comp:[5,9], time:[2,6] },
  { name: "Military Field Manuals", desc: "Functional illustration, tabular information, the aesthetics of prepared necessity. Clarity as survival.", mood:[2,6], comp:[6,10], time:[2,7] },
  { name: "Antarctic Expedition Reports", desc: "Documentation at the edge of the world. Austere photography, handwritten logs, endurance as subject.", mood:[1,5], comp:[5,9], time:[0,5] },
  { name: "Underground Press", desc: "Offset-printed dissent. The aesthetics of the alternative. Urgency and limited resources as style.", mood:[1,5], comp:[1,5], time:[2,7] },
  { name: "New Wave Typography", desc: "Rules broken with knowledge. Layered type, unexpected hierarchies, the grid defied from inside.", mood:[3,8], comp:[2,6], time:[3,7] },
  { name: "Postmodern Graphic Design", desc: "Quotation, irony, the historic archive as toy box. Self-awareness as aesthetic position.", mood:[3,7], comp:[2,7], time:[4,8] },
  { name: "Corporate Dystopia", desc: "The aesthetics of systems that have forgotten people. Efficiency as horror. Forms in triplicate forever.", mood:[0,3], comp:[6,10], time:[5,10] },
  { name: "Bureaucore", desc: "Beige walls, fluorescent light, the specific typography of official communications. The banal uncanny.", mood:[0,4], comp:[6,10], time:[4,9] },
  { name: "Rave Flyer", desc: "Photocopied and stapled to lampposts. Illegible text, maximum information, the aesthetics of invitation to something illegal.", mood:[5,10], comp:[0,4], time:[4,8] },
  { name: "Acid House Graphics", desc: "Smiley face as icon, repetition, primary colors. Joy engineered into visual form.", mood:[7,10], comp:[2,6], time:[4,8] }
];

// Palette generation
// mode: 'rgb' or 'cmyk'
// Returns array of 5 hex colors: [light, mid-light, accent, mid-dark, dark]
// Rules: no pure black/white, no pure gray, complementary hues in different perceptual families

function generatePalette(mood, composition, time, mode) {
  const moodN = mood / 10;
  const timeN = time / 10;
  const compN = composition / 10;

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function hslToHex(h, s, l) {
    h = ((h % 360) + 360) % 360;
    s = Math.max(5, Math.min(95, s));
    l = Math.max(10, Math.min(94, l));
    const hn = h/360, sn = s/100, ln = l/100;
    const q = ln < 0.5 ? ln*(1+sn) : ln+sn-ln*sn;
    const p = 2*ln-q;
    const h2r = (p,q,t) => {
      if (t<0) t+=1; if (t>1) t-=1;
      if (t<1/6) return p+(q-p)*6*t;
      if (t<1/2) return q;
      if (t<2/3) return p+(q-p)*(2/3-t)*6;
      return p;
    };
    const r = Math.round(h2r(p,q,hn+1/3)*255);
    const g = Math.round(h2r(p,q,hn)*255);
    const b = Math.round(h2r(p,q,hn-1/3)*255);
    return '#'+[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('');
  }

  // Perceptual family check — prevents two hues in the same color family
  function family(h) {
    h = ((h%360)+360)%360;
    if (h<30||h>=330) return 'red';
    if (h<75) return 'orange';
    if (h<150) return 'green';
    if (h<210) return 'teal';
    if (h<270) return 'blue';
    return 'purple';
  }

  function differentFamily(h1, h2) { return family(h1) !== family(h2); }

  // CMYK mode: pure 1-2 ink colors only
  if (mode === 'cmyk') {
    // C=180, M=300, Y=60, R=0, G=120, B=240
    const inks = [180, 300, 60, 0, 240]; // exclude green(120) as dominant — too expected
    let h1 = pick(inks);
    let h2 = pick(inks.filter(h => differentFamily(h, h1)));
    return [
      hslToHex(h1, 12, 92),
      hslToHex(h1, 40, 74),
      hslToHex(h2, 88, 46),
      hslToHex(h1, 55, 32),
      hslToHex(h2, 35, 16),
    ];
  }

  // RGB mode — hue selection by time slider
  let baseHue;
  if (timeN < 0.4) {
    // traditional: warm earth — ochre, rust, terracotta, warm brown, dusty rose
    baseHue = pick([25, 15, 340, 35, 200]);
  } else if (timeN > 0.7) {
    // contemporary: cool — cyan, violet, electric blue, magenta, slate
    baseHue = pick([185, 265, 220, 310, 175]);
  } else {
    // mixed: explicitly avoid green family (75–150°) — it reads as "neutral nature"
    // use: gold, teal, purple, red-orange, slate-blue
    baseHue = pick([48, 195, 280, 18, 355]);
  }

  // Build complement — ensure different perceptual family
  let compHue = (baseHue + 160 + Math.floor(Math.random()*30)) % 360;
  if (!differentFamily(baseHue, compHue)) compHue = (compHue + 65) % 360;

  // Accent: split from complement for triad feel, most saturated stop
  let accentHue = (compHue + 35 + Math.floor(Math.random()*30)) % 360;
  if (!differentFamily(accentHue, baseHue) && !differentFamily(accentHue, compHue)) {
    accentHue = (baseHue + 240) % 360;
  }

  const satBase = 22 + moodN * 48;          // dark=low sat, optimistic=high
  const lightDark = 12 + (1-moodN) * 12;    // 12–24, never pure black
  const satVariance = compN < 0.5 ? 18 : 6; // chaotic = more variance between stops

  return [
    hslToHex(baseHue,  satBase * 0.18,              90 + moodN * 4),        // light
    hslToHex(baseHue,  satBase * 0.45 + satVariance, 70 - moodN * 8),       // mid-light
    hslToHex(accentHue, satBase + 28,               46 + moodN * 10),       // accent — most saturated
    hslToHex(compHue,  satBase * 0.52,              lightDark + 22),        // mid-dark
    hslToHex(compHue,  satBase * 0.30,              lightDark),             // dark — not black
  ];
}

// Filter aesthetics by slider values (0–10 each)
function getAesthetics(mood, composition, time, count = 2) {
  const matches = AESTHETICS.filter(a => {
    const moodOk = mood >= a.mood[0] && mood <= a.mood[1];
    const compOk = composition >= a.comp[0] && composition <= a.comp[1];
    const timeOk = time >= a.time[0] && time <= a.time[1];
    return moodOk && compOk && timeOk;
  });

  // Fallback: relax constraints if nothing matches
  const pool = matches.length >= count ? matches : AESTHETICS;
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Get posts weighted toward matching tags
function getPosts(selectedSubs, mood, composition, time, count = 3) {
  const moodTag = mood < 4 ? 'dark' : mood > 7 ? 'optimistic' : null;
  const compTag = composition < 4 ? 'chaos' : composition > 7 ? 'minimalism' : null;
  const timeTag = time < 4 ? 'traditional' : time > 7 ? 'contemporary' : null;

  const activeTags = [moodTag, compTag, timeTag].filter(Boolean);

  // Score each sub by tag overlap
  const scored = selectedSubs
    .filter(s => MOCK_REDDIT[s])
    .map(s => {
      const sub = MOCK_REDDIT[s];
      const score = activeTags.filter(t => sub.tags.includes(t)).length;
      return { name: s, score, sub };
    })
    .sort((a, b) => b.score - a.score || Math.random() - 0.5);

  const result = [];
  const used = new Set();

  for (const { name, sub } of scored) {
    if (result.length >= count) break;
    if (used.has(name)) continue;
    const post = sub.posts[Math.floor(Math.random() * sub.posts.length)];
    const numComments = 1 + Math.floor(Math.random() * Math.min(2, post.comments.length));
    result.push({
      sub: name,
      title: post.title,
      body: post.body,
      comments: post.comments.slice(0, numComments)
    });
    used.add(name);
  }

  return result;
}

export { MOCK_REDDIT, AESTHETICS, generatePalette, getAesthetics, getPosts };
