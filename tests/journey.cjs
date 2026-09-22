const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1100}});
 const errors=[],external=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('request',r=>{if(!r.url().startsWith('http://127.0.0.1:8765'))external.push(r.url());});
 await page.goto('http://127.0.0.1:8765');
 const action=(name,value)=>page.locator(`[data-action="${name}"]${value===undefined?'':`[data-value="${value}"]`}`).click();
 const body=()=>page.locator('#stage').innerText();
 await page.screenshot({path:'/tmp/y-concierge-desktop.png',fullPage:true});
 async function begin(child,goal){await page.locator('#restart').click();await action('start');await action('child',child);await action('goal',goal);}
 async function complete(program,membership,child){await action('program',program);await action('membership',membership);assert.match(await body(),new RegExp(child));assert.match(await body(),new RegExp(membership==='family'?'Family Membership':'Youth Program Membership'));await action('confirm');await page.getByText('Demo capacity re-check passed',{exact:false}).waitFor();await page.getByText('Duplicate check passed',{exact:false}).waitFor();await page.getByText('Simulated enrollment created',{exact:false}).waitFor();await page.getByText('You’re registered!',{exact:false}).waitFor();assert.match(await body(),/FICTIONAL CONFIRMATION/);}
 await begin('Legend','0');assert.equal(await page.locator('.program-card').count(),3);await page.screenshot({path:'/tmp/y-concierge-matches.png',fullPage:true});await complete('0','family','Legend');assert.match(await body(),/\$161 simulated total/);await page.screenshot({path:'/tmp/y-concierge-success.png',fullPage:true});
 for(const goal of ['1','2']){await begin('Legend',goal);await action('qualify','yes');assert.match(await body(),goal==='1'?/Stage 4/:/Stage 5/);await complete('1','youth','Legend');assert.match(await body(),/Tuesday/);assert.match(await body(),/\$97 simulated total/);}
 await begin('Legend','1');await action('qualify','no');assert.match(await body(),/Stage 1/);
 await begin('Legend','3');assert.match(await body(),/water confidence/);await complete('2','youth','Legend');assert.match(await body(),/Buckhead/);
 for(const goal of ['0','1','2','3']){await begin('Coast',goal);assert.match(await body(),/Parent &amp; Child|Parent & Child/);await complete('0','youth','Coast');assert.match(await body(),/adult joins Coast/);}
 // Back navigation preserves the family; changing choices updates the review.
 await begin('Legend','0');await action('program','0');await action('membership','family');await page.locator('[data-go="membership"]').click();await action('membership','youth');assert.match(await body(),/Youth Program Membership/);await page.locator('[data-go="recommend"]').click();await action('program','2');await action('membership','family');assert.match(await body(),/Buckhead/);
 // Restart cancels pending completion and clears all state.
 await action('confirm');await page.locator('#restart').click();await page.waitForTimeout(2200);assert.match(await body(),/Hi Matt/);assert.equal(await page.locator('.family-row.selected').count(),0);
 for(const topic of ['Membership questions','Programs & camps','Financial assistance','Account & payments','Talk to the Y team']){await page.locator(`[data-help="${topic}"]`).first().click();await action('handoff');await page.getByText('Demo handoff prepared').waitFor();await action('close');assert.equal(await page.locator('dialog').evaluate(d=>d.open),false);}
 await page.locator('[data-help="Talk to the Y team"]').click();await page.keyboard.press('Escape');assert.equal(await page.locator('dialog').evaluate(d=>d.open),false);
 for(const width of [390,320,768]){await page.setViewportSize({width,height:844});await begin('Legend','0');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await complete('0','family','Legend');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);if(width===390)await page.screenshot({path:'/tmp/y-concierge-mobile.png',fullPage:true});}
 assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
 console.log('PASS: primary journey; every goal; both children; all programs; both memberships; prerequisites; back/edit; reset during processing; all help dialogs; Escape; 320/390/768 responsive journeys; no JS errors; zero external requests.');
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
