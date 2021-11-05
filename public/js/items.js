/*
Filters:
all elements, all tags, strength, agiliy, inteligence, attack damage, armor, health, mana, health regen, mana regen, physical, magical, attack speed, movement speed,
training, economic, powerup, consumable, glory, exp, scaling, magic protection, stackable, block, magic power, evasion, damage reduction, active ability, aura, debuff, buff, negation, non-item, pvp, healing... anything prevalent about an item at all

formatting...
    fileName will be only be alphanumerical characters EX: Xesil's Legacy === xesilslegacy

    remove any cost text EX 'costs 10.000 glory', 'costs 20.000 experience' etc

    remove and replace any color codes like this '|cffff8080Effects|r', replace with span class tags

    elements/tags = [<span class = 'element/tag'>Element/Tag</span>] EX: [<span class = 'fire'>Fire</span>]

    remove |n's use <br> as a line break when needed instead

    put a <span class = 'indent'>...</span> around all text that would look better indented (+'s and abilities mostly)

    remove any * before +'s

    lastly, reword anything that could be stated with fewer words or to be more clarical

    classes...
        gray text is <span class = "grayHint></span>" EX: <span class = "grayHint>1% less effective for each level of pillage</span>"
        effects, aoe, range, duration, cooldown, abilities, unique, physical, magical, glory, check main.css if missing any here

    If you need to insert a blank space like the in game shop, enter the name as blank and give it the correct position

    id will alwasy be blank, it will be overwritten anyways
*/
let itemShops = [
    'Arena Buffs II',
    'Arena Buffs I',
    'Glory Shop',
    'Summon Buffs',
    'Item Shop I',
    'Item Shop II',
    'PVE Shop I',
    'Item Shop III',
    'Item Shop IV',
    'Item Shop V',
    'Item Shop VI',
    'PVE Shop II',
    'Rune Shop',
    'Elemental Items',
    'Power Ups Shop I',
    'Power Ups Shop II'
]
let items = [
//#region arena buffs II
//#endregion
//#region arena buffs I
//#endregion
//#region glory shop
{
    fileName: "ancientaxe",
    name: "Ancient Axe",
    gold: 15000,
    lumber: 0,
    glory: 10000,
    exp: 0,
    description: "<span class = 'effects'>Effects</span><br><span class = 'indent'>+200 strength.<br>+5 pvp bonus.<br>+900 block.<br>+15 strength for every level the hero has.</span><br><br>[<span class = 'unique'>Unique</span>]<br><span class = 'indent'><span class = 'abilities'>Abilities</span><br>Deals 400% of the Hero's strength in damage to nearby enemies and stuns them.<br><span class = 'grayHint'>Cooldown lowers by 30% for every Ancient Axe carried.</span></span><br><br><span class = 'aoe'>Area of effect:</span> 600<br><span class = 'duration'>Duration:</span> 2 seconds <br><span class = 'cooldown'>Cooldown:</span> 30 seconds",
    shop: "Glory Shop",
    position: 1,
    id: '', //id remains blank always
    filters: ['strength','pvp','glory','block','scaling','active ability','stackable']
},
//#endregion
//#region summon buffs
//#endregion
//#region item shop I
//#endregion
//#region item shop II
//#endregion
//#region pve shop I
//#endregion
//#region item shop III
//#endregion
//#region item shop IV
//#endregion
//#region item shop V
//#endregion
//#region item shop VI
    {
        fileName: "holyshield",
        name: "Holy Shield",
        gold: 20000,
        lumber: 0,
        glory: 0,
        exp: 0,
        description: "<span class = 'effects'>Effects</span><br><span class = 'indent'>+50 armor.<br>+50 block.<br>+25 magic protection.<br>+15 evasion.</span><br><br>[]<span class = 'unique'>Unique</span><br><span class = 'abilities'>Abilities</span><br>When the Hero's hit points are reduced to 75% or less and it has available healing spells, they are automatically cast.<br><br><span class = 'cooldown'>Cooldown:</span> 10 seconds <br><br><span class = 'grayHint'>Can cast Holy Light, Healing Wave, Healing Ward, Rejuvenation</span>",
        shop: "Item Shop VI",
        position: 7,
        id: '',
        filters: ['armor','block','magic protection','evasion','healing']
    },
//#endregion
//#region pve shop II
//#endregion
//#region rune shop
//#endregion
//#region elemental items
//#endregion
//#region power ups shop I
//#endregion
//#region power ups shop II
//#endregion
]
for (let x = 0; x < items.length; x++){
    items[x].id = x;
}
/*
    item object template
    {
        fileName: "placeholder",
        name: "placeholder",
        gold: 0,
        glory: 0,
        exp: 0,
        description: "placeholder",
        shop: "shop",
        position: 1,
        id: '',
        filters: ['']
    }
*/
