import {Route, Routes} from "react-router-dom"
import {AuthRoute} from "./components/AuthRoute"
import {HistoryRouter, history} from '@/utils'
import Loading from "./components/Loading"
import Article from "./pages/Article"
import Publish from "./pages/Publish"
import Home from "./pages/Home"
import Todo from "./pages/Todo"
import Camera from "./pages/Camera"
import AntdDemo from "./pages/AntdDemo"
import ChatGPT from "@/pages/ChatGPT";

// 按需导入组件
// loading中的也可以实现一个简单组件
import {lazy, Suspense} from 'react'
import Test from "@/pages/Test";
import Album from "@/pages/Album";
import Music from "@/pages/Music";
import SvgaVap from "@/pages/SvgaVap";
import Hilo from "@/pages/Hilo";
import Word from "@/pages/Word";
import AiImage from "@/pages/AiImage";
import Test2 from "@/pages/Test2";
import Handy from "@/pages/Handy";
import HiloDashboard from "@/pages/HiloDashboard";

const Detail = lazy(() => import("@/pages/Detail"))
const Login = lazy(() => import('@/pages/Login'))
const CMSLayout = lazy(() => import('@/pages/Layout'))
// 下面这些二级路由没必要懒加载,用户体验有点不好
// const Article = lazy(() => import("@/pages/Article"))
// const Publish = lazy(() => import('@/pages/Publish'))
// const Home = lazy(() => import('@/pages/Home'))
// const Todo = lazy(() => import('@/pages/Todo'))

function App() {
    return (
        <HistoryRouter history={history}>
            <Suspense
                fallback={<Loading/>}
            >
                <Routes>
                    <Route path='/' element={
                        <AuthRoute>
                            <CMSLayout/>
                        </AuthRoute>
                    }>
                        {/* 二级路由配置 */}
                        <Route index element={<Home/>}/>
                        <Route path='/chatgpt' element={<ChatGPT/>}/>
                        <Route path='article' element={<Article/>}/>
                        <Route path='publish' element={<Publish/>}/>
                        <Route path='todo' element={<Todo/>}/>
                        <Route path='camera' element={<Camera/>}/>
                        <Route path='album' element={<Album/>}/>
                        <Route path='antddemo' element={<AntdDemo/>}/>
                        <Route path='music' element={<Music/>}/>
                        <Route path='svgavap' element={<SvgaVap/>}/>
                        <Route path='word' element={<Word/>}/>
                        <Route path='aiimage' element={<AiImage/>}/>
                        <Route path='handy2' element={<Handy/>}/>
                        <Route path='hiloDashboard' element={<HiloDashboard/>}/>
                    </Route>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/detail' element={<Detail/>}/>
                    <Route path='/test' element={<Test/>}/>
                    <Route path='/test2' element={<Test2/>}/>
                    <Route path='/hilo' element={<Hilo/>}/>
                    <Route path='/handy' element={<Handy/>}/>
                </Routes>
            </Suspense>
        </HistoryRouter>
    )
}

export default App