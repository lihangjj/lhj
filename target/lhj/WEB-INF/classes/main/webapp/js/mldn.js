// 保存所有的通用操作函数
function validateEmpty(eleName) {	// 验证指定元素内容是否为空
    var obj = document.getElementById(eleName);	// 取得对象
    var msg = document.getElementById(eleName + "Msg");	// 提示信息
    if (obj.value != "") {	// 进行内容的验证
        obj.className = "right";	// 更换使用的样式
        if (msg != null) {
            msg.innerHTML = "<font color='green'>内容输入正确！</font>";
        }
        return true;	// 为以后的综合验证准备
    } else {	// 验证不通过
        obj.className = "wrong";	// 更换使用的样式
        if (msg != null) {
            msg.innerHTML = "<font color='red'>内容不允许为空！</font>";
        }
        return false;	// 为以后的综合验证准备
    }
}

function validateRegex(eleName, regex) {
    var obj = document.getElementById(eleName);	// 取得对象
    var msg = document.getElementById(eleName + "Msg");	// 提示信息
    // obj.value=obj.value.trim();
    obj.value = obj.value.replace(/\s+/g, "");
    if (regex.test(obj.value)) {	// 进行内容的验证
        obj.className = "right";	// 更换使用的样式
        if (msg != null) {
            msg.innerHTML = "<font color='green'>内容输入正确！</font>";
        }
        return true;	// 为以后的综合验证准备
    } else {	// 验证不通过
        obj.className = "wrong";	// 更换使用的样式
        if (msg != null) {
            msg.innerHTML = "<font color='red'>输入内容格式错误！</font>";
        }
        return false;	// 为以后的综合验证准备
    }
}

function validateHisal(losalId, hisalId, regex) {
    var losalEle = document.getElementById(losalId);
    var hisalEle = document.getElementById(hisalId);
    var msg = document.getElementById(hisalId + "Msg");
    if (regex.test(hisalEle.value)) {
        if (parseFloat(losalEle.value) >= parseFloat(hisalEle.value)) {//传来的是字符串，要转换成数字用parseFloat或者parseInt
            hisalEle.className = "wrong";
            msg.style = "color:red";
            msg.innerHTML = "最高工资必须大于最低工资！";
            return false;
        } else {
            hisalEle.className = "right";
            msg.style = "color:green";
            msg.innerHTML = "工资格式正确！";
            return true;
        }
    } else {
        hisalEle.className = "wrong";
        msg.style = "color:red";
        msg.innerHTML = "工资格式为整数或两位小数！";
        return false;
    }
}

function validateAllHisalAndReges(startName1, startName2, validateItem, regex) {
    var a = validateItem.replace("[", "");
    var b = a.replace("]", "");
    var items = b.split(",");
    var flag = true;
    for (var x = 0; x < items.length; x++) {
        if (!validateHisal(startName1 + items[x], startName2 + items[x], regex)) {
            flag = false;
        }
    }
    return flag;
}

function changeColor(obj, color) {	// 负责改变表格显示颜色
    obj.bgColor = color;
}

function checkboxSelect(obj, eleName) {
    var item = document.all(eleName);
    if (item.length == undefined) {	// 表示只有一个元素，不是数组
        document.getElementById(eleName).checked = this.checked;
    } else {
        for (var x = 0; x < item.length; x++) {
            item[x].checked = obj.checked;
        }
    }
}

function selectAll(id, itemsName) {
    var select = document.getElementsByName(itemsName)
    for (var x = 0; x < select.length; x++) {
        select[x].checked = document.getElementById(id).checked;
    }
}

function testN() {
    window.alert("点了啊测试");
}

function updateAll(url, parameterName, element) {
    deleteAll(url, parameterName, element);
}

// url：表示要删除的操作路径
// paramName：表示要传递的参数名称
// eleName：表示要取得数据的ID名称
function deleteAll(url, paramName, eleName) {
    alert("点了");
    var data = "";	// 保存所有要删除的数据编号
    // 但是数据有可能是数组，也有可能只有一个
    var item = document.all(eleName);
    var count = 0;	// 保存要删除的数据个数
    // 要判断是否有要删除的数据
    if (item.length == undefined) {	// 表示只有一个元素，不是数组
        if (document.getElementById(eleName).checked == true) {	// 数据选中
            data += document.getElementById(eleName).value + "18223170162";
            count++;
        }
    } else {
        for (var x = 0; x < item.length; x++) {
            if (item[x].checked == true) {
                count++;
                data += item[x].value + "18223170162";
            }
        }
    }
    if (count > 0) {	// 有要删除的数据
        if (window.confirm("确定要操作这些数据吗？")) {
            // console.log(url + "?" + paramName + "=" + data) ;
            alert(url);
            window.location = url + "?&" + paramName + "=" + data;
        }
    } else {
        alert("您还未选择任何要操作的数据！");
    }
}

function logout(url) {
    if (confirm("您确定要退出控制面板吗？"))
        top.location = url;
    return false;
}

function manualSubmitForm(url, formId) {
    var form = document.getElementById(formId);
    form.action = url;
    form.submit();
}

function openPage(url) {
    window.open(url, "查看详细信息", "width=600;height=500;scollable=yes");
}

function closePage() {
    window.close();
}

function changeCode(obj) {	// 要修改显示的验证码
    obj.src = "/pages/image.jsp?tm=" + Math.random();
}

function goSplit(url, currentPage, lineSize, column, keyWord, parameterName, parameterValue) {
    window.location = url + "?currentPage=" + currentPage + "&lineSize=" + lineSize + "&column=" + column + "&keyWord=" + keyWord + "&" + parameterName + "=" + parameterValue;
}
function goUpdate(url) {
}

function preview(file) {
    var prevDiv = document.getElementById('preview');
    if (file.files && file.files[0]) {
        var reader = new FileReader();
        reader.onload = function (evt) {
            prevDiv.innerHTML = '<img src="' + evt.target.result + '" />';
        };
        reader.readAsDataURL(file.files[0]);
    } else {
        prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
    }
}

function validateInsertGoodsSubmit() {
    return validateEmpty('title')
        && validateEmpty('price')
        && validateRegex('price', /^\d+(\.\d{1,2})?$/)
        && validateEmpty('amount')
        && validateRegex('amount', /^\d+$/);
}

function validateSame(id1, id2) {
    if (document.getElementById(id1).value == document.getElementById(id2).value) {
        document.getElementById(id2 + 'Msg').innerHTML = "内容输入正确！";
        document.getElementById(id2 + 'Msg').style = "color:green";
        return true;
    } else {
        document.getElementById(id2 + 'Msg').innerHTML = "两次密码输入不一致！请重新输入";
        document.getElementById(id2 + 'Msg').style = "color:red";
        return false;


    }
}

function validateAllRegex(startString, validateItem, regex) {
    var a = validateItem.replace("[", "");
    var b = a.replace("]", "");
    var items = b.split(",");
    var flag = true;
    for (var x = 0; x < items.length; x++) {
        if (!validateRegex(startString + items[x], regex)) {
            flag = false;
        }
    }
    return flag;
}

function validateAllNotEmpty(startString, validateItem) {
    var a = validateItem.replace("[", "");
    var b = a.replace("]", "");
    var items = b.split(",");
    var flag = true;

    for (var x = 0; x < items.length; x++) {
        if (!validateEmpty(startString + items[x])) {
            flag = false;
        }
    }
    return flag;
}

function changeSalRange(id, salRangeId) {
    var selectId = document.getElementById(id);
    var sal = selectId.value.split("\-");
    var loasl = sal[0];
    var hisal = sal[1];
    var salRangeEle = document.getElementById(salRangeId);
    salRangeEle.innerHTML = "范围：" + loasl + "-" + hisal;
}