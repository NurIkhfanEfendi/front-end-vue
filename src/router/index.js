import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Datakantin from '../views/Datakantin.vue'
import Datamakanan from '../views/Datamakanan.vue'
import Pembelian from '../views/Pembelian.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Sidebar from '../views/layouts/Sidebar.vue'
import Footer from '../views/layouts/Footer.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default:Home, header:Navbar, sidebar:Sidebar, footer:Footer}
  },
  {
    path: '/datakantin',
    name: 'datakantin',
    components: {default:Datakantin, header:Navbar, sidebar:Sidebar, footer:Footer}
  },
  {
    path: '/datamakanan',
    name: 'datamakanan',
    components: {default:Datamakanan, header:Navbar, sidebar:Sidebar, footer:Footer}
  },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {default:Pembelian, header:Navbar, sidebar:Sidebar, footer:Footer}
  },
  
]

const router = new VueRouter({
  routes
})

export default router
