## Hook

### useState

- 結合 state 和 action
- [實例 1]：https://codesandbox.io/s/nifty-roentgen-ph3pi
- [實例 2]：https://codesandbox.io/s/fast-river-uh3fx

### useCallback

- 配合依賴讓函式可以快取，避免每次 function rerender 時重新建立函式實例
- [實例]：https://codesandbox.io/s/stoic-chandrasekhar-wuftl

### useMemo

- 配合依賴讓新的變數或函式可以快取，避免每次 function rerender 時重新宣告變數或建立函式實例
- 類似於 Vue.js 裡的 computed
- [實例]：https://codesandbox.io/s/keen-lumiere-re3e1

## useEffect

- 大致可分為三種型態

  - mount
  - unmount
  - 依賴改變後執行的 side effect

- [實例 1]：https://codesandbox.io/s/polished-water-ezcg6
- [實例 2]：https://codesandbox.io/s/old-browser-he2u0
- [實例 3]：https://codesandbox.io/s/distracted-newton-85w0w

## useContext

- 用來儲存全域的狀態
- [實例]：https://codesandbox.io/s/jolly-hooks-y1ksj

## useRef

- 某些情況想要在 function component 中宣告變數，而且變數改變不會重新渲染 function(若狀態改變則會重新渲染)
- 用途：取得 DOM，配合第三方套件執行動畫、管理 focus、選擇文字、或影音播放
- [實例]：https://codesandbox.io/s/pensive-rain-sz15v
