function tabButton(evt, cityName) {
    var i, tabcontent, tabList;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabList = document.getElementsByClassName("tabList");
    for (i = 0; i < tabList.length; i++) {
        tabList[i].className = tabList[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

