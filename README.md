# 霜月問劍

俯視角武俠動作小品：一個場景（廢棄山門的演武台）、一波小怪、一個兩階段 Boss。three.js 寫成，可打包成單一 HTML。

## 直接玩

雙擊 `dist/shuangyue.html`（不需要伺服器或網路）。

## 操作

| 按鍵 | 動作 |
|---|---|
| W A S D | 移動 |
| 滑鼠左鍵 | 三段斬 |
| 滑鼠右鍵 | 格擋；剛舉劍的瞬間接住是彈反，之後左鍵反擊 |
| 空白鍵 | 閃避 |
| Q | 劍氣（耗真氣） |
| E | 落劍（耗真氣） |
| R | 大招「千刃歸月」（劍意滿時） |
| F3 | 除錯面板 |

## 開發

```bash
npm install
node serve.mjs          # http://localhost:5173
node tools/build.mjs    # 產生 dist/shuangyue.html
```

網址參數：`?auto` 跳過標題、`?mute` 靜音、`?god` 無敵、`?stage=boss` 直接打 Boss、`?ult` 大招滿能量、`?standin` 不載模型。

**原始模型不在 repo 裡**（13 個檔案共約 160MB）。沒有模型時遊戲會退回幾何體替身，仍可運行；要重建完整版，依 `assets/generations.json` 的生成編號從 Hyper3D 重新下載到 `assets/models/`。`dist/shuangyue.html` 已內含壓縮後的模型。

## 素材來源

- 角色、武器、場景道具：Hyper3D Rodin 生成（編號見 `assets/generations.json`），設定圖在 `concept/`。
- 音效：OpenGameArt 上的 CC0 音效包，見 `assets/sfx/SOURCES.md`。
- 配樂：Google Flow Music 生成，見 `assets/music/SOURCES.md`。對外發佈前請確認其使用條款。
- 標題字與技能圖示：圖像模型生成後裁切。

`src/input.js`、`serve.mjs` 與打包腳本改自 guizang-game-skill（AGPL-3.0）。
