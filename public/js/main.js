let elementFilter = [];

function displayStats(heroName){
    console.log("nothing");
}
function getProjectileSpeed(speed){
    if (speed < 1){
        speed = "N/A";
    }else {
        speed = parseFloat(speed).toFixed(2);
    }
    return speed;
}
function getRange(range){
    if (range <= 150){
        range = parseFloat(range).toFixed(2) + " (melee)";
    }
    else {
        range = parseFloat(range).toFixed(2);
    }
    return range;
}
function createElementString(elementArray){
    let elementHTML = "";
    elementArray.forEach(element => {
        switch (element) {
            case 'earth':
                elementHTML += "[<span class = 'earth'>Earth</span>]";
                break;
            case 'fire':
                elementHTML += "[<span class = 'fire'>Fire</span>]";
                break;
            case 'wind':
                elementHTML += "[<span class = 'wind'>Wind</span>]";
                break;
            case 'arcane':
                elementHTML += "[<span class = 'arcane'>Arcane</span>]";
                break;
            case 'spirit':
                elementHTML += "[<span class = 'spirit'>Spirit</span>]";
                break;
            case 'poison':
                elementHTML += "[<span class = 'poison'>Poison</span>]";
                break;
            case 'energy':
                elementHTML += "[<span class = 'energy'>Energy</span>]";
                break;
            case 'water':
                elementHTML += "[<span class = 'water'>Water</span>]";
                break;
            case 'cold':
                elementHTML += "[<span class = 'cold'>Cold</span>]";
                break;
            case 'dark':
                elementHTML += "[<span class = 'dark'>Dark</span>]";
                break;
            case 'light':
                elementHTML += "[<span class = 'light'>Light</span>]";
                break;
            case 'blood':
                elementHTML += "[<span class = 'blood'>Blood</span>]";
                break;
            case 'wild':
                elementHTML += "[<span class = 'wild'>Wild</span>]";
                break;
            case 'divinity':
                elementHTML += "[<span class = 'divinity'>Divinity</span>]";
                break;
            case 'time':
                elementHTML += "[<span class = 'time'>Time</span>]";
                break;
            default: 
                elementHTML += "";
        }
    });

    return elementHTML;
}
function createTagString(tagArray){
    let tagHTML = "";
    tagArray.forEach(tag => {
        switch (tag) {
            case 'unpurgable':
                tagHTML += "[<span class = 'unpurgable'>Unpurgable</span>]";
                break;
            case 'stable':
                tagHTML += "[<span class = 'stable'>Stable</span>]";
                break;
            case 'mysterious':
                tagHTML += "[<span class = 'mysterious'>Mysterious</span>]";
                break;
            case 'chaos':
                tagHTML += "[<span class = 'chaos'>Chaos</span>]";
                break;
            case 'ranged':
                tagHTML += "[<span class = 'ranged'>Ranged Only</span>]";
                break;
            case 'meele':
                tagHTML += "[<span class = 'meele'>Meele Only</span>]";
                break;
            case 'lifesteal':
                tagHTML += "[<span class = 'lifesteal'>Lifesteal</span>]";
                break;
            case 'luck':
                tagHTML += "[<span class = 'luck'>Luck</span>]";
                break;
            case 'crit':
                tagHTML += "[<span class = 'crit'>Crit</span>]";
                break;
            case 'onhit':
                tagHTML += "[<span class = 'onhit'>Onhit</span>]";
                break;
            case 'plain':
                tagHTML += "[<span class = 'plain'>Plain</span>]";
                break;
            case 'summon':
                tagHTML += "[<span class = 'summon'>Summon</span>]"
                break;
            case 'economic':
                tagHTML += "[<span class = 'economic'>Economic</span>]"
                break;
            default: 
                tagHTML += "";
        }
    });

    return tagHTML;
}
function createCurrencyString(id){
    currencyString = `<div class = currency>`;
    if (items[id].gold > 0){
        currencyString += `<div><img src = "images/tooltipgoldicon.png" height = "24px" width = "24px" alt = "gold"> <span class = "goldHint">`+items[id].gold+`</span></div>`;
    }
    if (items[id].lumber > 0){
        currencyString += `<div><img src = "images/tooltiplumbericon.png" height = "24px" width = "24px" alt = "lumber"> <span class = "goldHint">`+items[id].lumber+`</span></div>`;
    }
    currencyString += `</div><div class = "currency">`;
    if (items[id].glory > 0){
        currencyString += `<div class = "glory">Costs `+items[id].glory+` Glory.</div>`;
    }
    if (items[id].exp > 0){
        currencyString += `<div class = "exp">Costs `+items[id].exp+` Experience.</div>`;
    }
    currencyString += `</div>`;
    return currencyString;
}
function compileAbilityBonus(abilityBonus){
    let bonusHTML = "";
    if (abilityBonus !== ""){
        bonusHTML = 
        `
        <span class = "yellowHint">Ability Level Bonus</span><br>
        `+abilityBonus+`<br>
        `
    }
    return bonusHTML;
}
function compileHeroBonus(heroBonus){
    let bonusHTML = "";
    if (heroBonus !== ""){
        bonusHTML = 
        `
        <span class = "blueHint">Hero Level Bonus</span><br>
        `+heroBonus+`
        `
    }
    return bonusHTML;
}
function heroName(heroName, heroNameProper){
    let name = heroName;
    if (heroName !== heroNameProper){
        name = heroNameProper + " the " + heroName;
    }
    return name;
}
function passiveName(passiveName){
    if (passiveName === ""){
        passiveName = "Passive";
    }
    return passiveName;
}
function heroNotes(notes){
    notesHTML = "";

    return notesHTML;
}
function showHeroNotes(notes){
    //console.log(notes);
    let notesHTML;
    if (notes.length === 0 || notes[0] === ''){
        notesHTML = "";
    }
    else {
        let notesListItems = "";
        notes.forEach(notes => {
            notesListItems += "<li>" + notes + "</li>";
        })
        notesHTML = 
        `
        <div class = "heroNotes"> 
        <ul>
            <h5>Additional Information</h5> 
            ` + notesListItems + `
        </ul>
        </div>
        `
    }
    return notesHTML;
}
function passiveLevelInfo(levelInfo){
    let levelInfoHTML = "";
    if (levelInfo === ""){
        let levelInfoHTML = "";
    } 
    else {
        levelInfoHTML = "<h5 class = levelInfo>Leveling Up</h5>" + "<p>"+levelInfo+"</p>";
    }
    return levelInfoHTML;
}
function primaryStat(stat){
    let statHTML = "";
    switch (stat) {
        case 'Strength':
            statHTML += "<span style = 'color: red;'>Strength</span>"; 
            break;
        case 'Agility':
            statHTML += "<span style = 'color: green;'>Agility</span>";
            break;
        case 'Inteligence':
            statHTML += "<span style = 'color: blue;'>Inteligence</span>";
            break;
        default:
            statHTML = "<span>???</span>";
            break;
    }
    return statHTML;
}
function populateHeroModals(){
    let icons = "";
    let modals = "";
    for (let i = 0; i < heroesAssoc.length; i++){
        icons +=
        `
        <img src = "images/`+heroesAssoc[i]+`.png" height = "64px" width = "64px" alt = "`+heroesAssoc[i]+`" type = "button" data-bs-toggle = "modal" data-bs-target="#`+heroesAssoc[i]+`-modal">
        `
        modals +=
        `
        <div class="modal fade `+heroesAssoc[i]+`-modal" id="`+heroesAssoc[i]+`-modal" tabindex="-1" aria-labelledby="`+heroesAssoc[i]+`-ModalLabel" aria-hidden="true">
        <div class="modal-dialog "> <!--modal-lg-->
            <div class="modal-content heroModals">
                <div class="modal-header">
                    <h5 class="modal-title" id="`+heroesAssoc[i]+`-ModalLabel">`+heroName(heroes[heroesAssoc[i]].name, heroes[heroesAssoc[i]].nameProper)+`</h5>
                </div>
                <div class="modal-body">
                    <div class = "heroAbout">
                        <div class = "img">
                            <img src = "images/`+heroesAssoc[i]+`portrait.png" alt = "`+heroesAssoc[i]+`">
                        </div>
                        <div class = "stats-box">
                            <h4>Primary Stat - `+primaryStat(heroes[heroesAssoc[i]].primaryStat)+`</h4>
                            <div class = "stats">
                                <div>
                                    <ul>
                                        <li>
                                            <div class = "stat-name">Cast Backswing</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].animCastBackswing).toFixed(3) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Cast Point</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].animCastPoint).toFixed(3) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Attack Cooldown</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].attackCooldown).toFixed(3) + `</span>
                                        </li>

                                        <li>
                                            <div class = "stat-name">Base Damage</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseDamage).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Damage Dice</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].diceQuantity).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Damage Per Die</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].diceDamage).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Base Defense</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseDefense).toFixed(2) + `</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <div class = "stat-name">Base Strength</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseStr).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Base Agility</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseAgi).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Base Inteligence</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseInt).toFixed(2) + `</span>
                                        </li>

                                        <li>
                                            <div class = "stat-name">Base Health</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseHealth).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Base Mana</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseMana).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Range</div>
                                            <span class = "stat">` + getRange(heroes[heroesAssoc[i]].range) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Movement Speed</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].movementSpeed).toFixed(2) + `</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <div class = "stat-name">Strength Per Level</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].strPerLevel).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Agility Per Level</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].agiPerLevel).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Inteligence Per Level</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].intPerLevel).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Base Health Regen</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].healthRegen).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Base Mana Regen</div>
                                            <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].manaRegen).toFixed(2) + `</span>
                                        </li>
                                        <li>
                                            <div class = "stat-name">Projectile Speed</div>
                                            <span class = "stat">` + getProjectileSpeed(heroes[heroesAssoc[i]].projectileSpeed) + `</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "heroPassive">
                        <h4>` + passiveName(heroes[heroesAssoc[i]].passiveName) + ` ` + createElementString(heroes[heroesAssoc[i]].elements) + createTagString(heroes[heroesAssoc[i]].elements) +`</h4>
                        <p>` + heroes[heroesAssoc[i]].passiveInfo + `</p>
                        <p>` + passiveLevelInfo(heroes[heroesAssoc[i]].passiveLevelInfo) + `</p>
                    </div>
                     ` + showHeroNotes(heroes[heroesAssoc[i]].heroNotes) + `
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary closeButton" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `;
    }
$('.heroGrid').html(icons);
$('#modals').html(modals);
}
function heroElementFilter(){
    let elementFilter =  document.getElementById("heroFilter").value;
    let icons = "";
    let modals = "";
    if (elementFilter === "default"){
        window.location.reload();
    }
    else if (elementFilter === "none"){
        for (let i = 0; i < heroesAssoc.length; i++){
            if (createElementString(heroes[heroesAssoc[i]].elements) === ""){
                icons +=
                `
                <img src = "images/`+heroesAssoc[i]+`.png" height = "64px" width = "64px" alt = "`+heroesAssoc[i]+`" type = "button" data-bs-toggle = "modal" data-bs-target="#`+heroesAssoc[i]+`-modal">
                `
                modals +=
                `
                <div class="modal fade `+heroesAssoc[i]+`-modal" id="`+heroesAssoc[i]+`-modal" tabindex="-1" aria-labelledby="`+heroesAssoc[i]+`-ModalLabel" aria-hidden="true">
                <div class="modal-dialog "> <!--modal-lg-->
                    <div class="modal-content heroModals">
                        <div class="modal-header">
                            <h5 class="modal-title" id="`+heroesAssoc[i]+`-ModalLabel">`+heroName(heroes[heroesAssoc[i]].name, heroes[heroesAssoc[i]].nameProper)+`</h5>
                        </div>
                        <div class="modal-body">
                            <div class = "heroAbout">
                                <div class = "img">
                                    <img src = "images/`+heroesAssoc[i]+`portrait.png" alt = "`+heroesAssoc[i]+`">
                                </div>
                                <div class = "stats-box">
                                    <h4>Primary Stat - `+primaryStat(heroes[heroesAssoc[i]].primaryStat)+`</h4>
                                    <div class = "stats">
                                        <div>
                                            <ul>
                                                <li>
                                                    <div class = "stat-name">Cast Backswing</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].animCastBackswing).toFixed(3) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Cast Point</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].animCastPoint).toFixed(3) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Attack Cooldown</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].attackCooldown).toFixed(3) + `</span>
                                                </li>
        
                                                <li>
                                                    <div class = "stat-name">Base Damage</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseDamage).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Damage Dice</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].diceQuantity).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Damage Per Die</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].diceDamage).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Defense</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseDefense).toFixed(2) + `</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <div class = "stat-name">Base Strength</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseStr).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Agility</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseAgi).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Inteligence</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseInt).toFixed(2) + `</span>
                                                </li>
        
                                                <li>
                                                    <div class = "stat-name">Base Health</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseHealth).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Mana</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseMana).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Range</div>
                                                    <span class = "stat">` + getRange(heroes[heroesAssoc[i]].range) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Movement Speed</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].movementSpeed).toFixed(2) + `</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <div class = "stat-name">Strength Per Level</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].strPerLevel).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Agility Per Level</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].agiPerLevel).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Inteligence Per Level</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].intPerLevel).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Health Regen</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].healthRegen).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Mana Regen</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].manaRegen).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Projectile Speed</div>
                                                    <span class = "stat">` + getProjectileSpeed(heroes[heroesAssoc[i]].projectileSpeed) + `</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class = "heroPassive">
                                <h4>` + passiveName(heroes[heroesAssoc[i]].passiveName) + ` ` + createElementString(heroes[heroesAssoc[i]].elements) + createTagString(heroes[heroesAssoc[i]].elements) +`</h4>
                                <p>` + heroes[heroesAssoc[i]].passiveInfo + `</p>
                                <p>` + passiveLevelInfo(heroes[heroesAssoc[i]].passiveLevelInfo) + `</p>
                            </div>
                            ` + showHeroNotes(heroes[heroesAssoc[i]].heroNotes) + `
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary closeButton" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            }
        }
    }
    else {
        console.log(elementFilter);
        for (let i = 0; i < heroesAssoc.length; i++){
            if (heroes[heroesAssoc[i]].elements.includes(elementFilter)){
                icons +=
                `
                <img src = "images/`+heroesAssoc[i]+`.png" height = "64px" width = "64px" alt = "`+heroesAssoc[i]+`" type = "button" data-bs-toggle = "modal" data-bs-target="#`+heroesAssoc[i]+`-modal">
                `
                modals +=
                `
                <div class="modal fade `+heroesAssoc[i]+`-modal" id="`+heroesAssoc[i]+`-modal" tabindex="-1" aria-labelledby="`+heroesAssoc[i]+`-ModalLabel" aria-hidden="true">
                <div class="modal-dialog "> <!--modal-lg-->
                    <div class="modal-content heroModals">
                        <div class="modal-header">
                            <h5 class="modal-title" id="`+heroesAssoc[i]+`-ModalLabel">`+heroName(heroes[heroesAssoc[i]].name, heroes[heroesAssoc[i]].nameProper)+`</h5>
                        </div>
                        <div class="modal-body">
                            <div class = "heroAbout">
                                <div class = "img">
                                    <img src = "images/`+heroesAssoc[i]+`portrait.png" alt = "`+heroesAssoc[i]+`">
                                </div>
                                <div class = "stats-box">
                                    <h4>Primary Stat - `+primaryStat(heroes[heroesAssoc[i]].primaryStat)+`</h4>
                                    <div class = "stats">
                                        <div>
                                            <ul>
                                                <li>
                                                    <div class = "stat-name">Cast Backswing</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].animCastBackswing).toFixed(3) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Cast Point</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].animCastPoint).toFixed(3) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Attack Cooldown</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].attackCooldown).toFixed(3) + `</span>
                                                </li>
        
                                                <li>
                                                    <div class = "stat-name">Base Damage</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseDamage).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Damage Dice</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].diceQuantity).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Damage Per Die</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].diceDamage).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Defense</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseDefense).toFixed(2) + `</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <div class = "stat-name">Base Strength</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseStr).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Agility</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseAgi).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Inteligence</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseInt).toFixed(2) + `</span>
                                                </li>
        
                                                <li>
                                                    <div class = "stat-name">Base Health</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseHealth).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Mana</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].baseMana).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Range</div>
                                                    <span class = "stat">` + getRange(heroes[heroesAssoc[i]].range) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Movement Speed</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].movementSpeed).toFixed(2) + `</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li>
                                                    <div class = "stat-name">Strength Per Level</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].strPerLevel).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Agility Per Level</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].agiPerLevel).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Inteligence Per Level</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].intPerLevel).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Health Regen</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].healthRegen).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Base Mana Regen</div>
                                                    <span class = "stat">` + parseFloat(heroes[heroesAssoc[i]].manaRegen).toFixed(2) + `</span>
                                                </li>
                                                <li>
                                                    <div class = "stat-name">Projectile Speed</div>
                                                    <span class = "stat">` + getProjectileSpeed(heroes[heroesAssoc[i]].projectileSpeed) + `</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class = "heroPassive">
                                <h4>` + passiveName(heroes[heroesAssoc[i]].passiveName) + ` ` + createElementString(heroes[heroesAssoc[i]].elements) + createTagString(heroes[heroesAssoc[i]].elements) +`</h4>
                                <p>` + heroes[heroesAssoc[i]].passiveInfo + `</p>
                                <p>` + passiveLevelInfo(heroes[heroesAssoc[i]].passiveLevelInfo) + `</p>
                            </div>
                            ` + showHeroNotes(heroes[heroesAssoc[i]].heroNotes) + `
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary closeButton" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            }
        }
    }
    $('.heroGrid').html(icons);
    $('#modals').html(modals);

    
    

}
function defaultAbilitySort(){
    let shops = [];
    for (let i = 0; i < shopsAssoc.length; i++){
        shops[i] = "<div class = 'shop'><div class = 'shopHeader'>"+shopsAssoc[i]+"</div>";
        let position = 1;
        for (let x = 0; x < abilitiesAssoc.length; x++){
            //console.log(abilities[abilitiesAssoc[x]].shop);
            if (abilities[abilitiesAssoc[x]].shop === shopsAssoc[i] && abilities[abilitiesAssoc[x]].position === position){
                if (abilities[abilitiesAssoc[x]].name !== "blank"){
                    shops[i] += 
                    `
                    <img src = "images/abilityicons/`+abilitiesAssoc[x]+`.png" height = "64px" width = "64px" alt = "`+abilitiesAssoc[x]+`" onClick = "loadAbility('`+abilitiesAssoc[x]+`', '`+abilitiesAssoc[x]+`')"  class = "clickable">
                    `
                }
                else {
                    shops[i] += 
                    `
                    <img src = "images/blank.png" height = "64px" width = "64px" alt = "blank slot">
                    `
                }
                position++;
            }

            
        }
        shops[i] += "</div>";

    }
//console.log(shops);
$('#shopContainer').html(shops)
}
function elementAbilitySort(element){ //this is for sorting both elements AND tags
    let size = elementFilter.length;
    if (elementFilter.includes(element)){
        elementFilter.splice(elementFilter.indexOf(element), 1);
        console.log("remove element ", elementFilter);

        let sortedAbilities = [];
        for (let x = 0; x < abilitiesAssoc.length; x++){
            //filterPass = true, false on failing to have element/tag, on pass add to display array with assoc
            let filterPass = true;
            for (let i = 0; i < elementFilter.length; i++){
                if(abilities[abilitiesAssoc[x]].elements.includes(elementFilter[i]) === false){
                    filterPass = false;
                }
            }
            if (filterPass){
                //alert('inside filter pass');
                console.log(abilities[abilitiesAssoc[x]].name + " " + filterPass);
                sortedAbilities[sortedAbilities.length] = abilitiesAssoc[x];
            }    
        }
        console.log(sortedAbilities);
        filteredHTML = `<div class = "filteredBox">`;
        for (let x = 0; x < sortedAbilities.length; x++){
                filteredHTML += 
                `
                <img src = "images/abilityicons/`+sortedAbilities[x]+`.png" height = "64px" width = "64px" alt = "`+sortedAbilities[x]+`" onClick = "loadAbility('`+sortedAbilities[x]+`', '`+sortedAbilities[x]+`')"  class = "clickable">
                `
        }
        filteredHTML += `</div>`;

        if (sortedAbilities.length === 0){
            filteredHTML = `<div class = "noresults">No Results</div>`
        }
        $('#shopContainer').html(filteredHTML);

        if (elementFilter.length === 0){
            defaultAbilitySort();
            //$("#reset").click();
        }
        
    } else {
        elementFilter[size] = element;
        console.log("add element ", elementFilter);

        let sortedAbilities = [];
        for (let x = 0; x < abilitiesAssoc.length; x++){
            //filterPass = true, false on failing to have element/tag, on pass add to display array with assoc
            let filterPass = true;
            for (let i = 0; i < elementFilter.length; i++){
                if(abilities[abilitiesAssoc[x]].elements.includes(elementFilter[i]) === false){
                    filterPass = false;
                }
            }
            if (filterPass){
                //alert('inside filter pass');
                console.log(abilities[abilitiesAssoc[x]].name + " " + filterPass);
                sortedAbilities[sortedAbilities.length] = abilitiesAssoc[x];
            }    
        }
        console.log(sortedAbilities);
        filteredHTML = `<div class = "filteredBox">`;
        for (let x = 0; x < sortedAbilities.length; x++){
                filteredHTML += 
                `
                <img src = "images/abilityicons/`+sortedAbilities[x]+`.png" height = "64px" width = "64px" alt = "`+sortedAbilities[x]+`" onClick = "loadAbility('`+sortedAbilities[x]+`', '`+sortedAbilities[x]+`')"  class = "clickable">
                `
        }
        filteredHTML += `</div>`;

        if (sortedAbilities.length === 0){
            filteredHTML = `<div class = "noresults">No Results</div>`
        }
        $('#shopContainer').html(filteredHTML);
    }

    //alert(elementFilter);
}
function loadAbility(a, imagepath){
    let tooltip = 
    `
    <div>
        <h3 class = "left"><img src = "images/abilityicons/`+imagepath+`.png" height = "64px" width = "64px" alt = "`+abilitiesAssoc[a]+`"> `+abilities[a].name+`</h3>
        <p><img src = "images/tooltiplumbericon.png" height = "24px" width = "24px" alt = "lumber"> <span class = "goldHint">`+abilities[a].lumber+`</span></p>
        <hr>
        <div class = "desc">
            <div class = "test">
                `+createElementString(abilities[a].elements)+`<br>
                `+abilities[a].description+`
            </div><br>
            <div class = "bonuses">
                `+compileAbilityBonus(abilities[a].abilityLevelBonus)+`
                `+compileHeroBonus(abilities[a].heroLevelBonus)+`
            </div>
        </div>
    </div>
    <div>
        <p>`+createTagString(abilities[a].elements)+`</p>
        <p>Located in the `+abilities[a].shop+` Shop</p>
    </div>

    `;
    $('#tooltip').html(tooltip);
    $('html,body').scrollTop(0);

    //console.log(a);
}
function defaultItemSort(){
    let shops = []; //defines the shop array to insert into the html
    for (let i = 0; i < itemShops.length; i++){ //passing through each shop
        let tempItems = []; //defining the temp array for items we want in said shop
        for (let x = 0; x < items.length; x++){ //passing through items checking for matching shop
            if (items[x].shop === itemShops[i]){
                tempItems.push(items[x]); //pushing said item into temp array
            }
        }
        tempItems.sort(function(x, y){//sorts items by position ascending
            return x.position - y.position;
        })
        shops[i] = "<div class = 'shop'><div class = 'shopHeader'>"+itemShops[i]+"</div>";//construction of shop html with each item
        for (let y = 0; y < tempItems.length; y++){//placing each item in the shop
            if (tempItems[y].name !== "blank"){
                shops[i] += 
                `
                <img src = "images/itemicons/`+tempItems[y].fileName+`.png" height = "64px" width = "64px" alt = "`+tempItems[y].name+`" onClick = "loadItem('`+tempItems[y].id+`', '`+tempItems[y].fileName+`')"  class = "clickable">
                `
            }
            else {
                shops[i] += 
                `
                <img src = "images/blank.png" height = "64px" width = "64px" alt = "blank slot">
                `
            }

        }
        shops[i] += "</div>";
    }
    $('#shopContainer').html(shops);//posting html to shop container



    /*
    for (let i = 0; i < itemShops.length; i++){
        shops[i] = "<div class = 'shop'><div class = 'shopHeader'>"+itemShops[i]+"</div>";
        let position = 1;

        for (let x = 0; x < items.length; x++){
            if (items[x].shop === itemShops[i] && items[x].position === position){
                alert(position);
                shops[i] += 
                `
                <img src = "images/itemicons/`+items[x].fileName+`.png" height = "64px" width = "64px" alt = "`+items[x].name+`" onClick = "loadItem('`+x+`', '`+items[x].fileName+`')"  class = "clickable">
                `
                position++;
            }

            
        }
        shops[i] += "</div>";

    }
//console.log(shops);
$('#shopContainer').html(shops)
*/
}
function itemFilteredSort(filters){

}
function loadItem(i, imagepath){
    //alert(items[i].name +" "+ imagepath);
    let tooltip = 
    `
    <div>
        <h4 class = "left"><img src = "images/itemicons/`+imagepath+`.png" height = "64px" width = "64px" alt = "`+items[i].name+`"> `+items[i].name+`</h4>
        <div class = "currencyBox">`+createCurrencyString(i)+`</div>
        <hr>
        `+items[i].description+`
    </div>
    `;
    //     <p><img src = "images/tooltiplumbericon.png" height = "24px" width = "24px" alt = "lumber"> <span class = "goldHint">`+abilities[a].lumber+`</span></p>
    //     <hr>
    //     <div class = "desc">
    //         <div class = "test">
    //             `+createElementString(abilities[a].elements)+`<br>
    //             `+abilities[a].description+`
    //         </div><br>
    //         <div class = "bonuses">
    //             `+compileAbilityBonus(abilities[a].abilityLevelBonus)+`
    //             `+compileHeroBonus(abilities[a].heroLevelBonus)+`
    //         </div>
    //     </div>
    // </div>
    // <div>
    //     <p>`+createTagString(abilities[a].elements)+`</p>
    //     <p>Located in the `+abilities[a].shop+` Shop</p>
    // </div>

    // `;
    $('.initial').html("");
    $('#tooltip').html(tooltip);
    $('html,body').scrollTop(0);

}
function resetFilter(){
    elementFilter = [];
    $(':checkbox').each(function() {
        this.checked = false;
    });
    $('#tooltip').html("");
    defaultAbilitySort();
}
function checkNoElement(){
    let noElements = `<div class = "filteredBox">`;
    for (let x = 0; x < abilitiesAssoc.length; x++){
        //console.log(abilities[abilitiesAssoc[x]].shop);
        if (createElementString(abilities[abilitiesAssoc[x]].elements) === ""){
            if (abilities[abilitiesAssoc[x]].name !== "blank"){
                noElements += 
                `
                <img src = "images/abilityicons/`+abilitiesAssoc[x]+`.png" height = "64px" width = "64px" alt = "`+abilitiesAssoc[x]+`" onClick = "loadAbility('`+abilitiesAssoc[x]+`', '`+abilitiesAssoc[x]+`')"  class = "clickable">
                `
            }
        }

        
    }
    noElements += "</div>";
    $('#shopContainer').html(noElements)

}
//showHeroNotes(heroes[heroesAssoc[i]].heroNotes)