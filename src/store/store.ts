import { Store, createStore } from "vuex"
// import { ComponentCustomProperties } from "vue"

//配置vue+ts项目使用vuex
declare module '@vue/runtime-core' {
    interface State {
        //home
        icons: [name: string, img: string, path: string]
        //series
        seriesCate: string
        seriesNav: [cate: string, cname: string, path: string]
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}

const store = createStore({
    state() {
        return {
            icons: [
                {
                    name: "Home",
                    img:
                        "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Home-512.png",
                    path: "/home",
                },
                {
                    name: "Series",
                    img:
                        "https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/video-128.png",
                    path: "/series",
                },
                {
                    name: "Car",
                    img:
                        "https://cdn3.iconfinder.com/data/icons/back-to-the-future/512/delorean-01-128.png",
                    path: "/home",
                },
                {
                    name: "Game",
                    img:
                        "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Toy-128.png",
                    path: "/home",
                },
                {
                    name: "Animal",
                    img:
                        "https://cdn2.iconfinder.com/data/icons/free-version/128/recycling-128.png",
                    path: "/home",
                },
            ],
            seriesCate: '首页',
            seriesNav: [
                { cate: "首页", cname: "home", path: "/series/home" },
                { cate: "剧情/历史", cname: "plot", path: "/series/plot" },
                { cate: "动作/悬疑", cname: "action", path: "/series/action" },
                { cate: "魔幻/科幻", cname: "fiction", path: "/series/fiction" },
                { cate: "生活/喜剧", cname: "life", path: "/series/life" },
                { cate: "恐怖/惊悚", cname: "horror", path: "/series/horror" },
                { cate: "动漫/卡通", cname: "comic", path: "/series/comic" },
            ],
        }
    },
    mutations: {
        setSeriesCate(state: { seriesCate: string }, cate: string) {
            state.seriesCate = cate
        },
    }
})

export default store