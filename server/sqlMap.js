const sqlMap = {
    //series
    series: {
        getHome: "select video_id, name_cn, video_img, score from videos where is_latest = 1"
    }
}
module.exports = sqlMap;