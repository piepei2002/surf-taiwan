# Surf Taiwan｜台灣浪點指南

介紹宜蘭烏石港、台中松柏港、台東金樽的繁體中文靜態網站。這是 `AGENTS.md` 驅動的可擴充小專案。

## 本機預覽
直接用瀏覽器開啟 `index.html`。圖片使用 Wikimedia Commons 線上連結，需要網路連線。

## 專案結構
- `AGENTS.md`：AI 開發與新增內容的規則（作業重點）
- `index.html`：首頁結構
- `style.css`：海洋風格與響應式排版
- `script.js`：浪點資料與地區篩選
- `IMAGE_CREDITS.md`：圖片授權與來源

## 如何新增浪點
1. 閱讀 `AGENTS.md`。
2. 查證新浪點的地點、特色與安全資訊。
3. 找到可合法使用的圖片，記錄作者、來源與授權。
4. 在 `script.js` 的 `spots` 陣列新增物件。
5. 更新 `IMAGE_CREDITS.md`，檢查網站畫面與篩選功能。

## GitHub Pages 部署
1. 在 GitHub 建立公開 Repository，例如 `surf-taiwan`。
2. 將本資料夾中的檔案上傳到 Repository **根目錄**，提交至 `main` 分支。
3. 開啟 `Settings → Pages`。
4. `Build and deployment` 選 `Deploy from a branch`；分支選 `main`，資料夾選 `/(root)`，儲存。
5. 等待部署完成後，網址通常為 `https://你的帳號.github.io/surf-taiwan/`。

## 注意事項
本站僅供教育與景點介紹，不提供即時浪況；下水前請確認官方海象、警示與現場情況。
