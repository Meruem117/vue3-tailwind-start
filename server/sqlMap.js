const sqlMap = {
    // series
    series: {
        getHome: "select * from videos where is_latest = 1 order by year(date) desc, score desc, heat desc;",
        getPlot: "select * from videos where is_latest = 1 and (type like '%剧情%' or type like '%动作%') order by year(date) desc, score desc, heat desc;",
        getCrime: "select * from videos where is_latest = 1 and (type like '%犯罪%' or type like '%悬疑%') order by year(date) desc, score desc, heat desc;",
        getFiction: "select * from videos where is_latest = 1 and (type like '%魔幻%' or type like '%科幻%' or type like '%奇幻%') order by year(date) desc, score desc, heat desc;",
        getCity: "select * from videos where is_latest = 1 and (type like '%家庭%' or type like '%情感%' or type like '%爱情%') order by year(date) desc, score desc, heat desc;",
        getHorror: "select * from videos where is_latest = 1 and (type like '%灵异%' or type like '%惊悚%' or type like '%恐怖%') order by year(date) desc, score desc, heat desc;",
        getNature: "select * from videos where is_latest = 1 and (type like '%自然%' or type like '%历史%') order by year(date) desc, score desc, heat desc;",
        getComic: "select * from videos where is_latest = 1 and (type like '%动漫%' or type like '%卡通%') order by year(date) desc, score desc, heat desc;",
        recommend: {
            getHome: "select * from videos where is_latest = 1 order by score desc, heat desc limit 9;",
            getPlot: "select * from videos where is_latest = 1 and (type like '%剧情%' or type like '%动作%') order by score desc, heat desc limit 9;",
            getCrime: "select * from videos where is_latest = 1 and (type like '%犯罪%' or type like '%悬疑%') order by score desc, heat desc limit 9;",
            getFiction: "select * from videos where is_latest = 1 and (type like '%魔幻%' or type like '%科幻%' or type like '%奇幻%') order by score desc, heat desc limit 9;",
            getCity: "select * from videos where is_latest = 1 and (type like '%家庭%' or type like '%情感%' or type like '%爱情%') order by score desc, heat desc limit 9;",
            getHorror: "select * from videos where is_latest = 1 and (type like '%灵异%' or type like '%惊悚%' or type like '%恐怖%') order by score desc, heat desc limit 9;",
            getNature: "select * from videos where is_latest = 1 and (type like '%自然%' or type like '%历史%') order by score desc, heat desc limit 9;",
            getComic: "select * from videos where is_latest = 1 and (type like '%动漫%' or type like '%卡通%') order by score desc, heat desc limit 9;",
        }
    }
}
module.exports = sqlMap;