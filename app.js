var userName = prompt ('your name please');
document.write
alert('Hello dear thank you for visit our site');

var timeNow= prompt('please enter the time now');

if(timeNow >= 18){
  document.write('Good Evening');
  document.write('<img src="https://latestnews.fresherslive.com/images/articles/width-900/2020/08/24/good-evening-quotes-5f43b3f880153-1598272504.jpg">');
}else if(timeNow >= 12){
  document.write('Good Afternoon');
  document.write('<img src="https://i0.wp.com/best-images.in/wp-content/uploads/2019/12/8-9.jpg?resize=930%2C620&ssl=1">')
}else if (timeNow >= 0){
  document.write('Good Morning');
  document.write('<img src="https://img.huffingtonpost.com/asset/5e0f68ec2500003b1998fb2e.jpeg?cache=YqiWjN9UVt&ops=crop_34_446_5966_3406%2Cscalefit_720_noupscale">')
}