<html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    request.setCharacterEncoding("utf-8");
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<head>

    <script type="text/javascript" src="/js/mldn.js"></script>
    <script type="text/javascript">

        var xmlHttpRequest;
        window.onload = function () {
            document.getElementById("commit").addEventListener("click", test, false);
        };

        function test() {
            var inp = document.getElementById("input");
            if (inp.value != null || "" != inp.value) {
                createXmlHttpRequest();

                xmlHttpRequest.open("post", "MyServlet?msg=" + inp.value);
                xmlHttpRequest.onreadystatechange = testCallBack;
                xmlHttpRequest.send(null);
            }

        }

        function testCallBack() {
            if (xmlHttpRequest.status == 200) {

                if (xmlHttpRequest.readyState == 2 || xmlHttpRequest.readyState == 3) {
                }
                if (xmlHttpRequest.readyState == 4) {
                    var data = xmlHttpRequest.responseText;
                    document.getElementById("adminMsg").innerHTML = data;
                }
            }else if (xmlHttpRequest.status==404){
                document.getElementById("adminMsg").innerHTML="路径有问题";
            }
        }

        function createXmlHttpRequest() {
            if (window.XMLHttpRequest) {//当前浏览器不是IE浏览器
                xmlHttpRequest = new XMLHttpRequest();//直接实例化xmlHttpRequest对象
            } else {
                xmlHttpRequest = new ActiveXObject("Microsoft.XMLHttp");
            }
        }

        function validateAdmin(){
           var flag=validateEmpty("admin");
           if (flag){
               createXmlHttpRequest();
               xmlHttpRequest.open("post", "/AdminServlet?msg=" + document.getElementById("admin").value);
               xmlHttpRequest.onreadystatechange = testCallBack;
               xmlHttpRequest.send(null);
           }
        }
    </script>
</head>
<body>
<div>

    <form action="AdminServlet">
        账 号：<input type="text" id="admin" name="admin" onblur="validateAdmin()"><span id="adminMsg"></span><br>

        密 码：<input id="password" name="password" type="password"><span id="passwordMsg"></span><br>
        验证码:<input placeholder="验证码" id="code" name="code" type="text"
                   maxLength="4" size="10"
                   onblur="validateRegex(this.id,/^[A-Za-z0-9]{4}$/)"><span id="codeMsg"></span>
        <img class="" src="/pages/image.jsp" onclick="changeCode(this)">

    </form>

</div>
</body>
</html>
