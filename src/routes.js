import Search from '@/components/Search.vue'
import TrackDetail from '@/components/TrackDetail.vue'
import About from '@/components/About.vue'

const routes = [
  {
    path: '/',
    component: Search,
    name: 'search'
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/track/:id',
    component: TrackDetail,
    name: 'track'
  }
]

export default routes
