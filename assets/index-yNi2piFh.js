var de=Object.defineProperty;var ae=(e,r,t)=>r in e?de(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var x=(e,r,t)=>(ae(e,typeof r!="symbol"?r+"":r,t),t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();function b(){}function j(e){return e()}function G(){return Object.create(null)}function L(e){e.forEach(j)}function H(e){return typeof e=="function"}function oe(e,r){return e!=e?r==r:e!==r||e&&typeof e=="object"||typeof e=="function"}function ue(e){return Object.keys(e).length===0}function o(e,r){e.appendChild(r)}function ce(e,r,t){e.insertBefore(r,t||null)}function J(e){e.parentNode&&e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function pe(e){return document.createTextNode(e)}function h(){return pe(" ")}function k(e,r,t,i){return e.addEventListener(r,t,i),()=>e.removeEventListener(r,t,i)}function D(e,r,t){t==null?e.removeAttribute(r):e.getAttribute(r)!==t&&e.setAttribute(r,t)}function fe(e){return Array.from(e.childNodes)}function v(e,r){e.value=r??""}let $;function N(e){$=e}const R=[],P=[];let S=[];const z=[],Ce=Promise.resolve();let T=!1;function we(){T||(T=!0,Ce.then(W))}function U(e){S.push(e)}const A=new Set;let q=0;function W(){if(q!==0)return;const e=$;do{try{for(;q<R.length;){const r=R[q];q++,N(r),me(r.$$)}}catch(r){throw R.length=0,q=0,r}for(N(null),R.length=0,q=0;P.length;)P.pop()();for(let r=0;r<S.length;r+=1){const t=S[r];A.has(t)||(A.add(t),t())}S.length=0}while(R.length);for(;z.length;)z.pop()();T=!1,A.clear(),N(e)}function me(e){if(e.fragment!==null){e.update(),L(e.before_update);const r=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,r),e.after_update.forEach(U)}}function Ee(e){const r=[],t=[];S.forEach(i=>e.indexOf(i)===-1?r.push(i):t.push(i)),t.forEach(i=>i()),S=r}const he=new Set;function ge(e,r){e&&e.i&&(he.delete(e),e.i(r))}function Oe(e,r,t){const{fragment:i,after_update:s}=e.$$;i&&i.m(r,t),U(()=>{const n=e.$$.on_mount.map(j).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...n):L(n),e.$$.on_mount=[]}),s.forEach(U)}function ve(e,r){const t=e.$$;t.fragment!==null&&(Ee(t.after_update),L(t.on_destroy),t.fragment&&t.fragment.d(r),t.on_destroy=t.fragment=null,t.ctx=[])}function qe(e,r){e.$$.dirty[0]===-1&&(R.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[r/31|0]|=1<<r%31}function Re(e,r,t,i,s,n,l=null,g=[-1]){const p=$;N(e);const a=e.$$={fragment:null,ctx:[],props:n,update:b,not_equal:s,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:G(),dirty:g,skip_bound:!1,root:r.target||p.$$.root};l&&l(a.root);let w=!1;if(a.ctx=t?t(e,r.props||{},(u,f,...B)=>{const O=B.length?B[0]:f;return a.ctx&&s(a.ctx[u],a.ctx[u]=O)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](O),w&&qe(e,u)),f}):[],a.update(),w=!0,L(a.before_update),a.fragment=i?i(a.ctx):!1,r.target){if(r.hydrate){const u=fe(r.target);a.fragment&&a.fragment.l(u),u.forEach(J)}else a.fragment&&a.fragment.c();r.intro&&ge(e.$$.fragment),Oe(e,r.target,r.anchor),W()}N(p)}class Se{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){ve(this,1),this.$destroy=b}$on(r,t){if(!H(t))return b;const i=this.$$.callbacks[r]||(this.$$.callbacks[r]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(r){this.$$set&&!ue(r)&&(this.$$.skip_bound=!0,this.$$set(r),this.$$.skip_bound=!1)}}const Be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Be);const _e=[["money",11],["depth",1],["progressTowardsNextDepth",11],["UID",1],["drillState.equippedDrillEquips[0]",1],["drillState.equippedDrillEquips[1]",1],["drillState.equippedDrillEquips[2]",1],["drillState.equippedDrillEquips[3]",1],["worlds[0].workersHired",1],["oldversion",1],["worldResources[1].numOwned",1],["worldResources[2].numOwned",1],["worldResources[3].numOwned",1],["worldResources[4].numOwned",1],["worldResources[5].numOwned",1],["worldResources[6].numOwned",1],["worldResources[7].numOwned",1],["worldResources[8].numOwned",1],["worldResources[9].numOwned",1],["worldResources[10].numOwned",1],["worldResources[11].numOwned",1],["worldResources[12].numOwned",1],["worldResources[13].numOwned",1],["worldResources[14].numOwned",1],["worldResources[15].numOwned",1],["worldResources[16].numOwned",1],["worldResources[17].numOwned",1],["NO_LONGER_IN_USE",1],["NO_LONGER_IN_USE",1],["NO_LONGER_IN_USE",1],["NO_LONGER_IN_USE",1],["worldResources[18].numOwned",1],["worldResources[19].numOwned",1],["worldResources[20].numOwned",1],["NO_LONGER_IN_USE",1],["worldResources[21].numOwned",1],["worldResources[22].numOwned",1],["worldResources[23].numOwned",1],["NO_LONGER_IN_USE",1],["worldResources[24].numOwned",1],["worldResources[25].numOwned",1],["worldResources[26].numOwned",1],["inventory[0]",4],["inventory[1]",4],["inventory[2]",4],["inventory[3]",4],["inventory[4]",4],["DeprecatedBlueprints[0][8]",1],["drillEquips[4].isCrafted",6],["DeprecatedBlueprints[1][8]",1],["drillEquips[5].isCrafted",6],["DeprecatedBlueprints[2][8]",1],["drillEquips[6].isCrafted",6],["DeprecatedBlueprints[3][8]",1],["drillEquips[7].isCrafted",6],["DeprecatedBlueprints[4][8]",1],["drillEquips[8].isCrafted",6],["DeprecatedBlueprints[5][8]",1],["drillEquips[9].isCrafted",6],["DeprecatedBlueprints[6][8]",1],["drillEquips[10].isCrafted",6],["DeprecatedBlueprints[7][8]",1],["drillEquips[11].isCrafted",6],["DeprecatedBlueprints[8][8]",1],["drillEquips[12].isCrafted",6],["DeprecatedBlueprints[9][8]",1],["drillEquips[13].isCrafted",6],["DeprecatedBlueprints[10][8]",1],["drillEquips[14].isCrafted",6],["DeprecatedBlueprints[11][8]",1],["drillEquips[15].isCrafted",6],["DeprecatedBlueprints[12][8]",1],["drillEquips[16].isCrafted",6],["DeprecatedBlueprints[13][8]",1],["drillEquips[17].isCrafted",6],["DeprecatedBlueprints[14][8]",1],["drillEquips[18].isCrafted",6],["DeprecatedBlueprints[15][8]",1],["drillEquips[19].isCrafted",6],["DeprecatedBlueprints[16][8]",1],["drillEquips[20].isCrafted",6],["playtime",1],["quest",4],["DeprecatedBlueprints[17][8]",1],["drillEquips[21].isCrafted",6],["DeprecatedBlueprints[18][8]",1],["drillEquips[22].isCrafted",6],["DeprecatedBlueprints[19][8]",1],["drillEquips[23].isCrafted",6],["DeprecatedBlueprints[20][8]",1],["drillEquips[24].isCrafted",6],["DeprecatedBlueprints[21][8]",1],["drillEquips[25].isCrafted",6],["DeprecatedBlueprints[22][8]",1],["drillEquips[26].isCrafted",6],["DeprecatedBlueprints[23][8]",1],["drillEquips[27].isCrafted",6],["DeprecatedBlueprints[24][8]",1],["drillEquips[28].isCrafted",6],["DeprecatedBlueprints[25][8]",1],["drillEquips[29].isCrafted",6],["DeprecatedBlueprints[26][8]",1],["drillEquips[30].isCrafted",6],["DeprecatedBlueprints[27][8]",1],["drillEquips[31].isCrafted",6],["DeprecatedBlueprints[28][8]",1],["drillEquips[32].isCrafted",6],["DeprecatedBlueprints[29][8]",1],["drillEquips[33].isCrafted",6],["DeprecatedBlueprints[30][8]",1],["drillEquips[34].isCrafted",6],["DeprecatedBlueprints[31][8]",1],["drillEquips[35].isCrafted",6],["worlds[0].workerLevel",1],["specialUpgrades",4],["tickets",1],["DeprecatedBlueprints[32][8]",1],["drillEquips[36].isCrafted",6],["DeprecatedBlueprints[33][8]",1],["drillEquips[37].isCrafted",6],["DeprecatedBlueprints[34][8]",1],["drillEquips[38].isCrafted",6],["DeprecatedBlueprints[35][8]",1],["drillEquips[39].isCrafted",6],["DeprecatedBlueprints[36][8]",1],["drillEquips[40].isCrafted",6],["DeprecatedBlueprints[37][8]",1],["drillEquips[41].isCrafted",6],["DeprecatedBlueprints[38][8]",1],["drillEquips[42].isCrafted",6],["DeprecatedBlueprints[39][8]",1],["drillEquips[43].isCrafted",6],["camefrom",1],["savetime",1],["story",1],["worldResources[33].numOwned",1],["monsterskilled",1],["battleInventory[0]",4],["battleInventory[1]",4],["battleInventory[2]",4],["battleInventory[3]",4],["battleInventory[4]",4],["battleInventory[5]",4],["battleInventory[6]",4],["battleInventory[7]",4],["battleInventory[8]",4],["battleInventory[9]",4],["battleInventory[10]",4],["battleInventory[11]",4],["battleInventory[12]",4],["battleInventory[13]",4],["battleInventory[14]",4],["oilrigStructure.level",1],["oilRigTime",1],["hasUnlockedScientists",1],["maxRelicSlots",1],["equippedRelics",4],["activeScientists[0]",4],["activeScientists[1]",4],["activeScientists[2]",4],["activeExcavations[0]",4],["activeExcavations[1]",4],["activeExcavations[2]",4],["excavationChoices[0][0]",4],["excavationChoices[0][1]",4],["excavationChoices[1][0]",4],["excavationChoices[1][1]",4],["excavationChoices[2][0]",4],["excavationChoices[2][1]",4],["highestLevelScientist",1],["deadScientists",1],["numExcavationsCompleted",1],["bossesDefeated",1],["hasFoundGolem",1],["DeprecatedBlueprints[40][8]",1],["drillEquips[44].isCrafted",6],["DeprecatedBlueprints[41][8]",1],["drillEquips[45].isCrafted",6],["DeprecatedBlueprints[42][8]",1],["drillEquips[46].isCrafted",6],["DeprecatedBlueprints[43][8]",1],["drillEquips[47].isCrafted",6],["DeprecatedBlueprints[44][8]",1],["drillEquips[48].isCrafted",6],["DeprecatedBlueprints[45][8]",1],["drillEquips[49].isCrafted",6],["DeprecatedBlueprints[46][8]",1],["drillEquips[50].isCrafted",6],["DeprecatedBlueprints[47][8]",1],["drillEquips[51].isCrafted",6],["DeprecatedBlueprints[48][8]",1],["drillEquips[52].isCrafted",6],["DeprecatedBlueprints[49][8]",1],["drillEquips[53].isCrafted",6],["DeprecatedBlueprints[50][8]",1],["drillEquips[54].isCrafted",6],["DeprecatedBlueprints[51][8]",1],["drillEquips[55].isCrafted",6],["lockedMineralAmtsToSave",4],["redeemedCodes",5],["highestOreUnlocked",1],["highestIsotopeUnlocked",1],["userExperienceBranchesTriggered",7],["totalCompletedTrades",1],["earthTradeOffer1",4],["singleMiningLoopValueSnapshot",4],["DeprecatedBlueprints[52][8]",1],["drillEquips[56].isCrafted",6],["DeprecatedBlueprints[53][8]",1],["drillEquips[57].isCrafted",6],["DeprecatedBlueprints[54][8]",1],["drillEquips[58].isCrafted",6],["DeprecatedBlueprints[55][8]",1],["drillEquips[59].isCrafted",6],["DeprecatedBlueprints[56][8]",1],["drillEquips[60].isCrafted",6],["DeprecatedBlueprints[57][8]",1],["drillEquips[61].isCrafted",6],["DeprecatedBlueprints[58][8]",1],["drillEquips[62].isCrafted",6],["DeprecatedBlueprints[59][8]",1],["drillEquips[63].isCrafted",6],["DeprecatedBlueprints[60][8]",1],["drillEquips[64].isCrafted",6],["earthTradeOffer2",4],["nextTradeTimeEarth",1],["tradeConfig.tradingPosts[0].playerHasSeenNewTrade",6],["backpack",4],["knownBlueprints",5],["worlds[1].workersHired",1],["worlds[1].workerLevel",1],["availableBlueprints",5],["unseenBlueprints",5],["hasLaunched",1],["hasCraftedABlueprint",6],["hasFoundGidget",1],["DeprecatedBlueprints[61][8]",1],["drillEquips[65].isCrafted",6],["DeprecatedBlueprints[62][8]",1],["drillEquips[66].isCrafted",6],["DeprecatedBlueprints[63][8]",1],["drillEquips[67].isCrafted",6],["DeprecatedBlueprints[64][8]",1],["drillEquips[68].isCrafted",6],["DeprecatedBlueprints[65][8]",1],["drillEquips[69].isCrafted",6],["DeprecatedBlueprints[66][8]",1],["drillEquips[70].isCrafted",6],["DeprecatedBlueprints[67][8]",1],["drillEquips[71].isCrafted",6],["DeprecatedBlueprints[68][8]",1],["drillEquips[72].isCrafted",6],["DeprecatedBlueprints[69][8]",1],["drillEquips[73].isCrafted",6],["DeprecatedBlueprints[70][8]",1],["drillEquips[74].isCrafted",6],["DeprecatedBlueprints[71][8]",1],["drillEquips[75].isCrafted",6],["DeprecatedBlueprints[72][8]",1],["drillEquips[76].isCrafted",6],["DeprecatedBlueprints[73][8]",1],["drillEquips[77].isCrafted",6],["DeprecatedBlueprints[74][8]",1],["drillEquips[78].isCrafted",6],["DeprecatedBlueprints[75][8]",1],["drillEquips[79].isCrafted",6],["DeprecatedBlueprints[76][8]",1],["drillEquips[80].isCrafted",6],["DeprecatedBlueprints[77][8]",1],["drillEquips[81].isCrafted",6],["DeprecatedBlueprints[78][8]",1],["drillEquips[82].isCrafted",6],["DeprecatedBlueprints[79][8]",1],["drillEquips[83].isCrafted",6],["DeprecatedBlueprints[80][8]",1],["drillEquips[84].isCrafted",6],["DeprecatedBlueprints[81][8]",1],["drillEquips[85].isCrafted",6],["DeprecatedBlueprints[82][8]",1],["drillEquips[86].isCrafted",6],["DeprecatedBlueprints[83][8]",1],["drillEquips[87].isCrafted",6],["DeprecatedBlueprints[84][8]",1],["drillEquips[88].isCrafted",6],["DeprecatedBlueprints[85][8]",1],["drillEquips[89].isCrafted",6],["DeprecatedBlueprints[86][8]",1],["drillEquips[90].isCrafted",6],["DeprecatedBlueprints[87][8]",1],["drillEquips[91].isCrafted",6],["DeprecatedBlueprints[88][8]",1],["drillEquips[92].isCrafted",6],["DeprecatedBlueprints[89][8]",1],["drillEquips[93].isCrafted",6],["DeprecatedBlueprints[90][8]",1],["drillEquips[94].isCrafted",6],["DeprecatedBlueprints[91][8]",1],["drillEquips[95].isCrafted",6],["DeprecatedBlueprints[92][8]",1],["drillEquips[96].isCrafted",6],["DeprecatedBlueprints[93][8]",1],["drillEquips[97].isCrafted",6],["DeprecatedBlueprints[94][8]",1],["drillEquips[98].isCrafted",6],["DeprecatedBlueprints[95][8]",1],["drillEquips[99].isCrafted",6],["DeprecatedBlueprints[96][8]",1],["drillEquips[100].isCrafted",6],["worldResources[27].numOwned",1],["worldResources[28].numOwned",1],["worldResources[29].numOwned",1],["worldResources[30].numOwned",1],["worldResources[31].numOwned",1],["worldResources[32].numOwned",1],["numGameLaunches",1],["promosClicked",5],["lastTimeSeenPromo",1],["centsSpent",1],["quality",1],["customMinerDatabaseIndex",1],["nextTradeTimeMoon",1],["moonTradeOffer1",4],["moonTradeOffer2",4],["worldResources[34].numOwned",1],["worldResources[35].numOwned",1],["worldResources[36].numOwned",1],["worldResources[37].numOwned",1],["worldResources[38].numOwned",1],["worldResources[39].numOwned",1],["worldResources[40].numOwned",1],["worldResources[41].numOwned",1],["worldResources[42].numOwned",1],["worldResources[43].numOwned",1],["gemForgeStructure.level",1],["GemForger.queueSaveValue",3],["areQuotesEnabled",6],["tradeConfig.tradingPosts[1].playerHasSeenNewTrade",6],["mineralsSacrificed",1],["worldResources[44].numOwned",1],["isCoreWarped",6],["isCoreBlessed",6],["buffLabStructure.level",1],["reactorStructure.level",1],["reactor.grid.grid[0]",4],["reactor.grid.grid[1]",4],["reactor.grid.grid[2]",4],["reactor.grid.grid[3]",4],["reactor.grid.grid[4]",4],["reactor.grid.grid[5]",4],["reactor.grid.grid[6]",4],["reactor.grid.grid[7]",4],["reactor.grid.grid[8]",4],["reactor.grid.fuelCellRemainingEnergy",10],["reactorComponents[1].numOwned",1],["reactorComponents[2].numOwned",1],["reactorComponents[3].numOwned",1],["reactorComponents[4].numOwned",1],["reactorComponents[5].numOwned",1],["reactorComponents[6].numOwned",1],["reactorComponents[7].numOwned",1],["reactorComponents[8].numOwned",1],["reactorComponents[9].numOwned",1],["reactorComponents[10].numOwned",1],["reactorComponents[11].numOwned",1],["reactorComponents[12].numOwned",1],["reactorComponents[13].numOwned",1],["reactorComponents[14].numOwned",1],["reactorComponents[15].numOwned",1],["reactorComponents[16].numOwned",1],["reactorComponents[17].numOwned",1],["reactorComponents[18].numOwned",1],["worldResources[45].numOwned",1],["worldResources[46].numOwned",1],["worldResources[47].numOwned",1],["reactorComponents[19].numOwned",1],["reactorComponents[20].numOwned",1],["reactorComponents[21].numOwned",1],["chestService.totalBasicChestsOpened",1],["chestService.totalGoldChestsOpened",1],["totalMineralsMined",1],["DeprecatedBlueprints[97][8]",1],["drillEquips[101].isCrafted",6],["DeprecatedBlueprints[98][8]",1],["drillEquips[102].isCrafted",6],["DeprecatedBlueprints[99][8]",1],["drillEquips[103].isCrafted",6],["DeprecatedBlueprints[100][8]",1],["drillEquips[104].isCrafted",6],["DeprecatedBlueprints[101][8]",1],["drillEquips[105].isCrafted",6],["DeprecatedBlueprints[102][8]",1],["drillEquips[106].isCrafted",6],["DeprecatedBlueprints[103][8]",1],["drillEquips[107].isCrafted",6],["DeprecatedBlueprints[104][8]",1],["drillEquips[108].isCrafted",6],["DeprecatedBlueprints[105][8]",1],["drillEquips[109].isCrafted",6],["totalTimeLapsedMinutes",1],["reactorComponents[22].numOwned",1],["reactorComponents[23].numOwned",1],["reactorComponents[24].numOwned",1],["reactorComponents[25].numOwned",1],["buffs.saveState",3],["whackosKilled",1],["reactor.totalRuntimeSecs",1],["bufflab.totalBuffsCasted",1],["bufflab.totalSecsBuffed",1],["worldResources[48].numOwned",1],["tradingPostStructure.level",1],["managerStructure.level",1],["metalDetectorStructure.level",1],["moonTradingPostStructure.level",1],["bufflab.maxConsecutiveSecondsBuffed",1],["chestCollectorStorageStructure.level",1],["chestCollectorChanceStructure.level",1],["chestService.chestsStored",1],["paidForMinerName",6],["drillEquips[110].isCrafted",6],["worldResources[49].numOwned",1],["worldResources[50].numOwned",1],["worldResources[51].numOwned",1],["reactorComponents[26].numOwned",1],["reactorComponents[27].numOwned",1],["reactorComponents[28].numOwned",1],["secondsSinceOrangeFishSpawn",1],["secondsUntilNextOrangeFishSpawn",1],["orangeFishCollected",1],["chestSpawnRoller.seed",1],["basicChestRewardRoller.seed",1],["goldenChestRewardRoller.seed",1],["scientistRoller.seed",1],["tradeRoller.seed",1],["caveRoller.seed",1],["coreMineralRoller.seed",1],["battleSpawnRoller.seed",1],["clickableRoller.seed",1],["relicFunctionalityRoller.seed",1],["userExperienceRoller.seed",1],["uxSeed",1],["caves[0].serializedSaveValue",3],["caves[1].serializedSaveValue",3],["caves[2].serializedSaveValue",3],["caves[3].serializedSaveValue",3],["caves[4].serializedSaveValue",3],["caves[5].serializedSaveValue",3],["caves[6].serializedSaveValue",3],["NO_LONGER_IN_USE",3],["NO_LONGER_IN_USE",3],["NO_LONGER_IN_USE",3],["NO_LONGER_IN_USE",3],["treasureStorage.serializedSaveValue",3],["caveMaxFuelStructure.level",1],["caveFuelRegenStructure.level",1],["currentDroneLevels.serializedSaveValue",3],["hasFirstCaveSpawned",6],["numberOfRewardsCollected",1],["numberOfCavesExplored",1],["hasCollectedTreasure",6],["splitTestValue1",1],["earliestVersion",1],["firstTimePlayed",1],["isDevUser",6],["activePlayTimeMinutes",1],["totalPlayMinutes",1],["testNumber",1],["drillEquips[111].isCrafted",6],["drillEquips[112].isCrafted",6],["drillEquips[113].isCrafted",6],["drillEquips[114].isCrafted",6],["drillEquips[115].isCrafted",6],["drillEquips[116].isCrafted",6],["drillEquips[117].isCrafted",6],["drillEquips[118].isCrafted",6],["drillEquips[119].isCrafted",6],["drillEquips[120].isCrafted",6],["drillEquips[121].isCrafted",6],["drillEquips[122].isCrafted",6],["drillEquips[123].isCrafted",6],["worldResources[52].numOwned",1],["worldResources[53].numOwned",1],["worldResources[54].numOwned",1],["worldResources[55].numOwned",1],["worldResources[56].numOwned",1],["worldResources[57].numOwned",1],["worldResources[58].numOwned",1],["worldResources[59].numOwned",1],["worldResources[60].numOwned",1],["worlds[2].workersHired",1],["worlds[2].workerLevel",1],["worldResources[61].numOwned",1],["worldResources[62].numOwned",1],["worldResources[63].numOwned",1],["worldResources[64].numOwned",1],["worldResources[65].numOwned",1],["worldResources[66].numOwned",1],["worldResources[66].numOwned",1],["chestService.storedChests",4],["chestCompressorStructure.level",1],["numCavesCompleted",1],["numScientistsSacrificed",1],["questManager.saveState",3],["hasFoundUfo",1],["savedReactorLayouts[0]",4],["savedReactorLayouts[1]",4],["savedReactorLayouts[2]",4],["savedReactorLayouts[3]",4],["savedReactorLayouts[4]",4],["savedReactorLayouts[5]",4],["savedReactorLayouts[6]",4],["savedReactorLayouts[7]",4],["savedReactorLayouts[8]",4],["savedReactorLayouts[9]",4],["savedReactorLayoutNames",5],["coreRelicRoller.seed",1],["coreScientistRoller.seed",1],["basicChestRewardRollerSeed",1],["goldenChestRewardRollerSeed",1],["tradeRollerSeed",1],["caveRollerSeed",1],["clickableRollerSeed",1],["chestSpawnRollerSeed",1],["lastPlatform",3],["chestService.chestPopupEnabled",6],["superMinerManager.saveState",3],["NO_LONGER_IN_USE",1],["chestService.totalBlackChestsOpened",1],["worldResources[67].numOwned",1],["hasSeenCaveTutorial",6],["superMinerManager.pendingSuperMiner",1],["chestCompressorTimeStructure.level",1],["chestCompressorSlotStructure.level",1],["chestCompressor.saveState",3],["blackChestRewardRoller.seed",1],["wizardRoller.seed",1],["hasTakenSurvey",6],["hasOpenedPurchaseWindow",6],["superMinerManager.recievedInitialSuperMiner",6],["worldResources[68].numOwned",1],["previouslyActiveHolidayIndex",1],["lastFlashQuestionPromptClickTime",1],["offerManager.saveState",3],["reducedOrangeFishLevels",1],["dronesReturnOnFull",6],["displayHiddenExcavations",6],["drillEquips[124].isCrafted",6],["drillEquips[125].isCrafted",6],["drillEquips[126].isCrafted",6],["drillEquips[127].isCrafted",6],["drillEquips[128].isCrafted",6],["drillEquips[129].isCrafted",6],["drillEquips[130].isCrafted",6],["drillEquips[131].isCrafted",6],["drillEquips[132].isCrafted",6],["drillEquips[133].isCrafted",6],["drillEquips[134].isCrafted",6],["drillEquips[135].isCrafted",6],["purchaseHistory.saveState",3],["mobileAdReward.saveState",3]],y={data:_e},De=["0","17","999","8361606600672945","1","2","3","4","0","144","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","NaN","NaN","NaN","NaN","0","0","0","NaN","0","0","0","NaN","0","0","0","-1!-1!-1!-1!-1!-1!-1!-1!-1","-1!-1!-1!-1!-1!-1!-1!-1!-1","-1!-1!-1!-1!-1!-1!-1!-1!-1","-1!-1!-1!-1!-1!-1!-1!-1!-1","-1!-1!-1!-1!-1!-1!-1!-1!-1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","2172","0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0!0!0!0!0!0!0!0!0!0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1701280746","0","0","0","0!3!2000!1!0!0!0","","","","","","","","","","","","","","","0","2172","0","10","-1!-1!-1!-1!-1!-1!-1!-1!-1!-1!-1!-1!-1!-1!-1!-1!-1!-1!-1!-1","","","","","","","","","","","","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0","","1","18","1000000000","0","","0!0!0!0!0!0!0!0!0!0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","","0","0","-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0!-1!0","9.0!9.1!9.2!10.0!10.1!10.2!4.0!4.1!4.2!4.3!4.4!4.5!1.0!1.1!1.2!1.3!1.4!1.5!1.6!1.7!1.8!1.9!1.10!1.11!1.12!1.13!1.14!1.15!6.0!6.3!6.6!6.9!6.10!6.13!6.21!6.24!6.18!3.0!3.1!3.2!2.0","1","0","!2.0","6.0!6.3!6.6!6.9!6.10!6.13!6.21!6.24!6.18!2.0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","2","","0","0","1","-1","0","","","0","0","0","0","0","0","0","0","0","0","1","","1","0","0","0","0","0","1","1","0!0!0!0!0!0!0!0!0","0!0!0!0!0!0!0!0!0","0!0!0!0!0!0!0!0!0","0!0!0!0!0!0!0!0!0","0!0!0!0!0!0!0!0!0","0!0!0!0!0!0!0!0!0","0!0!0!0!0!0!0!0!0","0!0!0!0!0!0!0!0!0","0!0!0!0!0!0!0!0!0","[]","2","1","0","0","0","0","0","0","0","0","2","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","2172","168069","0","5","793","7","1174566400","3117","10","230897568","2044341761","168070","2138457640","233273911","1","false!0!0!1500!1500!300!false!CaveNode,0,0.5,0,0.1,0,,true!!","false!0!0!1500!1500!300!false!CaveNode,0,0.5,0,0.1,0,,true!!","false!0!0!1500!1500!300!false!CaveNode,0,0.5,0,0.1,0,,true!!","false!0!0!1500!1500!300!false!CaveNode,0,0.5,0,0.1,0,,true!!","false!0!0!1500!1500!300!false!CaveNode,0,0.5,0,0.1,0,,true!!","false!0!0!1500!1500!300!false!CaveNode,0,0.5,0,0.1,0,,true!!","false!0!0!1500!1500!300!false!CaveNode,0,0.5,0,0.1,0,,true!!","NaN","NaN","NaN","NaN","","1","1","0!0!0!0","0","0","0","0","10","144","1701271874","0","2","73","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","0","","0","0","0","0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!1!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0!0","0","","","","","","","","","","","!!!!!!!!!","1295197806","1321484827","7","7","2","10","10","5","web","1","2","NaN","0","0","0","NaN","0","0","","3","7","0","0","0","0","9","0","0.*..*..*.eyIwIjowLCIxIjowLCIyIjowfQ==.*.1701281106.*.false","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","W10=","3*NaN*1701185475512"],ye={data:De},Y=1,Q=2,V=3,K=4,X=5,Z=6,ee=7,re=9,te=10,se=11;var ne=[],c=[],ie="hackergame",d={};function Ne(e,r,t){let i=JSON.parse(e).data;return ie=t,c=i.map((s,n)=>[s[0],r.data[n][1]]),ne=i.map(s=>s[1]),Te(),be()}function be(){var e=Ie(),r=ie;return""+r+"|"+le(e)}function Le(e){for(var r=0;r<c.length;r++)if(c[r][0]==e)return c[r][1]}function le(e){return btoa(unescape(encodeURIComponent(e)))}function Ie(){return le(ke())}function xe(e,r){var t=Le(e);switch(console.log(d),console.log(e),t){case Y:return String(d[e]);case Q:return String(d[e]);case V:return d[e];case K:return String(d[e].join("!"));case X:return String(d[e].join("!"));case Z:return d[e]?"1":"0";case ee:for(var i=d[e],s="",n=0;n<i.length;n++)i[n]?s+="1":s+="0";return s;case se:return d[e].toString();case re:return String(d[e]);case te:return JSON.stringify(d[e]);default:return console.warn("Unrecognized variable type"),""}}function ke(){for(var e=[],r=0;r<c.length;r++)e.push(xe(c[r][0]));return e.join("|")}function Ae(e,r){if(c.length>r&&e.length>r){var t=c[r][0],i=c[r][1],s=e[r];switch(s=Ue(s),i){case Y:console.log(t+" = "+parseInt(s)),d[t]=parseInt(s);break;case Q:d[t]=parseFloat(s);break;case V:console.log(t+" = "+s),d[t]='"'+s+'"';break;case K:var l=s.split("!");console.log(t+" = ["+s.split("!")+"]"),d[t]=s.split("!");for(var n=0;n<l.length;n++)l[n]!=null&&l[n]!=""&&(console.log(t+"["+n+"] = "+l[n]),d[t][n]=l[n]);break;case X:console.log(t+' = ["'+s.split("!").join('","')+'"]'),d[t]=s.split("!");break;case Z:var l=s=="1"||s==1;console.log(t+" = "+l),d[t]=l;break;case ee:var l=s.split("");console.log(t+" = ["+s.split("")+"]"),d[t]=s.split("");for(var n=0;n<l.length;n++)l[n]!=null&&l!=""&&(console.log(t+"["+n+"] = "+(l[n]=="1"||l[n]==1)),d[t][n]=l[n]=="1"||l[n]==1);break;case se:s.includes(".")&&(s=s.substring(0,s.indexOf("."))),console.log(t+" = "+s),d[t]=new BigNumber(s);break;case re:console.log(t+" = "+s),d[t]=s;break;case te:console.log(t+" =  "+s),d[t]=s;break;default:return console.warn("Unrecognized variable type @ "+r),""}}else c.length<=r?console.warn("Was unable to load save value at index: "+r+" (Registry is not long enough, register the variable to save it)"):console.warn("An error occured @ index: "+r)}function Te(){for(var e=0;e<c.length;e++)try{Ae(ne,e)}catch(r){console.error(r)}}function Ue(e){return e.replaceAll('"',"")}function $e(e){let r,t,i,s,n,l,g,p,a,w,u,f,B,O,M,m,I,F;return{c(){r=C("main"),t=C("h1"),t.textContent="david's amazing mr. mine hacker thing",i=h(),s=C("p"),s.textContent="name of save file:",n=h(),l=C("input"),g=h(),p=C("p"),p.textContent="The first value in each array is what it represents in the game,  and the 2nd one is the actual value. You should only really be changing the 2rd one ever.",a=h(),w=C("p"),w.textContent="Modify this save data to ur heart's content:",u=h(),f=C("textarea"),B=h(),O=C("p"),O.textContent="Output:",M=h(),m=C("textarea"),D(l,"placeholder","name of save"),D(f,"id","bigstuff"),D(f,"class","svelte-1igri9h"),D(m,"id","bigstuff"),m.readOnly=!0,D(m,"class","svelte-1igri9h")},m(E,_){ce(E,r,_),o(r,t),o(r,i),o(r,s),o(r,n),o(r,l),v(l,e[1]),o(r,g),o(r,p),o(r,a),o(r,w),o(r,u),o(r,f),v(f,e[0]),o(r,B),o(r,O),o(r,M),o(r,m),v(m,e[2]),I||(F=[k(l,"input",e[3]),k(f,"input",e[4]),k(m,"input",e[5])],I=!0)},p(E,[_]){_&2&&l.value!==E[1]&&v(l,E[1]),_&1&&v(f,E[0]),_&4&&v(m,E[2])},i:b,o:b,d(E){E&&J(r),I=!1,L(F)}}}function Me(e,r,t){let i,s=JSON.parse(JSON.stringify(y));y.data=y.data.map((w,u)=>[w[0],ye.data[u]]),console.log(y);let n=JSON.stringify(y).replaceAll("],",`],
`),l="hackergame69420";console.log(JSON.parse(n));function g(){l=this.value,t(1,l)}function p(){n=this.value,t(0,n)}function a(){i=this.value,t(2,i),t(0,n),t(7,s),t(1,l)}return e.$$.update=()=>{e.$$.dirty&3&&t(2,i=Ne(n,s,l))},[n,l,i,g,p,a]}class Fe extends Se{constructor(r){super(),Re(this,r,Me,$e,oe,{})}}new Fe({target:document.getElementById("app")});