# pagination
原生js写的一个pc端分页

## 查看demo
```
git clone https://github.com/523451928/pagination.git
cd pagination
npm install
npm run dev
```

## pagination的使用方法
```
引用./styles/pagination.css
引用./script/pagination.js
或者
import Pagination from './script/pagination'
let pageInstance = new Pagination({
  currentPage: data.currentPage,
  pageCount: data.pageCount,
  el: '.pagination'
})
pageInstance.on('changePage', (pageIndex) => {
  // todo
})

pageInstance.refresh({
  currentPage: data.currentPage,
  pageCount: data.pageCount
})
```
## arguments
| Option | Description | Type | Default |
| ----- | ----- | ----- | ----- |
| currentPage | 当前分页的数值 | Number | 1 |
| pageCount | 总共的页数 | Number | 1 |
| hasToPage | 是否需要快速跳转 | Boolean | true |
| hsaSelectPageSize | 是否需要选择每页条数 | true |
| el | 包裹分页的容器 | String or Dom | 'body' |
| prevText | 上一页的显示文本 | String | '«' |
| nextText | 下一页的显示文本 | String | '»' |
| pageStep | 快速分页的步数 | Number | 5 |
| pageSize | 每页条数 | Number | 5 |
| pageSizes | 分页选项 | Array | [5, 10, 20, 50] |

## 注意事项
* 分页器的总页数或者当前分页数改变时调用分页器实例的refresh方法即可

## 可以监听pagination实例的事件
| Function | Description |
| ----- | -----|
| changePage | 返回当前点击的分页数值 |
