# 霜月問劍

![霜月問劍](media/cover.jpg)

俯視角武俠動作小品：一個場景（廢棄山門的演武台）、三批共 21 隻小怪（含精英）、一個會放大招的兩階段 Boss。three.js 寫成，角色、道具、靈獸都是生成模型。

**線上試玩：<https://malilion.github.io/shuangyue-wenjian/>**（第一次進入需下載約 20MB 資源）

也可以直接雙擊 `dist/shuangyue.html`，不需要伺服器或網路。

## 畫面

| | |
|---|---|
| ![戰鬥](media/combat.jpg) 劍陣環身、御劍追魂與靈獸白虎 | ![御劍飛行](media/flight.jpg) 御劍飛行，越過 Boss 的劍氣 |
| ![大招：劍雨](media/ult_swords.jpg) 大招「千刃歸月」：月影、法陣、劍雨 | ![大招：瞬斬](media/ult_cut.jpg) 畫面轉黑，只剩刀光 |
| ![大招：滿月斬](media/ult_finish.jpg) 滿月斬收尾 | ![Boss 大招](media/boss_ult.jpg) Boss 大招：血月下四道光刃掃場 |

![靈獸](media/beast.jpg)

## 操作

| 按鍵 | 動作 |
|---|---|
| W A S D | 移動 |
| 滑鼠左鍵 | 三段斬 |
| 滑鼠右鍵 | 格擋；剛舉劍的瞬間接住是彈反，之後左鍵反擊 |
| 空白鍵 | 閃避 |
| Q | 劍氣（耗真氣） |
| E | 落劍（耗真氣） |
| F | 御劍追魂：三把飛劍自動追敵（耗真氣） |
| C | 劍陣環身：四把劍繞身 6.5 秒，可打掉彈幕（耗真氣） |
| V | 召喚靈獸：白虎助戰 12 秒（耗真氣） |
| 按住 Shift | 御劍飛行（持續耗真氣）；飛行中左鍵俯衝突刺 |
| R | 大招「千刃歸月」（劍意滿時） |
| F3 | 除錯面板 |

真氣隨時間回復、命中時增加；劍意靠命中、彈反、完美閃避累積。

### 手機

手機和平板可以直接玩，**必須橫向**（直向時會提示轉向並暫停）。左半邊任意處按住拖曳是搖桿，右下角的技能圖示就是按鈕（格擋和御劍飛行是按住），沒有滑鼠所以自動瞄準最近的敵人。網址加 `?touch` 可在電腦上強制觸控模式測試。

## Boss：厲無咎

- 三連斬，第三刀劈出劍氣
- 躍起砸地（不可格擋）
- 瞬步斬：先在地上標出一條線，下一瞬人已在線的另一端
- 扇形劍氣
- 半血後：天降劍雨，出招變快
- 剩三成血時放一次大招：躍回台心，血月之下四道光刃掃過全場並中途反轉，劍雨追人，最後一把巨劍天降。放完會力竭數秒，是收掉他的時機。

## 開發

```bash
npm install
node serve.mjs          # http://localhost:5173
node tools/build.mjs    # 產生 dist/shuangyue.html（單檔）與 dist/site/（線上站點）
```

網址參數：`?auto` 跳過標題、`?mute` 靜音、`?god` 無敵、`?stage=boss` 直接打 Boss、`?ult` 大招滿能量、`?standin` 不載模型。

**原始模型不在 repo 裡**（14 個檔案共約 170MB）。沒有模型時遊戲會退回幾何體替身，仍可運行；要重建完整版，依 `assets/generations.json` 的生成編號從 Hyper3D 重新下載到 `assets/models/`。`dist/shuangyue.html` 與線上站點已內含壓縮後的模型。

線上站點是 `dist/site/` 的內容，放在 `gh-pages` 分支。

## 素材來源

- 角色、武器、場景道具、靈獸：Hyper3D Rodin 生成（編號見 `assets/generations.json`），設定圖在 `concept/`。
- 音效：OpenGameArt 上的 CC0 音效包，見 `assets/sfx/SOURCES.md`。
- 配樂：Google Flow Music 生成，見 `assets/music/SOURCES.md`。對外發佈前請確認其使用條款。
- 標題字與技能圖示：圖像模型生成後裁切。

`src/input.js`、`serve.mjs` 與打包腳本改自 guizang-game-skill（AGPL-3.0）。
