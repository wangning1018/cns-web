function apply() {
    var flag = check();

    var placeName = $('#placeName').val();

    if (flag) {

        var is = confirm("您将申请成为"+placeName +"的导游，我们会尽最大努力保护您的个人隐私，点击【确定】意味着您同意您的姓名和QQ号码将被展示在地点详情页面！");

        if (is == true) {
            var url = '/access/apply';

            var param = {
                imgUrl: $("#headImg").attr("src"),
                name: $("#name").val(),
                gender: $("#gender").val(),
                qq: $("#qq").val(),
                email: $("#email").val(),
                remark: $("#remark").val(),
                studentID: $("#studentID").val(),
                placeId : $('#placeId').val()
            }

            callServiceJson("POST",url, JSON.stringify(param), function (res) {
                if (res.state == 0000) {
                    var flag = confirm("申请成功，请您耐心等待审核！");
                    if(flag == true){
                        self.location=document.referrer;
                    }
                } else {
                    alert(res.data);
                }
            })
        }
    }
}

function check() {
    var name = $('#name').val();

    var gender = $('#gender').val();

    var qq = $('#qq').val();

    if (name == "" || name == null) {
        alert("姓名不能为空！")
        return false;
    }

    if (gender == "" || gender == null) {
        alert("性别不能为空！")
        return false;
    }

    if (qq == "" || qq == null) {
        alert("QQ号码不能为空！")
        return false;
    }
    return true;
}

function clear() {
        $("#name").val("");
        $("#gender").val("");
        $("#qq").val("");
        $("#email").val("");
        $("#remark").val("");
        $("#studentID").val("");
}