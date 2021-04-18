var sqlMap = {
    //series
    series: {
        get: 'select *, year(date) as year from videos'
    }
}
module.exports = sqlMap;