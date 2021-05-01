const sqlMap = {
    // series
    series: {
        getHome: "select video_id,name_cn,video_img,score from videos where is_latest = 1 order by year(date) desc, score desc, heat desc;",
        getPlot: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '剧情|历史|战争' order by year(date) desc, score desc, heat desc;",
        getAction: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '动作|悬疑|犯罪' order by year(date) desc, score desc, heat desc;",
        getFiction: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '魔幻|科幻|奇幻' order by year(date) desc, score desc, heat desc;",
        getLife: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '家庭|校园|喜剧|生活|爱情' order by year(date) desc, score desc, heat desc;",
        getHorror: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '恐怖|惊悚|灵异' order by year(date) desc, score desc, heat desc;",
        getComic: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '动漫|卡通|动画|漫画' order by year(date) desc, score desc, heat desc;",
        recommend: {
            getHome: "select video_id,name_cn,video_img,score from videos where is_latest = 1 order by score desc, heat desc limit 9;",
            getPlot: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '剧情|历史|战争' order by score desc, heat desc limit 9;",
            getAction: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '动作|悬疑|犯罪' order by score desc, heat desc limit 9;",
            getFiction: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '魔幻|科幻|奇幻' order by score desc, heat desc limit 9;",
            getLife: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '家庭|校园|喜剧|生活|爱情' order by score desc, heat desc limit 9;",
            getHorror: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '恐怖|惊悚|灵异' order by score desc, heat desc limit 9;",
            getComic: "select video_id,name_cn,video_img,score from videos where is_latest = 1 and type regexp '动漫|卡通|动画|漫画' order by score desc, heat desc limit 9;",
        },
        getVideo: "select * from videos where video_id = ?;",
    }
}
module.exports = sqlMap;