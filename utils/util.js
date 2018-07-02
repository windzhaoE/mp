const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var formatStar = function(star){
    var stars = star.toString().substr(0,1);
    
    var arr = [];
    for (var i = 0; i < 5;i++){
      if(i<stars){
        arr.push(1);
      }else{
        arr.push(0)
      }
    }
    return arr;
}

module.exports = {
  formatTime: formatTime,
  formatStar: formatStar

}
