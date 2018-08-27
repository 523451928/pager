import './main.css'
import './styles/pagination.css'
// import greeter from './js/Greeter'
import Pagination from './script/pagination'
let pageInstance = new Pagination({
  currentPage: 5,
  pageCount: 20,
  el: '.page'
})
pageInstance.on('changePage', (pageIndex) => {
  console.log(pageIndex)
  pageInstance.refresh({
    currentPage: 2,
    pageCount: 20
  })
})