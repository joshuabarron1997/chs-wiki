//let it be known that for the purposes of sorting elements and tags have been colsolidated into one array; elements[]
let abilities = [];
let abilitiesAssoc = [
    'herobuff',
    'temporaryinvisibility',
    'rapidrecovery',
    'chronuswizard',
    'cheatermagic',
    'fearlessdefenders',
    'demonscurse',
    'blessedprotection',
    'temporarypower',
    'holyenlightenment',
    'timemanipulation',
    'spiritlink',
    'unholyfrenzy',
    'shockwave',
    'entanglingroots',
    'lifedrain',
    'immolation',
    'stormbolt',
    'mirrorimage',
    'clusterrockets',
    'lightningshield',
    'volcano',
    'plague',
    'warstomp',
    'thunderclap',
    'tranquility',
    'holylight',
    'frostnova',
    'carrionswarm',
    'impale',
    'flamestrike',
    'fanofknives',
    'forkedlightning',
    'windwalk',
    'antimagicshell',
    'rainoffire',
    'fingerofdeath',
    'acidspray',
    'healingwave',
    'banish',
    'ensnare',
    'deathanddecay',
    'battleroar',
    'berserk',
    'rejuvenation',
    'whirlwind',
    'resettime',
    'drunkenhaze',
    'breathoffire',
    'chainlightning',
    'starfall',
    'acidbomb',
    'shadowstrike',
    'howlofterror',
    'blizzard',
    'stampede',
    'blink',
    'manashield',
    'avatar',
    'blackarrow',
    'bloodlust',
    'carrionbeetles',
    'coldarrows',
    'curse',
    'faeriefire',
    'frostarmor',
    'parasite',
    'raisedead',
    'innerfire',
    'searingarrows',
    'phaseshift',
    'feralspirit',
    'healingward',
    'inferno',
    'phoenix',
    'pocketfactory',
    'serpentward',
    'summonbear',
    'summonhawk',
    'summonlavaspawn',
    'summonquillbeast',
    'summonwaterelemental',
    'summonmountaingiant',
    'vampirism',
    'thornsaura',
    'devotionaura',
    'corrosiveskin',
    'enduranceaura',
    'brillianceaura',
    'trueshotaura',
    'bash',
    'cleavingattack',
    'criticalstrike',
    'evasion',
    'commandaura',
    'wardrums',
    'hardenedskin',
    'pulverize',
    'spikedcarapace',
    'incinerate',
    'unholyaura',
    'liquidfire',
    'multishot',
    'pillage',
    'envenomedweapons',
    'slowaura',
    'devastatingblow',
    'auraofimmortality',
    'auraoffear',
    'auraofvulnerability',
    'finishingblow',
    'megaspeed',
    'fastmagic',
    'manabonus',
    'learnability',
    'powerofice',
    'fireforce',
    'airforce',
    'thunderforce',
    'reincarnation',
    'drunkenmaster',
    'destruction',
    'demolish',
    'multicast',
    'combustion',
    'chaosmagic',
    'heavyblow',
    'icearmor',
    'lastbreath',
    'fireshield',
    'ancientteaching',
    'mysterioustalent',
    'stoneprotection',
    'cruelty',
    'reaction',
    'magiccriticalhit',
    'megaluck',
    'fatalflaw',
    'retaliationaura',
    'earthquake',
    'coldwind',
    'drainaura',
    'divinebubble',
    'absolutefire',
    'absolutewater',
    'absolutewind',
    'absoluteearth',
    'absolutewild',
    'absolutelight',
    'absolutedark',
    'absoluteblood',
    'absolutecold',
    'absolutearcane',
    'absolutepoison',
    'ancientblood',
    'cutting',
    'divinegift',
    'soulfrostbite',
    'wizardbaneaura',
    'martialretribution',
    'arcaneassault',
    'reflectionaura',
    'unlimitedagony',
    'midastouch',
    'silence',
    'stasistrap',
    'divineshield',
    'deathpact',
    'bigbadvoodoo',
    'icybreath',
    'soulburn',
    'fog',
    'monsoon',
    'cyclone',
    'randomspells',
    'frostbolt',
    'sandoftime',
    'purge',
    'extradimensionalcooperation',
    'blinkstrike',
    'dousinghex',
    'manastarvation',
    'ancientrunes'



]
let shopsAssoc = [
    'Chronus',
    'Active I',
    'Active II',
    'Active III',
    'Active IV',
    'Auto Cast',
    'Summons',
    'Passive I',
    'Passive II',
    'Passive III',
    'Passive IV',
    'Passive V',
    'Absolute',
    'Passive VI',
    'Active V',
    'Active VI'
]
//#region Chronus shop
abilities['herobuff'] = {
    name: "Hero Buff",
    lumber: 20,
    description: "At the start of every fight the Hero's attack damage and armor are temporarily increased.",
    abilityLevelBonus: "Attack damage, armor",
    heroLevelBonus: "Attack damage, armor, duration",
    elements: ['light'],
    shop: "Chronus",
    position: 1
}
abilities['temporaryinvisibility'] = {
    name: "Temporary Invisibility",
    lumber: 75,
    description: "At the beginning of every fight the Hero temporarily becomes invisible.",
    abilityLevelBonus: "Duration",
    heroLevelBonus: "",
    elements: ['arcane', 'wind', 'unpurgable'],
    shop: "Chronus",
    position: 2
}
abilities['rapidrecovery'] = {
    name: "Rapid Recovery",
    lumber: 20,
    description: "At the beginning of every fight the Hero temporarily gains increased hit point and mana regeneration.",
    abilityLevelBonus: "Regeneration",
    heroLevelBonus: "Regeneration, duration",
    elements: ['light'],
    shop: "Chronus",
    position: 3
}
abilities['chronuswizard'] = {
    name: "Chronus Wizard",
    lumber: 75,
    description: "Increases the duration of all abilities in the Chronus Spells shop. <br><span class = 'grayHint'>Does not affect the duration of Gnome Master's passive.</span>",
    abilityLevelBonus: "Duration bonus",
    heroLevelBonus: "",
    elements: ['arcane'],
    shop: "Chronus",
    position: 4
}
abilities['cheatermagic'] = {
    name: "Cheater Magic",
    lumber: 75,
    description: "At the beginning of every fight the Hero's abilities temporarily recharge 95% faster.",
    abilityLevelBonus: "Duration",
    heroLevelBonus: "",
    elements: ['arcane', 'energy'],
    shop: "Chronus",
    position: 5
}
abilities['fearlessdefenders'] = {
    name: "Fearless Defenders",
    lumber: 20,
    description: "At the beginning of every fight the Hero temporarily summons 2 Fearless Defenders.",
    abilityLevelBonus: "Summon hit points and damage",
    heroLevelBonus: "Summon hit points, damage, and duration",
    elements: ['light', 'summon'],
    shop: "Chronus",
    position: 6
}
abilities['demonscurse'] = {
    name: "Demon's Curse",
    lumber: 15,
    description: "At the beginning of every fight the Hero curses his enemies, temporarily reducing their armor.",
    abilityLevelBonus: "Armor reduction",
    heroLevelBonus: "Armor reduction, duration",
    elements: ['dark', 'energy'],
    shop: "Chronus",
    position: 7
}
abilities['blessedprotection'] = {
    name: "Blessed Protection",
    lumber: 35,
    description: "At the beginning of every fight all damage dealt to the Hero is reduced by 90%.",
    abilityLevelBonus: "Duration",
    heroLevelBonus: "",
    elements: ['light', 'unpurgable'],
    shop: "Chronus",
    position: 8
}
abilities['temporarypower'] = {
    name: "Temporary Power",
    lumber: 85,
    description: "At the beginning of every fight the Hero's stats temporarily increase.",
    abilityLevelBonus: "Stat bonus",
    heroLevelBonus: "Stat bonus, duration",
    elements: ['light', 'unpurgable'],
    shop: "Chronus",
    position: 9
}
abilities['holyenlightenment'] = {
    name: "Holy Enlightenment",
    lumber: 10,
    description: "At the beginning of every fight the Hero gains experience equal to a percentage of the missing experience required for the next two levels.<br> <span class = 'grayHint'>Half as effective if Pillage is learned.</span>",
    abilityLevelBonus: "Experience percentage",
    heroLevelBonus: "",
    elements: ['light', 'stable', 'economic'],
    shop: "Chronus",
    position: 10
}
abilities['timemanipulation'] = {
    name: "Time Manipulation",
    lumber: 40,
    description: "When the Hero hasn't had any Chronus abilities active for a short period of time, it automatically activates all Chronus and &#8220;Beginning of round&#8221; spells<br>This cooldown increases every time it is activated, and resets at the end of the round.<br><span class = 'grayHint'>Cannot activate Holy Enlightenment.<br>If bought during a round it won't work until the next one.</span>",
    abilityLevelBonus: "Cooldown increase reduction",
    heroLevelBonus: "",
    elements: ['arcane','light','stable'],
    shop: "Chronus",
    position: 11
}
//#endregion
//#region active I
abilities['spiritlink'] = {
    name: "Spirit Link",
    lumber: 20,
    description: "Spirit Link has been temporarily disabled because it is bugged. It might be back in a future version.",
    abilityLevelBonus: "",
    heroLevelBonus: "",
    elements: ['arcane'],
    shop: "Active I",
    position: 1
}
abilities['unholyfrenzy'] = {
    name: "Unholy Frenzy",
    lumber: 20,
    description: "Increases the attack speed of the target unit by 300%, but drains hit points per second.",
    abilityLevelBonus: "Damage per second, duration",
    heroLevelBonus: "",
    elements: ['dark'],
    shop: "Active I",
    position: 2
}
abilities['shockwave'] = {
    name: "Shockwave",
    lumber: 15,
    description: "A wave of force that ripples outward, causing damage to land units in a line.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['earth', 'earth','light'],
    shop: "Active I",
    position: 3
}
abilities['entanglingroots'] = {
    name: "Entangling Roots",
    lumber: 10,
    description: "Causes roots to burst from the ground, immobilizing and disarming a target enemy unit and dealing damage per second.",
    abilityLevelBonus: "Damage per second",
    heroLevelBonus: "",
    elements: ['earth', 'wild'],
    shop: "Active I",
    position: 4
}
abilities['lifedrain'] = {
    name: "Life Drain",
    lumber: 20,
    description: "Absorbs the life essence of a target enemy unit by taking hit points per second from it and giving them to the caster.",
    abilityLevelBonus: "Hit points drained",
    heroLevelBonus: "",
    elements: ['dark'],
    shop: "Active I",
    position: 5
}
abilities['immolation'] = {
    name: "Immolation",
    lumber: 10,
    description: "Activate Immolation to engulf the Hero in flames, causing damage per second to nearby enemy land units.",
    abilityLevelBonus: "Damage per second, mana drained",
    heroLevelBonus: "",
    elements: ['fire','fire'],
    shop: "Active I",
    position: 6
}
abilities['stormbolt'] = {
    name: "Storm Bolt",
    lumber: 10,
    description: "Throws a magical hammer at a target enemy unit, dealing damage and stunning the target.",
    abilityLevelBonus: "Damage, stun duration",
    heroLevelBonus: "",
    elements: ['energy', 'wind'],
    shop: "Active I",
    position: 7
}
abilities['mirrorimage'] = {
    name: "Mirror Image",
    lumber: 10,
    description: "Confuses the enemy by creating illusions of the Hero. Dispels all magic from the Hero.",
    abilityLevelBonus: "Number of illusions, illusion damage dealt, illusion damage taken reduction",
    heroLevelBonus: "",
    elements: ['arcane'],
    shop: "Active I",
    position: 8
}
abilities['clusterrockets'] = {
    name: "Cluster Rockets",
    lumber: 10,
    description: "Bombards an area with rockets, stunning and damaging nearby enemy units<br><span class = 'grayHint'>Does not channel.</span>",
    abilityLevelBonus: "Damage, stun duration",
    heroLevelBonus: "",
    elements: [],
    shop: "Active I",
    position: 9
}
abilities['lightningshield'] = {
    name: "Lightning Shield",
    lumber: 15,
    description: "Forms a shield of electricity around the target unit, dealing damage per second to units around it.",
    abilityLevelBonus: "Damage per second",
    heroLevelBonus: "",
    elements: ['wind', 'wind', 'plain'],
    shop: "Active I",
    position: 10
}
abilities['volcano'] = {
    name: "Volcano",
    lumber: 30,
    description: "Causes the ground to erupt into a massive Volcano. Periodically, a wave of molten rocks is hurled from the Volcano at nearby ground units, causing damage to each target and stunning it.<br><span class = 'grayHint'>Does not channel.</span>",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['earth', 'fire'],
    shop: "Active I",
    position: 11
}
abilities['plague'] = {
    name: "Plague",
    lumber: 10,
    description: "Summons rotten corpses that infect nearby enemy living units with Disease Cloud; dealing damage per second.",
    abilityLevelBonus: "Damage per second",
    heroLevelBonus: "damage up",
    elements: ['poison', 'poison'],
    shop: "Active I",
    position: 12
}
//#endregion
//#region active II
abilities['warstomp'] = {
    name: "War Stomp",
    lumber: 10,
    description: "Slams the ground, stunning and damaging nearby enemy land units.",
    abilityLevelBonus: "Damage, area of effect, non-hero stun duration",
    heroLevelBonus: "",
    elements: ['earth'],
    shop: "Active II",
    position: 1
}
abilities['thunderclap'] = {
    name: "Thunder Clap",
    lumber: 15,
    description: "Slams the ground, dealing damage to nearby enemy land units and slowing their movement and attack speed.",
    abilityLevelBonus: "Damage, area of effect, movement speed reduction, attack speed reduction, duration",
    heroLevelBonus: "",
    elements: ['earth', 'wind'],
    shop: "Active II",
    position: 2
}
abilities['tranquility'] = {
    name: "Tranquility",
    lumber: 30,
    description: "Causes rains of healing energy to pour down in a large area, healing friendly allied units.<br><span class = 'grayHint'>Does not channel.</span>",
    abilityLevelBonus: "Heal amount, heal interval",
    heroLevelBonus: "",
    elements: ['light','wild','wild'],
    shop: "Active II",
    position: 3
}
abilities['holylight'] = {
    name: "Holy Light",
    lumber: 15,
    description: "Holy light that can heal the Hero, a friendly living unit or deal half damage to an enemy Undead unit.",
    abilityLevelBonus: "Heal/damage amount",
    heroLevelBonus: "",
    elements: ['light'],
    shop: "Active II",
    position: 4
}
abilities['frostnova'] = {
    name: "Frost Nova",
    lumber: 10,
    description: "Blasts enemy units around a target enemy unit with a wave of damaging frost that slows movement and attack rate.",
    abilityLevelBonus: "Damage, duration",
    heroLevelBonus: "",
    elements: ['water', 'ice'],
    shop: "Active II",
    position: 5
}
abilities['carrionswarm'] = {
    name: "Carrion Swarm",
    lumber: 10,
    description: "Sends a horde of bats to damage enemy units in a cone.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['dark'],
    shop: "Active II",
    position: 6
}
abilities['impale'] = {
    name: "Impale",
    lumber: 10,
    description: "Slams the ground, shooting spiked tendrils out in a straight line, dealing damage and hurling enemy ground units into the air in their wake, stunning them.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['earth','dark'],
    shop: "Active II",
    position: 7
}
abilities['flamestrike'] = {
    name: "Flame Strike",
    lumber: 15,
    description: "Conjures a pillar of fire which damages enemy ground units in the target area over time.",
    abilityLevelBonus: "Conjures a pillar of fire which damages enemy ground units in the target area over time.",
    heroLevelBonus: "",
    elements: ['fire','fire'],
    shop: "Active II",
    position: 8
}
abilities['fanofknives'] = {
    name: "Fan of Knives",
    lumber: 7,
    description: "The Hero hurls a flurry of knives, damaging nearby enemies.",
    abilityLevelBonus: "Damage, area of effect",
    heroLevelBonus: "",
    elements: [],
    shop: "Active II",
    position: 9
}
abilities['forkedlightning'] = {
    name: "Forked Lightning",
    lumber: 10,
    description: "Calls forth a cone of lightning to damage enemies.",
    abilityLevelBonus: "Damage, number of targets",
    heroLevelBonus: "",
    elements: ['wind'],
    shop: "Active II",
    position: 10
}
abilities['windwalk'] = {
    name: "Wind Walk",
    lumber: 10,
    description: "Allows the Hero to become invisible, and move faster for 3.5 seconds. If the Hero attacks a unit to break invisibility, the attack will do bonus damage.",
    abilityLevelBonus: "Damage, movement speed bonus",
    heroLevelBonus: "",
    elements: ['arcane','wind', 'plain'],
    shop: "Active II",
    position: 11
}
abilities['antimagicshell'] = {
    name: "Anti-Magic Shell",
    lumber: 20,
    description: "Creates a barrier that stops a flat amount of spell or magic damage from affecting the target unit.<br><span class = 'grayHint'>Reduces the effect of an enemy's Air Force by 50%.</span>",
    abilityLevelBonus: "Damage Absorbed",
    heroLevelBonus: "",
    elements: ['dark','unpurgable'],
    shop: "Active II",
    position: 12
}
//#endregion
//#region active III
abilities['rainoffire'] = {
    name: "Rain of Fire",
    lumber: 10,
    description: "Calls down waves of fire that damage units in an area. Each wave deals initial damage and then burns enemies for a duration.",
    abilityLevelBonus: "Damage, burn damage, number of waves",
    heroLevelBonus: "",
    elements: ['fire'],
    shop: "Active III",
    position: 1
}
abilities['fingerofdeath'] = {
    name: "Finger of Death",
    lumber: 30,
    description: "Horribly cripples the innards of a creature.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['energy', 'dark'],
    shop: "Active III",
    position: 2
}
abilities['acidspray'] = {
    name: "Acid Spray",
    lumber: 20,
    description: "Sprays waves of acid, damaging units in a target area.",
    abilityLevelBonus: "Damage, number of waves",
    heroLevelBonus: "",
    elements: ['poison'],
    shop: "Active III",
    position: 3
}
abilities['healingwave'] = {
    name: "Healing Wave",
    lumber: 20,
    description: "Calls forth a wave of energy that heals a target and bounces to nearby friendlies. Each bounce heals less damage.",
    abilityLevelBonus: "Heal amount, number of targets",
    heroLevelBonus: "",
    elements: ['light'],
    shop: "Active III",
    position: 4
}
abilities['banish'] = {
    name: "Banish",
    lumber: 10,
    description: "Turns a non-mechanical unit ethereal and slows its movement speed for a short duration. Ethereal creatures cannot attack, but they can cast spells and certain spells cast upon them will have a greater effect.",
    abilityLevelBonus: "Duration",
    heroLevelBonus: "",
    elements: ['arcane'],
    shop: "Active III",
    position: 5
}
abilities['ensnare'] = {
    name: "Ensnare",
    lumber: 10,
    description: "Causes a target enemy unit to be bound to the ground so that it cannot move. Air units that are ensnared can be attacked as though they were land units.",
    abilityLevelBonus: "Non-hero duration, cooldown reduction",
    heroLevelBonus: "",
    elements: [],
    shop: "Active III",
    position: 6
}
abilities['deathanddecay'] = {
    name: "Death and Decay",
    lumber: 40,
    description: "Damages everything in its area of effect by a percentage of its base hit points per second.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['dark'],
    shop: "Active III",
    position: 7
}
abilities['battleroar'] = {
    name: "Battle Roar",
    lumber: 22,
    description: "Gives nearby friendly units a flat bonus to attack damage and armor.",
    abilityLevelBonus: "Damage bonus, armor bonus",
    heroLevelBonus: "",
    elements: ['wild'],
    shop: "Active III",
    position: 8
}
abilities['berserk'] = {
    name: "Berserk",
    lumber: 13,
    description: "Causes this unit to attack and move faster, and take no damage.",
    abilityLevelBonus: "Duration",
    heroLevelBonus: "",
    elements: ['blood', 'plain'],
    shop: "Active III",
    position: 9
}
abilities['rejuvenation'] = {
    name: "Rejuvenation",
    lumber: 30,
    description: "Heals and restores mana to a target friendly unit.",
    abilityLevelBonus: "Hit point regeneration, mana regeneration",
    heroLevelBonus: "",
    elements: ['light', 'wild'],
    shop: "Active III",
    position: 10
}
abilities['whirlwind'] = {
    name: "Whirlwind",
    lumber: 25,
    description: "Spins the Hero's weapon around, dealing magic damage to nearby enemy units based on its base attack damage.",
    abilityLevelBonus: "Damage multiplier",
    heroLevelBonus: "",
    elements: ['wind'],
    shop: "Active III",
    position: 11
}
abilities['resettime'] = {
    name: "Reset Time",
    lumber: 40,
    description: "Resets time for the user, resetting the cooldown of all other abilities. <br><span class = 'grayHint'>Cannot be multicast.</span>",
    abilityLevelBonus: "Cooldown reduction",
    heroLevelBonus: "",
    elements: ['arcane', 'stable'],
    shop: "Active III",
    position: 12
}
//#endregion
//#region active IV
abilities['drunkenhaze'] = {
    name: "Drunken Haze",
    lumber: 10,
    description: "Drenches enemy units in alcohol, causing their movement speed to be reduced, and have a chance to miss on attacks. When units with Drunken Haze cast on them are hit by Breath of Fire, they will ignite and take burn damage over time.",
    abilityLevelBonus: "Miss chance, movement speed reduction, duration, cooldown increase",
    heroLevelBonus: "",
    elements: ['poison','poison'],
    shop: "Active IV",
    position: 1
}
abilities['breathoffire'] = {
    name: "Breath of Fire",
    lumber: 10,
    description: "Breathes a cone of fire at enemy units which deals damage. Units that have Drunken Haze on them will ignite and take burn damage over time.",
    abilityLevelBonus: "Damage, damage per second, cooldown increase",
    heroLevelBonus: "",
    elements: ['fire'],
    shop: "Active IV",
    position: 2
}
abilities['chainlightning'] = {
    name: "Chain Lightning",
    lumber: 10,
    description: "Calls forth a bolt of lightning that bounces from enemy to enemy.",
    abilityLevelBonus: "Damage, number of targets",
    heroLevelBonus: "",
    elements: ['wind', 'energy'],
    shop: "Active IV",
    position: 3
}
abilities['starfall'] = {
    name: "Starfall",
    lumber: 20,
    description: "Calls down waves of falling stars that damage nearby enemy units.<br><span class = 'grayHint'>Does not channel.</span>",
    abilityLevelBonus: "Damage, damage interval",
    heroLevelBonus: "",
    elements: ['arcane', 'energy'],
    shop: "Active IV",
    position: 4
}
abilities['acidbomb'] = {
    name: "Acid Bomb",
    lumber: 10,
    description: "Hurls a flask of acid at a target. The flask breaks upon impact, splashing a powerful acid on nearby hostile units. <br>Decreases armor; deals high damage over time to the primary target; deals slightly less damage over time to nearby targets.",
    abilityLevelBonus: "Damage, armor reductions",
    heroLevelBonus: "",
    elements: ['poison'],
    shop: "Active IV",
    position: 5
}
abilities['shadowstrike'] = {
    name: "Shadow Strike",
    lumber: 15,
    description: "Hurls a poisoned dagger which deals large initial damage, and then deals damage over time. The poisoned unit has its movement speed slowed for a short duration.",
    abilityLevelBonus: "Initial damage, damage per second, movement speed reduction, duration, range",
    heroLevelBonus: "",
    elements: ['poison'],
    shop: "Active IV",
    position: 6
}
abilities['howlofterror'] = {
    name: "Howl of Terror",
    lumber: 20,
    description: "The Hero lets loose a terrifying howl that reduces nearby enemy units' armor and attack damage.",
    abilityLevelBonus: "Attack damage reduction, armor reduction",
    heroLevelBonus: "",
    elements: ['dark', 'cold'],
    shop: "Active IV",
    position: 7
}
abilities['blizzard'] = {
    name: "Blizzard",
    lumber: 15,
    description: "Calls down waves of freezing ice shards that damage units in a target area.<br><span class = 'grayHint'>Does not channel.</span>",
    abilityLevelBonus: "Damage, area of effect",
    heroLevelBonus: "",
    elements: ['water','water','cold','cold'],
    shop: "Active IV",
    position: 8
}
abilities['stampede'] = {
    name: "Stampede",
    lumber: 50,
    description: "Calls down hordes of rampaging thunder lizards to explode upon the hero's enemies. Each exploding lizard deals damage.<br><span class = 'grayHint'>Does not channel.</span>",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['wild'],
    shop: "Active IV",
    position: 9
}
abilities['blink'] = {
    name: "Blink",
    lumber: 10,
    description: "Teleports a short distance, allowing the hero to move in and out of combat.",
    abilityLevelBonus: "Cooldown reduction, mana cost reduction",
    heroLevelBonus: "",
    elements: ['plain'],
    shop: "Active IV",
    position: 10
}
abilities['manashield'] = {
    name: "Mana Shield",
    lumber: 10,
    description: "Creates a shield that absorbs damage by using mana.",
    abilityLevelBonus: "Damage absorption, mana cost per hit",
    heroLevelBonus: "",
    elements: ['arcane', 'water'],
    shop: "Active IV",
    position: 11
}
abilities['avatar'] = {
    name: "avatar",
    lumber: 10,
    description: "Activate Avatar to give the Hero bonus armor, bonus hit points, bonus damage and spell immunity.",
    abilityLevelBonus: "Hit point bonus, armor bonus, damage bonus, cooldown reduction",
    heroLevelBonus: "",
    elements: ['earth', 'plain'],
    shop: "Active IV",
    position: 12
}
//#endregion
//#region auto cast
abilities['blackarrow'] = {
    name: "Black Arrow",
    lumber: 10,
    description: "<span class = 'goldHint'>Unique Attack Modifier</span><br> Adds bonus damage to attacks. Units killed while under the effect of Black Arrow will turn into skeletons.",
    abilityLevelBonus: "Damage Bonus, summon hit points, summon damage",
    heroLevelBonus: "",
    elements: ['dark', 'ranged', 'plain'],
    shop: "Auto Cast",
    position: 1
}
abilities['bloodlust'] = {
    name: "Bloodlust",
    lumber: 10,
    description: "Increases a friendly unit's attack rate and movement speed.",
    abilityLevelBonus: "Attack speed bonus, movement speed bonus, duration",
    heroLevelBonus: "",
    elements: ['blood'],
    shop: "Auto Cast",
    position: 2
}
abilities['carrionbeetles'] = {
    name: "Carrion Beetles",
    lumber: 10,
    description: "Progenerates a Beetle from a target corpse.",
    abilityLevelBonus: "Summon hit points, summon damage, maximum number of summons",
    heroLevelBonus: "",
    elements: ['dark'],
    shop: "Auto Cast",
    position: 3
}
abilities['coldarrows'] = {
    name: "Cold Arrows",
    lumber: 10,
    description: "<span class = 'goldHint'>Unique Attack Modifier</span><br> Adds bonus frost damage to each attack, slowing a target enemy unit's attacks and movement.",
    abilityLevelBonus: "Damage, movement speed reduction, attack speed reduction",
    heroLevelBonus: "",
    elements: ['cold', 'ranged', 'plain'],
    shop: "Auto Cast",
    position: 4
}
abilities['curse'] = {
    name: "Curse",
    lumber: 10,
    description: "Curses a target enemy unit, causing it to have a chance to miss on an attack.",
    abilityLevelBonus: "Miss chance, duration",
    heroLevelBonus: "",
    elements: ['dark'],
    shop: "Auto Cast",
    position: 5
}
abilities['faeriefire'] = {
    name: "Faerie Fire",
    lumber: 10,
    description: "Reduces a target enemy unit's armor and gives vision of that unit.",
    abilityLevelBonus: "Armor reduction",
    heroLevelBonus: "",
    elements: ['wild', 'fire'],
    shop: "Auto Cast",
    position: 6
}
abilities['frostarmor'] = {
    name: "Frost Armor",
    lumber: 15,
    description: "Creates a shield of frost around a target friendly unit. The shield adds armor and slows melee units that attack it.",
    abilityLevelBonus: "Armor bonus",
    heroLevelBonus: "",
    elements: ['water', 'cold'],
    shop: "Auto Cast",
    position: 7
}
abilities['parasite'] = {
    name: "Parasite",
    lumber: 15,
    description: "Afflicts a target enemy unit with a deadly parasite that deals damage per second. If the afflicted unit dies while under the effect of Parasite minions will spawn from its corpse.",
    abilityLevelBonus: "Damage per second, number of summons, summon hit points, summon damage",
    heroLevelBonus: "",
    elements: ['dark', 'summon'],
    shop: "Auto Cast",
    position: 8
}
abilities['raisedead'] = {
    name: "Raise Dead",
    lumber: 10,
    description: "Raises skeletons from a corpse.",
    abilityLevelBonus: "Summon hit points, summon damage",
    heroLevelBonus: "",
    elements: ['dark', 'summon'],
    shop: "Auto Cast",
    position: 9
}
abilities['innerfire'] = {
    name: "Inner Fire",
    lumber: 30,
    description: "Increases a target friendly unit's damage and armor.",
    abilityLevelBonus: "Damage bonus, armor bonus",
    heroLevelBonus: "",
    elements: ['light', 'fire'],
    shop: "Auto Cast",
    position: 10
}
abilities['searingarrows'] = {
    name: "Searing Arrows",
    lumber: 10,
    description: "<span class = 'goldHint'>Unique Attack Modifier</span><br>Adds bonus fire damage to an attack against enemies, but drains mana with each shot fired.",
    abilityLevelBonus: "Damage bonus",
    heroLevelBonus: "",
    elements: ['fire', 'ranged', 'plain'],
    shop: "Auto Cast",
    position: 11
}
abilities['phaseshift'] = {
    name: "Phase Shift",
    lumber: 10,
    description: "Causes this unit to shift out of existence whenever it takes damage, temporarily avoiding any further physical damage.",
    abilityLevelBonus: "Duration, cooldown reduction",
    heroLevelBonus: "",
    elements: ['arcane', 'energy', 'plain'],
    shop: "Auto Cast",
    position: 12
}
//#endregion
//#region summons
abilities['feralspirit'] = {
    name: "feralspirit",
    lumber: 20,
    description: "Summons a Spirit Wolf companion to attack enemies.",
    abilityLevelBonus: "Summon damage, summon evasion, summon attack speed, summon hit points",
    heroLevelBonus: "",
    elements: ['arcane','wild', 'summon'],
    shop: "Summons",
    position: 1
}
abilities['healingward'] = {
    name: "Healing Ward",
    lumber: 10,
    description: "Summons an immovable ward that heals nearby friendly non-mechanical unit's hit points per second.",
    abilityLevelBonus: "Heal amount, area of effect",
    heroLevelBonus: "",
    elements: ['light','light', 'summon'],
    shop: "Summons",
    position: 2
}
abilities['inferno'] = {
    name: "Inferno",
    lumber: 60,
    description: "Calls an Infernal down from the sky, dealing damage and stunning enemy land units for 2 seconds in an area.",
    abilityLevelBonus: "Damage, stun duration, summon hit points, summon damage, summon immolation damage",
    heroLevelBonus: "",
    elements: ['dark', 'fire', 'eart', 'summon'],
    shop: "Summons",
    position: 3
}
abilities['phoenix'] = {
    name: "Phoenix",
    lumber: 50,
    description: "Summons a powerful Phoenix. The Phoenix burns with such intensity that it damages itself and nearby enemy units. The Phoenix can attack banished units.",
    abilityLevelBonus: "Summon hit points, summon damage",
    heroLevelBonus: "",
    elements: ['fire', 'summon'],
    shop: "Summons",
    position: 4
}
abilities['pocketfactory'] = {
    name: "Pocket Factory",
    lumber: 25,
    description: "Creates a factory which automatically constructs Clockwerk Goblins.",
    abilityLevelBonus: "Summon hit points, Summon damage, summon magic power, summon magic protection, summon evasion, summon armor, summon attack speed",
    heroLevelBonus: "",
    elements: ['summon'],
    shop: "Summons",
    position: 5
}
abilities['serpentward'] = {
    name: "Serpent Ward",
    lumber: 20,
    description: "Summons an immobile serpentine ward to attack enemies. The ward is immune to magic.",
    abilityLevelBonus: "Summon hit points, summon damage, summon attack speed",
    heroLevelBonus: "",
    elements: ['arcane','wild', 'summon'],
    shop: "Summons",
    position: 6
}
abilities['summonbear'] = {
    name: "Summon Bear",
    lumber: 15,
    description: "Summons a powerful bear to attack enemies. The bear has Blink and Bash.",
    abilityLevelBonus: "Summon hit points, summon damage, summon attack speed, summon armor",
    heroLevelBonus: "",
    elements: ['wild', 'summon'],
    shop: "Summons",
    position: 7
}
abilities['summonhawk'] = {
    name: "Summon Hawk",
    lumber: 15,
    description: "Summons a Hawk to attack enemies. The Hawk has true sight and can attack banished units.",
    abilityLevelBonus: "Summon hit points, summon damage, summon attack speed",
    heroLevelBonus: "",
    elements: ['wild', 'summon'],
    shop: "Summons",
    position: 8
}
abilities['summonlavaspawn'] = {
    name: "Summon Lava Spawn",
    lumber: 15,
    description: "Summons a Lava Spawn, a resilient and deadly fire creature. As a Lava Spawn deals damage, it consumes the flesh of its target, eventually splitting into new healthy Lava Spawns.",
    abilityLevelBonus: "Summon hit points, summon attack speed, summon damage, split rate",
    heroLevelBonus: "",
    elements: ['fire', 'wild','summon'],
    shop: "Summons",
    position: 9
}
abilities['summonquillbeast'] = {
    name: "Summon Quillbeast",
    lumber: 10,
    description: "Summons an angry quilbeast to fling poisonous spines at enemies, dealing damage per second.",
    abilityLevelBonus: "Summon hit points, summon damage, summon attack speed, poison damage per second",
    heroLevelBonus: "",
    elements: ['wild', 'summon'],
    shop: "Summons",
    position: 10
}
abilities['summonwaterelemental'] = {
    name: "Summon Water Elemental",
    lumber: 15,
    description: "Summons a Water Elemental to attack enemies.",
    abilityLevelBonus: "Summon hit points, summon magic protection, summon attack speed, summon damage",
    heroLevelBonus: "",
    elements: ['water', 'summon'],
    shop: "Summons",
    position: 11
}
abilities['summonmountaingiant'] = {
    name: "Summon Mountain Giant",
    lumber: 25,
    description: "Summons a massive Mountain Giant that can disrupt enemy attackers and take incredible amounts of punishment. Has Taunt and Hardened Skin.",
    abilityLevelBonus: "Summon hit points, summon damage, summon attack speed, summon block",
    heroLevelBonus: "",
    elements: ['earth', 'wild', 'summon'],
    shop: "Summons",
    position: 12
}
//#endregion
//#region passive I
abilities['vampirism'] = {
    name: "Vampirism",
    lumber: 10,
    description: "When you deal damage you restore health.|n|nFor every [<span class = 'blood'>Blood</span>] spell the Hero has, Vampirism returns a bonus percentage of the damage dealt as hit points.",
    abilityLevelBonus: "Life steal percentage",
    heroLevelBonus: "",
    elements: ['blood', 'lifesteal'],
    shop: "Passive I",
    position: 1
}
abilities['thornsaura'] = {
    name: "Thorns Aura",
    lumber: 25,
    description: "An aura that gives friendly nearby units a damage shield, which returns a percentage of a melee attacker's damage back to it.<br><span class = 'grayHint'>1% less effective for each level of Reflection Aura and Wizardbane Aura.</span>",
    abilityLevelBonus: "Damage returned percentage",
    heroLevelBonus: "",
    elements: ['earth', 'wild', 'onhit'],
    shop: "Passive I",
    position: 2
}
abilities['devotionaura'] = {
    name: "Devotion Aura",
    lumber: 20,
    description: "Gives additional armor to nearby friendly units.",
    abilityLevelBonus: "Armor bonus",
    heroLevelBonus: "",
    elements: ['light','light'],
    shop: "Passive I",
    position: 3
}
abilities['corrosiveskin'] = {
    name: "Corrosive Skin",
    lumber: 12,
    description: "Gives a 25% chance to hurl a ball of corrosive bile at attacking enemies, dealing damage.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['poison', 'luck'],
    shop: "Passive I",
    position: 4
}
abilities['enduranceaura'] = {
    name: "Endurance Aura",
    lumber: 10,
    description: "Increases nearby friendly units' movement speed and attack rate.",
    abilityLevelBonus: "Attack rate bonus, movement speed bonus",
    heroLevelBonus: "",
    elements: [''],
    shop: "Passive I",
    position: 5
}
abilities['brillianceaura'] = {
    name: "Brilliance Aura",
    lumber: 15,
    description: "Increases the Hero's mana regeneration by a flat amount and percentage.",
    abilityLevelBonus: "Mana regeneration",
    heroLevelBonus: "",
    elements: ['arcane', 'water'],
    shop: "Passive I",
    position: 6
}
abilities['trueshotaura'] = {
    name: "Trueshot Aura",
    lumber: 15,
    description: "An aura that gives friendly nearby units bonus damage to their attacks.<br>When an enemy evades an attack, a percentage of the damage still hits, this damage ignores block.",
    abilityLevelBonus: "Damage bonus percentage, evasion ignore percentage",
    heroLevelBonus: "",
    elements: [''],
    shop: "Passive I",
    position: 7
}
abilities['bash'] = {
    name: "Bash",
    lumber: 10,
    description: "When dealing <span class = 'physical'>physical damage</span>, there is a chance to deal bonus damage based on the Hero's strength, as well as stun the target for 0.2 seconds.",
    abilityLevelBonus: "Bash chance, damage bonus",
    heroLevelBonus: "",
    elements: ['energy', 'luck'],
    shop: "Passive I",
    position: 8
}
abilities['cleavingattack'] = {
    name: "Cleaving Attack",
    lumber: 10,
    description: "The Hero strikes with such force that it strikes through to enemies near the primary attacked unit.",
    abilityLevelBonus: "Damage percentage",
    heroLevelBonus: "",
    elements: ['energy', 'meele'],
    shop: "Passive I",
    position: 9
}
abilities['criticalstrike'] = {
    name: "Critical Strike",
    lumber: 23,
    description: "When dealing <span class = 'physical'>physical damage</span>, there is a 20% chance of dealing bonus damage.",
    abilityLevelBonus: "Damage multiplier",
    heroLevelBonus: "",
    elements: ['blood', 'luck', 'crit'],
    shop: "Passive I",
    position: 10
}
abilities['evasion'] = {
    name: "Evasion",
    lumber: 15,
    description: "Gives a percent chance to avoid attacks.<br><span class = 'grayHint'>Not affected by luck.</span>",
    abilityLevelBonus: "Evasion chance",
    heroLevelBonus: "",
    elements: ['wind'],
    shop: "Passive I",
    position: 11
}
abilities['commandaura'] = {
    name: "Command Aura",
    lumber: 15,
    description: "An aura that gives nearby friendly units bonus damage to their attacks.",
    abilityLevelBonus: "Damage percentage bonus",
    heroLevelBonus: "",
    elements: ['energy'],
    shop: "Passive I",
    position: 12
}
//#endregion
//#region passive II
abilities['wardrums'] = {
    name: "War Drums",
    lumber: 30,
    description: "An aura that gives nearby friendly units a flat damage bonus.",
    abilityLevelBonus: "Damage bonus",
    heroLevelBonus: "",
    elements: [''],
    shop: "Passive II",
    position: 1
}
abilities['hardenedskin'] = {
    name: "Hardened Skin",
    lumber: 25,
    description: "Increases the Hero's block.",
    abilityLevelBonus: "Block bonus",
    heroLevelBonus: "",
    elements: ['earth'],
    shop: "Passive II",
    position: 2
}
abilities['pulverize'] = {
    name: "Pulverize",
    lumber: 20,
    description: "When dealing <span class = 'physical'>physical damage</span>, gives the Hero a 20% chance to deal bonus damage to enemies in a small area.",
    abilityLevelBonus: "Damage bonus",
    heroLevelBonus: "",
    elements: ['earth', 'energy', 'luck', 'onhit'],
    shop: "Passive II",
    position: 3
}
abilities['spikedcarapace'] = {
    name: "Spiked Carapace",
    lumber: 20,
    description: "Enhances the Hero's chitinous armor with organic barbs, giving the Hero bonus armor and returning melee and ranged attack damage to enemies.",
    abilityLevelBonus: "Armor bonus, damage returned percentage",
    heroLevelBonus: "",
    elements: ['dark', 'onhit'],
    shop: "Passive II",
    position: 4
}
abilities['incinerate'] = {
    name: "Incinerate",
    lumber: 15,
    description: "When the Hero deals <span class = 'physical'>physical damage</span>, it is enhanced with living flames that cling to the target. These flames add damage on the first attack, twice as much on the second attack, three times as much on the third attack, etc.|n|nIf a unit dies while under this effect, it is incinerated, dealing damage to all nearby hostile units.",
    abilityLevelBonus: "Damage bonus, incineration damage",
    heroLevelBonus: "",
    elements: ['fire', 'onhit'],
    shop: "Passive II",
    position: 5
}
abilities['unholyaura'] = {
    name: "Unholy Aura",
    lumber: 15,
    description: "Increases the movement speed and life regeneration rate of nearby friendly units.",
    abilityLevelBonus: "Hit point regeneration bonus, movement speed bonus",
    heroLevelBonus: "",
    elements: ['dark'],
    shop: "Passive II",
    position: 6
}
abilities['liquidfire'] = {
    name: "Liquid Fire",
    lumber: 10,
    description: "When dealing <span class = 'physical'>physical damage</span>, it sets the enemy on fire, dealing damage every second for 3 seconds.<br><span class = 'grayHint'>150 stacks max</span>",
    abilityLevelBonus: "Damage bonus",
    heroLevelBonus: "",
    elements: ['fire', 'onhit'],
    shop: "Passive II",
    position: 7
}
abilities['multishot'] = {
    name: "Multishot",
    lumber: 25,
    description: "<span class = 'goldHint'>Unique Attack Modifier</span><br>Fires several arrows, hitting the Hero's current target and additional enemies.",
    abilityLevelBonus: "Number of targets",
    heroLevelBonus: "",
    elements: ['ranged'],
    shop: "Passive II",
    position: 8
}
abilities['pillage'] = {
    name: "Pillage",
    lumber: 20,
    description: "Gives a 65% chance to get bonus gold from kills. <br><span class = 'grayhint'>1% Less effective for each Learnability level.</span>",
    abilityLevelBonus: "Gold bonus",
    heroLevelBonus: "",
    elements: ['economic'],
    shop: "Passive II",
    position: 9
}
abilities['envenomedweapons'] = {
    name: "Envenomed Weapons",
    lumber: 15,
    description: "When the Hero deals <span class = 'physical'>physical damage</span>, it poisons the enemy, dealing damage per second based on the target's hit points for 8 seconds.<br><span class = 'grayHint'>150 stacks max</span>",
    abilityLevelBonus: "Damage per second",
    heroLevelBonus: "",
    elements: ['poison', 'onhit'],
    shop: "Passive II",
    position: 10
}
abilities['slowaura'] = {
    name: "Slow Aura",
    lumber: 20,
    description: "Decreases nearby enemy units' movement speed and attack rate.",
    abilityLevelBonus: "Movement speed reduction, attack rate reduction",
    heroLevelBonus: "",
    elements: [''],
    shop: "Passive II",
    position: 11
}
abilities['devastatingblow'] = {
    name: "Devastating Blow",
    lumber: 15,
    description: "Enhances the Hero's next damage dealing attack or spell every 5 seconds so that it deals bonus damage plus 8% of the target's maximum health.",
    abilityLevelBonus: "Damage Bonus",
    heroLevelBonus: "",
    elements: ['fire'],
    shop: "Passive II",
    position: 12
}
//#endregion
//#region passive III
abilities['auraofimmortality'] = {
    name: "Aura of Immortality",
    lumber: 20,
    description: "Gives nearby friendly units a chance to completely avoid damage. <br><span class = 'grayHint'>Not affected by luck</span>",
    abilityLevelBonus: "Evasion chance",
    heroLevelBonus: "",
    elements: ['light'],
    shop: "Passive III",
    position: 1
}
abilities['auraoffear'] = {
    name: "Aura of Fear",
    lumber: 20,
    description: "Reduces the armor of nearby enemy units.",
    abilityLevelBonus: "Armor reduction",
    heroLevelBonus: "",
    elements: ['dark','blood'],
    shop: "Passive III",
    position: 2
}
abilities['auraofvulnerability'] = {
    name: "Aura of Vulnerability",
    lumber: 20,
    description: "Gives nearby enemy units a 5% chance to take increased damage.",
    abilityLevelBonus: "Damage multiplier",
    heroLevelBonus: "",
    elements: ['dark','luck'],
    shop: "Passive III",
    position: 3
}
abilities['finishingblow'] = {
    name: "Finishing Blow",
    lumber: 15,
    description: "The Hero instantly kills an enemy if it has below a certain percentage of its hit points.",
    abilityLevelBonus: "Required percentage",
    heroLevelBonus: "",
    elements: ['blood'],
    shop: "Passive III",
    position: 4
}
abilities['megaspeed'] = {
    name: "Mega Speed",
    lumber: 55,
    description: "Reduces the hero's attack cooldown to a flat value, increasing its effective attack speed.",
    abilityLevelBonus: "Reduces the hero's attack cooldown further",
    heroLevelBonus: "",
    elements: ['energy','wind'],
    shop: "Passive III",
    position: 5
}
abilities['fastmagic'] = {
    name: "Fast Magic",
    lumber: 20,
    description: "Reduces the Hero's spell cooldowns by a percentage.",
    abilityLevelBonus: "Cooldown reduction percentage",
    heroLevelBonus: "",
    elements: ['arcane'],
    shop: "Passive III",
    position: 6
}
abilities['manabonus'] = {
    name: "Mana Bonus",
    lumber: 200,
    description: "Increases the Hero's mana for every [<span class = 'water'>Water</span>] spell it has.<br>After casting a [<span class = 'water'>Water</span>] spell, the Hero recovers a percentage of its mana.",
    abilityLevelBonus: "Mana Bonus",
    heroLevelBonus: "",
    elements: ['water'],
    shop: "Passive III",
    position: 7
}
abilities['learnability'] = {
    name: "Learnability",
    lumber: 10,
    description: "The Hero gains additional experience for killing an enemy unit. <br><span class = 'grayHint'>1% Less effective for each Pillage level</span>",
    abilityLevelBonus: "Experience bonus",
    heroLevelBonus: "",
    elements: ['economic'],
    shop: "Passive III",
    position: 8
}
abilities['powerofice'] = {
    name: "Power of Ice",
    lumber: 50,
    description: "Every second the Hero deals damage based on its level to 3 nearby enemy units.",
    abilityLevelBonus: "Damage, level damage multiplier",
    heroLevelBonus: "",
    elements: ['water','cold'],
    shop: "Passive III",
    position: 9
}
abilities['fireforce'] = {
    name: "Fire Force",
    lumber: 50,
    description: "Every time the Hero is attacked it has a 12% chance to deal damage to all nearby enemy units based on its strength.",
    abilityLevelBonus: "Strength damage multiplier",
    heroLevelBonus: "",
    elements: ['fire','luck'],
    shop: "Passive III",
    position: 10
}
abilities['airforce'] = {
    name: "Air Force",
    lumber: 20,
    description: "Increases all damage dealt by the Hero by a percentage of its Agility.",
    abilityLevelBonus: "Agility damage multiplier",
    heroLevelBonus: "",
    elements: ['wind'],
    shop: "Passive III",
    position: 11
}
abilities['thunderforce'] = {
    name: "Thunder Force",
    lumber: 50,
    description: "When the Hero attacks an enemy unit it calls forth a bolt of lightning that bounces to up to 5 enemy units, dealing damage based on the Hero's intelligence.",
    abilityLevelBonus: "Intelligence damage multiplier",
    heroLevelBonus: "",
    elements: ['wind'],
    shop: "Passive III",
    position: 12
}
//#endregion
//#region passive IV
abilities['reincarnation'] = {
    name: "Reincarnation",
    lumber: 50,
    description: "When killed, the Hero will come back to life.",
    abilityLevelBonus: "Cooldown reduction",
    heroLevelBonus: "",
    elements: ['arcane', 'light'],
    shop: "Passive IV",
    position: 1
}
abilities['drunkenmaster'] = {
    name: "Drunken Master",
    lumber: 25,
    description: "Gives the Hero bonus evasion. When the Hero deals <span class = 'physical'>physical damage</span> it has a 30% chance to deal bonus damage.",
    abilityLevelBonus: "Damage bonus, evasion bonus",
    heroLevelBonus: "",
    elements: ['luck', 'crit'],
    shop: "Passive IV",
    position: 2
}
abilities['destruction'] = {
    name: "Destruction",
    lumber: 35,
    description: "When the Hero deals <span class = 'physical'>physical damage</span>, it has a 15% chance to deal damage to all nearby enemy units in a small area.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['energy', 'onhit', 'luck'],
    shop: "Passive IV",
    position: 3
}
abilities['demolish'] = {
    name: "Demolish",
    lumber: 55,
    description: "Causes attacks to do bonus damage to enemies.",
    abilityLevelBonus: "Damage multiplier",
    heroLevelBonus: "",
    elements: [''],
    shop: "Passive IV",
    position: 4
}
abilities['multicast'] = {
    name: "Multicast",
    lumber: 35,
    description: "When the Hero casts a non-passive spell it has a chance to re-cast the spell up to 6 times.",
    abilityLevelBonus: "Recast chance",
    heroLevelBonus: "",
    elements: ['arcane', 'energy'],
    shop: "Passive IV",
    position: 5
}
abilities['combustion'] = {
    name: "Combustion",
    lumber: 5,
    description: "Adds bonus flat damage to all <span class = 'magical'>magical damage</span> dealt by the Hero.",
    abilityLevelBonus: "Damage bonus",
    heroLevelBonus: "",
    elements: ['fire'],
    shop: "Passive IV",
    position: 6
}
abilities['chaosmagic'] = {
    name: "Chaos Magic",
    lumber: 30,
    description: "When the Hero casts any spell a random spell is also cast. <br><span class = 'grayHint'>Cannot cast passives, and spells with the [<span class = 'plain'>Plain</span>] or [<span class = 'summon'>Summon</span>] tags. <br>Does not require the spell to have been purchased.</span>",
    abilityLevelBonus: "Random spell level",
    heroLevelBonus: "",
    elements: ['arcane', 'dark', 'light', 'energy', 'poison', 'wild', 'blood', 'cold', 'fire', 'water', 'wind', 'earth'],
    shop: "Passive IV",
    position: 7
}
abilities['heavyblow'] = {
    name: "Heavy Blow",
    lumber: 10,
    description: "Adds bonus flat damage to all <span class = 'physical'>physical damage</span> dealt by the Hero.",
    abilityLevelBonus: "Damage bonus",
    heroLevelBonus: "",
    elements: ['light'],
    shop: "Passive IV",
    position: 8
}
abilities['icearmor'] = {
    name: "Ice Armor",
    lumber: 10,
    description: "Reduces damage taken by the Hero by 80% once every few seconds.",
    abilityLevelBonus: "Cooldown reduction",
    heroLevelBonus: "",
    elements: ['water', 'cold'],
    shop: "Passive IV",
    position: 9
}
abilities['lastbreath'] = {
    name: "Last Breath",
    lumber: 20,
    description: "When dealt fatal damage, the Hero continues to live for a short period of time.",
    abilityLevelBonus: "Duration",
    heroLevelBonus: "",
    elements: ['dark', 'light', 'stable'],
    shop: "Passive IV",
    position: 10
}
abilities['fireshield'] = {
    name: "Fire Shield",
    lumber: 20,
    description: "Burns nearby enemy units, dealing damage every second. Also increases magic protection.",
    abilityLevelBonus: "Damage per second, magic protection bonus",
    heroLevelBonus: "",
    elements: ['fire'],
    shop: "Passive IV",
    position: 11
}
abilities['ancientteaching'] = {
    name: "Ancient Teaching",
    lumber: 20,
    description: "When the Hero uses a spell the cooldown is instantly reset. The cooldown of Ancient Teaching is based on the cooldown of the used spell. <br><span class = 'grayHint'>Cannot reset the cooldown of spells with the [<span class = 'stable'>Stable</span>] tag.</span>",
    abilityLevelBonus: "Cooldown reduction",
    heroLevelBonus: "",
    elements: ['arcane', 'stable'],
    shop: "Passive IV",
    position: 12
}
//#endregion
//#region passive V
abilities['mysterioustalent'] = {
    name: "Mysterious Talent",
    lumber: 50,
    description: "The hero automatically casts all available spells, ignoring cooldowns. <br><span class = 'grayHint'>Cannot cast passives or spells with the [<span class = 'plain'Plain</span>] tag.</span>",
    abilityLevelBonus: "Cooldown reduction",
    heroLevelBonus: "",
    elements: ['arcane', 'energy'],
    shop: "Passive V",
    position: 1
}
abilities['stoneprotection'] = {
    name: "ability",
    lumber: 40,
    description: "When the Hero takes damage, a stone is thrown at the source, dealing damage, stunning it, and making it visible for a short period of time.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['earth'],
    shop: "Passive V",
    position: 2
}
abilities['cruelty'] = {
    name: "Cruelty",
    lumber: 80,
    description: "When the Hero deals <span class = 'physical'>physical damage</span> it deals bonus damage once every few seconds.",
    abilityLevelBonus: "Damage multiplier",
    heroLevelBonus: "",
    elements: ['blood'],
    shop: "Passive V",
    position: 3
}
abilities['reaction'] = {
    name: "Reaction",
    lumber: 15,
    description: "When the Hero attacks, its evasion is increased for a short period of time.",
    abilityLevelBonus: "Evasion bonus",
    heroLevelBonus: "",
    elements: ['wind', 'unpurgable'],
    shop: "Passive V",
    position: 4
}
abilities['magiccriticalhit'] = {
    name: "Magical Critical Hit",
    lumber: 50,
    description: "When the Hero deals magic damage it has a 20% chance to deal bonus damage.",
    abilityLevelBonus: "Damage multiplier",
    heroLevelBonus: "",
    elements: ['arcane', 'energy', 'luck', 'crit'],
    shop: "Passive V",
    position: 5
}
abilities['megaluck'] = {
    name: "Mega Luck",
    lumber: 25,
    description: "Increases the Hero's luck. <br><span class = 'grayHint'>Luck increases the chance of abilities with the [<span class = 'luck'><Luck</span>] tag being triggered</span>",
    abilityLevelBonus: "level",
    heroLevelBonus: "",
    elements: [''],
    shop: "Passive V",
    position: 6
}
abilities['fatalflaw'] = {
    name: "Fatal Flaw",
    lumber: 20,
    description: "Once every few seconds when the Hero deals non-attack magic damage it ignores a pecentage of the enemy's magic resistance.",
    abilityLevelBonus: "Magic resistance ignore amount",
    heroLevelBonus: "",
    elements: ['arcane'],
    shop: "Passive V",
    position: 7
}
abilities['retaliationaura'] = {
    name: "Retaliation Aura",
    lumber: 50,
    description: "When a nearby enemy player casts a active spell the Hero has a chance to cast the same spell back, targetting the enemy caster if possible. The retaliation spell deals a percentage of it's normal damage, and bonus damage if the Hero has learned it. <br><span class = 'grayHint'>Multicast and [<span class = 'plain'>Plain</span>] spells cannot be retaliated",
    abilityLevelBonus: "Retaliation damage, area of effect.",
    heroLevelBonus: "",
    elements: ['arcane'],
    shop: "Passive V",
    position: 8
}
abilities['earthquake'] = {
    name: "Earthquake",
    lumber: 20,
    description: "The Hero automatically deals damage to all nearby enemy units, slowing them as well for a short period of time.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['earth'],
    shop: "Passive V",
    position: 9
}
abilities['coldwind'] = {
    name: "Cold Wind",
    lumber: 18,
    description: "When the Hero attacks it deals <span class = 'physical'>physical damage</span> to nearby enemy units once every few seconds.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['wind', 'cold'],
    shop: "Passive V",
    position: 10
}
abilities['drainaura'] = {
    name: "Drain Aura",
    lumber: 20,
    description: "The Hero automatically drains the hit points of nearby enemies every second.",
    abilityLevelBonus: "Hit points drained",
    heroLevelBonus: "",
    elements: ['dark', 'blood', 'lifesteal'],
    shop: "Passive V",
    position: 11
}
abilities['divinebubble'] = {
    name: "Divine Bubble",
    lumber: 25,
    description: "Removes all negative buffs for a short period of time and makes the Hero immune to the effects of [<span class ='onhit'>Onhit</span>] and [<span class = 'lifesteal'>Lifesteal</span>] abilities, automatically activates when the Hero is damaged.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['light'],
    shop: "Passive V",
    position: 12
}


//#endregion
//#region absolute
abilities['absolutefire'] = {
    name: "Absolute Fire",
    lumber: 40,
    description: "Increases the Hero's magic power for each [<span class = 'fire'>Fire</span>] spell it has. <br><br>After casting a [<span class = 'fire'>Fire</span>] spell, the Hero's magic power increases for 10 seconds.",
    abilityLevelBonus: "Magic power bonus",
    heroLevelBonus: "",
    elements: ['fire'],
    shop: "Absolute",
    position: 1
}
abilities['absolutewater'] = {
    name: "Absolute Water",
    lumber: 25,
    description: "Increases the Hero's mana for every [<span class = 'water'>fWater</span>] spell it has.<br><br>After casting a [<span class = 'water'>fWater</span>] spell, the Hero recovers a percentage of its mana.",
    abilityLevelBonus: "Mana bonus",
    heroLevelBonus: "",
    elements: ['water'],
    shop: "Absolute",
    position: 2
}
abilities['absolutewind'] = {
    name: "Absolute Wind",
    lumber: 35,
    description: "Increases the Hero's evasion and agility for every [<span class = 'wind'>Wind</span>] spell it has.<br><br>After casting a [<span class = 'wind'>Wind</span>] spell, the Hero temporarily gains bonus evasion and agility.",
    abilityLevelBonus: "Evasion bonus, agility bonus",
    heroLevelBonus: "",
    elements: ['wind'],
    shop: "Absolute",
    position: 3
}
abilities['absoluteearth'] = {
    name: "Absolute Earth",
    lumber: 30,
    description: "Increases the Hero's block for every [<span class = 'earth'>Earth</span>] spell it has. <br><br>After casting a [<span class = 'earth'>Earth</span>] spell, the Hero temporarily gains bonus block.",
    abilityLevelBonus: "Block bonus",
    heroLevelBonus: "",
    elements: ['earth'],
    shop: "Absolute",
    position: 4
}
abilities['absolutewild'] = {
    name: "Absolute Wild",
    lumber: 35,
    description: "Increases the power of the Hero's summons by a percentage for every [</span class = 'wild'>Wild</span>] spell it has.<br><br>After casting a [<span class = 'wild'>Wild</span>] spell, the Hero summons an Ent.",
    abilityLevelBonus: "Summon power",
    heroLevelBonus: "Ent hit points, Ent damage",
    elements: ['wild', 'summon'],
    shop: "Absolute",
    position: 5
}
abilities['absolutelight'] = {
    name: "Absolute Light",
    lumber: 20,
    description: "Increases the Hero's hit points by a percentage for every [<span class = 'light'>Light</span>] spell it has.<br><br>After casting a [<span class = 'light'>Light</span>]  spell, the Hero recovers some of its missing hit points.",
    abilityLevelBonus: "Hit point bonus",
    heroLevelBonus: "",
    elements: ['light'],
    shop: "Absolute",
    position: 6
}
abilities['absolutedark'] = {
    name: "Absolute Dark",
    lumber: 35,
    description: "The Hero's and allies' attacks ignore a percentage of enemy block for every [<span class = 'dark'>Dark</span>] spell it has.<br><br>After casting a [<span class = 'dark'>Dark</span>]  spell, the Hero drains a percentage of nearby enemies' hit points.",
    abilityLevelBonus: "Block ignored increased",
    heroLevelBonus: "",
    elements: ['dark', 'lifesteal'],
    shop: "Absolute",
    position: 7
}
abilities['absoluteblood'] = {
    name: "Absolute Blood",
    lumber: 40,
    description: "Increases the Hero's strength for every [<span class = 'blood'>Blood</span>] spell it has.<br><br>When the Hero has restored a certain amount of hit points through lifesteal it permanently gains bonus hit points.<br><span class = 'grayHint'>Only items or spells with the [<span class = 'lifesteal'>Lifesteal</span>] tag affect Absolute Blood</span>",
    abilityLevelBonus: "Strength bonus",
    heroLevelBonus: "",
    elements: ['blood', 'lifesteal'],
    shop: "Absolute",
    position: 8
}
abilities['absolutecold'] = {
    name: "Absolute Cold",
    lumber: 30,
    description: "Every 5 seconds, the Hero freezes nearby enemies, damaging and stunning them.|n|nAfter casting a [<span class = 'cold'>Cold</span>] spell, enemy heroes' spells are put on cooldown for a short period of time.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['cold'],
    shop: "Absolute",
    position: 9
}
abilities['absolutearcane'] = {
    name: "Absolute Arcane",
    lumber: 60,
    description: "The Hero's cooldowns are shorter for every [<span class = 'arcane'>Arcane</span>] spell it has.<br><br>The Hero drains the magic power of nearby enemy heroes for every [<span class = 'arcane'>Arcane</span>] spell it has every second<br><br><span class = 'grayHint'>10% as effective versus creeps/summons.<br>Cannot lower enemy magic power below 0.</span>",
    abilityLevelBonus: "Cooldown reduction",
    heroLevelBonus: "",
    elements: ['arcane'],
    shop: "Absolute",
    position: 10
}
abilities['absolutepoison'] = {
    name: "Absolute Poison",
    lumber: 40,
    description: "The Hero's [<span class = 'poison'>Poison</span>] spells do bonus damage for every [<span class = 'poison'>Poison</span>] spell it has. <br><br>Enemies have reduced hit point regeneration for every [<span class = 'poison'>Poison</span>] spell they are affected by.",
    abilityLevelBonus: "Damage bonus",
    heroLevelBonus: "",
    elements: ['poison'],
    shop: "Absolute",
    position: 11
}
//#endregion
//#region passive VI
abilities['ancientblood'] = {
    name: "Ancient Blood",
    lumber: 56,
    description: "Whenever the Hero has taken a certain amount of damage, all negative buffs are removed, it permanently gains bonus strength and the remaining cooldown of all its abilities that are currently on cooldown is reduced.<br><span class ='grayHint'>Cannot reset the cooldown of Last Breath or Divine Bubble.</span>",
    abilityLevelBonus: "Damage threshold reduction, cooldown reduction",
    heroLevelBonus: "",
    elements: ['blood'],
    shop: "Passive VI",
    position: 1
}
abilities['cutting'] = {
    name: "Cutting",
    lumber: 17,
    description: "When the Hero attacks an enemy it has a chance to deal increased damage and heal for a percentage of the damage dealt by that attack.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['blood', 'lifesteal', 'luck'],
    shop: "Passive VI",
    position: 2
}
abilities['divinegift'] = {
    name: "Divine Gift",
    lumber: 70,
    description: "Increases the Hero's maximum hit points by a percentage of its total hit points.<br>Heals the Hero and resets all negatives buffs every few seconds.",
    abilityLevelBonus: "Hit point bonus, heal amount",
    heroLevelBonus: "",
    elements: ['light'],
    shop: "Passive VI",
    position: 3
}
abilities['soulfrostbite'] = {
    name: "Soul Frostbite",
    lumber: 20,
    description: "When the Hero is damaged by an enemy hero it deals damage to them and puts their abilities on cooldown for a short period of time.",
    abilityLevelBonus: "Damage, cooldown duration",
    heroLevelBonus: "",
    elements: ['cold', 'dark'],
    shop: "Passive VI",
    position: 4
}
abilities['wizardbaneaura'] = {
    name: "Wizardbane Aura",
    lumber: 40,
    description: "An aura that gives friendly nearby units a damage shield, which returns a percentage of a magic damage back to enemies that attack it.<br><span class = 'grayHint'>1% less effective for each level of Thorns Aura and Reflection Aura.</span>",
    abilityLevelBonus: "Damage returned percentage",
    heroLevelBonus: "",
    elements: ['arcane', 'energy', 'onhit'],
    shop: "Passive VI",
    position: 5
}
abilities['martialretribution'] = {
    name: "Martial Retribution",
    lumber: 25,
    description: "Stores 50% of all damage taken by the Hero until it reaches a threshold. Once the threshold is reached all damage stored is released in an explosion, dealing <span class = 'physical'>physical damage</span> to nearby enemies.",
    abilityLevelBonus: "Threshold increase",
    heroLevelBonus: "Threshold increase",
    elements: ['energy'],
    shop: "Passive VI",
    position: 6
}
abilities['arcaneassault'] = {
    name: "Arcane Assault",
    lumber: 10,
    description: "Whenever the Hero attacks an enemy it deals 100% <span class ='physical'>physical</span> attack damage to random nearby enemies. Cannot hit the same enemy multiple times in one attack.<br></span class = 'grayHint'>Cannot be used in combination with Cleaving Attack or Multishot.</span>",
    abilityLevelBonus: "Enemies hit",
    heroLevelBonus: "",
    elements: ['arcane'],
    shop: "Passive VI",
    position: 7
}
abilities['reflectionaura'] = {
    name: "Reflection Aura",
    lumber: 25,
    description: "An aura that gives friendly nearby units a damage shield, which returns a percentage of a ranged attacker's damage back to it.<br><span class = 'grayHint'>1% less effective for each level of Thorns Aura and Wizardbane Aura.</span>",
    abilityLevelBonus: "Damage returned percentage",
    heroLevelBonus: "",
    elements: [''],
    shop: "Passive VI",
    position: 8
}
abilities['unlimitedagony'] = {
    name: "Unlimited Agony",
    lumber: 60,
    description: "The next time the Hero deals damage it cannot be reduced by spells or items, excluding magic immunity or invulnerability.<br><span class = 'grayHint'>The damage can still be reduced by Block, Magic Resistance, and armor.</span>",
    abilityLevelBonus: "Cooldown reduction",
    heroLevelBonus: "",
    elements: [''],
    shop: "Passive VI",
    position: 9
}

//#endregion
//#region active V
abilities['midastouch'] = {
    name: "Midas' Touch",
    lumber: 35,
    description: "Curses the target, if it dies while Midas' Touch is active it drops bonus gold.  Creeps hit by Midas' Touch become enraged, they gain maximum movement speed and their hp, damage, armor, block, magic power and magic protection increase.<br><span class = 'grayHint'>1% less effective for every level of Pillage, Learnability or Holy Enlightenment.</span>",
    abilityLevelBonus: "Gold multiplier",
    heroLevelBonus: "",
    elements: ['economic'],
    shop: "Active V",
    position: 1
}
abilities['silence'] = {
    name: "Silence",
    lumber: 20,
    description: "Stops all enemies in a target area from casting spells.",
    abilityLevelBonus: "Area of effect, duration",
    heroLevelBonus: "",
    elements: ['dark'],
    shop: "Active V",
    position: 2
}
abilities['stasistrap'] = {
    name: "Stasis Trap",
    lumber: 20,
    description: "Summons an invisible and immovable ward that stuns enemy units around it. The trap activates when an enemy unit approaches.",
    abilityLevelBonus: "Stun duration",
    heroLevelBonus: "",
    elements: ['arcane','summon'],
    shop: "Active V",
    position: 3
}
abilities['divineshield'] = {
    name: "Divine Shield",
    lumber: 15,
    description: "An impenetrable shield surrounds the Hero, protecting it from all damage and spells for a set amount of time.",
    abilityLevelBonus: "Duration",
    heroLevelBonus: "",
    elements: ['light','plain','unpurgable','stable'],
    shop: "Active V",
    position: 4
}
abilities['deathpact'] = {
    name: "Death Pact",
    lumber: 5,
    description: "Kills a target friendly Undead unit, giving a percentage of its hit points to the hero.",
    abilityLevelBonus: "Conversion rate",
    heroLevelBonus: "",
    elements: ['dark', 'dark'],
    shop: "Active V",
    position: 5
}
abilities['bigbadvoodoo'] = {
    name: "Big Bad Voodoo",
    lumber: 5,
    description: "Turns all friendly units invulnerable in an area around the Hero. The Hero does not turn invulnerable.",
    abilityLevelBonus: "Duration, cooldown reduction",
    heroLevelBonus: "",
    elements: ['arcane','arcane','dark','dark', 'plain'],
    shop: "Active V",
    position: 6
}
abilities['icybreath'] = {
    name: "Icy Breath",
    lumber: 15,
    description: "Breathes a cone of frost at enemy units that deals initial damage and damage per second over a small period of time.",
    abilityLevelBonus: "Damage, damage per second",
    heroLevelBonus: "",
    elements: ['cold'],
    shop: "Active V",
    position: 7
}
abilities['soulburn'] = {
    name: "Soul Burn",
    lumber: 25,
    description: "Wreaths an enemy unit in magical flames which cause damage over time, prevents the casting of spells, and reduces attack damage by 50%.",
    abilityLevelBonus: "Damage per second",
    heroLevelBonus: "",
    elements: ['fire'],
    shop: "Active V",
    position: 8
}
abilities['fog'] = {
    name: "Fog",
    lumber: 15,
    description: "Creates a cloud that stops units that are within it from casting spells, gives them a chance to miss attacks and slows their movement and attack speed.<br><span class = 'grayHint'>Does not channel.</span>",
    abilityLevelBonus: "Miss chance, move speed reduction, duration",
    heroLevelBonus: "",
    elements: ['water','wind'],
    shop: "Active V",
    position: 9
}
abilities['monsoon'] = {
    name: "Monsoon",
    lumber: 25,
    description: "Calls down a storm of lightning to strike enemy units in a target area, dealing damage periodically.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['water','water','wind','wind'],
    shop: "Active V",
    position: 10
}
abilities['cyclone'] = {
    name: "Cyclone",
    lumber: 20,
    description: "Creates a cyclone that deals damage to enemies in the targeted area every 0.20 seconds and reduces their movement speed by 65%.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['wind'],
    shop: "Active V",
    position: 11
}
abilities['randomspells'] = {
    name: "Random Spells",
    lumber: 20,
    description: "<br>Casts a random level 1 spell on the target unit or area.<br><br><span class = 'grayHint'>Cannot cast passives or spells with the [<span class = 'plain'>Plain</span>] or [<span class = 'summon'>Summon</span>] tags.<br>Does not require the spell to have been purchased.</span>",
    abilityLevelBonus: "Spell level",
    heroLevelBonus: "",
    elements: ['arcane','dark','light','energy','poison','wild','blood','cold','fire','water','wind','earth'],
    shop: "Active V",
    position: 12
}
//#endregion
//#region active VI
abilities['frostbolt'] = {
    name: "Frost Bolt",
    lumber: 45,
    description: "Fires bolt of ice at the target, dealing damage and stunning it.<br><br>Multicasts for every [<span class 'cold'>Cold</span>] spell the Hero has.<br>Damage increases for every [<span class = 'dark'>Dark</span>] the Hero has.<br>Cooldown decreases for every [<span class = 'water'>Water</span>] spell the Hero has.",
    abilityLevelBonus: "Damage",
    heroLevelBonus: "",
    elements: ['cold','water','dark'],
    shop: "Active VI",
    position: 1
}
abilities['sandoftime'] = {
    name: "Sand of Time",
    lumber: 30,
    description: "Reduces the remaining cooldown of all of the Hero's spells currently on cooldown.<br>Twice as effective on [<span class = 'earth'>Earth</span>] spells.",
    abilityLevelBonus: "Cooldown reduction",
    heroLevelBonus: "",
    elements: ['earth','arcane','stable'],
    shop: "Active VI",
    position: 2
}
abilities['purge'] = {
    name: "Purge",
    lumber: 40,
    description: "Infects the target with a bolt of lightning, after a few seconds it'll detonate, removing all buffs from the target unit.Enemy units are also immobilized for a few seconds and their movement speed is reduced by a factor of 5; they will slowly regain their movement speed over time.<br><span class = 'goldHint'>Deals damage to summoned units.</span><br><span class = 'grayHint'>Cannot remove debuffs from abilities with the [<span class = 'unpurgable'>Unpurgeable</span>] tag.</span>",
    abilityLevelBonus: "Delay reduction, Cooldown reduction, summon damage, immobilization, range",
    heroLevelBonus: "",
    elements: ['dark'],
    shop: "Active VI",
    position: 3
}
abilities['extradimensionalcooperation'] = {
    name: "Extradimensional Co-operation",
    lumber: 25,
    description: "When activated all damage dealt by the Hero is repeated again, making it deal double damage and increasing the chance of triggering on hit effects.",
    abilityLevelBonus: "Duration, cooldown reduction",
    heroLevelBonus: "",
    elements: ['arcane','onhit'],
    shop: "Active VI",
    position: 4
}
abilities['blinkstrike'] = {
    name: "Blink Strike",
    lumber: 25,
    description: "Instantly teleports the Hero to a random nearby enemy and attacks it dealing bonus damage. This attack gives the Hero a 100% chance to activate all its [<span class = 'crit'>Crit</span>] abilities and items.",
    abilityLevelBonus: "Damage bonus, cooldown reduction",
    heroLevelBonus: "",
    elements: ['wind','arcane'],
    shop: "Active VI",
    position: 5
}
abilities['dousinghex'] = {
    name: "Dousing Hex",
    lumber: 25,
    description: "Hexes the target enemy unit, dousing it in water; when it uses a spell the cooldown of that spell is increased. Any non-passive [<span class = 'fire'>Fire</span>] spell cast by the target has a chance of failing.",
    abilityLevelBonus: "Target cooldown increase, spell failure chance",
    heroLevelBonus: "",
    elements: ['water'],
    shop: "Active VI",
    position: 6
}
abilities['manastarvation'] = {
    name: "Mana Starvation",
    lumber: 20,
    description: "Starves the target enemy unit of mana. It cannot regenerate mana while this spell is active.<br><br>While Mana Starvation is active the Hero's attack damage is increased by the amount of mana the target has lost since the spell was cast.",
    abilityLevelBonus: "Duration",
    heroLevelBonus: "",
    elements: ['water','dark'],
    shop: "Active VI",
    position: 7
}
abilities['ancientrunes'] = {
    name: "Ancient Runes",
    lumber: 20,
    description: "At the beginning of every fight, 3 random runes are created.|n|nActivate this ability to automatically pickup all nearby runes on the ground.<br><br><span class = 'grayHint'>The Quests menu contains a list of all the runes.</span>",
    abilityLevelBonus: "Rune Power",
    heroLevelBonus: "",
    elements: ['arcane'],
    shop: "Active VI",
    position: 8
}
//#endregion




// abilities['ability'] = {
//     name: "ability",
//     lumber: 10,
//     description: "desc",
//     abilityLevelBonus: "level",
//     heroLevelBonus: "",
//     elements: ['fire'],
//     shop: "Active III",
//     position: 1
// }