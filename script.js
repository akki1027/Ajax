API_KEY="9929cfd9cd0b7d391e0ee546fae5785d";

$(function() {

  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    return false;
  });

 });

$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function() {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  return false;
});

$(function(){
  $('#btn').on('click', function(){
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "9929cfd9cd0b7d391e0ee546fae5785d",
        dataType: 'jsonp',

      }).done(function (data){
        // 通信成功
        // 位置
        $('#place').text(data.name);
        // 最高気温
        $('#temp_max').text(data.main.temp_max);
        // 最低気温
        $('#temp_max').text(data.main.temp_min);
        //　湿度
        $('#humidity').text(data.main.humidity);
        //　風速
        $('speed').text(data.wind.speed);
         // 天気
        $('#weather').text(data.weather[0].main);
        // 天気アイコン
        $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        $('img').attr("alt",data.weather[0].main);
      }).fail(function (data){
        // 通信失敗
      });
  });
});