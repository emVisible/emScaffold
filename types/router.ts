import 'vue-router'
import { IMenu } from './menu'
declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    menu?: IMenu
    enterClass?: string
    leaveClass?: string
    permission?: string
  }
}