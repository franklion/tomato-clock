## Hook

- 為什麼要用?
  - 避免 HOC Ｗ rapper Hell
  - 容易重複使用
  - 代碼變簡潔了，不用再寫一大堆的生命週期方法
- useEffect, useState, useCallback, useMemo, useContext, useRef

## Custom Hook

- 客製化自己專案的 Hook，同事可以一起使用

```
export const useAutoFocus = (inputRef, other) => {
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [...other, inputRef])
}
```

## 狀態管理 createContext useReducer useContext 三者搭配。

- [優點]：比較輕量化，使用方式也非常簡單，要用到的狀態才進行解構
- [缺點]：沒有辦法使用 Redux DevTools 監測全局狀態
- [和 redux 差異]：沒有 Action，直接透過 dispatch 進行呼叫，修改狀態
- [注意]：dispatch 本身是穩定的，不會在重新渲染時改變。所以可在 useEffect 或 useCallback 依賴中省略

## 父元件更新狀態 如何避免子元件不必要的渲染?

- [情境]：父元件和子元件的結構是開發時一定會遇到的，如何去避免子元件不要進行多餘的渲染
- [實例]：https://codesandbox.io/s/awesome-kapitsa-k9omm
- [結論]：子元件可以使用 memo 進行優化，若為 pure function，則不管父元件如何改變，子元件只會渲染一次

## function componet 中使用 memo 就萬無一失嗎？

- [情境]：父元件傳遞函式給子元件，子元件也加了 memo，但還是重複渲染
- [實例 1]：https://codesandbox.io/s/restless-hill-ih5yn
- [實例 2]：https://codesandbox.io/s/boring-flower-37rul
- [結論]：父元件若傳遞的 props 為陣列、物件、函式 ...等，要特別小心，因為它們屬於傳址方式，就算內容沒有改變，記憶體位址也改變了。

## sass/scss 中 mixin 和 extend 差異？

- [情境]：當有 A B C 按鈕都有相似的樣式時，就可以進行抽離。可以使用 mixin 或 extend
- [參考]：https://ithelp.ithome.com.tw/articles/10157149
- [結論]：有特定功能或是需要輸入參數 可使用 mixin、同樣樣式抽離出來可使用 extend，可減少編譯出來的 css 大小

## setInterval() 真的準嗎？

- [情境]：setInterval() 本身必不保證時間到就執行回調函數，以及在執行過程中切換分頁或是縮小分頁，再回到原本頁面時都有可能發現時間不準了
- [實例]：https://codepen.io/franklion1227/pen/jOPXNBL?editors=1010
- [參考]：https://github.com/zhansingsong/js-leakage-patterns/blob/master/requestAnimationFrame/requestAnimationFrame.md
- [參考]：https://developer.mozilla.org/zh-TW/docs/Web/API/Window.requestAnimationFrame
- [參考]：https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution?hl=zh-tw
- [結論]：盡可能使用 requestAnimationFrame 來進行時間的處理
  - setInterval() 時間到時，把回調函數放入佇列中(佇列中可能還有其他代碼)，繼續下一次的計時，再把回調函數放入佇列中，此時上次的回調如果還沒有執行，新增的回調就取消，造成畫面上更新問題。
  - requestAnimationFrame() 要求瀏覽器下次更新畫面前執行自訂函式，當頁面處在背景時，大部分瀏覽器會暫停 requestAnimationFrame() 呼叫，改善效能。

## 番茄鐘的動態作法

- svg with circle [strokeDashoffset]
- canvas [ctx.arc]
- [實例]：https://codepen.io/franklion1227/pen/BaNvBwp?editors=1010

## useCallback 搭配 useRef 組合技

- [情境]：一個輸入框和一個送出按鈕，透過按鈕把表單內容送出，如何避免多餘的渲染
- [實例]：https://codesandbox.io/s/competent-https-bxln8
- [參考]：https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
- [結論]：如果 useCallback 依賴的狀態是一直改變的，可以思考，如何等到要送出資料時再取得最新的狀態

## createContext 的預設值

- [情境]：使用全域的資料流管理時，通常會在元件樹最上層建立 Context，把集中管理的狀態放在那裡，可以設定預設值，但如何知道它是可以生效的？
- [實例]：https://codesandbox.io/s/jolly-hooks-y1ksj
- [參考]：https://zh-hant.reactjs.org/docs/context.html#reactcreatecontext
- [結論]：其實你可以把 createContext() 預設值為 null，因為 Context.Provider prop value 已經會給予初始值

## 陣列原來可以有動態元素

- [情境]：某些情況下需要動態加入元素到陣列中，直觀作法，先建立一個空陣列，判斷條件為真，push 資料到陣列中，是否有更優雅的作法？
- [實例]：https://codesandbox.io/s/inspiring-hoover-yoyc4
- [實例]：https://codesandbox.io/s/basic-usage-ant-design-demo-4wk01
- [結論]：透過解構賦值搭配三元運算值，可以在條件為真時插入新元素，為否時不做任何改變。可以用在表格欄位上，權限 A 要看到四個欄位，權限 B 要看三個欄位
